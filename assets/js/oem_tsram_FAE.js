var IC_type;
var IC_mapping_type;
var Mapping_array = [];
//=====================================
var Tsram_192_ADC_EN_bit = 4;
var Tsram_193_ADC_EN_bit = 6;
var Tsram_192_word = 10;
var Tsram_193_word = 16;
var Tsram_192_YIN_L_offset = 20;
var Tsram_192_YIN_R_offset = 24;
var Tsram_193_YIN_L_offset = 22;
var Tsram_193_YIN_R_offset = 26;
var Tsram_192_ADC_COUNT = 120;
var Tsram_193_ADC_COUNT = 180;

var Tsram_192_fisrt_word_frame0 = 0x081F0000;
var Tsram_192_fisrt_word_frame1 = 0x042F0000;
var Tsram_192_fisrt_word_frame2 = 0x024F0000;
var Tsram_192_fisrt_word_frame3 = 0x018F0000;

var Tsram_193_fisrt_word_frame0 = 0xE0700000;
var Tsram_193_fisrt_word_frame1 = 0xD0B00000;
var Tsram_193_fisrt_word_frame2 = 0xC9300000;
var Tsram_193_fisrt_word_frame3 = 0xC6300000;

var Tsram_x_word_frame0, Tsram_x_word_frame1, Tsram_x_word_frame2, Tsram_x_word_frame3;
//=====================================
var Tsram_word_192 = [
	{
		/*word 00*/ 
		/*"name": ["ADC_EN_L", "ADC_EN_R", "TCS_L", "TCS_R", "TBS_L","TBS_R","LFD_EN_L", "LFD_EN_R", "YIN_L", "YIN_R", "TEN_L", "TEN_R"],
		"length": [4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 1, 1],*/
		"adc_en_l": [0],
		"value": "0"
	},
	{
		/*word 01*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "TCS_L", "TCS_R", "ADC_EN_L", "ADC_EN_R", "TCS_L", "TCS_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 16],
		value: "0",
	},
	{
		/*word 02*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "TCS_L", "TCS_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 16, 24],
		value: "0",
	},
	{
		/*word 03*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 8, 16, 24],
		value: "0",
	},
	{
		/*word 04*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 8, 16, 24],
		value: "0",
	},
	{
		/*word 05*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 8, 16, 24],
		value: "0",
	},
	{
		/*word 06*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 8, 16, 24],
		value: "0",
	},
	{
		/*word 07*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 8, 16, 24],
		value: "0",
	},
	{
		/*word 08*/ 
		/*name: ["ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R", "ADC_EN_L", "ADC_EN_R"],
		length: [4, 4, 4, 4, 4, 4, 4, 4],*/
		"adc_en_l": [0, 8, 16, 24],
		value: "0",
	},
	{
		//word 09
		/*name: ["BANK_SEL_LSB_L", "BANK_SEL_LSB_R", "BANK_SEL_H_L", "BANK_SEL_H_R"],
		length: [2,2,2,2],*/
		"adc_en_l": [-1],
		value: "0",
	}
	/*word 09 --> all 0s*/ 
];
var Tsram_word_193 = [
	{
		/*word 00*/ 
		"adc_en_l": [0],
		"value": "0"
	},
	{
		/*word 01*/ 
		"adc_en_l": [0],
		value: "0",
	},
	{
		/*word 02*/ 
		"adc_en_l": [0, 20],
		value: "0",
	},
	{
		/*word 03*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 04*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 05*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 06*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 07*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 08*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 08*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 09*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 10*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 11*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 12*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 13*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 14*/ 
		"adc_en_l": [0, 12],
		value: "0",
	},
	{
		/*word 15*/ 
		"adc_en_l": [0, 12],
		value: "0",
	}
];
//=====================================
function TSRAM_ADC_Show(yin_l_offset, yin_r_offset, tsram_word_size, tsram_adc_en_shift, tsram_adc_count,Tsram_array, updatecal){
	var lines, content,tmp ,buffer = '';
	var i = 0, j = 0, k = 0, kc = 0, index = 0,tsram_word = 0, cycle = 0, isfirst = 0, padding_ff = 0;
	var adc_class, current_td_id;
	var yin_mux_l = 0, yin_mux_r = 0;

	var tsram_content = $('#tsram_adc_calculate').val(); 
	
	var TSRAM_ADC_L_CC = [];
	var TSRAM_ADC_R_CC = [];
	$('#tsram_adc_result').val("");
	lines = tsram_content.split('\n');

	for(i = 0; i < lines.length;i++){
		content = lines[i].split('	');
		for(j = 0; j < content.length; j++){
			tmp = $.trim(content[j]); 
			buffer = tmp+buffer;
			
			if(index == 3){
				index = 0;
				Tsram_array[tsram_word]["value"] = buffer; //console.log("stella tsrame_word "+tsram_word+" is "+buffer);
				
				if(updatecal == 1){
					// Update tsram calculate result...
					Update_tp_init_code_Format(buffer);
				}
				
				// Get mux information====================
				if(isfirst == 0){
					var tmp_yin = parseInt(buffer, 16);
					yin_mux_l = ((tmp_yin >> yin_l_offset ) & 0x0F); //console.log(yin_mux_l);
					yin_mux_r = ((tmp_yin >> yin_r_offset ) & 0x0F); //console.log(yin_mux_r);
					isfirst = 1;
					
				}
				//=======================================
				// Find Left/Right=======================
				$.each( Tsram_array[tsram_word]["adc_en_l"] , function( key, value ) {
					if(value == -1){
						
					}
					else{
						var tsram_and_value = 0;
						var tsram_value = parseInt(buffer, 16);
						if(IC_type == 192){
							tsram_and_value = 0x0F; // 4-bit
						}
						else{
							tsram_and_value = 0x3F; // 6-bit
						}
						var ttt = (tsram_value >> value)&tsram_and_value; 
						var ttt_r = (tsram_value >> (value+tsram_adc_en_shift))&tsram_and_value; 
						
						for(k = 0; k < tsram_adc_en_shift; k++){ // there is 4/6-bit in ADC_EN
							if(((ttt >> k ) & 0x01)== 1){
								TSRAM_ADC_L_CC.push(1);
							}
							else{
								TSRAM_ADC_L_CC.push(0);
							}
							
							if(((ttt_r >> k ) & 0x01)== 1){
								TSRAM_ADC_R_CC.push(1);
							}
							else{
								TSRAM_ADC_R_CC.push(0);
							}
						}
						//console.log("word "+tsram_word+" adc_en_l is "+ttt); // adc_en_l
					}
				});
				//=======================================
				//=======================================
				tsram_word++;
				buffer = '';
				
			}
			else{
				index++;
			}
			
			if(tsram_word == tsram_word_size){
				// Show ADC_EN....
				tsram_word = 0; // Show next cycle
				//================================
				// Show mux data
				var l_adc_num = 0, r_adc_num = 0;
				var muxdata_l = '', muxdata_r = '';
				var original_data = $('#tsram_adc_result').val();
				//original_data += "\n";

				// Show Left=======================================
				for(k = 0; k< TSRAM_ADC_L_CC.length; k++){
					if(TSRAM_ADC_L_CC[k] == 1){
						//console.log("ADC "+k+" is on");
						//muxdata_l = muxdata_l+k+', ';
						muxdata_l= muxdata_l + "0x"+((k&0xFF).toString(16).padStart(2, "0"))+", ";
						muxdata_l= muxdata_l + "0x"+(((k >> 8)&0xFF).toString(16).padStart(2, "0"))+", ";
						
						l_adc_num++;
						if(yin_mux_l == 1){
							current_td_id = '#mux0_color'+ "_"+k;
						}
						else if(yin_mux_l == 2){
							current_td_id = '#mux1_color'+ "_"+k;
						}
						else if(yin_mux_l == 4){
							current_td_id = '#mux2_color'+ "_"+k;
						}
						else if(yin_mux_l == 8){
							current_td_id = '#mux3_color'+ "_"+k;
						}
						adc_class = "frame"+cycle+'_color';
						$(current_td_id).addClass(adc_class);
						$(current_td_id).attr("frame", cycle);
					}

				}
				//Fill out 0xFFFF for unsed adc....................
				padding_ff = (((TSRAM_ADC_L_CC.length) / 2) - l_adc_num);
				if(padding_ff > 0){
					//muxdata_l+='\n';
					for(kc = 0; kc < padding_ff; kc++){
						//muxdata_l+='0xFFFF, ';
						muxdata_l+='0xFF, 0xFF, ';
					}
				}
				//.................................................
				
				// Show Right=======================================
				// The scan become 0123 0123. Thus, the mux is reversed.
				for(k = 0; k< TSRAM_ADC_R_CC.length; k++){
					if(TSRAM_ADC_R_CC[k] == 1){
						//muxdata_r = muxdata_r+(k+tsram_adc_count)+', ';
						muxdata_r= muxdata_r + "0x"+(((k+tsram_adc_count)&0xFF).toString(16).padStart(2, "0"))+", ";
						muxdata_r= muxdata_r + "0x"+((((k+tsram_adc_count) >> 8)&0xFF).toString(16).padStart(2, "0"))+", ";
						
						r_adc_num++;
						
						if(yin_mux_r == 1){
							current_td_id = '#mux0_color'+ "_"+(k+tsram_adc_count);
							adc_class = "frame"+(cycle)+'_color';
						}
						else if(yin_mux_r == 2){
							current_td_id = '#mux1_color'+ "_"+(k+tsram_adc_count);
							adc_class = "frame"+(cycle)+'_color';
						}
						else if(yin_mux_r == 4){
							current_td_id = '#mux2_color'+ "_"+(k+tsram_adc_count);
							adc_class = "frame"+(cycle)+'_color';
						}
						else if(yin_mux_r == 8){
							current_td_id = '#mux3_color'+ "_"+(k+tsram_adc_count);
							adc_class = "frame"+(cycle)+'_color';
						}
						/*var cycle_r;
						if(yin_mux_r == 1){
							current_td_id = '#mux3_color'+ "_"+(k+120);
							cycle_r = cycle-3;
							adc_class = "frame"+(cycle_r)+'_color';
						}
						else if(yin_mux_r == 2){
							current_td_id = '#mux2_color'+ "_"+(k+120);
							cycle_r = cycle-1;
							adc_class = "frame"+(cycle_r)+'_color';
						}
						else if(yin_mux_r == 4){
							current_td_id = '#mux1_color'+ "_"+(k+120);
							cycle_r = cycle+1;
							adc_class = "frame"+(cycle_r)+'_color';
						}
						else if(yin_mux_r == 8){
							current_td_id = '#mux0_color'+ "_"+(k+120);
							cycle_r = cycle+3;
							adc_class = "frame"+(cycle_r)+'_color';
						}*/
					
						$(current_td_id).addClass(adc_class);
						$(current_td_id).attr("frame", cycle);
					}

				}
				//Fill out 0xFFFF for unsed adc....................
				padding_ff = (((TSRAM_ADC_R_CC.length) / 2) - r_adc_num);
				if(padding_ff > 0){
					//muxdata_r+='\n';
					for(kc = 0; kc < padding_ff; kc++){
						//muxdata_r+='0xFFFF, ';
						muxdata_r+='0xFF, 0xFF, ';
					}
				}
				//.................................................
				//====================================================
				//var muxdata = '';
				//muxdata+="//Mux L" + yin_mux_l+"(Frame "+cycle+"), ADC_EN_num is "+l_adc_num+"\n";
				//muxdata+=muxdata_l+"\n";
				//muxdata+="//Mux R" + yin_mux_r+"(Frame "+cycle+"), ADC_EN num is "+r_adc_num+"\n";
				//muxdata+=muxdata_r+"\n";

				//var muxdata = "Mux L "+yin_mux_l + "/ Mux R "+yin_mux_r+"\n"+muxdata;
				//$('#tsram_adc_result').val(original_data+muxdata);
				//================================
				$('#tsram_adc_result').val(original_data+muxdata_l+muxdata_r);
				//================================
				cycle++;
				TSRAM_ADC_L_CC = [];
				TSRAM_ADC_R_CC = [];
				isfirst = 0;
			}
		}
	}
}

