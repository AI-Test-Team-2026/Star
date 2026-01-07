function Reverse_AC_word_result(){
	var content = $('#tcon_reverse').val();
	var a_word = content.split(','); 
	var i = 0, valid_word = 0;

	var backup_word = 0;
	var tmp_sensing_freq;
	var tcon_clock = parseInt($('#ac_tcon_clock').text(), 10);
	var sin_tbl_len;// parseInt($('#ac_sin_tbl_len').text(), 10);
	var win_tbl_len;// = parseInt($('#ac_win_tbl_len').text(), 10);???
	var pre_period_sta = 0, en_period_sta = 0;
	var pre_period = 0, en_period = 0, sc_clk2_period = 0;
	var rst0_sta = 0, rst0_stp = 0;
	var mixer_6T_check = 0;
	
	//===============================
	var get_role = $('#tcon_script_role').attr('role');
	var tmp_id = '';
	//===============================
	
	for(i = 0; i< a_word.length; i++){
		var tmp_word = $.trim(a_word[i].replace('\n','')); //console.log(tmp_word);
		if(tmp_word != "" && tmp_word[0] != "/"){
			//console.log("valid word "+valid_word+" value is "+tmp_word);
			//=======================================================
			// TCON
			if(valid_word == 0){
				pre_period_sta = (tmp_word >> 4) & 0x0F;
				en_period_sta = (tmp_word >> 24) & 0x0F;
				
				pre_period = (tmp_word >> 8) & 0xFFFF;
				pre_period = pre_period - pre_period_sta;
				en_period = (tmp_word >> 28) & 0x0F;
			}
			else if(valid_word == 1){
				en_period = (en_period | ((tmp_word & 0xFFF)<<4));
				en_period = en_period - en_period_sta;
				
				tmp_id = "#"+get_role+"ac_sensing_time"; //console.log(tmp_id);
				$(tmp_id).text(((1/tcon_clock)*en_period).toFixed(2));
				
				
				// RST0 STA/STP
				rst0_sta = (tmp_word >> 12) & 0x0F;
				rst0_stp = (tmp_word >> 16) & 0xFFFF;
			}
			else if(valid_word == 2){
				sc_clk2_period = (tmp_word >> 20) & 0xFFF;
				
				// time_sta_dac_control
				var time_sta_dac_control = (tmp_word & 0x0F);
				
				if(time_sta_dac_control - rst0_sta != 6){
					mixer_6T_check |= 1;
				}
				else{
					mixer_6T_check &= 0xFE;
				}
				
			}
			else if(valid_word == 3){
				sc_clk2_period = sc_clk2_period | ((tmp_word & 0x0F) << 12); //console.log(sc_clk2_period);
				
				tmp_id = "#"+get_role+"ac_slope";
				$(tmp_id).text((tmp_word >> 4) & 0x3F);
				
				tmp_id = "#"+get_role+"ac_sine_wave_en";
				$(tmp_id).text((tmp_word >> 10) & 0x07);
				
				tmp_sensing_freq = Math.round(1000*tcon_clock/sc_clk2_period); //console.log(tmp_sensing_freq);
				tmp_id = "#"+get_role+"ac_sensing_freq";
				$(tmp_id).text(tmp_sensing_freq.toFixed(2));
				
				tmp_id = "#"+get_role+"ac_osr";
				$(tmp_id).text(Math.round(en_period/sc_clk2_period));
				
				tmp_id = "#"+get_role+"ac_precharge_num";
				$(tmp_id).text(Math.round(pre_period/sc_clk2_period));
				
				tmp_id = "#"+get_role+"ac_rst0_num";
				$(tmp_id).text(Math.floor((rst0_stp - rst0_sta) / sc_clk2_period));
				
				// Note mixer_coef_en start time....
				var time_sta_mixer_coef_en = (tmp_word >> 13) & 0xFFFF;
				//console.log(time_sta_mixer_coef_en);
				if((time_sta_mixer_coef_en) != (rst0_stp-6)){
					mixer_6T_check |= 2;
				}
				else{
					mixer_6T_check &=0xFD;
				}
				
			}
			else if(valid_word == 4){
				
			}
			else if(valid_word == 5){
				
			}
			else if(valid_word == 6){
				tmp_id = "#"+get_role+"ac_time_with_SYS_RSTB2";
				$(tmp_id).text((tmp_word >> 15 )&0x03);

			}
			else if(valid_word == 7){
				
			}
			//Mixer1==================================================
			else if(valid_word == 8){
				tmp_id = "#"+get_role+"ac_mixer1_coundown_cntr_init";
				$(tmp_id).text((tmp_word >> 16)&0xFF);
				tmp_id = "#"+get_role+"ac_mixer1_x_in";
				$(tmp_id).text((tmp_word >> 24)&0x0F);
				tmp_id = "#"+get_role+"ac_mixer1_turn_on";
				$(tmp_id).text((tmp_word >> 28)&0x0F);
			}
			else if(valid_word == 9){
				// mixer 1 sensing freq is the same with tcon
				tmp_id = "#"+get_role+"ac_mixer1_freq";
				$(tmp_id).text(tmp_sensing_freq);
				var tmp_cc = (tmp_word & 0x0FFFFFFF)*tcon_clock*1000/(1024*64*tmp_sensing_freq);
				sin_tbl_len = Math.round(tmp_cc);
				tmp_id = "#"+get_role+"ac_sin_tbl_len";
				$(tmp_id).text(sin_tbl_len);
				tmp_id = "#"+get_role+"ac_mixer1_mixer_win_sel";
				$(tmp_id).text((tmp_word >> 28)&0x0F);
			}
			else if(valid_word == 10){
				// Get win_tbl_len in word 11
				backup_word = (tmp_word & 0xFFFFFF); //console.log(backup_word);
				//$('#ac_mixer1_win_len').text((win_tbl_len *1024 * 64 / (tmp_word & 0xFFFFFF)).toFixed(2));
				
				tmp_id = "#"+get_role+"ac_mixer1_spl_type";
				$(tmp_id).text((tmp_word >> 24) & 0xFF);
			}
			else if(valid_word == 11){
				//tmp_word+=1;
				//$('#gray_pt_win_len').text(tmp_word & 0xFFFF);
				tmp_id = "#"+get_role+"ac_mixer1_sin_addr_init";
				$(tmp_id).text((tmp_word >> 16)&0xFFFF);
				
				var tmp_v = (tmp_word & 0xFFFF)+1;
				tmp_id = "#"+get_role+"ac_mixer1_win_len";
				$(tmp_id).text(tmp_v);
			
				// Get win_tbl_len
				win_tbl_len = (tmp_v*backup_word/1024/64);
				win_tbl_len = Math.round(win_tbl_len);
				tmp_id = "#"+get_role+"ac_win_tbl_len";
				$(tmp_id).text(win_tbl_len);
				
			}
			else if(valid_word == 12){
				if(tmp_word & 0xFFFF == 0xFFFF){
					tmp_id = "#"+get_role+"ac_mixer1_win_idle_len_post";
					$(tmp_id).text(0);
				}
				else{
					tmp_id = "#"+get_role+"ac_mixer1_win_idle_len_post";
					$(tmp_id).text((tmp_word& 0xFFFF)+1);
				}
				if(((tmp_word >> 16) & 0xFFFF) == 0xFFFF){
					tmp_id = "#"+get_role+"ac_mixer1_win_idle_len_pre";
					$(tmp_id).text(0);
				}
				else{
					tmp_id = "#"+get_role+"ac_mixer1_win_idle_len_pre";
					$(tmp_id).text((tmp_word& 0xFFFF)+1);
				}
			}
			else if(valid_word == 13){
				// already know green_pt_win_len_pre in word 12
				//var tmp_c = parseInt($('#green_pt_win_len_pre').text(), 10);
				//$('#gray_pt_win_tbl_len').text(tmp_c*1024*32/(tmp_word & 0xFFFFFF));
			}
			/*else if(valid_word == 14){
				
			}*/
			else if(valid_word == 15){
				tmp_id = "#"+get_role+"ac_mixer1_tx_win_bias_scale";
				$(tmp_id).text((tmp_word >> 16) & 0xFFFF);
				tmp_id = "#"+get_role+"ac_mixer1_tx_win_bias_dc";
				$(tmp_id).text(tmp_word & 0xFFFF);
			}
			//Mixer2==================================================
			else if(valid_word == 16){
				tmp_id = "#"+get_role+"ac_mixer2_coundown_cntr_init";
				$(tmp_id).text((tmp_word >> 16)&0xFF);
				tmp_id = "#"+get_role+"ac_mixer2_x_in";
				$(tmp_id).text((tmp_word >> 24)&0x0F);
				tmp_id = "#"+get_role+"ac_mixer2_turn_on";
				$(tmp_id).text((tmp_word >> 28)&0x0F);
			}
			else if(valid_word == 17){
				tmp_id = "#"+get_role+"ac_mixer2_freq";
				$(tmp_id).text(((tmp_word & 0x0FFFFFFF)*tcon_clock*1000/(sin_tbl_len*1024*64)).toFixed(2));
				tmp_id = "#"+get_role+"ac_mixer2_mixer_win_sel";
				$(tmp_id).text((tmp_word >> 28)&0x0F);
			}
			else if(valid_word == 18){
				tmp_id = "#"+get_role+"ac_mixer2_win_len";
				$(tmp_id).text(Math.round(win_tbl_len *1024 * 64 / (tmp_word & 0xFFFFFF)));
				tmp_id = "#"+get_role+"ac_mixer2_spl_type";
				$(tmp_id).text((tmp_word >> 24) & 0xFF);
			}
			else if(valid_word == 19){
				//tmp_word+=1;
				//$('#gray_pt_win_len').text(tmp_word & 0xFFFF);
				tmp_id = "#"+get_role+"ac_mixer2_sin_addr_init";
				$(tmp_id).text((tmp_word >> 16)&0xFFFF);
			}
			else if(valid_word == 20){
				if(tmp_word & 0xFFFF == 0xFFFF){
					tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_post";
					$(tmp_id).text(0);
				}
				else{
					tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_post";
					$(tmp_id).text((tmp_word& 0xFFFF)+1);
				}
				if(((tmp_word >> 16) & 0xFFFF) == 0xFFFF){
					tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_pre";
					$(tmp_id).text(0);
				}
				else{
					tmp_id = "#"+get_role+"ac_mixer2_win_idle_len_pre";
					$(tmp_id).text((tmp_word& 0xFFFF)+1);
				}
			}
			else if(valid_word == 21){
				// already know green_pt_win_len_pre in word 12
				//var tmp_c = parseInt($('#green_pt_win_len_pre').text(), 10);
				//$('#gray_pt_win_tbl_len').text(tmp_c*1024*32/(tmp_word & 0xFFFFFF));
			}
			/*else if(valid_word == 22){
				
			}*/
			else if(valid_word == 23){
				tmp_id = "#"+get_role+"ac_mixer2_tx_win_bias_scale";
				$(tmp_id).text((tmp_word >> 16) & 0xFFFF);
				tmp_id = "#"+get_role+"ac_mixer2_tx_win_bias_dc";
				$(tmp_id).text(tmp_word & 0xFFFF);
			}
			// DSP===================================================
			else if(valid_word == 29){
				tmp_id = "#"+get_role+"ac_i_const";
				$(tmp_id).text((tmp_word) & 0xFFFFFF);
				// ignore mixer2 setting
			}
			else if(valid_word == 30){
				tmp_id = "#"+get_role+"ac_q_const";
				$(tmp_id).text((tmp_word) & 0xFFFFFF);
				tmp_id = "#"+get_role+"ac_Ini_g_swdata";
				$(tmp_id).text((tmp_word >> 24) & 0xFF);
			}
			else if(valid_word == 31){
				tmp_id = "#"+get_role+"ac_adc_iq_downscale";
				$(tmp_id).text((tmp_word >> 20) & 0xFFF);
				tmp_id = "#"+get_role+"ac_adc_rawdata_downscale";
				$(tmp_id).text((tmp_word) & 0xFFF);
			}
			//=======================================================
			valid_word++;
		}
	}
	
	if((mixer_6T_check & 0x03) == 0x03){
		tmp_id = "#"+get_role+"ac_mixer_note";
		$(tmp_id).css('display','table-cell');
		tmp_id = "#"+get_role+"ac_mixer_note";
		$(tmp_id).text('time_sta_mixer_coef_en should be RST0 rising - 6T');
	}
}

