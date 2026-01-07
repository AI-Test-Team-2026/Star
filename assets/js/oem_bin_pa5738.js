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
	var sig_scale_en = 0;
	res = parseInt($(s_tablename+'[rfeh="ad"]').text(), 16); // RFEH_ad
	
	sig_scale_en = res & 0x01;
	
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
	sig_scale = parseInt($(s_tablename+'[rfeh="60"]').text(), 16); // RFEH_60
	if(sig_scale_en == 0){
		sig_scale = 1;
	}
	res = parseInt($(s_tablename+'[rfeh="f"]').text(), 16); // RFEH_0F
	var rawdata_scale = res;

	if(rawdata_scale == 0){
		rawdata_scale = 1;
	}
	
	$(s_tablename+'_val[name="raw_downscale"]').text(rawdata_scale);
	// Data process==============================================
	res = parseInt($(s_tablename+'[rfeh="3f"]').text(), 16); // RFEH_3F
	$(s_tablename+'_val[name="sleep_out_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="47"]').text(), 16); // RFEH_47
	$(s_tablename+'_val[name="mut_hopping_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="b5"]').text(), 16); // RFEH_B5
	$(s_tablename+'_val[name="glove_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="43"]').text(), 16); // RFEH_43
	$(s_tablename+'_val[name="slf_rx_cc0"]').text(res);
	$(s_tablename+'_val[name="slf_rx_cc0_ac"]').text(res+20);
	
	res = parseInt($(s_tablename+'[rfeh="44"]').text(), 16); // RFEH_44
	$(s_tablename+'_val[name="slf_tx_cc0"]').text(res);
	$(s_tablename+'_val[name="slf_tx_cc0_ac"]').text(res+7);

	res = parseInt($(s_tablename+'[rfeh="4f"]').text(), 16); // RFEH_4f
	$(s_tablename+'_val[name="co_axis_div"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="50"]').text(), 16); // RFEH_50
	$(s_tablename+'_val[name="co_axis_div_glv"]').text(res);
	//=======================================================
	//=======================================================
	res = parseInt($(s_tablename+'[rfeh="9"]').text(), 16); // RFEH_09
	$(s_tablename+'_val[name="mut_thpx_nor"]').text(res*sig_scale);
	$(s_tablename+'_val[name="mut_thr_nor_ex"]').text((res*sig_scale) + 4);
	
	res = parseInt($(s_tablename+'[rfeh="a"]').text(), 16); // RFEH_0A
	$(s_tablename+'_val[name="mut_thpx_lgd"]').text(res*sig_scale);
		
	res = parseInt($(s_tablename+'[rfeh="b2"]').text(), 16); // RFEH_b2
	$(s_tablename+'_val[name="glove_thpx"]').text(res*sig_scale);
	
	res = parseInt($(s_tablename+'[rfeh="1b"]').text(), 16); // RFEH_1b
	$(s_tablename+'_val[name="slf_tx_thr"]').text(res);
	$(s_tablename+'_val[name="slf_tx_thr_ac"]').text((res) + 5);
	
	// Enter Leave..............
	res = parseInt($(s_tablename+'[rfeh="3b"]').text(), 16); // RFEH_3B
	$(s_tablename+'_val[name="pt_ent_num"]').text((res & 0x0F)); 
	$(s_tablename+'_val[name="pt_ent_num_noise"]').text((res >> 4)&0x0F);
	$(s_tablename+'_val[name="pt_ent_num_lpwu_hybrid"]').text((res >> 4)&0x0F);
	
	res = parseInt($(s_tablename+'[rfeh="b7"]').text(), 16); // RFEH_B7
	$(s_tablename+'_val[name="pt_ent_num_glove"]').text(((res&0xF0)>> 4));
	$(s_tablename+'_val[name="pt_lev_num_glove"]').text((res & 0x0F));
	
	
	res = parseInt($(s_tablename+'[rfeh="3c"]').text(), 16); // RFEH_3c
	$(s_tablename+'_val[name="pt_lev_num"]').text((res >> 4)&0x0F);
	$(s_tablename+'_val[name="pt_lev_num_ac"]').text(((res >> 4)&0x0F)+3);
	$(s_tablename+'_val[name="pt_lev_num_noise"]').text((res & 0x0F));
	$(s_tablename+'_val[name="pt_lev_num_f"]').text(((res >> 4)&0x0F)+1);
	
	// Weigh point====================================================
	res = parseInt($(s_tablename+'[rfeh="10"]').text(), 16); // RFEH_10
	$(s_tablename+'_val[name="wgt_thpx"]').text(res);
	$(s_tablename+'_val[name="wgt_thpx_ac"]').text(res+40);

	res = parseInt($(s_tablename+'[rfeh="b4"]').text(), 16); // RFEH_b4
	$(s_tablename+'_val[name="glove_weg_thpx_ent"]').text(res);	
	
	// CCL===============================================================
	res = parseInt($(s_tablename+'[rfeh="53"]').text(), 16); // RFEH_53
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_l"]').text(res*rawdata_scale);
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_l_big"]').text((res*rawdata_scale)+8);
	
	res = parseInt($(s_tablename+'[rfeh="54"]').text(), 16); // RFEH_54
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_d"]').text(res*rawdata_scale);
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_d_big"]').text((res*rawdata_scale)+8);
	
	// SW
	res = parseInt($(s_tablename+'[rfeh="55"]').text(), 16); // RFEH_55
	$(s_tablename+'_val[name="mut_ccl_ord_separation_cps"]').text((res & 0x0F)*rawdata_scale);
	$(s_tablename+'_val[name="mut_ccl_ord_separation_dps"]').text(((res >> 4) & 0x0F)*rawdata_scale);
	//Baseline============================================================
	res = parseInt($(s_tablename+'[rfeh="6d"]').text(), 16); // RFEH_6d
	$(s_tablename+'_val[name="bs_delay_frame"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="6e"]').text(), 16); // RFEH_6e
	$(s_tablename+'_val[name="bnk_seh_lat"]').text(res);
	
	
	res_h = parseInt($(s_tablename+'[rfeh="6a"]').text(), 16); // RFEH_6a	
	res = parseInt($(s_tablename+'[rfeh="69"]').text(), 16); // RFEH_69
	$(s_tablename+'_val[name="recal_tm"]').text(res_h*20 + res + 10);

	// Average Coord=====================================================
	res = parseInt($(s_tablename+'[rfeh="34"]').text(), 16); // RFEH_34
	$(s_tablename+'_val[name="avg_ord"]').text(res&0x0F);
	$(s_tablename+'_val[name="avg_ord_fng"]').text((res >> 4)&0x0F);

	res = parseInt($(s_tablename+'[rfeh="35"]').text(), 16); // RFEH_35
	$(s_tablename+'_val[name="avg_dyc"]').text((res&0x0F)+1);
	$(s_tablename+'_val[name="avg_dyc_fng"]').text(((res >> 4)&0x0F)+1);
	
	res = parseInt($(s_tablename+'[rfeh="2e"]').text(), 16); // RFEH_2e
	$(s_tablename+'_val[name="jitter_noise"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="2c"]').text(), 16); // RFEH_2C
	$(s_tablename+'_val[name="jitter_first"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="2d"]').text(), 16); // RFEH_2d
	$(s_tablename+'_val[name="jitter_moving"]').text(res);
	
	
	res = parseInt($(s_tablename+'[rfeh="ca"]').text(), 16); // RFEH_ca
	$(s_tablename+'_val[name="precision_x"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="cb"]').text(), 16); // RFEH_cb
	$(s_tablename+'_val[name="precision_y"]').text(res);
	
	//Finger Sep ========================================================
	res = parseInt($(s_tablename+'[rfeh="58"]').text(), 16); // RFEH_58
	$(s_tablename+'_val[name="fs_distance"]').text(res);	
	
	// Palm==============================================================
	res = parseInt($(s_tablename+'[rfeh="27"]').text(), 16); // RFEH_27
	$(s_tablename+'_val[name="slf_palm_rx_chn_num"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="28"]').text(), 16); // RFEH_28
	$(s_tablename+'_val[name="slf_palm_tx_chn_num"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="26"]').text(), 16); // RFEH_26
	$(s_tablename+'_val[name="mut_palm_frm_blk_num"]').text(res);		

	res = parseInt($(s_tablename+'[rfeh="24"]').text(), 16); // RFEH_24
	$(s_tablename+'_val[name="mut_lev_plam_frame"]').text(res*10);	

	res = parseInt($(s_tablename+'[rfeh="25"]').text(), 16); // RFEH_25
	$(s_tablename+'_val[name="mut_palm_pt_blk_num"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="29"]').text(), 16); // RFEH_29
	$(s_tablename+'_val[name="slf_big_area_chn_num"]').text(res);
	//Glove==============================================================
	res = parseInt($(s_tablename+'[rfeh="b8"]').text(), 16); // RFEH_b8
	$(s_tablename+'_val[name="glove_ent_sel_enter"]').text((res&0x0F)+1);
	$(s_tablename+'_val[name="hsm_ent_typ"]').text((res>>4)&0x0F);

	res = parseInt($(s_tablename+'[rfeh="b9"]').text(), 16); // RFEH_b9
	$(s_tablename+'_val[name="glove_ent_ulmt"]').text(sig_scale*res);	

	res = parseInt($(s_tablename+'[rfeh="ba"]').text(), 16); // RFEH_ba
	$(s_tablename+'_val[name="glove_ent_dlmt"]').text(sig_scale*res);
	
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

	// Recal=============================================================
	res = parseInt($(s_tablename+'[rfeh="1a"]').text(), 16); // RFEH_1a
	$(s_tablename+'_val[name="slf_rx_thr"]').text(res*4);
	
	res = parseInt($(s_tablename+'[rfeh="1b"]').text(), 16); // RFEH_1b
	$(s_tablename+'_val[name="slf_tx_thr_recal"]').text(res*4);	

	res = parseInt($(s_tablename+'[rfeh="69"]').text(), 16); // RFEH_69
	$(s_tablename+'_val[name="recal_tm"]').text(res);	
	
	res = parseInt($(s_tablename+'[rfeh="cc"]').text(), 16); // RFEH_cc
	res_h = parseInt($(s_tablename+'[rfeh="ce"]').text(), 16); // RFEH_ce
	$(s_tablename+'_val[name="recal_count"]').text(res*res_h);
	
	res = parseInt($(s_tablename+'[rfeh="cd"]').text(), 16); // RFEH_cd
	res_h = parseInt($(s_tablename+'[rfeh="cf"]').text(), 16); // RFEH_cf
	$(s_tablename+'_val[name="recal_distance"]').text(res);		
	//Tsix===============================================================	
	res = parseInt($(s_tablename+'[rfeh="3"]').text(), 16); // RFEH_03
	if((res&0x01) == 1){
		$(s_tablename+'_val[name="sw_tsix_en_parse"]').text("Edge Trigger");
	}
	else{
		$(s_tablename+'_val[name="sw_tsix_en_parse"]').text("Level Trigger");
	}
	// Queue===============================================================
	res = parseInt($(s_tablename+'[rfeh="5"]').text(), 16); // RFEH_05
	$(s_tablename+'_val[name="que_osc_sel"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="2a"]').text(), 16); // RFEH_2a
	$(s_tablename+'_val[name="finger_size_shift"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="2b"]').text(), 16); // RFEH_2b
	$(s_tablename+'_val[name="finger_size_max"]').text(res);
	// ================================================================

}

