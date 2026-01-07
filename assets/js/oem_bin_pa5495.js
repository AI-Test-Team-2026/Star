var MPA5495_mem_sag = [
	{
		"name": "header",
		"start_address": "0x0000",
		"size": "0x400"
	},
	{
		"name": "BOOTLOADER",
		"start_address": "0x400",
		"size": "0x2000"
	},
	{
		"name": "ISRAM_CODE",
		"start_address": "0x2400",
		"size": "0x0193FC"
	},
	{
		"name": "tp_tcon_init",
		"start_address": "0x1B7FC",
		"size": "0x004804"
	},
	{
		"name": "tp_config_table",
		"start_address": "0x20400",
		"size": "0x00001000"
	},
	{
		"name": "tp_hw_config",
		"start_address": "0x21400",
		"size": "0x000C00"
	},
	{
		"name": "tp_tcon_description",
		"start_address": "0x022000",
		"size": "0x000100"
	},
	{
		"name": "tp_adc_mapping",
		"start_address": "0x022100",
		"size": "0x000D84"
	},
	{
		"name": "tp_p2p_table",
		"start_address": "0x022E84",
		"size": "0x000800"
	},
	{
		"name": "tp_version_table",
		"start_address": "0x03CC00",
		"size": "0x400"
	},
	{
		"name": "dd_rom2",
		"start_address": "0x0003D000",
		"size": "0x002000"
	},
	{
		"name": "tp_reload_cmd",
		"start_address": "0x0003F000",
		"size": "0x000400"
	}
];

var Tcon_Script_Table_Json = {
	"cycle": [
		{
			"name": "F0",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0
		},
		{
			"name": "F1",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0			
		},
		{
			"name": "LPWUG_ACTIVE",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0			
		},
		{
			"name": "LPWUG_IDLE",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0			
		},
		{
			"name": "Normal_Idle",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0			
		},
		{
			"name": "F0_RN_YINOFF",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0			
		},
		{
			"name": "F1_RN_YINOFF",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0			
		},
		{
			"name": "WOT_IDLE_60HZ",
			"start_address": "",
			"a_valid_script_word": 0,
			"group_num": 0,
			"ac": 0,
			"dc": 0			
		}
	],
	"cycle_total_word": 0,
	"ac":{
		"start_address": "",
		"a_valid_script_word": 0,
		"group_num": 0,
		"total_word": 0
	},
	"dc": {
		"start_address": "",
		"a_valid_script_word": 0,
		"group_num": 0,
		"total_word": 0
	}
};

var HX_ic_sel;
var Hx_master_ver;

function Fillout_ALG(){
	var i = 0;
	var s_tablename = ['.5478_sram_alg', '.tp_sample_alg'];
	
	for(i = 0; i< s_tablename.length; i++){
		Pasrse_ALG_Oem(s_tablename[i]);
	}
}

