var MPA5478_mem_sag = [
	{
		"name": "header",
		"start_address": "0x0000",
		"size": "0x400"
	},
	{
		"name": "ISRAM_CODE",
		"start_address": "0x400",
		"size": "0x10000"
	},
	{
		"name": "tp_config_table",
		"start_address": "0x10400",
		"size": "0x1000"
	},
	{
		"name": "tp_hw_config",
		"start_address": "0x11400",
		"size": "0xC00"
	},
	{
		"name": "tp_adc_config",
		"start_address": "0x12000",
		"size": "0x1000"
	},
	{
		"name": "tp_adc_mapping",
		"start_address": "0x13000",
		"size": "0xC00"
	},
	{
		"name": "dd_initial",
		"start_address": "0x13C00",
		"size": "0x400"
	},
	{
		"name": "dd_initial2",
		"start_address": "0x14000",
		"size": "0x400"
	},
	{
		"name": "dd_workaround1",
		"start_address": "0x14400",
		"size": "0x100"
	},
	{
		"name": "dd_workaround2",
		"start_address": "0x14500",
		"size": "0x100"
	},
	{
		"name": "dd_workaround3",
		"start_address": "0x14600",
		"size": "0x100"
	},
	{
		"name": "dd_workaround4",
		"start_address": "0x14700",
		"size": "0x100"
	},
	{
		"name": "p2p_table",
		"start_address": "0x14800",
		"size": "0x400"
	},
	{
		"name": "tp_self_mapping",
		"start_address": "0x14C00",
		//"size": "0x0780", --> is 192
		"size": "0x0B40"
	},
	{
		"name": "tp_reserve",
		/*"start_address": "0x15380",
		"size": "0x8880"*/
		"start_address": "0x15740",
		"size": "0x84C0"
	},
	{
		"name": "tp_version_table",
		"start_address": "0x1DC00",
		"size": "0x400"
	},
	{
		"name": "dd_rom",
		"start_address": "0x1E000",
		"size": "0x1000"
	},
	{
		"name": "tp_reload_cmd",
		"start_address": "0x1F000",
		"size": "0x1000"
	}
];

var HX_ic_sel;
var Hx_master_ver;

function Fillout_ALG(){
	var i = 0;
	var s_tablename = ['.5478_sram_alg', '.tp_sample_alg'];
	
	var m_glove_check = $('.5478_flash_func[name="GLOVE_WEIGHT_BY_SCALE"] span').text(); 
	var m_recal_check = $('.5478_flash_func[name="RECAL_THX_BY_SCALE"] span').text(); 
	
	for(i = 0; i< s_tablename.length; i++){
		Pasrse_ALG_Oem(s_tablename[i],m_glove_check, m_recal_check);
	}
}

