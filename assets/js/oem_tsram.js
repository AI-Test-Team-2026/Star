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
var Tsram_192_sensing_first_word = [0x011f0000, 0x022f0000, 0x044f0000, 0x088f0000, 0x0fff0000];
var Tsram_193_sensing_first_word = [0xc4700000, 0xc8b00000, 0xd1300000, 0xe2300000, 0xfff00000];
var Tsram_x_word_cycle1, Tsram_x_word_cycle2, Tsram_x_word_cycle3, Tsram_x_word_cycle4, Tsram_x_word_cycle5;
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
				original_data += "\n";

				// Show Left=======================================
				for(k = 0; k< TSRAM_ADC_L_CC.length; k++){
					if(TSRAM_ADC_L_CC[k] == 1){
						//console.log("ADC "+k+" is on");
						muxdata_l = muxdata_l+k+', ';
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
					muxdata_l+='\n';
					for(kc = 0; kc < padding_ff; kc++){
						muxdata_l+='0xFFFF, ';
					}
				}
				//.................................................
				
				// Show Right=======================================
				// The scan become 0123 0123. Thus, the mux is reversed.
				for(k = 0; k< TSRAM_ADC_R_CC.length; k++){
					if(TSRAM_ADC_R_CC[k] == 1){
						muxdata_r = muxdata_r+(k+tsram_adc_count)+', ';
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
					muxdata_r+='\n';
					for(kc = 0; kc < padding_ff; kc++){
						muxdata_r+='0xFFFF, ';
					}
				}
				//.................................................
				//====================================================
				var muxdata = '';
				muxdata+="//Mux L" + yin_mux_l+"(Frame "+cycle+"), ADC_EN_num is "+l_adc_num+"\n";
				muxdata+=muxdata_l+"\n";
				muxdata+="//Mux R" + yin_mux_r+"(Frame "+cycle+"), ADC_EN num is "+r_adc_num+"\n";
				muxdata+=muxdata_r+"\n";

				//var muxdata = "Mux L "+yin_mux_l + "/ Mux R "+yin_mux_r+"\n"+muxdata;
				$('#tsram_adc_result').val(original_data+muxdata);
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
	var i, j, lines, tmp, buffer, content;
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
	
	lines = mapping_table.split('\n');
	for(i = 0; i < lines.length;i++){
		content = lines[i].split(',');
		for(j = 0; j < content.length; j++){
			tmp = parseInt($.trim(content[j]), 10); 
			if(!isNaN(tmp)){
				Mapping_array.push(tmp);
			}			
		}
	}
	
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
	// Sensing cycle 1,2,3,4,5
	$('#tsram_adc_en_off').val("");
	// Cycle 1 --> YIN_L: mux0, YIN_R: mux 0 ()
	Show_Cycle_Tsram_Vertical(mux0_num_l, mux0_num_r, 0, (mux1_num_r+mux2_num_r+mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx , rx, Tsram_x_word_cycle1, -1, 10);
	// Cycle 2 --> YIN_L: mux1, YIN_R: mux 1 ()
	Show_Cycle_Tsram_Vertical(mux1_num_l, mux1_num_r, (mux0_num_l)*rx, (mux2_num_r+mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_cycle2, -1, 20);
	// Cycle 3 --> YIN_L: mux2, YIN_R: mux 2 ()
	Show_Cycle_Tsram_Vertical(mux2_num_l, mux2_num_r, (mux0_num_l+mux1_num_l)*rx, (mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_cycle3, -1, 30);
	// Cycle 4 --> YIN_L: mux3, YIN_R: mux 3 ()
	Show_Cycle_Tsram_Vertical(mux3_num_l, mux3_num_r, (mux0_num_l+mux1_num_l+mux2_num_l)*rx, (mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, rx, Tsram_x_word_cycle4, -1, 40);
	// Cycle 5 --> YIN_L: mux all on, YIN_R: mux all on ()
	//Show_Cycle_Tsram_Vertical(mux0_num_l, mux0_num_r, 0, (mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, (mux1_num_r+mux2_num_r+mux3_num_r+mux3_num_l+mux2_num_l+mux1_num_l+mux0_num_l)*rx, Tsram_x_word_cycle5, -1, 50);
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
	for(i = 0; i< TSRAM_ADC_EN.length; i++){
		TSRAM_ADC_EN[i] = 0;
	}
	//==========================
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
		
		if(c_frame < 0){ // normal sensing mapping
			TSRAM_ADC_EN[mapping_index] = 1;
			adc_count++;
		}
		else{ // self test mapping
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
	}
	// Fill out Right=================================
	c_frame = c_frame_backup;
	changeline = 0;
	adc_count = 0;
	for(i = (mapping_offset_r+(mux_r_num*rx) -1); i>=(mapping_offset_r); i--){ // one mux_only
		mapping_index = Mapping_array[i]; 
		
		if(c_frame < 0){ // normal sensing mapping
			TSRAM_ADC_EN[mapping_index] = 1;
			adc_count++;
		}
		else{ // self test mapping
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
	}
	//=================================================
	//console.log(TSRAM_ADC_EN);
	//=================================================
	if(c_frame < 0){ // only for sensing cycle
		// turn on the first-2 and last+2 ADC_EN======================================
		var total_len = (TSRAM_ADC_EN.length)/2;
		
		if((TSRAM_ADC_EN[1] == 1) && (TSRAM_ADC_EN[0] == 0)){
			TSRAM_ADC_EN[0] = 1;
		}
		else if((TSRAM_ADC_EN[0] == 1) && (TSRAM_ADC_EN[1] == 0)){
			TSRAM_ADC_EN[1] = 1;
		}
		if((TSRAM_ADC_EN[total_len-2] == 1) && (TSRAM_ADC_EN[total_len-1] == 0)){
			TSRAM_ADC_EN[total_len-1] = 1;
		}
		else if((TSRAM_ADC_EN[total_len-1] == 1) && (TSRAM_ADC_EN[total_len-2] == 0)){
			TSRAM_ADC_EN[total_len-2] = 1;
		}
		
		for(i = 2; i< total_len - 2; i++){
			// left.........................................
			if((TSRAM_ADC_EN[i] == 1) && (TSRAM_ADC_EN[i-2] == 0 || TSRAM_ADC_EN[i-1] == 0)){
				if(TSRAM_ADC_EN[i-2] == 0)
					TSRAM_ADC_EN[i-2] = 2;
				if(TSRAM_ADC_EN[i-1] == 0)
					TSRAM_ADC_EN[i-1] = 2;
			}
			if((TSRAM_ADC_EN[i] == 1) && (TSRAM_ADC_EN[i+2] == 0 || TSRAM_ADC_EN[i+1] == 0)){
				if(TSRAM_ADC_EN[i+2] == 0)
					TSRAM_ADC_EN[i+2] = 2;
				if(TSRAM_ADC_EN[i+1] == 0)
					TSRAM_ADC_EN[i+1] = 2;
			}
			// right.........................................
			if((TSRAM_ADC_EN[i+total_len] == 1) && (TSRAM_ADC_EN[i+total_len-2] == 0 || TSRAM_ADC_EN[i+total_len-1] == 0)){
				if(TSRAM_ADC_EN[i+total_len-2] == 0)
					TSRAM_ADC_EN[i+total_len-2] = 2;
				if(TSRAM_ADC_EN[i+total_len-1] == 0)
					TSRAM_ADC_EN[i+total_len-1] = 2;
			}
			if((TSRAM_ADC_EN[i+total_len] == 1) && (TSRAM_ADC_EN[i+total_len+2] == 0 || TSRAM_ADC_EN[i+total_len+1] == 0)){
				if(TSRAM_ADC_EN[i+total_len+2] == 0)
					TSRAM_ADC_EN[i+total_len+2] = 2;
				if(TSRAM_ADC_EN[i+total_len+1] == 0)
					TSRAM_ADC_EN[i+total_len+1] = 2;
			}
		}
		for(i = 2; i< total_len - 2; i++){
			if(TSRAM_ADC_EN[i] == 2){
				TSRAM_ADC_EN[i] = 1;
			}
		}
	}
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
				//console.log(firstword);
				//console.log(tmp_tsram);
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
	var format_tsram;
	var target_textarea;
	if(c_frame < 0){ // normal sensing
		target_textarea = '#tsram_adc_en_off';
	}
	else{ // self test mapping only
		target_textarea = '#tsram_adc_calculate_format';	
	}
	format_tsram = $(target_textarea).val(); //console.log(format_tsram);
	// Show TSRAM value with tp init code format.....
	//var format_index = 60; // from 60~139

	if(IC_type == 192){
		for(kk = 0; kk < (tsram_word-1); kk++){
			format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
		}
		format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x00000000 ,'+'\n';
	}
	else{
		var hex_index = (tsram_index_start/10)*16;
		for(kk = 0; kk < tsram_word; kk++){
			format_tsram+= '		/*  *(&AHB_TSRAM_WORD+0x'+(hex_index.toString(16))+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
			hex_index++;
		}
	}
	format_tsram+='\n';
	$(target_textarea).val(format_tsram); //console.log("hh"+format_tsram);
	
	// For debug============================================================================
	if(c_frame >=0){ // self test mapping only
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
			//console.log(tsram_word_value[kk].toString(16));
		}
		if(IC_type == 192){
			result_content+= (tsram_word_value[8]&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= ((tsram_word_value[8]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= ((tsram_word_value[8]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= ((tsram_word_value[8]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= "00"+"	"+"00"+"	"+"00"+"	"+"00"+"\n";
		}
		
		return result_content;
	}
	//========================================================================================
}

//=====================================================================
// Horizontal Mapping
//=====================================================================
function Show_mapping_table_Horizontal(){
	var tx, rx, mux0_num, mux1_num, mux2_num, mux3_num, current_index;
	var i, j, k,lines, tmp, buffer, content;
	var mux_class = '';
	var mapping_table = $('#mapping_table').val();
	tx = parseInt($("input[name='m_tx']").val(), 10);
	rx = parseInt($("input[name='m_rx']").val(), 10);
	
	Mapping_array = [];
	
	lines = mapping_table.split('\n');
	for(i = 0; i < lines.length;i++){
		content = lines[i].split(',');
		for(j = 0; j < content.length; j++){
			tmp = parseInt($.trim(content[j]), 10); 
			if(!isNaN(tmp)){
				Mapping_array.push(tmp);
			}			
		}
	}
	
	var h_index = 0, v_index = 0;
	var changemux_h = (tx/4), changemux_v = 4;
	var changemux_h_count = 0, changemux_v_count = 0;
	var html_table='<table class="mapping_table">'+'\n';
	
	//////////////////////////
	if(Mapping_array[0] == 0){
		v_index = 0;
		h_index = 0;
	}
	else{
		v_index = 1;
		h_index = 1;
	}
	/////////////////////////
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
	// Sensing cycle 1,2,3,4,5
	$('#tsram_adc_en_off').val("");
	
	// Cycle 1 --> YIN_L: mux0, YIN_R: mux 0 ()
	Show_Cycle_Tsram_Horizontal(0,((tx*rx)-1),   tx, rx, Tsram_x_word_cycle1, -1, 10); 
	// Cycle 2 --> YIN_L: mux1, YIN_R: mux 1 ()
	Show_Cycle_Tsram_Horizontal(4, ((tx*rx)-5), tx, rx, Tsram_x_word_cycle2, -1, 20);
	// Cycle 3 --> YIN_L: mux2, YIN_R: mux 2 ()
	Show_Cycle_Tsram_Horizontal(one_side_length, ((tx*rx)-one_side_length - 1), tx, rx, Tsram_x_word_cycle3, -1, 30);
	// Cycle 4 --> YIN_L: mux3, YIN_R: mux 3 ()
	Show_Cycle_Tsram_Horizontal((one_side_length+4),((tx*rx)-one_side_length - 5),  tx, rx, Tsram_x_word_cycle4, -1, 40);
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
	//console.log(TSRAM_ADC_EN.length);
	//===========================
	for(i = 0; i< TSRAM_ADC_EN.length; i++){
		TSRAM_ADC_EN[i] = 0;
	}
	//==========================
	// Default: 3210 3210====
	var mapping_index = 0, adc_count = 0, changeline = 0;
	var c_frame_backup = c_frame;
	var result_content = '';
	
	var one_side_mux_length = (rx*tx)/8; //console.log(one_side_mux_length);
	// Fill out left=================================
	adc_count = mapping_offset_l;
	i = 0;
	while(i < one_side_mux_length){	
		mapping_index = Mapping_array[adc_count];  

		if(c_frame < 0){ // normal sensing mapping
			TSRAM_ADC_EN[mapping_index] = 1;
			adc_count++;
			
			i++;
			
			if((i % 4) == 0){ // jump
				adc_count+=4; 
			}
		}
		else{ // self test mapping
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
	}
	//console.log(TSRAM_ADC_EN);
	// Fill out Right=================================
	i = 0;
	c_frame = c_frame_backup;
	changeline = 0;

	adc_count = mapping_offset_r; //console.log(mapping_offset_r);
	
	while(i < one_side_mux_length){
		
		mapping_index = Mapping_array[adc_count];  
		
		if(c_frame < 0){ // normal sensing mapping
			TSRAM_ADC_EN[mapping_index] = 1;
			adc_count--;
			
			i++;
			
			if((i % 4) == 0){ // jump
				adc_count-=4;
			}	
		}
		else{ // self test mapping
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
	}
	//=================================================
	//console.log(TSRAM_ADC_EN);
	//console.log(Mapping_array);
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
	var format_tsram;
	var target_textarea;
	if(c_frame < 0){ // normal sensing
		target_textarea = '#tsram_adc_en_off';
	}
	else{ // self test mapping only
		target_textarea = '#tsram_adc_calculate_format';	
	}
	format_tsram = $(target_textarea).val(); //console.log(format_tsram);
	// Show TSRAM value with tp init code format.....
	//var format_index = 60; // from 60~139
	
	if(IC_type == 192){
		for(kk = 0; kk < (tsram_word-1); kk++){
			format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
		}
		format_tsram+= '		/*  *(&AHB_TSRAM_WORD+'+(tsram_index_start++)+') = */  0x00000000 ,'+'\n';
	}
	else{
		var hex_index = (tsram_index_start/10)*16;
		for(kk = 0; kk < tsram_word; kk++){
			format_tsram+= '		/*  *(&AHB_TSRAM_WORD+0x'+(hex_index.toString(16))+') = */  0x'+tsram_word_value[kk].toString(16).padStart(8, '0')+' ,'+'\n';
			hex_index++;
		}
	}
	format_tsram+='\n';
	$(target_textarea).val(format_tsram);
	
	// For debug============================================================================
	if(c_frame >= 0){
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
			//console.log(tsram_word_value[kk].toString(16));
		}
		if(IC_type == 192){
			result_content+= (tsram_word_value[8]&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= ((tsram_word_value[8]>>8)&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= ((tsram_word_value[8]>>16)&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= ((tsram_word_value[8]>>24)&0xFF).toString(16).padStart(2, '0')+"	";
			result_content+= "00"+"	"+"00"+"	"+"00"+"	"+"00"+"\n";
		}
	
		return result_content;
	}
	//========================================================================================
}

function TSRAM_ADC_Create(){
	$('#TSRAM_ADC_clear').click(function(){
		$('#tsram_adc_content').val("");
		$('#tsram_adc_result').val("");
		$('#mapping_table').val("");
		$('#tsram_adc_calculate').val("");
		$('#tsram_adc_calculate_format').val("");
		$('#tsram_adc_en_off').val("");
		
		$("input[name='m_tx']").val("");
		$("input[name='m_rx']").val("");
		$("input[name='m_mux0']").val("");
		$("input[name='m_mux1']").val("");
		$("input[name='m_mux2']").val("");
		$("input[name='m_mux3']").val("");
		
    });
	$('#TSRAM_ADC_enter').click(function(){	
		var tpbuild = $('#build_tp_checking').attr('isbuild');
		if(tpbuild == 1){
			// Init data from oem_build.js and build_tp_config.php
			// vertical or horizontal=======================================
			var tp_mapping = $('.build_tp_select[name="ADC_OPTION"]').val();
			if(tp_mapping == "1"){ // horizontal
				$('#mappingtype_horizontal').click();
			}
			else{ // vertical
				$('#mappingtype_vertical').click();
			}
			//192 or 193=====================================================
			var tp_ic = $('.build_tp_select[name="IC_SIGN_2"]').val();
			if(tp_ic.indexOf("193") >=0){
				$('#ic_type_193').click();//attr('checked', 'checked');
			}
			else{
				$('#ic_type_192').click();
			}
			// tx/rx=========================================================
			var tp_tx = parseInt($('.build_tp_number[name="MAX_TX_NUM"]').val(), 10);
			$("input[name='m_tx']").val(tp_tx);
			
			var tp_rx = parseInt($('.build_tp_number[name="MAX_RX_NUM"]').val(), 10);
			$("input[name='m_rx']").val(tp_rx);
			
			// mux0,1,2,3=========================================================
			var tp_mux0 = parseInt($('.build_tp_number[name="ADC_NUM_CYC_1"]').val(), 10);
			var tp_mux1 = parseInt($('.build_tp_number[name="ADC_NUM_CYC_2"]').val(), 10);
			var tp_mux2 = parseInt($('.build_tp_number[name="ADC_NUM_CYC_3"]').val(), 10);
			var tp_mux3 = parseInt($('.build_tp_number[name="ADC_NUM_CYC_4"]').val(), 10);
			
			tp_mux0/=tp_rx;
			tp_mux1/=tp_rx;
			tp_mux2/=tp_rx;
			tp_mux3/=tp_rx;
			
			$("input[name='m_mux0']").val(parseInt(tp_mux0));
			$("input[name='m_mux1']").val(parseInt(tp_mux1));
			$("input[name='m_mux2']").val(parseInt(tp_mux2));
			$("input[name='m_mux3']").val(parseInt(tp_mux3));
			//=====================================================================
			
		} // end of tpbuild == 1
	
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
	
	$('#TSRAM_ADC_enter_debug').click(function(){
		var tsram_content = $('#tsram_adc_content').val(); 
		$('#tsram_adc_calculate').val(tsram_content); // bakcup
		$('#tsram_adc_calculate_format').val("");
		$('#tsram_adc_en_off').val("");
		
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

	});
	
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
	
	Tsram_x_word_cycle1 = Tsram_192_sensing_first_word[0];
	Tsram_x_word_cycle2 = Tsram_192_sensing_first_word[1];
	Tsram_x_word_cycle3 = Tsram_192_sensing_first_word[2];
	Tsram_x_word_cycle4 = Tsram_192_sensing_first_word[3];
	Tsram_x_word_cycle5 = Tsram_192_sensing_first_word[4];

	$('input[type=radio][name=ictype]').change(function() {
		if (this.value == '192') {
			IC_type = 192;
			Tsram_x_word_frame0 = Tsram_192_fisrt_word_frame0;
			Tsram_x_word_frame1 = Tsram_192_fisrt_word_frame1;
			Tsram_x_word_frame2 = Tsram_192_fisrt_word_frame2;
			Tsram_x_word_frame3 = Tsram_192_fisrt_word_frame3;
			
			Tsram_x_word_cycle1 = Tsram_192_sensing_first_word[0];
			Tsram_x_word_cycle2 = Tsram_192_sensing_first_word[1];
			Tsram_x_word_cycle3 = Tsram_192_sensing_first_word[2];
			Tsram_x_word_cycle4 = Tsram_192_sensing_first_word[3];
			Tsram_x_word_cycle5 = Tsram_192_sensing_first_word[4];
		}
		else{
			IC_type = 193;
			Tsram_x_word_frame0 = Tsram_193_fisrt_word_frame0;
			Tsram_x_word_frame1 = Tsram_193_fisrt_word_frame1;
			Tsram_x_word_frame2 = Tsram_193_fisrt_word_frame2;
			Tsram_x_word_frame3 = Tsram_193_fisrt_word_frame3;
			
			Tsram_x_word_cycle1 = Tsram_193_sensing_first_word[0];
			Tsram_x_word_cycle2 = Tsram_193_sensing_first_word[1];
			Tsram_x_word_cycle3 = Tsram_193_sensing_first_word[2];
			Tsram_x_word_cycle4 = Tsram_193_sensing_first_word[3];
			Tsram_x_word_cycle5 = Tsram_193_sensing_first_word[4];			
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