function Reverse_DC_word_result(){
	var content = $('#dc_reverse').val();
	var a_word = content.split(','); 
	var i = 0, valid_word = 0;
	var ptba = 0, adc_cyc=0;
	var vrh = 0, vr1 = 0, vr2 = 0, vr2h = 0, ldo = 0, vr3 = 0;

	//===============================
	var get_role = $('#tcon_script_role').attr('role');
	var tmp_id = '';
	//===============================


	for(i = 0; i< a_word.length; i++){
		var tmp_word = $.trim(a_word[i].replace('\n','')); 
		if(tmp_word != "" && tmp_word[0] != "/"){
			//console.log("valid word "+valid_word+" value is "+tmp_word);
			//=======================================================
			
			if(valid_word == 0){ 
				
			}
			else if(valid_word == 1){
				ptba = (tmp_word >> 4) & 0x07;
			}
			else if(valid_word == 2){
				ldo = (tmp_word >> 20) & 0x0F;
				vrh = (tmp_word >> 16) & 0x0F;
				vr1 = (tmp_word ) & 0x0F;
				vr2 = (tmp_word >> 4) & 0x0F;
				vr2h = (tmp_word >> 12) & 0x0F;
				vr3 = (tmp_word >> 8)&0x0F;
				
				
				//****************************
				if(vrh == 15){
					vrh = 6.78;
				}
				else if(vrh == 14){
					vrh = 6.64;
				}
				else if(vrh == 13){
					vrh = 6.5;
				}
				else if(vrh == 12){
					vrh = 6.36;
				}
				else if(vrh == 11){
					vrh = 6.23;
				}
				else if(vrh == 10){
					vrh = 6.09;
				}
				else if(vrh == 9){
					vrh = 5.95;
				}
				else if(vrh == 8){
					vrh = 5.81;
				}
				else if(vrh == 7){
					vrh = 5.67;
				}
				else if(vrh == 6){
					vrh = 5.53;
				}
				else if(vrh == 5){
					vrh = 5.39;
				}
				else if(vrh == 4){
					vrh = 5.26;
				}
				else if(vrh == 3){
					vrh = 5.12;
				}
				else if(vrh == 2){
					vrh = 4.98;
				}
				else if(vrh == 1){
					vrh = 4.84;
				}
				else if(vrh == 0){
					vrh = 4.7;
				}
				//****************************
				if(ldo == 15){
					ldo = 6.76;
				}
				else if(ldo == 14){
					ldo = 6.62;
				}
				else if(ldo == 13){
					ldo = 6.48;
				}
				else if(ldo == 12){
					ldo = 6.34;
				}
				else if(ldo == 11){
					ldo = 6.2;
				}
				else if(ldo == 10){
					ldo = 6.07;
				}
				else if(ldo == 9){
					ldo = 5.93;
				}
				else if(ldo == 8){
					ldo = 5.79;
				}
				else if(ldo == 7){
					ldo = 5.65;
				}
				else if(ldo == 6){
					ldo = 5.51;
				}
				else if(ldo == 5){
					ldo = 5.38;
				}
				else if(ldo == 4){
					ldo = 5.24;
				}
				else if(ldo == 3){
					ldo = 5.1;
				}
				else if(ldo == 2){
					ldo = 4.96;
				}
				else if(ldo == 1){
					ldo = 4.82;
				}
				else if(ldo == 0){
					ldo = 4.68;
				}
				//****************************
				vr1 = (vrh/66)*(4*vr1 + 1);
				vr2 = (vrh/66)*(2*vr2 + 2);
				vr3 = (vrh/66)*(4*vr3 + 1);
				vr2h = (vrh/66)*(2*vr2h + 32);
				
				tmp_id = "#"+get_role+"dc_vrh";
				$(tmp_id).text(vrh);
				tmp_id = "#"+get_role+"dc_vr1";
				$(tmp_id).text(vr1.toFixed(2));
				tmp_id = "#"+get_role+"dc_vr2";
				$(tmp_id).text(vr2.toFixed(2));
				tmp_id = "#"+get_role+"dc_vr3";
				$(tmp_id).text(vr3.toFixed(2));
				tmp_id = "#"+get_role+"dc_vr2h";
				$(tmp_id).text(vr2h.toFixed(2));
				tmp_id = "#"+get_role+"dc_tpldo";
				$(tmp_id).text(ldo);
			}
			else if(valid_word == 3){
				adc_cyc = (tmp_word & 0x07);
				
				ptba = ((8+ptba)/16) + adc_cyc;
				tmp_id = "#"+get_role+"dc_ptba_current";
				$(tmp_id).text(ptba);
			}
			valid_word++;
		}
	}
}