//=====================================================================
// Vertical Mapping
//=====================================================================
function Show_mapping_table_Vertical(){
	var tx, rx, mux0_num, mux1_num, mux2_num, mux3_num, current_index;
	var mux0_num_l, mux1_num_l, mux2_num_l, mux3_num_l, mux0_num_r, mux1_num_r, mux2_num_r, mux3_num_r;
	var i, j, lines, tmp, buffer, content, tmp1, tmp2;
	var mux_class = '';
	var mapping_table = $('#mapping_table').val();
	tx = parseInt($("input[name='m_tx']").val(), 10);
	rx = parseInt($("input[name='m_rx']").val(), 10);
	
	//=========================================================
	mux0_num = $("input[name='m_mux0']").val().split('/');
	mux1_num = $("input[name='m_mux1']").val().split('/');
	mux2_num = $("input[name='m_mux2']").val().split('/');
	mux3_num = $("input[name='m_mux3']").val().split('/');
	
	mux0_num_l = parseInt(mux0_num[0], 10);
	mux1_num_l = parseInt(mux1_num[0], 10);
	mux2_num_l = parseInt(mux2_num[0], 10);
	mux3_num_l = parseInt(mux3_num[0], 10);
	
	//console.log(mux0_num.length);
	if(mux0_num.length == 2){
		mux0_num_r = parseInt(mux0_num[1], 10);
	}
	else{
		mux0_num_r = mux0_num_l;
	}
	if(mux1_num.length == 2){
		mux1_num_r = parseInt(mux1_num[1], 10);
	}
	else{
		mux1_num_r = mux1_num_l;
	}
	if(mux2_num.length == 2){
		mux2_num_r = parseInt(mux2_num[1], 10);
	}
	else{
		mux2_num_r = mux2_num_l;
	}
	if(mux3_num.length == 2){
		mux3_num_r = parseInt(mux3_num[1], 10);
	}
	else{
		mux3_num_r = mux3_num_l;
	}
	//=========================================================
	
	Mapping_array = [];
	
	//code format===============================
	//lines = mapping_table.split('\n');
	//for(i = 0; i < lines.length;i++){
	//	content = lines[i].split(',');
	//	for(j = 0; j < content.length; j++){
	//		tmp = parseInt($.trim(content[j]), 10); 
	//		if(!isNaN(tmp)){
	//			Mapping_array.push(tmp);
	//		}			
	//	}
	//}
	//bin format=====================================
	console.log(IC_type);
	content = mapping_table.split(',');
	if(IC_type == 192){ // one-byte per adc
		for(i = 0; i < (tx*rx);i++){
			tmp = parseInt($.trim(content[i]), 16); 
			if(!isNaN(tmp)){
				Mapping_array.push(tmp);
			}			
			
		}
	}
	else{ // 193 --> // two-byte per adc
		for(i = 0; i < (2*tx*rx);i+=2){
			tmp1  = ($.trim(content[i+1]).substr(2));
			tmp2  = ($.trim(content[i]).substr(2));
			//console.log(tmp1+ tmp2);
			tmp = parseInt(tmp1+ tmp2, 16); 
			//console.log(tmp);
			
			if(!isNaN(tmp)){
				Mapping_array.push(tmp); 
			}			
			
		}
	}
	
	//==========================================
	
	var html_table='<table class="mapping_table">'+'\n';
	for(i = 0; i< rx; i++){
		html_table+='<tr>'+'\n';
		for(j = 0; j < tx; j++){
			if(j < mux0_num_l){
				mux_class = 'mux0_color';
			}
			else if(j < (mux0_num_l+mux1_num_l)){
				mux_class = 'mux1_color';
			}
			else if(j < (mux0_num_l+mux1_num_l+mux2_num_l)){
				mux_class = 'mux2_color';
			}
			else if(j < (mux0_num_l+mux1_num_l+mux2_num_l+mux3_num_l)){
				mux_class = 'mux3_color';
			}
			else if(j < (mux0_num_l+mux1_num_l+mux2_num_l+mux3_num_l+mux3_num_r)){
				mux_class = 'mux3_color';
			}
			else if(j < (mux0_num_l+mux1_num_l+mux2_num_l+mux3_num_l+mux3_num_r+mux2_num_r)){
				mux_class = 'mux2_color';
			}
			else if(j < (mux0_num_l+mux1_num_l+mux2_num_l+mux3_num_l+mux3_num_r+mux2_num_r+mux1_num_r)){
				mux_class = 'mux1_color';
			}
			else{
				mux_class = 'mux0_color';
			}
			current_index = Mapping_array[j*rx+i];
			html_table+='<td class="'+mux_class+'" id="'+mux_class+'_'+current_index+'">'+current_index+'</td>'+'\n';
		}
		html_table+='</tr>'+'\n';
	}
	html_table+='</table>'+'\n';
	$('#mapping_table_result').html(html_table);
	
	$('#tsram_adc_calculate_format').val("");
	var result_content = '';
	// Cycle 6 --> YIN_L: mux0, YIN_R: mux 3 ()
	result_content = Show_Cycle_Tsram_Vertical(mux0_num_l, mux3_num_r, 0, (mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame0, 0, 60);
	// Cycle 7 --> YIN_L: mux1, YIN_R: mux 2 ()
	result_content += Show_Cycle_Tsram_Vertical(mux1_num_l, mux2_num_r, (mux0_num_l)*rx, (mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame1, 0, 70);
	// Cycle 8 --> YIN_L: mux2, YIN_R: mux 1 ()
	result_content += Show_Cycle_Tsram_Vertical(mux2_num_l, mux1_num_r, (mux0_num_l+mux1_num_l)*rx, (mux2_num_r+mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame2, 0, 80);
	// Cycle 9 --> YIN_L: mux3, YIN_R: mux 0 ()
	result_content += Show_Cycle_Tsram_Vertical(mux3_num_l, mux0_num_r, (mux0_num_l+mux1_num_l+mux2_num_l)*rx, (mux1_num_r+mux2_num_r+mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame3, 0, 90);
	
	// Cycle 10 --> YIN_L: mux0, YIN_R: mux 3 () --> reverse cycle 6
	result_content += Show_Cycle_Tsram_Vertical(mux0_num_l, mux3_num_r, 0, (mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame0, 1, 100);
	// Cycle 11 --> YIN_L: mux1, YIN_R: mux 2 () --> reverse cycle 7
	result_content += Show_Cycle_Tsram_Vertical(mux1_num_l, mux2_num_r, (mux0_num_l)*rx, (mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame1, 1, 110);
	// Cycle 12 --> YIN_L: mux2, YIN_R: mux 1 () --> reverse cycle 8
	result_content += Show_Cycle_Tsram_Vertical(mux2_num_l, mux1_num_r, (mux0_num_l+mux1_num_l)*rx, (mux2_num_r+mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame2, 1, 120);
	// Cycle 13 --> YIN_L: mux3, YIN_R: mux 0 () --> reverse cycle 9
	result_content += Show_Cycle_Tsram_Vertical(mux3_num_l, mux0_num_r, (mux0_num_l+mux1_num_l+mux2_num_l)*rx, (mux1_num_r+mux2_num_r+mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_frame3, 1, 130);
	
	$('#tsram_adc_calculate').val(result_content);
	//==========================================
	//==========================================
}

function Show_Cycle_Tsram_Vertical(mux_l_num, mux_r_num, mapping_offset_l, mapping_offset_r, rx, firstword, c_frame, tsram_index_start){//(mux_num, tx, rx, offset){
	var i = 0, j = 0;
	//Fill_TSRAM_by_Mapping===
	var TSRAM_ADC_EN = [];
	var tsram_word_value = [];
	if(IC_type == 192){
		TSRAM_ADC_EN.length = (2*Tsram_192_ADC_COUNT); // left and right
		tsram_word_value.length = Tsram_192_word;
	}
	else{
		TSRAM_ADC_EN.length = (2*Tsram_193_ADC_COUNT); // left and right
		tsram_word_value.length = Tsram_193_word;
	}
	//===========================
	// Default: 0123 0123====
	var mapping_index = 0, adc_count = 0, changeline = 0;
	var c_frame_backup = c_frame;
	var result_content = '';
	
	var even_rx = 0;
	if((rx%2) == 0){
		even_rx = 1;
	}
	else{
		even_rx = 0;
	}
	
	// Fill out left=================================
	for(i = mapping_offset_l; i< (mapping_offset_l+mux_l_num*rx); i++){ // one mux_only
		mapping_index = Mapping_array[i];
		
		if((changeline == 1) && (even_rx == 1)){
			c_frame^=0x01;
			changeline = 0;
		}
		c_frame^=0x01;
		
		TSRAM_ADC_EN[mapping_index] = c_frame;
		adc_count++;
		
		if((adc_count % rx) == 0){
			changeline = 1;
		}
	}
	// Fill out Right=================================
	c_frame = c_frame_backup;
	changeline = 0;
	adc_count = 0;
	for(i = (mapping_offset_r+(mux_r_num*rx) -1); i>=(mapping_offset_r); i--){ // one mux_only
		mapping_index = Mapping_array[i]; 
		
		if((changeline == 1) && (even_rx == 1)){
			c_frame^=0x01;
			changeline = 0;
		}
		c_frame^=0x01;
		
		TSRAM_ADC_EN[mapping_index] = c_frame; //console.log("index "+mapping_index+" is "+c_frame);
		adc_count++;
		
		if((adc_count % rx) == 0){
			changeline = 1;
		}
		
	}	
	//=================================================
	//console.log(TSRAM_ADC_EN);
	//=================================================
	var get_index = 0, tmp_index = 0;	
	// Calcaulate TSRAM setting
	if(IC_type == 192){
		for(j = 0; j < TSRAM_ADC_EN.length; j+=4){
			var tmp_tsram = 0;
			tmp_tsram = (TSRAM_ADC_EN[j] | (TSRAM_ADC_EN[j+1]<< 1) | (TSRAM_ADC_EN[j+2] << 2) | (TSRAM_ADC_EN[j+3] << 3));
			
			if(j > (Tsram_192_ADC_COUNT-1)){ // is right
				tmp_tsram  = (tmp_tsram << Tsram_192_ADC_EN_bit);
			}
			//console.log("ADC_EN_L["+(j+3)+":"+j+"] is 0x"+tmp_tsram.toString(16));

			if((j%Tsram_192_ADC_COUNT) == 0){ // ADC3~0
				get_index = 0;
				tsram_word_value[0] |= (tmp_tsram|firstword); //console.log(tsram_word_value[0].toString(16));
			}
			else if((j%Tsram_192_ADC_COUNT) == 4){ //ADC7-4
				tsram_word_value[1] |= (tmp_tsram);
			}
			else if((j%Tsram_192_ADC_COUNT) == 8){ // ADC11~8 
				tsram_word_value[1] |= (tmp_tsram << 16);
			}
			else if((j%Tsram_192_ADC_COUNT) == 12){ //ADC15-12
				tsram_word_value[2] |= (tmp_tsram);
			}
			else if((j%Tsram_192_ADC_COUNT) == 16){ // ADC19~16 
				tsram_word_value[2] |= (tmp_tsram << 16); //console.log(tsram_word_value[2].toString(16));
			}
			else if((j%Tsram_192_ADC_COUNT) == 20){ // ADC23~20 
				tsram_word_value[2] |= (tmp_tsram << 24);
				tsram_word_value[2]>>>=0;
			}
			else{
				tsram_word_value[(3+get_index)] |= (tmp_tsram << (tmp_index*8));
				tsram_word_value[(3+get_index)]>>>=0;
				
				tmp_index++;
				if(tmp_index == 4){
					tmp_index = 0;
					get_index++;
				}
			}
		}	
	}
	else{ // 193
		for(j = 0; j < TSRAM_ADC_EN.length; j+=6){ 
			var tmp_tsram = 0;
			tmp_tsram = (TSRAM_ADC_EN[j] | (TSRAM_ADC_EN[j+1]<< 1) | (TSRAM_ADC_EN[j+2] << 2) | (TSRAM_ADC_EN[j+3] << 3)
							| (TSRAM_ADC_EN[j+4] << 4) | (TSRAM_ADC_EN[j+5] << 5)
						);
			
			if(j > (Tsram_193_ADC_COUNT-1)){ // is right
				tmp_tsram  = (tmp_tsram << Tsram_193_ADC_EN_bit);
			}
			//console.log("ADC_EN_L["+(j+5)+":"+j+"] is 0x"+tmp_tsram.toString(16));

			if((j%Tsram_193_ADC_COUNT) == 0){
				get_index = 0;
				tsram_word_value[0] |= (tmp_tsram|firstword); //console.log(firstword.toString(16));
				tsram_word_value[0]>>>=0; //console.log(tsram_word_value[0].toString(16));
			}
			else if((j%Tsram_193_ADC_COUNT) == 6){ 
				tsram_word_value[1] |= (tmp_tsram | 0x300000);
				tsram_word_value[1]>>>=0;
			}
			else if((j%Tsram_193_ADC_COUNT) == 12){ 
				tsram_word_value[2] |= (tmp_tsram);
			}
			else if((j%Tsram_193_ADC_COUNT) == 18){
				tsram_word_value[2] |= (tmp_tsram << 20);
				tsram_word_value[2]>>>=0;
			}
			else{	
				tsram_word_value[(3+get_index)] |= (tmp_tsram << (tmp_index*12));
				tsram_word_value[(3+get_index)]>>>=0;
				
				tmp_index++;
				if(tmp_index == 2){
					tmp_index = 0;
					get_index++;
				}
			}
		}		
	}
	//console.log(tsram_word_value);
	
	// Show tsram result============================================================================
	var tsram_word = 0, debug_print = 0;
	if(IC_type == 192){
		tsram_word = Tsram_192_word; 
		debug_print = 8;
	}
	else{
		tsram_word = Tsram_193_word; 
		debug_print = Tsram_193_word;
	}
	
	var kk = 0;
	// Show TSRAM value with tp init code format.....
	//var format_index = 60; // from 60~139
	var format_tsram = $('#tsram_adc_calculate_format').val();
	// Code format==================================
	//if(IC_type == 192){
	//	for(kk = 0; kk < (tsram_word-1); kk++){
	//		format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
	//	}
	//	format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x00000000 ,'+'\n';
	//}
	//else{
	//	var hex_index = (tsram_index_start/10)*16;
	//	for(kk = 0; kk < tsram_word; kk++){
	//		format_tsram+= '		/*  *(&AHB_TSRAM_WORD+0x'+(hex_index.toString(16))+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
	//		hex_index++;
	//	}
	//}
	//format_tsram+='\n';
	//$('#tsram_adc_calculate_format').val(format_tsram);
	
	
	// For debug============================================================================
	for(kk = 0; kk < debug_print; kk+=4){
		result_content+= (tsram_word_value[kk]&0xFF).toString(16).padStart(2, '0')+"	";  
		result_content+= ((tsram_word_value[kk]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		
		result_content+= (tsram_word_value[kk+1]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+1]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+1]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+1]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		
		result_content+= (tsram_word_value[kk+2]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+2]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+2]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+2]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		
		result_content+= (tsram_word_value[kk+3]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+3]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+3]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+3]>>24)&0xFF).toString(16).padStart(2, '0')+"\n";
		
		//=======================================================================================
		format_tsram+= "0x"+(tsram_word_value[kk]&0xFF).toString(16).padStart(2, '0')+",";    
		format_tsram+= "0x"+((tsram_word_value[kk]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		
		format_tsram+= "0x"+(tsram_word_value[kk+1]&0xFF).toString(16).padStart(2, '0')+",";        
		format_tsram+= "0x"+((tsram_word_value[kk+1]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+1]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+1]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		
		format_tsram+= "0x"+(tsram_word_value[kk+2]&0xFF).toString(16).padStart(2, '0')+",";        
		format_tsram+= "0x"+((tsram_word_value[kk+2]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+2]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+2]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		
		format_tsram+= "0x"+(tsram_word_value[kk+3]&0xFF).toString(16).padStart(2, '0')+",";        
		format_tsram+= "0x"+((tsram_word_value[kk+3]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+3]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+3]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		//console.log(tsram_word_value[kk].toString(16));
		//=======================================================================================
	}
	if(IC_type == 192){
		result_content+= (tsram_word_value[8]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[8]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[8]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[8]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= "00"+"	"+"00"+"	"+"00"+"	"+"00"+"\n";
		
		
		format_tsram+= "0x"+(tsram_word_value[kk]&0xFF).toString(16).padStart(2, '0')+",";    
		format_tsram+= "0x"+((tsram_word_value[kk]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x00, 0x00, 0x00, 0x00,";
	}
	$('#tsram_adc_calculate_format').val(format_tsram);
	
	return result_content;
	//========================================================================================
}

//=====================================================================
// Horizontal Mapping
//=====================================================================
function Show_mapping_table_Horizontal(){
	var tx, rx, mux0_num, mux1_num, mux2_num, mux3_num, current_index;
	var i, j, k,lines, tmp, buffer, content, tmp1, tmp2;
	var mux_class = '';
	var mapping_table = $('#mapping_table').val();
	tx = parseInt($("input[name='m_tx']").val(), 10);
	rx = parseInt($("input[name='m_rx']").val(), 10);
	
	Mapping_array = [];
	
	// Code format================================
	//lines = mapping_table.split('\n');
	//for(i = 0; i < lines.length;i++){
	//	content = lines[i].split(',');
	//	for(j = 0; j < content.length; j++){
	//		tmp = parseInt($.trim(content[j]), 10); 
	//		if(!isNaN(tmp)){
	//			Mapping_array.push(tmp);
	//		}			
	//	}
	//}
	// Bin format================================
	console.log(IC_type);
	content = mapping_table.split(',');
	if(IC_type == 192){ // one-byte per adc
		for(i = 0; i < (tx*rx);i++){
			tmp = parseInt($.trim(content[i]), 16); 
			if(!isNaN(tmp)){
				Mapping_array.push(tmp);
			}			
		}
	}
	else{ // 193 --> // two-byte per adc
		for(i = 0; i < (2*tx*rx);i+=2){
			tmp1  = ($.trim(content[i+1]).substr(2));
			tmp2  = ($.trim(content[i]).substr(2));
			//console.log(tmp1+ tmp2);
			tmp = parseInt(tmp1+ tmp2, 16); 
			//console.log(tmp);
			
			if(!isNaN(tmp)){
				Mapping_array.push(tmp); 
			}			
			
		}
	}
	//===========================================
	
	
	var h_index = 0, v_index = 0;
	var changemux_h = (tx/4), changemux_v = 4;
	var changemux_h_count = 0, changemux_v_count = 0;
	var html_table='<table class="mapping_table">'+'\n';
	for(i = 0; i< rx; i++){
		html_table+='<tr>'+'\n';
		for(j = 0; j < tx; j++){
			mux_class = 'mux'+h_index+'_color';
			changemux_h_count++;
			if(changemux_h_count == changemux_h){
				if(v_index == 0){
					if(h_index == 0)
						h_index = 2;
					else if(h_index == 2)
						h_index = 3;
					else if(h_index == 3)
						h_index = 1;
				}
				else{
					if(h_index == 1)
						h_index = 3;
					else if(h_index == 3)
						h_index = 2;
					else if(h_index == 2)
						h_index = 0;
				}
				changemux_h_count = 0;
			}

			current_index = Mapping_array[j*rx+i];
			html_table+='<td class="'+mux_class+'" id="'+mux_class+'_'+current_index+'">'+current_index+'</td>'+'\n';
		}
		changemux_v_count++;
		if(changemux_v_count == changemux_v){
			v_index^=1;
			changemux_v_count = 0;
		}
		if(v_index == 0){
			h_index = 0;
		}
		else{
			h_index = 1;
		}
		html_table+='</tr>'+'\n';
	}
	html_table+='</table>'+'\n';
	$('#mapping_table_result').html(html_table);
	//console.log(Mapping_array);
	
	$('#tsram_adc_calculate_format').val("");
	var result_content = '';
	var one_side_length = ((tx*rx)/4); // 224
	//var one_mux_length = ((tx*rx)/8);  // 112
	
	// Cycle 6 --> YIN_L: mux0, YIN_R: mux 3 ()
	//result_content = Show_Cycle_Tsram_Horizontal(0,((tx*rx)-1),tx, rx, Tsram_x_word_frame0, 0, 60);
	result_content = Show_Cycle_Tsram_Horizontal(0,((tx*rx)-one_side_length - 5),   tx, rx, Tsram_x_word_frame0, 0, 60);
	// Cycle 7 --> YIN_L: mux1, YIN_R: mux 2 ()
	result_content += Show_Cycle_Tsram_Horizontal(4, ((tx*rx)-one_side_length - 1), tx, rx, Tsram_x_word_frame1, 0, 70);
	// Cycle 8 --> YIN_L: mux2, YIN_R: mux 1 ()
	result_content += Show_Cycle_Tsram_Horizontal(one_side_length, ((tx*rx)-5),     tx, rx, Tsram_x_word_frame2, 0, 80);
	// Cycle 9 --> YIN_L: mux3, YIN_R: mux 0 ()
	result_content += Show_Cycle_Tsram_Horizontal((one_side_length+4),((tx*rx)-1),  tx, rx, Tsram_x_word_frame3, 0, 90);
	
	// Cycle 10 --> YIN_L: mux0, YIN_R: mux 3 () --> reverse cycle 6
	result_content += Show_Cycle_Tsram_Horizontal(0, ((tx*rx)-one_side_length - 5), tx, rx, Tsram_x_word_frame0, 1, 100);
	// Cycle 11 --> YIN_L: mux1, YIN_R: mux 2 () --> reverse cycle 7
	result_content += Show_Cycle_Tsram_Horizontal(4, ((tx*rx)-one_side_length - 1), tx, rx, Tsram_x_word_frame1, 1, 110);
	// Cycle 12 --> YIN_L: mux2, YIN_R: mux 1 () --> reverse cycle 8
	result_content += Show_Cycle_Tsram_Horizontal(one_side_length, ((tx*rx)-5),     tx, rx, Tsram_x_word_frame2, 1, 120);
	// Cycle 13 --> YIN_L: mux3, YIN_R: mux 0 () --> reverse cycle 9
	result_content += Show_Cycle_Tsram_Horizontal((one_side_length+4),((tx*rx)-1),  tx, rx, Tsram_x_word_frame3, 1, 130);
	
	$('#tsram_adc_calculate').val(result_content);
	//==========================================
	//==========================================
}

function Show_Cycle_Tsram_Horizontal(mapping_offset_l, mapping_offset_r, tx,rx, firstword, c_frame, tsram_index_start){
	var i = 0, j = 0;
	//Fill_TSRAM_by_Mapping===
	var TSRAM_ADC_EN = [];
	var tsram_word_value = [];	
	if(IC_type == 192){
		TSRAM_ADC_EN.length = (2*Tsram_192_ADC_COUNT); // left and right
		tsram_word_value.length = Tsram_192_word;
	}
	else{
		TSRAM_ADC_EN.length = (2*Tsram_193_ADC_COUNT); // left and right
		tsram_word_value.length = Tsram_193_word;
	}	
	//===========================
	// Default: 3210 3210====
	var mapping_index = 0, adc_count = 0, changeline = 0;
	var c_frame_backup = c_frame;
	var result_content = '';
	
	var one_side_mux_length = (rx*tx)/8; //console.log(one_side_mux_length);
	// Fill out left=================================
	adc_count = mapping_offset_l;
	while(i < one_side_mux_length){
		
		mapping_index = Mapping_array[adc_count];
		
		if(changeline == 1){
			c_frame^=0x01;
			changeline = 0;
		}
		c_frame^=0x01;
		
		TSRAM_ADC_EN[mapping_index] = c_frame;
		adc_count++;
		
		i++;
		
		if((i % 4) == 0){ // jump
			adc_count+=4; 
		}
		
		if((i%(rx/2)) == 0){
			changeline = 1;
		}
	}

	// Fill out Right=================================
	i = 0;
	c_frame = c_frame_backup;
	changeline = 0;

	adc_count = mapping_offset_r; //console.log(mapping_offset_r);
	
	while(i < one_side_mux_length){
		
		mapping_index = Mapping_array[adc_count];  
		
		if(changeline == 1){
			c_frame^=0x01;
			changeline = 0;
		}
		c_frame^=0x01;
		
		TSRAM_ADC_EN[mapping_index] = c_frame; //console.log(adc_count+" is "+c_frame+" mapping_index "+mapping_index);
		adc_count--;

		i++;
		
		if((i % 4) == 0){ // jump
			adc_count-=4;
		}	
		
		if((i%(rx/2)) == 0){
			changeline = 1;
		}
	}
	//=================================================
	//console.log(TSRAM_ADC_EN);
	//=================================================
	var get_index = 0, tmp_index = 0;	
	// Calcaulate TSRAM setting
	if(IC_type == 192){
		for(j = 0; j < TSRAM_ADC_EN.length; j+=4){
			var tmp_tsram = 0;
			tmp_tsram = (TSRAM_ADC_EN[j] | (TSRAM_ADC_EN[j+1]<< 1) | (TSRAM_ADC_EN[j+2] << 2) | (TSRAM_ADC_EN[j+3] << 3));
			
			if(j > (Tsram_192_ADC_COUNT-1)){ // is right
				tmp_tsram  = (tmp_tsram << Tsram_192_ADC_EN_bit);
			}
			//console.log("ADC_EN_L["+(j+3)+":"+j+"] is 0x"+tmp_tsram.toString(16));

			if((j%Tsram_192_ADC_COUNT) == 0){ // ADC3~0
				get_index = 0;
				tsram_word_value[0] |= (tmp_tsram|firstword); //console.log(tsram_word_value[0].toString(16));
			}
			else if((j%Tsram_192_ADC_COUNT) == 4){ //ADC7-4
				tsram_word_value[1] |= (tmp_tsram);
			}
			else if((j%Tsram_192_ADC_COUNT) == 8){ // ADC11~8 
				tsram_word_value[1] |= (tmp_tsram << 16);
			}
			else if((j%Tsram_192_ADC_COUNT) == 12){ //ADC15-12
				tsram_word_value[2] |= (tmp_tsram);
			}
			else if((j%Tsram_192_ADC_COUNT) == 16){ // ADC19~16 
				tsram_word_value[2] |= (tmp_tsram << 16); //console.log(tsram_word_value[2].toString(16));
			}
			else if((j%Tsram_192_ADC_COUNT) == 20){ // ADC23~20 
				tsram_word_value[2] |= (tmp_tsram << 24);
				tsram_word_value[2]>>>=0;
			}
			else{
				tsram_word_value[(3+get_index)] |= (tmp_tsram << (tmp_index*8));
				tsram_word_value[(3+get_index)]>>>=0;
				
				tmp_index++;
				if(tmp_index == 4){
					tmp_index = 0;
					get_index++;
				}
			}
		}	
	}
	else{ // 193
		for(j = 0; j < TSRAM_ADC_EN.length; j+=6){ 
			var tmp_tsram = 0;
			tmp_tsram = (TSRAM_ADC_EN[j] | (TSRAM_ADC_EN[j+1]<< 1) | (TSRAM_ADC_EN[j+2] << 2) | (TSRAM_ADC_EN[j+3] << 3)
							| (TSRAM_ADC_EN[j+4] << 4) | (TSRAM_ADC_EN[j+5] << 5)
						);
			
			if(j > (Tsram_193_ADC_COUNT-1)){ // is right
				tmp_tsram  = (tmp_tsram << Tsram_193_ADC_EN_bit);
			}
			//console.log("ADC_EN_L["+(j+5)+":"+j+"] is 0x"+tmp_tsram.toString(16));

			if((j%Tsram_193_ADC_COUNT) == 0){
				get_index = 0;
				tsram_word_value[0] |= (tmp_tsram|firstword); //console.log(firstword.toString(16));
				tsram_word_value[0]>>>=0; //console.log(tsram_word_value[0].toString(16));
			}
			else if((j%Tsram_193_ADC_COUNT) == 6){ 
				tsram_word_value[1] |= (tmp_tsram | 0x300000);
				tsram_word_value[1]>>>=0;
			}
			else if((j%Tsram_193_ADC_COUNT) == 12){ 
				tsram_word_value[2] |= (tmp_tsram);
			}
			else if((j%Tsram_193_ADC_COUNT) == 18){
				tsram_word_value[2] |= (tmp_tsram << 20);
				tsram_word_value[2]>>>=0;
			}
			else{	
				tsram_word_value[(3+get_index)] |= (tmp_tsram << (tmp_index*12));
				tsram_word_value[(3+get_index)]>>>=0;
				
				tmp_index++;
				if(tmp_index == 2){
					tmp_index = 0;
					get_index++;
				}
			}
		}		
	}
	//console.log(tsram_word_value);
	
	// Show tsram result============================================================================
	var tsram_word = 0, debug_print = 0;
	if(IC_type == 192){
		tsram_word = Tsram_192_word; 
		debug_print = 8;
	}
	else{
		tsram_word = Tsram_193_word; 
		debug_print = Tsram_193_word;
	}
	
	var kk = 0;
	// Show TSRAM value with tp init code format.....
	//var format_index = 60; // from 60~139
	var format_tsram = $('#tsram_adc_calculate_format').val();
	//=code format==================================================
	//if(IC_type == 192){
	//	for(kk = 0; kk < (tsram_word-1); kk++){
	//		format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
	//	}
	//	format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x00000000 ,'+'\n';
	//}
	//else{
	//	var hex_index = (tsram_index_start/10)*16;
	//	for(kk = 0; kk < tsram_word; kk++){
	//		format_tsram+= '		/*  *(&AHB_TSRAM_WORD+0x'+(hex_index.toString(16))+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
	//		hex_index++;
	//	}
	//}
	//format_tsram+='\n';
	//$('#tsram_adc_calculate_format').val(format_tsram);
	//=========================================================
	
	// For debug============================================================================
	for(kk = 0; kk < debug_print; kk+=4){
		result_content+= (tsram_word_value[kk]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		
		result_content+= (tsram_word_value[kk+1]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+1]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+1]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+1]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		
		result_content+= (tsram_word_value[kk+2]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+2]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+2]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+2]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		
		result_content+= (tsram_word_value[kk+3]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+3]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+3]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[kk+3]>>24)&0xFF).toString(16).padStart(2, '0')+"\n";
		
		format_tsram+= "0x"+(tsram_word_value[kk]&0xFF).toString(16).padStart(2, '0')+",";    
		format_tsram+= "0x"+((tsram_word_value[kk]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		
		format_tsram+= "0x"+(tsram_word_value[kk+1]&0xFF).toString(16).padStart(2, '0')+",";        
		format_tsram+= "0x"+((tsram_word_value[kk+1]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+1]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+1]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		
		format_tsram+= "0x"+(tsram_word_value[kk+2]&0xFF).toString(16).padStart(2, '0')+",";        
		format_tsram+= "0x"+((tsram_word_value[kk+2]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+2]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+2]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		
		format_tsram+= "0x"+(tsram_word_value[kk+3]&0xFF).toString(16).padStart(2, '0')+",";        
		format_tsram+= "0x"+((tsram_word_value[kk+3]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+3]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk+3]>>24)&0xFF).toString(16).padStart(2, '0')+",";		
		//console.log(tsram_word_value[kk].toString(16));
	}
	if(IC_type == 192){
		result_content+= (tsram_word_value[8]&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[8]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[8]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= ((tsram_word_value[8]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
		result_content+= "00"+"	"+"00"+"	"+"00"+"	"+"00"+"\n";
		
		format_tsram+= "0x"+(tsram_word_value[kk]&0xFF).toString(16).padStart(2, '0')+",";    
		format_tsram+= "0x"+((tsram_word_value[kk]>>8)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>16)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x"+((tsram_word_value[kk]>>24)&0xFF).toString(16).padStart(2, '0')+",";
		format_tsram+= "0x00, 0x00, 0x00, 0x00,";
	}
	$('#tsram_adc_calculate_format').val(format_tsram);
	
	return result_content;
	//========================================================================================
}

function TSRAM_ADC_Create(){
	$('#TSRAM_ADC_clear').click(function(){
		$('#tsram_adc_content').val("");
		$('#tsram_adc_result').val("");
		$('#mapping_table').val("");
		$('#tsram_adc_calculate').val("");
		$('#tsram_adc_calculate_format').val("");
		
		$("input[name='m_tx']").val("");
		$("input[name='m_rx']").val("");
		$("input[name='m_mux0']").val("");
		$("input[name='m_mux1']").val("");
		$("input[name='m_mux2']").val("");
		$("input[name='m_mux3']").val("");
		
    });
	$('#TSRAM_ADC_enter').click(function(){	
		if(IC_mapping_type == 0){
			Show_mapping_table_Vertical();
		}
		else{
			Show_mapping_table_Horizontal();
		}
		if(IC_type == 192){
			TSRAM_ADC_Show(Tsram_192_YIN_L_offset, Tsram_192_YIN_R_offset,Tsram_192_word, Tsram_192_ADC_EN_bit, Tsram_192_ADC_COUNT ,Tsram_word_192, 0);
		}
		else{
			TSRAM_ADC_Show(Tsram_193_YIN_L_offset, Tsram_193_YIN_R_offset,Tsram_193_word, Tsram_193_ADC_EN_bit, Tsram_193_ADC_COUNT,Tsram_word_193, 0);
		}
    });
	
	/*$('#TSRAM_ADC_enter_debug').click(function(){
		var tsram_content = $('#tsram_adc_content').val(); 
		$('#tsram_adc_calculate').val(tsram_content); // bakcup
		$('#tsram_adc_calculate_format').val("");
		
		$(".mapping_table td").removeClass (function (index, className) {
			return (className.match (/frame[0-9]_color/g) || []).join(' ');
		});
		$(".mapping_table td").removeClass (function (index, className) {
			return (className.match (/f[0-9]_bg/g) || []).join(' ');
		});
		
		if(IC_type == 192){
			TSRAM_ADC_Show(Tsram_192_YIN_L_offset, Tsram_192_YIN_R_offset,Tsram_192_word, Tsram_192_ADC_EN_bit, Tsram_192_ADC_COUNT,Tsram_word_192, 1);
		}
		else{
			TSRAM_ADC_Show(Tsram_193_YIN_L_offset, Tsram_193_YIN_R_offset,Tsram_193_word, Tsram_193_ADC_EN_bit, Tsram_193_ADC_COUNT,Tsram_word_193, 1);
		}
		// Show ADC in default
		$('#mapping_table_result td').each(function() {
			current_id = $(this).attr('id');
			frame = $(this).attr('frame');
			addedclass = 'f'+frame+'_bg';
			$(this).text(current_id.split('_')[2]);
			$(this).removeClass(addedclass);
			
		});

	});*/
	
	var current_id, td_color, frame, addedclass;
	$('#mapping_table_show_adc').click(function(){
		$('#mapping_table_result td').each(function() {
			current_id = $(this).attr('id');
			frame = $(this).attr('frame');
			addedclass = 'f'+frame+'_bg';
			$(this).text(current_id.split('_')[2]);
			$(this).removeClass(addedclass);
			
		});
	});
	$('#mapping_table_show_frame').click(function(){
		$('#mapping_table_result td').each(function() {
			current_id = $(this).attr('id'); 
			frame = $(this).attr('frame');
			addedclass = 'f'+frame+'_bg';
			$(this).text(frame);
			$(this).addClass(addedclass);
		});
	});
	
}

var Tsram_index_show_tmp = 0;
function Update_tp_init_code_Format(tsram_value){
	var ori_paste = $('#tsram_adc_calculate_format').val();
	var format_tsram = '';
	var tmp_div = 0;
	
	if(IC_type == 192){
		tmp_div = Tsram_192_word;
		format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(60+Tsram_index_show_tmp)+') = */  0x'+tsram_value+' ,'+'\n';
	}
	else{
		tmp_div = Tsram_193_word;
		format_tsram+= '		/*  *(&AHB_TSRAM_WORD 0x+'+(96+Tsram_index_show_tmp).toString(16)+') = */  0x'+tsram_value+' ,'+'\n';
	}
	
	Tsram_index_show_tmp++;
	if((Tsram_index_show_tmp%tmp_div) == 0){
		format_tsram+='\n';
	}
	
	ori_paste+= format_tsram;
	$('#tsram_adc_calculate_format').val(ori_paste);
}

function Init_Radio(){
	//=============================================================
	// IC type.....................................................
	var $radios = $('input:radio[name=ictype]');
   // if($radios.is(':checked') === false) {
    $radios.filter('[value=192]').prop('checked', true);
	IC_type = 192;
	Tsram_x_word_frame0 = Tsram_192_fisrt_word_frame0;
	Tsram_x_word_frame1 = Tsram_192_fisrt_word_frame1;
	Tsram_x_word_frame2 = Tsram_192_fisrt_word_frame2;
	Tsram_x_word_frame3 = Tsram_192_fisrt_word_frame3;
	
	$('input[type=radio][name=ictype]').change(function() {
		if (this.value == '192') {
			IC_type = 192;
			Tsram_x_word_frame0 = Tsram_192_fisrt_word_frame0;
			Tsram_x_word_frame1 = Tsram_192_fisrt_word_frame1;
			Tsram_x_word_frame2 = Tsram_192_fisrt_word_frame2;
			Tsram_x_word_frame3 = Tsram_192_fisrt_word_frame3;
		}
		else{
			IC_type = 193;
			Tsram_x_word_frame0 = Tsram_193_fisrt_word_frame0;
			Tsram_x_word_frame1 = Tsram_193_fisrt_word_frame1;
			Tsram_x_word_frame2 = Tsram_193_fisrt_word_frame2;
			Tsram_x_word_frame3 = Tsram_193_fisrt_word_frame3;
		}
	});

	//=============================================================
	// Mapping type................................................
	var $radios_2 = $('input:radio[name=mappingtype]');
	$radios_2.filter('[value=0]').prop('checked', true);
	IC_mapping_type = 0;
	
	$('input[type=radio][name=mappingtype]').change(function() {
		if (this.value == '0') {
			//console.log("is vertical");
			$("input[name=m_mux0]").prop('disabled', false);
			$("input[name=m_mux1]").prop('disabled', false);
			$("input[name=m_mux2]").prop('disabled', false);
			$("input[name=m_mux3]").prop('disabled', false);
			IC_mapping_type = 0;
		}
		else {
			//console.log("is horizontal");
			// Disable mux num
			$("input[name=m_mux0]").prop('disabled', true);
			$("input[name=m_mux1]").prop('disabled', true);
			$("input[name=m_mux2]").prop('disabled', true);
			$("input[name=m_mux3]").prop('disabled', true);
			IC_mapping_type = 1;
		}
	});
}

$(document).ready(function(){
	/*Radio button default*/
	Init_Radio();
	TSRAM_ADC_Create();
});