function Pasrse_ALG_Oem(s_tablename){
	var ori = 0;
	var res, tmp, res_h;
	var toyota_en = 0;
	//===========================================================
	//===========================================================
	//===========================================================
	//=================================================================
	// Switch===========================================================
	res = parseInt($(s_tablename+'[rfeh="2"]').text(), 16); // RFEH_02
	$(s_tablename+'_val_rfeh_2[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_2[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_2[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_2[bit="3"]').text(((res >> 3) & 0x01));
	$(s_tablename+'_val_rfeh_2[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_2[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_2[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_2[bit="7"]').text(((res >> 7) & 0x01));
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="3"]').text(), 16); // RFEH_03
	$(s_tablename+'_val_rfeh_3[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_3[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_3[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_3[bit="3"]').text(((res >> 3) & 0x01));
	$(s_tablename+'_val_rfeh_3[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_3[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_3[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_3[bit="7"]').text(((res >> 7) & 0x01));
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="4"]').text(), 16); // RFEH_04
	$(s_tablename+'_val_rfeh_4[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_4[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_4[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_4[bit="3"]').text(((res >> 3) & 0x01));
	$(s_tablename+'_val_rfeh_4[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_4[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_4[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_4[bit="7"]').text(((res >> 7) & 0x01));
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="73"]').text(), 16); // RFEH_73
	$(s_tablename+'_val_rfeh_73[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="7"]').text(((res >> 7) & 0x01));
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="74"]').text(), 16); // RFEH_74
	$(s_tablename+'_val_rfeh_74[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_74[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_74[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_74[bit="3"]').text(((res >> 3) & 0x01));
	$(s_tablename+'_val_rfeh_74[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_74[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_74[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_74[bit="7"]').text(((res >> 7) & 0x01));
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="ad"]').text(), 16); // RFEH_ad
	$(s_tablename+'_val_rfeh_ad[bit="0"]').text((res & 0x01)); 
	$(s_tablename+'_val_rfeh_ad[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_ad[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_ad[bit="3"]').text(((res >> 3) & 0x01));
	$(s_tablename+'_val_rfeh_ad[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_ad[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_ad[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_ad[bit="7"]').text(((res >> 7) & 0x01));

	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="af"]').text(), 16); // RFEH_af
	$(s_tablename+'_val_rfeh_af[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_af[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_af[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_af[bit="3"]').text(((res >> 3) & 0x01));
	$(s_tablename+'_val_rfeh_af[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_af[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_af[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_af[bit="7"]').text(((res >> 7) & 0x01));

	toyota_en = (res & 0x60);
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="b0"]').text(), 16); // RFEH_b0
	$(s_tablename+'_val_rfeh_b0[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_b0[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_b0[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_b0[bit="3"]').text(((res >> 3) & 0x01));
	$(s_tablename+'_val_rfeh_b0[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_b0[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_b0[bit="6"]').text(((res >> 6) & 0x01));
	//$(s_tablename+'_val_rfeh_b0[bit="7"]').text(((res >> 7) & 0x01));
	
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="b1"]').text(), 16); // RFEH_b1
	$(s_tablename+'_val_rfeh_b1[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_b1[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_b1[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_b1[bit="3"]').text(((res >> 3) & 0x01));
	//$(s_tablename+'_val_rfeh_b1[bit="4"]').text(((res >> 4) & 0x01));
	//$(s_tablename+'_val_rfeh_b1[bit="5"]').text(((res >> 5) & 0x01));
	//$(s_tablename+'_val_rfeh_b1[bit="6"]').text(((res >> 6) & 0x01));
	//$(s_tablename+'_val_rfeh_b1[bit="7"]').text(((res >> 7) & 0x01));
	//=======================================================
	//=======================================================
	res = parseInt($(s_tablename+'[rfeh="f"]').text(), 16); // RFEH_0F
	var delta_scale = (res >> 4)&0x0F;
	var rawdata_scale = (res & 0x0F);
	
	if(delta_scale == 0){
		delta_scale = 1;
	}
	if(rawdata_scale == 0){
		rawdata_scale = 1;
	}
	
	$(s_tablename+'_val[name="raw_downscale"]').text(rawdata_scale);
	$(s_tablename+'_val[name="delta_scale"]').text(delta_scale);
	
	res = parseInt($(s_tablename+'[rfeh="15"]').text(), 16); // RFEH_15
	var cc_scale = (res & 0x0F);
	if(cc_scale == 0){
		cc_scale = 1;
	}
	//console.log(cc_scale);
	// Data process==============================================
	res = parseInt($(s_tablename+'[rfeh="3e"]').text(), 16); // RFEH_3e
	$(s_tablename+'_val[name="startup_frm"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="42"]').text(), 16); // RFEH_42
	$(s_tablename+'_val[name="startup_cc"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="3f"]').text(), 16); // RFEH_3F
	$(s_tablename+'_val[name="sleep_out_cc"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="d2"]').text(), 16); // RFEH_D2
	$(s_tablename+'_val[name="hopping_cc"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="b5"]').text(), 16); // RFEH_B5
	$(s_tablename+'_val[name="glove_cc"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="d3"]').text(), 16); // RFEH_D3
	$(s_tablename+'_val[name="noise_cc"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="c9"]').text(), 16); // RFEH_c9
	$(s_tablename+'_val[name="hopping_noise_cc"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="40"]').text(), 16); // RFEH_40
	$(s_tablename+'_val[name="lpwug_cc"]').text(res*cc_scale);
	
	res = parseInt($(s_tablename+'[rfeh="47"]').text(), 16); // RFEH_47
	$(s_tablename+'_val[name="co_axis_div_ac"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="49"]').text(), 16); // RFEH_49
	$(s_tablename+'_val[name="co_axis_div_bending"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="46"]').text(), 16); // RFEH_46
	$(s_tablename+'_val[name="co_axis_div"]').text(res);
	
	//=======================================================
	//=======================================================
	res = parseInt($(s_tablename+'[rfeh="9"]').text(), 16); // RFEH_09
	$(s_tablename+'_val[name="mut_thpx_nor"]').text(res*delta_scale);
	
	res = parseInt($(s_tablename+'[rfeh="a"]').text(), 16); // RFEH_0A
	$(s_tablename+'_val[name="mut_thpx_lgd"]').text(res*delta_scale);
		
	res = parseInt($(s_tablename+'[rfeh="b2"]').text(), 16); // RFEH_b2
	$(s_tablename+'_val[name="glove_thpx"]').text(res);
	
	//res = parseInt($(s_tablename+'[rfeh="d"]').text(), 16); // RFEH_0D
	//$(s_tablename+'_val[name="lpwug_active_thpx"]').text(res*delta_scale);
	
	res_h =  parseInt($(s_tablename+'[rfeh="19"]').text(), 16); // RFEH_19
	$(s_tablename+'_val[name="normal_idle_thpx"]').text(res_h*delta_scale);
	
	// Enter Leave..............
	res = parseInt($(s_tablename+'[rfeh="2c"]').text(), 16); // RFEH_2C 
	$(s_tablename+'_val[name="pt_ent_num_sleepout"]').text((res & 0x0F)); 
	$(s_tablename+'_val[name="pt_ent_num_noise"]').text((res >> 4)&0x0F);
	
	res = parseInt($(s_tablename+'[rfeh="2e"]').text(), 16); // RFEH_2E
	$(s_tablename+'_val[name="pt_ent_num_sleepin"]').text((res&0x0F));
	
	res = parseInt($(s_tablename+'[rfeh="b7"]').text(), 16); // RFEH_B7
	$(s_tablename+'_val[name="pt_ent_num_glove"]').text(((res&0xF0)>> 4));
	$(s_tablename+'_val[name="pt_lev_num_glove"]').text((res & 0x0F));
	
	res = parseInt($(s_tablename+'[rfeh="2d"]').text(), 16); // RFEH_2D
	$(s_tablename+'_val[name="pt_lev_num_normal"]').text((res & 0x0F));
	$(s_tablename+'_val[name="pt_lev_num_lgd"]').text((res >> 4));
	$(s_tablename+'_val[name="pt_lev_num_glove2"]').text((res & 0x0F));
	$(s_tablename+'_val[name="pt_lev_num_noise"]').text((res & 0x0F)+2);
	
	res = parseInt($(s_tablename+'[rfeh="5b"]').text(), 16); // RFEH_5B
	$(s_tablename+'_val[name="pt_ent_num_2nd"]').text((res & 0x0F));
	
	// Weigh point====================================================
	res = parseInt($(s_tablename+'[rfeh="17"]').text(), 16); // RFEH_17
	$(s_tablename+'_val[name="weg_thpx_1st_nor"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="16"]').text(), 16); // RFEH_16
	$(s_tablename+'_val[name="weg_thpx_1st_lgd"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="10"]').text(), 16); // RFEH_10
	$(s_tablename+'_val[name="weg_thpx_1st_noise_add"]').text(rawdata_scale*res);
	
	res = parseInt($(s_tablename+'[rfeh="82"]').text(), 16); // RFEH_82
	$(s_tablename+'_val[name="weg_thpx_1st_still"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="11"]').text(), 16); // RFEH_11
	$(s_tablename+'_val[name="weg_thpx_1st_area1_add"]').text((res&0x7F)*rawdata_scale);
	if(res&0x80){
		$(s_tablename+'_val[name="area0_add_minus"]').text('minus');
	}
	else{
		$(s_tablename+'_val[name="area0_add_minus"]').text('add');
	}
	
	res = parseInt($(s_tablename+'[rfeh="12"]').text(), 16); // RFEH_12
	$(s_tablename+'_val[name="weg_thpx_1st_area2_add"]').text((res&0x7F)*rawdata_scale);
	if(res&0x80){
		$(s_tablename+'_val[name="area2_add_minus"]').text('minus');
	}
	else{
		$(s_tablename+'_val[name="area2_add_minus"]').text('add');
	}
	
	res = parseInt($(s_tablename+'[rfeh="7a"]').text(), 16); // RFEH_7a
	$(s_tablename+'_val[name="weg_thpx_2nd_lgd"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="7b"]').text(), 16); // RFEH_7b
	$(s_tablename+'_val[name="weg_thpx_2nd_nor"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="b4"]').text(), 16); // RFEH_b4
	
	$(s_tablename+'_val[name="glove_weg_thpx_ent"]').text(res);	
	$(s_tablename+'_val[name="glove_weg_thpx_ent_2nd"]').text(res);
	$(s_tablename+'_val[name="glove_weg_thpx_ent_3rd"]').text(res);
	$('.glove_weg_ccc').text("(Rfeh[0xB4])");
	
	
	res = parseInt($(s_tablename+'[rfeh="7d"]').text(), 16); // RFEH_7D
	$(s_tablename+'_val[name="weg_thpx_2nd_noise_add"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="7e"]').text(), 16); // RFEH_7e
	$(s_tablename+'_val[name="weg_thpx_3rd_lgd"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="7f"]').text(), 16); // RFEH_7f
	$(s_tablename+'_val[name="weg_thpx_3rd_nor"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="81"]').text(), 16); // RFEH_81
	$(s_tablename+'_val[name="weg_thpx_3rd_noise_add"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="13"]').text(), 16); // RFEH_13
	$(s_tablename+'_val[name="weg_rx_area_1"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="14"]').text(), 16); // RFEH_14
	$(s_tablename+'_val[name="weg_rx_area_2"]').text(res);	
	
	res = parseInt($(s_tablename+'[rfeh="83"]').text(), 16); // RFEH_83
	$(s_tablename+'_val[name="weg_dec_thx"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="84"]').text(), 16); // RFEH_84
	$(s_tablename+'_val[name="weg_dec_ratio"]').text(res);	
	
	// CCL===============================================================
	res = parseInt($(s_tablename+'[rfeh="32"]').text(), 16); // RFEH_32
	$(s_tablename+'_val[name="mut_ccl_ord_s_cps"]').text((res & 0x0F)*rawdata_scale);
	$(s_tablename+'_val[name="mut_ccl_ord_s_dps"]').text((res >> 4)*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="34"]').text(), 16); // RFEH_34
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_l_cps"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="35"]').text(), 16); // RFEH_35
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_l_dps"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="30"]').text(), 16); // RFEH_30
	$(s_tablename+'_val[name="mut_ccl_ord_l"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="31"]').text(), 16); // RFEH_31
	$(s_tablename+'_val[name="mut_ccl_ord_d"]').text(res*rawdata_scale);	
	
	//Baseline============================================================
	res = parseInt($(s_tablename+'[rfeh="6b"]').text(), 16); // RFEH_6B
	$(s_tablename+'_val[name="bs_delay_frame_recal"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="6d"]').text(), 16); // RFEH_6d
	$(s_tablename+'_val[name="bs_delay_frame_lpwug"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="6f"]').text(), 16); // RFEH_6f
	$(s_tablename+'_val[name="bs_delay_frame"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="6e"]').text(), 16); // RFEH_6e
	$(s_tablename+'_val[name="bnk_seh_lat"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="6c"]').text(), 16); // RFEH_6c
	$(s_tablename+'_val[name="bnk_seh_lat_lpwug"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="37"]').text(), 16); // RFEH_37
	$(s_tablename+'_val[name="bas_udt_tm"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="36"]').text(), 16); // RFEH_36
	$(s_tablename+'_val[name="recal_tm"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="66"]').text(), 16); // RFEH_66
	$(s_tablename+'_val[name="mkey_addr_0"]').text(res&0x7F);	
	
	res = parseInt($(s_tablename+'[rfeh="6a"]').text(), 16); // RFEH_6a
	$(s_tablename+'_val[name="f0_bnk_lmt_rng"]').text(res*2);
	
	res = parseInt($(s_tablename+'[rfeh="69"]').text(), 16); // RFEH_69
	$(s_tablename+'_val[name="f1_bnk_lmt_rng"]').text(res*2);
	
	res = parseInt($(s_tablename+'[rfeh="68"]').text(), 16); // RFEH_68
	$(s_tablename+'_val[name="bank_search_extend_ratio"]').text(res);

	// Average Coord=====================================================
	res = parseInt($(s_tablename+'[rfeh="22"]').text(), 16); // RFEH_22
	$(s_tablename+'_val[name^="avg_dyc_iir_"]').text(((res&0xF0) | 0x0F));
	$(s_tablename+'_val[name="avg_dyc_iir"]').text(((res&0x0F)<<3));

	res = parseInt($(s_tablename+'[rfeh="21"]').text(), 16); // RFEH_21
	$(s_tablename+'_val[name^="avg_ord_fir_"]').text((res >> 4));
	$(s_tablename+'_val[name="avg_ord_fir"]').text((res & 0x0F));
	
	res = parseInt($(s_tablename+'[rfeh="1b"]').text(), 16); // RFEH_1B
	$(s_tablename+'_val[name="moving_jitter_x"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="1c"]').text(), 16); // RFEH_1C
	$(s_tablename+'_val[name="moving_jitter_y"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="1f"]').text(), 16); // RFEH_1F
	$(s_tablename+'_val[name="avg_jit"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="20"]').text(), 16); // RFEH_20
	$(s_tablename+'_val[name="avg_dst"]').text(res);

	res = parseInt($(s_tablename+'[rfeh="4c"]').text(), 16); // RFEH_4C
	$(s_tablename+'_val[name="big_area_jitter"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="4b"]').text(), 16); // RFEH_4B
	$(s_tablename+'_val[name="noise_jitter"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="14a"]').text(), 16); // RFEH_14a
	$(s_tablename+'_val[name="precision_x"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="14b"]').text(), 16); // RFEH_14b
	$(s_tablename+'_val[name="precision_y"]').text(res);
	
	//Finger Sep ========================================================
	res = parseInt($(s_tablename+'[rfeh="33"]').text(), 16); // RFEH_33
	$(s_tablename+'_val[name="mut_ccl_dis"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="160"]').text(), 16); // RFEH_160
	$(s_tablename+'_val[name="finger_debounce_lgd_enter"]').text((res&0x0F));
	$(s_tablename+'_val[name="finger_debounce_lgd_leave"]').text(((res&0xF0)>>4));	
	
	res = parseInt($(s_tablename+'[rfeh="161"]').text(), 16); // RFEH_161
	$(s_tablename+'_val[name="finger_debounce_nor_enter"]').text((res&0x0F));
	$(s_tablename+'_val[name="finger_debounce_nor_leave"]').text(((res&0xF0)>>4));	

	/*res = parseInt($(s_tablename+'[rfeh="32"]').text(), 16); // RFEH_32
	$(s_tablename+'_val[name="fs_mut_ccl_ord_s_dps"]').text(((res>>4)*10));
	$(s_tablename+'_val[name="fs_mut_ccl_ord_s_cps"]').text(((res&0x0F)*10));*/
	
	// Palm==============================================================
	res = parseInt($(s_tablename+'[rfeh="26"]').text(), 16); // RFEH_26
	$(s_tablename+'_val[name="mut_rej_blk_lgd"]').text(res);		

	res = parseInt($(s_tablename+'[rfeh="24"]').text(), 16); // RFEH_24
	$(s_tablename+'_val[name="mut_rej_blk"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="25"]').text(), 16); // RFEH_25
	$(s_tablename+'_val[name="mut_palm_blk"]').text(res);

	res = parseInt($(s_tablename+'[rfeh="27"]').text(), 16); // RFEH_27
	$(s_tablename+'_val[name="mut_palm_blk_lg"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="b6"]').text(), 16); // RFEH_b6
	$(s_tablename+'_val[name="glove_palm_blk"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="23"]').text(), 16); // RFEH_23
	$(s_tablename+'_val[name="mut_plam_frame"]').text((res*10));
	
	//Glove==============================================================
	res = parseInt($(s_tablename+'[rfeh="b8"]').text(), 16); // RFEH_b8
	$(s_tablename+'_val[name="glove_ent_sel_enter"]').text((res&0x0F)+1);
	$(s_tablename+'_val[name="hsm_ent_typ"]').text((res>>4)&0x0F);

	res = parseInt($(s_tablename+'[rfeh="b9"]').text(), 16); // RFEH_b9
	$(s_tablename+'_val[name="glove_ent_ulmt"]').text(2*res);	

	res = parseInt($(s_tablename+'[rfeh="ba"]').text(), 16); // RFEH_ba
	$(s_tablename+'_val[name="glove_ent_dlmt"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="bb"]').text(), 16); // RFEH_bb
	$(s_tablename+'_val[name="glove_ent_fng_lev_tm"]').text(res*10);	

	res = parseInt($(s_tablename+'[rfeh="bc"]').text(), 16); // RFEH_bc
	$(s_tablename+'_val[name="glove_ent_bd_tx"]').text(res & 0x0F);	
	$(s_tablename+'_val[name="glove_ent_bd_rx"]').text((res >> 4) & 0x0F);

	res = parseInt($(s_tablename+'[rfeh="bd"]').text(), 16); // RFEH_bd
	
	$(s_tablename+'_val[name="glove_ent_weg_thx"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="bf"]').text(), 16); // RFEH_bf
	$(s_tablename+'_val[name="glove_lev_mod_frm"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="b3"]').text(), 16); // RFEH_b3
	$(s_tablename+'_val[name="glove_key_thx"]').text(res);

	//Noise/Hopping======================================================
	res = parseInt($(s_tablename+'[rfeh="c6"]').text(), 16); // RFEH_c6
	$(s_tablename+'_val[name="noise_sum_shift"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="ca"]').text(), 16); // RFEH_ca
	$(s_tablename+'_val[name="hopping_thx"]').text(res*100);	

	res = parseInt($(s_tablename+'[rfeh="cb"]').text(), 16); // RFEH_cb
	$(s_tablename+'_val[name="hopping_thx_f1"]').text(res*100);	

	res = parseInt($(s_tablename+'[rfeh="cc"]').text(), 16); // RFEH_cc
	$(s_tablename+'_val[name="enter_noise_thx"]').text(res*100);
	
	res = parseInt($(s_tablename+'[rfeh="cd"]').text(), 16); // RFEH_cd
	$(s_tablename+'_val[name="enter_noise_thx_f1"]').text(res*100);		

	res = parseInt($(s_tablename+'[rfeh="ce"]').text(), 16); // RFEH_ce
	$(s_tablename+'_val[name="exit_noise_frm"]').text(res);	
	
	res = parseInt($(s_tablename+'[rfeh="d0"]').text(), 16); // RFEH_d0
	$(s_tablename+'_val[name="hopping_bl_update_frm"]').text(res);	
	
	res = parseInt($(s_tablename+'[rfeh="4a"]').text(), 16); // RFEH_4A
	$(s_tablename+'_val[name="hopping_another_delay"]').text(res);	

	// Recal=============================================================
	res = parseInt($(s_tablename+'[rfeh="c"]').text(), 16); // RFEH_0c
	$(s_tablename+'_val[name="recal_thpx"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="75"]').text(), 16); // RFEH_75
	$(s_tablename+'_val[name="mut_null_blk"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="52"]').text(), 16); // RFEH_52
	$(s_tablename+'_val[name="quit_idle_base_diff"]').text(res*10);	
	
	//Tapping============================================================
	res = parseInt($(s_tablename+'[rfeh="1e"]').text(), 16); // RFEH_1E
	$(s_tablename+'_val[name="tap_dis_pr_low"]').text(res&0x0F);
	$(s_tablename+'_val[name="tap_dis_pr_high"]').text(res>>4);
	
	res = parseInt($(s_tablename+'[rfeh="1d"]').text(), 16); // RFEH_1D
	$(s_tablename+'_val[name="tap_const_frm"]').text(res>>4);
	//Tsix===============================================================
	//res = parseInt($(s_tablename+'[rfeh="50"]').text(), 16); // RFEH_50
	//$(s_tablename+'_val[name="sw_tsix_low_period"]').text(res*10);

	res = parseInt($(s_tablename+'[rfeh="51"]').text(), 16); // RFEH_51
	$(s_tablename+'_val[name="sw_tsix_delay_frame"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="3"]').text(), 16); // RFEH_03
	if((res&0x01) == 1){
		$(s_tablename+'_val[name="sw_tsix_en_parse"]').text("Edge Trigger");
	}
	else{
		$(s_tablename+'_val[name="sw_tsix_en_parse"]').text("Level Trigger");
	}
	// Queue===============================================================
	res = parseInt($(s_tablename+'[rfeh="5"]').text(), 16); // RFEH_05
	$(s_tablename+'_val[name="que_osc_sel"]').text((res >> 4)&0x0F);
	
	res = parseInt($(s_tablename+'[rfeh="29"]').text(), 16); // RFEH_29
	$(s_tablename+'_val[name="fig_siz_set"]').text((res >> 4)&0x0F);
	// ================================================================
	// Rawdata normalize
	res = parseInt($(s_tablename+'[rfeh="d4"]').text(), 16); // RFEH_d4
	res_h = parseInt($(s_tablename+'[rfeh="d5"]').text(), 16); // RFEH_d5
	$(s_tablename+'_val[name="rawdata_normalized_f0"]').text(((res_h*256) + res));
	
	res = parseInt($(s_tablename+'[rfeh="d6"]').text(), 16); // RFEH_d4
	res_h = parseInt($(s_tablename+'[rfeh="d7"]').text(), 16); // RFEH_d5
	$(s_tablename+'_val[name="rawdata_normalized_f1"]').text(((res_h*256) + res));
	// ================================================================
	// Self test
	res = parseInt($(s_tablename+'[rfeh="140"]').text(), 16); // RFEH_140
	$(s_tablename+'_val[name="auto_self_test_vr4"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="141"]').text(), 16); // RFEH_141
	$(s_tablename+'_val[name="auto_self_test_ptba_bias"]').text((res>>4));
	$(s_tablename+'_val[name="auto_self_test_ptba_adc"]').text((res&0x0F));
	
	res = parseInt($(s_tablename+'[rfeh="142"]').text(), 16); // RFEH_142
	res_h = parseInt($(s_tablename+'[rfeh="143"]').text(), 16); // RFEH_143	
	$(s_tablename+'_val[name="auto_self_test_unused_ch"]').text(((res_h*256) + res));
	// ================================================================
}