function Cal_word_result(){
	var content="";
	var tmp;
	var i = 0 , j = 0, a_word = 0;
	
	//===================================================================
	tmp = parseInt($('.pt_time_unit[index="1"]').text(),10);
	$('.pt_time_mapping[index="1"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="2"]').text(),10);
	$('.pt_time_mapping[index="2"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="3"]').text(),10);
	$('.pt_time_mapping[index="3"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="4"]').text(),10);
	$('.pt_time_mapping[index="4"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="5"]').text(),10);
	$('.pt_time_mapping[index="5"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="6"]').text(),10);
	$('.pt_time_mapping[index="6"]').eq('0').text(tmp&0x0F);
	$('.pt_time_mapping[index="6"]').eq('1').text((tmp >> 4)&0x0FFF);

	tmp = parseInt($('.pt_time_unit[index="7"]').text(),10);
	$('.pt_time_mapping[index="7"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="8"]').text(),10);
	$('.pt_time_mapping[index="8"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="9"]').text(),10);
	$('.pt_time_mapping[index="9"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="10"]').text(),10);
	$('.pt_time_mapping[index="10"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="11"]').text(),10);
	$('.pt_time_mapping[index="11"]').eq('0').text(tmp&0x0FFF);
	$('.pt_time_mapping[index="11"]').eq('1').text((tmp >> 12)&0x000F);
	
	tmp = parseInt($('.pt_time_unit[index="12"]').text(),10);
	$('.pt_time_mapping[index="12"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="13"]').text(),10);
	$('.pt_time_mapping[index="13"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="14"]').text(),10);
	$('.pt_time_mapping[index="14"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="15"]').text(),10);
	$('.pt_time_mapping[index="15"]').eq('0').text(tmp&0x0007);
	$('.pt_time_mapping[index="15"]').eq('1').text((tmp >> 3)&0x1FFF);
	
	tmp = parseInt($('.pt_time_unit[index="16"]').text(),10);
	$('.pt_time_mapping[index="16"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="17"]').text(),10);
	$('.pt_time_mapping[index="17"]').eq('0').text(tmp&0x0007);
	$('.pt_time_mapping[index="17"]').eq('1').text((tmp >> 3)&0x1FFF);
	
	tmp = parseInt($('.pt_time_unit[index="18"]').text(),10);
	$('.pt_time_mapping[index="18"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="19"]').text(),10);
	$('.pt_time_mapping[index="19"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="20"]').text(),10);
	$('.pt_time_mapping[index="20"]').eq('0').text(tmp&0x01);
	$('.pt_time_mapping[index="20"]').eq('1').text((tmp >> 1)&0x7FFF);
	
	tmp = parseInt($('.pt_time_unit[index="21"]').text(),10);
	$('.pt_time_mapping[index="21"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="22"]').text(),10);
	$('.pt_time_mapping[index="22"]').eq('0').text(tmp&0x7FFF);
	$('.pt_time_mapping[index="22"]').eq('1').text((tmp >> 15)&0x0001);
	
	tmp = parseInt($('.pt_time_unit[index="23"]').text(),10);
	$('.pt_time_mapping[index="23"]').text(tmp);
	tmp = parseInt($('.pt_time_unit[index="24"]').text(),10);
	$('.pt_time_mapping[index="24"]').text(tmp);
	
	//=============================================================
	for(i = 0; i < 8;i++){
		var cname='.pt_time_mapping[word="'+i+'"]';
		a_word = 0;
		$(cname).each(function(i, obj) {
			//var current_item = j.toString(10);
			var offset = $(this).attr('offset'); //console.log(offset);
			var value = $(this).text();
			a_word |= (value << offset);
			a_word >>>=0
		});
		//console.log(a_word);
		content += '0x'+a_word.toString(16).toUpperCase().padStart(8, '0')+",\n";

		
	}
	
	//===================================================================
	// Mixer
	content+="\n";
	for(i = 8; i < 24;i++){
		var cname='.pt_time_mapping_mixer_word_'+i;
		a_word = 0;
		$(cname).each(function(i, obj) {
			//var current_item = j.toString(10);
			var offset = $(this).attr('offset'); //console.log(offset);
			var value = $(this).text(); 
			a_word |= (value << offset);
			a_word >>>=0
		});
		//console.log(a_word);
		content += '0x'+a_word.toString(16).toUpperCase().padStart(8, '0')+",\n";
	}
	
	//===================================================================
	//DSP
	content+="\n";
	for(i = 24; i < 32;i++){
		var cname='.pt_time_mapping_mixer_word_'+i;
		a_word = 0;
		$(cname).each(function(i, obj) {
			//var current_item = j.toString(10);
			var offset = $(this).attr('offset'); //console.log(offset);
			var value = $(this).text(); 
			a_word |= (value << offset);
			a_word >>>=0
		});
		//console.log(a_word);
		content += '0x'+a_word.toString(16).toUpperCase().padStart(8, '0')+",\n";
	}
	//===================================================================

	$('#tcon_word').val(content);
}

