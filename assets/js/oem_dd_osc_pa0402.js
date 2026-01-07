var dd_initial_code_json = [];

var Osc_parameter_json = {
	"VSA": 0,	"VBP": 0,	"VFP": 0,	"VRes": 0,
	"TP_DSIP_LINECLK_CNT_M2": 0, "lineclk_cnt_ratio": 0,
	"REPT_GB1": 0,	"REPT_GB2": 0,	"REPT_GB3": 0,
	"DISP_GB1": 0,  "DISP_GB2": 0,  "DISP_GB3": 0, 
	"TP_VSYNC_PIPE_NUM": 0, "TP_INIT_LINE_CNT_RA_STR_M12": 0, "TP_INIT_LINE_CNT_M2": 0,
	"touch_display_dummy": 0, 
	"EMI_offset_coefficient": 0, "EMI_sw_range": 0,  "EMI_suppression_line_sel": 0, 
	"TP_PTS1_CLK_CNT_M23": 0, "TP_PTS3_CLK_CNT_M23": 0, "PTS1_CLK_CNT_STR_M23": 0,
	"TP_TOUCH_LINE_CNT_M2": 0, "TP_TOUCH_CLK_CNT_M2": 0,
	"Line_width_update_state":0, "Line_width_update_Freq":0, "Line_width_update_freq_range": 0,
	"Hardware_Emi_EN": 0,
	"IC_Type":0
};
//Beforepon_193_item20_toggle = '';
function Dd_init_to_json(lines, ignore_osc_parser){
	var buffer = "";//, content = "", content_workaround = "";
	var i = 0, d_start = 0, d_end = 0, dd_initial_tag = 0, dd_title_flag = 0;
	var command_pair = 0, pa_number = 0, pa = 0;
	var type_pair = 0;
	var bank = 0;
	var tmp_split, tmp_split_reg, tmp_split_val;
	var tmp_split_bank = 0, tmp_split_pa = 0, role;
	//Beforepon_193_item20_toggle = '';
	//===================================================
	var dd_obj = {};
	dd_initial_code_json = [];
	//===================================================
	role = "All"; //all
	dd_title_flag = "Dd initial code";
	for(i = 0;i < lines.length;i++){
		//code here using lines[i] which will give you each line
		buffer = $.trim(lines[i]); //console.log(buffer);
		if(buffer[0] == "/"){
			//console.log(buffer);
			continue;
		}
		else{
			if((d_start == 0) && (dd_initial_tag == 0)){
				if(buffer === "{"){
					d_start = (i);
					console.log("Start line: "+d_start);
					dd_initial_tag = 1;
					
					//content='[';
				}
			}
			if((d_end == 0) && (dd_initial_tag == 1)){
				if(buffer === "};"){
					d_end = (i);
					console.log("End line: "+d_end);
					dd_initial_tag = 2;
					
					//content+=']';
				}
			}
			//===========================================
			//if(buffer =="0x03, 0xB9,"){
			if(type_pair == 0 && buffer.indexOf("0xB9") == 6){	
				type_pair = 1;
			}
			else if(type_pair == 1){
				type_pair = 2;
				// Get password
				var password = buffer.split(',')[2];
				var password_2 = parseInt($.trim(password), 16); //console.log("stella "+password_2);
				if(password_2 == 0x4A)
					Osc_parameter_json["IC_Type"] = 194;
				else
					Osc_parameter_json["IC_Type"] = 195;
			}
			//===========================================
			if(buffer === "0x01, 0xBD,"){
				command_pair = 1;
			}
			else if(command_pair == 1){
				bank = parseInt($.trim(buffer), 16);
				command_pair = 2;
			}
			//===========================================
			else if((dd_initial_tag == 1) && (command_pair > 1)){ // parse dd init code
				var tmp ="";
				//console.log(buffer);
				//console.log(buffer.length);
				
				if((buffer.length  == 11) && (command_pair == 2)){
					tmp = buffer.split(',');
					pa_number = parseInt($.trim(tmp[0]), 16);
					pa = 0; 
					//console.log(tmp[1]+"_bank"+(bank));
					//console.log("parameter_number ="+pa_number);
					command_pair = 3;
					
					dd_obj = {};
					//content+='{"name": "'+$.trim(tmp[1])+"_bank"+(bank)+'", "pa_count": '+pa_number+', "value": [';
					dd_obj["name"] = $.trim(tmp[1])+"_bank"+(bank);
					//dd_obj["pa_count"] = pa_number;
					dd_obj["role"] = role; //all
					dd_obj["type"] = dd_title_flag;//"Dd init code";
					dd_obj["value"] = [];
				}
				else if(command_pair == 3){
					var hex_tmp = buffer.split(',');
					for(var ht = 0; ht < hex_tmp.length-1;ht++){
						//content+='"'+$.trim(hex_tmp[ht])+'",';
						dd_obj["value"][ht+(pa*10)] = $.trim(hex_tmp[ht]);
					}
					
					pa++;
					if(pa >(pa_number/10) )
					{
						command_pair = 2;
						//content+=']},'
						dd_initial_code_json.push(dd_obj);
					}
				}
			}
			else if(dd_initial_tag == 2){ // parser dd_workaround
				if(buffer.indexOf("Dd_initial_before_pon") > 0){
					role = "All";
					dd_title_flag = "Before pon workaround";
				}
				else if(buffer.indexOf("Dd_initial_after_pon") > 0){
					role = "All";
					dd_title_flag = "After pon workaround";
				}
				else if(buffer.indexOf("Dd_initial_pon_low") > 0){
					role ="All";
					dd_title_flag = "Pon low workaround";
				}
				else if(buffer.indexOf("Dd_initial_after_dsample") > 0){
					role ="All";
					dd_title_flag = "After D-sample workaround";
				}
				else if(buffer.indexOf("CASCADE_ID_MASTER") >=0){
					role = "Master";
				}
				else if(buffer.indexOf("CASCADE_ID_SLAVE1") >=0){
					role = "Slave1";
				}
				else if(buffer.indexOf("CASCADE_ID_SLAVE2") >=0){
					role = "Slave2";
				}
				else if(buffer.indexOf("DD_INITIAL_ALL_CASCADE_ID") >=0){
					role = "All";
				}
				//else if(buffer.indexOf("DD_WORKAROUND_TABLE_END,") >=0){ // finish
				//}
				else if(buffer.indexOf("DD_FMT_TRANS_TO_INI") >=0){
					tmp_split = buffer.split(',');
					tmp_split_reg = tmp_split[0].split("(")[1];
					tmp_split_val = tmp_split[3].split(")")[0];
					tmp_split_bank = parseInt(tmp_split[1], 16);
					tmp_split_pa = parseInt(tmp_split[2], 16);
					
					//content_workaround+='{"type": '+workaround_flag+', "role": '+role+', "name": "'+$.trim(tmp_split_reg)+"_bank"+(tmp_split_bank)+'", "pa": '+tmp_split_pa+', "value": "' + $.trim(tmp_split_val)+'"},';
					
					dd_obj = {};
					dd_obj["name"] = $.trim(tmp_split_reg)+"_bank"+(tmp_split_bank);
					dd_obj["role"] = role; 
					dd_obj["type"] = dd_title_flag;
					dd_obj["value"] = [];
					dd_obj["value"][(tmp_split_pa-1)] = $.trim(tmp_split_val);
					
					var cj = 0, cj_found = 0;
					for(cj = 0; cj <dd_initial_code_json.length; cj++){
						if((dd_initial_code_json[cj].name == dd_obj["name"])
							&& (dd_initial_code_json[cj].role == dd_obj["role"])
							&& (dd_initial_code_json[cj].type == dd_obj["type"])
						){
							cj_found = 1;
							dd_initial_code_json[cj]["value"][(tmp_split_pa-1)] = $.trim(tmp_split_val);
							
							break;
						}
					}
					
					if(cj_found == 0){ // create object
						dd_initial_code_json.push(dd_obj);
					}
					
					///////////////////////////////////////
					// workaround toggle
					/*if( dd_title_flag === "Before pon workaround"
					  && dd_obj["name"] == "0xC7_bank0"
					  && tmp_split_pa == 14
					){
						Beforepon_193_item20_toggle += ((dd_obj["value"][(tmp_split_pa-1)]>> 1) & 0x01)+",";
					}*/
					//////////////////////////////////////
				}

			}
		}
	}
	//console.log(Beforepon_193_item20_toggle);
	//console.log(dd_initial_code_json);

	Dd_reg_checker();
}
function Dd_osc_parser(){
	var temp_high = 0, temp_low = 0;
	var fail_item_name;
	// init fail det oe table.....
	var i = 0, j = 0;
	for(i = 0; i < 12; i++){
		for(j = 0; j < 8; j++){
			fail_item_name = '.bin_parser_fail_det[addr="b1_pa'+(i+1)+'_'+(j)+'"]';
			$(fail_item_name).text('N');
		}
	}
	//-----------------------------
	$.each(dd_initial_code_json, function(index, obj){
		
		// Fill out E5 bk1 setting in table......
		if((obj.name === "0xE5_bank1") && (obj.type === "Dd initial code")){
			for(i = 0; i < obj.value.length; i++){
				for(j = 0; j < 8; j++){
					fail_item_name = '.bin_parser_fail_det[addr="b1_pa'+(i+1)+'_'+(j)+'"]';
					var temp_e5 = parseInt(obj.value[i], 16);
					$(fail_item_name).text((temp_e5 >> j) & 0x01);
				}
			}
		}
		// Fill out HW osc tracking..............
		if((obj.name === "0xCB_bank0") && (obj.type === "Dd initial code")){
			if(obj.value[0] !== undefined){
				var temp_cb = parseInt(obj.value[0], 16);
				$('#hw_osc1_en').html((temp_cb >> 3)& 0x01);
			}
			else{
				$('#hw_osc1_en').html("0");
			}
		}
		if((obj.name === "0xCB_bank1") && (obj.type === "Dd initial code")){
			if(obj.value[0] !== undefined){
				var temp_cb = parseInt(obj.value[0], 16);
				$('#hw_osc2_en').html((temp_cb >> 3)& 0x01);
			}
			else{
				$('#hw_osc2_en').html("0");
			}
		}
		//---------------------------------------

		if((obj.name === "0xE7_bank0") && (obj.type === "Dd initial code")){
			temp_low = (parseInt(obj.value[12], 16) & 0xFF); // PA13
			$('#dd_osc_tp_disp_lineclk_cnt_m2').text(temp_low); 
			
			if(obj.value[30] !== undefined)
			{
				temp_low = (parseInt(obj.value[30], 16) & 0x03); // PA31
				var ratio = 0;
				if(temp_low == 0){
					ratio = 2;
				}
				else if(temp_low == 1){
					ratio = 4;
				}
				else if(temp_low == 2){
					ratio = 8;
				}
				else{
					ratio = 16;
				}
				$('#dd_osc_lineclk_cnt_ratio').text(ratio); 
			}
			else
			{
				$('#dd_osc_lineclk_cnt_ratio').text(8);  // default
			}

			temp_low = (parseInt(obj.value[8], 16) & 0xFF); // PA9
			$('#dd_osc_tp_vsync_pipe_num').text(temp_low+1); 

			temp_low = (parseInt(obj.value[9], 16) & 0xFF); // PA10
			$('#dd_osc_tp_init_line_cnt_ra_str_m12').text(temp_low+1); 

			temp_low = (parseInt(obj.value[11], 16) & 0xFF); // PA12
			$('#dd_osc_tp_init_line_cnt_m2').text(temp_low); 
			//----EMI--//
			temp_low = ((parseInt(obj.value[21], 16) >> 4) & 0x0F); // PA22
			$('#dd_osc_emi_offset_coeff').text(temp_low); 

			temp_low = ((parseInt(obj.value[21], 16) >> 1) & 0x07); 
			temp_low = 7-temp_low;
			$('#dd_osc_emi_sw_range_10tpen').text(temp_low);
			temp_low = (1+temp_low-1)*(temp_low-1)+temp_low;
			$('#dd_osc_emi_sw_range').text(temp_low); 

			temp_low = ((parseInt(obj.value[22], 16) >> 4)& 0x03);
			var line_sel = Math.pow(2, temp_low);
			$('#dd_osc_emi_suppr_line_sel').text(line_sel); 

			temp_low = (parseInt(obj.value[22], 16) & 0x0F); 
			$('#dd_osc_emi_suppression_freq').text(temp_low*line_sel+1); 

			temp_low = (parseInt(obj.value[15], 16) & 0xFF); 
			$('#dd_osc_tp_pts1_clk_cnt_m23').text(temp_low); 

			temp_low = (parseInt(obj.value[16], 16) & 0xFF); 
			$('#dd_osc_tp_pts3_clk_cnt_m23').text(temp_low); 

			//
			if(obj.value[33] != undefined){
				temp_low = (parseInt(obj.value[33], 16) & 0xFF); 
				$('#dd_osc_pts1_clk_cnt_str_m23').text(temp_low); 
			}
			else{
				$('#dd_osc_pts1_clk_cnt_str_m23').text(255); 
			}

			temp_low = (parseInt(obj.value[13], 16) & 0xFF); 
			$('#dd_osc_tp_touch_line_cnt_m2').text(temp_low); 

			temp_low = (parseInt(obj.value[14], 16) & 0xFF); 
			$('#dd_osc_tp_touch_clk_cnt_m2').text(temp_low); 
		}
		else if((obj.name === "0xE7_bank1") && (obj.type === "Dd initial code")){
			temp_high = ((parseInt(obj.value[1], 16) >> 4) &0x01); 
			temp_low = (parseInt(obj.value[2], 16) & 0xFF); 
			temp_high = temp_high*256 + temp_low;
			$('#dd_osc_dsip_gb1').text(temp_high); 

			temp_high = ((parseInt(obj.value[1], 16) >> 5) &0x01); // PA2
			temp_low = (parseInt(obj.value[4], 16) & 0xFF); // PA5
			temp_high = temp_high*256 + temp_low;
			$('#dd_osc_dsip_gb2').text(temp_high);
			
			temp_high = ((parseInt(obj.value[1], 16) >> 6) &0x01); 
			temp_low = (parseInt(obj.value[6], 16) & 0xFF); 
			temp_high = temp_high*256 + temp_low;
			$('#dd_osc_dsip_gb3').text(temp_high); 
			
			temp_low = (parseInt(obj.value[3], 16) & 0x1F);
			$('#dd_osc_rept_gb1').text(temp_low); 
			temp_low = (parseInt(obj.value[5], 16) & 0x1F);
			$('#dd_osc_rept_gb2').text(temp_low); 
			temp_low = (parseInt(obj.value[7], 16) & 0x1F);
			$('#dd_osc_rept_gb3').text(temp_low); 
			
			
			
		}
		else if((obj.name === "0xE7_bank2") && (obj.type === "Dd initial code")){
			temp_high = ((parseInt(obj.value[9], 16)  >> 4) & 0x0F); // PA10
			temp_low = (parseInt(obj.value[9], 16) & 0x0F); // PA10
			$('#dd_osc_touch_display_dummy').text(temp_low+temp_high); 
			
		}
	});

	// Get Frame Rate from tp init code.....
	temp_low = parseInt($('.5478_sram_alg_val[name="osc_tracking_vsync_target"]').text(), 10);
	$('#dd_osc_fr').text(temp_low/10);
	// Get OSR
	temp_low = $('#F0_ac_osr').text();
	$('#dd_osc_tp_osr').text(temp_low);
	// Get RX Freq
	temp_low = $('#F0_ac_sensing_freq').text();
	$('#dd_osc_scclk2').text(temp_low);
	// Fillout DIV5
	temp_low = parseInt($('.oem_check_interface[name="cb_bk3_pa16"]').text(), 16);
	var div5_pll_parser = (temp_low & 0x07) + 2; 
	$('#dd_osc_div5').text(div5_pll_parser);

	// Fill VRES 
	temp_high = parseInt($('.5478_sram_alg[name="tx_pix_h"]').text(), 16);
	temp_low = parseInt($('.5478_sram_alg[name="tx_pix_l"]').text(), 16);
	temp_high = temp_high * 256 + temp_low;
	$('#dd_osc_vres').text(temp_high);

	// Call Calculate Result.....
	Dd_osc_target();
}
function Dd_osc_target(){
	// Calculate results
	// Get information.......
	var vsa = parseInt($('#dd_osc_vsa').text(), 10);
	var vbp = parseInt($('#dd_osc_vbp').text(), 10);
	var vfp = parseInt($('#dd_osc_vfp').text(), 10);
	var vres = parseInt($('#dd_osc_vres').text(), 10);
	var fr = parseInt($('#dd_osc_fr').text(), 10);
	var pll = parseFloat($('#dd_osc_pll').text());
	var tp_disp_lineclk_cnt_m2 = parseInt($('#dd_osc_tp_disp_lineclk_cnt_m2').text(), 10);
	var lineclk_cnt_ratio = parseInt($('#dd_osc_lineclk_cnt_ratio').text(), 10);
	var disp_gb1 = parseInt($('#dd_osc_dsip_gb1').text(), 10);
	var disp_gb2 = parseInt($('#dd_osc_dsip_gb2').text(), 10);
	var touch_display_dummy = parseInt($('#dd_osc_touch_display_dummy').text(), 10);
	var sc_clk2 = parseFloat($('#dd_osc_scclk2').text());
	var div5 = parseInt($('#dd_osc_div5').text(), 10);
	var osr = parseInt($('#dd_osc_tp_osr').text(), 10);
	var error_max = 1;//parseFloat($('#dd_osc_error').text());
	var error_min = 3;//parseFloat($('#dd_osc_error').text());
	//-----------------------------------------------------
	var tp_vsync_pipe_num = parseInt($('#dd_osc_tp_vsync_pipe_num').text(), 10);
	var tp_init_line_cnt_ra_str_m12 = parseInt($('#dd_osc_tp_init_line_cnt_ra_str_m12').text(), 10);
	var tp_init_line_cnt_m2 = parseInt($('#dd_osc_tp_init_line_cnt_m2').text(), 10);
	//-----------------------------------------------------
	var emi_offset_coeff = parseInt($('#dd_osc_emi_offset_coeff').text(), 10);
	var emi_sw_range = parseInt($('#dd_osc_emi_sw_range').text(), 10);
	var emi_suppr_line_sel = parseInt($('#dd_osc_emi_suppr_line_sel').text(), 10);
	var emi_suppression_freq = parseInt($('#dd_osc_emi_suppression_freq').text(), 10);

	var tp_pts1_clk_cnt_m23 = parseInt($('#dd_osc_tp_pts1_clk_cnt_m23').text(), 10);
	var tp_pts3_clk_cnt_m23 = parseInt($('#dd_osc_tp_pts3_clk_cnt_m23').text(), 10);
	var pts1_clk_cnt_str_m23 = parseInt($('#dd_osc_pts1_clk_cnt_str_m23').text(), 10);

	var emi_sw_range_10tpen = parseInt($('#dd_osc_emi_sw_range_10tpen').text(), 10);
	var tp_touch_line_cnt_m2 = parseInt($('#dd_osc_tp_touch_line_cnt_m2').text(), 10);
	var tp_touch_clk_cnt_m2 =  parseInt($('#dd_osc_tp_touch_clk_cnt_m2').text(), 10);
	
	//-----------------------------------------------------
	var pll_typ = pll;
	var pll_max = (pll * ((100+error_max)/100)).toFixed(2);
	var pll_min = (pll * ((100-error_min)/100)).toFixed(2);
	$('#r_pll_max').text(pll_max);
	$('#r_pll_min').text(pll_min);
	$('#r_pll_typ').text(pll_typ);

	var external_line = (1000000 / (fr * (vres+vsa+vbp+vfp))).toFixed(4);
	$('#r_external_typ').text(external_line);
	$('#r_external_max').text(external_line);
	$('#r_external_min').text(external_line);

	// internal line formula to be checked???????
	var internal_line_typ = ((tp_disp_lineclk_cnt_m2*lineclk_cnt_ratio+1)/pll_typ).toFixed(4);
	var internal_line_min = ((tp_disp_lineclk_cnt_m2*lineclk_cnt_ratio+1)/pll_min).toFixed(4);
	var internal_line_max = ((tp_disp_lineclk_cnt_m2*lineclk_cnt_ratio+1)/pll_max).toFixed(4);
	$('#r_internal_typ').text(internal_line_typ);
	$('#r_internal_max').text(internal_line_max);
	$('#r_internal_min').text(internal_line_min);

	//========================
	// emi offset....
	var emi_offset_typ = (emi_offset_coeff*emi_sw_range*emi_suppression_freq/pll_typ).toFixed(2);
	var emi_offset_max = (emi_offset_coeff*emi_sw_range*emi_suppression_freq/pll_max).toFixed(2);;
	var emi_offset_min = (emi_offset_coeff*emi_sw_range*emi_suppression_freq/pll_min).toFixed(2);;
	// pts1,3....
	var pts1_3_typ = (((tp_pts1_clk_cnt_m23+tp_pts3_clk_cnt_m23)*2+pts1_clk_cnt_str_m23)*(1000/pll_typ)/1000).toFixed(2);
	var pts1_3_max = (((tp_pts1_clk_cnt_m23+tp_pts3_clk_cnt_m23)*2+pts1_clk_cnt_str_m23)*(1000/pll_max)/1000).toFixed(2);;
	var pts1_3_min = (((tp_pts1_clk_cnt_m23+tp_pts3_clk_cnt_m23)*2+pts1_clk_cnt_str_m23)*(1000/pll_min)/1000).toFixed(2);;
	//console.log("typ: emi_offset = "+emi_offset_typ+" ;pts1_3 is "+pts1_3_typ);
	//console.log("max: emi_offset = "+emi_offset_max+" ;pts1_3 is "+pts1_3_max);
	//console.log("min: emi_offset = "+emi_offset_min+" ;pts1_3 is "+pts1_3_min);

	var tpen2_typ = ((disp_gb2*external_line - (disp_gb2+touch_display_dummy)*internal_line_typ) - emi_offset_typ - pts1_3_typ).toFixed(2);
	var tpen2_max = ((disp_gb2*external_line - (disp_gb2+touch_display_dummy)*internal_line_max) - emi_offset_max - pts1_3_max).toFixed(2);
	var tpen2_min = ((disp_gb2*external_line - (disp_gb2+touch_display_dummy)*internal_line_min) - emi_offset_min - pts1_3_min).toFixed(2);
	$('#r_2ndtpen_typ').text(tpen2_typ);
	$('#r_2ndtpen_max').text(tpen2_max);
	$('#r_2ndtpen_min').text(tpen2_min);

	var tpen1_typ = (disp_gb1+tp_init_line_cnt_m2+1)*external_line-(2+disp_gb1+tp_init_line_cnt_ra_str_m12+tp_vsync_pipe_num)*internal_line_typ - pts1_3_typ;
	var tpen1_max = (disp_gb1+tp_init_line_cnt_m2+1)*external_line-(2+disp_gb1+tp_init_line_cnt_ra_str_m12+tp_vsync_pipe_num)*internal_line_max - pts1_3_max;
	var tpen1_min = (disp_gb1+tp_init_line_cnt_m2+1)*external_line-(2+disp_gb1+tp_init_line_cnt_ra_str_m12+tp_vsync_pipe_num)*internal_line_min - pts1_3_min;
	$('#r_1sttpen_typ').text(tpen1_typ.toFixed(2));
	$('#r_1sttpen_max').text(tpen1_max.toFixed(2));
	$('#r_1sttpen_min').text(tpen1_min.toFixed(2));
	

	var sc_clk1_typ = (pll/div5).toFixed(2);
	var sc_clk1_max = (pll_max/div5).toFixed(2);
	var sc_clk1_min = (pll_min/div5).toFixed(2);
	$('#r_scclk1_typ').text(sc_clk1_typ);
	$('#r_scclk1_max').text(sc_clk1_max);
	$('#r_scclk1_min').text(sc_clk1_min);

	var typical_sc_clk2_period = 1000 * sc_clk1_typ / sc_clk2; // ac script counter
	var sensing_time_typ = (typical_sc_clk2_period * osr / sc_clk1_typ).toFixed(2);
	var sensing_time_max = (typical_sc_clk2_period * osr / sc_clk1_max).toFixed(2);
	var sensing_time_min = (typical_sc_clk2_period * osr / sc_clk1_min).toFixed(2);
	$('#r_sensing_time_typ').text(sensing_time_typ);
	$('#r_sensing_time_max').text(sensing_time_max);
	$('#r_sensing_time_min').text(sensing_time_min);

	//---------------------
	// Result Check
	if(sensing_time_typ+10 >= tpen2_typ){
		$('#r_status_typ').text("NG");
		$('#r_status_typ').css('color', 'red');
	}
	else{
		$('#r_status_typ').text("OK");
		$('#r_status_typ').css('color', 'green');
	}
		
	if(sensing_time_max+10 >= tpen2_max){
		$('#r_status_max').text("NG");
		$('#r_status_max').css('color', 'red');
	}
	else{
		$('#r_status_max').text("OK");
		$('#r_status_max').css('color', 'green');
	}
	if(sensing_time_min+10 >= tpen2_min){
		$('#r_status_min').text("NG");
		$('#r_status_min').css('color', 'red');
	}
	else{
		$('#r_status_min').text("OK");
		$('#r_status_min').css('color', 'green');
	}

	//---------------------10tpen--------------------------------------------------------------------------------------
	var internal_line_10tpen_typ = (tp_touch_clk_cnt_m2*lineclk_cnt_ratio+emi_sw_range_10tpen*emi_offset_coeff)/pll_typ;
	var internal_line_10tpen_max = (tp_touch_clk_cnt_m2*lineclk_cnt_ratio+emi_sw_range_10tpen*emi_offset_coeff)/pll_max;
	var internal_line_10tpen_min = (tp_touch_clk_cnt_m2*lineclk_cnt_ratio+emi_sw_range_10tpen*emi_offset_coeff)/pll_min;
	//console.log("internal_line_10tpen_typ" + internal_line_10tpen_typ);
	//console.log("internal_line_10tpen_max" + internal_line_10tpen_max);
	//console.log("internal_line_10tpen_min" + internal_line_10tpen_min);

	var tpen10_typ = internal_line_10tpen_typ*(tp_touch_line_cnt_m2+1)-pts1_3_typ;
	var tpen10_max = internal_line_10tpen_max*(tp_touch_line_cnt_m2+1)-pts1_3_max;
	var tpen10_min = internal_line_10tpen_min*(tp_touch_line_cnt_m2+1)-pts1_3_min;

	$('#r_10tpen_typ').text(tpen10_typ.toFixed(2));
	$('#r_10tpen_max').text(tpen10_max.toFixed(2));
	$('#r_10tpen_min').text(tpen10_min.toFixed(2));
	//-----------------------------------
	
}

