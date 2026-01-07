#!/bin/bash
#================================================================
# Set folder variable
projworkspace="/cygdrive/d/pa5478_FAE/"
serverspacebuild="/cygdrive/d/xampp/htdocs/Pra_tool/assets/build_status/"
serverspacedownload="/cygdrive/d/xampp/htdocs/Pra_tool/download/"
#================================================================
PATH=/usr/local/bin:/usr/bin:/cygdrive/c/Program\ Files/Git/bin:/cygdrive/d/Andestech/AndeSight_STD_v322/toolchains/nds32le-elf-mculib-v3m/bin
export PATH

#cd /cygdrive/d/xampp/htdocs/Pra_tool/assets/build_status/
cd ${serverspacebuild}

export IFS=","
json_file=$(cat build_json.json | sed 's/^{\(.*\)}$/\1/g')
#echo $json_file

# 192 or 193
cat build_json.json | grep HX83193
ret=$?
if [[ $ret -ne 0 ]];then
	# fail --> 192
	tpinitfile="192C_Sample_tp_initial_code_211223.h"
	ddromcode="PA5478up2_cut4_v0_20210204.h"
else
	tpinitfile="193A_Cut3_Sample_tp_initial_code_220103.h"
	ddromcode="PA5486up2_cut3_v0_20210401.h"
fi

#cd /cygdrive/d/Touch_Study/pa5478/pa5478/
cd ${projworkspace}

git reset --hard HEAD

matchstr="oemadded_"
matchtpinit="oemtpinit_"
matchcfg="oemcfg_"
matchic="oemic_"
icsign="IC_SIGN_2"
ddinitfile="192C_Sample_dd_initial_code_220602.h"
m_tpinit=""
m_cfg=""
create_panel="#if 1 \n"

for item in $json_file;do
	#echo $item
	#Get Name & value
	funcname=$(echo $item | cut -d ':' -f 1 | sed 's/^"\(.*\)"$/\1/g')
	funcvalue=$(echo $item | cut -d ':' -f 2 | sed 's/^"\(.*\)"$/\1/g')

	echo $funcname is $funcvalue
	if [[ $funcvalue =~ ^$matchstr ]];then
		#remove oem_added
		funcvalue=$(echo $funcvalue | sed "s/$matchstr//")
		#created new define
		create_panel+="#define ${funcname}          ${funcvalue}\n"
	elif [[ $funcvalue =~ ^$matchtpinit ]];then
		# remove oemtpinit_
		funcvalue=$(echo $funcvalue | sed "s/$matchtpinit//")
		sed -i "s/\.${funcname}[\t\n ]\{1,\}.*/\.${funcname}			= ${funcvalue},/g" ./com_include/tp_initial_code/$tpinitfile

	elif [[ $funcvalue =~ ^$matchcfg ]];then
		# remove oemcfg_
		funcvalue=$(echo $funcvalue | sed "s/$matchcfg//")
		sed -i "s/UINT8[\t ]${funcname}.*/UINT8 ${funcname}\[12\]			__attribute__((section(\".tp_hw_config_0\"), aligned(1))) = {\"$funcvalue\"};/" ./app/C_CFG_INITIAL.c
	elif [[ $funcvalue =~ ^$matchic ]];then
		if [[ $funcvalue == *"193"* ]];then
			ic=193
			sed -i "s/builtIn=\"false\" value=\"PA5486_DEV\"/builtIn=\"true\" value=\"PA5486_DEV\"/g" ./.cproject
		else
			ic=192
		fi
	else
		if [[ $funcname =~ ^$icsign ]];then
			sed -i "s/^#define[\t ]${funcname}[\t ].*/#define ${funcname}						\"${funcvalue}\"/g" ./com_include/CONFIG_TOUCH.h
		else
			# replace
			sed -i "s/^#define[\t ]${funcname}[\t ].*/#define ${funcname}						${funcvalue}/" ./com_include/CONFIG_TOUCH.h
		fi
	fi
done

create_panel+="#endif"
#echo $create_panel
sed -i "/^#define[\t ]EMI_IDLE_MODE.*/a ${create_panel}" ./com_include/CONFIG_TOUCH.h

# Turn off other panels
sline=`sed -n '/LCM Initial Code/=' ./com_include/CONFIG_TOUCH.h`
eline=`sed -n '/Module Related Setting/=' ./com_include/CONFIG_TOUCH.h`
sed -i "${sline},${eline}s/\(.*\)/\/\/\1/g" ./com_include/CONFIG_TOUCH.h

# Insert Panel tp/dd init and dd rom code
tpddinit='#if 1 \n#include "'${ddromcode}'"\n#include "'${ddinitfile}'"\n#include "'${tpinitfile}'"\n#endif'
sed -i "/^#include[\t ]\"himax_reload_cmd.h\"/a ${tpddinit}" ./app/C_CFG_INITIAL.c