function Parse_ALG(){ // size: 0x180
	var content = '';
	var i = 0 ,j = 0,len = 0x180;
	var name, td_name, td_value, result, line;
	var offset = 0x00021500; //00021500
	var tmp_offset = 0;
	var get_name = '';
	var get_ind = 0;
	
	for(i = 0; i< (len/32);i++){
		tmp_offset = (offset+(i*32));  
		
		td_name = '.bin_group_pa5495[offset=\"'+tmp_offset+'\"]';	 
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		// Get start address
		for(j = 0; j < 32; j++){
			result = $.trim(td_value[j]); //console.log(result);
			get_ind = ((i*32)+j);
			
			name = '.5478_sram_alg[rfeh=\"'+(get_ind).toString(16)+'\"]';
			get_name = $(name).attr('name'); 
			$(name).text("0x"+result); 
			
			content+="	."+get_name+"		= 0x"+result+", //RFEH_"+((get_ind).toString(16).toUpperCase()).padStart(2, "0")+"\n";
			
		}
	}
	Fillout_ALG();

	return content;
}
function Parse_Tp_version(){
	var i = 0 ,j = 0,len = 0x400;
	var name, td_name, td_value, result, line;
	var offset = 7776*32;//(0x3cc00)/32;
	var tmp_offset = 0;
	var get_name = '';
	var get_ind = 0;
	var master_ver = 0;
	var tp_version_name = '', tp_version='', tp_tmp = '';
	var tp_version_index = 0;
	$('.5478_tp_version').text("");
	
	for(i = 0; i< (len/32);i++){
		tmp_offset = (offset+(i*32));  
		
		td_name = '.bin_group_pa5495[offset=\"'+tmp_offset+'\"]';	 
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		// Get start address
		for(j = 0; j < 32; j++){
			if(tp_version_index == 0){
				tp_version_name = '';
				tp_version = '';
			}
			
			result = $.trim(td_value[j]); //console.log(result);
			
			if(tp_version_index < 19){
				tp_tmp = hex_to_ascii(result);
				tp_version_name += tp_tmp;
			}
			else{
				tp_tmp = hex_to_ascii(result);
				tp_version += tp_tmp;
			}
			
			if(tp_version_index == 23){
				//console.log('name is '+tp_version_name);
				//console.log('version '+tp_version);
				name = '.5478_tp_version[name=\"'+tp_version_name+'\"]';
				$(name).text(tp_version); 
				tp_version_index = 0;
			}
			else{
				tp_version_index++;
			}
		}
	}
	
	Hx_master_ver = parseInt($('.5478_tp_version[name="Master"]').text(), 16);
	//console.log(Hx_master_ver);
}
function Parse_p2p_table(){
	var i = 0 ,j = 0,len = 1024;
	var name, td_name, td_value, line;
	var offset = 0;//(0x14800);
	var tmp_offset = 0;
	var get_name = '';
	var get_ind = 0, result_l = 0, result_h = 0, result = 0;
	var content = '';
	var x_amount = 0, y_amount = 0;

	for(i = 0; i< (len/32);i++){
		tmp_offset = (offset+(i*32));  
		
		td_name = '.bin_group_p2p_table[offset=\"'+tmp_offset+'\"]';	 
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		// Get start address
		for(j = 0; j < 32; j+=2){
			result_l = parseInt($.trim(td_value[j]), 16); //console.log(result);
			result_h = parseInt($.trim(td_value[j+1]), 16); 
			result = (result_h << 8) | result_l;
			
			if(get_ind == 0){
				content+='x amount: '+result+'\n';
				x_amount = result;
			}
			else if(get_ind == 1){
				content+='y amount: '+result+'\n';
				y_amount = result;
			}
			else{
				content+=result+', ';
				if((get_ind%x_amount) == 1)
					content+="\n";
			}
			get_ind++;
		}
	}
	$('#bin_p2p_table').val(content);
	
}
function Fillout_Waveform(){
	// Calculate PTBA current
	var buffer_ori = 0, buffer_x = 0, buffer_y = 0, temp_buffer;
	var ori_value;
	var sclk1 = (90.00) ,sclk2 = 0, freq;
	var vrh = 0, vr1, vr2, vr3, vr4, ptba = 0;
	var ori_vrh, ori_vr1, ori_vr2,ori_vr3, ori_vr4;
	var osc, rst0, precharge, slope;
	var isf0 = 1;
	
	// Calculate scclk1....
	var scclk1_div = parseInt($('#dd_osc_scclk1_div').text(), 10); //console.log(scclk1_div);
	sclk1 = (90.00 / scclk1_div); //console.log(sclk1);
	
	// F0....
	ptba = parseInt($('.5478_sram_waveform_f0[name="tcon_ptba_reg"]').text(), 16);
	ori_value = "0x"+ptba.toString(16);

	buffer_ori = ptba;
	buffer_x = ((buffer_ori >> 5) & 0x01)*4;
	buffer_x += ((buffer_ori >> 4) & 0x01)*2;
	buffer_x +=((buffer_ori >> 3) & 0x01);
	
	buffer_y = ((buffer_ori >> 20) & 0x01)*4;
	buffer_y += ((buffer_ori >> 19) & 0x01)*2;
	buffer_y +=((buffer_ori >> 18) & 0x01);
	
	buffer_y = (1+0.5*buffer_y)/2;
	// Current (uA)
	buffer_ori = buffer_y*(1+buffer_x);
	temp_buffer = " ("+buffer_ori+" uA)";
	ori_value += temp_buffer;
	$('.5478_sram_waveform_f0[name="tcon_ptba_reg"]').text(ori_value);
	
	// F1...
	ptba = parseInt($('.5478_sram_waveform_f1[name="tcon_ptba_reg"]').text(), 16);
	ori_value = "0x"+ptba.toString(16);

	buffer_ori = ptba;
	buffer_x = ((buffer_ori >> 5) & 0x01)*4;
	buffer_x += ((buffer_ori >> 4) & 0x01)*2;
	buffer_x +=((buffer_ori >> 3) & 0x01);
	
	buffer_y = ((buffer_ori >> 20) & 0x01)*4;
	buffer_y += ((buffer_ori >> 19) & 0x01)*2;
	buffer_y +=((buffer_ori >> 18) & 0x01);
	
	buffer_y = (1+0.5*buffer_y)/2;
	// Current (uA)
	buffer_ori = buffer_y*(1+buffer_x);
	temp_buffer = " ("+buffer_ori+" uA)";
	ori_value += temp_buffer;
	$('.5478_sram_waveform_f1[name="tcon_ptba_reg"]').text(ori_value);
	
	// Calculate freq============================================
	freq = parseInt($('.5478_sram_waveform_f0[name="tcon_sc_clk2_period"]').text(), 16);
	//ori_value = $('.5478_sram_waveform[name="f0_scclk2"]').text();
	
	sclk2 = ((sclk1 / freq)*1000).toFixed(2);
	ori_value = freq+" ("+sclk2+" kHz)";
	$('.5478_sram_waveform_f0[name="tcon_sc_clk2_period"]').text(ori_value); 
	
	// Calculate Voltage=========================================	
	vrh = parseInt($('.5478_sram_waveform_f0[name="tcon_set_vrh"]').text(), 16);
	vr1 = parseInt($('.5478_sram_waveform_f0[name="tcon_set_vr1"]').text(), 16);
	vr2 = parseInt($('.5478_sram_waveform_f0[name="tcon_set_vr2"]').text(), 16);
	vr3 = parseInt($('.5478_sram_waveform_f0[name="tcon_set_vr3"]').text(), 16);
	vr4 = parseInt($('.5478_sram_waveform_f0[name="tcon_set_vr4"]').text(), 16);

	ori_vrh = "0x"+vrh.toString(16);
	ori_vr1 = "0x"+vr1.toString(16);
	ori_vr2 = "0x"+vr2.toString(16);
	ori_vr3 = "0x"+vr3.toString(16);
	ori_vr4 = "0x"+vr4.toString(16);
	
	//Cal....
	vrh = ((1.8/24)*(58+2*(vrh))).toFixed(2);
	ori_vrh = ori_vrh +" ("+vrh+" V)";
	
	vr1 = ((vrh/61)*(2*vr1)).toFixed(2);
	ori_vr1 = ori_vr1 +" ("+vr1+" V)";
	vr2 = ((vrh/61)*(2*vr2)).toFixed(2);
	ori_vr2 = ori_vr2 + " ("+vr2 + " V)";
	vr3 = ((vrh/61)*(2*vr3)).toFixed(2);
	ori_vr3 = ori_vr3+ " ("+vr3 + " V)";
	vr4 = ((vrh/61)*(2*vr4)).toFixed(2);
	ori_vr4 = ori_vr4 + " (" + vr4+ " V)";

	$('.5478_sram_waveform_f0[name="tcon_set_vrh"]').text(ori_vrh);
	$('.5478_sram_waveform_f0[name="tcon_set_vr1"]').text(ori_vr1);
	$('.5478_sram_waveform_f0[name="tcon_set_vr2"]').text(ori_vr2);
	$('.5478_sram_waveform_f0[name="tcon_set_vr3"]').text(ori_vr3);
	$('.5478_sram_waveform_f0[name="tcon_set_vr4"]').text(ori_vr4);
	
	// F1========================
	//===========================
	// Calculate freq============================================
	freq = parseInt($('.5478_sram_waveform_f1[name="tcon_sc_clk2_period"]').text(), 16);
	//ori_value = $('.5478_sram_waveform[name="f1_scclk2"]').text();
	
	sclk2 = ((sclk1 / freq)*1000).toFixed(2);
	ori_value = freq+" ("+sclk2+" kHz)";
	$('.5478_sram_waveform_f1[name="tcon_sc_clk2_period"]').text(ori_value);
	
	// Calculate Voltage=========================================	
	vrh = parseInt($('.5478_sram_waveform_f1[name="tcon_set_vrh"]').text(), 16);
	vr1 = parseInt($('.5478_sram_waveform_f1[name="tcon_set_vr1"]').text(), 16);
	vr2 = parseInt($('.5478_sram_waveform_f1[name="tcon_set_vr2"]').text(), 16);
	vr3 = parseInt($('.5478_sram_waveform_f1[name="tcon_set_vr3"]').text(), 16);
	vr4 = parseInt($('.5478_sram_waveform_f1[name="tcon_set_vr4"]').text(), 16);

	ori_vrh = "0x"+vrh.toString(16);
	ori_vr1 = "0x"+vr1.toString(16);
	ori_vr2 = "0x"+vr2.toString(16);
	ori_vr3 = "0x"+vr3.toString(16);
	ori_vr4 = "0x"+vr4.toString(16);
	
	//Cal....
	vrh = ((1.8/24)*(58+2*(vrh))).toFixed(2);
	ori_vrh = ori_vrh +" ("+vrh+" V)";
	
	vr1 = ((vrh/61)*(2*vr1)).toFixed(2);
	ori_vr1 = ori_vr1 +" ("+vr1+" V)";
	vr2 = ((vrh/61)*(2*vr2)).toFixed(2);
	ori_vr2 = ori_vr2 + " ("+vr2 + " V)";
	vr3 = ((vrh/61)*(2*vr3)).toFixed(2);
	ori_vr3 = ori_vr3+ " ("+vr3 + " V)";
	vr4 = ((vrh/61)*(2*vr4)).toFixed(2);
	ori_vr4 = ori_vr4 + " (" + vr4+ " V)";

	$('.5478_sram_waveform_f1[name="tcon_set_vrh"]').text(ori_vrh);
	$('.5478_sram_waveform_f1[name="tcon_set_vr1"]').text(ori_vr1);
	$('.5478_sram_waveform_f1[name="tcon_set_vr2"]').text(ori_vr2);
	$('.5478_sram_waveform_f1[name="tcon_set_vr3"]').text(ori_vr3);
	$('.5478_sram_waveform_f1[name="tcon_set_vr4"]').text(ori_vr4);
	
}

