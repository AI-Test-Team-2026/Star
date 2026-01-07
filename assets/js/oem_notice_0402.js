var oem_checker_item;

function Range_Checker(){
	var content = '';
	var c_max, c_min;
	var c_name, c_val;
	var alg_val;
	var ptname;
	var role = 0;
	
	$('.tp_range_alg').each(function(i, obj) {
		c_name = $(this).attr('name'); 
		if(c_name !== undefined){
			//console.log(c_name);
			c_max = parseInt($(this).attr('max'),10);
			c_min = parseInt($(this).attr('min'),10);

			role = parseInt($('.role_check').attr('role'), 10); //0:fae

			if(c_max | c_min){
				ptname = $(this).attr('patname');
				
				
				//console.log("max is "+c_max+"; min is "+c_min);
				//c_val = $(this).text();
				alg_val = parseInt($('.5478_sram_alg_val[name="'+c_name+'"]').eq('0').text(), 10);
				if((c_max == -1) && (c_min == -1)){
					/*content+='<tr>';
					if(role == 0){
						content+='<td>'+(oem_checker_item++)+'</td>';
						content+='<td>Please double check '+ptname+' is <b>'+alg_val+'</b>. '+$(this).text()+'</td>';
					}
					else{
						content+='<td>'+(oem_checker_item++)+'</td>';
						content+='<td>Please double check '+c_name+' is <b>'+alg_val+'</b>. '+$(this).text()+'</td>';
					}
					content+='</tr>';	*/
					$('.5478_sram_alg_val[name="'+c_name+'"]').eq('0').addClass('oem_notice_double_check');
					
				}
				else if((c_max == 0) && (c_min == 0)){ // no checker
					
				}
				else if(c_max == c_min){ // check min only
					if(alg_val != c_min){
						$('.5478_sram_alg_val[name="'+c_name+'"]').eq('0').addClass('oem_notice_out_of_range');
						
						content+='<tr>';
						content+='<td>'+(oem_checker_item++)+'</td>';
						if(role == 0){
							content+='<td>'+ptname+' is <b>'+alg_val+'</b>, but it should be '+c_min+'.</td>';
						}
						else{
							content+='<td>'+c_name+' is <b>'+alg_val+'</b>, but it should be '+c_min+'.</td>';
						}
						content+='</tr>';
					}
				}
				else{ 
					if((alg_val > c_max) || (alg_val < c_min)){
						
						content+='<tr>';
						content+='<td>'+(oem_checker_item++)+'</td>';
						if(role == 0){
							content+='<td>'+ptname+' is <b>'+alg_val+'</b>, but range is <b>'+c_min+' ~ '+c_max+'</b>.</td>';
						}
						else{
							content+='<td>'+c_name+' is <b>'+alg_val+'</b>, but range is <b>'+c_min+' ~ '+c_max+'</b>.</td>';
						}
						content+='</tr>';
						
						$('.5478_sram_alg_val[name="'+c_name+'"]').eq('0').addClass('oem_notice_out_of_range');
					}
				}
			}
		}
	});
	return content;
}