function Dd_reg_checker(){
	var i = 0;
	var ic_cut="",ic_cut_version;
	var tmp = 0, tmp_1 = 0;
	var info_string;
	//======================================================================
	var MACRO_UNCHECK = 0x00;
	var MACRO_OK = 0x01;
	var MACRO_NG = 0x02;
	var MACRO_UNFOUND = 0x04;
	var MACRO_NOINFO = 0x08;
	//======================================================================
	// Get ic number....
	/*var tp_source_select = parseInt($('.5478_sram_waveform_f0[name="tcon_tp_source_select"]').text(), 16); // single: 0x07, multi: 0x04
	var ic_num = 0;

	if(tp_source_select == 7){
		ic_num = 1;
	}
	else if(tp_source_select == 4){
		ic_num = 2;
	}
	else{
		ic_num = 0;
	}*/
	//console.log(ic_num);
	//======================================================================
	// Get IC cut version
	ic_cut_version = $('.5478_flash_header[name="cfg_sign"]').text();
	if(ic_cut_version.length > 2)
		ic_cut = $.trim(ic_cut_version.split('-')[1]);
	//console.log(ic_cut);
	//======================================================================
	// Get panel sel 
	var Panel_Sel_V = 0;
	var ps_v = parseInt($('.5478_flash_header[name="cfg_fw"]').text(), 10);
	ps_v = Math.floor(ps_v/100);
	
	if(ps_v%2){
		Panel_Sel_V = 1;
	}
	console.log("panel sel is "+Panel_Sel_V);
	//======================================================================
	// dd osc parser
	Dd_osc_parser();
	//======================================================================
	//======================================================================
	var error_status = new Array(50); // default test 100 items. Seperate 192 and 193 only.
	for(i = 0; i < error_status.length; i++){
		error_status[i] = MACRO_UNCHECK;
	}
	//======================================================================
	var error_log = new Array(50);
	error_log[0] = "";//"<tr><td></td><td>No 0xD8_bank0 PA1~60 setting occurred</td></tr>";
	error_log[1] = "";//"<tr><td></td><td>No 0xD8_bank1 PA1~60 setting occurred</td></tr>";
	error_log[2] = "";//"<tr><td></td><td>No 0xD8_bank2 PA1~16 setting occurred</td></tr>";
	error_log[3] = "";//"<tr><td></td><td>No 0xD8_bank3 PA1~32 setting occurred</td></tr>";
	error_log[4] = "";//"<tr><td></td><td>No 0xD5_bank0 PA1~60 setting occurred</td></tr>";
	error_log[5] = "";//"<tr><td></td><td>No 0xD6_bank0 PA1~60 setting occurred</td></tr>";
	error_log[6] = "";//"<tr><td></td><td>No 0xD6_bank1 PA1~8 setting occurred</td></tr>";
	error_log[7] = "";//"<tr><td></td><td>No 0xB2_bank0 PA41 setting occurred</td></tr>";
	error_log[8] = "<tr><td></td><td>No 0xB2_bank1 PA1 setting occurred</td></tr>";
	error_log[9] = "<tr><td></td><td>No 0xCF_bank0 PA2 setting occurred</td></tr>";
	error_log[10] = "<tr><td></td><td>No C6h_bank0_PA1[3] ECO0[3] occurred</td></tr>";
	error_log[11] = "<tr><td></td><td>No 0xCB_bank0 PA1~5 setting occurred</td></tr>";
	error_log[12] = "<tr><td></td><td>No 0xCB_bank1 PA1~4 setting occurred</td></tr>";
	error_log[13] = "<tr><td></td><td>No 0xCB_bank0 PA10 setting occurred</td></tr>";
	error_log[14] = "<tr><td></td><td>No 0xCB_bank1 PA9 setting occurred</td></tr>";
	error_log[15] = "<tr><td></td><td>No 0xDA_bank0 PA12 setting occurred</td></tr>"; // LVDS only
	error_log[16] = "<tr><td></td><td>No 0xC7_bank0 PA4 setting occurred</td></tr>";
	error_log[17] = "<tr><td></td><td>No 0xBC_bank0 PA1 setting occurred</td></tr>";
	error_log[18] = "<tr><td></td><td>No 0xB1_bank0 PA6 setting occurred</td></tr>";
	error_log[19] = "<tr><td></td><td>No 0xC0_bank1 PA8/9 setting occurred</td></tr>";
	error_log[20] = "<tr><td></td><td>No 0xD0_bank0 PA5 setting occurred</td></tr>";
	error_log[21] = "<tr><td></td><td>No 0xE7_bank0 PA22 setting occurred</td></tr>";
	error_log[22] = "";//"<tr><td></td><td>No C7h_bank0_PA5[3] (TCON_OPT[59]=1) occurred</td></tr>";
	error_log[23] = "";//"<tr><td></td><td>No 0xC7_bank0 PA1[3] (MS_OPT[19]) setting occurred</td></tr>";
	error_log[24] = "";//"<tr><td></td><td>No 0xDA_bank1 PA3[1:0] (RTTM[1:0]) setting occurred</td></tr>";// 195-A only
	error_log[25] = "<tr><td>Before PON</td><td>No 0xB7_bank0 PA13[2] (ISP_RST) setting occurred</td></tr>";// 195-A only
	error_log[26] = "<tr><td>Before PON</td><td>No 0xCA_bank1 PA47[5] (KVCO[5]) setting occurred</td></tr>";// 195-A only
	error_log[27] = "";//"<tr><td></td><td>No 0xD3_bank0 PA1 (follow_opt=0;PULL_VGL=0) occurred</td></tr>";
	error_log[28] = "<tr><td></td><td>No C6h_bank0_PA2[6:5] occurred</td></tr>";
	error_log[29] = "<tr><td></td><td>No B3h_bank0_PA1[6] (ISP_RST_HW) occurred</td></tr>";
	//console.log(dd_initial_code_json);
	//======================================================================
	$.each(dd_initial_code_json, function(index, obj){ // no role and type
		// get information string
		if(obj.type === "Dd initial code"){
			info_string = obj.type;
		}
		else{
			info_string = "<span style=\"background-color: #125B50; color: #F8B400;\">"+obj.type+"</span>&nbsp;";
			info_string += "on <span style=\"color:  #900C3F ;\">"+obj.role+" IC</span>:&nbsp;";
		}
	
		// Read VSN information..........
		if(obj.name == "0xEB_bank1"){
			if(obj.value[2] !== undefined){ // pa1~3
				var temp_line_value = (obj.value[0] << 16) | (obj.value[1] << 8) | obj.value[2];
				$('.5478_sram_alg[name="osc_tracking_line"]').text(temp_line_value);
			}
			if(obj.value[6] !== undefined){ // pa7
				$('.5478_sram_alg[name="osc_tracking_n_frame"]').text(obj.value[6]);
			}
			if(obj.value[7] !== undefined){ // pa8
				$('.5478_sram_alg[name="osc_tracking_limit"]').text(obj.value[7]);
			}
			
			// VSN.................................
			if(obj.value[8] !== undefined){ // pa9
				$("#dd_reg_vsn_parse").text(obj.value[8]/10);
			}
			
		}
	
		// item 1 ==============================================
		if(obj.name == "0xD8_bank0"){ // PA1~60
			// current_test_item = 0*******************************************
			var d8_bk0_fail = 0;
			var d8_bk0_string = "";
			if(obj.value[13] !== undefined){ 
				for(i = 0; i < 7; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x01;
						d8_bk0_string += "0xD8_bank0 PA1~7 mismatch with PA8~14<br/>";
						break;
					}
					
				}
			}
			if(obj.value[14] !== undefined){ // pa15
				var tmp_vl = obj.value[14] & 0x0F;
				var tmp_vh = (obj.value[14] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x02;
					d8_bk0_string += "0xD8_bank0 PA15[7:4] mismatch with PA15[3:0]<br/>";
				}
			}
			if(obj.value[28] !== undefined){ 
				for(i = 15; i < 22; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x04;
						d8_bk0_string += "0xD8_bank0 PA16~22 mismatch with PA23~29<br/>";
						break;
					}
					
				}
			}
			if(obj.value[29] !== undefined){ // pa30
				var tmp_vl = obj.value[29] & 0x0F;
				var tmp_vh = (obj.value[29] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x08;
					d8_bk0_string += "0xD8_bank0 PA30[7:4] mismatch with PA30[3:0]<br/>";
				}
			}
			if(obj.value[43] !== undefined){ 
				for(i = 30; i < 37; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x04;
						d8_bk0_string += "0xD8_bank0 PA31~37 mismatch with PA38~44<br/>";
						break;
					}
					
				}
			}
			if(obj.value[44] !== undefined){ // pa45
				var tmp_vl = obj.value[44] & 0x0F;
				var tmp_vh = (obj.value[44] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x08;
					d8_bk0_string += "0xD8_bank0 PA45[7:4] mismatch with PA45[3:0]<br/>";
				}
			}
			if(obj.value[51] !== undefined){ 
				for(i = 45; i < 52; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x04;
						d8_bk0_string += "0xD8_bank0 PA46~52 mismatch with PA53~59<br/>";
						break;
					}
					
				}
			}
			if(obj.value[59] !== undefined){ // pa60
				var tmp_vl = obj.value[59] & 0x0F;
				var tmp_vh = (obj.value[59] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x08;
					d8_bk0_string += "0xD8_bank0 PA60[7:4] mismatch with PA60[3:0]<br/>";
				}
			}
			
			if(d8_bk0_fail){
				if(error_status[0] == MACRO_UNCHECK){
					error_log[0] = "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				else{
					error_log[0] += "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				error_status[0] = MACRO_NG;
				
			}
			/*else{
				if(error_status[0] == MACRO_UNCHECK){
					//error_log[0] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[0] = MACRO_UNFOUND;
				}
			}*/
			
		}
		
		if(obj.name == "0xD8_bank1"){ // PA1~60
			var d8_bk0_fail = 0;
			var d8_bk0_string = "";
			if(obj.value[13] !== undefined){ 
				for(i = 0; i < 7; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x01;
						d8_bk0_string += "0xD8_bank1 PA1~7 mismatch with PA8~14<br/>";
						break;
					}
					
				}
			}
			if(obj.value[14] !== undefined){ // pa15
				var tmp_vl = obj.value[14] & 0x0F;
				var tmp_vh = (obj.value[14] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x02;
					d8_bk0_string += "0xD8_bank1 PA15[7:4] mismatch with PA15[3:0]<br/>";
				}
			}
			if(obj.value[28] !== undefined){ 
				for(i = 15; i < 22; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x04;
						d8_bk0_string += "0xD8_bank1 PA16~22 mismatch with PA23~29<br/>";
						break;
					}
					
				}
			}
			if(obj.value[29] !== undefined){ // pa30
				var tmp_vl = obj.value[29] & 0x0F;
				var tmp_vh = (obj.value[29] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x08;
					d8_bk0_string += "0xD8_bank1 PA30[7:4] mismatch with PA30[3:0]<br/>";
				}
			}
			if(obj.value[43] !== undefined){ 
				for(i = 30; i < 37; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x04;
						d8_bk0_string += "0xD8_bank1 PA31~37 mismatch with PA38~44<br/>";
						break;
					}
					
				}
			}
			if(obj.value[44] !== undefined){ // pa45
				var tmp_vl = obj.value[44] & 0x0F;
				var tmp_vh = (obj.value[44] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x08;
					d8_bk0_string += "0xD8_bank1 PA45[7:4] mismatch with PA45[3:0]<br/>";
				}
			}
			if(obj.value[51] !== undefined){ 
				for(i = 45; i < 52; i++){
					if(obj.value[i] != obj.value[i+7]){
						d8_bk0_fail|=0x04;
						d8_bk0_string += "0xD8_bank1 PA46~52 mismatch with PA53~59<br/>";
						break;
					}
					
				}
			}
			if(obj.value[59] !== undefined){ // pa60
				var tmp_vl = obj.value[59] & 0x0F;
				var tmp_vh = (obj.value[59] >> 4)& 0x0F;
				if(tmp_vl!=tmp_vh){
					d8_bk0_fail|=0x08;
					d8_bk0_string += "0xD8_bank1 PA60[7:4] mismatch with PA60[3:0]<br/>";
				}
			}
			
			if(d8_bk0_fail){
				if(error_status[1] == MACRO_UNCHECK){
					error_log[1] = "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				else{
					error_log[1] += "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				error_status[1] = MACRO_NG;
				
			}
			/*else{
				if(error_status[1] == MACRO_UNCHECK){
					//error_log[1] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[1] = MACRO_UNFOUND;
				}
			}*/
		}
		if(obj.name == "0xD8_bank2"){ // PA1~16
			var d8_bk0_fail = 0;
			var d8_bk0_string = "";
			if(obj.value[15] !== undefined){ 
				for(i = 0; i < 8; i++){
					if(obj.value[i] != obj.value[i+8]){
						d8_bk0_fail|=0x01;
						d8_bk0_string += "0xD8_bank2 PA1~8 mismatch with PA9~16<br/>";
						break;
					}			
				}
			}
		
			if(d8_bk0_fail){
				if(error_status[2] == MACRO_UNCHECK){
					error_log[2] = "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				else{
					error_log[2] += "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				error_status[2] = MACRO_NG;
				
			}
			/*else{
				if(error_status[2] == MACRO_UNCHECK){
					//error_log[2] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[2] = MACRO_UNFOUND;
				}
			}*/
		}		
		if(obj.name == "0xD8_bank3"){ // PA1~16, PA17~32
			var d8_bk0_fail = 0;
			var d8_bk0_string = "";
			if(obj.value[15] !== undefined){ 
				for(i = 0; i < 8; i++){
					if(obj.value[i] != obj.value[i+8]){
						d8_bk0_fail|=0x01;
						d8_bk0_string += "0xD8_bank3 PA1~8 mismatch with PA9~16<br/>";
						break;
					}			
				}
			}
			if(obj.value[31] !== undefined){ 
				for(i = 16; i < 24; i++){
					if(obj.value[i] != obj.value[i+8]){
						d8_bk0_fail|=0x01;
						d8_bk0_string += "0xD8_bank3 PA17~24 mismatch with PA25~32<br/>";
						break;
					}			
				}
			}			
		
			if(d8_bk0_fail){
				if(error_status[3] == MACRO_UNCHECK){
					error_log[3] = "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				else{
					error_log[3] += "<tr><td>"+(info_string)+"</td><td>"+d8_bk0_string+"</td></tr>\n";
				}
				error_status[3] = MACRO_NG;
				
			}
			/*else{
				if(error_status[3] == MACRO_UNCHECK){
					//error_log[3] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[3] = MACRO_UNFOUND;
				}
			}*/
		}				
		if(obj.name == "0xD5_bank0"){ // PA1~60
			var d5_bk0_fail = 0;
			var d5_bk0_string = "";
			if(obj.value.length % 2){ 
				d5_bk0_fail |= 0x01;
				d5_bk0_string = "0xD5_bank0 PA is not even<br/>";
			}
			else{
				for(i = 0; i < obj.value.length; i+=2){
					if(obj.value[i] != obj.value[i+1]){
						d5_bk0_fail |= 0x02;
						d5_bk0_string = "0xD5_bank0 PA"+(i+1)+" is not equal to PA"+(i+2)+"<br/>";
						break;
					}
				}
			}
				
			if(d5_bk0_fail){
				if(error_status[4] == MACRO_UNCHECK){
					error_log[4] = "<tr><td>"+(info_string)+"</td><td>"+d5_bk0_string+"</td></tr>\n";
				}
				else{
					error_log[4] += "<tr><td>"+(info_string)+"</td><td>"+d5_bk0_string+"</td></tr>\n";
				}
				error_status[4] = MACRO_NG;
				
			}
			/*else{
				if(error_status[4] == MACRO_UNCHECK){
					//error_log[4] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[4] = MACRO_UNFOUND;
				}
			}*/
		}		
		if(obj.name == "0xD6_bank0"){ // PA1~60
			var d5_bk0_fail = 0;
			var d5_bk0_string = "";
			if(obj.value.length % 2){ 
				d5_bk0_fail |= 0x01;
				d5_bk0_string = "0xD6_bank0 PA is not even<br/>";
			}
			else{
				for(i = 0; i < obj.value.length; i+=2){
					if(obj.value[i] != obj.value[i+1]){
						d5_bk0_fail |= 0x02;
						d5_bk0_string = "0xD6_bank0 PA"+(i+1)+" is not equal to PA"+(i+2)+"<br/>";
						break;
					}
				}
			}
				
			if(d5_bk0_fail){
				if(error_status[5] == MACRO_UNCHECK){
					error_log[5] = "<tr><td>"+(info_string)+"</td><td>"+d5_bk0_string+"</td></tr>\n";
				}
				else{
					error_log[5] += "<tr><td>"+(info_string)+"</td><td>"+d5_bk0_string+"</td></tr>\n";
				}
				error_status[5] = MACRO_NG;
				
			}
			/*else{
				if(error_status[5] == MACRO_UNCHECK){
					//error_log[5] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[5] = MACRO_UNFOUND;
				}
			}*/
		}		
		if(obj.name == "0xD6_bank1"){ // PA1~8
			var d5_bk0_fail = 0;
			var d5_bk0_string = "";
			if(obj.value.length % 2){ 
				d5_bk0_fail |= 0x01;
				d5_bk0_string = "0xD6_bank1 PA is not even<br/>";
			}
			else{
				for(i = 0; i < (obj.value.length/2); i++){
					if(obj.value[i] != obj.value[i+4]){
						d5_bk0_fail |= 0x02;
						d5_bk0_string = "0xD6_bank1 PA"+(i+1)+" is not equal to PA"+(i+4)+"<br/>";
						break;
					}
				}
			}
				
			if(d5_bk0_fail){
				if(error_status[6] == MACRO_UNCHECK){
					error_log[6] = "<tr><td>"+(info_string)+"</td><td>"+d5_bk0_string+"</td></tr>\n";
				}
				else{
					error_log[6] += "<tr><td>"+(info_string)+"</td><td>"+d5_bk0_string+"</td></tr>\n";
				}
				error_status[6] = MACRO_NG;
				
			}
			/*else{
				if(error_status[6] == MACRO_UNCHECK){
					//error_log[6] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[6] = MACRO_UNFOUND;
				}
			}*/
		}		
		if(obj.name == "0xB2_bank0"){ // PA41
			if((obj.value[40] !== undefined)){
				var temp_b2 = obj.value[40] & 0x01;
				
				if(temp_b2 == 0){
					if(error_status[7] == MACRO_UNCHECK){
						error_log[7] = "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA41[0](hw_rst_blank_opt) is not 1</td></tr>\n";
					}
					else{
						error_log[7] += "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA41[0](hw_rst_blank_opt) is not 1</td></tr>\n";
					}
					error_status[7] = MACRO_NG;
				}
			}
			/*else{
				if(error_status[7] == MACRO_UNCHECK){
					//error_log[7] = "<tr><td></td><td>No 0xD8_bank0 PA1~14 occurred.</td></tr>\n";
					error_status[7] = MACRO_UNFOUND;
				}
			}*/
		}
		if(obj.name == "0xB2_bank1"){ // PA1
			if((obj.value[0] !== undefined)){
				var temp_b2 = (obj.value[0] >> 4)&0x0F;
				
				if(temp_b2 == 1 || temp_b2 == 3 || temp_b2 == 5 || temp_b2 == 7 || temp_b2 == 9 || temp_b2 == 11){
					if(error_status[8] == MACRO_UNCHECK){
						error_log[8] = "<tr><td>"+(info_string)+"</td><td>0xB2h_bank1_PA1[7:4] is 1/3/5/7/9/b</td></tr>\n";
					}
					else{
						error_log[8] += "<tr><td>"+(info_string)+"</td><td>0xB2h_bank1_PA1[7:4] is 1/3/5/7/9/b</td></tr>\n";
					}
					error_status[8] = MACRO_NG;
				}
				else{
					error_log[8] = "";
					error_status[8] = MACRO_OK;
				}
			}
			else{
				if(error_status[8] == MACRO_UNCHECK){
					error_log[8] = "<tr><td></td><td>No B2h_bank1_PA1[7:4] (FRM_PATTERN_CYCLE[3:0]) occurred.</td></tr>\n";
					error_status[8] = MACRO_UNFOUND;
				}
			}
		}
		if((obj.name == "0xCF_bank0")){ // PA2
			if((obj.value[1] !== undefined)){
				var temp_b2 = (obj.value[1] >> 5)&0x01;
				
				if(temp_b2){
					if(error_status[9] == MACRO_UNCHECK){
						error_log[9] = "<tr><td>"+(info_string)+"</td><td>CFh_bank0_PA2[5] (VGHL_WP_OPT) is not 0</td></tr>\n";
					}
					else{
						error_log[9] += "<tr><td>"+(info_string)+"</td><td>CFh_bank0_PA2[5] (VGHL_WP_OPT) is not 0</td></tr>\n";
					}
					error_status[9] = MACRO_NG;
				}
				else{
					error_log[9] = "";
					error_status[9] = MACRO_OK;
				}
			}
			else{
				if(error_status[9] == MACRO_UNCHECK){
					error_log[9] = "<tr><td></td><td>No CFh_bank0_PA2[5] (VGHL_WP_OPT) occurred.</td></tr>\n";
					error_status[9] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xC6_bank0"){ 
			if(obj.value[0] !== undefined){ // PA1[3]
				var temp_b3 = (obj.value[0] >> 3)&0x01;
				
				if(temp_b3 !=1){
					if(error_status[10] == MACRO_UNCHECK){
						error_log[10] = "<tr><td>"+(info_string)+"</td><td>C6h_bank0_PA1[3] ECO0[3] is not 1</td></tr>\n";
					}
					else{
						error_log[10] += "<tr><td>"+(info_string)+"</td><td>C6h_bank0_PA1[3] ECO0[3] is not 1</td></tr>\n";
					}
					error_status[10] = MACRO_NG;
				}
				else{
					error_log[10] = "";
					error_status[10] = MACRO_OK;
				}
			}
			else{
				if(error_status[10] == MACRO_UNCHECK){
					error_log[10] = "<tr><td></td><td>No C6h_bank0_PA1[3] ECO0[3] occurred.</td></tr>\n";
					error_status[10] = MACRO_UNFOUND;
				}
			}
			//===========================================================================================
			if((obj.value[1] !== undefined)){ // PA2[6:5]
				var temp_b3 = (obj.value[1] >> 5)&0x03;
				
				if(temp_b3 !=3){
					if(error_status[28] == MACRO_UNCHECK){
						error_log[28] = "<tr><td>"+(info_string)+"</td><td>C6h_bank0_PA2[6:5] is not 11b</td></tr>\n";
					}
					else{
						error_log[28] += "<tr><td>"+(info_string)+"</td><td>C6h_bank0_PA2[6:5] is not 11b</td></tr>\n";
					}
					error_status[28] = MACRO_NG;
				}
				else{
					error_log[28] = "";
					error_status[28] = MACRO_OK;
				}
			}
			else{
				if(error_status[28] == MACRO_UNCHECK){
					error_log[28] = "<tr><td></td><td>No C6h_bank0_PA2[6:5] occurred.</td></tr>\n";
					error_status[28] = MACRO_UNFOUND;
				}
			}
		}		
		if(obj.name == "0xCB_bank0"){
			//================================
			if(((ic_cut_version == "HX83194-A" || ic_cut_version == "HX83195-A"))){
				if(obj.value.length >= 6){
					if(obj.value[0] != 0xF8 || obj.value[1] != 0xC9 || obj.value[5] != 0x01){
						if(error_status[11] == MACRO_UNCHECK){
							error_log[11] = "<tr><td>"+(info_string)+"</td><td>CBh_bank0 PA1/2/6 should be 0xF8, 0xC9, 0x01</td></tr>\n";
						}
						else{
							error_log[11] += "<tr><td>"+(info_string)+"</td><td>CBh_bank0 PA1/2/6 should be 0xF8, 0xC9, 0x01</td></tr>\n";
						}
						error_status[11] = MACRO_NG;
					}
					else{
						error_log[11] = "";
						error_status[11] = MACRO_OK;
					}
				}
				else{
					if(error_status[11] == MACRO_UNCHECK){
						error_log[11] = "<tr><td></td><td>No CBh_bank0_PA1,2,6 occurred.</td></tr>\n";
						error_status[11] = MACRO_UNFOUND;
					}
				}
			}
			else if(((ic_cut_version == "HX83194-B" || ic_cut_version == "HX83195-B"))){
				if(obj.value.length >= 7){
					if((obj.value[0] != 0xF8) || (obj.value[1] != 0xC9) || (obj.value[5] != 0x01) || ((obj.value[6] & 0x80) == 0x00)){
						if(error_status[11] == MACRO_UNCHECK){
							error_log[11] = "<tr><td>"+(info_string)+"</td><td>CBh_bank0 PA1/2/6/7[7] should be 0xF8, 0xC9, 0x01, 1</td></tr>\n";
						}
						else{
							error_log[11] += "<tr><td>"+(info_string)+"</td><td>CBh_bank0 PA1/2/6/7[7] should be 0xF8, 0xC9, 0x01, 1</td></tr>\n";
						}
						error_status[11] = MACRO_NG;
					}
					else{
						error_log[11] = "";
						error_status[11] = MACRO_OK;
					}
				}
				else{
					if(error_status[11] == MACRO_UNCHECK){
						error_log[11] = "<tr><td></td><td>No CBh_bank0_PA1,2,6,7 occurred.</td></tr>\n";
						error_status[11] = MACRO_UNFOUND;
					}
				}

			}
			//================================
			if((obj.value[9] !== undefined)){ // PA10
				var temp_b2 = (obj.value[9] >> 2)&0x03;
	
				if(temp_b2!= 1){
					if(error_status[13] == MACRO_UNCHECK){
						error_log[13] = "<tr><td>"+(info_string)+"</td><td>CBh_bank0_PA10[3:2] (ERR_PERCENT_0P5_OPT=0,ERR_PERCENT_1_OPT=1) is not 1</td></tr>\n";
					}
					else{
						error_log[13] += "<tr><td>"+(info_string)+"</td><td>CBh_bank0_PA10[3:2] (ERR_PERCENT_0P5_OPT=0,ERR_PERCENT_1_OPT=1) is not 1</td></tr>\n";
					}
					error_status[13] = MACRO_NG;
				}
				else{
					error_log[13] = "";
					error_status[13] = MACRO_OK;
				}
			}
			else{
				if(error_status[13] == MACRO_UNCHECK){
					error_log[13] = "<tr><td></td><td>No CBh_bank0_PA10[3:2] (ERR_PERCENT_0P5_OPT=0,ERR_PERCENT_1_OPT=1) occurred.</td></tr>\n";
					error_status[13] = MACRO_UNFOUND;
				}
			}
		}	
		if(obj.name == "0xCB_bank1"){
			//================================
			if(obj.value.length >= 4){ // PA1~4
				if(obj.value[0] != 0x78 || obj.value[1] != 0x14 || obj.value[2] != 0x58 || obj.value[3] != 0x55){
					if(error_status[12] == MACRO_UNCHECK){
						error_log[12] = "<tr><td>"+(info_string)+"</td><td>CBh_bank1 PA1~4 is not 0x78, 0x14, 0x58, 0x55</td></tr>\n";
					}
					else{
						error_log[12] += "<tr><td>"+(info_string)+"</td><td>CBh_bank1 PA1~4 is not 0x78, 0x14, 0x58, 0x55</td></tr>\n";
					}
					error_status[12] = MACRO_NG;
				}
				else{
					error_log[12] = "";
					error_status[12] = MACRO_OK;
				}
			}
			else{
				if(error_status[12] == MACRO_UNCHECK){
					error_log[12] = "<tr><td></td><td>No CBh_bank1_PA1~4 occurred.</td></tr>\n";
					error_status[12] = MACRO_UNFOUND;
				}
			}
			//================================
			if((obj.value[8] !== undefined)){ // PA9
				var temp_b2 = (obj.value[8] >> 2)&0x03;
	
				if(temp_b2!= 1){
					if(error_status[14] == MACRO_UNCHECK){
						error_log[14] = "<tr><td>"+(info_string)+"</td><td>CBh_bank1_PA9[3:2] (ERR_PERCENT_0P5_OPT=0,ERR_PERCENT_1_OPT=1) is not 1</td></tr>\n";
					}
					else{
						error_log[14] += "<tr><td>"+(info_string)+"</td><td>CBh_bank1_PA9[3:2] (ERR_PERCENT_0P5_OPT=0,ERR_PERCENT_1_OPT=1) is not 1</td></tr>\n";
					}
					error_status[14] = MACRO_NG;
				}
				else{
					error_log[14] = "";
					error_status[14] = MACRO_OK;
				}
			}
			else{
				if(error_status[14] == MACRO_UNCHECK){
					error_log[14] = "<tr><td></td><td>No CBh_bank1_PA9[3:2] (ERR_PERCENT_0P5_OPT=0,ERR_PERCENT_1_OPT=1) occurred.</td></tr>\n";
					error_status[14] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xDA_bank0" ){ // PA12[1:0] --> LVDS only (195-A)
			if((obj.value[11] !== undefined)){
				var temp_b2 = (obj.value[11])&0x03;

				if(temp_b2!= 3){
					if(error_status[15] == MACRO_UNCHECK){
						error_log[15] = "<tr><td>"+(info_string)+"</td><td>DAh_bank0_PA12[1:0] (RST_OPT_DEBOUNCE[1:0]) is not 11b</td></tr>\n";
					}
					else{
						error_log[15] += "<tr><td>"+(info_string)+"</td><td>DAh_bank0_PA12[1:0] (RST_OPT_DEBOUNCE[1:0]) is not 11b</td></tr>\n";
					}
					error_status[15] = MACRO_NG;
				}
				else{
					error_log[15] = "";
					error_status[15] = MACRO_OK;
				}
			}
			else{
				if(error_status[15] == MACRO_UNCHECK){
					error_log[15] = "<tr><td></td><td>No DAh_bank0_PA12[1:0] (RST_OPT_DEBOUNCE[1:0]) occurred.</td></tr>\n";
					error_status[15] = MACRO_UNFOUND;
				}
			}
			
		}		
		if(obj.name == "0xC7_bank0"){ 
			if((obj.value[3] !== undefined)){ // PA4[1:0]
				var temp_b2 = (obj.value[3])&0x03;

				if(temp_b2!= 1){
					if(error_status[16] == MACRO_UNCHECK){
						error_log[16] = "<tr><td>"+(info_string)+"</td><td>C7h_bank0_PA4[1:0] (TCON_OPT[65:64]=01) is not 01b</td></tr>\n";
					}
					else{
						error_log[16] += "<tr><td>"+(info_string)+"</td><td>C7h_bank0_PA4[1:0] (TCON_OPT[65:64]=01) is not 01b</td></tr>\n";
					}
					error_status[16] = MACRO_NG;
				}
				else{
					error_log[16] = "";
					error_status[16] = MACRO_OK;
				}
			}
			else{
				if(error_status[16] == MACRO_UNCHECK){
					error_log[16] = "<tr><td></td><td>No C7h_bank0_PA4[1:0] (TCON_OPT[65:64]=01) occurred.</td></tr>\n";
					error_status[16] = MACRO_UNFOUND;
				}
			}
			//------------------------------------------
			if((obj.value[4] !== undefined)){ // PA5[3]
				var temp_b3 = (obj.value[4] >> 3)&0x01;

				if(temp_b3!= 1){
					if(error_status[22] == MACRO_UNCHECK){
						error_log[22] = "<tr><td>"+(info_string)+"</td><td>C7h_bank0_PA5[3] (TCON_OPT[59]) is not 1</td></tr>\n";
					}
					else{
						error_log[22] += "<tr><td>"+(info_string)+"</td><td>C7h_bank0_PA5[3] (TCON_OPT[59]) is not 1</td></tr>\n";
					}
					error_status[22] = MACRO_NG;
				}
				else{
					error_status[22] = MACRO_OK;
				}
			}
			else{
				if(error_status[22] == MACRO_UNCHECK){
					error_log[22] = "<tr><td></td><td>No C7h_bank0_PA5[3] (TCON_OPT[59]=1) occurred.</td></tr>\n";
					error_status[22] = MACRO_UNFOUND;
				}
			}
			//------------------------------------------
			if((obj.value[0] !== undefined)){ // PA1[3]
				var temp_b3 = (obj.value[0] >> 3)&0x01;

				if(temp_b3!= 0){
					if(error_status[23] == MACRO_UNCHECK){
						error_log[23] = "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA1[3] (MS_OPT[19]) is not 0</td></tr>\n";
					}
					else{
						error_log[23] += "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA1[3] (MS_OPT[19]) is not 0</td></tr>\n";
					}
					error_status[23] = MACRO_NG;
				}
				else{
					error_status[23] = MACRO_OK;
				}
			}
			else{
				if(error_status[23] == MACRO_UNCHECK){
					error_log[23] = "<tr><td></td><td>No 0xC7_bank0 PA1[3] (MS_OPT[19]) occurred.</td></tr>\n";
					error_status[23] = MACRO_UNFOUND;
				}
			}
		}		
		if(obj.name == "0xBC_bank0"){ // PA1
			if((obj.value[0] !== undefined)){
				var temp_b2 = (obj.value[0])&0xFF;
				if((ic_cut_version == "HX83194-A" || ic_cut_version == "HX83195-A")){
					if(temp_b2!= 5){
						if(error_status[17] == MACRO_UNCHECK){
							error_log[17] = "<tr><td>"+(info_string)+"</td><td>BCh_bank0_PA1 is not 5 (1.3V)</td></tr>\n";
						}
						else{
							error_log[17] += "<tr><td>"+(info_string)+"</td><td>BCh_bank0_PA1 is not 5 (1.3V)</td></tr>\n";
						}
						error_status[17] = MACRO_NG;
					}
					else{
						error_log[17] = "";
						error_status[17] = MACRO_OK;
					}
				}
				else if((ic_cut_version == "HX83194-B" || ic_cut_version == "HX83195-B")){
					if(temp_b2!= 4){
						if(error_status[17] == MACRO_UNCHECK){
							error_log[17] = "<tr><td>"+(info_string)+"</td><td>BCh_bank0_PA1 is not 4 (1.3V)</td></tr>\n";
						}
						else{
							error_log[17] += "<tr><td>"+(info_string)+"</td><td>BCh_bank0_PA1 is not 4 (1.3V)</td></tr>\n";
						}
						error_status[17] = MACRO_NG;
					}
					else{
						error_log[17] = "";
						error_status[17] = MACRO_OK;
					}
				}
			}
			else{
				if(error_status[17] == MACRO_UNCHECK){
					error_log[17] = "<tr><td></td><td>No BCh_bank0_PA1 occurred.</td></tr>\n";
					error_status[17] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xB1_bank0"){ // PA6
			if((obj.value[5] !== undefined)){
				var temp_b2 = (obj.value[5] >> 6)&0x03;

				if(temp_b2!= 0){
					if(error_status[18] == MACRO_UNCHECK){
						error_log[18] = "<tr><td>"+(info_string)+"</td><td>B1h_bank0_PA6[7:6] (EN_VGL2_REG_M, EN_VGL2_REG_S) is not 0</td></tr>\n";
					}
					else{
						error_log[18] += "<tr><td>"+(info_string)+"</td><td>B1h_bank0_PA6[7:6] (EN_VGL2_REG_M, EN_VGL2_REG_S) is not 0</td></tr>\n";
					}
					error_status[18] = MACRO_NG;
				}
				else{
					error_log[18] = "";
					error_status[18] = MACRO_OK;
				}
			}
			else{
				if(error_status[18] == MACRO_UNCHECK){
					error_log[18] = "<tr><td></td><td>No B1h_bank0_PA6[7:6] (EN_VGL2_REG_M, EN_VGL2_REG_S) occurred.</td></tr>\n";
					error_status[18] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xC0_bank1"){ // PA8[1:0], PA9[4]
			var c0bk1_log_1="";
			var c0bk1_log_2="";
			var c0bk1_fail = 0;
			if(obj.value[7] !== undefined)
			{
				var temp_b2 = (obj.value[7])&0x03;
				if(temp_b2!= 3){
					c0bk1_log_1 = "C0h_bank1_PA8[1:0] (VGH_LFD_FORWARD_REG, VGL_LFD_FORWARD_REG) is not 11b.<br/>";
					c0bk1_fail = 1;
				}
			}
			else{
				c0bk1_log_1 = "No C0h_bank1_PA8[1:0] (VGH_LFD_FORWARD_REG, VGL_LFD_FORWARD_REG).<br/>";
				c0bk1_fail = 0xFF;

			}
			if(obj.value[8] !== undefined)
			{
				var temp_b3 = (obj.value[8] >> 4)&0x01;
				if(temp_b3 != 1){
					c0bk1_log_2 = "C0h_bank1_PA9[4] (VGH_3X_DUAL_PUMP_OPT_REG) is not 1b.<br/>";
					c0bk1_fail = 1;
				}
			}
			else{
				c0bk1_log_2 = "No C0h_bank1_PA9[4] (VGH_3X_DUAL_PUMP_OPT_REG) occurred.<br/>";
				c0bk1_fail = 0xFF;
			}

			if(c0bk1_fail == 1){
				if(error_status[19] == MACRO_UNCHECK){
					error_log[19] = "<tr><td>"+(info_string)+"</td><td>"+c0bk1_log_1+c0bk1_log_2+"</td></tr>\n";
				}
				else{
					error_log[19] += "<tr><td>"+(info_string)+"</td><td>"+c0bk1_log_1+c0bk1_log_2+"</td></tr>\n";
				}
				error_status[19] = MACRO_NG;
				
			}
			else if(c0bk1_fail == 0xFF){
				if(error_status[19] == MACRO_UNCHECK){
					error_log[19] = "<tr><td></td><td>"+c0bk1_log_1+c0bk1_log_2+"</td></tr>\n";
					error_status[19] = MACRO_UNFOUND;
				}
			}
			else{
				error_log[19] = "";
				error_status[19] = MACRO_OK;
			}
		}
		if((obj.name == "0xD0_bank0")){ // PA5
			if((obj.value[4] !== undefined)){
				var temp_b2 = (obj.value[4])&0x01;

				if(temp_b2!= 1){
					if(error_status[20] == MACRO_UNCHECK){
						error_log[20] = "<tr><td>"+(info_string)+"</td><td>D0h_bank0_PA5[0] (CASCADE_OPT[8]) is not 1</td></tr>\n";
					}
					else{
						error_log[20] += "<tr><td>"+(info_string)+"</td><td>D0h_bank0_PA5[0] (CASCADE_OPT[8]) is not 1</td></tr>\n";
					}
					error_status[20] = MACRO_NG;
				}
				else{
					error_log[20] = "";
					error_status[20] = MACRO_OK;
				}
			}
			else{
				if(error_status[20] == MACRO_UNCHECK){
					error_log[20] = "<tr><td></td><td>No D0h_bank0_PA5[0] (CASCADE_OPT[8]) occurred.</td></tr>\n";
					error_status[20] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xE7_bank0"){ // PA22[3:1]
			if((obj.value[21] !== undefined)){
				var temp_b2 = (obj.value[21] >> 1)&0x07;

				if(temp_b2!= 3){
					if(error_status[21] == MACRO_UNCHECK){
						error_log[21] = "<tr><td>"+(info_string)+"</td><td>E7h_bank0_PA22[3:1] (EMI_SW_RANGE[2:0]) is not 011b</td></tr>\n";
					}
					else{
						error_log[21] += "<tr><td>"+(info_string)+"</td><td>E7h_bank0_PA22[3:1] (EMI_SW_RANGE[2:0]) is not 011b</td></tr>\n";
					}
					error_status[21] = MACRO_NG;
				}
				else{
					error_log[21] = "";
					error_status[21] = MACRO_OK;
				}
			}
			else{
				if(error_status[21] == MACRO_UNCHECK){
					error_log[21] = "<tr><td></td><td>No E7h_bank0_PA22[3:1] (EMI_SW_RANGE[2:0]) occurred.</td></tr>\n";
					error_status[21] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xDA_bank1"){ // PA3[1:0]
			if((obj.value[2] !== undefined)){
				var temp_b2 = (obj.value[2])&0x03;

				if(temp_b2!= 2){
					if(error_status[24] == MACRO_UNCHECK){
						error_log[24] = "<tr><td>"+(info_string)+"</td><td>0xDA_bank1 PA3[1:0] (RTTM[1:0]) is not 10b</td></tr>\n";
					}
					else{
						error_log[24] += "<tr><td>"+(info_string)+"</td><td>0xDA_bank1 PA3[1:0] (RTTM[1:0]) is not 10b</td></tr>\n";
					}
					error_status[24] = MACRO_NG;
				}
				else{
					error_status[24] = MACRO_OK;
				}
			}
			else{
				if(error_status[24] == MACRO_UNCHECK){
					error_log[24] = "<tr><td></td><td>No 0xDA_bank1 PA3[1:0] (RTTM[1:0]) setting occurred</td></tr>\n";
					error_status[24] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xB7_bank0"){ // PA13[2]
			if((obj.value[12] !== undefined)){
				var temp_b2 = (obj.value[12] >> 2)&0x01;

				if(temp_b2!= 0){
					if(error_status[25] == MACRO_UNCHECK){
						error_log[25] = "<tr><td>"+(info_string)+"</td><td>0xB7_bank0 PA13[2] (ISP_RST) is not 0</td></tr>\n";
					}
					else{
						error_log[25] += "<tr><td>"+(info_string)+"</td><td>0xB7_bank0 PA13[2] (ISP_RST) is not 0</td></tr>\n";
					}
					error_status[25] = MACRO_NG;
				}
				else{
					error_log[25] = "";
					error_status[25] = MACRO_OK;
				}
			}
			else{
				if(error_status[25] == MACRO_UNCHECK){
					error_log[25] = "<tr><td></td><td>No 0xB7_bank0 PA13[2] (ISP_RST) setting occurred</td></tr>\n";
					error_status[25] = MACRO_UNFOUND;
				}
			}
		}
		if(obj.name == "0xCA_bank1" ){ // PA47[5] --> before pon
			if((obj.value[46] !== undefined)){
				var temp_b2 = (obj.value[46] >> 5)&0x01;

				if(temp_b2!= 0){
					if(error_status[26] == MACRO_UNCHECK){
						error_log[26] = "<tr><td>"+(info_string)+"</td><td>0xCA_bank1 PA47[5] (KVCO[5]) is not 0</td></tr>\n";
					}
					else{
						error_log[26] += "<tr><td>"+(info_string)+"</td><td>0xCA_bank1 PA47[5] (KVCO[5]) is not 0</td></tr>\n";
					}
					error_status[26] = MACRO_NG;
				}
				else{
					error_log[26] = "";
					error_status[26] = MACRO_OK;
				}
			}
			else{
				if(error_status[26] == MACRO_UNCHECK){
					error_log[26] = "<tr><td></td><td>No 0xCA_bank1 PA47[5] (KVCO[5]) setting occurred</td></tr>\n";
					error_status[26] = MACRO_UNFOUND;
				}
			}
			
		}
		if(obj.name == "0xD3_bank0"){
			if((obj.value[0] !== undefined)){ // PA1
				var tmp_b = (obj.value[0]);
				if(tmp_b == 0){
					if(error_status[27] == MACRO_UNCHECK){
						error_log[27] = "<tr><td>"+(info_string)+"</td><td>D3h_bank0_PA1 (follow_opt=0;PULL_VGL=0]) is 00</td></tr>\n";
					}
					else{
						error_log[27] += "<tr><td>"+(info_string)+"</td><td>D3h_bank0_PA1 (follow_opt=0;PULL_VGL=0]) is 00</td></tr>\n";
					}
					error_status[27] = MACRO_NG;
				}
				else{
					error_status[27] = MACRO_OK;
				}
			}
		}
		else{
			if(error_status[27] == MACRO_UNCHECK){
				error_log[27] = "";//"<tr><td></td><td>No D3h_bank0_PA1 (follow_opt=0;PULL_VGL=0]) occurred.</td></tr>\n";
				error_status[27] = MACRO_UNFOUND;
			}
		}
		//========================================================================================================================
		if(obj.name == "0xB3_bank0"){
			if((obj.value[0] !== undefined)){ // PA1
				var tmp_b = (obj.value[0]);
				if(tmp_b == 0){
					if(error_status[29] == MACRO_UNCHECK){
						error_log[29] = "<tr><td>"+(info_string)+"</td><td>B3h_bank0_PA1[6] (ISP_RST_HW) is 0</td></tr>\n";
					}
					else{
						error_log[29] += "<tr><td>"+(info_string)+"</td><td>B3h_bank0_PA1[6] (ISP_RST_HW) is 0</td></tr>\n";
					}
					error_status[29] = MACRO_NG;
				}
				else{
					error_status[29] = MACRO_OK;
					error_log[29] = "";
				}
			}
			else{
				error_status[29] = MACRO_OK;
				error_log[29] = "";
			}
		}
		else{
			if(error_status[29] == MACRO_UNCHECK){
				error_log[29] = "<tr><td></td><td>No B3h_bank0_PA1[6] (ISP_RST_HW) occurred.</td></tr>\n";
				error_status[29] = MACRO_UNFOUND;
			}

		}
	});
	
	//===============================
	// cancel checking
	if(ic_cut_version == "HX83194-A"){
		// ignore C6h_bank0_PA2[6:5]
		error_log[28] = "";
		error_status[28] = MACRO_OK;
		
		// ignore DAh_bank0 PA12[1:0]
		error_log[15] = "";
		error_status[15] = MACRO_OK;
		
		// ignore DAh_bank1 PA3[1:0]
		error_log[24] = "";
		error_status[24] = MACRO_OK;
		
		// ignore B7h_bank0 PA13[2]
		error_log[25] = "";
		error_status[25] = MACRO_OK;
		
		// ignore CAh_bank1 PA47[5]
		error_log[26] = "";
		error_status[26] = MACRO_OK;
	
		// ignore B3h_bank0 PA1
		error_status[29] = MACRO_OK;
		error_log[29] = "";
	}
	else if(ic_cut_version == "HX83195-A"){
		// ignore C6h_bank0_PA2[6:5]
		error_log[28] = "";
		error_status[28] = MACRO_OK;
		
		// ignore B3h_bank0 PA1
		error_status[29] = MACRO_OK;
		error_log[29] = "";	
	}
	else if(ic_cut_version == "HX83194-B"){
		// ignore CFh_bank0 PA2
		error_log[9] = "";
		error_status[9] = MACRO_OK;
		
		// ignore 0xC6_bank0 PA1[3]
		error_log[10] = "";
		error_status[10] = MACRO_OK;
		
		// ignore DAh_bank0 PA12[1:0]
		error_log[15] = "";
		error_status[15] = MACRO_OK;
		
		// ignore D0h_bank0 PA5
		error_log[20] = "";
		error_status[20] = MACRO_OK;
		
		// ignore DAh_bank1 PA3[1:0]
		error_log[24] = "";
		error_status[24] = MACRO_OK;
		
		// ignore B7h_bank0 PA13[2]
		error_log[25] = "";
		error_status[25] = MACRO_OK;	
		
		// ignore CAh_bank1 PA47[5]
		error_log[26] = "";
		error_status[26] = MACRO_OK;		
		
	}
	else if(ic_cut_version == "HX83195-B"){
		// ignore CFh_bank0 PA2
		error_log[9] = "";
		error_status[9] = MACRO_OK;
		
		// ignore 0xC6_bank0 PA1[3]
		error_log[10] = "";
		error_status[10] = MACRO_OK;
		
		// ignore D0h_bank0 PA5
		error_log[20] = "";
		error_status[20] = MACRO_OK;
		
		// ignore B7h_bank0 PA13[2]
		error_log[25] = "";
		error_status[25] = MACRO_OK;
		
		// ignore CAh_bank1 PA47[5]
		error_log[26] = "";
		error_status[26] = MACRO_OK;
		
		// ignore B3h_bank0 PA1
		error_status[29] = MACRO_OK;
		error_log[29] = "";	
	}
	//===============================
	//===============================
	//console.log(error_status);
	//console.log(error_log);
	//===============================
	//===============================
	//===============================
	var status_result = 0;
	var html_log = "";
	for(i = 0; i < error_status.length; i++){
		if(error_status[i] == MACRO_OK){
			status_result++;
		}
		if(error_log[i] !== undefined){
			html_log+=error_log[i];
		}
	}
	//console.log("match "+ status_result+" total "+error_status.length);
	if(status_result == error_status.length){
		html_log = "<tr><td></td><td>Pass!!</td></tr>";
	}
	//console.log(html_log);
	$('.dd_checker_table').html(html_log);
	$('.dd_checker_result').css('display', 'block');
}

function pa0402_dd_init_checker_start(){
	
	var dd_line_file = $('#bin_dd_initial_code').val().split('\n');
	Dd_init_to_json(dd_line_file, 0); // by dd init code
}

function Export_DD_OSC(){
	var export_content_obj = {};
	var datee = new Date();
	var strDate = datee.getFullYear() + (datee.getMonth()+1).toString().padStart(2,"0") + datee.getDate().toString().padStart(2,"0")
					+'_'+datee.getHours()+ datee.getMinutes() + datee.getSeconds();
	//=======================================
	$('.dd_osc_save').each(function(){
		var id_attr = $(this).attr('id');
		var id_val = $(this).text();
		export_content_obj[id_attr] = id_val;
	});
	//=======================================
	var blob = new Blob([JSON.stringify(export_content_obj)], {
		type: "text/plain;charset=utf-8"
	});
	saveAs(blob, strDate+".json");
}

function Dd_osc_import(){
	var importjson = document.querySelector("#import_dd_osc_hidden");
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
				var selectname = '#'+index;
				$(selectname).text(value);


				// Change Color in result
				//---------------------
				if(selectname == '#r_status_typ'){
					if(value == "OK"){
						$(selectname).css('color', 'green');
					}
					else{
						$(selectname).css('color', 'red');
					}
				}
				else if(selectname == '#r_status_min'){
					if(value == "OK"){
						$(selectname).css('color', 'green');
					}
					else{
						$(selectname).css('color', 'red');
					}
				}
				else if(selectname == '#r_status_max'){
					if(value == "OK"){
						$(selectname).css('color', 'green');
					}
					else{
						$(selectname).css('color', 'red');
					}
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
}

$(document).ready(function(){
	$('.dd_checker_result').css('display', 'none');
	//////////////////////////////////////////////////////////////
	Dd_osc_import();
	$("#import_dd_osc").click(function(e){
		e.preventDefault();
		$("#import_dd_osc_hidden").trigger('click');
	});

	$("#export_dd_osc").click(function(){
		Export_DD_OSC();
	});

	$("#dd_osc_cal").click(function(){
		Dd_osc_target();
	});


});