function Cal_tcon_script(){
	var tmp = 0, tmp_val = 0;
	//===============================================
	var tcon_clk = parseFloat($('#gray_pt_tcon_clock').text());
	var sc_clk1 = 1/tcon_clk;
	$('#gray_pt_scclk1').text(sc_clk1);
	//===============================================
	var rx_freq = parseInt($('#blue_pt_rx_freq').text(),10);
	var scclk2_period = Math.floor(1000/rx_freq/sc_clk1);
	var scclk2_period_us = scclk2_period*sc_clk1;
	$('#gray_pt_scclk2_period').text(scclk2_period);
	$('#gray_pt_scclk2_period_us').text(scclk2_period_us);
	
	tmp = parseInt($('#orange_pt_dd_tpen_len').text(), 10);
	tmp_val = parseInt($('#orange_pt_dd_tpen_failing').text(), 10);
	tmp_val = Math.floor((tmp-tmp_val)/scclk2_period_us);
	$('#gray_pt_max_osr').text(tmp_val);
	//===============================================
	var precharnge_count =  parseInt($('#blue_pt_precharge_osr').text(), 10);
	var osr_count = parseInt($('#blue_pt_osr').text(), 10);
	var win_len = parseInt($('#green_pt_win_len').text(), 10);
	var mixer_win_lenth = 0;
	if(win_len > 0){
		mixer_win_lenth = Math.floor(win_len*tcon_clk);
	}
	else{
		mixer_win_lenth = (osr_count-precharnge_count)*scclk2_period;
	}
	
	if(precharnge_count == 0){
		mixer_win_lenth-=1;
	}
	$('#gray_pt_mixer_win_len').text(mixer_win_lenth);
	
	
	$('#gray_pt_mixer1_freq').text(rx_freq);
	//$('#gray_pt_turn_on').text('1'); // fixed to 1 since only 1 mixer
	$('#gray_pt_mixer_cntr').text(mixer_win_lenth);
	
	if(scclk2_period & 0x01){ // odd
		$('#gray_pt_mixer_scclk2').text(scclk2_period-1);
	}
	else{ // even
		$('#gray_pt_mixer_scclk2').text(scclk2_period);
	}
	
	var win_len_pre = parseInt($('#green_pt_win_len_pre').text(),10);
	var win_len_post = parseInt($('#green_pt_win_len_post').text(),10);
	$('#gray_pt_win_len').text(mixer_win_lenth-win_len_pre-win_len_post);
	
	var tx_win_bias_dc = parseInt($('#green_pt_tx_win_bias_dc').text(),10);
	$('#gray_pt_tx_win_bias_scale').text(1023 - tx_win_bias_dc);
	//===============================================
	var tmp = ((scclk2_period*osr_count)-(scclk2_period*precharnge_count))*512;
	if(tmp < 0){
		tmp = 0;
	}
	$('#gray_pt_i_const').text(tmp);
	$('#gray_pt_q_const').text(tmp);
	//$('#gray_pt_dsp_twice').text('0'); // fixed to 0 since only one-mixer
	//$('#gray_pt_dsp_f0f1_switch').text('0');
	//===============================================
	var pre_count_period = scclk2_period*precharnge_count;
	if(pre_count_period < 1){
		$('.pt_time_unit[index="4"]').text('1');
		$('.pt_time_unit[index="8"]').text(1);
		$('.pt_time_unit[index="16"]').text(1);
	}
	else{
		$('.pt_time_unit[index="4"]').text(pre_count_period);
		$('.pt_time_unit[index="8"]').text(pre_count_period);
		$('.pt_time_unit[index="16"]').text(pre_count_period);
	}
	
	$('.pt_time_unit[index="6"]').text(scclk2_period*osr_count);
	$('.pt_time_unit[index="10"]').text((scclk2_period*osr_count) - 1);
	$('.pt_time_unit[index="15"]').text($('.pt_time_unit[index="10"]').text());
	$('.pt_time_unit[index="11"]').text($('#gray_pt_mixer_scclk2').text());
	
	var sine_en = parseInt($('#blue_pt_sine_en').text(),10);
	if(sine_en == 1){
		$('.pt_time_unit[index="12"]').text(0);
		$('.pt_time_unit[index="13"]').text(1);
	}
	else{
		$('.pt_time_unit[index="12"]').text($('#blue_pt_dac_slope').text());
		$('.pt_time_unit[index="13"]').text(0);
	}
	
	if((pre_count_period - 6) < 0){
		$('.pt_time_unit[index="14"]').text(0);
	}
	else{
		$('.pt_time_unit[index="14"]').text(pre_count_period-6);
	}

	tmp = parseInt($('.pt_time_unit[index="10"]').text(),10);
	tmp_val = parseInt($('.pt_time_unit[index="16"]').text(),10);
	if(tmp_val > tmp){
		$('.pt_time_unit[index="17"]').text(tmp_val);
	}
	else{
		$('.pt_time_unit[index="17"]').text(tmp);
	}
	
	tmp = parseInt($('#gray_pt_mixer_win_len').text(),10);
	if((tmp - 1) < 0){
		tmp = 0;
	}
	else{
		tmp-=1;
	}
	$('.pt_time_unit[index="18"]').text(tmp);
	$('.pt_time_unit[index="20"]').text($('.pt_time_unit[index="17"]').text());
	//===============================================
	// Mixer
	// Like PA5472 is 1
	$('.pt_time_mapping_mixer_word_8[offset="0"]').text(32767);//"0x7FFF"
	tmp = parseInt($('#green_pt_coundown_cntr_init').text(), 10);
	tmp &= 0xFF;
	$('.pt_time_mapping_mixer_word_8[offset="16"]').text(tmp);
	$('.pt_time_mapping_mixer_word_8[offset="24"]').text($('#green_pt_x_in').text());
	$('.pt_time_mapping_mixer_word_8[offset="28"]').text($('#gray_pt_turn_on').text());
	tmp = parseInt($('#gray_pt_sin_tbl_len').text(), 10);
	tmp_val =parseInt( $('#gray_pt_mixer1_freq').text(), 10);
	tmp = (tmp * 1024 * 64) / (1000 * tcon_clk / tmp_val);
	$('.pt_time_mapping_mixer_word_9[offset="0"]').text(tmp);
	$('.pt_time_mapping_mixer_word_9[offset="28"]').text($('#gray_pt_mixer_win_sel').text());
	tmp_val = parseInt($('#gray_pt_win_tbl_len').text(), 10);
	tmp = parseInt($('#gray_pt_win_len').text(), 10);
	tmp = tmp_val*1024 * 64 / tmp;
	$('.pt_time_mapping_mixer_word_10[offset="0"]').text(Math.floor(tmp));
	tmp = parseInt($('#green_pt_spl_type').text(), 10);
	$('.pt_time_mapping_mixer_word_10[offset="24"]').text(tmp&0xFF);
	
	
	tmp = parseInt($('#gray_pt_win_len').text(), 10);
	tmp-=1;
	$('.pt_time_mapping_mixer_word_11[offset="0"]').text(tmp&0xFFFF);
	tmp = parseInt($('#green_pt_sin_addr_init').text(), 10);
	$('.pt_time_mapping_mixer_word_11[offset="16"]').text(tmp&0xFFFF);
	
	tmp = parseInt($('#green_pt_win_len_post').text(), 10);
	if(tmp > 0){
		tmp -= 1;
	}
	else{
		tmp = 65535;
	}
	$('.pt_time_mapping_mixer_word_12[offset="0"]').text(tmp&0xFFFF);
	
	tmp = parseInt($('#green_pt_win_len_pre').text(), 10);
	if(tmp > 0){
		tmp -= 1;
	}
	else{
		tmp = 65535;
	}
	$('.pt_time_mapping_mixer_word_12[offset="16"]').text(tmp&0xFFFF);
	
	tmp = parseInt($('#green_pt_win_len_pre').text(),10);
	tmp_val = parseInt($('#gray_pt_win_tbl_len').text(), 10);
	if(tmp > 0){
		tmp = tmp * 1024 * 32/tmp_val;
	}
	else{
		tmp = 0;
	}
	$('.pt_time_mapping_mixer_word_13[offset="0"]').text(tmp&0xFFFFFF);
	$('.pt_time_mapping_mixer_word_13[offset="24"]').text(0);
	$('.pt_time_mapping_mixer_word_13[offset="28"]').text(0);
	
	tmp = parseInt($('#green_pt_win_len_post').text(),10);
	tmp_val = parseInt($('#gray_pt_win_tbl_len').text(), 10);
	if(tmp > 0){
		tmp = tmp * 1024 * 32/tmp_val;
	}
	else{
		tmp = 0;
	}
	$('.pt_time_mapping_mixer_word_14[offset="0"]').text(tmp&0xFFFFFF);
	$('.pt_time_mapping_mixer_word_14[offset="24"]').text(0);
	$('.pt_time_mapping_mixer_word_14[offset="28"]').text(0);
	
	tmp = parseInt($('#green_pt_tx_win_bias_dc').text(),10);
	$('.pt_time_mapping_mixer_word_15[offset="0"]').text(tmp&0xFFFFFF);
	tmp = parseInt($('#gray_pt_tx_win_bias_scale').text(),10);
	$('.pt_time_mapping_mixer_word_15[offset="16"]').text(tmp&0xFFFFFF);
	
	// copy mixer0 settings to mixer1
	$('.pt_time_mapping_mixer_word_16[offset="0"]').text($('.pt_time_mapping_mixer_word_8[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_16[offset="16"]').text($('.pt_time_mapping_mixer_word_8[offset="16"]').text());
	$('.pt_time_mapping_mixer_word_16[offset="24"]').text($('.pt_time_mapping_mixer_word_8[offset="24"]').text());
	$('.pt_time_mapping_mixer_word_16[offset="28"]').text(/*$('.pt_time_mapping_mixer_word_8[offset="28"]').text()*/ 0); //set mixer1 off
	$('.pt_time_mapping_mixer_word_17[offset="0"]').text($('.pt_time_mapping_mixer_word_9[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_17[offset="28"]').text($('.pt_time_mapping_mixer_word_9[offset="28"]').text());
	$('.pt_time_mapping_mixer_word_18[offset="0"]').text($('.pt_time_mapping_mixer_word_10[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_18[offset="24"]').text($('.pt_time_mapping_mixer_word_10[offset="24"]').text());
	$('.pt_time_mapping_mixer_word_19[offset="0"]').text($('.pt_time_mapping_mixer_word_11[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_19[offset="16"]').text($('.pt_time_mapping_mixer_word_11[offset="16"]').text());
	$('.pt_time_mapping_mixer_word_20[offset="0"]').text($('.pt_time_mapping_mixer_word_12[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_20[offset="16"]').text($('.pt_time_mapping_mixer_word_12[offset="16"]').text());
	$('.pt_time_mapping_mixer_word_21[offset="0"]').text($('.pt_time_mapping_mixer_word_13[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_21[offset="24"]').text($('.pt_time_mapping_mixer_word_13[offset="24"]').text());
	$('.pt_time_mapping_mixer_word_21[offset="28"]').text($('.pt_time_mapping_mixer_word_13[offset="28"]').text());
	$('.pt_time_mapping_mixer_word_22[offset="0"]').text($('.pt_time_mapping_mixer_word_14[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_22[offset="24"]').text($('.pt_time_mapping_mixer_word_14[offset="24"]').text());
	$('.pt_time_mapping_mixer_word_22[offset="28"]').text($('.pt_time_mapping_mixer_word_14[offset="28"]').text());
	$('.pt_time_mapping_mixer_word_23[offset="0"]').text($('.pt_time_mapping_mixer_word_15[offset="0"]').text());
	$('.pt_time_mapping_mixer_word_23[offset="16"]').text($('.pt_time_mapping_mixer_word_15[offset="16"]').text());

	//===============================================
	// DSP
	$('.pt_time_mapping_mixer_word_24[offset="0"]').text(0); // fixed to 0
	tmp = parseInt($('#gray_pt_i_const').text(),10);
	$('.pt_time_mapping_mixer_word_25[offset="0"]').text(tmp);
	$('.pt_time_mapping_mixer_word_26[offset="0"]').text(tmp); // dma???
	$('.pt_time_mapping_mixer_word_27[offset="0"]').text(4); // dma & pen --> 4
	$('.pt_time_mapping_mixer_word_28[offset="0"]').text(0); // fixed to 0
	
	$('.pt_time_mapping_mixer_word_29[offset="0"]').text(tmp& 0xFFFFFF);
	tmp = parseInt($('#gray_pt_dsp_f0f1_switch').text(),10);
	if(tmp == 10){
		tmp = 10;
	}
	else{
		tmp = 0;
	}
	$('.pt_time_mapping_mixer_word_29[offset="24"]').text(tmp);
	tmp = parseInt($('#gray_pt_dsp_twice').text(),10);
	if(tmp == 10){
		tmp = 10;
	}
	else{
		tmp = 0;
	}
	$('.pt_time_mapping_mixer_word_29[offset="28"]').text(tmp);
	
	tmp = parseInt($('#gray_pt_q_const').text(),10);
	$('.pt_time_mapping_mixer_word_30[offset="0"]').text(tmp& 0xFFFFFF);
	tmp = parseInt($('#green_pt_Ini_g_swdata').text(),10);
	$('.pt_time_mapping_mixer_word_30[offset="24"]').text(tmp& 0xFF);
	
	tmp = parseInt($('#green_pt_adc_rawdata_downscale').text(),10);
	$('.pt_time_mapping_mixer_word_31[offset="0"]').text(tmp& 0xFFF);
	$('.pt_time_mapping_mixer_word_31[offset="12"]').text(0);
	tmp = parseInt($('#green_pt_adc_iq_downscale').text(),10);
	$('.pt_time_mapping_mixer_word_31[offset="20"]').text(tmp& 0xFFF);
	
	
	//===============================================
	Cal_word_result();
}


$(document).ready(function(){
	$('#tcon_reverse').val('');
	$('#dc_reverse').val('');
	/*$('#cal-tcon-script').click(function(){
		Cal_tcon_script();
	});
	*/
	$('#tcon_script_role').attr('role', '');
	$('#reverse-script').click(function(){
		Reverse_AC_word_result();
		Reverse_DC_word_result();
	});
	
});