# Copy dd init code===============================
cp ${serverspacebuild}build_dd_init ./com_include/dd_initial_code/${ddinitfile}

# Modify tp init========================================================
sed -i 's/["\\n\\t]\{1,\}//g' ${serverspacebuild}build_tp_init_txrx

if [ -s ${serverspacebuild}build_tp_init_txrx ]; then
	#echo not empty
	# Modify tp tsram mapping
	#=======================================================================
	export IFS=$'\n'
	sstart=$(sed -n '/SELF_TEST_V2_MAPPING/=' ./com_include/tp_initial_code/${tpinitfile} | head -n1)
	sitem=$(sed -n '/#endif/=' ./com_include/tp_initial_code/${tpinitfile})

	for sword in $sitem;do
		#echo $sword
		if [[ $sword -gt $sstart ]];then
			sendline=$sword	
			break
		fi
	done

	((sstart++))
	sendline=$((sendline-1))
	# delete original self test tsram
	sed  -i "${sstart},${sendline} d" ./com_include/tp_initial_code/${tpinitfile}
	# insert modified self test tsram
	tresult=$(cat ${serverspacebuild}build_tp_init_self_tsram | sed 's/"[\\n\\t]\{1,\}//' |sed 's/"//g')
	sed -i "${sstart} i ${tresult}" ./com_include/tp_initial_code/${tpinitfile}
	#=======================================================================
	# Modify tp tx/rx mapping
	sstart=$(sed -n '/Cfg_mapping_table_flash/=' ./com_include/tp_initial_code/${tpinitfile} | tail -n1)
	sitem=$(sed -n '/};/=' ./com_include/tp_initial_code/${tpinitfile})

	for sword in $sitem;do
		#echo $sword
		if [[ $sword -gt $sstart ]];then
			sendline=$sword	
			break
		fi
	done
	# skip {
	sstart=$((sstart+3))
	sendline=$((sendline-1))
	# delete original mapping
	sed  -i "${sstart},${sendline} d" ./com_include/tp_initial_code/${tpinitfile}
	# Insert modified mapping
	tresult=$(cat ${serverspacebuild}build_tp_init_txrx | sed 's/[\\n\\t]\{1,\}//')
	sed -i "${sstart} i ${tresult}" ./com_include/tp_initial_code/${tpinitfile}
	#=======================================================================
	# Modify tp adc mapping
	sstart=$(sed -n '/Cfg_adc_en/=' ./com_include/tp_initial_code/${tpinitfile})
	sitem=$(sed -n '/};/=' ./com_include/tp_initial_code/${tpinitfile})

	for sword in $sitem;do
		#echo $sword
		if [[ $sword -gt $sstart ]];then
			sendline=$sword	
			break
		fi
	done
	# skip {
	sstart=$((sstart+2))
	sendline=$((sendline-1))
	# delete original self test adc mapping
	sed  -i "${sstart},${sendline} d" ./com_include/tp_initial_code/${tpinitfile}
	# insert modified self test adc mapping
	tresult=$(cat ${serverspacebuild}build_tp_init_self_adc | sed 's/"[\\n\\t]\{1,\}//' | sed 's/"//g')
	sed -i "${sstart} i ${tresult}" ./com_include/tp_initial_code/${tpinitfile}
else
	echo empty of tx/rx
fi

#=======================================================================
echo "*******************************************"
#echo $ic
#########################################################
### Build Start #########################################
#########################################################
if [[ $ic == 193 ]];then
	cd ${projworkspace}Debug_PA5486
else
	cd ${projworkspace}Debug
fi
echo "*******************************************"
make clean

make all


ret=$?
#echo $ret

buildtarget=${serverspacebuild}build_results

if	[[ $ret -ne 0 ]];then
	echo "build fail \a \n"
	echo 0 > $buildtarget

else
	cd ./output
	#host_name=`hostname`
	#user_id=`whoami`
	timestampp=`date +%Y_%m_%d_%H_%M_%S`
	#timestampp=${timestamp_tmp}_${use_id}_${host_name}
	newbin=`ls -t *.bin | head -n1`
	#get hostname / user ID
	targetfolder=${serverspacedownload}$timestampp
	mkdir $targetfolder
	cp $newbin ${targetfolder}/${timestampp}_$newbin
	cp ../../com_include/CONFIG_TOUCH.h ${targetfolder}/${timestampp}_CONFIG_TOUCH.h
	cp ../../com_include/tp_initial_code/${tpinitfile} ${targetfolder}/${timestampp}_${tpinitfile}
	cp ../../com_include/dd_initial_code/${ddinitfile} ${targetfolder}/${timestampp}_${ddinitfile}
	cp ./symbol.txt ${targetfolder}/${timestampp}_symbol.txt

	echo $timestampp > $buildtarget

	echo -e "Complete! \a \n"
	#git reset --hard HEAD
fi

echo $ret > ${serverspacebuild}build_status
