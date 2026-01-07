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
Beforepon_193_item20_toggle = '';
function Dd_init_to_json(lines, ignore_osc_parser){
	var buffer = "";//, content = "", content_workaround = "";
	var i = 0, d_start = 0, d_end = 0, dd_initial_tag = 0, dd_title_flag = 0;
	var command_pair = 0, pa_number = 0, pa = 0;
	var type_pair = 0;
	var bank = 0;
	var tmp_split, tmp_split_reg, tmp_split_val;
	var tmp_split_bank = 0, tmp_split_pa = 0, role;
	Beforepon_193_item20_toggle = '';
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
				if(password_2 == 0x3A)
					Osc_parameter_json["IC_Type"] = 193;
				else
					Osc_parameter_json["IC_Type"] = 192;
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
					if( dd_title_flag === "Before pon workaround"
					  && dd_obj["name"] == "0xC7_bank0"
					  && tmp_split_pa == 14
					){
						Beforepon_193_item20_toggle += ((dd_obj["value"][(tmp_split_pa-1)]>> 1) & 0x01)+",";
					}
					//////////////////////////////////////
				}

			}
		}
	}
	//console.log(Beforepon_193_item20_toggle);
	//console.log(dd_initial_code_json);
	var info_string = '';
	if(ignore_osc_parser == 0){
		Json_to_html_table();
	
		Dd_reg_checker();
	}
	else{
		info_string = Dd_reg_compare();
	}
	return info_string;
}

function Dd_reg_compare(){
	var info_string = '';
	var content_1 = '', content_2 = '';
	var dd_setting_exsit = 0;
	
	$.each(dd_initial_code_json, function(index, obj){
		if($('div.dd_reg_select2_list').hasClass('dd_reg_select2_list_BC_0_1') ){
			if(obj.type === "Dd initial code"){
				if(obj.name == "0xBC_bank0"){ // PA1 [2:0]
					if(obj.value[0] !== undefined){
						/*info_string+='<span class="export_select2_fw_func">VDDD</span>: ';
						info_string+="<span class=\"export_select2_fw_value\">"+obj.type+" "+(obj.value[0] & 0x07).toString(2).padStart(3, '0')+"</span>";
						info_string+="<br />";*/
						
						content_1+=obj.type+" "+(obj.value[0])+"\r\n<br/>";
						
						dd_setting_exsit |= 1;
					}
				}
			}
			else{
				
				if(obj.name == "0xBC_bank0"){ // PA1 [2:0]
					if((obj.value.length > 0) && (obj.value[0] !== undefined)){
						/*info_string += '<span class="export_select2_fw_func">VDDD</span>: ';
						info_string += "<span class=\"export_select2_fw_value\">"+obj.type+" on "+obj.role+" IC "+(obj.value[0] & 0x07).toString(2).padStart(3, '0')+"</span>";
						info_string+="<br />";*/
						content_1+=obj.type+" on "+obj.role+" IC "+(obj.value[0])+"\r\n<br/>";
						dd_setting_exsit |= 1;
					}
				}
			}
		}
		if($('div.dd_reg_select2_list').hasClass('dd_reg_select2_list_DA_0_4') ){
			if(obj.type === "Dd initial code"){
				if(obj.name == "0xDA_bank0"){ // PA4 [3:0]
					if(obj.value[3] !== undefined){
						
						/*info_string+='<span class="export_select2_fw_func">LVDS Bias</span>: ';
						info_string+="<span class=\"export_select2_fw_value\">"+obj.type+(obj.value[3] & 0x0F).toString(2).padStart(4, '0')+"</span>";
						info_string+="<br />";*/
						
						content_2+=obj.type+" "+(obj.value[3])+"\r\n<br/>";
						
						dd_setting_exsit |= 2;
					}
				}
			}
			else{
				if(obj.name == "0xDA_bank0"){ // PA4 [3:0]
					if((obj.value.length > 3) && (obj.value[3] !== undefined)){
						/*info_string += '<span class="export_select2_fw_func">LVDS Bias</span>: ';
						info_string += "<span class=\"export_select2_fw_value\">"+ obj.type+" on "+obj.role+" IC "+(obj.value[3] & 0x0F).toString(2).padStart(4, '0')+"</span>";
						info_string+="<br />";*/
						content_2+=obj.type+" on "+obj.role+" IC "+(obj.value[3])+"\r\n<br/>";
						dd_setting_exsit |= 2;
					}
				}
			}
		}
	});
	//console.log(dd_setting_exsit);
	if($('div.dd_reg_select2_list').hasClass('dd_reg_select2_list_BC_0_1')){
		if((dd_setting_exsit & 0x01)== 0){
			info_string+='<span class="export_select2_fw_func">VDDD</span>: ';
			info_string+="<span class=\"export_select2_fw_value\">no setting</span>";
		}
		else{
			info_string+='<span class="export_select2_fw_func">VDDD</span>: ';
			info_string+="<span class=\"export_select2_fw_value\">"+content_1+"</span>";
		}
	}
	if($('div.dd_reg_select2_list').hasClass('dd_reg_select2_list_DA_0_4')){
		if((dd_setting_exsit & 0x02)== 0){
			info_string+='<span class="export_select2_fw_func">LVDS Bias</span>: ';
			info_string+="<span class=\"export_select2_fw_value\">no setting</span>";
		}
		else{
			info_string+='<span class="export_select2_fw_func">LVDS Bias</span>: ';
			info_string+="<span class=\"export_select2_fw_value\">"+content_2+"</span>";
		}
	}
	
	
	return info_string;
}

function Json_to_html_table(){
	/*
		VSA (R_VSYNC_WIDTH[3:0] --> 0xB3_bank0, PA5 bit[3:0]
		VBP (R_BP_MAX_THRESHOLD[7:0] --> 0xB3_bank0, PA6 bit[7:0])
		VFP (R_V_FRONT_PORCH[7:0] --> 0xB3_bank0, PA4 bit[7:0])
		VRes (NL[11:0] --> [11:8]: 0xB2_bank0 PA5 bit[3:0]; [7:0]: 0xB2_bank0, PA6 bit[7:0])
		TP_DSIP_LINECLK_CNT_M2 --> 0xE7_bank0 PA12 [7:0]
		lineclk_cnt_ratio --> 0xE7_bank0 PA21 [3:2]
		REPT_GB1 --> 0xE7_bank1, PA4 [4:0]
		REPT_GB2 --> 0xE7_bank1, PA6 [4:0]
		REPT_GB3 --> 0xE7_bank1, PA8 [4:0]
		DISP_GB1 --> [8]: 0xE7_bank1 PA2 bit4; [7:0] 0xE7_bank1 PA3 [7:0]
		DISP_GB2 --> [8]: 0xE7_bank1 PA2 bit5; [7:0] 0xE7_bank1 PA5 [7:0]
		DISP_GB3 --> [8]: 0xE7_bank1 PA2 bit6; [7:0] 0xE7_bank1 PA7 [7:0]
		TP_VSYNC_PIPE_NUM --> 0xE7_bank2 PA30 [7:0]
		TP_INIT_LINE_CNT_RA_STR_M12 --> 0xE7_bank0 PA9 [7:0]
		TP_INIT_LINE_CNT_M2 --> 0xE7_bank0 PA11 [7:0]
		touch -> display dummy# --> 0xE7_bank2 PA10 bit[3:0]
		EMI_offset_coefficient --> 0xE7_bank0_PA5 [7:4]
		EMI_sw_range --> 0xE7_bank0_PA21 [1:0]
		EMI_suppression_line_sel --> 0xE7_bank0_PA21 [6:5]
		TP_PTS1_CLK_CNT_M23 --> 0xE7_bank0_PA15 [7:0]
		TP_PTS3_CLK_CNT_M23 --> 0xE7_bank0_PA16 [7:0]
		PTS1_CLK_CNT_STR_M23 --> 0xE7_bank0_PA33 [7:0]
		TP_TOUCH_LINE_CNT_M2 --> 0xE7_bank0 PA13 [7:0]
		TP_TOUCH_CLK_CNT_M2 --> 0xE7_bank0 PA14 [7:0]	
		
		// 193=========================================
		Line_width_update_state --> 0xE7_bank0_PA45 [6:4]
		Line_width_update_Freq --> 0xE7_bank0_PA21 [6:5]
		Line_width_update_freq_range --> 0xE7_bank0_PA45 [3:0]
	*/
	$.each(dd_initial_code_json, function(index, obj){
		
		if((obj.name === "0xB3_bank0") && (obj.type === "Dd initial code")){
			Osc_parameter_json["VSA"] = (parseInt(obj.value[4], 16) & 0x0F); // PA5
			Osc_parameter_json["VBP"] = (parseInt(obj.value[5], 16) & 0xFF); // PA6
			Osc_parameter_json["VFP"] = (parseInt(obj.value[3], 16) & 0xFF); // PA4
		}
		else if((obj.name === "0xB2_bank0") && (obj.type === "Dd initial code")){
			var temp_high = 0, temp_low = 0;
			temp_high = (parseInt(obj.value[4], 16) & 0x0F); // PA5
			temp_low = (parseInt(obj.value[5], 16) & 0xFF); // PA6
			Osc_parameter_json["VRes"] =  ((temp_high << 8) | temp_low);
		}
		else if((obj.name === "0xE7_bank0") && (obj.type === "Dd initial code")){
			Osc_parameter_json["TP_DSIP_LINECLK_CNT_M2"] = (parseInt(obj.value[11], 16) & 0xFF).toString(16); // PA12
			Osc_parameter_json["TP_TOUCH_CLK_CNT_M2"] = (parseInt(obj.value[13], 16) & 0xFF).toString(16); // PA14
			Osc_parameter_json["TP_TOUCH_LINE_CNT_M2"] = (parseInt(obj.value[12], 16) & 0xFF).toString(16); // PA13
			
			
			Osc_parameter_json["TP_INIT_LINE_CNT_RA_STR_M12"] = (parseInt(obj.value[8], 16) & 0xFF).toString(16); // PA9
			Osc_parameter_json["TP_INIT_LINE_CNT_M2"] = (parseInt(obj.value[10], 16) & 0xFF).toString(16); // PA11
			
			Osc_parameter_json["TP_PTS1_CLK_CNT_M23"] = (parseInt(obj.value[14], 16) & 0xFF).toString(16); // PA15
			Osc_parameter_json["TP_PTS3_CLK_CNT_M23"] = (parseInt(obj.value[15], 16) & 0xFF).toString(16); // PA16
			Osc_parameter_json["PTS1_CLK_CNT_STR_M23"] = (parseInt(obj.value[32], 16) & 0xFF).toString(16); // PA33
			
			Osc_parameter_json["EMI_offset_coefficient"] = ((parseInt(obj.value[4], 16) & 0xF0) >> 4).toString(16); // PA5 [7:4]
			
			Osc_parameter_json["lineclk_cnt_ratio"] = ((parseInt(obj.value[20], 16) & 0x0C) >> 2).toString(2); // PA21 [3:2]
			
			Osc_parameter_json["Hardware_Emi_EN"] = ((parseInt(obj.value[21], 16) & 0x40) >> 6).toString(2); // PA22 [6]
			//===============================================
			var temp = (parseInt(obj.value[20], 16) & 0x03); // EMI_sw_range --> 0xE7_bank0_PA21 [1:0]
			Osc_parameter_json["EMI_sw_range"] = temp.toString(2);

			temp = ((parseInt(obj.value[20], 16) >> 5) & 0x03).toString(2); // EMI_suppression_line_sel --> 0xE7_bank0_PA21 [6:5]
			Osc_parameter_json["EMI_suppression_line_sel"] = temp;
			Osc_parameter_json["Line_width_update_Freq"] = temp; // 193

			//===============================================
			temp = parseInt(obj.value[44], 16); // PA45
			Osc_parameter_json["Line_width_update_state"] = ((temp >> 4)&0x07).toString(2);
			Osc_parameter_json["Line_width_update_freq_range"] =  (temp&0x07).toString(16);
			
			//===============================================
		}
		else if((obj.name === "0xE7_bank1") && (obj.type === "Dd initial code")){
			var temp_high = 0, temp_low = 0;
			
			Osc_parameter_json["REPT_GB1"] = (parseInt(obj.value[3], 16) & 0x1F); // PA4;
			Osc_parameter_json["REPT_GB2"] = (parseInt(obj.value[5], 16) & 0x1F); // PA6;
			Osc_parameter_json["REPT_GB3"] = (parseInt(obj.value[7], 16) & 0x1F); // PA8;
			
			temp_high = ((parseInt(obj.value[1], 16) & 0x10 ) >> 4); // PA2 bit4;
			temp_low = (parseInt(obj.value[2], 16) & 0xFF); // PA3 bit[7:0];
			Osc_parameter_json["DISP_GB1"] = ((temp_high << 8) | (temp_low));
			
			temp_high = ((parseInt(obj.value[1], 16) & 0x20 ) >> 5); // PA2 bit5;
			temp_low = (parseInt(obj.value[4], 16) & 0xFF); // PA5 bit[7:0];
			Osc_parameter_json["DISP_GB2"] = ((temp_high << 8) | (temp_low));
			
			temp_high = ((parseInt(obj.value[1], 16) & 0x40 ) >> 6); // PA2 bit6;
			temp_low = (parseInt(obj.value[6], 16) & 0xFF); // PA7 bit[7:0];
			Osc_parameter_json["DISP_GB3"] = ((temp_high << 8) | (temp_low));
		}
		else if((obj.name === "0xE7_bank2") && (obj.type === "Dd initial code")){
			Osc_parameter_json["touch_display_dummy"] = (parseInt(obj.value[9], 16) & 0x0F); // PA10
			Osc_parameter_json["TP_VSYNC_PIPE_NUM"] = (parseInt(obj.value[29], 16) & 0xFF).toString(16); //0xE7_bank2 PA30 [7:0]
		}
		//......................................
		else if((obj.name === "0xE5_bank1") && (obj.type === "Dd initial code")){
			var i = 0;
			var content_t = "";
			for(i = 0; i< obj.value.length; i++){
				content_t += obj.value[i]+",";
			}
			$('#record_e5_bank1').text(content_t);
		}
		else if((obj.name === "0xEB_bank1") /*&& (obj.type === "Dd initial code")*/){
			var i = 0;
			var content_t = "";
			
			for(i = 0; i< obj.value.length; i++){
				content_t += obj.value[i]+",";
			}
			$('#record_eb_bank1').text(content_t);
		}
		
	});
	
	//console.log(Osc_parameter_json);
	
	// Fill out Table....
	$('#dd_osc_vsa').text(Osc_parameter_json.VSA);
	$('#dd_osc_vbp').text(Osc_parameter_json.VBP);
	$('#dd_osc_vfp').text(Osc_parameter_json.VFP);
	$('#dd_osc_vres').text(Osc_parameter_json.VRes);
	$('#dd_osc_tp_disp_lineclk_cnt_m2').text(Osc_parameter_json.TP_DSIP_LINECLK_CNT_M2);
	$('#dd_osc_lineclk_cnt_ratio').text(Osc_parameter_json.lineclk_cnt_ratio); 
	$('#dd_osc_rept_gb1').text(Osc_parameter_json.REPT_GB1);
	$('#dd_osc_rept_gb2').text(Osc_parameter_json.REPT_GB2);
	$('#dd_osc_rept_gb3').text(Osc_parameter_json.REPT_GB3);
	$('#dd_osc_dsip_gb1').text(Osc_parameter_json.DISP_GB1);
	$('#dd_osc_dsip_gb2').text(Osc_parameter_json.DISP_GB2);
	$('#dd_osc_dsip_gb3').text(Osc_parameter_json.DISP_GB3);
	$('#dd_osc_tp_vsync_pipe_num').text(Osc_parameter_json.TP_VSYNC_PIPE_NUM);
	$('#dd_osc_tp_init_line_cnt_ra_str_m12').text(Osc_parameter_json.TP_INIT_LINE_CNT_RA_STR_M12);
	$('#dd_osc_tp_init_line_cnt_m2').text(Osc_parameter_json.TP_INIT_LINE_CNT_M2);
	$('#dd_osc_touch_display_dummy').text(Osc_parameter_json.touch_display_dummy);
	$('#dd_osc_tp_touch_line_cnt_m2').text(Osc_parameter_json.TP_TOUCH_LINE_CNT_M2);
	$('#dd_osc_tp_touch_clk_cnt_m2').text(Osc_parameter_json.TP_TOUCH_CLK_CNT_M2);
	$('#dd_osc_emi_offset_coeff').text(Osc_parameter_json.EMI_offset_coefficient);
	$('#dd_osc_emi_sw_range').text(Osc_parameter_json.EMI_sw_range);
	$('#dd_osc_emi_suppression_line_sel').text(Osc_parameter_json.EMI_suppression_line_sel);
	$('#dd_osc_tp_pts1_clk_cnt_m23').text(Osc_parameter_json.TP_PTS1_CLK_CNT_M23);
	$('#dd_osc_tp_pts3_clk_cnt_m23').text(Osc_parameter_json.TP_PTS3_CLK_CNT_M23);
	$('#dd_osc_pts1_clk_cnt_str_m23').text(Osc_parameter_json.PTS1_CLK_CNT_STR_M23);
	
	//============================================================
	$('#dd_osc_line_width_update_stage').text(Osc_parameter_json.Line_width_update_state);
	$('#dd_osc_line_width_update_freq').text(Osc_parameter_json.Line_width_update_Freq);
	$('#dd_osc_line_width_update_freq_range').text(Osc_parameter_json.Line_width_update_freq_range);
	//=============================================================
	$('#dd_osc_hardware_emi_en').text(Osc_parameter_json.Hardware_Emi_EN);
	// Updaet IC type
	$('#dd_osc_ic_type').text(Osc_parameter_json.IC_Type);	//console.log(Osc_parameter_json.IC_Type) ;
}