function Value_Checker(){
	var checker_num = 0, checker_num2 = 0, checker_num3 = 0;
	var content = '';
	//--------------------------------------------
	// Check protocol
	var checker_c , checker_p, checker_p2;
	//--------------------------------------------
	// Protocols
	//--------------------------------------------
	checker_c = $('.5478_flash_func[name="ATMEL_PROTOCOL"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_ad[bit="6"]').eq('0').text(); // ATMEL_PROTOCOL_EN
	if(checker_c == 'Off'){
		if(checker_p == '1'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>ATEL EN is 1, but define is off.</td></tr>';
		}
	}
	else{
		if(checker_p == '0'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>ATEL EN is 0, but define is on.</td></tr>';
		}
	}
	//--------------------------------------------
	checker_c = $('.5478_flash_func[name="FCA_PROTOCOL"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_ad[bit="5"]').eq('0').text(); // FCA_PROTOCOL_EN
	if(checker_c == 'Off'){
		if(checker_p == '1'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>FCA EN is 1, but define is off.</td></tr>';
		}
	}
	else{
		if(checker_p == '0'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>FCA EN is 0, but define is on.</td></tr>';
		}
	}
	//--------------------------------------------
	checker_c = $('.5478_flash_func[name="DA_PROTOCOL"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_ad[bit="4"]').eq('0').text(); // DA_PROTOCOL_EN
	if(checker_c == 'Off'){
		if(checker_p == '1'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>DA EN is 1, but define is off.</td></tr>';
		}
	}
	else{
		if(checker_p == '0'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>DA EN is 0, but define is on.</td></tr>';
		}
	}
	//--------------------------------------------
	checker_c = $('.5478_flash_func[name="BMW_PROTOCOL"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_73[bit="7"]').eq('0').text(); // BMW_PROTOCOL_EN
	if(checker_c == 'Off'){
		if(checker_p == '1'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>BMW EN is 1, but define is off.</td></tr>';
		}
	}
	else{
		if(checker_p == '0'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>BMW EN is 0, but define is on.</td></tr>';
		}
	}
	//--------------------------------------------
	checker_c = $('.5478_flash_func[name="HX_PROTOCOL_ID"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_af[bit="1"]').eq('0').text(); // HX_ID_EN
	checker_p2 = $('.5478_sram_alg_val_rfeh_af[bit="3"]').eq('0').text(); // HX_ID_PATCH_EN
	if(checker_c == 'Off'){
		if((checker_p == '1') || (checker_p2 == '1')){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>HX_ID_EN/HX_ID_PATCH_EN is 1, but define is off.</td></tr>';
		}
	}
	else{
		if((checker_p == '0') /*|| (checker_p2 == '0')*/){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>HX_ID_EN/HX_ID_PATCH_EN is 0, but define is on.</td></tr>';
		}
	}
	
	//--------------------------------------------
	// EN
	//--------------------------------------------
	checker_p = $('.5478_sram_alg_val_rfeh_af[bit="0"]').eq('0').text(); // STOP_FW_BY_HOST_EN
	if(checker_p == '0'){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>Please turn on STOP_FW_BY_HOST_EN.</td></tr>';
	}
	
	checker_c = $('.5478_flash_func[name="TX_HOPPING_DEF"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_ad[bit="3"]').eq('0').text(); // NOISE_DET_EN
	checker_p2 = $('.5478_sram_alg_val_rfeh_3[bit="7"]').eq('0').text(); // TX_HOP_EN
	if(checker_c == 'Off'){
		if(checker_p == '1'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>NOISE_DET_EN is 1, but TX_HOPPING_DEF is off.</td></tr>';
		}
		if(checker_p2 == '1'){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>TX_HOP_EN is 1, but TX_HOPPING_DEF is off.</td></tr>';
		}
	}
	
	checker_c = $('.5478_flash_func[name="EMI_IDLE_MODE"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_2[bit="3"]').eq('0').text(); // IDLE_EN
	if((checker_c == 'Off') && (checker_p == '1')){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>IDLE_EN is 1, but EMI_IDLE_MODE define is off.</td></tr>';
	}
	
	checker_p = $('.5478_sram_alg_val_rfeh_2[bit="7"]').eq('0').text(); // OSC_TRACK_EN
	if(checker_p == '0'){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>TP osc tracking is off.</td></tr>';
	}
	
	checker_p = $('.5478_sram_alg_val_rfeh_73[bit="6"]').eq('0').text(); // DD_OSC_TRACK_EN
	if(checker_p == '0'){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>DD osc tracking is off.</td></tr>';
	}
	
	checker_c = $('.5478_flash_func[name="RAWDATA_NORMALIZE"] span').text();
	checker_p = $('.5478_sram_alg_val_rfeh_ad[bit="7"]').eq('0').text(); // RAWDATA_NORMALIZE_EN
	if((checker_c == 'Off') && (checker_p == '1')){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>RAWDATA_NORMALIZE_EN is 1, but RAWDATA_NORMALIZE define is off.</td></tr>';
	}
	
	
	checker_p = $('.5478_sram_alg_val_rfeh_ad[bit="0"]').eq('0').text(); // SIG_THX_SCALE_EN
	checker_p2 = $('.5478_sram_alg_val[name="sig_thx_scale"]').eq('0').text(); // sig_thx_scale
	if((checker_p == '1') && (checker_p2 == '0')){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>SIG_THX_SCALE_EN is 1, but Signal_scale is 0.</td></tr>';
	}
	
	//--------------------------------------------
	// By tp init
	//--------------------------------------------
	/*checker_num = parseInt($('.5478_sram_alg_val[name="osc_tracking_vsync_target"]').eq('0').text(),10); // Vsync target
	if((checker_num < 500) || (checker_num > 800)){ // vsync < 50Hz or Vsync > 80 Hz
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>The vsync target is '+(checker_num/10)+'. Please check the vsync target.</td></tr>';
	}*/
	
	//--------------------------------------------
	// signal thresholds
	//--------------------------------------------
	checker_num = parseInt($('.5478_sram_alg_val[name="mut_thpx_lgd"]').eq('0').text(),10); // mut_thpx_lgd
	checker_num2 = parseInt($('.5478_sram_alg_val[name="glove_ent_dlmt"]').eq('0').text(),10); // glove_ent_dlmt
	checker_num3 = parseInt($('.5478_sram_alg_val[name="glove_thpx"]').eq('0').text(),10); // glove_thpx
	if((checker_num < checker_num2) || (checker_num < checker_num3)){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>Signal Threshold is less than glove dlmt or glove thpx</td></tr>';
	}
	
	return content;
}