function Parse_Auto_Self_Test(){
	var i  = 0;
	var offset = 0x00021680; // 0x00021680
	var td_value_l, td_name_l;
	var td_value_h, td_name_h;
	var td_name;
	var tmp;
	var tmp_val = 0;
	var size = 0, index = 0;
	
	// Get Start
	var line;
	td_name_l = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_l).text()).split(':')[1].split(',');
	
	$('.5478_sram_autoself').each(function() {
		size = parseInt($(this).attr("size"), 10);
		index = parseInt($(this).attr("offset"), 10);
		tmp_val = 0;
		for(i = 0; i< size; i++){
			td_value_l = parseInt($.trim(line[index+i]), 16);
			tmp_val |= (td_value_l << (8*i));
		}
		tmp = "0x"+tmp_val.toString(16);
		$(this).text(tmp);
	});

}

function Parse_tp_init(){
	var content = "", w1_content='';
	
	w1_content = Parse_ALG(); // Start from 0x11500
	
	content+="FW_CONFIG_TABLE_T Cod_fw_setting =\n";
	content+="{\n";
	content+=w1_content+"\n";
	content+="};\n\n";	
	$('#bin_tp_initial_code').val(content);
}

function Parse_Waveform(){
	var offset = 0;//(0x12000) - 0x12000;
	var td_value_l, td_value_ll;
	var td_value_h, td_value_hh;
	var td_name_l, td_name_ll;
	var td_name_h, td_name_hh;
	var i = 0, j = 0;
	var td_name;
	var tmp;
	
	// Start address
	var size = 0, index = 0; // start from index 32
	var line ="";
	
	var Waveform = [];
	
	// F0/F1 ADC count --> 181*2 bytes = 11*32 + 10
	for(i = 0; i< 11;i++){
		tmp_offset = (offset+(i*32));  // line offset
		
		td_name = '.bin_group_tp_adc_config[offset=\"'+tmp_offset+'\"]';	 
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		// Get start address
		for(j = 0; j <32; j++){ // 32 bytes
			result = $.trim(td_value[j]); //console.log(result);
			get_ind = ((i*32)+j);
			Waveform[get_ind] = parseInt(result, 16);
		}
	}
	i = 11;
	tmp_offset = (offset+(i*32));  // line offset
	td_name = '.bin_group_tp_adc_config[offset=\"'+tmp_offset+'\"]';	 
	line = ($(td_name).text()).split(':')[1]; 
	td_value = line.split(',');
	for(j = 0; j <16; j++){
		result = $.trim(td_value[j]); //console.log(result);
		get_ind = ((i*32)+j);
		Waveform[get_ind] = parseInt(result, 16);
	} //console.log(Waveform);
	
	// Parse f0 --> 5*32+26==========================
	$('.5478_sram_waveform_f0').each(function() {
		size = parseInt($(this).attr("size"), 10); 	 
		index = parseInt($(this).attr("offset"), 10); 
		td_value_ll = 0;
		for(i = 0; i< size; i++){
			td_value_l = Waveform[i+index];
			td_value_ll |= (td_value_l << (8*i));
		}
		
		tmp = td_value_ll.toString(16);
		tmp = tmp.padStart(size*2, "0");
		
		$(this).text("0x"+tmp);
	});

	// F1 ADC count --> 181 bytes = 5*32 + 26	
	// Parse f1......
	$('.5478_sram_waveform_f1').each(function() {
		size = parseInt($(this).attr("size"), 10); 	 
		index = parseInt($(this).attr("offset"), 10); 
		td_value_ll = 0;
		for(i = 0; i< size; i++){
			td_value_l = Waveform[i+index+184];
			td_value_ll |= (td_value_l << (8*i));
		}
		
		tmp = td_value_ll.toString(16);
		tmp = tmp.padStart(size*2, "0");
		
		$(this).text("0x"+tmp);
	});

	//Update scclk2 and osr
	$('#dd_osc_tp_scclk2').text(parseInt($('.5478_sram_waveform_f0[name="tcon_sc_clk2_period"]').text(),16));
	$('#dd_osc_tp_osr').text(parseInt($('.5478_sram_waveform_f0[name="tcon_osr_count"]').text(),16));
	Fillout_Waveform();
	
	if(Hx_master_ver > 0x71){
		if(HX_ic_sel == 192){
			Parse_tp_tsram_192(17);
			Parse_tp_self_mapping(60);
		}
		else{
			Parse_tp_tsram_193(28);
			Parse_tp_self_mapping(90);
		}
	}
	else{
		$('#tp_self_mapping').val("Parse after master version to 0x72");
		$('#tp_tsram_normal').val("Parse after master version to 0x72");
	}
}