function Dd_osc_target(){
	var target = 0;
	var dd_osc = parseFloat($('#dd_osc_osc').text());//parseInt($('#dd_osc_osc').text(), 10);
	var dd_fr = parseFloat($('#dd_osc_fr').text());//parseInt($('#dd_osc_fr').text(), 10);
	var dd_fr_dev = parseFloat($('#dd_osc_fr_dev').text());//parseInt($('#dd_osc_fr_dev').text(), 10);
	var temp_class="", temp_sub_class="";
	var temp = 0, buffer = 0;
	
	dd_osc = (dd_osc * dd_fr / dd_fr_dev);
	$('#dd_osc_target').text(dd_osc+" MHz");
	//$('#dd_osc_target').attr('osc', dd_osc);
		
	//=============================================================
	// Get scclk1 div
	var scclk1_div = $('#dd_osc_scclk1_div').text();
	$('.dd_osc_c_div1').text(scclk1_div); // 6
	
	$('.dd_osc_c_div').text($('#dd_osc_tp_scclk2').text()); // 330
	$('.dd_osc_c_osr').text($('#dd_osc_tp_osr').text());
	//=============================================================
	//Dadj Step
	temp = parseInt($('#dd_osc_dadj_step').text(), 10);
	var dadj_step = (1+temp*0.015);
	//=============================================================
	//external line
	var fr = dd_fr;
	var vsa = parseInt($('#dd_osc_vsa').text(), 10);
	var vres = parseInt($('#dd_osc_vres').text(), 10);
	var vbp = parseInt($('#dd_osc_vbp').text(), 10);
	var vfp = parseInt($('#dd_osc_vfp').text(), 10);
	
	var external_line = 1000000/(fr*(vres+vsa+vbp+vfp));
	$('.dd_osc_c_external_line').text(external_line.toFixed(4));
	//=============================================================
	var tp_disp_line_cnt_m2 = parseInt($('#dd_osc_tp_disp_lineclk_cnt_m2').text(),16);
	var dd_osc_emi_offset_coeff = parseInt($('#dd_osc_emi_offset_coeff').text(),16);
	var dd_osc_emi_sw_range = parseInt($('#dd_osc_emi_sw_range').text(),2);
	var dd_osc_tp_pts1_clk_cnt_m23 = parseInt($('#dd_osc_tp_pts1_clk_cnt_m23').text(),16);
	var dd_osc_tp_pts3_clk_cnt_m23 = parseInt($('#dd_osc_tp_pts3_clk_cnt_m23').text(),16);
	var dd_osc_pts1_clk_cnt_str_m23 = parseInt($('#dd_osc_pts1_clk_cnt_str_m23').text(),16);
	var dd_osc_tp_vsync_pipe_num = parseInt($('#dd_osc_tp_vsync_pipe_num').text(),16);
	var dd_osc_tp_init_line_cnt_ra_str_m12 = parseInt($('#dd_osc_tp_init_line_cnt_ra_str_m12').text(),16);
	var dd_osc_tp_init_line_cnt_m2 = parseInt($('#dd_osc_tp_init_line_cnt_m2').text(),16);
	var dd_osc_tp_touch_clk_cnt_m2 = parseInt($('#dd_osc_tp_touch_clk_cnt_m2').text(),16);
	var dd_osc_tp_touch_line_cnt_m2 = parseInt($('#dd_osc_tp_touch_line_cnt_m2').text(),16);
	var dd_osc_lineclk_cnt_ratio =  parseInt($('#dd_osc_lineclk_cnt_ratio').text(),2);
	
	var dd_osc_dsip_gb1 = parseInt($('#dd_osc_dsip_gb1').text(),10);
	var dd_osc_dsip_gb2 = parseInt($('#dd_osc_dsip_gb2').text(),10);
	var dd_osc_touch_display_dummy = parseInt($('#dd_osc_touch_display_dummy').text(),10);
	
	var dd_osc_hardware_emi = parseInt($('#dd_osc_hardware_emi_en').text(),2);
	//=====================================
	// 193.................................
	var dd_osc_line_width_update_stage = parseInt($('#dd_osc_line_width_update_stage').text(),2);
	var dd_osc_line_width_freq = parseInt($('#dd_osc_line_width_update_freq').text(),2);
	var dd_osc_line_width_freq_range = parseInt($('#dd_osc_line_width_update_freq_range').text(),16);
	//=====================================
	
	var dd_osc_emi_sw_range_10 = dd_osc_emi_sw_range;
	if(dd_osc_emi_sw_range == 0){
		dd_osc_emi_sw_range = 9;
		dd_osc_emi_sw_range_10 = 3;
	}
	else if(dd_osc_emi_sw_range == 1){
		dd_osc_emi_sw_range = 3;
		dd_osc_emi_sw_range_10 = 2;
	}
	else if(dd_osc_emi_sw_range == 2){
		dd_osc_emi_sw_range = 1;
		dd_osc_emi_sw_range_10 = 1;
	}
	else if(dd_osc_emi_sw_range == 3){
		dd_osc_emi_sw_range = 0; // FALSE
		dd_osc_emi_sw_range_10 = 0; // FALSE
	}
	var dd_osc_emi_suppression_line_sel = parseInt($('#dd_osc_emi_suppression_line_sel').text(),2); //console.log('stella mie'+dd_osc_emi_suppression_line_sel);
	if(dd_osc_emi_suppression_line_sel == 0){
		dd_osc_emi_suppression_line_sel = 1;
	}
	else if(dd_osc_emi_suppression_line_sel == 1){
		dd_osc_emi_suppression_line_sel = 2;
	}
	else if(dd_osc_emi_suppression_line_sel == 2){
		dd_osc_emi_suppression_line_sel = 4;
	}
	else if(dd_osc_emi_suppression_line_sel == 3){
		dd_osc_emi_suppression_line_sel = 8; 
	}
	//~~~~~~~~~~~~~~~~~~~~~~
	if(dd_osc_line_width_freq == 0){
		dd_osc_line_width_freq = 1;
	}
	else if(dd_osc_line_width_freq == 1){
		dd_osc_line_width_freq = 2;
	}
	else if(dd_osc_line_width_freq == 2){
		dd_osc_line_width_freq = 4;
	}
	else if(dd_osc_line_width_freq == 3){
		dd_osc_line_width_freq = 8;
	}
	dd_osc_line_width_freq+=dd_osc_line_width_freq_range;
	
	temp = (7-dd_osc_line_width_update_stage);
	dd_osc_line_width_update_stage = (temp * temp);
	var dd_osc_line_width_update_stage_10 = temp;
	
	//=============================================================
	if(dd_osc_lineclk_cnt_ratio == 0){
		dd_osc_lineclk_cnt_ratio = 2;
	}
	else if(dd_osc_lineclk_cnt_ratio == 1){
		dd_osc_lineclk_cnt_ratio = 4;
	}
	else if(dd_osc_lineclk_cnt_ratio == 2){
		dd_osc_lineclk_cnt_ratio = 8;
	}
	else if(dd_osc_lineclk_cnt_ratio == 3){
		dd_osc_lineclk_cnt_ratio = 16;
	}
	//=============================================================
	
	$('.dd_osc_c_tolerence').each(function(){	
		target = parseFloat($(this).attr('target'));
		$(this).text((100+target));
	});
	$('.dd_osc_c_real').each(function(){	
		target = parseFloat($(this).attr('target'));
		temp_class = '.dd_osc_c_tolerence[target="'+target+'"]';
		temp = parseFloat($(temp_class).text());
		$(this).text(dd_osc*temp/100);
	});
	$('.dd_osc_c_scclk1').each(function(){	
		target = parseFloat($(this).attr('target'));
		temp_class = '.dd_osc_c_real[target="'+target+'"]';
		temp = parseFloat($(temp_class).text()); 
		var real_osc = temp;
		
		temp_sub_class = '.dd_osc_c_div1[target="'+target+'"]';
		buffer = parseFloat($(temp_sub_class).text());
		
		//var scclk1 = (temp/buffer).toFixed(2);
		var scclk1 = Math.round((temp/buffer)*100)/100;
		$(this).text(scclk1); 
		
		// Cal scclk2
		temp_sub_class = '.dd_osc_c_div[target="'+target+'"]'; // 6
		buffer = parseFloat($(temp_sub_class).text());
		//var scclk2 = (scclk1/buffer*1000).toFixed(2);
		var scclk2 = Math.round((scclk1/buffer*1000) * 100)/100;
		temp_sub_class = '.dd_osc_c_scclk2[target="'+target+'"]';
		$(temp_sub_class).text(scclk2);
		
		// cal sensing time
		temp_sub_class = '.dd_osc_c_osr[target="'+target+'"]';
		buffer = parseFloat($(temp_sub_class).text());
		var sensing_time = Math.round((1000*buffer*dadj_step/scclk2) *1000)/1000;
		temp_sub_class = '.dd_osc_c_touch_sensing_time[target="'+target+'"]';
		$(temp_sub_class).text(sensing_time);
		temp_sub_class = '.dd_osc_c_tolerence_10[target="'+target+'"]';
		$(temp_sub_class).text((sensing_time+10));
		
		// Cal emi offset
		var emi_offset = 0;
		if(Osc_parameter_json.IC_Type == 192){
			emi_offset = (dd_osc_emi_offset_coeff*dd_osc_emi_sw_range*dd_osc_emi_suppression_line_sel)/real_osc;
		}
		else{
			emi_offset = (dd_osc_line_width_update_stage * dd_osc_line_width_freq * dd_osc_emi_offset_coeff)/real_osc;
		}
		temp_sub_class = '.dd_osc_c_emi_offset[target="'+target+'"]';
		$(temp_sub_class).text((emi_offset).toFixed(2));
		
		// Cal pts 1,3 us
		var pts1_3 = (2*(dd_osc_tp_pts1_clk_cnt_m23 + dd_osc_tp_pts3_clk_cnt_m23) + dd_osc_pts1_clk_cnt_str_m23)/real_osc;
		temp_sub_class = '.dd_osc_c_pts_1_3[target="'+target+'"]';
		$(temp_sub_class).text((pts1_3).toFixed(2));
		
		// Cal internal line
		var internal_line = dd_osc_lineclk_cnt_ratio*tp_disp_line_cnt_m2/real_osc;
		temp_sub_class = '.dd_osc_c_internal_line[target="'+target+'"]';
		$(temp_sub_class).text((internal_line).toFixed(4));
		
		// Cal 2~9 tpen
		if(dd_osc_hardware_emi == 0){
			emi_offset = 0;
		}
		var tpen_2_9 = (dd_osc_dsip_gb2 * external_line - (dd_osc_dsip_gb2 + dd_osc_touch_display_dummy)*internal_line) - emi_offset - pts1_3;
		temp_sub_class = '.dd_osc_c_2_9_tpen[target="'+target+'"]';
		$(temp_sub_class).text((tpen_2_9).toFixed(2));
		
		// Cal 1st tpen
		var tpen_1= (dd_osc_dsip_gb1 + dd_osc_tp_init_line_cnt_m2)*external_line - (dd_osc_tp_vsync_pipe_num+dd_osc_tp_init_line_cnt_ra_str_m12+2+dd_osc_dsip_gb1)*internal_line;
		temp_sub_class = '.dd_osc_c_1_tpen[target="'+target+'"]';
		$(temp_sub_class).text((tpen_1).toFixed(2));
		
		// Cal RA1
		var ra1 = tpen_2_9/external_line;
		temp_sub_class = '.dd_osc_c_ra[target="'+target+'"]';
		$(temp_sub_class).text((ra1).toFixed(2));
		
		// Cal tolerence
		var tolerence = tpen_2_9 - sensing_time - 10;
		temp_sub_class = '.dd_osc_c_toerence2[target="'+target+'"]';
		$(temp_sub_class).text((tolerence).toFixed(2));

		var tolerence_1st = tpen_1 - sensing_time - 10;

		temp_sub_class = '.dd_osc_result[target="'+target+'"]';
		if(tolerence > 0 && tolerence_1st > 0){
			$(temp_sub_class).text("TRUE");
			$(temp_sub_class).removeClass('bg-danger').addClass('bg-success');
		}
		else{
			$(temp_sub_class).text("FALSE");
			$(temp_sub_class).addClass('bg-danger').removeClass('bg-success');
		}
		
		// =================================================
		// Calcualte 10th TPEN
		var internal_line_min = 0;
		if(dd_osc_hardware_emi == 0){
			dd_osc_emi_offset_coeff = 0;
		}
		if(Osc_parameter_json.IC_Type == 192){
			internal_line_min = (dd_osc_tp_touch_clk_cnt_m2 * dd_osc_lineclk_cnt_ratio + dd_osc_emi_sw_range_10*dd_osc_emi_offset_coeff)/real_osc;
		}
		else{
			internal_line_min = (dd_osc_tp_touch_clk_cnt_m2 * dd_osc_lineclk_cnt_ratio + dd_osc_line_width_update_stage_10*dd_osc_emi_offset_coeff)/real_osc;
		}
		temp_sub_class = '.dd_osc_c_internal_line_min[target="'+target+'"]';
		$(temp_sub_class).text((internal_line_min).toFixed(4));
		
		var max_10_1 = (dd_osc_tp_touch_line_cnt_m2+1)*internal_line_min;
		temp_sub_class = '.dd_osc_c_10_tpen_max1[target="'+target+'"]';
		$(temp_sub_class).text((max_10_1).toFixed(2));
		
		var max_10_2 = (max_10_1 - pts1_3);
		temp_sub_class = '.dd_osc_c_10_tpen_max2[target="'+target+'"]';
		$(temp_sub_class).text((max_10_2).toFixed(2));
		
		tolerence = max_10_2 - sensing_time;// - 10;
		temp_sub_class = '.dd_osc_c_10_tolerence[target="'+target+'"]';
		$(temp_sub_class).text((tolerence).toFixed(2));

		temp_sub_class = '.dd_osc_c_10_result[target="'+target+'"]';
		if(tolerence > 0){
			$(temp_sub_class).text("TRUE");
			$(temp_sub_class).removeClass('bg-danger').addClass('bg-success');
		}
		else{
			$(temp_sub_class).text("FALSE");
			$(temp_sub_class).addClass('bg-danger').removeClass('bg-success');
		}
	});
}

