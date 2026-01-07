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
	oem_checker_item = 0;
	var content = '';
	var v_content, r_content, a_content;
	$('#compare_notice').html("");
	$('.notice_fw').css('display', 'block');
	$('.5478_sram_alg_val').removeClass('oem_notice_double_check');
	$('.5478_sram_alg_val').removeClass('oem_notice_out_of_range');
		
	content+='<table class="table table-bordered table-striped table-hover">';
	content+='<tr><th>Notice #</th><th><i class="fas fa-exclamation-triangle"></i>&nbsp;Description</th></tr>';
	//============================================
	v_content = Value_Checker();
	r_content = Range_Checker();
	a_content = Adc_Checker();
	
	var total_checker = v_content+r_content+a_content;
	if(total_checker == ''){
		total_checker = '<tr><td colspan=2 style="color: green; font-weight: bold;">Pass</td></tr>';
	}
	content = content+total_checker;
	//============================================
	content+='</table>';
	$('#compare_notice').html(content);
	
	//============================================
	// Fill out item list.....
	var cc_tmp;
	cc_tmp = $('.5478_flash_func[name="REVERSE_OUTPUTBUF"] span').text();
	if(cc_tmp == 'On'){
		$('td[name="itemlist_touch_coord"]').text("Option 1");
	}
	else{
		$('td[name="itemlist_touch_coord"]').text("Option 2");
	}
	
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
		var cc_tmp = $('.5478_tp_version[name="HX_ID_Pro"]').text();
		if(cc_tmp == "01.00"){
			$('td[name="itemlist_protocol"]').text("Himax Option 2 - EventID & Point + FingerSize + Checksum");
		}
		else if(cc_tmp == "01.02"){
			$('td[name="itemlist_protocol"]').text("Himax Option 2 - Desay Format");
		}
		else if(cc_tmp == "02.00"){
			$('td[name="itemlist_protocol"]').text("Himax Option 2 - 變形");
		}
		else if(cc_tmp == "03.00" || cc_tmp == "04.00"|| cc_tmp == "05.00"){ // 809B
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
			$('td[name="itemlist_protocol"]').text("Himax Option unknown");
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
	var gpio3 = $('.bin_parser_fail_det_pa6[bit="5"]').text();
	if(gpio3 == "1"){
		$('td[name="itemlist_gpio3"]').text("On");
	}
	else if(gpio3 == "Unknown"){
		$('td[name="itemlist_gpio3"]').text("Not in DD init code. Please confirm with TP SE.");
	}
	else{
		$('td[name="itemlist_gpio3"]').text("Off");
	}
	//..........................................
	$('td[name="itemlist_lpwug"]').text($('.5478_flash_func[name="LPWUG_DEF"] span').text());
	$('td[name="itemlist_glove"]').text($('.5478_flash_func[name="GLOVE_FUNCTION_DEF"] span').text());
	
	$('td[name="itemlist_osc_tracking"]').text($('.5478_sram_alg_val[name="osc_tracking_type"]').text());
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
	//$('td[name=""]').text();
	
}