function Adc_Checker(){
	var content = '';
	var tmp_val, tmp_split;
	var vrh_hex, vrh_val, vr1_hex, vr1_val, vr2_hex, vr2_val, vr3_hex, vr3_val;
	
	//Check VR------------------------------------
	tmp_val = $('.5478_sram_waveform_f0[name="tcon_set_vr1"]').text();
	tmp_split = tmp_val.split('(');
	vr1_hex = parseInt($.trim(tmp_split[0]), 16);
	vr1_val = parseFloat($.trim(tmp_split[1].split('V')[0]));
	
	tmp_val = $('.5478_sram_waveform_f0[name="tcon_set_vr2"]').text();
	tmp_split = tmp_val.split('(');
	vr2_hex = parseInt($.trim(tmp_split[0]), 16);
	vr2_val = parseFloat($.trim(tmp_split[1].split('V')[0]));
	
	tmp_val = $('.5478_sram_waveform_f0[name="tcon_set_vr3"]').text();
	tmp_split = tmp_val.split('(');
	vr3_hex = parseInt($.trim(tmp_split[0]), 16);
	vr3_val = parseFloat($.trim(tmp_split[1].split('V')[0]));
	
	tmp_val = $('.5478_sram_waveform_f0[name="tcon_set_vrh"]').text();
	tmp_split = tmp_val.split('(');
	vrh_hex = parseInt($.trim(tmp_split[0]), 16);
	vrh_val = parseFloat($.trim(tmp_split[1].split('V')[0]));
	
	//console.log("VRH is "+ vrh_hex + " "+ vrh_val);
	//console.log("VR1 is "+ vr1_hex + " "+ vr1_val);
	//console.log("VR2 is "+ vr2_hex + " "+ vr2_val);
	//console.log("VR3 is "+ vr3_hex + " "+ vr3_val);

	if((vr3_hex+vr2_hex)/2 != vr1_hex){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>VR1 should be (VR2 + VR3) /2</td></tr>';
	}
	if((vrh_val - vr2_val) < 0.7){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>VRH - VR2 should be larger than 0.7V</td></tr>';
	}
	if(vr3_val < 0.7){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>VR3 should be larger than 0.7V</td></tr>';
	}
	//Check DAC-----------------------------------
	tmp_val = parseInt($('.5478_sram_waveform_f0[name="tcon_dac_set"]').text(), 16); //console.log(tmp_val);
	if((tmp_val & 0x07) < 2){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>Please set DAC_SET [2:0] to 2 at least.</td></tr>';
	}
	//Check PTBA-----------------------------------
	tmp_val = $('.5478_sram_waveform_f0[name="tcon_ptba_reg"]').text();
	tmp_split = tmp_val.split('(')[1].split('u')[0];
	var ptba_current = parseInt(tmp_split, 10); //console.log(ptba_current);
	if(ptba_current < 4){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>Please set PTBA current to 4 uA at least.</td></tr>';
	}
	//Check VSP-----------------------------------
	var vsp_val = parseFloat($("#form_bin_VSP").val()); //console.log(vsp_val);
	if(isNaN(vsp_val) == 0){
		if((vsp_val - vrh_val) < 0.7){
			content+='<tr><td>'+(oem_checker_item++)+'</td><td>VSP - VRH should be larger than 0.7V</td></tr>';
		}
	}
	//Check AP------------------------------------
	var tcon_ap = parseInt($('.5478_sram_waveform_f0[name="tcon_ap"]').text(), 16);
	if(tcon_ap < 2){
		content+='<tr><td>'+(oem_checker_item++)+'</td><td>Please set TCON_AP to 2 at least.</td></tr>';
	}
	//--------------------------------------------
	
	return content;
}

