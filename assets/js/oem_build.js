var timer_count = 0;
var timer_max_try = 45;// 20s * 45 --> 15 minutes

//===========================================================
var rfeh_02_sample = 0xB7; // algorithm_en_set_1
var rfeh_03_sample = 0x00; // algorithm_en_set_2
var rfeh_74_sample = 0x33; // algorithm_en_set_4
var rfeh_73_sample = 0x40; // algorithm_en_set_5
var rfeh_ad_sample = 0x0B; // algorithm_en_set_automobile --> Turn off RAWDATA_NORMALIZE_EN bit 7 on the first FW.
var rfeh_af_sample = 0x11; // algorithm_en_set_automobile2
var rfeh_b0_sample = 0x00; // algorithm_en_set_automobile3
var rfeh_b1_sample = 0x00; // algorithm_en_set_automobile4
//===========================================================

function Tp_config_condition(){ // on change condition.....
	//========================================================================================
	
	// Fill out Date==========================================================
	var datee = new Date();
	//var strDate = datee.getFullYear() + "_" + (datee.getMonth()+1).toString().padStart(2,"0") + "_" + datee.getDate().toString().padStart(2,"0"); console.log(strDate);
	var strDate = datee.getFullYear() + (datee.getMonth()+1).toString().padStart(2,"0") + datee.getDate().toString().padStart(2,"0");
	$('.build_tp_string[name="Cfg_date"]').val(strDate);
	// mapping================================================================
	$('.build_tp_select[name="ADC_OPTION"]')[0].selectedIndex = 0; // vertical
	
	$('.build_tp_select[name="ADC_OPTION"]').change(function(){
		//console.log($(this).val());
		var mapping = $(this).val();
		if(mapping == 0){ // vertical
			$('.build_tp_number[name="ADC_NUM_CYC_1"]').prop('disabled', false).css('cursor','');
			$('.build_tp_number[name="ADC_NUM_CYC_2"]').prop('disabled', false).css('cursor','');
			$('.build_tp_number[name="ADC_NUM_CYC_3"]').prop('disabled', false).css('cursor','');
			$('.build_tp_number[name="ADC_NUM_CYC_4"]').prop('disabled', false).css('cursor','');
			
		}
		else{
			$('.build_tp_number[name="ADC_NUM_CYC_1"]').val("0").prop('disabled', true).css('cursor','not-allowed');
			$('.build_tp_number[name="ADC_NUM_CYC_2"]').val("0").prop('disabled', true).css('cursor','not-allowed');
			$('.build_tp_number[name="ADC_NUM_CYC_3"]').val("0").prop('disabled', true).css('cursor','not-allowed');
			$('.build_tp_number[name="ADC_NUM_CYC_4"]').val("0").prop('disabled', true).css('cursor','not-allowed');
		}
	});
	// ic num==================================================================
	$('.build_tp_select[name="CASCADE_IC_NUM"]')[0].selectedIndex = 2; // 3 IC
	$('.build_tp_select[name="CASCADE_IC_NUM"]').change(function(){
		// cascade, LH, cut2 workaournd protect....
		var cascade = $('.build_tp_select[name="CASCADE_IC_NUM"]').val();
		var typee = $('.build_tp_select[name="LONGV_MODE"]').val(); //console.log(typee);
		var cut = $('.build_tp_select[name="IC_CUT_VERSION"]').val(); //console.log(cut);
		
		if(cascade > 1 && typee == 0 && cut <=2){
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').prop('disabled', false).css('cursor', '');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').prop('disabled', false).css('cursor', '');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').prop('disabled', false).css('cursor', '');
		}
		else{
			// Off
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').prop('disabled', true).css('cursor', 'not-allowed');
			
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').prop('disabled', true).css('cursor', 'not-allowed');
			
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').prop('disabled', true).css('cursor', 'not-allowed');
		}
	});
	
	// LH/LV==================================================================
	$('.build_tp_select[name="LONGV_MODE"]')[0].selectedIndex = 0; // LH
	$('.build_tp_select[name="LONGV_MODE"]').change(function(){
		var typee = $(this).val();
		if(typee == 0){ // LH
			$('.build_tp_select[name="Report_Rate"]').prop('disabled', false).css('cursor', '');
			$('.build_tp_select[name="Report_Rate"]')[0].selectedIndex = 0;
			
		}
		else{ // LV
			$('.build_tp_select[name="Report_Rate"]')[0].selectedIndex = 1;
			$('.build_tp_select[name="Report_Rate"]').prop('disabled', true).css('cursor', 'not-allowed');
		}
		
		// cascade, LH, cut2 workaournd protect....
		var cascade = $('.build_tp_select[name="CASCADE_IC_NUM"]').val();
		//var typee = $('.build_tp_select[name="LONGV_MODE"]').val(); //console.log(typee);
		var cut = $('.build_tp_select[name="IC_CUT_VERSION"]').val(); //console.log(cut);
		
		if(cascade > 1 && typee == 0 && cut <=2){
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').prop('disabled', false).css('cursor', '');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').prop('disabled', false).css('cursor', '');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').prop('disabled', false).css('cursor', '');
		}
		else{
			// Off
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').prop('disabled', true).css('cursor', 'not-allowed');
			
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').prop('disabled', true).css('cursor', 'not-allowed');
			
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').prop('disabled', true).css('cursor', 'not-allowed');
		}
	});
	//cut ic===================================================================
	$('.build_tp_select[name="IC_CUT_VERSION"]')[0].selectedIndex = 1; // cut2
	$('.build_tp_select[name="IC_CUT_VERSION"]').change(function(){
		// cascade, LH, cut2 workaournd protect....
		var cascade = parseInt($('.build_tp_select[name="CASCADE_IC_NUM"]').val(), 10);
		var typee = parseInt($('.build_tp_select[name="LONGV_MODE"]').val(), 16); 
		var cut = parseInt($('.build_tp_select[name="IC_CUT_VERSION"]').val(), 16); 
		
		//console.log('cascade ic num '+cascade+' '+typee+' CUT'+cut);
		
		if(cascade > 1 && typee == 0 && cut <=2){
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').prop('disabled', false).css('cursor', '');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').prop('disabled', false).css('cursor', '');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').prop('disabled', false).css('cursor', '');
		}
		else{
			// Off
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_WORKAROUND"]').prop('disabled', true).css('cursor', 'not-allowed');
			
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="DYNAMIC_HSYNC_ASYNC_GAS"]').prop('disabled', true).css('cursor', 'not-allowed');
			
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').attr('control', 'Off').text('Off');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').removeClass('btn-info').addClass('btn-warning');
			$('.tp_build_switch_button[name="LVDS_NORMAL_FRAME_WORKAROUND"]').prop('disabled', true).css('cursor', 'not-allowed');
		}
		
	});
	// support finger count ==================================================================
	$('.build_tp_select[name="Touch_Point_Number"]')[0].selectedIndex = 9; // 10-finger
	
	//=================================================================
	$('.build_tp_select').change(function(){
		//console.log("changing...");
		Cal_Isram();
	});
}