function Parse_Flash_Func(){
	var offset = 4276*32;// Cod_func_algorithm_en 0x21698
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_t;
	var td_name_0, td_name_1, td_name_2, td_name_3;
	var bit;
	
	// Start address
	var index = 24; // start from index 24
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	
	// Cod_func_algorithm_en===============================================================================================
	td_value_0 = parseInt($.trim(line[index]), 16); // index 4
	td_value_1 = parseInt($.trim(line[index+1]), 16);
	td_value_2 = parseInt($.trim(line[index+2]), 16);
	td_value_3 = parseInt($.trim(line[index+3]), 16);
	td_value_t = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
	
	$('.5478_flash_func_alg').each(function() {
		bit = parseInt($(this).attr("bit"), 10);
		bit = 1 << (bit); //console.log($(this).attr("name") + " bit"+ bit);
		
		$(this).children('td').remove();
		
		if((td_value_t & bit)  > 0){
			$(this).html('<span class="badge bg-success">On</span>');
		}
		else{
			$(this).html('<span class="badge bg-warning">Off</span>');
		}
	});
	// CLIB===============================================================================================
	offset = 4277*32;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	
	index = 0;
	td_value_0 = parseInt($.trim(line[index]), 16); // index 16
	td_value_1 = parseInt($.trim(line[index+1]), 16);
	td_value_t = (td_value_1 << 8) | td_value_0;
	
	$('.5478_flash_func_clib').each(function() {
		bit = parseInt($(this).attr("bit"), 10);
		bit = 1 << (bit);
		
		$(this).children('td').remove();
		
		if((td_value_t & bit)  > 0){
			$(this).html('<span class="badge bg-success">On</span>');
		}
		else{
			$(this).html('<span class="badge bg-warning">Off</span>');
		}
	});
	// MPFW===============================================================================================
	index+=2;
	td_value_0 = parseInt($.trim(line[index]), 16); // index 12
	td_value_1 = parseInt($.trim(line[index+1]), 16);
	td_value_t = (td_value_1 << 8) | td_value_0;
	
	$('.5478_flash_func_mpfw').each(function() {
		bit = parseInt($(this).attr("bit"), 10);
		bit = 1 << (bit);
		
		$(this).children('td').remove();
		
		if((td_value_t & bit)  > 0){
			$(this).html('<span class="badge bg-success">On</span>');
		}
		else{
			$(this).html('<span class="badge bg-warning">Off</span>');
		}
	});	
	// Display===============================================================================================
	index+=2;
	td_value_0 = parseInt($.trim(line[index]), 16); // index 8
	td_value_1 = parseInt($.trim(line[index+1]), 16);
	td_value_2 = parseInt($.trim(line[index+2]), 16);
	td_value_3 = parseInt($.trim(line[index+3]), 16);
	td_value_t = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
	
	$('.5478_flash_func_display').each(function() {
		bit = parseInt($(this).attr("bit"), 10);
		bit = 1 << (bit);
		
		$(this).children('td').remove();
		
		if((td_value_t & bit)  > 0){
			$(this).html('<span class="badge bg-success">On</span>');
		}
		else{
			$(this).html('<span class="badge bg-warning">Off</span>');
		}
	});
	
	// alg_2===============================================================================================
	index+=4;
	td_value_0 = parseInt($.trim(line[index]), 16); // index 20
	td_value_1 = parseInt($.trim(line[index+1]), 16);
	td_value_2 = parseInt($.trim(line[index+2]), 16);
	td_value_3 = parseInt($.trim(line[index+3]), 16);
	td_value_t = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0; 
	
	$('.5478_flash_func_alg_2').each(function() {
		bit = parseInt($(this).attr("bit"), 10);
		bit = 1 << (bit);
		
		$(this).children('td').remove();
		
		if((td_value_t & bit) > 0){
			$(this).html('<span class="badge bg-success">On</span>');
		}
		else{
			$(this).html('<span class="badge bg-warning">Off</span>');
		}
	});		

}