function Init_Notice(){
	var ic_cut_ver = $('.5478_flash_header[name="ic_sign"]').text(); 


	//$('#compare_notice').html("");
	//$('.notice_fw').css('display', 'block');
	//$('.5478_sram_alg_val').removeClass('oem_notice_double_check');
	//$('.5478_sram_alg_val').removeClass('oem_notice_out_of_range');
		
	//============================================
	//v_content = Value_Checker();
	//r_content = Range_Checker();
	//a_content = Adc_Checker();
	
	//============================================
	// Fill out item list.....
	// var cc_tmp;
	// cc_tmp = $('.5478_flash_func[name="REVERSE_OUTPUTBUF"] span').text();
	// if(cc_tmp == 'On'){
	// 	$('td[name="itemlist_touch_coord"]').text("Option 1");
	// }
	// else{
	// 	$('td[name="itemlist_touch_coord"]').text("Option 2");
	// }
	
	$('td[name="itemlist_tp_point"]').text($('.5478_sram_alg[rfeh="72"]').text());
	
	$('td[name="itemlist_tsix_trigger"]').text($('.5478_sram_alg_val[name="sw_tsix_en_parse"]').text());
	
	//..........................................
	if($('.5478_flash_func[name="DA_PROTOCOL"] span').text() == "On"){
		$('td[name="itemlist_protocol"]').text("DA protocol");
	}
	else if($('.5478_flash_func[name="FCA_PROTOCOL"] span').text() == "On"){
		$('td[name="itemlist_protocol"]').text("FCA protocol");
	}
	else if($('.5478_flash_func[name="ATMEL_PROTOCOL"] span').text() == "On"){
		$('td[name="itemlist_protocol"]').text("ATMEL protocol");
	}
	else if($('.5478_flash_func[name="BMW_PROTOCOL"] span').text() == "On"){
		$('td[name="itemlist_protocol"]').text("BMW protocol");
	}
	else if($('.5478_flash_func[name="HX_PROTOCOL_ID"] span').text() == "On"){
		var event_id_palm = parseInt($('.5478_sram_alg_val_rfeh_af[bit="7"]').text(),10);
		var event_id_total = parseInt($('.5478_sram_alg_val_rfeh_af[bit="1"]').text(),10);
		
		var event_id_off = parseInt($('.5478_sram_alg_val_rfeh_b1[bit="0"]').text(),10);
		var event_id_move_format_en = parseInt($('.5478_sram_alg_val_rfeh_b1[bit="1"]').text(),10);
		var event_id_leave_with_coord_en = parseInt($('.5478_sram_alg_val_rfeh_b1[bit="2"]').text(),10);
		var event_id_coord_format_en = parseInt($('.5478_sram_alg_val_rfeh_b1[bit="3"]').text(),10);

		if(event_id_total == 1){
			if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 0) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 2) Himax Option 2 - EventID & Point + FingerSize + Checksum");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 0) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 3) - EventID/PalmID & Point + FingerSize + Checksum");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 1) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 4) - EventID & Point + FingerSize + Checksum (no point report F)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 1) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 5) - EventID/PalmID & Point + FingerSize + Checksum (no point report F)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 0) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 6) - EventID & Point + FingerSize + Checksum (Leave with coord)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 1) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 7) - EventID & Point + FingerSize + Checksum (Leave with coord + No point report F)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 0) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 8) - EventID/PalmID & Point + FingerSize + Checksum (Leave with coord)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 1) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 9) - EventID/PalmID & Point + FingerSize + Checksum (Leave with coord + No point report F)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 0) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 10) - EventID & Point + FingerSize + Checksum (2nd frame change to Move ID)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 1) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 11) - EventID & Point + FingerSize + Checksum (2nd frame change to Move ID + no point report F)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 0) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 12) - EventID/PalmID & Point + FingerSize + Checksum (2nd frame change to Move ID)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 0) & (event_id_coord_format_en == 1) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 13) - Himax Option 3 - EventID/PalmID & Point + FingerSize + Checksum (2nd frame change to Move ID + No point report F)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 0) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 14) - Desay Format - EventID & Point + FingerSize + Checksum (2nd frame change to Move ID + Leave with coord)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 1) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 15) - EventID & Point + FingerSize + Checksum (2nd frame change to Move ID + Leave with coord + No point report F)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 0) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 16) - EventID/PalmID & Point + FingerSize + Checksum (2nd frame change to Move ID + Leave with coord)");
			}
			else if((event_id_off == 0) & (event_id_move_format_en == 1) & (event_id_leave_with_coord_en == 1) & (event_id_coord_format_en == 1) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 17) - EventID/PalmID & Point + FingerSize + Checksum (2nd frame change to Move ID + Leave with coord + No point report F)");
			}
			else if((event_id_off == 1) /*& (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0)*/ & (event_id_coord_format_en == 0) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 18) - Point + FingerSize + Checksum (no point report 0 + Leave with all 0)");
			}
			else if((event_id_off == 1) /*& (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0)*/ & (event_id_coord_format_en == 1) & (event_id_palm == 0)){
				$('td[name="itemlist_protocol"]').text("(Case 19) - Point + FingerSize + Checksum (no point report F + Leave with all F)");
			}
			else if((event_id_off == 1) /*& (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0)*/ & (event_id_coord_format_en == 0) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 20) - Point/PalmID + FingerSize + Checksum (no point report 0 + Leave with all 0)");
			}
			else if((event_id_off == 1) /*& (event_id_move_format_en == 0) & (event_id_leave_with_coord_en == 0)*/ & (event_id_coord_format_en == 1) & (event_id_palm == 1)){
				$('td[name="itemlist_protocol"]').text("(Case 21) - Point/PalmID + FingerSize + Checksum (no point report F + Leave with all F)");
			}
			else{
				$('td[name="itemlist_protocol"]').text("Himax Option unknown");
			}
		}
		else{
			$('td[name="itemlist_protocol"]').text("Himax Option 1 - Point + FingerSize + Checksum");
		}
	}
	else{
		$('td[name="itemlist_protocol"]').text("Himax Option 1 - Point + FingerSize + Checksum");
	}
	//..........................................
	$('td[name="itemlist_self_test_normal"]').text($('.5478_flash_func[name="AUTO_SELF_TEST_NORMAL"] span').text());
	$('td[name="itemlist_self_test_inspect"]').text($('.5478_flash_func[name="AUTO_SELF_TEST_INSPECT"] span').text());
	
	//..........................................
	var fail_pin = parseInt($('.5478_sram_alg[rfeh="9a"]').text(), 16);
	var fail_mode = parseInt($('.5478_sram_alg[rfeh="9b"]').text(), 16);
	if((fail_pin == 0x4f) && (fail_mode == 0xFF)){
		$('td[name="itemlist_fail_det"]').text("Option 2: FAIL_DET -> DD; TP_GPIO[2] -> TP");
	}
	else if((fail_pin == 0x22) && (fail_mode == 0x00)){
		$('td[name="itemlist_fail_det"]').text("Option 3: FAIL_DET -> DD; TP_GPIO[1] -> DD + TP Alive");
	}
	else if((fail_pin == 0xff) && (fail_mode == 0xFF)){
		$('td[name="itemlist_fail_det"]').text("Option 1(Default): FAIL_DET -> DD + TP");
	}
	else{
		$('td[name="itemlist_fail_det"]').text("Unknown option");
	}
	//..........................................
	var gpio3 = $('.bin_parser_fail_det[addr="b1_pa9_7"]').text();
	if(gpio3 == "1"){
		$('td[name="itemlist_gpio3"]').text("On");
	}
	else if(gpio3 == "N"){
		$('td[name="itemlist_gpio3"]').text("Not in DD init code. Please confirm with TP SE.");
	}
	else{
		$('td[name="itemlist_gpio3"]').text("Off");
	}
	//..........................................
	$('td[name="itemlist_lpwug"]').text($('.5478_flash_func[name="LPWUG_DEF"] span').text());
	$('td[name="itemlist_glove"]').text($('.5478_flash_func[name="GLOVE_FUNCTION_DEF"] span').text());
	
	//===========================================
	// Check is HW/FW osc tracking
	var fw_tp_osc_en = parseInt($('.5478_sram_alg_val_rfeh_2[bit="7"]').text(), 10);
	var fw_dd_osc_en = parseInt($('.5478_sram_alg_val_rfeh_73[bit="6"]').text(), 10);
	var hw_dd_osc_en = parseInt($('#hw_osc1_en').text(), 10);
	var hw_tp_osc_en = parseInt($('#hw_osc2_en').text(), 10);
	console.log("FW osc1/osc2 tracking en is "+fw_dd_osc_en+"/"+fw_tp_osc_en);
	console.log("HW osc1/osc2 tracking en is "+hw_dd_osc_en+"/"+hw_tp_osc_en);

	if(fw_tp_osc_en == 1 && fw_dd_osc_en == 1 && hw_dd_osc_en == 0 && hw_tp_osc_en == 0){ // FW osc tracking
		var osc_burst = $('.5478_flash_func[name="OSC_TRACKING_BURST_MODE"] span').text();
		var osc_line = $('.5478_flash_func[name="OSC_TRACKING_LINE_COUNTER"] span').text();
		var osc_type;
		if((osc_burst == "On") && (osc_line == "Off")){
			osc_type = "FW: Type 2";
		}
		else if((osc_burst == "On") && (osc_line == "On")){
			osc_type = "FW: Type 3";
		}
		else if((osc_burst == "Off") && (osc_line == "On")){
			osc_type = "FW: Type 4";
		}
		else {
			osc_type = "FW: Type 1";
		}
		$('.5478_sram_alg_val[name="osc_tracking_type"]').text(osc_type);	
		$('td[name="itemlist_osc_tracking"]').text($('.5478_sram_alg_val[name="osc_tracking_type"]').text());
		$('td[name="item_des_osc_tracking"]').html("Pass");

	}	
	else if(fw_tp_osc_en == 0 && fw_dd_osc_en == 0 && hw_dd_osc_en == 1 && hw_tp_osc_en == 1){ // HW osc tracking
		$('.5478_sram_alg_val[name="osc_tracking_type"]').text("HW osc tracking");	
		$('td[name="itemlist_osc_tracking"]').text($('.5478_sram_alg_val[name="osc_tracking_type"]').text());

		$('td[name="item_des_osc_tracking"]').html("Pass");
	}	
	else if(fw_tp_osc_en == 0 && fw_dd_osc_en == 0 && hw_dd_osc_en == 0 && hw_tp_osc_en == 0){ // No osc tracking....
		$('.5478_sram_alg_val[name="osc_tracking_type"]').text("Neither FW nor HW osc tracking is on!");	
		$('td[name="itemlist_osc_tracking"]').text($('.5478_sram_alg_val[name="osc_tracking_type"]').text());

		$('td[name="item_des_osc_tracking"]').html("Neither FW nor HW osc tracking is on!");
	}	
	else{ // unknown
		$('.5478_sram_alg_val[name="osc_tracking_type"]').text("Unknown osc tracking type. Please check with TP SE.");	
		$('td[name="itemlist_osc_tracking"]').text($('.5478_sram_alg_val[name="osc_tracking_type"]').text());

		var unknown_command = "Unknown osc tracking type<br/>";
		unknown_command+="HW/FW osc tracking can not be on at the same time!<br/>";
		unknown_command+="FW osc1 tracking is on Rfeh_73 bit6<br/>";
		unknown_command+="FW osc2 tracking is on Rfeh_02 bit7<br/>";
		unknown_command+="HW osc1 tracking is on CB bank0 PA1 bit3<br/>";
		unknown_command+="HW osc2 tracking is on CB bank1 PA1 bit3<br/>";
		$('td[name="item_des_osc_tracking"]').html(unknown_command);
	}

	
	//..........................................
	// Gamma
	var vcom_c="";
	if($('.5478_flash_func[name="DD_UPDATE_VCOM_FROM_FLASH_WHEN_PO"] span').text() == "On"){
		vcom_c += "Support VCOM power on update from flash<br/>";
	}
	if($('.5478_flash_func[name="DD_DYNAMIC_UPDATE_VCOM_BY_HOST"] span').text() == "On"){
		vcom_c += "Support VCOM host command update<br/>";
	}
	if(vcom_c == ""){
		vcom_c = "No Support";
	}
	//console.log("stella "+vcom_c);
	$('td[name="itemlist_vcom"]').html(vcom_c);
	
	var agma_c="";
	if($('.5478_flash_func[name="DD_UPDATE_AGMA_FROM_FLASH_WHEN_PO"] span').text() == "On"){
		agma_c += "Support AGMA power on update from flash <br/>";
	}
	if($('.5478_flash_func[name="DD_DYNAMIC_UPDATE_AGMA_BY_HOST"] span').text() == "On"){
		agma_c += "Support AGMA host command update <br/>";
	}
	if(agma_c == ""){
		agma_c = "No Support";
	}
	$('td[name="itemlist_agma"]').html(agma_c);
	
	var dgc_c="";
	if($('.5478_flash_func[name="DD_UPDATE_DGMA_FROM_FLASH_WHEN_PO"] span').text() == "On"){
		dgc_c += "Support DGC power on update from flash<br/>";
	}
	if($('.5478_flash_func[name="DD_DYNAMIC_UPDATE_DGMA_BY_HOST"] span').text() == "On"){
		dgc_c += "Support DGC host command update<br/>";
	}
	if(dgc_c == ""){
		dgc_c = "No Support";
	}
	$('td[name="itemlist_dgc"]').html(dgc_c);
	//..........................................
	// Get vsync target
	var vsync_content = '';
	var vsync_target = parseInt($('.5478_sram_alg_val[name="osc_tracking_vsync_target"]').text(), 10);
	var lh_r = parseInt($('.5478_sram_alg_val_rfeh_b1[bit="5"]').text(), 10); 
	var dd_tpen = Tcon_Script_Table_Json["cycle"][0]["dd_tpen"]; //console.log(" dd tpen "+ dd_tpen);

	var touch_report = 0;
	if(lh_r){
		touch_report = vsync_target;
	}
	else{
		if(dd_tpen == 1){
			touch_report = vsync_target;
		}
		else{
			touch_report = vsync_target*2;
		}
	}
	vsync_content = "Vsync is "+vsync_target/10+" Hz<br/>Touch Report Rate is "+touch_report/10+" Hz";
	$('td[name="itemlist_report_rate"]').html(vsync_content);
	//..........................................
	var basic_info = '';
	// Get resolution
	var rx_pix_h = parseInt($('.5478_sram_alg[rfeh="76"]').text(), 16);
	var rx_pix_l = parseInt($('.5478_sram_alg[rfeh="77"]').text(), 16);
	var rx_pix_h = rx_pix_h*256 + rx_pix_l;

	var tx_pix_h = parseInt($('.5478_sram_alg[rfeh="78"]').text(), 16);
	var tx_pix_l = parseInt($('.5478_sram_alg[rfeh="79"]').text(), 16);
	var tx_pix_h = tx_pix_h*256 + tx_pix_l;

	var total_rx = parseInt($('.5478_sram_alg[rfeh="177"]').text(), 16);
	var total_tx = parseInt($('.5478_sram_alg[rfeh="178"]').text(), 16);

	var ic_num = parseInt($('.5478_sram_alg[rfeh="179"]').text(), 16);

	basic_info = "Resolution: "+rx_pix_h+" x "+tx_pix_h+"<br/>";
	basic_info+= "RX: "+total_rx+" .TX: "+total_tx+"<br/>ic_num: "+ic_num;
	$('td[name="itemlist_basic_info"]').html(basic_info);
	//$('td[name=""]').text();
	//=================================================
	//=================================================
	//=================================================
	var normal_idle_define = $('.5478_flash_func[name="EMI_IDLE_MODE"] span').text();
	var normal_idle_en = parseInt($('.5478_sram_alg_val_rfeh_2[bit="3"]').text(), 10);
	var normal_check = "";
	if(normal_idle_define == "On" && normal_idle_en == 1){
		normal_check = "Pass";
	}
	else if(normal_idle_define == "Off" && normal_idle_en == 0){
		normal_check = "Pass";
	}
	else if(normal_idle_define == "Off" && normal_idle_en == 1){
		normal_check = "EMI_IDLE_MODE is off, but IDLE_EN is 1";
	}
	else if(normal_idle_define == "On" && normal_idle_en == 0){
		normal_check = "EMI_IDLE_MODE is on, but IDLE_EN is 0";
	}
	else{
		normal_check = "UnSupport check (>= 8002)";
	}

	$('td[name="item_des_idle"]').html(normal_check);
	//=================================================
	// skip checking on PA0412
	if(ic_cut_ver == "HX83194-A" || ic_cut_ver == "HX84195-A"){
		var hopping_define = $('.5478_flash_func[name="TX_HOPPING_DEF"] span').text();
		var hop_en = parseInt($('.5478_sram_alg_val_rfeh_3[bit="7"]').text(), 10);
		var noise_en = parseInt($('.5478_sram_alg_val_rfeh_ad[bit="3"]').text(), 10);
		var hop_check = '';

		var f0_listen_word3 = parseInt($('#fw_checker_ac3_word3').text(), 16);    //console.log(f0_listen_word3);
		var f0_listen_word21 = parseInt($('#fw_checker_ac3_word21').text(), 16); //console.log(f0_listen_word21);
		var f0_listen_word35 = parseInt($('#fw_checker_ac3_word35').text(), 16); //console.log(f0_listen_word35);
		var f0_listen_dc1_word1 = parseInt($('#fw_checker_dc1_2_word1').text(), 16);
		var f0_listen_dc2_word1 = parseInt($('#fw_checker_dc2_2_word1').text(), 16);
		var f1_listen_dc1_word1 = parseInt($('#fw_checker_dc1_4_word1').text(), 16);
		var f1_listen_dc2_word1 = parseInt($('#fw_checker_dc2_4_word1').text(), 16);
		var f0_listen_dc1_word2 = parseInt($('#fw_checker_dc1_2_word2').text(), 16);
		var f0_listen_dc2_word2 = parseInt($('#fw_checker_dc2_2_word2').text(), 16);
		var f1_listen_dc1_word2 = parseInt($('#fw_checker_dc1_4_word2').text(), 16);
		var f1_listen_dc2_word2 = parseInt($('#fw_checker_dc2_4_word2').text(), 16);

		var f1_listen_word3 = parseInt($('#fw_checker_ac5_word3').text(), 16);    
		var f1_listen_word21 = parseInt($('#fw_checker_ac5_word21').text(), 16); 
		var f1_listen_word35 = parseInt($('#fw_checker_ac5_word35').text(), 16);

		var f0_listen_slope = (f0_listen_word3 >> 4)&0x3F;
		var f1_listen_slope = (f1_listen_word3 >> 4)&0x3F;
		var f0_listen_sine_en = (f0_listen_word3 >> 10)&0x07;
		var f1_listen_sine_en = (f1_listen_word3 >> 10)&0x07;
		var f0_listen_mixer2_en = (f0_listen_word21 >> 28)&0x0F;
		var f1_listen_mixer2_en = (f1_listen_word21 >> 28)&0x0F;
		var f0_listen_capture_f0 = (f0_listen_word35 >> 27)&0x01;
		var f1_listen_capture_f0 = (f1_listen_word35 >> 27)&0x01;
		var f0_listen_capture_f1 = (f0_listen_word35 >> 28)&0x01;
		var f1_listen_capture_f1 = (f1_listen_word35 >> 28)&0x01;

		var f0_dc1_listen = (f0_listen_dc1_word1 >> 21) & 0x01;
		var f0_dc2_listen = (f0_listen_dc2_word1 >> 21) & 0x01;
		var f1_dc1_listen = (f1_listen_dc1_word1 >> 21) & 0x01;
		var f1_dc2_listen = (f1_listen_dc2_word1 >> 21) & 0x01;

		if(hop_en == 1 && noise_en == 1){
			hop_check = "TX_HOP_EN and NOISE_DET_EN can not be 1 at the same time!";
		}
		else if(hopping_define == "On"){
			// check ac3,5 and dc 2,4 word1 bit21
			if(hop_en == 0 && noise_en == 0){
				hop_check = "Neither TX_HOP_EN nor NOISE_DET_EN is on."
			}
			else if(hop_en == 0 && noise_en == 1){ // noise det
				if(f0_listen_slope == 0 && f0_listen_sine_en == 0 && f0_listen_mixer2_en == 1 && f0_listen_capture_f0 == 1 && f0_listen_capture_f1 == 1
				&& f0_dc1_listen == 1 && f0_dc2_listen == 1
				){
					hop_check = "Pass";
				}
				else{
					hop_check = "NG. Please check AC3 <br/>word3 sine_en = 0, slope = 0<b/r>word 21 mixer2_on = 1<br/>word35 capture_f0 = 1, capture_f1 = 1<br/>";
					hop_check+="Please check DC1/2-2 PTBA[21]";
				}
			}
			else if(hop_en == 1 && noise_en == 0){ // hopping
				if( f0_listen_slope == 0 && f0_listen_sine_en == 0 && f0_listen_mixer2_en == 1 && f0_listen_capture_f0 == 1 && f0_listen_capture_f1 == 1
				&&  f1_listen_slope == 0 && f1_listen_sine_en == 0 && f1_listen_mixer2_en == 1 && f1_listen_capture_f0 == 1 && f1_listen_capture_f1 == 1
				&& f0_dc1_listen == 1 && f0_dc2_listen == 1 && f1_dc1_listen == 1 && f1_dc2_listen == 1
				){
					hop_check = "Pass";
				}
				else{
					hop_check = "NG. Please check AC3 <br/>word3 sine_en = 0, slope = 0<b/r>word 21 mixer2_on = 1<br/>word35 capture_f0 = 1, capture_f1 = 1<br/>";
					hop_check += "Please check AC5 <br/>word3 sine_en = 0, slope = 0<b/r>word 21 mixer2_on = 1<br/>word35 capture_f0 = 1, capture_f1 = 1<br/>";
					hop_check+="Please check DC1/2-2 PTBA[21]<br/>";
					hop_check+="Please check DC1/2-4 PTBA[21]<br/>";
				}
			}

		}
		else{
			hop_check = "Pass";
		}
		$('td[name="item_des_listen"]').html(hop_check);
	}
	//-----------------------------------------------------
	if(ic_cut_ver == "HX83194-A" || ic_cut_ver == "HX84195-A"){
		// VRH checking
		var vsn_val = $('#dd_reg_vsn_parse').text();
		var f0_vrh = parseInt($('#F0_dc_vrh').text().split(' ')[0], 10);
		var f1_vrh = parseInt($('#F1_dc_vrh').text().split(' ')[0], 10);
		var f0_dc1_listen_vrh = (parseInt($('#fw_checker_dc1_2_word2').text(), 16) >> 3) & 0x0F;    
		var f0_dc2_listen_vrh = (parseInt($('#fw_checker_dc2_2_word2').text(), 16) >> 3) & 0x0F;      
		var f1_dc1_listen_vrh = (parseInt($('#fw_checker_dc1_4_word2').text(), 16) >> 3) & 0x0F;       
		var f1_dc2_listen_vrh = (parseInt($('#fw_checker_dc2_4_word2').text(), 16) >> 3) & 0x0F;       

		var vrh_check = '';
		if(vsn_val === "NAN"){
			vrh_check = "NG<br/>Fail to Get VSN information on EBh bank1 PA9<br/>";
		}
		else{
			var vsn_val_dec = parseFloat(vsn_val);
			vsn_val_dec = 0-vsn_val_dec+0.5; // tolerance 0.5V
			if(f0_vrh >= vsn_val_dec && f1_vrh >= vsn_val_dec 
				&& f0_dc1_listen_vrh >= vsn_val_dec && f0_dc2_listen_vrh >= vsn_val_dec
				&& f1_dc1_listen_vrh >= vsn_val_dec && f1_dc2_listen_vrh >= vsn_val_dec
			){
				vrh_check = "Pass";
			}
			else{
				vrh_check = "NG. Please check VRH on DC1,2,3,4<br/>";
			}
		}
		$('td[name="item_des_vrh"]').html(vrh_check);
	}
}