function Parse_ALG(){ // size: 0x180
	var content = '';
	var i = 0 ,j = 0,len = 0x180;
	var name, td_name, td_value, result, line;
	var offset = 0x860;//0x878; 
	var tmp_offset = 0;
	var get_name = '';
	var get_ind = 0;
	var t_offset = 24, t_count = 0;
	
	for(i = 0; i< (len/32);i++){
		if(i == 0){
			t_offset = 24;
		}
		else{
			t_offset = 0;
		}
		tmp_offset = (offset+(i*32));  
		
		td_name = '.bin_group_pa5738[offset=\"'+tmp_offset+'\"]';
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		// Get start address
		for(j = t_offset; j < 32; j++){
			result = $.trim(td_value[j]);
			get_ind = t_count;//((i*32)+t_count);
			
			name = '.5478_sram_alg[rfeh=\"'+(get_ind).toString(16)+'\"]'; //console.log(name);
			get_name = $(name).attr('name'); 
			$(name).text("0x"+result); 
			
			content+="	."+get_name+"		= 0x"+result+", //RFEH_"+((get_ind).toString(16).toUpperCase()).padStart(2, "0")+"\n";
			t_count++;
		}
	}
	Fillout_ALG();

	return content;
}
function Parse_Tp_version(){
	var i = 0 ,j = 0,len = 0x7FC;
	var name, td_name, td_value, result, line;
	var offset = 0x3F400;//(0x3dc00)/32;
	var tmp_offset = 0;
	var get_name = '';
	var get_ind = 0;
	var master_ver = 0;
	var tp_version_name = '', tp_version='', tp_tmp = '';
	var tp_version_index = 0;
	$('.5478_tp_version').text("");
	
	for(i = 0; i< (len/32);i++){
		tmp_offset = (offset+(i*32));  
		
		td_name = '.bin_group_pa5738[offset=\"'+tmp_offset+'\"]';	 
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		// Get start address
		for(j = 0; j < 32; j++){
			//====================
			if(i == 0 && j == 0)
			{
				name = '.5478_tp_version[name=\"ALG_major"]';
				result = $.trim(td_value[j]);
				$(name).text(result); 
				continue;
			}
			if(i == 0 && j == 1)
			{
				name = '.5478_tp_version[name=\"ALG_minor"]';
				result = $.trim(td_value[j]);
				$(name).text(result); 
				continue;
			}
			//====================
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

}

function Parse_tp_init(){
	var content = "", w1_content='';
	
	w1_content = Parse_ALG();
	
	content+="FW_CONFIG_TABLE_T Cod_fw_setting =\n";
	content+="{\n";
	content+=w1_content+"\n";
	content+="};\n\n";	
	$('#bin_tp_initial_code').val(content);
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
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
	var line = ($(td_name_0).text()).split(':')[1].split(',');
	
	var i = 0;
	// rom code 32-byte
	td_value_0 = "";
	for(i = 0; i< 32; i++){
		td_value_0+= hex_to_ascii($.trim(line[index]));
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	$('.5478_flash_header[name="rom_code_ver"]').text(td_value_0);
	
	//checksumadded code 8-byte
	offset = 928;//(0x3A0 - 0x000);
	index = 0;
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
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
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
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

	//time 8-byte
	offset = 992;// (0x3E0 - 0x000);
	index = 0;
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
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
	offset = 0x800;//4256*32;// cfg_cid
	index = 2;
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
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
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
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
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[index]));
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	$('.5478_flash_header[name="cfg_date"]').text(td_value_0);
	
	offset = 4258*32;//(0x11444 - 0x11400); // cfg_sign
	index = 4;
	td_name_0 = '.bin_group_pa5738[offset=\"'+offset+'\"]';
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

function Parse_binary_content(){
	
	Parse_Tp_version();
		
	Parse_Flash_Header();

	Parse_tp_init(); // no sample

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
					content+="<span class=\"bin_group bin_group_pa5738\" offset="+offset+">"+"  "+(tmp_addr.toUpperCase())+":&nbsp;&nbsp;"+tmp.toUpperCase()+",&nbsp;&nbsp;";
					
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
	
	$('.button_load').CardWidget('collapse');
	
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