function Tp_config_build_rule(){ // Create a json string
	var tp_obj = {};
	var tobereplaced, enabled;
	var funcname;
	//====================================================
	var fail_log = "";
	tp_obj["fail_log"] = "";
	// Check tx rx mapping.=================================
	var tx_rx_mapping_table = $.trim($('#mapping_table').val());
	if(tx_rx_mapping_table != ""){
		$('#TSRAM_ADC_enter').click();
	}
	else{
		tp_obj["tp_init_txrx_mapping"] = "";
		tp_obj["tp_init_selftest_adc_mapping"] = "";
		tp_obj["tp_init_selftest_tsram_mapping"] = "";
	}
	//====================================================
	// Update hide first to make sure obj is created....
	$('.build_tp_hide').each(function() {
		funcname = $(this).attr('name');
		tp_obj[funcname] = $(this).val();
	});
	//====================================================
	// Fill out mod_tp_init
	tp_obj["algorithm_en_set_1"] = rfeh_02_sample;
	tp_obj["algorithm_en_set_2"] = rfeh_03_sample;
	tp_obj["algorithm_en_set_4"] = rfeh_74_sample;
	tp_obj["algorithm_en_set_5"] = rfeh_73_sample;
	tp_obj["algorithm_en_set_automobile"] = rfeh_ad_sample;
	tp_obj["algorithm_en_set_automobile2"] = rfeh_af_sample;
	//tp_obj["algorithm_en_set_automobile3"] = rfeh_b0_sample;
	tp_obj["algorithm_en_set_automobile4"] = rfeh_b1_sample;
	
	//tp_obj["pb_num"] 
	//tp_obj["fail_det_pin_sel"]
	//tp_obj["fail_det_mode_sel"];
	//====================================================
	//type 0: switch
	$('.tp_build_switch_button').each(function() {
		enabled = $(this).attr('control');
		funcname = $(this).attr('name');

		if('On' == enabled){
			// checker for sine-wave
			if(funcname == "Sine_Wave_Function"){
				tp_obj["EMI_RX_SINE_PHASE_270"] = "0x01";
				tp_obj["EMI_RX_EQ_HEAD"] = "0x01";
			}
			else{
				tp_obj[funcname] = "0x01";
			}	
		}
		else{
			tp_obj[funcname] = "0x00";
		}
	});
	//.................................
	if(tp_obj["LPWUG_DEF"] == "0x01"){ 
		// set bit 4  LPWUG_EN
		tp_obj["algorithm_en_set_2"] |= 0x10;
	}
	else{
		// clear bit 4  LPWUG_EN
		tp_obj["algorithm_en_set_2"] &= 0xEF;
	}
	//.................................
	if(tp_obj["EMI_IDLE_MODE"] == "0x01"){ 
		// set bit 3  IDLE_EN
		tp_obj["algorithm_en_set_1"] |= 0x08;
	}
	else{
		// clear bit 3  IDLE_EN
		tp_obj["algorithm_en_set_1"] &= 0xF7;
	}
	//====================================================
	//type 1: select======================================
	//$('.build_tp_select').each(function() {});
	tp_obj["IC_SIGN_2"] = $('.build_tp_select[name="IC_SIGN_2"]').val();
	tp_obj["IC_CUT_VERSION"] = $('.build_tp_select[name="IC_CUT_VERSION"]').val();
	tp_obj["CASCADE_IC_NUM"] = $('.build_tp_select[name="CASCADE_IC_NUM"]').val();
	tp_obj["ADC_OPTION"] = $('.build_tp_select[name="ADC_OPTION"]').val();
	tp_obj["PANEL_POWER_MODE"] = $('.build_tp_select[name="PANEL_POWER_MODE"]').val();
	tp_obj["VGL_VGH_LFDEN"] = $('.build_tp_select[name="VGL_VGH_LFDEN"]').val();
	tp_obj["LONGV_MODE"] = $('.build_tp_select[name="LONGV_MODE"]').val();
	tp_obj["USE_1129_COMMAND"] = $('.build_tp_select[name="USE_1129_COMMAND"]').val();
	
	//ic type 192 or 193
	if(tp_obj["IC_SIGN_2"].indexOf("HX83193") >=0){
		tp_obj["IC_Type"] = "oemic_193";
	}
	else{
		tp_obj["IC_Type"] = "oemic_192";
	}
	//console.log(tp_obj["IC_Type"]);
	
	tp_obj["pb_num"] = parseInt($('.build_tp_select[name="Touch_Point_Number"]').val(), 10);
	
	//tobereplace == 1....................................
	funcname = $('.build_tp_select[name="Protocol"]').val();
	if(funcname == "HX_FORMAT_2"){ // option 2
		tp_obj["HX_PROTOCOL_ID"] = "0x01";
		//tp_obj["HX_FORMAT_1"] = "0x01";
		
		//Set HX_ID_EN bit 1
		tp_obj["algorithm_en_set_automobile2"] |= 0x02;
		//clear bmw bit 7
		tp_obj["algorithm_en_set_5"] &= 0x7F;
		//clear others bit4,5,6
		tp_obj["algorithm_en_set_automobile"] &= 0x8F;
	}
	else if(funcname == "DESAY_FORMAT"){
		tp_obj["HX_PROTOCOL_ID"] = "0x01";
		tp_obj["DESAY_FORMAT"] = "0x01";
		//tp_obj["HX_FORMAT_1"] = "0x01";
		
		//Set HX_ID_EN bit 1
		tp_obj["algorithm_en_set_automobile2"] |= 0x02;
		//clear BMW_PROTOCOL_EN bit 7
		tp_obj["algorithm_en_set_5"] &= 0x7F;
		//clear others bit4,5,6
		tp_obj["algorithm_en_set_automobile"] &= 0x8F;
	}
	else if(funcname == "HX_FORMAT_3"){ // option 3
		tp_obj["HX_PROTOCOL_ID"] = "0x01";
		//tp_obj["HX_FORMAT_2"] = "0x01";
		
		//Set HX_ID_EN bit 1 and HX_ID_PALM_EN bit 7
		tp_obj["algorithm_en_set_automobile2"] |= 0x82;
		//clear BMW_PROTOCOL_EN bit 7
		tp_obj["algorithm_en_set_5"] &= 0x7F;
		//clear others bit4,5,6 (DA_PROTOCOL_EN/FCA_PROTOCOL_EN/ATMEL_PROTOCOL_EN)
		tp_obj["algorithm_en_set_automobile"] &= 0x8F;
	}
	else if(funcname == "BMW_PROTOCOL"){
		tp_obj["BMW_PROTOCOL"] = "0x01";
		
		//clear HX_ID_EN bit 1
		tp_obj["algorithm_en_set_automobile2"] &= 0xFD;
		//set BMW_PROTOCOL_EN bit 7
		tp_obj["algorithm_en_set_5"] |= 0x80;
		//clear others DA_PROTOCOL_EN/FCA_PROTOCOL_EN/ATMEL_PROTOCOL_EN bit4,5,6
		tp_obj["algorithm_en_set_automobile"] &= 0x8F;
	}
	else if(funcname == "DA_PROTOCOL"){
		tp_obj["DA_PROTOCOL"] = "0x01";
		
		//clear HX_ID_EN bit 1
		tp_obj["algorithm_en_set_automobile2"] &= 0xFD;
		//clear BMW_PROTOCOL_EN bit 7
		tp_obj["algorithm_en_set_5"] &= 0x7F;
		//Set bit4 clear bit5,6 (DA_PROTOCOL_EN/FCA_PROTOCOL_EN/ATMEL_PROTOCOL_EN)
		tp_obj["algorithm_en_set_automobile"] |= 0x10;
		tp_obj["algorithm_en_set_automobile"] &= 0x9F;
	}
	else if(funcname == "FCA_PROTOCOL"){
		tp_obj["FCA_PROTOCOL"] = "0x01";
		
		//clear HX_ID_EN bit 1
		tp_obj["algorithm_en_set_automobile2"] &= 0xFD;
		//clear BMW_PROTOCOL_EN bit 7
		tp_obj["algorithm_en_set_5"] &= 0x7F;
		//Set bit5 clear bit4,6 (DA_PROTOCOL_EN/FCA_PROTOCOL_EN/ATMEL_PROTOCOL_EN)
		tp_obj["algorithm_en_set_automobile"] |= 0x20;
		tp_obj["algorithm_en_set_automobile"] &= 0xAF;
	}
	else if(funcname == "ATMEL_PROTOCOL"){
		tp_obj["ATMEL_PROTOCOL"] = "0x01";
		
		//clear HX_ID_EN bit 1
		tp_obj["algorithm_en_set_automobile2"] &= 0xFD;
		//clear BMW_PROTOCOL_EN bit 7
		tp_obj["algorithm_en_set_5"] &= 0x7F;
		//Set bit6 clear bit4,5 (DA_PROTOCOL_EN/FCA_PROTOCOL_EN/ATMEL_PROTOCOL_EN)
		tp_obj["algorithm_en_set_automobile"] |= 0x40;
		tp_obj["algorithm_en_set_automobile"] &= 0xCF;
	}
	else{ // himax protocol
		//clear HX_ID_EN bit 1
		tp_obj["algorithm_en_set_automobile2"] &= 0xFD;
		//clear BMW_PROTOCOL_EN bit 7
		tp_obj["algorithm_en_set_5"] &= 0x7F;
		//clear others bit4,5,6 (DA_PROTOCOL_EN/FCA_PROTOCOL_EN/ATMEL_PROTOCOL_EN)
		tp_obj["algorithm_en_set_automobile"] &= 0x8F;
	}
	//....................................
	tp_obj["Himax_Report_Rate_60Hz"] = $('.build_tp_select[name="Report_Rate"]').val();
	//....................................
	var osctype = parseInt($('.build_tp_select[name="Osc_tracking_type"]').val(), 10);
	if(osctype == 2){
		tp_obj["OSC_TRACKING_BURST_MODE"] = "0x01";
		tp_obj["OSC_TRACKING_LINE_COUNTER"] = "0x00";
	}
	else if(osctype == 3){
		tp_obj["OSC_TRACKING_BURST_MODE"] = "0x01";
		tp_obj["OSC_TRACKING_LINE_COUNTER"] = "0x01";
	}
	else if(osctype == 4){
		tp_obj["OSC_TRACKING_BURST_MODE"] = "0x00";
		tp_obj["OSC_TRACKING_LINE_COUNTER"] = "0x01";
	}
	//....................................
	var ddtpen5 = parseInt($('.build_tp_select[name="DD_TPEN_5"]').val(), 10);
	if(ddtpen5 == 1){ // Noise Detect
		tp_obj["TX_HOPPING_DEF"] = "0x01";
		tp_obj["NOISE_DET_ONLY"] = "0x01";
		
		// turn on NOISE_DET_EN  --> algorithm_en_set_automobile  bit 3
		tp_obj["algorithm_en_set_automobile"] |= 0x08; // bit 3
		// turn off TX_HOP_EN   --> algorithm_en_set_2  bit 7
		tp_obj["algorithm_en_set_2"] &= 0x7F; // bit 7
		
	}
	else if(ddtpen5 == 2){ //Hopping
		tp_obj["TX_HOPPING_DEF"] = "0x01";
		tp_obj["NOISE_DET_ONLY"] = "0x00";
		
		// turn off NOISE_DET_EN  --> algorithm_en_set_automobile  bit 3
		tp_obj["algorithm_en_set_automobile"] &= 0xF7; // bit 3
		// turn on TX_HOP_EN   --> algorithm_en_set_2  bit 7
		tp_obj["algorithm_en_set_2"] |= 0x80; // bit 7
	}
	else{ // default
		// turn off NOISE_DET_EN  --> algorithm_en_set_automobile  bit 3
		tp_obj["algorithm_en_set_automobile"] &= 0xF7; // bit 3
		// turn off TX_HOP_EN   --> algorithm_en_set_2  bit 7
		tp_obj["algorithm_en_set_2"] &= 0x7F; // bit 7
	}
	//....................................
	// TPS............................
	var tpstype = parseInt($('.build_tp_select[name="TPS_UPDATE"]').val(), 10);
	if(tpstype == 1){ // update vcom
		tp_obj["DD_TPS_DETECTION"] = "0x01";
		tp_obj["DD_UPDATE_VCOM_FROM_FLASH_WHEN_PO"] = "0x01";
		tp_obj["DD_DYNAMIC_UPDATE_VCOM_BY_HOST"] = "0x01";
		tp_obj["TPS_DYNAMIC_UPDATE_VCOM"] = "0x01";
	}
	else if(tpstype == 2){ // agma
		tp_obj["DD_TPS_DETECTION"] = "0x01";
		tp_obj["DD_UPDATE_AGMA_FROM_FLASH_WHEN_PO"] = "0x01";
		tp_obj["DD_DYNAMIC_UPDATE_AGMA_BY_HOST"] = "0x01";
		tp_obj["TPS_DYNAMIC_UPDATE_AGMA"] = "0x01";
	}
	else if(tpstype == 2){ // dgc
		tp_obj["DD_TPS_DETECTION"] = "0x01";
		tp_obj["DD_UPDATE_DGMA_FROM_FLASH_WHEN_PO"] = "0x01";
		tp_obj["DD_DYNAMIC_UPDATE_DGMA_BY_HOST"] = "0x01";
		tp_obj["TPS_DYNAMIC_UPDATE_DGMA"] = "0x01";
	}
	
	//....................................
	var tporigin = parseInt($('.build_tp_select[name="Touch_coordinate_origin"]').val(), 10);
	if(tporigin == 1){ // reverse
		tp_obj["REVERSE_OUTPUTBUF"] = "0x01";
		// Set bit 0,1    X_REV, Y_REV
		tp_obj["algorithm_en_set_4"] |= 0x03;
	}
	else{
		tp_obj["REVERSE_OUTPUTBUF"] = "0x00";
		// Clear bit 0,1    X_REV, Y_REV
		tp_obj["algorithm_en_set_4"] &= 0xFC;
	}
	//....................................
	var failoption = parseInt($('.build_tp_select[name="FAIL_DET"]').val(), 10);
	if(failoption == 1){ // option 2
		tp_obj["fail_det_pin_sel"] = 0x4F;
		tp_obj["fail_det_mode_sel"] = 0xFF
	}
	else if(failoption == 2){ // option 3
		tp_obj["fail_det_pin_sel"] = 0x22;
		tp_obj["fail_det_mode_sel"] = 0x00
	}
	else{
		tp_obj["fail_det_pin_sel"] = 0xFF;
		tp_obj["fail_det_mode_sel"] = 0xFF
	}
	//....................................
	var tsix = parseInt($('.build_tp_select[name="Tsix_Int"]').val(), 10); //0: level
	if(tsix == 1){
		// SW_TSIX_EN  1: edge
		tp_obj["algorithm_en_set_2"] |= 0x01; // bit0
	}
	else{
		// SW_TSIX_EN  0: level
		tp_obj["algorithm_en_set_2"] &= 0xFE;
	}
	
	//====================================================
	// type 2: number
	$('.build_tp_number').each(function() {
		var numbers = parseInt($(this).val(), 10); 
		if(isNaN(numbers)){
			enabled = 0;
		}
		else{
			enabled = numbers;
		}
		funcname = $(this).attr('name');
		tp_obj[funcname] = enabled;
	});
	// Chane Panel_Ver to hex
	tp_obj["PANEL_VER"] = "0x"+(tp_obj["PANEL_VER"].toString(16).padStart(2,"0").toUpperCase());
	
	// checker......
	if(tp_obj["XRES"] <=0){
		fail_log += "XRES should be larger than 0<br />";
	}
	if(tp_obj["YRES"] <=0){
		fail_log += "YRES should be larger than 0<br />";
	}
	if(tp_obj["MAX_TX_NUM"] <=0){
		fail_log += "In single IC, the column count should be larger than 0<br />";
	}
	if(tp_obj["MAX_RX_NUM"] <=0){
		fail_log += "In single IC, the row count should be larger than 0<br />";
	}
	var txrx_single = tp_obj["MAX_TX_NUM"] * tp_obj["MAX_RX_NUM"]; //console.log(txrx_single);
	if((txrx_single > 0) && ((txrx_single % 4) > 0) ){
		fail_log += "In single IC, the row*column should be divided by 4<br />";
	}
	if(tp_obj["ADC_OPTION"] == 0){ // vertical mapping
		var adc_added = tp_obj["ADC_NUM_CYC_1"] + tp_obj["ADC_NUM_CYC_2"] + tp_obj["ADC_NUM_CYC_3"] + tp_obj["ADC_NUM_CYC_4"];
		if(adc_added != txrx_single/2){
			fail_log += "In a single IC, TX/RX mistmatch with ADC_NUM_CYC<br />";
		}
	}
	else{
		if(tp_obj["MAX_TX_NUM"] > 0){
			if(((tp_obj["MAX_TX_NUM"] % 4) > 0))
				fail_log += "For horizon mapping on a single IC, the column should be divided by 4.<br />";
		}
	}
	
	// update an fill out others....
	tp_obj["IC_VERSION"] = tp_obj["IC_CUT_VERSION"];
	tp_obj["A_CHIP_RX_NUM"] = tp_obj["MAX_TX_NUM"];
	tp_obj["MAX_TX_NUM"] = '('+tp_obj["MAX_TX_NUM"]+' * CASCADE_IC_NUM)';

	if(tp_obj["ADC_OPTION"] == 0) { //vertical
		tp_obj["A_MUX_COL_NUM"] = "0";
		
		// find the largest
		tp_obj["ADC_USED_NUM"] = tp_obj["ADC_NUM_CYC_1"];
	}
	else{ //horizon
		tp_obj["A_MUX_COL_NUM"] = (tp_obj["A_CHIP_RX_NUM"] / 4);
		tp_obj["ADC_USED_NUM"] = (txrx_single/4);
	}
	
	if(tp_obj["CASCADE_IC_NUM"] == 1){ // single IC
		tp_obj["SHIFT_TO_MASTER"] = "0x00";
		tp_obj["SHIFT_TO_SLAVE2"] = "0x00";
	}
	else{ // cascade IC
		tp_obj["SHIFT_TO_MASTER"] = "A_CHIP_RX_NUM";
		tp_obj["SHIFT_TO_SLAVE2"] = "(A_CHIP_RX_NUM << 1)";
		
		tp_obj["VIDEO_GEN"] = "0x01";
	}
	
	// LH or LV.......................
	if(tp_obj["LONGV_MODE"] == "0x00"){ // LH
		
	}
	else{ // LV
		tp_obj["SUPER_SAFE_MODE"] = "0x00";
		tp_obj["DSP_MANUAL_ON"] = "0x01";
		tp_obj["CASCADE_RELOAD_CHECK"] = "0x00";
		tp_obj["TX_HOPPING_DEF"] = "0x01";
	}
	// Gamma..........................
	if( (tp_obj["DD_UPDATE_VCOM_FROM_FLASH_WHEN_PO"] == "0x01") |  (tp_obj["DD_UPDATE_AGMA_FROM_FLASH_WHEN_PO"] == "0x01") |  (tp_obj["DD_UPDATE_DGMA_FROM_FLASH_WHEN_PO"] == "0x01")
		|  (tp_obj["DD_DYNAMIC_UPDATE_VCOM_BY_HOST"] == "0x01") |  (tp_obj["DD_DYNAMIC_UPDATE_AGMA_BY_HOST"] == "0x01") |  (tp_obj["DD_DYNAMIC_UPDATE_DGMA_BY_HOST"] == "0x01")
	)
	{
		tp_obj["DD_GAMMA_UPDATE"] = "0x01";
	}
	//====================================================
	// type 3: string
	$('.build_tp_string').each(function() {
		var cfg = $.trim($(this).val());
		funcname = $(this).attr('name');
		if(cfg.indexOf("\"") >=0){
			fail_log += "Please remove \" from "+funcname+". Use underline instead<br />";
		}
		else if(cfg.indexOf("'") >=0){
			fail_log += "Please remove ' from "+funcname+". Use underline instead<br />";
		}
		/*else if(cfg.indexOf(".") >=0){
			fail_log += "Please remove . from "+funcname+". Use underline instead<br />";
		}
		else if(cfg.indexOf("-") >=0){
			fail_log += "Please remove - from "+funcname+". Use underline instead<br />";
		}*/
		else if(cfg.indexOf("`") >=0){
			fail_log += "Please remove ` from "+funcname+". Use underline instead<br />";
		}
		else if(cfg.indexOf("^") >=0){
			fail_log += "Please remove ^ from "+funcname+". Use underline instead<br />";
		}
		
		if(cfg.length > 12){
			fail_log += "The max string length is 12. Please modify "+funcname + " field<br />";
		}
		
		tp_obj[funcname] = "oemcfg_"+cfg;
	});
	//====================================================
	//is created config??
	$('.create_tp_config').each(function(){
		var tpname = $(this).attr('name');
		if(tp_obj.hasOwnProperty(tpname)){ // if key exsist
			var tpvalue = tp_obj[tpname];
			tp_obj[tpname] = "oemadded_"+tpvalue;
		}
	});
	$('.mod_tp_init').each(function(){
		var tpname = $(this).attr('name');
		if(tp_obj.hasOwnProperty(tpname)){ // if key exsist
			var tpinithex = (tp_obj[tpname]).toString(16).toUpperCase().padStart(2,"0");
			tp_obj[tpname] = "oemtpinit_0x"+tpinithex;
		}
	});
	//=====================================================
	//=====================================================
	// Get dd init code header
	var dd_init_code = '';
	dd_init_code +="#ifndef _PA5469A_DD_INITIAL_CODE_H \n";
	dd_init_code +="#define _PA5469A_DD_INITIAL_CODE_H\n";
	dd_init_code +="#include \"CONFIG_TOUCH.h\"\n\n\n\n";
	dd_init_code +="UINT8 Dd_initial[DD_INITIAL_LEN] =\n";
	dd_init_code +="{\n";
	dd_init_code += $('.tp_build_code_dd_init[name="header"] td').html();
	dd_init_code += $('.tp_build_code_dd_init[name="body"] td').html();
	dd_init_code += $('.tp_build_code_dd_init[name="footer"] td').html();
	dd_init_code +="\n};\n";

	dd_init_code +="UINT8 Dd_initial_before_pon[DD_INITIAL_WORKAROUND_LEN]    =\n";
	dd_init_code +="{\n";
	dd_init_code += $('.tp_build_code_dd_before_pon[name="header"] td').html();
	dd_init_code += $('.tp_build_code_dd_before_pon[name="body"] td').html();
	dd_init_code += $('.tp_build_code_dd_before_pon[name="footer"] td').html();
	dd_init_code +="\n};\n";
	
	dd_init_code +="UINT8 Dd_initial_after_pon[DD_INITIAL_WORKAROUND_LEN]    =\n";
	dd_init_code +="{\n";
	dd_init_code += $('.tp_build_code_dd_after_pon[name="header"] td').html();
	dd_init_code += $('.tp_build_code_dd_after_pon[name="body"] td').html();
	dd_init_code += $('.tp_build_code_dd_after_pon[name="footer"] td').html();
	dd_init_code +="\n};\n";
	
	dd_init_code +="UINT8 Dd_initial_pon_low[DD_INITIAL_WORKAROUND_LEN]    =\n";
	dd_init_code +="{\n";
	dd_init_code += $('.tp_build_code_dd_pon_low[name="header"] td').html();
	dd_init_code += $('.tp_build_code_dd_pon_low[name="body"] td').html();
	dd_init_code += $('.tp_build_code_dd_pon_low[name="footer"] td').html();
	dd_init_code +="\n};\n";
	
	dd_init_code +="UINT8 Dd_initial_after_dsample[DD_INITIAL_WORKAROUND_LEN]    =\n";
	dd_init_code +="{\n";
	dd_init_code += $('.tp_build_code_dd_after_dsample[name="header"] td').html();
	dd_init_code += $('.tp_build_code_dd_after_dsample[name="body"] td').html();
	dd_init_code += $('.tp_build_code_dd_after_dsample[name="footer"] td').html();
	dd_init_code +="\n};\n";
	
	dd_init_code +="#endif /* _PA5460A_DD_INITIAL_CODE_H */";
	
	tp_obj["dd_init_header"] = dd_init_code.replace(/<br\s?\/?>/gim, "").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
	//=====================================================
	//=====================================================
	if(tx_rx_mapping_table != ""){
		// get self test mapping and tx rx mapping.
		tp_obj["tp_init_txrx_mapping"] = tx_rx_mapping_table;
		tp_obj["tp_init_selftest_adc_mapping"] = $('#tsram_adc_result').val();
		tp_obj["tp_init_selftest_tsram_mapping"] = $('#tsram_adc_calculate_format').val();
	}
	
	//=====================================================
	//=====================================================
	var codesize = parseInt($('#tp_build_cal_isram_remaining').text(), 10);
	if(codesize <= 1024*3){
		fail_log+="The remaining size is less than 3KB.<br />";
	}
	//=====================================================
	tp_obj["fail_log"] = fail_log;
	//console.log(tp_obj["fail_log"]);
	return tp_obj;
}