function Dd_osc_cal(){
	/*$("#dd_osc_cal").click(function(){
		console.log("Dd initial code button pressed...");
		Dd_osc_target();
	});*/
	
	$("#dd_osc_save").click(function(){
		SavetoMD();
	});
}

function Create_dd_osc_table(){
	var content_tpen10 = '';
	var content = '';
	
	content+='<tr>\n';
	content+='<td id="dd_osc_target">MHz</td>\n';
	content+='<td class="dd_osc_tableshow">% MHz</td>\n';
	content+='<td>MHz</td>\n';
	content+='<td class="dd_osc_tableshow"> </td>\n';
	content+='<td>MHz</td>\n';
	content+='<td class=""> </td>\n';
	content+='<td>KHz</td>\n';
	content+='<td> </td>\n';
	content+='<td>us</td>\n';
	content+='<td>Tolerance 10us</td>\n';
	content+='<td>us</td>\n';
	content+='<td> </td>\n';
	content+='<td>us</td>\n';
	content+='<td>us</td>\n';
	content+='<td class="dd_osc_tableshow"> </td>\n';
	content+='<td class="dd_osc_tableshow">us</td>\n';
	content+='<td class="dd_osc_tableshow">us</td>\n';
	content+='<td> </td>\n';
	content+='<td> </td>\n';
	content+='</tr>\n';

	var i = 0;
	var dest = [
		0, 1, -0.5, -0.6, -0.7, -0.8, -0.9, -1, 
		-1.1, -1.2, -1.3, -1.4, -1.5, -1.6, -1.7, -1.8, -1.9, -2.0,
		-2.1, -2.2, -2.3, -2.4, -2.5, -2.6, -2.7, -2.8, -2.9, -3.0
	];
	for(i = 0; i< dest.length; i++){
		content+='<tr>';
		content+='	<td>'+dest[i]+'</td>';
		content+='	<td class="dd_osc dd_osc_c_tolerence dd_osc_tableshow" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_real" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_div1 dd_osc_tableshow" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_scclk1" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_div " target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_scclk2" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_osr" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_touch_sensing_time" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_tolerence_10" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_external_line" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_internal_line" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_2_9_tpen" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_1_tpen" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_ra dd_osc_tableshow" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_emi_offset dd_osc_tableshow" target="'+dest[i]+'">0</td>';
		content+='	<td class="dd_osc dd_osc_c_pts_1_3 dd_osc_tableshow" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_c_toerence2" target="'+dest[i]+'"></td>';
		content+='	<td class="dd_osc dd_osc_result" target="'+dest[i]+'">FALSE</td>';
		content+='</tr>';
		

		content_tpen10+='<tr>\n';
		content_tpen10+='	<td>'+dest[i]+'</td>';
		content_tpen10+='	<td class="dd_osc dd_osc_c_internal_line_min" target="'+dest[i]+'"></td>';
		content_tpen10+='	<td class="dd_osc dd_osc_c_10_tpen_max1" target="'+dest[i]+'"></td>';
		content_tpen10+='	<td class="dd_osc dd_osc_c_10_tpen_max2" target="'+dest[i]+'"></td>';
		content_tpen10+='	<td class="dd_osc dd_osc_c_10_tolerence" target="'+dest[i]+'"></td>';
		content_tpen10+='	<td class="dd_osc dd_osc_c_10_result" target="'+dest[i]+'"></td>';
		content_tpen10+='</tr>\n';
	}
	$('#dd_osc_table_1_9').html(content);
	$('#dd_osc_table_10').html(content_tpen10);
}