function Parse_dd_rom(){
	var i = 0, offset = 0x0003D000, index = 0;
	var content = '';
	var td_name_0;
	
	content+='#ifndef _PA5495A_DD_ROM_CODE_H\n';
	content+='#define _PA5495A_DD_ROM_CODE_H\n\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='/*                                            CONST VARIABLE                                               */\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='UINT8 Dd_rom2[DD_ROM2_LEN] __attribute__((section(".dd_rom2"), aligned(1))) =\n';
	content+='{\n';
	
	
	
	// Start address
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	var line = ($(td_name_0).text()).split(':')[1].split(',');
	
	for(i = 0; i< (8192-4); i++){
		
		content+= "0x"+($.trim(line[index])).toString(16)+", ";
		if((i%16) == 15){
			content+="\n";
		}
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	
	content+='\n};\n\n';
	content+='#endif /* _PA5495A_DD_ROM_CODE_H */\n';
	$('#bin_dd_rom_code').val(content);
	
	
	offset = 258016;
	index = 28;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	
	var checksum = '';
	checksum = "0x"+($.trim(line[index++]));
	checksum += " 0x"+($.trim(line[index++]));
	checksum += " 0x"+($.trim(line[index++]));
	checksum += " 0x"+($.trim(line[index++]));
	$('#dd_rom_checksum').text(checksum);
	
}

//=====================================================
function Parse_tp_tsram_192(index_group){ // 192: 17
	var i = 0, j = 0, index = 0;
	var offset = 640; // 0x12290 
	var content = '', line;
	var td_name_0;
	var word_index = 0;
	var aword;
	
	// Start address
	td_name_0 = '.bin_group_tp_adc_config[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(','); 
	
	content+='UINT32 Tp_adc_config_swport_tsram_master[ADC_CONFIG_AHB_TSRAM_WORD_NUM] =\n';
	content+='{\n';
	content+="    //{2'd0, TEN_R, TEN_L,    YIN_R[3:0]  ,   YIN_L[3:0]    , LFDEN_R, LFDEN_L, TBS_R, TBS_L ,  TCS0_R[3:0]   ,  TCS0_L[3:0]   , ADC0_EN_R[3:0] , ADC0_EN_L[3:0]}\n";
	content+="    //{    TCS2_R[3:0]   ,   TCS2_L[3:0]  , ADC2_EN_R[3:0]  ,           ADC2_EN_L[3:0]       ,  TCS1_R[3:0]   ,  TCS1_L[3:0]   , ADC1_EN_R[3:0] , ADC1_EN_L[3:0]}\n";
	content+="    //{  ADC5_EN_R[3:0]  , ADC5_EN_L[3:0] , ADC4_EN_R[3:0]  ,           ADC4_EN_L[3:0]       ,  TCS3_R[3:0]   ,  TCS3_L[3:0]   , ADC3_EN_R[3:0] , ADC3_EN_L[3:0]}\n";
	content+="    //{  ADC9_EN_R[3:0]  , ADC9_EN_L[3:0] , ADC8_EN_R[3:0]  ,           ADC8_EN_L[3:0]       , ADC7_EN_R[3:0] , ADC7_EN_L[3:0] , ADC6_EN_R[3:0] , ADC6_EN_L[3:0]}\n";
	content+="    //{  ADC13_EN_R[3:0] , ADC13_EN_L[3:0], ADC12_EN_R[3:0] ,           ADC12_EN_L[3:0]      , ADC11_EN_R[3:0], ADC11_EN_L[3:0], ADC10_EN_R[3:0], ADC10_EN_L[3:0]}\n";
	content+="    //{  ADC17_EN_R[3:0] , ADC17_EN_L[3:0], ADC16_EN_R[3:0] ,           ADC16_EN_L[3:0]      , ADC15_EN_R[3:0], ADC15_EN_L[3:0], ADC14_EN_R[3:0], ADC14_EN_L[3:0]}\n";
	content+="    //{  ADC21_EN_R[3:0] , ADC21_EN_L[3:0], ADC20_EN_R[3:0] ,           ADC20_EN_L[3:0]      , ADC19_EN_R[3:0], ADC19_EN_L[3:0], ADC18_EN_R[3:0], ADC18_EN_L[3:0]}\n";
	content+="    //{  ADC25_EN_R[3:0] , ADC25_EN_L[3:0], ADC24_EN_R[3:0] ,           ADC24_EN_L[3:0]      , ADC23_EN_R[3:0], ADC23_EN_L[3:0], ADC22_EN_R[3:0], ADC22_EN_L[3:0]}\n";
	content+="    //{  ADC29_EN_R[3:0] , ADC29_EN_L[3:0], ADC28_EN_R[3:0] ,           ADC28_EN_L[3:0]      , ADC27_EN_R[3:0], ADC27_EN_L[3:0], ADC26_EN_R[3:0], ADC26_EN_L[3:0]}\n";
	content+="\n\n";
	content+="		//==== TSRAM Switch Port Settings ==============================\n";
	content+="		//=== Sensing-Pad Connect to VCOM==================================================================\n";
	content+="		/*  *(&AHB_TSRAM_WORD+ 0) = */  0x"+$.trim(line[19])+$.trim(line[18])+$.trim(line[17])+$.trim(line[16])+"  , // [31:0] Vcom,f\n";
	content+="		/*  *(&AHB_TSRAM_WORD+ 1) = */  0x"+$.trim(line[23])+$.trim(line[22])+$.trim(line[21])+$.trim(line[20])+"      , // [31:0] ,\n";
	content+="		/*  *(&AHB_TSRAM_WORD+ 2) = */  0x"+$.trim(line[27])+$.trim(line[26])+$.trim(line[25])+$.trim(line[24])+"      , // [31:0] ,\n";
	content+="		/*  *(&AHB_TSRAM_WORD+ 3) = */  0x"+$.trim(line[31])+$.trim(line[30])+$.trim(line[29])+$.trim(line[28])+"      , // [31:0] ,\n";
	
	offset+=32;
	word_index = 4;
	
	for(i = 0; i< index_group; i++){ //??size
		td_name_0 = '.bin_group_tp_adc_config[offset=\"'+offset+'\"]';
		line = ($(td_name_0).text()).split(':')[1].split(',');
		
		for(j = 0; j <(32); j+=4){
			if(word_index % 10 == 0){
				content+="		//==================================================================================================\n";
			}
			aword = ($.trim(line[j+3])+$.trim(line[j+2])+$.trim(line[j+1])+$.trim(line[j])).toLowerCase();
			content+="		/*  *(&AHB_TSRAM_WORD+ "+word_index+") = */  0x"+aword+"      , \n";
			word_index++;
			
			
		}
		offset+=j;

	}
	
	content+='\n};\n\n';
	
	$('#tp_tsram_normal').val(content);
		
}

function Parse_tp_tsram_193(index_group){ // 193: 28
	var i = 0, j = 0, index = 0;
	var offset = 704; // 0x122C0
	var content = '', line;
	var td_name_0;
	var word_index = 0;
	var aword;
	
	
	for(i = 0; i< index_group; i++){ //??size
		td_name_0 = '.bin_group_tp_adc_config[offset=\"'+offset+'\"]';
		line = ($(td_name_0).text()).split(':')[1].split(',');
		
		for(j = 0; j <(32); j+=4){
			if(word_index % 16 == 0){
				content+="		//==================================================================================================\n";
			}
			aword = ($.trim(line[j+3])+$.trim(line[j+2])+$.trim(line[j+1])+$.trim(line[j])).toLowerCase();
			content+="		/*  *(&AHB_TSRAM_WORD+ 0x"+word_index.toString(16).padStart(2, "0")+") = */  0x"+aword+"      , \n";
			word_index++;
			
			
		}
		offset+=j;

	}
	
	content+='\n};\n\n';
	
	$('#tp_tsram_normal').val(content);
		
}

function Parse_tp_self_mapping(sizee){ // 192: 60; 193: 90
	var i = 0, j = 0, index = 0;
	var offset = 0; // 0x14c00
	var content = '', line;
	var td_name_0;
	var value = 0, isfirst = 0;
	var tmp_num;
	
	
	content+='UINT16 Cfg_adc_en[(ADC_NUM_HALF*8)]  __attribute__((section(".tp_self_mapping"))) =\n';
	content+="{\n";
	
	
	for(i = 0; i< sizee; i++){
		// Start address
		td_name_0 = '.bin_group_tp_self_mapping[offset=\"'+offset+'\"]';
		line = ($(td_name_0).text()).split(':')[1].split(','); 
		
		for(j = 0; j <(32); j+=2){
			tmp_num = $.trim(line[j+1])+$.trim(line[j]);
			value = parseInt(tmp_num,16);
			if(value == 0xFFFF){
				if(isfirst == 0){
					content+="\n";
					isfirst = 1;
				}
				content+="0xFFFF, ";
			}
			else{
				if(isfirst == 1){
					content+="\n";
					isfirst = 0;
				}
				content+=value+", ";
			}

		}
		offset+=j;

	}
	
	content+='\n};\n\n';
	
	$('#tp_self_mapping').val(content);
		
}


//=====================================================

function hex_to_ascii(hexstr)
{
	var str = '';
	for (var n = 0; n < hexstr.length; n += 2) {
		str += String.fromCharCode(parseInt(hexstr.substr(n, 2), 16));
	}
	
	return str.replace(/[^a-z0-9\*\.\-\:\_]/gi,'');
}

function Parse_Flash_Header(){
	var offset = 864;//(0x370 - 0x000); // rom code
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_t;
	var td_name_0, td_name_1, td_name_2, td_name_3;
	
	// Start address
	var index = 16; // start from index 16
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	var line = ($(td_name_0).text()).split(':')[1].split(',');
	
	var i = 0;
	// rom code 32-byte
	td_value_0 = "";
	for(i = 0; i< 32; i++){
		td_value_0+= hex_to_ascii($.trim(line[index]));
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	$('.5478_flash_header[name="rom_code_ver"]').text(td_value_0);
	
	//checksumadded code 8-byte
	offset = 928;//(0x3A0 - 0x000);
	index = 0;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');

	td_value_0 = "";
	for(i = 0; i< 8; i++){		
		td_value_0+= hex_to_ascii($.trim(line[i]));
	}
	$('.5478_flash_header[name="checksumadded_ver"]').text(td_value_0);
	
	//hxds-ver code 8-byte
	//offset = 928;//(0x3B0 - 0x000);
	index = 16;
	td_value_0 = "";
	for(i = 0; i< 8; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+16]));
	}
	$('.5478_flash_header[name="hxds_ver"]').text(td_value_0);
	
	//commit_id 8-byte
	offset = 960;//(0x3C0 - 0x000);
	index = 0;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 8; i++){
		td_value_0+= ($.trim(line[i]));
	}
	$('.5478_flash_header[name="commit_no"]').text(td_value_0);
	
	//ic_sign 16-byte
	//offset = 960;//(0x3D0 - 0x000);
	index = 16;
	td_value_0 = "";
	for(i = 0; i< 16; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+16]));
	}
	$('.5478_flash_header[name="ic_sign"]').text(td_value_0);
	if(td_value_0.indexOf("83192") > 0){
		HX_ic_sel = 192;
	}
	else{
		HX_ic_sel = 193;
	}
	//console.log(HX_ic_sel);
	
	//time 8-byte
	offset = 992;// (0x3E0 - 0x000);
	index = 0;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 8; i++){
		td_value_0+= ($.trim(line[i]));
	}
	$('.5478_flash_header[name="time"]').text(td_value_0);
	
	//username 4-byte
	//offset = 992;//(0x3F0 - 0x000);
	index = 16;
	td_value_0 = "";
	for(i = 0; i< 4; i++){
		td_value_0+= ($.trim(line[i+16]));
	}
	$('.5478_flash_header[name="username"]').text(td_value_0);
	
	//============================================================
	offset = 4256*32;// cfg_cid
	index = 2;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 2; i++){
		td_value_0+= ($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_cid"]').text(td_value_0);
	
	offset = 4256*32; //cfg_fw
	index = 5;
	td_value_0 = "";
	for(i = 0; i< 2; i++){
		td_value_0+= $.trim(line[i+index]);
	}
	$('.5478_flash_header[name="cfg_fw"]').text(td_value_0); 
	
	offset = 4256*32;// cfg_cut
	index = 8;
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_cust"]').text(td_value_0);
	
	offset = 4256*32; // cfg_proj
	index = 20;
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_proj"]').text(td_value_0);
	
	offset = 4257*32; // cfg_fw_major
	index = 0;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_fw_major"]').text(td_value_0);
	
	td_value_0 = "";
	index = 12;
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_fw_minor"]').text(td_value_0);
	
	offset = 4257*32;//(0x11438 - 0x11400); // cfg_date
	index = 24;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[index]));
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	$('.5478_flash_header[name="cfg_date"]').text(td_value_0);
	
	offset = 4258*32;//(0x11444 - 0x11400); // cfg_sign
	index = 4;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_sign"]').text(td_value_0);

	index = 16;
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_himax_ticket"]').text(td_value_0);
}