function Checking_build_status(){
	//console.log("start timer");
	
	let oem_timer = window.setInterval(function(){
		console.log("counting ..."+timer_count);
		timer_count++;
		
		var cbaseurl = window.base_url+ "Automotive/Build_Config_Going";
						
		$.ajax({
			url : cbaseurl,
			type : "POST",
			dataType : "json",
			//data : {"result": JSON.stringify(json_obj) },
			success : function(data) {
				// do something
				var building_status = JSON.parse(data);
				//console.log(building_status.result);
				// 0: finish
				// -1: going
				// others: fail
				if(building_status.result == "0"){
					console.log("Success to build code");
					timer_count = 0;
					window.clearInterval(oem_timer);
					
					// Update buildcode
					$('#build_tp_checking').attr('buildcode', building_status.build_code);
					
					var download_path = window.base_url+ "Automotive/Build_FW_Download/"+building_status.build_code;
					$(document).Toasts('create', {
						class: 'bg-success',
						title: 'Success ',
						subtitle: 'Build Finish',
						body: '<a href="'+download_path+'" class="btn btn-light"><i class="fas fa-file-download"></i>&nbsp;Download '+building_status.build_code+'&nbsp;FW</a>'
					});
					$("body").removeClass('loading');
				}
				else if(building_status.result == "-1"){ // going
					console.log("building going...."+timer_count+"/"+timer_max_try);
				}
				else{
					console.log("fail");
					timer_count = 0;
					window.clearInterval(oem_timer);
					// do something
					//console.log("Failed to build code");
					$(document).Toasts('create', {
						class: 'bg-danger',
						title: 'Error',
						subtitle: 'Building Fail',
						body: 'Please export json and contact with TP SE owner'
					});
					$("body").removeClass('loading');
				}
				
				
			},
			error : function(data) {
				timer_count = 0;
				window.clearInterval(oem_timer);
				// do something
				//console.log("Failed to build code");
				$(document).Toasts('create', {
					class: 'bg-danger',
					title: 'Error',
					subtitle: 'Building Fail......',
					body: 'Please export json and contact with TP SE owner'
				});
				$("body").removeClass('loading');
			}
		});
		
		
		if(timer_count == timer_max_try){
			//console.log("stop");
			$(document).Toasts('create', {
				class: 'bg-danger',
				title: 'Error',
				subtitle: 'Build Code Timeout',
				body: 'Please export json and contact with TP SE owner'
			});
			
			timer_count = 0;
			window.clearInterval(oem_timer);
			$("body").removeClass('loading');
		}
	}, 20000); // ms  --> 20s
}