function SavetoMD(){
	// Parameters=================================================================================
	var content = "| Name | Address | Value |\n";
	content += "|:-----------|:------------|:-----|\n";
	
	content += "| VRes (H)  | [11:8]: 0xB2_bank0 PA5 [3:0]   |     "+ $('#dd_osc_vres').text()+"| \n";
	content += "|           | [7:0]: 0xB2_bank0 PA6 [7:0]    |     |\n";
	
	$(".dd_osc_save").each(function() {
		content +='| '+$(this).children('td:nth-child(1)').text()+" ";
		content +='| '+$(this).children('td:nth-child(2)').text()+" ";
		content +='| '+$(this).children('td:nth-child(3)').text()+" |\n";
	});
	//==============================================================================================
	//==============================================================================================
	// Save Table
	// Get children count
	var i = 0;
	var tmp_class="";
	var c_count = $("#dd_osc_table_1_9_title tr td").length; 
	content+="\n\n";
	for(i = 1; i <= c_count; i++){
		tmp_class = "td:nth-child("+i+")";
		content += "| "+$('#dd_osc_table_1_9_title').find(tmp_class).text()+" ";
	}
	content+=" |\n";
	for(i = 1; i <= c_count; i++){
		content+="|:---------";
	}
	content+=" |\n";
	
	$("#dd_osc_table_1_9 tr").each(function() {
		for(i = 1; i <= c_count; i++){
			tmp_class = "td:nth-child("+i+")";
			content += "| "+$(this).find(tmp_class).text()+" ";
		}
		content+=" |\n";
	});
	// TPEN 10 Table=========================================
	c_count = $("#dd_osc_table_10_title tr td").length; 
	content+="\n\n";
	for(i = 1; i <= c_count; i++){
		tmp_class = "td:nth-child("+i+")";
		content += "| "+$('#dd_osc_table_10_title').find(tmp_class).text()+" ";
	}
	content+=" |\n";
	for(i = 1; i <= c_count; i++){
		content+="|:---------";
	}
	content+=" |\n";
	
	$("#dd_osc_table_10 tr").each(function() {
		for(i = 1; i <= c_count; i++){
			tmp_class = "td:nth-child("+i+")";
			content += "| "+$(this).find(tmp_class).text()+" ";
		}
		content+=" |\n";
	});
	
	//console.log(content);
	//==============================================================================================
	var blob = new Blob([content], {
		type: "text/plain;charset=utf-8"
	});
	saveAs(blob, "dd_osc_tracking.md");

}

function Update_dd_osc_table(){
	var osc_freq = $('#form_bin_vsync_freq').val();
	var vbp = $('#form_bin_VBP').text();
	var vfp = $('#form_bin_VFP').text();
	var vsa = $('#form_bin_VSA').text();
	
	var f0_scclk2 = $('.5478_sram_waveform_f0[name="tcon_sc_clk2_period"]').text();
	var f0_osr = parseInt($('.5478_sram_waveform_f0[name="tcon_osr_count"]').text(), 16);
	var tmp_1 = f0_scclk2 = f0_scclk2.split('(')[0];
	f0_scclk2 = $.trim(tmp_1);

	var dd_line_file = $('#bin_dd_initial_code').val().split('\n');
	Dd_init_to_json(dd_line_file, 0); // by dd init code
	
	$('#dd_osc_vsa').text(vsa);
	$('#dd_osc_vfp').text(vfp);
	$('#dd_osc_vbp').text(vbp);
	$('#dd_osc_fr').text(osc_freq);
	$('#dd_osc_fr_dev').text(osc_freq);

	$('#dd_osc_tp_scclk2').text(f0_scclk2);
	$('#dd_osc_tp_osr').text(f0_osr);
	
	// Update pll setting....
	Update_scclk2(0);
}