function Init_Tcon_Json(){
	var i = 0;
	for(i = 0; i < Tcon_Script_Table_Json["cycle"].length; i++){
		Tcon_Script_Table_Json["cycle"][i]["start_address"]="";
		Tcon_Script_Table_Json["cycle"][i]["a_valid_script_word"]=0;
		Tcon_Script_Table_Json["cycle"][i]["group_num"]=0;
		Tcon_Script_Table_Json["cycle"][i]["ac"]=255;
		Tcon_Script_Table_Json["cycle"][i]["dc"]=255;
	}
	Tcon_Script_Table_Json["cycle_total_word"]=0;
	
	Tcon_Script_Table_Json["ac"]["start_address"]="";
	Tcon_Script_Table_Json["ac"]["a_valid_script_word"]=0;
	Tcon_Script_Table_Json["ac"]["group_num"]=0;
	Tcon_Script_Table_Json["ac"]["total_word"]=0;
	
	Tcon_Script_Table_Json["dc"]["start_address"]="";
	Tcon_Script_Table_Json["dc"]["a_valid_script_word"]=0;
	Tcon_Script_Table_Json["dc"]["group_num"]=0;
	Tcon_Script_Table_Json["dc"]["total_word"]=0;
	
	$('#tcon_reverse').val('');
	$('#dc_reverse').val('');
}