function Cal_Isram(){
	
	var isram_sum = 0;
	$('.build_tp_select').each(function(){
		var csize = $(this).attr("csize");
		var cvalue = 0;
		if(csize.indexOf(",")>=0){
			var item = csize.split(',');
			var item_index = $(this)[0].selectedIndex;
			cvalue = parseInt($.trim(item[item_index]), 10); 
			//console.log($(this).attr('name')+ " size is "+cvalue);
		}
		else{
			cvalue = parseInt(csize, 10);
		}
		isram_sum+=cvalue;
	});
	$('.tp_build_switch_button').each(function(){
		var csize;
		var ccontrol = $(this).attr("control");
		if(ccontrol=="On"){
			csize = parseInt($(this).attr("csize"), 10);
			//console.log($(this).attr('name')+ " size is "+csize);
			isram_sum+=csize;
		}
	});
	//console.log(isram_sum);
	$('#tp_build_cal_isram_size').text(isram_sum);
	$('#tp_build_cal_isram_remaining').text(0x10000-isram_sum);
}

function Init_tp_build_export_import(){
	//****************************************
	// Import json
	var importjson = document.querySelector("#tp_build_import");
	importjson.addEventListener('change', function(e) {
		var files = e.target.files; // files[0]
		var reader = new FileReader();
		reader.onloadstart = function(e) {
			$('body').addClass('loading');
		};

		// file reading finished successfully
		reader.onload = function(e) {
		   // contents of file in variable     
			var text = e.target.result;
			//console.log(text);
			//$('#upload_bin_file_name').text(files[0].name); // Update filename
			var c_import_obj = JSON.parse(text);
			
			$.each(c_import_obj, function(index, value) {
				//console.log(index+" is "+value);
				var selectname = '.build_tp[name="'+index+'"]';
				if($(selectname).hasClass("tp_build_switch_button")){
					var current_status = $(selectname).attr('control');
					if( ((value=="Off") && (current_status == "On"))
						|| ((value=="On") && (current_status == "Off"))  ){
						$(selectname).click();
					}
				}
				else if($(selectname).hasClass("build_tp_select")){
					$(selectname)[0].selectedIndex = value;
					// trigger a change
					$(selectname)[0].dispatchEvent(new Event('change'));
				}
				else if($(selectname).hasClass("build_tp_number")){
					$(selectname).val(value);
				}
				else if($(selectname).hasClass("build_tp_string")){
					$(selectname).val(value);
				}
				else if(index == "txrx_mapping"){
					$('#mapping_table').val(value);
				}
				else if(index == "dd_init_header"){
					$('#tp_build_dd_init_header').html(value);
				}
			});
			
		};

		reader.onerror = function(e) {
			alert('Error : Failed to read Binary');
		};

		reader.onloadend = function(e) {
			$('body').removeClass('loading');
		};

		// read as text
		reader.readAsText(files[0]);
	});
	
	//****************************************
	// Export json
	$('#tp_build_export').click(function(){
		var export_content_obj = {};
		var datee = new Date();
		var strDate = datee.getFullYear() + (datee.getMonth()+1).toString().padStart(2,"0") + datee.getDate().toString().padStart(2,"0")
						+'_'+datee.getHours()+ datee.getMinutes() + datee.getSeconds();
		//=======================================
		var c_val, c_name;
		$('.tp_build_switch_button').each(function(){
			c_name = $(this).attr('name');
			c_val = $(this).attr('control');
			export_content_obj[c_name] = c_val;
		});
		$('.build_tp_select').each(function(){
			c_name = $(this).attr('name');
			c_val = $(this)[0].selectedIndex;
			
			export_content_obj[c_name] = c_val;
		});
		$('.build_tp_number').each(function(){
			c_name = $(this).attr('name');
			
			var numbers = parseInt($(this).val(), 10); 
			if(isNaN(numbers)){
				c_val = 0;
			}
			else{
				c_val = numbers;
			}
			export_content_obj[c_name] = c_val;
		});
		$('.build_tp_string').each(function(){
			c_name = $(this).attr('name');
			c_val = $(this).val();
			
			export_content_obj[c_name] = c_val;
		});
		//self test mapping
		export_content_obj["txrx_mapping"] = $('#mapping_table').val();//$.trim($('#mapping_table').val());
		// dd init header
		export_content_obj["dd_init_header"] = $('#tp_build_dd_init_header').html();
		//console.log(export_content_obj["dd_init_header"]);
		//=======================================
		var blob = new Blob([JSON.stringify(export_content_obj)], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, strDate+".json");
	});
	//****************************************
	// Linking...
	$("#tp_a_build_import").on('click', function(e){
		e.preventDefault();
		$("#tp_build_import:hidden").trigger('click');
	});
	
}