function Pasrse_ALG_Oem(s_tablename, m_glove_check, m_recal_check){
	var ori = 0;
	var res, scale, tmp, res_h;
	var toyota_en = 0;
	var rawdata_scale;
	//===========================================================
	var m_glove_scale = 0;
	var m_recal_scale = 0;
	
	if(m_glove_check == 'On'){
		m_glove_scale = 1;
	}
	if(m_recal_check == 'On'){
		m_recal_scale = 1;
	}
	//===========================================================
	//===========================================================
	//=================================================================
	rawdata_scale = parseInt($(s_tablename+'[rfeh="f"]').text(), 16); // rfeh_f
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
	$(s_tablename+'_val_rfeh_4[bit="7"]').text(((res >> 7) & 0x01));
	//=================================================================
	res = parseInt($(s_tablename+'[rfeh="73"]').text(), 16); // RFEH_73
	$(s_tablename+'_val_rfeh_73[bit="0"]').text((res & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="1"]').text(((res >> 1) & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="2"]').text(((res >> 2) & 0x01));
	$(s_tablename+'_val_rfeh_73[bit="3"]').text(((res >> 3) & 0x01));
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

	if(res & 0x01){
		scale = parseInt($(s_tablename+'[rfeh="60"]').text(), 16); // RFEH_60
		$(s_tablename+'_val[name="sig_thx_scale"]').text(scale);
	}
	else{
		scale = 1;
		$(s_tablename+'_val[name="sig_thx_scale"]').text("1");
	}
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
	$(s_tablename+'_val_rfeh_b1[bit="4"]').text(((res >> 4) & 0x01));
	$(s_tablename+'_val_rfeh_b1[bit="5"]').text(((res >> 5) & 0x01));
	$(s_tablename+'_val_rfeh_b1[bit="6"]').text(((res >> 6) & 0x01));
	$(s_tablename+'_val_rfeh_b1[bit="7"]').text(((res >> 7) & 0x01));

	// Data process==============================================
	res = parseInt($(s_tablename+'[rfeh="3e"]').text(), 16); // RFEH_3e
	$(s_tablename+'_val[name="startup_frm"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="42"]').text(), 16); // RFEH_42
	$(s_tablename+'_val[name="startup_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="3f"]').text(), 16); // RFEH_3F
	$(s_tablename+'_val[name="sleep_out_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="d2"]').text(), 16); // RFEH_D2
	$(s_tablename+'_val[name="hopping_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="b5"]').text(), 16); // RFEH_B5
	$(s_tablename+'_val[name="glove_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="d3"]').text(), 16); // RFEH_D3
	$(s_tablename+'_val[name="noise_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="c9"]').text(), 16); // RFEH_c9
	$(s_tablename+'_val[name="hopping_noise_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="40"]').text(), 16); // RFEH_40
	$(s_tablename+'_val[name="lpwug_cc"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="47"]').text(), 16); // RFEH_47
	$(s_tablename+'_val[name="co_axis_div_ac"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="49"]').text(), 16); // RFEH_49
	$(s_tablename+'_val[name="co_axis_div_bending"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="46"]').text(), 16); // RFEH_46
	$(s_tablename+'_val[name="co_axis_div"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="a"]').text(), 16); // RFEH_0A
	$(s_tablename+'_val[name="mut_thpx_lgd"]').text(res*scale);
	
	res = parseInt($(s_tablename+'[rfeh="ae"]').text(), 16); // RFEH_AE
	$(s_tablename+'_val[name="leave_mut_thx"]').text(res*scale);
	
	res = parseInt($(s_tablename+'[rfeh="b2"]').text(), 16); // RFEH_b2
	$(s_tablename+'_val[name="glove_thpx"]').text(res*scale);
	
	//res = parseInt($(s_tablename+'[rfeh="d"]').text(), 16); // RFEH_0D
	//$(s_tablename+'_val[name="lpwug_active_thpx"]').text(res*scale);
	
	res = parseInt($(s_tablename+'[rfeh="e"]').text(), 16); // RFEH_0E
	$(s_tablename+'_val[name="lpwug_1cycle_thpx"]').text(res*scale);
	
	res = parseInt($(s_tablename+'[rfeh="55"]').text(), 16); // RFEH_55
	if(toyota_en == 0){
		$(s_tablename+'_val[name="toyota_sig_scale_l2"]').text(0);
	}
	else{
		$(s_tablename+'_val[name="toyota_sig_scale_l2"]').text(res*scale);
	}
	
	res = parseInt($(s_tablename+'[rfeh="56"]').text(), 16); // RFEH_56
	if(toyota_en == 0){
		$(s_tablename+'_val[name="toyota_sig_scale_l3"]').text(0);
	}
	else{
		$(s_tablename+'_val[name="toyota_sig_scale_l3"]').text(res*scale);
	}
	
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
	$(s_tablename+'_val[name="pt_lev_num_sleepout"]').text((res >> 4));
	$(s_tablename+'_val[name="pt_lev_num_glove2"]').text((res & 0x0F));
	$(s_tablename+'_val[name="pt_lev_num_noise"]').text((res & 0x0F)+2);
	
	res = parseInt($(s_tablename+'[rfeh="5b"]').text(), 16); // RFEH_5B
	$(s_tablename+'_val[name="pt_ent_num_2nd"]').text((res & 0x0F));
	
	// Weigh point====================================================
	res = parseInt($(s_tablename+'[rfeh="16"]').text(), 16); // RFEH_16
	$(s_tablename+'_val[name="weg_thpx_1st_lgd"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="57"]').text(), 16); // RFEH_57
	if(toyota_en == 0){
		$(s_tablename+'_val[name="weg_thpx_1st_lgd_toyota_l2"]').text(0);
	}
	else{
		$(s_tablename+'_val[name="weg_thpx_1st_lgd_toyota_l2"]').text(res*rawdata_scale);
	}
	
	res = parseInt($(s_tablename+'[rfeh="58"]').text(), 16); // RFEH_58
	if(toyota_en == 0){
		$(s_tablename+'_val[name="weg_thpx_1st_lgd_toyota_l3"]').text(0);
	}
	else{
		$(s_tablename+'_val[name="weg_thpx_1st_lgd_toyota_l3"]').text(res*rawdata_scale);
	}

	res = parseInt($(s_tablename+'[rfeh="10"]').text(), 16); // RFEH_10
	$(s_tablename+'_val[name="weg_thpx_1st_noise_add"]').text(rawdata_scale*res);
	
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
	
	res = parseInt($(s_tablename+'[rfeh="b4"]').text(), 16); // RFEH_b4
	if(m_glove_scale){
		$(s_tablename+'_val[name="glove_weg_thpx_ent"]').text(res*rawdata_scale);	
		$(s_tablename+'_val[name="glove_weg_thpx_ent_2nd"]').text(res*rawdata_scale);
		$(s_tablename+'_val[name="glove_weg_thpx_ent_3rd"]').text(res*rawdata_scale);
		$('.glove_weg_ccc').text("(Rfeh[0xB4] * Rfeh[0x0F])");
	
	}
	else{
		$(s_tablename+'_val[name="glove_weg_thpx_ent"]').text(res);	
		$(s_tablename+'_val[name="glove_weg_thpx_ent_2nd"]').text(res);
		$(s_tablename+'_val[name="glove_weg_thpx_ent_3rd"]').text(res);
		$('.glove_weg_ccc').text("(Rfeh[0xB4])");
	}
	
	res = parseInt($(s_tablename+'[rfeh="7d"]').text(), 16); // RFEH_7D
	$(s_tablename+'_val[name="weg_thpx_2nd_noise_add"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="7e"]').text(), 16); // RFEH_7e
	$(s_tablename+'_val[name="weg_thpx_3rd_lgd"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="81"]').text(), 16); // RFEH_81
	$(s_tablename+'_val[name="weg_thpx_3rd_noise_add"]').text(res*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="13"]').text(), 16); // RFEH_13
	$(s_tablename+'_val[name="weg_rx_area_1"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="14"]').text(), 16); // RFEH_14
	$(s_tablename+'_val[name="weg_rx_area_2"]').text(res);	
	
	// CCL===============================================================
	res = parseInt($(s_tablename+'[rfeh="32"]').text(), 16); // RFEH_32
	$(s_tablename+'_val[name="mut_ccl_ord_s_cps"]').text((res & 0x0F)*rawdata_scale);
	$(s_tablename+'_val[name="mut_ccl_ord_s_dps"]').text((res >> 4)*rawdata_scale);
	
	res = parseInt($(s_tablename+'[rfeh="34"]').text(), 16); // RFEH_34
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_l_cps"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="35"]').text(), 16); // RFEH_35
	$(s_tablename+'_val[name="mut_ccl_ord_lgd_l_dps"]').text(res*rawdata_scale);
	
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
	
	//Finger Sep ========================================================
	res = parseInt($(s_tablename+'[rfeh="33"]').text(), 16); // RFEH_33
	$(s_tablename+'_val[name="mut_ccl_dis"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="160"]').text(), 16); // RFEH_160
	$(s_tablename+'_val[name="finger_debounce_lgd_enter"]').text((res&0x0F));
	$(s_tablename+'_val[name="finger_debounce_lgd_leave"]').text(((res&0xF0)>>4));	

	/*res = parseInt($(s_tablename+'[rfeh="32"]').text(), 16); // RFEH_32
	$(s_tablename+'_val[name="fs_mut_ccl_ord_s_dps"]').text(((res>>4)*10));
	$(s_tablename+'_val[name="fs_mut_ccl_ord_s_cps"]').text(((res&0x0F)*10));*/
	
	// Palm==============================================================
	res = parseInt($(s_tablename+'[rfeh="26"]').text(), 16); // RFEH_26
	$(s_tablename+'_val[name="mut_rej_blk_lgd"]').text(res);		

	res = parseInt($(s_tablename+'[rfeh="24"]').text(), 16); // RFEH_24
	$(s_tablename+'_val[name="mut_rej_blk"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="27"]').text(), 16); // RFEH_27
	$(s_tablename+'_val[name="mut_palm_blk_lg"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="b6"]').text(), 16); // RFEH_b6
	$(s_tablename+'_val[name="glove_palm_blk"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="2b"]').text(), 16); // RFEH_2B
	$(s_tablename+'_val[name="mut_thpx_palm"]').text(res*scale);	

	res = parseInt($(s_tablename+'[rfeh="23"]').text(), 16); // RFEH_23
	$(s_tablename+'_val[name="mut_plam_frame"]').text((res*10));
	
	//Glove==============================================================
	res = parseInt($(s_tablename+'[rfeh="b8"]').text(), 16); // RFEH_b8
	$(s_tablename+'_val[name="glove_ent_sel_enter"]').text((res&0x0F)+1);

	res = parseInt($(s_tablename+'[rfeh="b9"]').text(), 16); // RFEH_b9
	$(s_tablename+'_val[name="glove_ent_ulmt"]').text(res*scale);	

	res = parseInt($(s_tablename+'[rfeh="ba"]').text(), 16); // RFEH_ba
	$(s_tablename+'_val[name="glove_ent_dlmt"]').text(res*scale);
	
	res = parseInt($(s_tablename+'[rfeh="bb"]').text(), 16); // RFEH_bb
	$(s_tablename+'_val[name="glove_ent_fng_lev_tm"]').text(res*10);	

	res = parseInt($(s_tablename+'[rfeh="bc"]').text(), 16); // RFEH_bc
	$(s_tablename+'_val[name="glove_ent_bd_rng"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="bd"]').text(), 16); // RFEH_bd
	if(m_glove_scale){
		$(s_tablename+'_val[name="glove_ent_weg_thx"]').text(res*rawdata_scale);
		$('.glove_weg_ddd').text("Rfeh[0xBD] * Rfeh[0x0F]");
	}
	else{
		$(s_tablename+'_val[name="glove_ent_weg_thx"]').text(res);
		$('.glove_weg_ddd').text("Rfeh[0xBD]");
	}
	
	res = parseInt($(s_tablename+'[rfeh="be"]').text(), 16); // RFEH_be
	$(s_tablename+'_val[name="glove_ent_rng"]').text(res&0x0F);		

	res = parseInt($(s_tablename+'[rfeh="bf"]').text(), 16); // RFEH_bf
	$(s_tablename+'_val[name="glove_lev_mod_frm"]').text(2*res);
	
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
	// Check tp version...... added on 2021.6.17th 
	var recal_version = $('.5478_tp_version[name="Recal"]').text(); //console.log("recal version is "+recal_version);
	res = parseInt($(s_tablename+'[rfeh="c"]').text(), 16); // RFEH_0c
	if((m_recal_scale == 1) || (recal_version == "01.01")){
		$(s_tablename+'_val[name="recal_thpx"]').text(res*scale);
		$('.recal_thx_label').text("Rfeh[0x0C]*sig_scale");
		
	}
	else{
		$(s_tablename+'_val[name="recal_thpx"]').text(res);
		$('.recal_thx_label').text("Rfeh[0x0C]");
	}
	
	res = parseInt($(s_tablename+'[rfeh="75"]').text(), 16); // RFEH_75
	$(s_tablename+'_val[name="mut_null_blk"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="52"]').text(), 16); // RFEH_52
	$(s_tablename+'_val[name="quit_idle_base_diff"]').text(res*10);	

	res = parseInt($(s_tablename+'[rfeh="5d"]').text(), 16); // RFEH_5d
	$(s_tablename+'_val[name="recal_distance"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="5f"]').text(), 16); // RFEH_5f
	$(s_tablename+'_val[name="recal_distance_scale"]').text(res);		

	res = parseInt($(s_tablename+'[rfeh="5c"]').text(), 16); // RFEH_5c
	$(s_tablename+'_val[name="recal_count"]').text(res);	

	res = parseInt($(s_tablename+'[rfeh="5e"]').text(), 16); // RFEH_5e
	$(s_tablename+'_val[name="recal_count_scale"]').text(res);
	
	//Tapping============================================================
	res = parseInt($(s_tablename+'[rfeh="1e"]').text(), 16); // RFEH_1E
	$(s_tablename+'_val[name="tap_dis_pr_low"]').text(res&0x0F);
	$(s_tablename+'_val[name="tap_dis_pr_high"]').text(res>>4);
	
	res = parseInt($(s_tablename+'[rfeh="1d"]').text(), 16); // RFEH_1D
	$(s_tablename+'_val[name="tap_const_frm"]').text(res>>4);
	//Tsix===============================================================
	res = parseInt($(s_tablename+'[rfeh="50"]').text(), 16); // RFEH_50
	$(s_tablename+'_val[name="sw_tsix_low_period"]').text(res*10);

	res = parseInt($(s_tablename+'[rfeh="51"]').text(), 16); // RFEH_51
	$(s_tablename+'_val[name="sw_tsix_delay_frame"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="3"]').text(), 16); // RFEH_03
	if((res&0x01) == 1){
		$(s_tablename+'_val[name="sw_tsix_en_parse"]').text("Edge Trigger");
	}
	else{
		$(s_tablename+'_val[name="sw_tsix_en_parse"]').text("Level Trigger");
	}
	//ESD================================================================
	res = parseInt($(s_tablename+'[rfeh="9c"]').text(), 16); // RFEH_9c
	res_h = parseInt($(s_tablename+'[rfeh="9d"]').text(), 16); // RFEH_9d
	$(s_tablename+'_val[name="esd_max_sensed_block"]').text(((res_h*256) + res));
	
	res = parseInt($(s_tablename+'[rfeh="9e"]').text(), 16); // RFEH_9e
	res_h = parseInt($(s_tablename+'[rfeh="9f"]').text(), 16); // RFEH_9f
	$(s_tablename+'_val[name="esd_col_mean_thx"]').text(((res_h*256) + res));
	
	res = parseInt($(s_tablename+'[rfeh="a0"]').text(), 16); // RFEH_a0
	$(s_tablename+'_val[name="esd_col_block_thx"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="a8"]').text(), 16); // RFEH_a8
	$(s_tablename+'_val[name="esd_col_mul_finger_num"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="a1"]').text(), 16); // RFEH_a1
	res_h = parseInt($(s_tablename+'[rfeh="a2"]').text(), 16); // RFEH_a2
	$(s_tablename+'_val[name="esd_max_thx"]').text(((res_h*256) + res));
	
	res = parseInt($(s_tablename+'[rfeh="ab"]').text(), 16); // RFEH_ab
	$(s_tablename+'_val[name="esd_block_debounce"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="16b"]').text(), 16); // RFEH_16b
	$(s_tablename+'_val[name="esd_block_weighting"]').text(res*rawdata_scale);	
	
	res = parseInt($(s_tablename+'[rfeh="a5"]').text(), 16); // RFEH_a5
	$(s_tablename+'_val[name="esd_hor_col_count"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="a3"]').text(), 16); // RFEH_a3
	res_h = parseInt($(s_tablename+'[rfeh="a4"]').text(), 16); // RFEH_a4
	$(s_tablename+'_val[name="esd_hor_col_thx"]').text(((res_h*256) + res));
	
	//Ghost point protection=============================================
	res = parseInt($(s_tablename+'[rfeh="96"]').text(), 16); // RFEH_96
	$(s_tablename+'_val[name="ghost_point_protect_l1"]').text(res);
	res = parseInt($(s_tablename+'[rfeh="97"]').text(), 16); // RFEH_97
	$(s_tablename+'_val[name="ghost_point_protect_l2"]').text(res);
	res = parseInt($(s_tablename+'[rfeh="82"]').text(), 16); // RFEH_82
	$(s_tablename+'_val[name="ghost_point_protect_l3"]').text(res);
	res = parseInt($(s_tablename+'[rfeh="91"]').text(), 16); // RFEH_91
	$(s_tablename+'_val[name="ghost_point_protect_interval"]').text(res);
	
	// vsync
	res = parseInt($(s_tablename+'[rfeh="92"]').text(), 16); // RFEH_92
	res_h = parseInt($(s_tablename+'[rfeh="93"]').text(), 16); // RFEH_93
	$(s_tablename+'_val[name="osc_tracking_vsync_target"]').text(((res_h*256) + res));
	
	res = parseInt($(s_tablename+'[rfeh="cf"]').text(), 16); // RFEH_cf
	$(s_tablename+'_val[name="osc_tracking_5_dd_frame"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="140"]').text(), 16); // RFEH_140
	$(s_tablename+'_val[name="auto_self_test_vr4"]').text(res);
	
	res = parseInt($(s_tablename+'[rfeh="141"]').text(), 16); // RFEH_141
	$(s_tablename+'_val[name="auto_self_test_ptba_bias"]').text((res>>4));
	$(s_tablename+'_val[name="auto_self_test_ptba_adc"]').text((res&0x0F));
	
	res = parseInt($(s_tablename+'[rfeh="142"]').text(), 16); // RFEH_142
	res_h = parseInt($(s_tablename+'[rfeh="143"]').text(), 16); // RFEH_143	
	$(s_tablename+'_val[name="auto_self_test_unused_ch"]').text(((res_h*256) + res));
	
	res = parseInt($(s_tablename+'[rfeh="d4"]').text(), 16); // RFEH_d4
	res_h = parseInt($(s_tablename+'[rfeh="d5"]').text(), 16); // RFEH_d5
	$(s_tablename+'_val[name="rawdata_normalized_f0"]').text(((res_h*256) + res));
	
	res = parseInt($(s_tablename+'[rfeh="d6"]').text(), 16); // RFEH_d4
	res_h = parseInt($(s_tablename+'[rfeh="d7"]').text(), 16); // RFEH_d5
	$(s_tablename+'_val[name="rawdata_normalized_f1"]').text(((res_h*256) + res));
	
	// lpwug idle gesture
	res = parseInt($(s_tablename+'[rfeh="da"]').text(), 16); // RFEH_da
	$(s_tablename+'_val[name="lpwug_idle_lev_block_count"]').text(res);	
	
	res = parseInt($(s_tablename+'[rfeh="db"]').text(), 16); // RFEH_db
	$(s_tablename+'_val[name="lpwug_idle_lev_doubleclick_frame"]').text(res);	
	//===================================================================
	res = parseInt($(s_tablename+'[rfeh="38"]').text(), 16); // RFEH_38
	res_h =  parseInt($(s_tablename+'[rfeh="99"]').text(), 16); // RFEH_99
	$(s_tablename+'_val[name="emi_idle_enter_count"]').text(res_h*res);
	
	res_h =  parseInt($(s_tablename+'[rfeh="19"]').text(), 16); // RFEH_19
	$(s_tablename+'_val[name="emi_idle_positive_thx"]').text(res_h*scale);
	
	res_h =  parseInt($(s_tablename+'[rfeh="4e"]').text(), 16); // RFEH_4e
	$(s_tablename+'_val[name="emi_idle_negative_thx"]').text(res_h*scale);
	
	res_h =  parseInt($(s_tablename+'[rfeh="94"]').text(), 16); // RFEH_94
	$(s_tablename+'_val[name="emi_idle_positive_count"]').text(res_h);
	
	res_h =  parseInt($(s_tablename+'[rfeh="95"]').text(), 16); // RFEH_95
	$(s_tablename+'_val[name="emi_idle_negative_count"]').text(res_h);
	
	// ================================================================
	res_h =  parseInt($(s_tablename+'[rfeh="9a"]').text(), 16); // RFEH_9a (pin_sel)
	var pin_sel_fail, pin_mode_fail;
	if((res_h&0x0F) == 2){
		pin_sel_fail = "GPIO 1";
	}
	else if((res_h&0x0F) == 4){
		pin_sel_fail = "GPIO 2";
	}
	else{
		pin_sel_fail = "Fail Det pin";
	}
	$(s_tablename+'_val[name="dd_fail_det_pin_sel"]').text(pin_sel_fail);
	
	if(((res_h >> 4)&0x0F) == 2){
		pin_sel_fail = "GPIO 1";
	}
	else if(((res_h >> 4)&0x0F) == 4){
		pin_sel_fail = "GPIO 2";
	}
	else{
		pin_sel_fail = "Fail Det pin";
	}
	$(s_tablename+'_val[name="tp_fail_det_pin_sel"]').text(pin_sel_fail);
	
	//................................................................................
	res_h =  parseInt($(s_tablename+'[rfeh="9b"]').text(), 16); // RFEH_9b (mode_sel)
	if((res_h&0x0F) == 0){
		pin_mode_fail = "Alive";
	}
	else{
		pin_mode_fail = "Level";
	}
	$(s_tablename+'_val[name="dd_fail_det_mode_sel"]').text(pin_mode_fail);
	
	if(((res_h >> 4)&0x0F) == 0){
		pin_mode_fail = "Alive";
	}
	else{
		pin_mode_fail = "Level";
	}
	$(s_tablename+'_val[name="tp_fail_det_mode_sel"]').text(pin_mode_fail);
	// ================================================================
	// Checker difference
	if(s_tablename == '.5478_sram_alg'){
		var eb_b1 = $('#record_eb_bank1').text().split(',');
		//console.log(eb_b1);
		//console.log(eb_b1.length);
		var pa_val;
		if(eb_b1.length > 2){ // golden value of type 3
			pa_val = parseInt(eb_b1[0], 16);
			var tmp_val = parseInt(eb_b1[1], 16);
			
			var line_golden = (pa_val*256) + tmp_val;
			$(s_tablename+'_val[name="osc_tracking_line"]').text(line_golden);
		}
		if(eb_b1.length > 3){ // N frame on type 4
			pa_val = parseInt(eb_b1[2], 16);
			$(s_tablename+'_val[name="osc_tracking_n_frame"]').text(pa_val);
		}
		if(eb_b1.length > 4){ // limit
			pa_val = parseInt(eb_b1[3], 16);
			$(s_tablename+'_val[name="osc_tracking_limit"]').text(pa_val);
		}
		if(eb_b1.length > 5){ // VSP
			pa_val = parseInt(eb_b1[4], 16);
			$('#dd_reg_vsp_parse').text(pa_val/10);
		}
		//..............................................................................
		var osc_burst = $('.5478_flash_func[name="OSC_TRACKING_BURST_MODE"] span').text();
		var osc_line = $('.5478_flash_func[name="OSC_TRACKING_LINE_COUNTER"] span').text();
		var osc_type;
		if((osc_burst == "On") && (osc_line == "Off")){
			osc_type = "Type 2";
		}
		else if((osc_burst == "On") && (osc_line == "On")){
			osc_type = "Type 3";
		}
		else if((osc_burst == "Off") && (osc_line == "On")){
			osc_type = "Type 4";
		}
		else {
			osc_type = "Type 1";
		}
		$(s_tablename+'_val[name="osc_tracking_type"]').text(osc_type);
		
		//-..................................................	
		
	}
	else{ // sample file
		res_h =  parseInt($('.tp_sample_alg_unlist[name="osc_tracking_line"]').text(), 16); // rfeh_18d
		$('.tp_sample_alg_val[name="osc_tracking_line"]').text(res_h);
	
		res_h =  parseInt($('.tp_sample_alg_unlist[name="osc_tracking_n_frame"]').text(), 16); // rfeh_18e
		$('.tp_sample_alg_val[name="osc_tracking_n_frame"]').text(res_h);
		
		res_h =  parseInt($('.tp_sample_alg_unlist[name="osc_tracking_limit"]').text(), 16); // rfeh_18f
		$('.tp_sample_alg_val[name="osc_tracking_limit"]').text(res_h);
		
		// rfeh_190
		$('.tp_sample_alg_val[name="osc_tracking_type"]').text($('.tp_sample_alg_unlist[name="osc_tracking_type"]').text());
	}
	// ================================================================
}