function Update_scclk2(update_tcon_setting){
	var pll = parseInt($('#form_bin_PLL').val(), 16);
	var sel_sci_t = 0, d_sci_t = 0;
	var sel_sci = 0, d_sci = 0;
	sel_sci_t = ((pll >> 3)&0x0F);
	d_sci_t = (pll&0x07);
	d_sci = (d_sci_t+1);
	if(sel_sci_t == 0){
		sel_sci = 1;
	}
	else if((sel_sci_t > 0) && (sel_sci_t < 7)){
		sel_sci = sel_sci_t;
	}
	else if((sel_sci_t > 6) && (sel_sci_t < 10)){
		sel_sci = 8;
	}
	else{
		sel_sci = 10;
	}
	sel_sci = (2*sel_sci);
	$('#dd_osc_scclk1_div').text(sel_sci);
	
	if(update_tcon_setting == 1)
	{
		if(sel_sci == 0){
			sel_sci = 6;
		}
		var sclk1 = (90.00 / sel_sci);
		var sclk2 = 0, freq = 0;
		// F0......................
		var freq_tmp = $('.5478_sram_waveform_f0[name="tcon_sc_clk2_period"]').text().split(' ')[0];
		freq = parseInt(freq_tmp, 10);

		sclk2 = ((sclk1 / freq)*1000).toFixed(2);
		ori_value = freq+" ("+sclk2+" kHz)";
		$('.5478_sram_waveform_f0[name="tcon_sc_clk2_period"]').text(ori_value); 
		
		// F1......................
		freq_tmp = $('.5478_sram_waveform_f1[name="tcon_sc_clk2_period"]').text().split(' ')[0];
		freq = parseInt(freq_tmp, 10);

		sclk2 = ((sclk1 / freq)*1000).toFixed(2);
		ori_value = freq+" ("+sclk2+" kHz)";
		$('.5478_sram_waveform_f1[name="tcon_sc_clk2_period"]').text(ori_value);
	}
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
	var tp_source_select = parseInt($('.5478_sram_waveform_f0[name="tcon_tp_source_select"]').text(), 16); // single: 0x07, multi: 0x04
	var ic_num = 0;

	if(tp_source_select == 7){
		ic_num = 1;
	}
	else if(tp_source_select == 4){
		ic_num = 2;
	}
	else{
		ic_num = 0;
	}
	//console.log(ic_num);
	//======================================================================
	// Get IC cut version
	ic_cut_version = $('.5478_flash_header[name="cfg_sign"]').text();
	if(ic_cut_version.length > 2)
		ic_cut = $.trim(ic_cut_version.split('-')[1]);
	//console.log(ic_cut);
	
	//======================================================================
	var error_status = new Array(50); // default test 100 items. Seperate 192 and 193 only.
	for(i = 0; i < error_status.length; i++){
		error_status[i] = MACRO_UNCHECK;
	}
	//======================================================================
	var error_log = new Array(50);
	error_log[0] = "";//"<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>";
	error_log[1] = "";//"<tr><td></td><td>No 0xDA_bank0 PA8 setting occurred</td></tr>";
	error_log[2] = "";//"<tr><td></td><td>No 0xD8_bank0 PA1~7 setting occurred</td></tr>";
	error_log[3] = "";//"<tr><td></td><td>No 0xD8_bank0 PA16~22 setting occurred</td></tr>";
	error_log[4] = "";//"<tr><td></td><td>No 0xD8_bank0 PA31~37 setting occurred</td></tr>";
	error_log[5] = "";//"<tr><td></td><td>No 0xD8_bank0 PA15 setting occurred</td></tr>";
	error_log[6] = "";//"<tr><td></td><td>No 0xD8_bank0 PA30 setting occurred</td></tr>";
	error_log[7] = "";//"<tr><td></td><td>No 0xD8_bank0 PA45 setting occurred</td></tr>";
	error_log[8] = "";//"<tr><td></td><td>No 0xD8_bank1 PA1~7 setting occurred</td></tr>";
	error_log[9] = "";//"<tr><td></td><td>No 0xD8_bank1 PA16~22 setting occurred</td></tr>";
	error_log[10] = "";//"<tr><td></td><td>No 0xD8_bank1 PA31~37 setting occurred</td></tr>";
	error_log[11] = "";//"<tr><td></td><td>No 0xD8_bank1 PA15 setting occurred</td></tr>";
	error_log[12] = "";//"<tr><td></td><td>No 0xD8_bank1 PA30 setting occurred</td></tr>";
	error_log[13] = "";//"<tr><td></td><td>No 0xD8_bank1 PA45 setting occurred</td></tr>";
	error_log[14] = "";//"<tr><td></td><td>No 0xD8_bank2 PA1~8 setting occurred</td></tr>";
	error_log[15] = "";//"<tr><td></td><td>No 0xD8_bank3 PA1~8 setting occurred</td></tr>";
	error_log[16] = "";//"<tr><td></td><td>No 0xD8_bank3 PA17~24 setting occurred</td></tr>";
	error_log[17] = "";//"<tr><td></td><td>No 0xB2_bank1 PA1 setting occurred</td></tr>";
	error_log[18] = "<tr><td></td><td>No 0xC7_bank0 PA1 setting occurred</td></tr>";
	if(Osc_parameter_json["IC_Type"] == 192){ 
		error_log[19] = "<tr><td></td><td>No 0xC7_bank0 PA3 setting occurred</td></tr>";
	}
	else{
		error_log[19] ="";
	}
	error_log[20] = "";//"<tr><td></td><td>No 0xDA_bank1 PA1[7] setting occurred</td></tr>";
	error_log[21] = "";//"<tr><td></td><td>No 0xD5_bank0 PA1~60 setting occurred</td></tr>";
	error_log[22] = "";//"<tr><td></td><td>No 0xD6_bank0 PA1~60 setting occurred</td></tr>";
	error_log[23] = "";//"<tr><td></td><td>No 0xD6_bank1 PA1~4 setting occurred</td></tr>";
	error_log[24] = "";//"<tr><td></td><td>No 0xB2_bank0 PA26 setting occurred</td></tr>";
	error_log[25] = "<tr><td></td><td>No TCON_ECO2[1]. 192: 0xC7_bank0 PA13[1]; 193: 0xCB_bank0 PA1[7] occurred</td></tr>";
	error_log[26] = "";//"<tr><td></td><td>No 0xBC_bank0 PA1 setting occurred</td></tr>";
	error_log[27] = "<tr><td></td><td>No 0xDA_bank0 PA4[3:0] setting occurred</td></tr>";
	error_log[28] = "<tr><td></td><td>No 0xC7_bank0 PA6[3] setting occurred</td></tr>";
	error_log[29] = "<tr><td></td><td>No 0xB4_bank0 PA6[5] setting occurred</td></tr>";
	error_log[30] = "";//"<tr><td></td><td>No 0xB2_bank0 PA25[0] setting occurred</td></tr>";
	error_log[31] = "";//"<tr><td></td><td>No 0xE7_bank0 PA21[1:0] (TP_CTRL_OPT[25:24]) setting occurred</td></tr>";
	error_log[32] = "";//"<tr><td></td><td>No 0xE7_bank0 PA21[6:5] (TP_CTRL_OPT[30:29]) setting occurred</td></tr>";
	error_log[33] = "";//"<tr><td></td><td>No 0xE7_bank0 PA45[3:0] (EMI_SUPPRESSION) setting occurred</td></tr>";
	error_log[34] = "";// No C7 bank0 PA14 in before_pon workaround
	error_log[35] = ""; // <tr><td></td><td>No 0xC0_bank2 PA6[7](ENPD) setting occurred</td></tr>
	error_log[36] = "<tr><td></td><td>No 0xB2_bank3 PA1[7:4] (FRM_PATTERN_CYCLE[3:0]) setting occurred</td></tr>";
	error_log[37] = "";//"<tr><td></td><td>No 0xE7_bank0 PA24[1] (TP_CTRL_OPT[1]) setting occurred</td></tr>";
	
	
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
	
		// item 1 & 15==============================================
		if(obj.name == "0xDA_bank0"){ // PA5, PA8 
			var golden_1, golden_2;
			
			if(Osc_parameter_json["IC_Type"] == 192){  
				golden_1 = "0x90";
				golden_2 = "0x10";
			}
			else{ // 193
				golden_1 = "0x80";
				golden_2 = "0x00";
			}
			
			// current_test_item = 0*******************************************
			if(obj.value[4] !== undefined){ 
				if(obj.value[4] == golden_1){
					if(error_status[0] == MACRO_NG){
						error_log[0] += "";
					}
					else{
						error_log[0] = "";
					}
					error_status[0] = MACRO_OK; 
				}
				else{
					if(error_status[0] == MACRO_UNCHECK){
						error_log[0] = "<tr><td>"+(info_string)+"</td><td>0xDA_bank0 PA5 should be "+golden_1+"</td></tr>\n";
					}
					else{
						error_log[0] += "<tr><td>"+(info_string)+"</td><td>0xDA_bank0 PA5 should be "+golden_1+"</td></tr>\n";
					}
					error_status[0] = MACRO_NG;
				}
			}
			/*else{
				if(error_status[0] == MACRO_UNCHECK){
					//error_log[0] = "<tr><td></td><td>No 0xDA_bank0 PA5 setting occurred</td></tr>\n";
					error_status[0] = MACRO_UNFOUND;
				}
			}*/
			// current_test_item = 1*******************************************
			if(obj.value[7] !== undefined){  
				if(obj.value[7] == golden_2){
					if(error_status[1] == MACRO_NG){
						error_log[1] += "";
					}
					else{
						error_log[1] = "";
					}
					error_status[1] = MACRO_OK;
				}
				else{
					if(error_status[1] == MACRO_UNCHECK){
						error_log[1] = "<tr><td>"+(info_string)+"</td><td>0xDA_bank0 PA8 should be "+golden_2+"</td></tr>\n";
					}
					else{
						error_log[1] += "<tr><td>"+(info_string)+"</td><td>0xDA_bank0 PA8 should be "+golden_2+"</td></tr>\n";
					}
					error_status[1] = MACRO_NG;
				}
			}
			/*else{
				if(error_status[1] == MACRO_UNCHECK){
					//error_log[1] = "<tr><td></td><td>No 0xDA_bank0 PA8 setting occurred</td></tr>\n";
					error_status[1] = MACRO_UNFOUND;
				}
			}*/
			
			// current_test_item = 15*******************************************
			if(obj.value[3] !== undefined){
				tmp = parseInt(obj.value[3], 16);
				tmp = tmp & 0x0F;
				var da_golden;
				if(Osc_parameter_json["IC_Type"] == 192){
					da_golden = 0x0C;
				}
				else{
					da_golden = 0x0A;
				}
				
				if(tmp == da_golden){
					if(error_status[27] == MACRO_NG){
						error_log[27] += "";
					}
					else{
						error_log[27] = "";
					}
					error_status[27] = MACRO_OK; 
				}
				else{
					
					if(error_status[27] == MACRO_UNFOUND || error_status[27] == MACRO_UNCHECK){
						error_log[27] = "<tr><td>"+(info_string)+"</td><td>0xDA_bank0 PA4[3:0] should be 0x"+da_golden.toString(16).toUpperCase().padStart(2,0)+"</td></tr>\n";
					}
					else{
						error_log[27] += "<tr><td>"+(info_string)+"</td><td>0xDA_bank0 PA4[3:0] should be 0x"+da_golden.toString(16).toUpperCase().padStart(2,0)+"</td></tr>\n";
					}
					error_status[27] = MACRO_NG;
				}
			}
			else{
				if(error_status[27] == MACRO_UNCHECK){
					//error_log[27] = "<tr><td></td><td>No 0xDA_bank0 PA4[3:0] setting occurred</td></tr>\n";
					error_status[27] = MACRO_UNFOUND; // report NG when not found
				}
			}
		}
		// item 2==============================================
		if(obj.name == "0xD8_bank0"){
			for(i = 0; i < 7; i++){ 
				// current_test_item = 2*******************************************
				// PA1~7 with PA8~14
				if((obj.value.length > 13) && (obj.value[13] !== undefined)){
					if(obj.value[i] != obj.value[i+7]){
						if(error_status[2] == MACRO_UNCHECK){
							error_log[2] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA1~7 mismatch with PA8~14</td></tr>\n";
						}
						else{
							error_log[2] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA1~7 mismatch with PA8~14</td></tr>\n";
						}
						error_status[2] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[2] == MACRO_UNCHECK){
						//error_log[2] = "<tr><td></td><td>No 0xD8_bank0 PA1~14 occurred.</td></tr>\n";
						error_status[2] = MACRO_UNFOUND;
					}
				}*/
				// current_test_item = 3*******************************************
				// PA16~22 with PA23~29
				if((obj.value.length > 28) && (obj.value[28] !== undefined)){
					if(obj.value[15+i] != obj.value[15+i+7]){
						if(error_status[3] == MACRO_UNCHECK){
							error_log[3] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA16~22 mismatch with PA23~29</td></tr>\n";
						}
						else{
							error_log[3] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA16~22 mismatch with PA23~29</td></tr>\n";
						}
						error_status[3] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[3] == MACRO_UNCHECK){
						//error_log[3] = "<tr><td></td><td>No 0xD8_bank0 PA16~29 occurred.</td></tr>\n";
						error_status[3] = MACRO_UNFOUND;
					}
				}*/
				
				// current_test_item = 4*******************************************
				// PA31~37 with PA38~44
				if((obj.value.length > 43) && (obj.value[43] !== undefined)){
					if(obj.value[30+i] != obj.value[30+i+7]){
						if(error_status[4] == MACRO_UNFOUND){
							error_log[4] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA31~37 mismatch with PA38~44</td></tr>\n";
						}
						else{
							error_log[4] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA31~37 mismatch with PA38~44</td></tr>\n";
						}
						error_status[4] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[4] == MACRO_UNCHECK){
						//error_log[4] = "<tr><td></td><td>No 0xD8_bank0 PA31~44 occurred.</td></tr>\n";
						error_status[4] = MACRO_UNFOUND;
					}
				}*/
			}
			
			if(error_status[2] == MACRO_UNCHECK){ // checked
				error_status[2] = MACRO_OK; //pass
				error_log[2] = "";
			}
			if(error_status[3] == MACRO_UNCHECK){ // checked
				error_status[3] = MACRO_OK; //pass
				error_log[3] = "";
			}
			if(error_status[4] == MACRO_UNCHECK){ // checked
				error_status[4] = MACRO_OK; //pass
				error_log[4] = "";
			}
			
			// current_test_item = 5*******************************************
			if(obj.value[14] !== undefined){ // PA15[7:4] VS PA15[3:0]
				tmp = parseInt(obj.value[14], 16);
				tmp_1 = (tmp & 0xF0) >> 4;
				tmp = (tmp & 0x0F);
				
				if(tmp_1 == tmp){
					if(error_status[5] == MACRO_NG){
						error_log[5] += "";
					}
					else{
						error_log[5] = "";
					}
					error_status[5] = MACRO_OK;
				}
				else{
					if(error_status[5] == MACRO_UNCHECK){
						error_log[5] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA15[7:4] 需等於 PA15[3:0].</td></tr>\n";
					}
					else{
						error_log[5] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA15[7:4] 需等於 PA15[3:0].</td></tr>\n";
					}
					error_status[5] = MACRO_NG;
				}
			}
			/*else{
				if(error_status[5] == MACRO_UNCHECK){
					//error_log[5] = "<tr><td></td><td>No 0xD8_bank0 PA15 occurred.</td></tr>\n";
					error_status[5] = MACRO_UNFOUND;
				}
			}*/
		
			// current_test_item = 6*******************************************
			if(obj.value[29] !== undefined){ // PA30[7:4] VS PA30[3:0]
				tmp = parseInt(obj.value[29], 16);
				tmp_1 = (tmp & 0xF0) >> 4;
				tmp = (tmp & 0x0F);
				
				if(tmp_1 == tmp){
					if(error_status[6] == MACRO_NG){
						error_log[6] += "";
					}
					else{
						error_log[6] = "";
					}
					error_status[6] = MACRO_OK;
				}
				else{
					if(error_status[6] == MACRO_UNCHECK){
						error_log[6] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA30[7:4] 需等於 PA30[3:0].</td></tr> \n";
					}
					else{
						error_log[6] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA30[7:4] 需等於 PA30[3:0].</td></tr> \n";
					}
					error_status[6] = MACRO_NG;
				}
			}
			/*else{
				if(MACRO_UNCHECK == error_status[6]){
					//error_log[6] = "<tr><td></td><td>No 0xD8_bank0 PA30 occurred.</td></tr>\n";
					error_status[6] = MACRO_UNFOUND;
				}
			}*/
			
			// current_test_item = 7*******************************************
			if(obj.value[44] !== undefined){ // PA45[7:4] VS PA45[3:0]
				tmp = parseInt(obj.value[44], 16);
				tmp_1 = (tmp & 0xF0) >> 4;
				tmp = (tmp & 0x0F);
				
				if(tmp_1 == tmp){
					if(error_status[7] == MACRO_NG){
						error_log[7] += "";
					}
					else{
						error_log[7] = "";
					}
					error_status[7] = MACRO_OK;
				}
				else{
					if(error_status[7] == MACRO_UNCHECK){
						error_log[7] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA45[7:4] 需等於 PA45[3:0].</td></tr>\n";
					}
					else{
						error_log[7] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank0 PA45[7:4] 需等於 PA45[3:0].</td></tr>\n";
					}
					error_status[7] = MACRO_NG;
				}	
			}
			/*else{
				if(error_status[7] == MACRO_UNCHECK){
					//error_log[7] = "<tr><td></td><td>No 0xD8_bank0 PA45 occurred.</td></tr>\n";
					error_status[7] = MACRO_UNFOUND;
				}
			}*/
		}
		// item 3==============================================
		if(obj.name == "0xD8_bank1"){
			for(i = 0; i < 7; i++){ 
				// current_test_item = 8*******************************************
				// PA1~7 with PA8~14
				if((obj.value.length > 13) && (obj.value[13] !== undefined)){
					if(obj.value[i] != obj.value[i+7]){
						if(error_status[8] == MACRO_UNCHECK){
							error_log[8] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA1~7 mismatch with PA8~14</td></tr>\n";
						}
						else{
							error_log[8] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA1~7 mismatch with PA8~14</td></tr>\n";
						}
						error_status[8] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[8] == MACRO_UNCHECK){
						//error_log[8] = "<tr><td></td><td>No 0xD8_bank1 PA1~14 occurred.</td></tr>\n";
						error_status[8] = MACRO_UNFOUND;
					}
				}*/
				
				// current_test_item = 9*******************************************
				// PA16~22 with PA23~29
				if((obj.value.length > 28) && (obj.value[28] !== undefined)){
					if(obj.value[15+i] != obj.value[15+i+7]){
						if(error_status[9] == MACRO_UNCHECK){
							error_log[9] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA16~22 mismatch with PA23~29</td></tr>\n";
						}
						else{
							error_log[9] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA16~22 mismatch with PA23~29</td></tr>\n";
						}
						error_status[9] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[9] == MACRO_UNCHECK){
						//error_log[9] = "<tr><td></td><td>No 0xD8_bank1 PA16~29 occurred.</td></tr>\n";
						error_status[9] = MACRO_UNFOUND;
					}
				}*/
				
				// current_test_item = 10*******************************************
				// PA31~37 with PA38~44
				if((obj.value.length > 43) && (obj.value[43] !== undefined)){
					if(obj.value[30+i] != obj.value[30+i+7]){
						if(error_status[10] == MACRO_UNCHECK){
							error_log[10] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA31~37 mismatch with PA38~44</td></tr>\n";
						}
						else{
							error_log[10] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA31~37 mismatch with PA38~44</td></tr>\n";
						}
						error_status[10] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[10] == MACRO_UNCHECK){
						//error_log[10] = "<tr><td></td><td>No 0xD8_bank1 PA31~44 occurred.</td></tr>\n";
						error_status[10] = MACRO_UNFOUND;
					}
				}*/
			}
			
			if(error_status[8] == MACRO_UNCHECK){ // checked
				error_log[8] = "";
				error_status[8] = MACRO_OK; //pass
			}
			if(error_status[9] == MACRO_UNCHECK){ // checked
				error_log[9] = "";
				error_status[9] = MACRO_OK; //pass
			}
			if(error_status[10] == MACRO_UNCHECK){ // checked
				error_log[10] = "";
				error_status[10] = MACRO_OK; //pass
			}
			
			// current_test_item = 11*******************************************
			if(obj.value[14] !== undefined){ // PA15[7:4] VS PA15[3:0]
				tmp = parseInt(obj.value[14], 16);
				tmp_1 = (tmp & 0xF0) >> 4;
				tmp = (tmp & 0x0F);
				
				if(tmp_1 == tmp){
					if(error_status[11] == MACRO_NG){
						error_log[11] += "";
					}
					else{
						error_log[11] = "";
					}
					error_status[11] = MACRO_OK;
				}
				else{
					if(error_status[11] == MACRO_UNCHECK){
						error_log[11] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA15[7:4] 需等於 PA15[3:0].</td></tr>\n";
					}
					else{
						error_log[11] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA15[7:4] 需等於 PA15[3:0].</td></tr>\n";
					}
					error_status[11] = MACRO_NG;
				}	
			}
			/*else{
				if(error_status[11] == MACRO_UNCHECK){
					//error_log[11] = "<tr><td></td><td>No 0xD8_bank1 PA15 occurred.</td></tr>\n";
					error_status[11] = MACRO_UNFOUND;
				}
			}*/
		
			// current_test_item = 12*******************************************
			if(obj.value[29] !== undefined){ // PA30[7:4] VS PA30[3:0]
				tmp = parseInt(obj.value[29], 16);
				tmp_1 = (tmp & 0xF0) >> 4;
				tmp = (tmp & 0x0F);
				
				if(tmp_1 == tmp){
					if(error_status[12] == MACRO_NG){
						error_log[12] += "";
					}
					else{
						error_log[12] = "";
					}
					error_status[12] = MACRO_OK;
				}
				else{
					if(error_status[12] == MACRO_UNCHECK){
						error_log[12] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA30[7:4] 需等於 PA30[3:0].</td></tr> \n";
					}
					else{
						error_log[12] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA30[7:4] 需等於 PA30[3:0].</td></tr> \n";
					}
					error_status[12] = MACRO_NG;
				}
			}
			/*else{
				if(error_status[12] == MACRO_UNCHECK){
					//error_log[12] = "<tr><td></td><td>No 0xD8_bank1 PA30 occurred.</td></tr>\n";
					error_status[12] = MACRO_UNFOUND;
				}
			}*/
			
			// current_test_item = 13*******************************************
			if(obj.value[44] !== undefined){ // PA45[7:4] VS PA45[3:0]
				tmp = parseInt(obj.value[44], 16);
				tmp_1 = (tmp & 0xF0) >> 4;
				tmp = (tmp & 0x0F);
				
				if(tmp_1 == tmp){
					if(error_status[13] == MACRO_NG){
						error_log[13] += "";
					}
					else{
						error_log[13] = "";
					}
					error_status[13] = MACRO_OK;
				}
				else{
					if(error_status[13] == MACRO_UNCHECK){
						error_log[13] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA45[7:4] 需等於 PA45[3:0].</td></tr>\n";
					}
					else{
						error_log[13] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank1 PA45[7:4] 需等於 PA45[3:0].</td></tr>\n";
					}
					error_status[13] = MACRO_NG;
				}	
			}
			/*else{
				if(error_status[13] == MACRO_UNCHECK){
					//error_log[13] = "<tr><td></td><td>No 0xD8_bank1 PA45 occurred.</td></tr>\n";
					error_status[13] = MACRO_UNFOUND;
				}
			}*/
			
		}
		// item 4==============================================
		if(obj.name == "0xD8_bank2"){
			for(i = 0; i < 8 ;i++){
				// current_test_item = 14*******************************************
				if((obj.value.length > 15) && (obj.value[15] !== undefined)){ // PA1~8 with PA9~16
					if(obj.value[i] != obj.value[i+8]){
						if(error_status[14] == MACRO_UNCHECK){
							error_log[14] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank2 PA1~8 mismatch with PA9~16</td></tr>\n";
						}
						else{
							error_log[14] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank2 PA1~8 mismatch with PA9~16</td></tr>\n";
						}
						error_status[14] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[14] == MACRO_UNCHECK){
						//error_log[14] = "<tr><td></td><td>No 0xD8_bank2 PA1~16 occurred</td></tr>\n";
						error_status[14] = MACRO_UNFOUND;
					}
				}*/
			}
			if(error_status[14] == MACRO_UNCHECK){
				error_status[14] = MACRO_OK;
				error_log[14] = "";
			}
		}
		// item 5==============================================
		if(obj.name == "0xD8_bank3"){
			for(i = 0; i < 8 ;i++){
				
					// current_test_item = 15*******************************************
					// PA1~8 with PA9~16
					if((obj.value.length > 15) && (obj.value[15] !== undefined)){
						if(obj.value[i] != obj.value[i+8]){
							if(error_status[15] == MACRO_UNFOUND){
								error_log[15] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank3 PA1~8 mismatch with PA9~16</td></tr>\n";
							}
							else{
								error_log[15] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank3 PA1~8 mismatch with PA9~16</td></tr>\n";
							}
							error_status[15] = MACRO_NG;
						}
					}
					/*else{
						if(error_status[15] == MACRO_UNCHECK){
							//error_log[15] = "<tr><td></td><td>No 0xD8_bank3 PA1~16 occurred.</td></tr>\n";
							error_status[15] = MACRO_UNFOUND;
						}
					}*/
				
					// current_test_item = 16*******************************************
					// PA17~24 with PA25~32
					if((obj.value.length > 31) && (obj.value[31] !== undefined)){
						if(obj.value[i+16] != obj.value[i+24]){ 
							if(error_status[16] == MACRO_UNCHECK){
								error_log[16] = "<tr><td>"+(info_string)+"</td><td>0xD8_bank3 PA17~24 mismatch with PA25~32</td></tr>\n";
							}
							else{
								error_log[16] += "<tr><td>"+(info_string)+"</td><td>0xD8_bank3 PA17~24 mismatch with PA25~32</td></tr>\n";
							}
							error_status[16] = MACRO_NG;
						}
					}
					/*else{
						if(error_status[16] == MACRO_UNCHECK){
							//error_log[16] = "<tr><td></td><td>No 0xD8_bank3 PA17~32 occurred</td></tr>\n";
							error_status[16] = MACRO_UNFOUND;
						}
					}*/
				
			}
			
			if(error_status[15] == MACRO_UNCHECK){
				error_status[15] = MACRO_OK;
				error_log[15] = "";
			}
			if(error_status[16] == MACRO_UNCHECK){
				error_status[16] = MACRO_OK;
				error_log[16] = "";
			}
		}
		// item 6==============================================
		if(obj.name == "0xB2_bank1"){ 
			// current_test_item = 17*******************************************
			if(obj.value[0] !== undefined){
				var target_b2_bank1_pa1;
				if(Osc_parameter_json["IC_Type"] == 192){
					target_b2_bank1_pa1 = 0x06;
				}
				else{
					target_b2_bank1_pa1 = 0x00;
				}
				var pavalue = parseInt(obj.value[0], 16);
				//console.log(target_b2_bank1_pa1);
				//console.log(obj.value);
				if(pavalue == target_b2_bank1_pa1){
					if(error_status[17] == MACRO_UNCHECK){
						error_log[17] = "<tr><td>"+(info_string)+"</td><td>0xB2_bank1 PA1 can not be 0x"+target_b2_bank1_pa1.toString(16).padStart(2, 0)+"</td></tr>\n";
					}
					else{
						error_log[17] += "<tr><td>"+(info_string)+"</td><td>0xB2_bank1 PA1 can not be 0x"+target_b2_bank1_pa1.toString(16).padStart(2, 0)+"</td></tr>\n";
					}
					error_status[17] = MACRO_NG;
				}
				else{
					if(error_status[17] == MACRO_NG){
						error_log[17] += ""; 
					}
					else{
						error_log[17] += ""; // is shown check. stella modified
					}
					error_status[17] = MACRO_OK;
					
				}
			}
			/*else{
				if(error_status[17] == MACRO_UNCHECK){
					//error_log[17] = "<tr><td></td><td>No 0xB2_bank1 PA1 occurred.</td></tr>\n";
					error_status[17] = MACRO_UNFOUND;
				}
			}*/
		}
		// item 7 & 13 & 16 & 193:20==============================================
		if(obj.name == "0xC7_bank0"){
			if(error_status[18] < 0x08){ // current_test_item = 18
				// current_test_item = 18*******************************************
				if(obj.value[0] !== undefined){
					if(obj.value[0] == "0x32"){
						if(error_status[18] == MACRO_NG){
							error_log[18] += "";
						}
						else{
							error_log[18] = "";
						}
						error_status[18] = MACRO_OK;
					}
					else{
						if(error_status[18] == MACRO_UNFOUND || error_status[18] == MACRO_UNCHECK){
							error_log[18] = "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA1 should be 0x32.</td></tr>\n";
						}
						else{
							error_log[18] += "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA1 should be 0x32.</td></tr>\n";
						}
						error_status[18] = MACRO_NG;
					}
				}
				else{
					if(error_status[18] == MACRO_UNCHECK){
						//error_log[18] = "<tr><td></td><td>No 0xC7_bank0 PA1 0x32 occurred.</td></tr>\n";
						error_status[18] = MACRO_UNFOUND; // report NG when not found
					}
				}
			}
			
			// current_test_item = 19*******************************************
			if(Osc_parameter_json["IC_Type"] == 192){
				if(obj.value[2] !== undefined){ 
					if(obj.value[2] == "0x00"){
						if(error_status[19] == MACRO_NG){
							error_log[19] += "";
						}
						else{
							error_log[19] = "";
						}
						error_status[19] = MACRO_OK;
						
					}
					else{
						if(error_status[19] == MACRO_UNFOUND || error_status[19] == MACRO_UNCHECK){
							error_log[19] = "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA3 should be 0x00.</td></tr>\n";
						}
						else{
							error_log[19] += "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA3 should be 0x00.</td></tr>\n";
						}
						error_status[19] = MACRO_NG;
					}
				}
				else{
					if(error_status[19] == MACRO_UNCHECK){
						//error_log[19] = "<tr><td></td><td>No 0xC7_bank0 PA3 occurred.</td></tr>\n";
						error_status[19] = MACRO_UNFOUND;
					}
				}
			}
			else{ // skip checking on 193
				error_status[19] = MACRO_OK;
				error_log[19] = "";
			}
				
			// item 13============================================================================
			// current_test_item = 25*******************************************
			if(Osc_parameter_json["IC_Type"] == 192){
				if(ic_cut != 'A' && ic_cut != 'B'){
					if(obj.value[12] !== undefined){
						var tmp_cb = parseInt(obj.value[12],16);
						tmp_cb = tmp_cb & 0x02;
						if((ic_num == 1) && (tmp_cb == 0)){
							if(error_status[25] == MACRO_UNFOUND || error_status[25] == MACRO_UNCHECK){
								error_log[25] = "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA13 bit1 on CUT4 single IC should be set as 1</td></tr>\n";
							}
							else{
								error_log[25] += "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA13 bit1 on CUT4 single IC should be set as 1</td></tr>\n";
							}
							error_status[25] = MACRO_NG;
						}
						else if((ic_num == 2) && (tmp_cb == 0x02)){
							if(error_status[25] == MACRO_UNFOUND || error_status[25] == MACRO_UNCHECK){
								error_log[25] = "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA13 bit1 on CUT4 cascade IC should be set as 0</td></tr>\n";
							}
							else{
								error_log[25] += "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA13 bit1 on CUT4 cascade IC should be set as 0</td></tr>\n";
							}
							error_status[25] = MACRO_NG;
						}
						else if(ic_num == 0){
							error_log[25] = "<tr><td></td><td>Please double check 0xC7 bank0 PA13[1] on 192 CUT4. Single-IC: 1; Cascade-IC: 0.</td></tr>\n";
							error_status[25] = MACRO_NOINFO;
						}
						else{
							if(error_status[25] == MACRO_NG){
								error_log[25] += "";
							}
							else{
								error_log[25] = "";
							}
							error_status[25] = MACRO_OK; // pass
						}
					}
					else{
						if(error_status[25] == MACRO_UNCHECK){
							//error_log[25] = "<tr><td></td><td>No 0xC7_bank0 PA13 occurred.</td></tr>\n";
							error_status[25] = MACRO_UNFOUND;
						}
					}
				}
				else if(ic_cut == ""){
					error_log[25] = "<tr><td></td><td>Please double check 0xC7 bank0 PA13[1] on > 192 CUT4. Single-IC: 1; Cascade-IC: 0.</td></tr>\n";
					error_status[25] = MACRO_NOINFO;
				}
				else{
					error_status[25] = MACRO_OK;
					error_log[25] = "";
				}
			}
			// item 16==============================================
			// current_test_item = 16*******************************************
			if(obj.value[5] !== undefined){ 
				tmp = parseInt(obj.value[5], 16);
				tmp = (tmp >> 3)&0x01;
				if(tmp == 1){
					if(error_status[28] == MACRO_NG){
						error_log[28] += "";
					}
					else{
						error_log[28] = "";
					}
					error_status[28] = MACRO_OK; 
				}
				else{
					if(error_status[28] == MACRO_UNFOUND || error_status[28] == MACRO_UNCHECK){
						error_log[28] = "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA6[3] should be 1</td></tr>\n";
					}
					else{
						error_log[28] += "<tr><td>"+(info_string)+"</td><td>0xC7_bank0 PA6[3] should be 1</td></tr>\n";
					}
					error_status[28] = MACRO_NG;
				}
			}
			else{
				if(error_status[28] == MACRO_UNCHECK){
					//error_log[28] = "<tr><td></td><td>No 0xC7_bank0 PA6[3] setting occurred</td></tr>\n";
					error_status[28] = MACRO_UNFOUND; // report NG when not found
				}
			}
		}
		// item 20============================================================================
		// current_test_item = 34*******************************************
		if(Osc_parameter_json["IC_Type"] == 193){
			if((ic_cut == 'B') && obj.type == "Before pon workaround"){ // 0xC7_bank0
				//if(obj.value[13] !== undefined){ 
					if(Beforepon_193_item20_toggle==="0,1,0,"){
						error_status[34] = MACRO_OK; 
					}
					else{
						error_status[34] = MACRO_NG; 
						error_log[34] = "<tr><td>"+(info_string)+"</td><td>0xC7 bank0 PA14[1] (TCON_ECO3[1]) is not toggle</td></tr>\n";
					}
				
				//}
				//else{
				//	error_status[34] = MACRO_NG; 
				//	error_log[34] = "<tr><td></td><td>No 0xC7 bank0 PA14 setting occurred</td></tr>\n";
				//}
				
			}
			else{
				
			}
		}
		// item 8==============================================
		if(obj.name == "0xDA_bank1"){
			// current_test_item = 20*******************************************
			if((Osc_parameter_json["IC_Type"] == 193) || ((Osc_parameter_json["IC_Type"] == 192) && (ic_cut != "A" && ic_cut !="B")    )){
				if (obj.value[0]!== undefined){
					var tmp_item8 = parseInt(obj.value[0], 16);
					tmp_item8&=0x80;
					if(tmp_item8 == 0x00){
						if(error_status[20] == MACRO_UNCHECK){
							error_log[20] = "<tr><td>"+(info_string)+"</td><td>0xDA_bank1 PA1 bit[7] should be 1.</td></tr>\n";
						}
						else{
							error_log[20] += "<tr><td>"+(info_string)+"</td><td>0xDA_bank1 PA1 bit[7] should be 1.</td></tr>\n";
						}
						error_status[20] = MACRO_NG;
					}
					else{
						if(error_status[20] == MACRO_NG){
							error_log[20] += "";
						}
						else{
							error_log[20] = "";
						}
						error_status[20] = MACRO_OK;
					}
				}
				/*else{
					if(error_status[20] == MACRO_UNCHECK){
						//error_log[20] = "<tr><td></td><td>No 0xDA_bank1 PA1 occurred.</td></tr>\n";
						error_status[20] = MACRO_UNFOUND;
					}
				}*/
			}
			else if(((Osc_parameter_json["IC_Type"] == 192) && (ic_cut == ""))){
				error_log[20] = "<tr><td></td><td>Please double check 0xDA bank1 PA1[7] on > 192 CUT4. It should be 1 on 192 CUT4.</td></tr>\n";
				error_status[20] = MACRO_NOINFO;
			}
			else{
				// skip checking
				error_log[20] = "";
				error_status[20] = MACRO_OK;
			}
		}
		
		// item 9==============================================
		if(obj.name == "0xD5_bank0"){
			for(i=1; i<=59; i+=2){
				// current_test_item = 21*******************************************
				if((obj.value.length > 59) && (obj.value[59] !== undefined)){
					if(obj.value[i-1] != obj.value[i]){
						if(error_status[21] == MACRO_UNCHECK){
							error_log[21] = "<tr><td>"+(info_string)+"</td><td>0xD5_bank0 PA"+i+" is not equal to PA"+(i+1)+"</td></tr>\n";
						}
						else{
							error_log[21] += "<tr><td>"+(info_string)+"</td><td>0xD5_bank0 PA"+i+" is not equal to PA"+(i+1)+"</td></tr>\n";
						}
						error_status[21] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[21] == MACRO_UNCHECK){
						//error_log[21]= "<tr><td></td><td>No 0xD5_bank0 PA1~60 occurred</td></tr>\n";
						error_status[21] = MACRO_UNFOUND;
					}
				}*/
				
			}
			
			if(error_status[21] == MACRO_UNCHECK){
				error_status[21] = MACRO_OK;
				error_log[21] = "";
			}
		}
		// item 10==============================================
		if(obj.name == "0xD6_bank0"){
			for(i=1; i<=59; i+=2){
				// current_test_item = 22*******************************************
				if((obj.value.length > 59) && (obj.value[59] !== undefined)){
					if(obj.value[i-1] != obj.value[i]){
						if(error_status[22] == MACRO_UNCHECK){
							error_log[22] = "<tr><td>"+(info_string)+"</td><td>0xD6_bank0 PA"+i+" is not equal to PA"+(i+1)+"</td></tr>\n";
						}
						else{
							error_log[22] += "<tr><td>"+(info_string)+"</td><td>0xD6_bank0 PA"+i+" is not equal to PA"+(i+1)+"</td></tr>\n";
						}
						error_status[22] = MACRO_NG;
					}
				}
				/*else{
					if(MACRO_UNCHECK == error_status[22]){
						//error_log[22]= "<tr><td></td><td>No 0xD6_bank0 PA1~60 occurred</td></tr>\n";
						error_status[22] = MACRO_UNFOUND;
					}
				}*/
			}
			
			if(error_status[22] == MACRO_UNCHECK){
				error_status[22] = MACRO_OK;
				error_log[22] = "";
			}
		}
		// item 11==============================================
		if(obj.name == "0xD6_bank1"){
			// current_test_item = 23*******************************************
			for(i=0; i<4; i++){
				if((obj.value.length > 7) && (obj.value[7] !== undefined)){
					if(obj.value[i] != obj.value[i+4]){
						if(error_status[23] == MACRO_UNCHECK){
							error_log[23] = "<tr><td>"+(info_string)+"</td><td>0xD6_bank1 PA"+(i+1)+" is not equal to PA"+(i+4+1)+"</td></tr>\n";
						}
						else{
							error_log[23] += "<tr><td>"+(info_string)+"</td><td>0xD6_bank1 PA"+(i+1)+" is not equal to PA"+(i+4+1)+"</td></tr>\n";
						}
						error_status[23] = MACRO_NG;
					}
				}
				/*else{
					if(error_status[23] == MACRO_UNCHECK){
						//error_log[23] = "<tr><td></td><td>No 0xD6_bank1 PA1~8 occurred.</td></tr>\n";
						error_status[23] = MACRO_UNFOUND;
					}	
				}*/
			}
			
			if(error_status[23] == MACRO_UNCHECK){
				error_status[23] = MACRO_OK;
				error_log[23] = "";
			}
		}
		// item 12==============================================
		if(obj.name == "0xB2_bank0"){
			// current_test_item = 24*******************************************
			if(obj.value[25] !== undefined){
				if(ic_num == 1){
					if(obj.value[25] == "0x93"){
						if(error_status[24] == MACRO_NG){
							error_log[24] += "";
						}
						else{
							error_log[24] = "";
						}
						error_status[24] = MACRO_OK;
					}
					else{
						if(error_status[24] == MACRO_UNCHECK){
							error_log[24] = "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA26 should be 0x93 on single IC</td></tr>\n";
						}
						else{
							error_log[24]+= "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA26 should be 0x93 on single IC</td></tr>\n";
						}
						error_status[24] = MACRO_NG;
					}
				}
				else if(ic_num == 2){
					if(obj.value[25] == "0x92"){
						if(error_status[24] == MACRO_NG){
							error_log[24] += "";
						}
						else{
							error_log[24] = "";
						}
						error_status[24] = MACRO_OK;
					}
					else{
						if(error_status[24] == MACRO_UNCHECK){
							error_log[24] = "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA26 should be 0x92 on cascade IC</td></tr>\n";
						}
						else{
							error_log[24]+= "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA26 should be 0x92 on cascade IC</td></tr>\n";
						}
						error_status[24] = MACRO_NG;
					}
				}
				else{
					error_log[24] = "<tr><td>"+(info_string)+"</td><td>Please double check 0xB2 bank0 PA26. Single-IC: 0x93; Cascade-IC: 0x92.</td></tr>\n";
					error_status[24] = MACRO_NOINFO;
				}
			}
			/*else{
				if(error_status[24] == MACRO_UNCHECK){
					//error_log[24] = "<tr><td></td><td>No 0xB2_bank0 PA26 occurred.</td></tr>\n";
					error_status[24] = MACRO_UNFOUND;
				}
			}*/
			
			// item 17===========================================
			if(obj.value[24] !== undefined){
				var tmp_b2_b0_pa25 = parseInt(obj.value[24], 16);
				if(tmp_b2_b0_pa25&0x01){
					if(error_status[30] == MACRO_NG){
						error_log[30] += "";
					}
					else{
						error_log[30] = "";
					}
					error_status[30] = MACRO_OK;
				}
				else{
					if(error_status[30] == MACRO_UNCHECK){
						error_log[30] = "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA25[0] (hw_rst_blank_opt) should be 1</td></tr>\n";
					}
					else{
						error_log[30]+= "<tr><td>"+(info_string)+"</td><td>0xB2_bank0 PA25[0] (hw_rst_blank_opt) should be 1</td></tr>\n";
					}
					error_status[30] = MACRO_NG;
				}
			}
		}
		// item 13==============================================
		// 192 item 13 is on item 7 check..
		if((Osc_parameter_json["IC_Type"] == 193) && (obj.name == "0xCB_bank0")){
			// current_test_item = 25*******************************************
			if(obj.value[0] !== undefined){
				var tmp_cb = parseInt(obj.value[0], 16);
				tmp_cb = tmp_cb & 0x80;
				if( (ic_num == 1) && (tmp_cb == 0x80)){
					if(error_status[25] == MACRO_UNCHECK){
						error_log[25] ="<tr><td>"+(info_string)+"</td><td>0xCB_bank0 PA1[7] on single IC should be set as 0</td></tr>\n";
					}
					else{
						error_log[25] +="<tr><td>"+(info_string)+"</td><td>0xCB_bank0 PA1[7] on single IC should be set as 0</td></tr>\n";
					}
					error_status[25] = MACRO_NG;
				}
				else if((ic_num == 2) && (tmp_cb == 0x00)){
					if(error_status[25] == MACRO_UNCHECK){
						error_log[25] = "<tr><td>"+(info_string)+"</td><td>0xCB_bank0 PA1[7] on cascade IC should be set as 1</td></tr>\n";
					}
					else{
						error_log[25] += "<tr><td>"+(info_string)+"</td><td>0xCB_bank0 PA1[7] on cascade IC should be set as 1</td></tr>\n";
					}
					error_status[25] = MACRO_NG;
				}
				else if(ic_num == 0){
					error_log[25] = "<tr><td>"+(info_string)+"</td><td>Please double check 0xCB bank0 PA1[7]. Single-IC: 0; Cascade-IC: 1.</td></tr>\n";
					error_status[25] = MACRO_NOINFO;
				}
				else{
					if(error_status[25] == MACRO_NG){
						error_log[25] += "";
					}
					else{
						error_log[25] = "";
					}
					error_status[25] = MACRO_OK;
					
				}
			}
			/*else{
				if(error_status[25] == MACRO_UNCHECK){
					error_log[25] = "<tr><td></td><td>No 0xCB_bank0 PA1 occurred.</td></tr>\n";
					error_status[25] = MACRO_NG;
				}
			}*/
		}
		// item 14==============================================
		// current_test_item = 14*******************************************
		if(obj.name == "0xBC_bank0")	
		{
			if(obj.value[0] !== undefined){ 
				tmp = parseInt(obj.value[0], 16);
				
				if(tmp == 0x1D){
					if(error_status[26] == MACRO_NG){
						error_log[26] += "";
					}
					else{
						error_log[26] = "";
					}
					error_status[26] = MACRO_OK; 
				}
				else{
					if(error_status[26] == MACRO_UNCHECK){
						error_log[26] = "<tr><td>"+(info_string)+"</td><td>0xBC_bank0 PA1 should be 0x1D</td></tr>\n";
					}
					else{
						error_log[26] += "<tr><td>"+(info_string)+"</td><td>0xBC_bank0 PA1 should be 0x1D</td></tr>\n";
					}
					error_status[26] = MACRO_NG;
				}
			}
			/*else{
				if(error_status[26] == MACRO_UNCHECK){
					//error_log[26] = "<tr><td></td><td>No 0xBC_bank0 PA1 setting occurred</td></tr>\n";
					error_status[26] = MACRO_UNFOUND;
				}
			}*/
		}
		// item 16''==============================================
		// current_test_item = 16''*******************************************
		if(obj.name == "0xB4_bank0")	
		{
			if(obj.value[5] !== undefined){ 
				tmp = parseInt(obj.value[5], 16);
				tmp = (tmp >> 5)&0x01;
				if(tmp == 1){
					if(error_status[29] == MACRO_NG){
						error_log[29] += "";
					}
					else{
						error_log[29] = "";
					}
					error_status[29] = MACRO_OK; 
				}
				else{
					if(error_status[29] == MACRO_UNFOUND || error_status[29] == MACRO_UNCHECK){
						error_log[29] = "<tr><td>"+(info_string)+"</td><td>0xB4_bank0 PA6[5] should be 1</td></tr>\n";
					}
					else{
						error_log[29] += "<tr><td>"+(info_string)+"</td><td>0xB4_bank0 PA6[5] should be 1</td></tr>\n";
					}
					error_status[29] = MACRO_NG;
				}
			}
			else{
				if(error_status[29] == MACRO_UNCHECK){
					//error_log[29] = "<tr><td></td><td>No 0xB4_bank0 PA6[5] setting occurred</td></tr>\n";
					error_status[29] = MACRO_UNFOUND;
				}
			}
		}
		// item 18, 19 , 23 for 193================================================
		if(obj.name == "0xE7_bank0" && (Osc_parameter_json["IC_Type"] == 193))	
		{
			if(obj.value[20] !== undefined){ 
				tmp = parseInt(obj.value[20], 16);
				var i_tmp = tmp & 0x03;
				if(i_tmp == 3){
					if(error_status[31] == MACRO_NG){
						error_log[31] += "";
					}
					else{
						error_log[31] = "";
					}
					error_status[31] = MACRO_OK; 
				}
				else{
					if(error_status[31] == MACRO_UNFOUND || error_status[31] == MACRO_UNCHECK){
						error_log[31] = "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA21[1:0] (TP_CTRL_OPT[25:24]) should be 11</td></tr>\n";
					}
					else{
						error_log[31] += "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA21[1:0] (TP_CTRL_OPT[25:24]) should be 11</td></tr>\n";
					}
					error_status[31] = MACRO_NG;
				}
				//=============================
				if(ic_cut == "A" || ic_cut == 'B'){
					i_tmp = (tmp >> 5) & 0x03;
					if(i_tmp == 0){
						if(error_status[32] == MACRO_NG){
							error_log[32] += "";
						}
						else{
							error_log[32] = "";
						}
						error_status[32] = MACRO_OK; 
					}
					else{
						if(error_status[32] == MACRO_UNFOUND || error_status[32] == MACRO_UNCHECK){
							error_log[32] = "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA21[6:5] (TP_CTRL_OPT[30:29]) should be 00</td></tr>\n";
						}
						else{
							error_log[32] += "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA21[6:5] (TP_CTRL_OPT[30:29]) should be 00</td></tr>\n";
						}
						error_status[32] = MACRO_NG;
					}
				}
			}
			/*else{
				if(error_status[31] == MACRO_UNCHECK){
					error_status[31] = MACRO_UNFOUND;
				}
				
				if(error_status[32] == MACRO_UNCHECK){
					error_status[32] = MACRO_UNFOUND;
				}
			}*/
			////////////////////////////////////////
			if(ic_cut == "A" || ic_cut == 'B'){
				if(obj.value[44] !== undefined ){ 
					tmp = parseInt(obj.value[44], 16);
					tmp = tmp & 0x0F;
					if(tmp == 0){
						if(error_status[33] == MACRO_NG){
							error_log[33] += "";
						}
						else{
							error_log[33] = "";
						}
						error_status[33] = MACRO_OK; 
					}
					else{
						if(error_status[33] == MACRO_UNFOUND || error_status[33] == MACRO_UNCHECK){
							error_log[33] = "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA45[3:0] (EMI_SUPPRESSION_FREQ[3:0]) should be 0000</td></tr>\n";
						}
						else{
							error_log[33] += "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA45[3:0] (EMI_SUPPRESSION_FREQ[3:0]) should be 0000</td></tr>\n";
						}
						error_status[33] = MACRO_NG;
					}
				}
				/*else{
					
					if(error_status[33] == MACRO_UNCHECK){
						error_status[33] = MACRO_UNFOUND;
					}
				}*/
			}
			//////////////////////////////////////////////////////
			// item 23
			if(ic_cut == 'C'){
				if(obj.value[23] !== undefined ){ 
					tmp = parseInt(obj.value[23], 16);
					tmp = tmp & 0x02;
					if(tmp){
						if(error_status[37] == MACRO_NG){
							error_log[37] += "";
						}
						else{
							error_log[37] = "";
						}
						error_status[37] = MACRO_OK; 
					}
					else{
						if(error_status[37] == MACRO_UNFOUND || error_status[33] == MACRO_UNCHECK){
							error_log[37] = "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA24[1] (TP_CTRL_OPT[1] should be 1</td></tr>\n";
						}
						else{		
							error_log[37] += "<tr><td>"+(info_string)+"</td><td>0xE7_bank0 PA24[1] (TP_CTRL_OPT[1] should be 1</td></tr>\n";
						}
						error_status[37] = MACRO_NG;
					}
				}
				/*else{
					
					if(error_status[37] == MACRO_UNCHECK){
						error_status[37] = MACRO_UNFOUND;
					}
				}*/
			}
			
		}
		// item 21 for 193================================================
		if(obj.name == "0xC0_bank2" && (Osc_parameter_json["IC_Type"] == 193) && (ic_cut == "A" || ic_cut == 'B' || ic_cut == 'C'))
		{
			if(obj.value[5] !== undefined){ 
				tmp = parseInt(obj.value[5], 16);
				if(tmp & 0x80){
					error_log[35] = "<tr><td>"+(info_string)+"</td><td>0xC0_bank2 PA6[7](ENPD) should be 0</td></tr>\n";
					
					error_status[35] = MACRO_NG;
				}
				else{
					error_status[35] = MACRO_OK;
				}
			}
			else{
				if(error_status[35] == MACRO_UNCHECK){
					error_log[35] = "<tr><td></td><td>No 0xC0_bank2 PA6[7](ENPD) setting occurred</td></tr>\n";
					error_status[35] = MACRO_UNFOUND;
				}
			}
		}
		// 192: item18; 193: item 22=================================================
		if(obj.name == "0xB2_bank3"){
			if(obj.value[0] !== undefined){ 
				tmp = parseInt(obj.value[0], 16);
				tmp = (tmp >> 4)&0x0F;
				if(tmp == 1 || tmp == 3 || tmp == 5 || tmp == 7 || tmp == 9 || tmp == 11){
					error_log[36] = "<tr><td>"+(info_string)+"</td><td>0xB2_bank3 PA1[7:4](FRM_PATTERN_CYCLE[3:0]) should not be 1/3/5/7/9/B.</td></tr>\n";
					
					error_status[36] = MACRO_NG;
				}
				else{
					error_status[36] = MACRO_OK;
					error_log[36]="";
				}
			}
			else{
				if(error_status[36] == MACRO_UNCHECK){
					//error_log[36] = "<tr><td></td><td>No 0xB2_bank3 PA1[7:4] setting occurred</td></tr>\n";
					error_status[36] = MACRO_UNFOUND;
				}
			}
		}
		
	});
	
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

$(document).ready(function(){
	$("#dd_init_clear").click(function(){
		$('.dd_osc').text("");
		$('#dd_initial').val("");
	});
	$("#dd_init_enter").click(function(){
		console.log("Dd initial code button pressed...");
		
		var dd_paste = $('#dd_initial').val().split('\n');
		Dd_init_to_json(dd_paste, 0);
	});
	$("#update_scclk1").click(function(){
		Update_scclk2(1);
	});	
	Create_dd_osc_table();
	
	Dd_osc_cal();
	
	var isfill = $('.osc_table_oem').attr('isfill');
	if(isfill == '1'){
		//console.log('h');
		Update_dd_osc_table();
	}
	
	$('.dd_checker_result').css('display', 'none');
});