$(document).ready(function(){
	var tpbuild = $('#build_tp_checking').attr('isbuild');
	if(tpbuild == 1){
		Tp_config_condition();
		
		Cal_Isram();
		Init_tp_build_export_import();
	}
	
	$('.tp_build_switch_button').click(function(){
		
		var swtich = $(this).attr('control');
		if(swtich == "On"){
			$(this).attr('control', 'Off');
			$(this).text('Off');
			$(this).removeClass('btn-info');
			$(this).addClass('btn-warning');
		}
		else{
			$(this).attr('control', 'On');
			$(this).text('On');
			
			$(this).addClass('btn-info');
			$(this).removeClass('btn-warning');
		}
		//	$(this).closest('tr').remove('tr');
		
		Cal_Isram();
	});
	
	
	$('#tp_build_code_start').click(function(){
		$("body").addClass('loading');
		//============================================================
		// Create json to bat....
		var json_obj = Tp_config_build_rule();
		//console.log(json_obj);
		
		if(json_obj["fail_log"] == ""){ // correct config
			// remove fail_log
			delete json_obj["fail_log"];
			delete json_obj["master"]; // not support yet
			
			var dd_file_content = JSON.stringify(json_obj["dd_init_header"]);
			delete json_obj["dd_init_header"];
			
			var tp_file_txrx_mapping = JSON.stringify(json_obj["tp_init_txrx_mapping"]);
			var tp_file_self_adc_mapping = JSON.stringify(json_obj["tp_init_selftest_adc_mapping"]);
			var tp_file_self_tsram_mapping = JSON.stringify(json_obj["tp_init_selftest_tsram_mapping"]);
			
			delete json_obj["tp_init_txrx_mapping"];
			delete json_obj["tp_init_selftest_adc_mapping"];
			delete json_obj["tp_init_selftest_tsram_mapping"];
			
			//console.log(json_obj);
			//============================================================
			var cbaseurl = window.base_url+ "Automotive/Build_Config_Start";
						
			$.ajax({
				url : cbaseurl,
				type : "POST",
				dataType : "json",
				data : {"result": JSON.stringify(json_obj) ,"dd_file": dd_file_content, "tp_init_txrx": tp_file_txrx_mapping, "tp_init_adc_mapping": tp_file_self_adc_mapping, "tp_init_tsram_mapping": tp_file_self_tsram_mapping },
				success : function(data) {
					var building_result = JSON.parse(data);
					if(building_result.build_status == "1"){
						// do something
						Checking_build_status();
					
						console.log("Start to Building.....");
					}
					else{
						
						$("body").removeClass('loading');
						$(document).Toasts('create', {
							class: 'bg-danger',
							title: 'Error',
							subtitle: 'Another process is building',
							body: 'Please wait for '+building_result.building_name+' finishes.'
						});
						console.log("Wait for another process "+building_result.building_name+" finishes");
					}

					//console.log(data);
					
				},
				error : function(data) {
					$("body").removeClass('loading');
					// do something
					console.log("Fail to start building....");
			
				}
			});
		} // end of correct config
		else{ // error config
			$("body").removeClass('loading');
			$(document).Toasts('create', {
				class: 'bg-danger',
				title: 'Error',
				subtitle: 'Config Error',
				body: json_obj["fail_log"]
			});
		}
		
	});
});