function Create_bl_chart(){
	var baseline_build = 0;
	
	var tmp_udt = parseInt($('.5478_sram_alg[rfeh="37"]').text(), 16);
	var recal_tm = parseInt($('.5478_sram_alg[rfeh="36"]').text(), 16);
	
	baseline_build = 10 + (tmp_udt * 20 + recal_tm);
	
    var chart = new CanvasJS.Chart("Bl_build_chart_container",
    {
	  width: 800,
      title:{
		text: "Baseline Build"
      },
      
      axisX: {
        interval: 1,
        labelFormatter: function(){
        return " ";
        }
      },
     
      data: [
      {
        type: "stackedBar",
        /*legendText: "Non",*/
        showInLegend: false,
        indexLabel: "Discard {y} Frames",
        dataPoints: [
        { x: 1, y: (parseInt($('.5478_sram_alg[name="bs_delay_frame"]').text(), 16))},
        ]
      },
        {
        type: "stackedBar",
        /*legendText: "Glove",*/
        showInLegend: false,
        indexLabel: "Average {y}",
        dataPoints: [
        { x: 1, y: (parseInt($('.5478_sram_alg[name="bnk_seh_lat"]').text(), 16))},
        ]
      },
	  {
        type: "stackedBar",
        /*legendText: "Glove",*/
        showInLegend: false,
        indexLabel: "Update",
        dataPoints: [
        { x: 1, y: 1},
        ]
      },
        {
        type: "stackedBar",
        /*legendText: "Normal",*/
        showInLegend: false,
        indexLabel: "Finish",
        dataPoints: [
        { x: 1, y: 1},
        ]
      },

      ]
    });

    chart.render();
    chart.axisX[0].remove();
	
	var b_chart = new CanvasJS.Chart("Bl_update_chart_container",
    {
	  width: 800,
      title:{
		text: "Baseline Update"
      },
      
      axisX: {
        interval: 1,
        labelFormatter: function(){
        return " ";
        }
      },
     
      data: [
      {
        type: "stackedBar",
        /*legendText: "Non",*/
        showInLegend: false,
        indexLabel: "Average {y} Frames",
        dataPoints: [
		{ x: 1, y: (baseline_build)},
        ]
      },
        
        {
        type: "stackedBar",
        /*legendText: "Normal",*/
        showInLegend: false,
        indexLabel: "Update",
        dataPoints: [
        { x: 1, y: 1},
        ]
      },
      ]
    });

    b_chart.render();
    b_chart.axisX[0].remove();
}
function Create_sig_chart(){
	var sig_thx_en = parseInt($('.5478_sram_alg[rfeh="ad"]').text(), 16); // RFEH_AD
	sig_thx_en = (sig_thx_en & 0x01);
	
	var sig_thx_scale = 1;
	if(sig_thx_en == 1){
		sig_thx_scale = parseInt($('.5478_sram_alg[name="sig_thx_scale"]').text(), 16);
	}
	else{
		sig_thx_scale = 1;
	}
	var glove_ent_dlmt = sig_thx_scale*parseInt($('.5478_sram_alg[name="glove_ent_dlmt"]').text(), 16);
	var glove_ent_ulmt = sig_thx_scale*parseInt($('.5478_sram_alg[name="glove_ent_ulmt"]').text(), 16);
	var glove_thpx = sig_thx_scale*parseInt($('.5478_sram_alg[name="glove_thpx"]').text(), 16);
	var mut_thpx_lgd = sig_thx_scale*parseInt($('.5478_sram_alg[name="mut_thpx_lgd"]').text(), 16);
	
	var chart = new CanvasJS.Chart("Signal_chart", {
		animationEnabled: true,
		exportEnabled: true,
		width: 800,
		title: {
			text: "Signal Threshold"
		},
		axisX: {
			title: "",
			interval: 10,
		},
		axisY: {
			includeZero: false,
			title: "Signal",
			maximum: 1000,
			interval: 100,
			/*suffix: "k",
			prefix: "$"*/
			scaleBreaks: {
				customBreaks: [{
					startValue: 500,
					endValue: 1000,
					type: "wavy",
					/*color: "orange"*/
				}]
			},
		}, 
		data: [{
			type: "rangeBar",
			showInLegend: false,
			yValueFormatString: "#",
			indexLabel: "{y[#index]}",
			toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
			dataPoints: [
				{ x: 10, y:[0, glove_ent_dlmt], label: "Invalid"},
				{ x: 20, y:[glove_ent_dlmt, glove_ent_ulmt], label: "Enter Glove"},
				{ x: 30, y:[glove_thpx, mut_thpx_lgd], label: "Glove mode"},
				{ x: 40, y:[mut_thpx_lgd, 1000], label: "Normal mode"}
			]
		}]
	});
	chart.render();
	

}
function Parse_ALG(){ // size: 0x180
	var content = '';
	var i = 0 ,j = 0,len = 0x180;
	var name, td_name, td_value, result, line;
	var offset = (0x11500 - 0x11400);
	var tmp_offset = 0;
	var get_name = '';
	var get_ind = 0;
	
	for(i = 0; i< (len/32);i++){
		tmp_offset = (offset+(i*32));  
		
		td_name = '.bin_group_tp_hw_config[offset=\"'+tmp_offset+'\"]';	 
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
	Create_bl_chart();
	Create_sig_chart();
	
	return content;
}
function Parse_Tp_version(){
	var i = 0 ,j = 0,len = 1024;
	var name, td_name, td_value, result, line;
	var offset = 0;//(0x1dc00);
	var tmp_offset = 0;
	var get_name = '';
	var get_ind = 0;
	var master_ver = 0;
	var tp_version_name = '', tp_version='', tp_tmp = '';
	var tp_version_index = 0;
	$('.5478_tp_version').text("");
	
	for(i = 0; i< (len/32);i++){
		tmp_offset = (offset+(i*32));  
		
		td_name = '.bin_group_tp_version_table[offset=\"'+tmp_offset+'\"]';	 
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
	var offset = (0x11680 - 0x11400);
	var td_value_l, td_name_l;
	var td_value_h, td_name_h;
	var td_name;
	var tmp;
	var tmp_val = 0;
	var size = 0, index = 0;
	
	// Get Start
	var line;
	td_name_l = '.bin_group_tp_hw_config[offset=\"'+offset+'\"]';
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
	var offset = 992;//(0x117E4 - 0x11400); // alg2
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_t;
	var td_name_0, td_name_1, td_name_2, td_name_3;
	var bit;
	
	// Start address
	var index = 4; // start from index 4
	td_name_0 = '.bin_group_tp_hw_config[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	
	// ALG2===============================================================================================
	td_value_0 = parseInt($.trim(line[index]), 16); // index 4
	td_value_1 = parseInt($.trim(line[index+1]), 16);
	td_value_2 = parseInt($.trim(line[index+2]), 16);
	td_value_3 = parseInt($.trim(line[index+3]), 16);
	td_value_t = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
	
	$('.5478_flash_func_alg_2').each(function() {
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
	index+=4;//(0x117E8 - 0x11400); // display
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
	// MPFW===============================================================================================
	index+=4;//(0x117EC - 0x11400); // mpfw
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
	// CLIB===============================================================================================
	index+=2;//(0x117EE - 0x11400); // clib
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
	
	// alg===============================================================================================
	index+=6; //(0x117F4 - 0x11400); // alg
	td_value_0 = parseInt($.trim(line[index]), 16); // index 20
	td_value_1 = parseInt($.trim(line[index+1]), 16);
	td_value_2 = parseInt($.trim(line[index+2]), 16);
	td_value_3 = parseInt($.trim(line[index+3]), 16);
	td_value_t = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0; 
	
	$('.5478_flash_func_alg').each(function() {
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
	var i = 0, offset = 0, index = 0;
	var content = '';
	var td_name_0;
	
	content+='#ifndef _PA5478A_DD_ROM_CODE_H\n';
	content+='#define _PA5478A_DD_ROM_CODE_H\n\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='/*                                            CONST VARIABLE                                               */\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='/*---------------------------------------------------------------------------------------------------------*/\n';
	content+='UINT8 Dd_rom[4092] =\n';
	content+='{\n';
	
	
	
	// Start address
	td_name_0 = '.bin_group_dd_rom[offset=\"'+offset+'\"]';
	var line = ($(td_name_0).text()).split(':')[1].split(',');
	
	for(i = 0; i< 4092; i++){
		
		content+= "0x"+($.trim(line[index])).toString(16)+", ";
		if((i%16) == 15){
			content+="\n";
		}
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_dd_rom[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	
	content+='\n};\n\n';
	content+='#endif /* _PA5478A_DD_ROM_CODE_H */\n';
	$('#bin_dd_rom_code').val(content);
	
	
	offset = 4064;
	index = 28;
	td_name_0 = '.bin_group_dd_rom[offset=\"'+offset+'\"]';
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
	td_name_0 = '.bin_group_header[offset=\"'+offset+'\"]';
	var line = ($(td_name_0).text()).split(':')[1].split(',');
	
	var i = 0;
	// rom code 32-byte
	td_value_0 = "";
	for(i = 0; i< 32; i++){
		td_value_0+= hex_to_ascii($.trim(line[index]));
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_header[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	$('.5478_flash_header[name="rom_code_ver"]').text(td_value_0);
	
	//checksumadded code 8-byte
	offset = 928;//(0x3A0 - 0x000);
	index = 0;
	td_name_0 = '.bin_group_header[offset=\"'+offset+'\"]';
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
	td_name_0 = '.bin_group_header[offset=\"'+offset+'\"]';
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
	td_name_0 = '.bin_group_header[offset=\"'+offset+'\"]';
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
	offset = 0;//(0x11402 - 0x11400); // cfg_cid
	index = 2;
	td_name_0 = '.bin_group_tp_hw_config[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 2; i++){
		td_value_0+= ($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_cid"]').text(td_value_0);
	
	offset = 0;//(0x11405 - 0x11400); // cfg_fw
	index = 5;
	td_value_0 = "";
	for(i = 0; i< 2; i++){
		td_value_0+= $.trim(line[i+index]);
	}
	$('.5478_flash_header[name="cfg_fw"]').text(td_value_0); 
	
	offset = 0;//(0x11408 - 0x11400); // cfg_cut
	index = 8;
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_cust"]').text(td_value_0);
	
	offset = 0;//(0x11414 - 0x11400); // cfg_proj
	index = 20;
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[i+index]));
	}
	$('.5478_flash_header[name="cfg_proj"]').text(td_value_0);
	
	offset = 32;//(0x11420 - 0x11400); // cfg_fw_major
	index = 0;
	td_name_0 = '.bin_group_tp_hw_config[offset=\"'+offset+'\"]';
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
	
	offset = 32;//(0x11438 - 0x11400); // cfg_date
	index = 24;
	td_name_0 = '.bin_group_tp_hw_config[offset=\"'+offset+'\"]';
	line = ($(td_name_0).text()).split(':')[1].split(',');
	td_value_0 = "";
	for(i = 0; i< 12; i++){
		td_value_0+= hex_to_ascii($.trim(line[index]));
		index++;
		if((index%32) == 0){
			offset+=32;
			td_name_0 = '.bin_group_tp_hw_config[offset=\"'+offset+'\"]';
			line = ($(td_name_0).text()).split(':')[1].split(',');
			index = 0;
		}
	}
	$('.5478_flash_header[name="cfg_date"]').text(td_value_0);
	
	offset = 64;//(0x11444 - 0x11400); // cfg_sign
	index = 4;
	td_name_0 = '.bin_group_tp_hw_config[offset=\"'+offset+'\"]';
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
	
	//================================================
	var fwticket=parseInt(td_value_0, 10);
	
	// Auto upload system 2023.May.8th
	var binticket = 0;
	var bin_name = $('#upload_bin_file_name').text();
	if(bin_name.split('$').length > 1){
		var bintickettmp=bin_name.split('$')[1].split('.')[0];
		binticket = parseInt(bintickettmp, 10);
		//console.log(binname);
		//console.log(binticket); 
	}
	
	var ticket = 0;
	if(fwticket > 0){
		console.log("Cfg_himax_ticket is "+fwticket);
		ticket = fwticket;
	}
	else if(binticket > 0){
		console.log("binfilename is "+binticket);
		ticket = binticket;
	}
	else{
		console.log("no ticket information");
	}
	
	var option_index = 0;
	$('#upload_select_proj option').each(function(){
		var option_ticket = parseInt($(this).attr('ticket'), 10);
		
		if(option_ticket == ticket){
			//console.log(option_ticket+" index is "+option_index);
			$('#upload_select_proj')[0].selectedIndex = option_index;
		}
		option_index++;
	});
	
	//****************************
	// Same function with Select_project_check
	var projid = parseInt($( "#upload_select_proj option:selected" ).val(), 10); //console.log(projid);

	if(projid < 0){
		$("#upload_macro_server").prop("disabled", true);
		$('.pu_compare_lastest').hide();
		$('#upload_macro_compare').hide();
		$('.bin_external_settings').css('display', 'none');
	}
	else{
		$("#upload_macro_server").removeAttr('disabled');
		$('.pu_compare_lastest').show();
		$('#upload_macro_compare').show();
		Load_external_settings(projid);
	}
	//**********************************
}

function Parse_Dd_init(){
	var offset = 0;//(0x13c00 - 0x13c00); // dd init code
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_t;
	var td_name_0, td_name_1, td_name_2, td_name_3;
	var tmp_0, tmp_1, tmp_2, tmp_3;
	var maxlen = 0, i = 0, tmp_trim, index = 0;
	var ddreg, bank = 0, pa, value, len;
	var content;
	content = "UINT8 Dd_initial[DD_INITIAL_LEN] =\n";
	content+="{\n";
	
	// Get Start
	var start_name = '.bin_group_dd_initial[offset=\"'+(offset)+'\"]';
	var line = ($(start_name).text()).split(':')[1].split(',');
	
	// Get max len
	td_value_0 = parseInt($.trim(line[0]), 16);
	td_value_1 = parseInt($.trim(line[1]), 16);
	td_value_2 = parseInt($.trim(line[2]), 16);
	td_value_3 = parseInt($.trim(line[3]), 16);
	maxlen = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0; 
	
	tmp_0 = (td_value_0.toString(16));
	tmp_1 = (td_value_1.toString(16));
	tmp_2 = (td_value_2.toString(16));
	tmp_3 = (td_value_3.toString(16));
	content+="	0x"+tmp_0.padStart(2, "0")+", 0x"+tmp_1.padStart(2, "0")+", 0x"+tmp_2.padStart(2, "0")+", 0x"+tmp_3.padStart(2, "0")+",\n";

	offset = 0;	
	index = 4;
	while(offset < maxlen){
		tmp_trim = $.trim(line[index]); 
		len = parseInt(tmp_trim, 16); 
		if(len == 0){
			break;
		}
		index++; 
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_initial[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		
		tmp_trim = $.trim(line[index]);
		ddreg = parseInt(tmp_trim, 16); 
		
		if(ddreg == 0xBD){
			if(len != 1){
				console.log("0xBD len is error\n");
				$(document).Toasts('create', {
					class: 'bg-danger',
					title: 'Error',
					subtitle: '0xBD len is error',
					body: 'Please check 0xBD len is error'
				});
				break;
			}
			index++;
			if((index%32) == 0){
				// change line
				offset+=32;
				start_name = '.bin_group_dd_initial[offset=\"'+(offset)+'\"]';
				line = ($(start_name).text()).split(':')[1].split(',');
				index = 0;
			}
			
			tmp_trim = $.trim(line[index]);
			bank = parseInt(tmp_trim, 16);
			
			tmp_0 = ddreg.toString(16).toUpperCase();
			tmp_1 = len.toString(16).toUpperCase();
			tmp_2 = bank.toString(16).toUpperCase();
			content+="	0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_0.padStart(2,"0")+",\n"; // len, ddreg
			content+="	0x"+tmp_2.padStart(2,"0")+", \n\n"; // bank
		}
		else{
			tmp_0 = ddreg.toString(16).toUpperCase();
			tmp_1 = len.toString(16).toUpperCase();
			content+="	/* Driver_R"+tmp_0.padStart(2,"0")+"H_BK"+bank+" */\n"; // comment
			content+="	0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_0.padStart(2,"0")+","; // len, ddreg
			
			for(i = 0; i < len; i++){
				pa = i;
				
				index++;
				if((index%32) == 0){
					// change line
					offset+=32;
					start_name = '.bin_group_dd_initial[offset=\"'+(offset)+'\"]';
					line = ($(start_name).text()).split(':')[1].split(',');
					index = 0;
				}
				
				tmp_trim = $.trim(line[index]);
				value = parseInt(tmp_trim, 16);  
				
				tmp_2 = value.toString(16).toUpperCase(); 
				if((i%10) == 0){
					content+="\n	0x"+tmp_2.padStart(2,"0")+", "; // value
				}
				else{
					content+="0x"+tmp_2.padStart(2,"0")+", "; // value
				}
				
				//console.log("0x"+ddreg.toString(16)+"_BK"+bank+" PA+"+pa+" is 0x"+value.toString(16));
			}
			content+="\n\n";
		}
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_initial[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		
	}
	
	content+="	0x00\n";
	content+="};\n";
	
	return content;
}

function Parse_Dd_init_2(){ // 2nd dd init code
	var offset = 0;// 0x14000  // dd init code2
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_t;
	var td_name_0, td_name_1, td_name_2, td_name_3;
	var tmp_0, tmp_1, tmp_2, tmp_3;
	var maxlen = 0, i = 0, tmp_trim, index = 0;
	var ddreg, bank = 0, pa, value, len;
	var content;
	content = "UINT8 Dd_initial2[DD_INITIAL_LEN] =\n";
	content+="{\n";
	
	// Get Start
	var start_name = '.bin_group_dd_initial2[offset=\"'+(offset)+'\"]';
	var line = ($(start_name).text()).split(':')[1].split(',');
	
	// Get max len
	td_value_0 = parseInt($.trim(line[0]), 16);
	td_value_1 = parseInt($.trim(line[1]), 16);
	td_value_2 = parseInt($.trim(line[2]), 16);
	td_value_3 = parseInt($.trim(line[3]), 16);
	maxlen = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0; 
	// When it is empty, maxlen is 0
	// console.log("dd init code 2 " +maxlen);
	if(maxlen  == 0){
		return ""; // return empty
	}
	
	tmp_0 = (td_value_0.toString(16));
	tmp_1 = (td_value_1.toString(16));
	tmp_2 = (td_value_2.toString(16));
	tmp_3 = (td_value_3.toString(16));
	content+="	0x"+tmp_0.padStart(2, "0")+", 0x"+tmp_1.padStart(2, "0")+", 0x"+tmp_2.padStart(2, "0")+", 0x"+tmp_3.padStart(2, "0")+",\n";

	offset = 0;	
	index = 4;
	while(offset < maxlen){
		tmp_trim = $.trim(line[index]); 
		len = parseInt(tmp_trim, 16); 
		if(len == 0){
			break;
		}
		index++; 
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_initial2[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		
		tmp_trim = $.trim(line[index]);
		ddreg = parseInt(tmp_trim, 16); 
		
		if(ddreg == 0xBD){
			if(len != 1){
				console.log("0xBD len is error\n");
				$(document).Toasts('create', {
					class: 'bg-danger',
					title: 'Error',
					subtitle: '0xBD len is error',
					body: 'Please check 0xBD len is error'
				});
				break;
			}
			index++;
			if((index%32) == 0){
				// change line
				offset+=32;
				start_name = '.bin_group_dd_initial2[offset=\"'+(offset)+'\"]';
				line = ($(start_name).text()).split(':')[1].split(',');
				index = 0;
			}
			
			tmp_trim = $.trim(line[index]);
			bank = parseInt(tmp_trim, 16);
			
			tmp_0 = ddreg.toString(16).toUpperCase();
			tmp_1 = len.toString(16).toUpperCase();
			tmp_2 = bank.toString(16).toUpperCase();
			content+="	0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_0.padStart(2,"0")+",\n"; // len, ddreg
			content+="	0x"+tmp_2.padStart(2,"0")+", \n\n"; // bank
		}
		else{
			tmp_0 = ddreg.toString(16).toUpperCase();
			tmp_1 = len.toString(16).toUpperCase();
			content+="	/* Driver_R"+tmp_0.padStart(2,"0")+"H_BK"+bank+" */\n"; // comment
			content+="	0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_0.padStart(2,"0")+","; // len, ddreg
			
			for(i = 0; i < len; i++){
				pa = i;
				
				index++;
				if((index%32) == 0){
					// change line
					offset+=32;
					start_name = '.bin_group_dd_initial2[offset=\"'+(offset)+'\"]';
					line = ($(start_name).text()).split(':')[1].split(',');
					index = 0;
				}
				
				tmp_trim = $.trim(line[index]);
				value = parseInt(tmp_trim, 16);  
				
				tmp_2 = value.toString(16).toUpperCase(); 
				if((i%10) == 0){
					content+="\n	0x"+tmp_2.padStart(2,"0")+", "; // value
				}
				else{
					content+="0x"+tmp_2.padStart(2,"0")+", "; // value
				}
				
				//console.log("0x"+ddreg.toString(16)+"_BK"+bank+" PA+"+pa+" is 0x"+value.toString(16));
			}
			content+="\n\n";
		}
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_initial2[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		
	}
	
	content+="	0x00\n";
	content+="};\n";
	
	return content;
}

function Parse_Dd_workaround_before_pon(){
	var offset = 0;// dd workaround
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_4;
	var td_name_0, td_name_1, td_name_2, td_name_3, td_name_4;
	var tmp_0, tmp_1, tmp_2, tmp_3, tmp_4;
	var header_0, header_1;
	var maxlen = 0, i = 0, index = 0;
	var ddreg, bank = 0, pa, value, len;
	var content;
	content = "UINT8 Dd_initial_before_pon[DD_INITIAL_WORKAROUND_LEN]    =\n";
	content+="{\n";
	
	// Get Start
	var start_name = '.bin_group_dd_workaround1[offset=\"'+(offset+0)+'\"]';
	var line = ($(start_name).text()).split(':')[1].split(',');
	
	// Get max len
	td_value_0 = parseInt($.trim(line[0]), 16);
	td_value_1 = parseInt($.trim(line[1]), 16);
	td_value_2 = parseInt($.trim(line[2]), 16);
	td_value_3 = parseInt($.trim(line[3]), 16);
	maxlen = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
	
	content+="	DD_WORKAROUND_TABLE_HEADER,\n";
	
	offset = 0;
	index = 4;
	while(offset < maxlen){
		td_value_0 = parseInt($.trim(line[index]), 16); // 0
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround1[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_1 = parseInt($.trim(line[index]), 16); // 1
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround1[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_2 = parseInt($.trim(line[index]), 16); // 2
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround1[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_3 = parseInt($.trim(line[index]), 16); // 3
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround1[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_4 = parseInt($.trim(line[index]), 16); // 4
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround1[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		header_0 = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
		header_1 = td_value_4;
		
		
		//console.log(header_0.toString(16));
		//console.log(header_1.toString(16));
		if((header_0 == 0x56341203) && (header_1 == 0x78)){//(tmp_0 == 0x7856341203){ // END
			content+="	//END: DD_INITIAL_WORKAROUND_END_PW\n";
			content+="	DD_WORKAROUND_TABLE_END,\n";
			break;
		}
		else if((header_0 == 0x43658703) && (header_1 == 0xDD)){ //(tmp_0 == 0xDD43658703){ // Start all
			content+="	DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x00)){//(tmp_0 == 0x0043658703){ // Start master
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_MASTER),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x01)){//(tmp_0 == 0x0143658703){ // Start slave1
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE1),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x02)){//(tmp_0 == 0x0243658703){ // Start slave2
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE2),\n";
		}
		else if((td_value_2 == 0x88) && (td_value_1 == 0x88)){
			td_value_3 = (td_value_3*256)+td_value_4;
			content+="	DD_WORKAROUND_DELAY("+td_value_3+"),\n";
		}
		else{
			tmp_1 = td_value_1.toString(16).toUpperCase();
			tmp_2 = td_value_2.toString(16).toUpperCase();
			tmp_3 = td_value_3.toString(16).toUpperCase();
			tmp_4 = td_value_4.toString(16).toUpperCase();
			
			content+="	DD_FMT_TRANS_TO_INI(";
			content+="0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_2.padStart(2,"0")+", ";
			content+="0x"+tmp_3.padStart(2,"0")+", 0x"+tmp_4.padStart(2,"0");
			content+="),\n"
		}
	}
	content+="};\n";
	return content;
}

function Parse_Dd_workaround_after_pon(){
	var offset = 0;// dd workaround
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_4;
	var td_name_0, td_name_1, td_name_2, td_name_3, td_name_4;
	var tmp_0, tmp_1, tmp_2, tmp_3, tmp_4;
	var header_0, header_1;
	var maxlen = 0, i = 0, index = 0;
	var ddreg, bank = 0, pa, value, len;
	var content;
	//var pll_setting = 0;
	content = "UINT8 Dd_initial_after_pon[DD_INITIAL_WORKAROUND_LEN]    =\n";
	content+="{\n";
	
	// Get Start
	var start_name = '.bin_group_dd_workaround2[offset=\"'+(offset+0)+'\"]';
	var line = ($(start_name).text()).split(':')[1].split(',');
		
	// Get max len
	td_value_0 = parseInt($.trim(line[0]), 16);
	td_value_1 = parseInt($.trim(line[1]), 16);
	td_value_2 = parseInt($.trim(line[2]), 16);
	td_value_3 = parseInt($.trim(line[3]), 16);
	maxlen = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
	
	content+="	DD_WORKAROUND_TABLE_HEADER,\n";
	
	offset = 0;
	index = 4;
	while(offset < maxlen){
		td_value_0 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround2[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_1 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround2[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_2 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround2[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_3 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround2[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_4 = parseInt($.trim(line[index]), 16); 
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround2[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		header_0 = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
		header_1 = td_value_4;
		
		//console.log(header_0.toString(16));
		//console.log(header_1.toString(16));
		if((header_0 == 0x56341203) && (header_1 == 0x78)){//(tmp_0 == 0x7856341203){ // END
			content+="	//END: DD_INITIAL_WORKAROUND_END_PW\n";
			content+="	DD_WORKAROUND_TABLE_END,\n";
			break;
		}
		else if((header_0 == 0x43658703) && (header_1 == 0xDD)){ //(tmp_0 == 0xDD43658703){ // Start all
			content+="	DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x00)){//(tmp_0 == 0x0043658703){ // Start master
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_MASTER),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x01)){//(tmp_0 == 0x0143658703){ // Start slave1
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE1),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x02)){//(tmp_0 == 0x0243658703){ // Start slave2
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE2),\n";
		}
		else if((td_value_2 == 0x88) && (td_value_1 == 0x88)){
			td_value_3 = (td_value_3*256)+td_value_4;
			content+="	DD_WORKAROUND_DELAY("+td_value_3+"),\n";
			
		}
		else if((td_value_0 == 0x03) && (td_value_1 == 0xCB) && (td_value_2 == 0x00) && (td_value_3 == 0x0C)){ // ignore 0xCB, 0x00, 0x0C
			// ignore
			//pll_setting = 1;
			tmp_4 = td_value_4.toString(16).toUpperCase();
			content+="	DD_FMT_TRANS_TO_INI(0xCB, 0x00, 0x0C, 0x"+tmp_4.padStart(2,"0")+"), // 0x05 for single IC; 0x01 for multiple ICs\n";
		}
		else{
			tmp_1 = td_value_1.toString(16).toUpperCase();
			tmp_2 = td_value_2.toString(16).toUpperCase();
			tmp_3 = td_value_3.toString(16).toUpperCase();
			tmp_4 = td_value_4.toString(16).toUpperCase();
			
			content+="	DD_FMT_TRANS_TO_INI(";
			content+="0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_2.padStart(2,"0")+", ";
			content+="0x"+tmp_3.padStart(2,"0")+", 0x"+tmp_4.padStart(2,"0");
			content+="),\n"
		}
	}
	content+="};\n";
	return content;
}

function Parse_Dd_workaround_pon_low(){
	var offset = 0;// dd workaround
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_4;
	var td_name_0, td_name_1, td_name_2, td_name_3, td_name_4;
	var tmp_0, tmp_1, tmp_2, tmp_3, tmp_4;
	var header_0, header_1;
	var maxlen = 0, i = 0, index = 0;
	var ddreg, bank = 0, pa, value, len;
	var content;
	content = "UINT8 Dd_initial_pon_low[DD_INITIAL_WORKAROUND_LEN]    =\n";
	content+="{\n";
	
	// Get Start
	var start_name = '.bin_group_dd_workaround3[offset=\"'+(offset+0)+'\"]';
	var line = ($(start_name).text()).split(':')[1].split(',');
	
	// Get max len
	td_value_0 = parseInt($.trim(line[0]), 16);
	td_value_1 = parseInt($.trim(line[1]), 16);
	td_value_2 = parseInt($.trim(line[2]), 16);
	td_value_3 = parseInt($.trim(line[3]), 16);
	maxlen = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
	
	content+="	DD_WORKAROUND_TABLE_HEADER,\n";
	
	offset = 0;
	index = 4;
	while(offset < maxlen){
		td_value_0 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround3[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_1 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround3[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_2 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround3[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_3 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround3[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_4 = parseInt($.trim(line[index]), 16);  
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround3[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		header_0 = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
		header_1 = td_value_4;
		
		//console.log(header_0.toString(16));
		//console.log(header_1.toString(16));
		if((header_0 == 0x56341203) && (header_1 == 0x78)){//(tmp_0 == 0x7856341203){ // END
			content+="	//END: DD_INITIAL_WORKAROUND_END_PW\n";
			content+="	DD_WORKAROUND_TABLE_END,\n";
			break;
		}
		else if((header_0 == 0x43658703) && (header_1 == 0xDD)){ //(tmp_0 == 0xDD43658703){ // Start all
			content+="	DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x00)){//(tmp_0 == 0x0043658703){ // Start master
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_MASTER),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x01)){//(tmp_0 == 0x0143658703){ // Start slave1
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE1),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x02)){//(tmp_0 == 0x0243658703){ // Start slave2
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE2),\n";
		}
		else if((td_value_2 == 0x88) && (td_value_1 == 0x88)){
			td_value_3 = (td_value_3*256)+td_value_4;
			content+="	DD_WORKAROUND_DELAY("+td_value_3+"),\n";
			
		}
		else{
			tmp_1 = td_value_1.toString(16).toUpperCase();
			tmp_2 = td_value_2.toString(16).toUpperCase();
			tmp_3 = td_value_3.toString(16).toUpperCase();
			tmp_4 = td_value_4.toString(16).toUpperCase();
			
			content+="	DD_FMT_TRANS_TO_INI(";
			content+="0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_2.padStart(2,"0")+", ";
			content+="0x"+tmp_3.padStart(2,"0")+", 0x"+tmp_4.padStart(2,"0");
			content+="),\n"
		}
	}
	content+="};\n";
	return content;
}

function Parse_Dd_workaround_after_dsapmle(){
	var offset = 0;// dd workaround
	var td_value_0, td_value_1, td_value_2, td_value_3, td_value_4;
	var td_name_0, td_name_1, td_name_2, td_name_3, td_name_4;
	var tmp_0, tmp_1, tmp_2, tmp_3, tmp_4;
	var header_0, header_1;
	var maxlen = 0, i = 0, index = 0;
	var ddreg, bank = 0, pa, value, len;
	var content;
	content = "UINT8 Dd_initial_after_dsample[DD_INITIAL_WORKAROUND_LEN]    =\n";
	content+="{\n";
	
	// Get Start
	var start_name = '.bin_group_dd_workaround4[offset=\"'+(offset+0)+'\"]';
	var line = ($(start_name).text()).split(':')[1].split(',');
	
	// Get max len
	td_value_0 = parseInt($.trim(line[0]), 16);
	td_value_1 = parseInt($.trim(line[1]), 16);
	td_value_2 = parseInt($.trim(line[2]), 16);
	td_value_3 = parseInt($.trim(line[3]), 16);
	maxlen = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
	
	content+="	DD_WORKAROUND_TABLE_HEADER,\n";
	
	offset = 0;
	index = 4;
	while(offset < maxlen){
		td_value_0 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround4[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_1 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround4[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_2 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround4[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_3 = parseInt($.trim(line[index]), 16);
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround4[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		td_value_4 = parseInt($.trim(line[index]), 16);  
		index++;
		if((index%32) == 0){
			// change line
			offset+=32;
			start_name = '.bin_group_dd_workaround4[offset=\"'+(offset)+'\"]';
			line = ($(start_name).text()).split(':')[1].split(',');
			index = 0;
		}
		header_0 = (td_value_3 << 24) | (td_value_2 << 16) | (td_value_1 << 8) | td_value_0;
		header_1 = td_value_4;
		
		//console.log(header_0.toString(16));
		//console.log(header_1.toString(16));
		if((header_0 == 0x56341203) && (header_1 == 0x78)){//(tmp_0 == 0x7856341203){ // END
			content+="	//END: DD_INITIAL_WORKAROUND_END_PW\n";
			content+="	DD_WORKAROUND_TABLE_END,\n";
			break;
		}
		else if((header_0 == 0x43658703) && (header_1 == 0xDD)){ //(tmp_0 == 0xDD43658703){ // Start all
			content+="	DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x00)){//(tmp_0 == 0x0043658703){ // Start master
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_MASTER),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x01)){//(tmp_0 == 0x0143658703){ // Start slave1
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE1),\n";
		}
		else if((header_0 == 0x43658703) && (header_1 == 0x02)){//(tmp_0 == 0x0243658703){ // Start slave2
			content+="	DD_WORKAROUND_SEC_START(CASCADE_ID_SLAVE2),\n";
		}
		else if((td_value_2 == 0x88) && (td_value_1 == 0x88)){
			td_value_3 = (td_value_3*256)+td_value_4;
			content+="	DD_WORKAROUND_DELAY("+td_value_3+"),\n";
			
		}
		else{
			tmp_1 = td_value_1.toString(16).toUpperCase();
			tmp_2 = td_value_2.toString(16).toUpperCase();
			tmp_3 = td_value_3.toString(16).toUpperCase();
			tmp_4 = td_value_4.toString(16).toUpperCase();
			
			content+="	DD_FMT_TRANS_TO_INI(";
			content+="0x"+tmp_1.padStart(2,"0")+", 0x"+tmp_2.padStart(2,"0")+", ";
			content+="0x"+tmp_3.padStart(2,"0")+", 0x"+tmp_4.padStart(2,"0");
			content+="),\n"
		}
	}
	content+="};\n";
	return content;
}

function Parse_dd_file(){
	var content = '', w0_content='', w1_content = '', w2_content='', w3_content='', w4_content='';
	var w5_content = '';

	w0_content = Parse_Dd_init();
	w1_content = Parse_Dd_workaround_before_pon();
	w2_content = Parse_Dd_workaround_after_pon();
	w3_content = Parse_Dd_workaround_pon_low();
	w4_content = Parse_Dd_workaround_after_dsapmle();
	// the 2nd dd init code
	w5_content = Parse_Dd_init_2();
	
	content = "#ifndef _PA5469A_DD_INITIAL_CODE_H\n";
	content+= "#define _PA5469A_DD_INITIAL_CODE_H\n";
	content+= "#include \"CONFIG_TOUCH.h\"\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n";
	content+= "/*                                            GLOBAL VARIABLES                                            */\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n";
	content+= "/*                                            CONST VARIABLE                                            */\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n";
	content+= "/*---------------------------------------------------------------------------------------------------------*/\n";
	content+= w0_content+"\n\n"+w1_content+"\n\n"+w2_content+"\n\n"+w3_content+"\n\n"+w4_content+"\n\n"+w5_content+"\n";
	
	content+="#endif /* _PA5460A_DD_INITIAL_CODE_H */\n";
	$('#bin_dd_initial_code').val(content);
}

function Parse_fail_det_oe(){
	//get e5 bank1
	var i = 0;
	var e5_b1 = $('#record_e5_bank1').text();
	var eachpa = e5_b1.split(',');
	var pa_count = eachpa.length;
	var pa_val;
	
	// Fail Det=========================================================
	// Init OEs
	$('.bin_parser_fail_det').text('Unknown');
	
	if(pa_count > 3){
		pa_val = parseInt(eachpa[0], 16);
		$('.bin_parser_fail_det_pa1[bit="0"]').text(pa_val&0x01);
		$('.bin_parser_fail_det_pa1[bit="1"]').text((pa_val>> 1)&0x01);
		$('.bin_parser_fail_det_pa1[bit="2"]').text((pa_val>> 2)&0x01);
		$('.bin_parser_fail_det_pa1[bit="3"]').text((pa_val>> 3)&0x01);
		$('.bin_parser_fail_det_pa1[bit="4"]').text((pa_val>> 4)&0x01);
		$('.bin_parser_fail_det_pa1[bit="5"]').text((pa_val>> 5)&0x01);
		$('.bin_parser_fail_det_pa1[bit="6"]').text((pa_val>> 6)&0x01);
		$('.bin_parser_fail_det_pa1[bit="7"]').text((pa_val>> 7)&0x01);
		
		pa_val = parseInt(eachpa[1], 16);
		$('.bin_parser_fail_det_pa2[bit="0"]').text(pa_val&0x01);
		$('.bin_parser_fail_det_pa2[bit="1"]').text((pa_val>> 1)&0x01);
		$('.bin_parser_fail_det_pa2[bit="2"]').text((pa_val>> 2)&0x01);
		$('.bin_parser_fail_det_pa2[bit="3"]').text((pa_val>> 3)&0x01);
		$('.bin_parser_fail_det_pa2[bit="4"]').text((pa_val>> 4)&0x01);
		$('.bin_parser_fail_det_pa2[bit="5"]').text((pa_val>> 5)&0x01);
		$('.bin_parser_fail_det_pa2[bit="6"]').text((pa_val>> 6)&0x01);
		$('.bin_parser_fail_det_pa2[bit="7"]').text((pa_val>> 7)&0x01);
		
		pa_val = parseInt(eachpa[2], 16);
		$('.bin_parser_fail_det_pa3[bit="0"]').text(pa_val&0x01);
		$('.bin_parser_fail_det_pa3[bit="1"]').text((pa_val>> 1)&0x01);
		$('.bin_parser_fail_det_pa3[bit="2"]').text((pa_val>> 2)&0x01);
		$('.bin_parser_fail_det_pa3[bit="3"]').text((pa_val>> 3)&0x01);
		$('.bin_parser_fail_det_pa3[bit="4"]').text((pa_val>> 4)&0x01);
		$('.bin_parser_fail_det_pa3[bit="5"]').text((pa_val>> 5)&0x01);
		$('.bin_parser_fail_det_pa3[bit="6"]').text((pa_val>> 6)&0x01);
		$('.bin_parser_fail_det_pa3[bit="7"]').text((pa_val>> 7)&0x01);
	}
	if(pa_count > 4){
		pa_val = parseInt(eachpa[3], 16);
		$('.bin_parser_fail_det_pa4[bit="0"]').text(pa_val&0x01);
		$('.bin_parser_fail_det_pa4[bit="1"]').text((pa_val>> 1)&0x01);
		$('.bin_parser_fail_det_pa4[bit="2"]').text((pa_val>> 2)&0x01);
		$('.bin_parser_fail_det_pa4[bit="3"]').text((pa_val>> 3)&0x01);
	}
	// Touch OE
	if(pa_count > 5){
		pa_val = parseInt(eachpa[4], 16);
		$('.bin_parser_fail_det_pa5[bit="0"]').text(pa_val&0x01);
		$('.bin_parser_fail_det_pa5[bit="1"]').text((pa_val>> 1)&0x01);
		$('.bin_parser_fail_det_pa5[bit="2"]').text((pa_val>> 2)&0x01);
		$('.bin_parser_fail_det_pa5[bit="3"]').text((pa_val>> 3)&0x01);
		$('.bin_parser_fail_det_pa5[bit="4"]').text((pa_val>> 4)&0x01);
		//$('.bin_parser_fail_det_pa5[bit="5"]').text((pa_val>> 5)&0x01);
		//$('.bin_parser_fail_det_pa5[bit="6"]').text((pa_val>> 6)&0x01);
		$('.bin_parser_fail_det_pa5[bit="7"]').text((pa_val>> 7)&0x01);
		
	}
	if(pa_count > 6){
		pa_val = parseInt(eachpa[5], 16);
		$('.bin_parser_fail_det_pa6[bit="0"]').text(pa_val&0x01);
		$('.bin_parser_fail_det_pa6[bit="1"]').text((pa_val>> 1)&0x01);
		$('.bin_parser_fail_det_pa6[bit="2"]').text((pa_val>> 2)&0x01);
		$('.bin_parser_fail_det_pa6[bit="3"]').text((pa_val>> 3)&0x01);
		$('.bin_parser_fail_det_pa6[bit="4"]').text((pa_val>> 4)&0x01);
		$('.bin_parser_fail_det_pa6[bit="5"]').text((pa_val>> 5)&0x01);
		$('.bin_parser_fail_det_pa6[bit="6"]').text((pa_val>> 6)&0x01);
		$('.bin_parser_fail_det_pa6[bit="7"]').text((pa_val>> 7)&0x01);
		
	}
}

function Parse_binary_content(){
	$('.bin_group_nouse').css('color','gray');
	
	$('.bin_group_header').css('background-color','#FAF6DD');
	$('.bin_group_ISRAM_CODE').css('background-color','#E3EB98');
	$('.bin_group_tp_config_table').css('background-color','#A6DBF1');
	$('.bin_group_tp_hw_config').css('background-color','#EBEDF6');
	$('.bin_group_tp_adc_config').css('background-color','#FAF6DD');
	$('.bin_group_tp_adc_mapping').css('background-color','#E3EB98');
	$('.bin_group_dd_initial').css('background-color','#A6DBF1');
	//$('.bin_group_dd_initial2').css('background-color','#78608D'); // no in use
	$('.bin_group_dd_workaround1').css('background-color','#EBEDF6');
	$('.bin_group_dd_workaround2').css('background-color','#FAF6DD');
	$('.bin_group_dd_workaround3').css('background-color','#E3EB98');
	$('.bin_group_dd_workaround4').css('background-color','#A6DBF1');
	$('.bin_group_p2p_table').css('background-color','#EBEDF6');
	//$('.bin_group_tp_reserve').css('background-color','#'); // no in use
	$('.bin_group_dd_rom').css('background-color','#FAF6DD');
	$('.bin_group_tp_reload_cmd').css('background-color','#E3EB98');
	
	// Label out checksum
	$('.bin_group_ISRAM_CODE[offset="65504"]').css('color','red');

	// rom code checksum
	$('.bin_group_dd_rom[offset="4064"]').css('color','red');

	
	Parse_Tp_version();
	Parse_Flash_Func();
	Parse_Flash_Header();
	Parse_Auto_Self_Test(); // Start from
	Parse_Waveform();
	Parse_dd_file();
	Parse_dd_rom();
	Parse_p2p_table();
	
	var dd_line_file = $('#bin_dd_initial_code').val().split('\n');
	Dd_init_to_json(dd_line_file, 0);
	
	Parse_tp_init();
	$('#compare_released_result').html("");	
	Parse_fail_det_oe();
	Init_Notice();
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
					offset = 0;
				}
			}
			else{
				if((i%32) == 0){
					if(js_s == 0){
						js_startaddress = parseInt((MPA5478_mem_sag[js_counter].start_address), 16);
						js_endaddress = parseInt((MPA5478_mem_sag[js_counter].size), 16);
			
						js_endaddress+=js_startaddress;
						
						if((i == js_startaddress) && (js_counter < MPA5478_mem_sag.length)){
							js_s = 1;
						}
						offset = 0;
					}
					// Address==============
					tmp_addr = i.toString(16).padStart(8, "0");
					// Name=================
					tmp_name = (MPA5478_mem_sag[js_counter].name);
					if(js_s == 1){
						content+="<span class=\"bin_group bin_group_"+(MPA5478_mem_sag[js_counter].name)+"\" offset="+offset+">"+(tmp_name)+"  "+(tmp_addr.toUpperCase())+":&nbsp;&nbsp;"+tmp.toUpperCase()+",&nbsp;&nbsp;";
					}
					else{
						
						content+="<span class=\"bin_group bin_group_nouse\">nouse  "+tmp_addr.toUpperCase()+":&nbsp;&nbsp;"+tmp.toUpperCase()+",&nbsp;&nbsp;";
					}
					
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
	var count = 0;
	
	if($('#bin_parser').length){
		var proj = document.querySelector("#bin_parser");
		proj.addEventListener('change', function(e) {
			var files = e.target.files;
			//console.log(files);
			//---------
			var rolename=$('.c_role').attr('rolename');
			if(rolename == 'Stella'){
				console.log("Support multiple files upload");
				if(files.length > 1){
					//console.log(files.length);
					let oem_timer = window.setInterval(function(){
						if(count % 2 == 0){
							Parser_binary_file(files[(count/2)]);
						}
						else{
							$('#upload_macro_server').click();
						}
						count++;
						if(count == (files.length)*2){
							window.clearInterval(oem_timer);
							console.log("Finish multiple files upload");
						}
						//console.log(count);
					}, 10000); // ms  --> 10s
					
				}
				else{
					Parser_binary_file(files[0]);
				}
				console.log("Start to upload");
			}
			else{
			
				Parser_binary_file(files[0]);
			}
			//==========
		});
	}
}

function Init_UI(){
	$('#upload_bin_file_name').val("");
	$('#dd_rom_checksum').val("");
	
	$('#bin_dd_rom_code').val("");
	$('#bin_dd_initial_code').val("");
	$('.button_load').CardWidget('collapse');
	$('#tp_tsram_normal').val("");
	$('#tp_self_mapping').val("");
	$('#tx_rx_mapping_table').html("");
}

$(document).ready(function(){
	Select_binary_file();
	//Init_UI();
	
	//=================================================================================
	// Load Sample/Range
	//=================================================================================
	var showoff = $('#oem_project_detail').attr('bit'); 
	// Fill out Sample=================================================================
	var m_glove_check = $('.5478_flash_func[name="GLOVE_WEIGHT_BY_SCALE"] span').text(); 
	var m_recal_check = $('.5478_flash_func[name="RECAL_THX_BY_SCALE"] span').text(); 
	
	Pasrse_ALG_Oem('.tp_sample_alg', m_glove_check, m_recal_check);
	
	if(showoff == '1'){
		Pasrse_ALG_Oem('.5478_sram_alg', m_glove_check, m_recal_check);
		Parse_fail_det_oe();
		
		Init_Notice();
	}
});