function Parse_tcon_description(){
	var offset = 0x22000;
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_t;
	var td_name_0, td_name_1, td_name_2, td_name_3;
	
	Init_Tcon_Json();
	
	// Start address
	var index = 0; // start from index 0
	var length = 0x100;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	var line = ($(td_name_0).text()).split(':')[1].split(',');
	var a_table = 0, map_code = 0, a_valid_script_word = 0, total_script_count = 0;
	td_value_0 = "";
	var a_word_tmp = "";
	
	for(i = 0; i< length; i++){
		if(a_table < 15){
			if(a_table == 0){
				a_word_tmp = "";
				total_script_count = parseInt(($.trim(line[index])),16);
			}
			else if(a_table == 1){
				a_valid_script_word = parseInt(($.trim(line[index])),16);
			}
			else if(a_table == 3){
				map_code = parseInt(($.trim(line[index])),16);
			}
			else if(a_table > 3 && a_table < 8){
				a_word_tmp = ($.trim(line[index])).toString(16)+ a_word_tmp;
			}
			a_table++;
		}
		else{
			a_table = 0;
			
			//========================================
			// Fill out JSON
			if(map_code == 2){ // cycle
				Tcon_Script_Table_Json["cycle"][Math.floor(i/16)]["start_address"] = "0x"+a_word_tmp;
				Tcon_Script_Table_Json["cycle"][Math.floor(i/16)]["a_valid_script_word"] = a_valid_script_word;
				Tcon_Script_Table_Json["cycle"][Math.floor(i/16)]["group_num"] = total_script_count;
					
			}
			else if(map_code == 3){ // ac
				Tcon_Script_Table_Json["ac"]["start_address"] = "0x"+a_word_tmp;
				Tcon_Script_Table_Json["ac"]["a_valid_script_word"] = a_valid_script_word;
				Tcon_Script_Table_Json["ac"]["group_num"] = total_script_count;
				
				Tcon_Script_Table_Json["ac"]["total_word"]= a_valid_script_word*total_script_count;
			}
			else if(map_code == 4){ // dc
				Tcon_Script_Table_Json["dc"]["start_address"] = "0x"+a_word_tmp;
				Tcon_Script_Table_Json["dc"]["a_valid_script_word"] = a_valid_script_word;
				Tcon_Script_Table_Json["dc"]["group_num"] = total_script_count;
				
				Tcon_Script_Table_Json["dc"]["total_word"]= a_valid_script_word*total_script_count;
			}
			
			//========================================
		}
		
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	
	var tmp_s = parseInt(Tcon_Script_Table_Json["cycle"][0]["start_address"], 16);
	var tmp_e = parseInt(Tcon_Script_Table_Json["ac"]["start_address"], 16);
	Tcon_Script_Table_Json["cycle_total_word"]= (tmp_e - tmp_s)/4;
	
	//console.log(Tcon_Script_Table_Json);
}


function Show_tcon_script(){ // print content to textarea
	var offset = 112608;
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_t;
	var td_name_0, td_name_1, td_name_2, td_name_3;
	
	// Start address
	var index = 28; // start from index 28
	var length = 0x4804 - 0x4;// remove CRC
	var a_word_tmp;
	td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
	var line = ($(td_name_0).text()).split(':')[1].split(',');
	
	var i = 0, a_word_counter = 0;
	var cycle_counter = 0, ac_counter = 0, dc_counter = 0, cycle_counter_mode = 0;
	var cycle_content = "", ac_content = "", dc_content="";
	var ac_item = 0, dc_item = 0;
	var current_ac = 0, current_dc = 0, current_cycle = 0;
	var current_ac_content_f0 ="", current_ac_content_f1="",current_dc_content_f0="",current_dc_content_f1="";
	
	a_word_tmp = "";
	
	var cycle_offset = 4*Tcon_Script_Table_Json["cycle_total_word"];  //console.log(cycle_offset);
	var ac_offset = cycle_offset + 4*Tcon_Script_Table_Json["ac"]["total_word"]; //console.log(ac_offset);
	var dc_offset = ac_offset + 4*Tcon_Script_Table_Json["dc"]["total_word"]; //console.log(dc_offset);
	
	for(i = 0; i< length; i++){
		if(a_word_counter < 3){
			
			if(a_word_counter == 0){
				a_word_tmp = "";
			}
			a_word_counter++;
			a_word_tmp = ($.trim(line[index])).toString(16)+ a_word_tmp;
		}
		else{
			a_word_counter = 0;
			a_word_tmp = ($.trim(line[index])).toString(16)+ a_word_tmp;
			
			//=================================================
			if(i < cycle_offset){ // is cycle
				cycle_content = cycle_content + "0x" + a_word_tmp + ", ";
			
				if(cycle_counter < 2){
					//*****************************************
					if(cycle_counter == 0){ // restore AC#
						current_ac = parseInt(a_word_tmp, 16);
						if(current_ac == 0){
							current_cycle+=1; // next mode
						}
						
						current_ac = current_ac & 0xFF;
					}
					else if(cycle_counter == 1){ // check yin field to read ac or dc
						current_dc = parseInt(a_word_tmp, 16);
						var tmp_yin = (current_dc >> 16) & 0xFF;
						current_dc = current_dc & 0xFF;
						
						// Only record F0 and F1 normal sensing AC and DC
						if(tmp_yin == 0x55 || tmp_yin == 0xAA){
							Tcon_Script_Table_Json["cycle"][current_cycle]["ac"] = current_ac;
							Tcon_Script_Table_Json["cycle"][current_cycle]["dc"] = current_dc;
						}
					}
					//*****************************************
					cycle_counter++;
				}
				else{
					cycle_counter = 0;
					cycle_content = cycle_content + "\n";
				}
			}
			else if(i < ac_offset ){ // ac
				//*****************************************
				// Record AC
				if(ac_item == Tcon_Script_Table_Json["cycle"][0]["ac"]){ // F0
					current_ac_content_f0 = current_ac_content_f0 + "0x" + a_word_tmp + ",\n";
				}
				if(ac_item == Tcon_Script_Table_Json["cycle"][1]["ac"]){ // F1
					current_ac_content_f1 = current_ac_content_f1 + "0x" + a_word_tmp + ",\n";
				}
				//*****************************************
			
				if(ac_counter < (Tcon_Script_Table_Json["ac"]["a_valid_script_word"])-1){
					if(ac_counter == 0){
						ac_content = ac_content + "//AC"+(ac_item)+"\n";
					}
					ac_content = ac_content + "0x" + a_word_tmp + ",\n";
					ac_counter++;
				}
				else{
					ac_content = ac_content + "0x" + a_word_tmp + ",\n\n";
					ac_counter = 0;	
					ac_item++;
				}
			}
			else{ //dc
				//*****************************************
				// Record DC
				if(dc_item == Tcon_Script_Table_Json["cycle"][0]["dc"]){ // F0
					current_dc_content_f0 = current_dc_content_f0 + "0x" + a_word_tmp + ",\n";
				}
				if(dc_item == Tcon_Script_Table_Json["cycle"][1]["dc"]){ // F1
					current_dc_content_f1 = current_dc_content_f1 + "0x" + a_word_tmp + ",\n";
				}
				//*****************************************
				if(dc_counter < (Tcon_Script_Table_Json["dc"]["a_valid_script_word"]-1)){					
					if(dc_counter == 0){
						dc_content = dc_content + "//DC"+(dc_item)+"\n";
					}
					dc_content = dc_content + "0x" + a_word_tmp + ",\n";
					dc_counter++;
				}
				else{
					dc_content = dc_content + "0x" + a_word_tmp + ",\n\n";
					dc_counter = 0;	
					dc_item++;
				}
			}
			//==================================================
		}
		
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_pa5495[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;	
		}	
	}
	$('#tcon_script_raw_cycle').val(cycle_content);
	$('#tcon_script_raw_ac').val(ac_content);
	$('#tcon_script_raw_dc').val(dc_content);
	
	//console.log(Tcon_Script_Table_Json);
	//console.log(current_ac_content_f0);
	//console.log(current_ac_content_f1);
	//console.log(current_dc_content_f0);
	//console.log(current_dc_content_f1);
	
	//*****************************************
	// F0......................................
	$('#tcon_script_role').attr('role', 'F0_');
	$('#tcon_reverse').val(current_ac_content_f0);
	$('#dc_reverse').val(current_dc_content_f0);
	Reverse_AC_word_result();
	Reverse_DC_word_result();
	// F1......................................
	$('#tcon_script_role').attr('role', 'F1_');
	$('#tcon_reverse').val(current_ac_content_f1);
	$('#dc_reverse').val(current_dc_content_f1);
	Reverse_AC_word_result();
	Reverse_DC_word_result();
	//*****************************************
}

function Parse_binary_content(){
	
	Parse_Tp_version();
	Parse_Flash_Func();
	Parse_Flash_Header();
	Parse_Auto_Self_Test();
	
	Parse_tcon_description();
	Show_tcon_script();
	//Parse_Waveform();
	Parse_dd_rom();
	//Parse_p2p_table();

	Parse_tp_init();
	
}

function Parser_binary_file(filesobj){
	// read the file
	var reader = new FileReader();
	
	reader.onloadstart = function(e) {
		Init_UI();
		$('body').addClass('loading');
	};

	// file reading finished successfully
	reader.onload = function(e) {
	   // contents of file in variable     
	    var text = e.target.result;

		var js_startaddress = 0, js_endaddress = 0, js_counter = 0, js_s = 0;

		var buffer = new Uint8Array(text);
		var tmp, tmp_addr, content='', hex_val;
		var tmp_name;
		var i  = 0 , offset = 0; 

		for(i = 0; i < buffer.length; i++){
			tmp = buffer[i].toString(16).padStart(2, "0");
			if((i%32) == 31){
				content+=tmp.toUpperCase()+",&nbsp;&nbsp;";
				content+="</span><br>\n";
				
				if((i == (js_endaddress-1)) && (js_s== 1)){
					js_counter++;
					js_s = 0;
					//offset = 0;
				}
			}
			else{
				if((i%32) == 0){
					
					// Address==============
					tmp_addr = i.toString(16).padStart(8, "0");
					// Name=================
					//tmp_name = (MPA5495_mem_sag[js_counter].name);
					/*if(js_s == 1){
						content+="<span class=\"bin_group bin_group_"+(MPA5495_mem_sag[js_counter].name)+"\" offset="+offset+">"+(tmp_name)+"  "+(tmp_addr.toUpperCase())+":&nbsp;&nbsp;"+tmp.toUpperCase()+",&nbsp;&nbsp;";
					}
					else{
						
						content+="<span class=\"bin_group bin_group_nouse\">nouse  "+tmp_addr.toUpperCase()+":&nbsp;&nbsp;"+tmp.toUpperCase()+",&nbsp;&nbsp;";
					}*/
					content+="<span class=\"bin_group bin_group_pa5495\" offset="+offset+">"+"  "+(tmp_addr.toUpperCase())+":&nbsp;&nbsp;"+tmp.toUpperCase()+",&nbsp;&nbsp;";
					
				}
				else{
					content+=tmp.toUpperCase()+",&nbsp;&nbsp;";
				}
			}
			offset++;

		}
		$('#table_bin').html(content);
		
		//$('#button_rawdata').attr("isload", "1");
		//$(".button_load").attr("isload", "1");
		
		$('#upload_bin_file_name').text(filesobj.name); // Update filename
		Parse_binary_content();
	};

	reader.onerror = function(e) {
		alert('Error : Failed to read Binary');
	};

	reader.onloadend = function(e) {
		$('body').removeClass('loading');
	};

	// read as array buffer
	reader.readAsArrayBuffer(filesobj);
}

function Select_binary_file(){
	var file;
	var i = 0, count = 0;
	
	if($('#bin_parser').length){
		var proj = document.querySelector("#bin_parser");
		proj.addEventListener('change', function(e) {
			var files = e.target.files;
			Parser_binary_file(files[0]);
		});
	}
}

function Init_UI(){
	$('#upload_bin_file_name').val("");
	$('#dd_rom_checksum').val("");
	
	$('#bin_dd_rom_code').val("");
	$('.button_load').CardWidget('collapse');
	$('#tp_tsram_normal').val("");
	
}

$(document).ready(function(){
	Select_binary_file();
	//Init_UI();
	
	//=================================================================================
	// Load Sample/Range
	//=================================================================================
	var showoff = $('#oem_project_detail').attr('bit'); 
	// Fill out Sample=================================================================
	Pasrse_ALG_Oem('.tp_sample_alg');
	
	if(showoff == '1'){
		Pasrse_ALG_Oem('.5478_sram_alg');

	}
});