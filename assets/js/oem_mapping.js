function Parse_TXRX_Mapping(){
	var type = 0, ic_adc_max = 0;
	var icsign;
	var offset = 0;//0x13000
	var row = 0, column = 0, num = 0, groups = 0, remainging = 0;
	var td_value, td_name;
	var line = '', content = '';
	var i = 0, j = 0;
	// Horizontal or Vertical----------------------------------------------------------------------------------
	type = parseInt($('.5478_sram_waveform_f0[name="tcon_mux_sel"]').text(), 16); // 1: horizontal; 2: vertical
	
	if(type == 2){
		$('.tx_rx_mapping_show').css('display', 'block');
	}
	else{
		$('.tx_rx_mapping_show').css('display', 'none');
		return;
	}
	
	// Get ic 
	icsign = $('.5478_flash_header[name="ic_sign"]').text();
	if(icsign.indexOf('83192') >=0){
		//console.log('is 192');
		ic_adc_max = 120;
	}
	else{
		ic_adc_max = 180;
	}	
	// Get TX/RX first-----------------------------------------------------------------------------------------
	var txrx_reverse = $('.5478_flash_func_alg[name="TX_RX_REVERSE"] span').text();
	if(txrx_reverse == 'On'){
		row = parseInt($('.5478_sram_alg[rfeh="71"]').text(), 16);
		column = parseInt($('.5478_sram_alg[rfeh="70"]').text(), 16);
	}
	else{
		column = parseInt($('.5478_sram_alg[rfeh="71"]').text(), 16);
		row = parseInt($('.5478_sram_alg[rfeh="70"]').text(), 16);
	}
	// Get cascade IC num--------------------------------------------------------------------------------------
	num = parseInt($('#mapping_cascade_ic_num').val(), 10);
	column = (column/num);
	
	groups = parseInt((row*column)/32, 10);
	remainging = (row*column)%32;
		//=========================================================================================================
	var Mux0_Arr_Left = [],  Mux1_Arr_Left = [],  Mux2_Arr_Left = [],  Mux3_Arr_Left = [];
	var Mux0_Arr_Right = [],  Mux1_Arr_Right = [],  Mux2_Arr_Right = [],  Mux3_Arr_Right = [];
	var current_value = 0, prevous_value = 0;
	var mux_count = 0;
	//=========================================================================================================

	for(i = 0; i< groups;i++){
		td_name = '.bin_group_tp_adc_mapping[offset=\"'+(offset+(i*32))+'\"]';
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		// Get start address
		for(j = 0; j <32; j++){ // 32 bytes
			current_value = parseInt($.trim(td_value[j]), 16); //console.log(result);
			
			if( ((prevous_value > current_value) && (current_value < 120))
				|| ((current_value > 119) && (prevous_value < current_value))  ){ // change mux
				mux_count++;
			}
			prevous_value = current_value;
			
			if(mux_count == 0)
				Mux0_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 1)
				Mux1_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 2)
				Mux2_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 3)
				Mux3_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 4)
				Mux3_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
			else if(mux_count == 5)
				Mux2_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
			else if(mux_count == 6)
				Mux1_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
			else if(mux_count == 7)
				Mux0_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
		}
	}
	
	if(remainging > 0){
		offset=(groups*32); 
		td_name = '.bin_group_tp_adc_mapping[offset=\"'+(offset)+'\"]';
		line = ($(td_name).text()).split(':')[1]; 
		td_value = line.split(',');
		
		for(j = 0; j< remainging;j++){
			current_value = parseInt($.trim(td_value[j]), 16); //console.log(result);
			
			if( ((prevous_value > current_value) && (current_value < 120))
				|| ((current_value > 119) && (prevous_value < current_value))  ){ // change mux
				mux_count++;
			}
			prevous_value = current_value;
			if(mux_count == 0)
				Mux0_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 1)
				Mux1_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 2)
				Mux2_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 3)
				Mux3_Arr_Left.push(current_value+1+(ic_adc_max*mux_count));
			else if(mux_count == 4)
				Mux3_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
			else if(mux_count == 5)
				Mux2_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
			else if(mux_count == 6)
				Mux1_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
			else if(mux_count == 7)
				Mux0_Arr_Right.push((mux_count+2)*ic_adc_max - current_value);
		}
	}
	//=========================================================================================================
	// Get mux data
	var mux0_len = (Mux0_Arr_Left.length / row);
	var mux1_len = (Mux1_Arr_Left.length / row);
	var mux2_len = (Mux2_Arr_Left.length / row);
	var mux3_len = (Mux3_Arr_Left.length / row);

	//=========================================================================================================
	var temp_ind = 0;
	var arow_content = '';
	for(i = 0; i< row; i++){
		arow_content = '';
		for(j = 0; j < mux0_len; j++){
			temp_ind = i+j*row;
			
			arow_content='<td style="background-color:#ffff99">RX'+Mux0_Arr_Left[temp_ind]+'</td>'+ arow_content;
		}
		for(j = 0; j < mux1_len; j++){
			temp_ind = i+j*row;
			
			arow_content ='<td style="background-color:#99ccff">RX'+Mux1_Arr_Left[temp_ind]+'</td>'+arow_content;
		}
		for(j = 0; j < mux2_len; j++){
			temp_ind = i+j*row;
			
			arow_content ='<td style="background-color:#ffcccc">RX'+Mux2_Arr_Left[temp_ind]+'</td>' + arow_content;
		}
		for(j = 0; j < mux3_len; j++){
			temp_ind = i+j*row;
			
			arow_content ='<td style="background-color:#ccccff">RX'+Mux3_Arr_Left[temp_ind]+'</td>' + arow_content;
		}
		for(j = 0; j < mux3_len; j++){
			temp_ind = i+j*row;
			
			arow_content ='<td style="background-color: #b3b3ff">RX'+Mux3_Arr_Right[temp_ind]+'</td>' + arow_content;
		}
		for(j = 0; j < mux2_len; j++){
			temp_ind = i+j*row;
			
			arow_content ='<td style="background-color:#ffb3b3">RX'+Mux2_Arr_Right[temp_ind]+'</td>'+ arow_content;
		}
		for(j = 0; j < mux1_len; j++){
			temp_ind = i+j*row;
			
			arow_content ='<td style="background-color:#80bfff">RX'+Mux1_Arr_Right[temp_ind]+'</td>' + arow_content;
		}
		for(j = 0; j < mux0_len; j++){
			temp_ind = i+j*row;
			
			arow_content ='<td style="background-color: #ffff80">RX'+Mux0_Arr_Right[temp_ind]+'</td>'+ arow_content;
		}
		
		content='<tr>'+arow_content+'</tr>'+content;
	}

	//=========================================================================================================
	$('#tx_rx_mapping_table').html('<table class="table table-border">'+content+'</table>');
}

$(document).ready(function(){
	//=================================================================================
	// TXRX Mapping
	//=================================================================================
	$('#enter_cascade_ic').click(function(){
		Parse_TXRX_Mapping();
	});
});