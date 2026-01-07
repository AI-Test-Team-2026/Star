

function SCU_Table_dump_e8(data)
{
	var i = 0;
	var tmp;
	var val = 0;
	for(i = 0; i< 32; i++){
		tmp = '.db_reg_e8[bit="'+i+'"]';
		val = (data >> i) & 0x01;
		$(tmp).text(val);
		
	}
}


function E5_bank0_parse(content){
	var lines = content.split('\n');
	var tmp_line;
	var buffer = 0;
	var i = 0, j = 0, k = 0;
	var pa = 0;
	for(i = 0;i < lines.length;i++){
		tmp_line = lines[i].split('\t');
		
		//console.log(tmp_line);
		
		for(k = 0; k< tmp_line.length; k++){
			buffer = parseInt($.trim(tmp_line[k]), 16);
			
			if((pa >= 1 && pa <=13) 
			){
				for(j = 0; j< 8;j++){
					var tmp_name = 'b0_pa'+pa+'_'+j;
					var item_name = '.fail_det_grp[addr="'+tmp_name+'"]';
					
					$(item_name).text((buffer>>j)&0x01);
				}
			}
			pa++;
		}
	}
}

function E5_bank1_parse(content){
	var lines = content.split('\n');
	var tmp_line;
	var buffer = 0;
	var i = 0, j = 0, k = 0;
	var pa = 0;
	for(i = 0;i < lines.length;i++){
		tmp_line = lines[i].split('\t');
		
		//console.log(tmp_line);
		
		for(k = 0; k< tmp_line.length; k++){
			buffer = parseInt($.trim(tmp_line[k]), 16);
			
			if((pa >= 1 && pa <=12) 
			){
				for(j = 0; j< 8;j++){
					var tmp_name = 'b1_pa'+pa+'_'+j;
					var item_name = '.fail_det_grp[addr="'+tmp_name+'"]';
					console.log(item_name);
					
					$(item_name).text((buffer>>j)&0x01);
				}
			}
			pa++;
		}
	}
}

function SCU_table(){

    $('#debug_e8_enter').click(function(){
		var e8 = 0;
		
        console.log("SCU_Enter: Enter Button is pressed");
		
        e8 = parseInt($('#debug_e8_value').val(), 16);

		SCU_Table_dump_e8(e8);

    });
	
    $('#debug_e8_clear').click(function(){
		$('#debug_e8_value').val("");
		$('.db_reg_e8').text("0");

    });	
	
	//===========================================
	//===========================================
	$('#db_fail_det_enter').click(function(){
		$('.fail_det_grp').text("0");
		//////////////////////////////////
		var fd_bank0 = $('#fail_e5_bank0').val();
		
		E5_bank0_parse(fd_bank0);
		
		//////////////////////////////////
		var fd_bank1 = $('#fail_e5_bank1').val();

		E5_bank1_parse(fd_bank1);
		///////////////////////////////////
		$(".fail_det_grp").each(function() {
			$(this).parent('tr').removeClass('bg-warning');
			if($(this).text() === "1"){
				$(this).parent('tr').addClass('bg-warning');
			}
		});
    });
	
	$('#db_fail_det_clear').click(function(){
		$('#fail_e5_bank0').val("");
		$('#fail_e5_bank1').val("");

		$('.fail_det_grp').text("0");
		$(".fail_det_grp").each(function() {
			$(this).parent('tr').removeClass('bg-warning');
		});

    });
}

function Checksum_calculate(){
	$('#checksum_cal').click(function(){	
		var content = $('#checksum_content').val();
		var lines = content.split('\n');
		var cc, tmp, buffer;
		var i = 0, j = 0, result = 0;
		for(i = 0;i < lines.length;i++){
			cc = lines[i].split(',');
			for(j = 0; j < cc.length; j++){
				tmp = $.trim(cc[j]); 
				buffer = parseInt(tmp, 16);//console.log(buffer);
				if(buffer > 0){
					result +=buffer;
					
				}
			}
		}
		//console.log(result);
		result = (result & 0xFF);  
		result = (0x100 - result);
		$('#checksum_result').text("0x"+result.toString(16).padStart(2, 0).toUpperCase());
	});
}

function Parse_PLL(inputfrom){
	var array = [];

	if(inputfrom == 0){ // from textarea
		var content = $('#pa0402_pll_content').val();
		var lines = content.split('\n');
		var tmp_line;
		var tmp_val = 0;
		var buffer = 0;
		var i = 0, j = 0, k = 0, pa = 0;
		
		
		for(i = 0;i < lines.length;i++){
			tmp_line = lines[i].split('\t');
			
			for(k = 0; k < tmp_line.length; k++){
				buffer = parseInt($.trim(tmp_line[k]), 16);
				array[pa++] = buffer;
			}
		}
	}
	else{ // from bin






	}

	//console.log(array);
	/////////////////////////////////////////////////////////////
	var tmp_content = "";
	// PA0 --> dd osc 
	var dd_osc = parseInt($('#pa0402_pll_dd_osc_input').val(),10);//array[0];
	$('.pa0402_pll_dd_osc').text(dd_osc);
	var m_div0 =  ((array[3] >> 4 ) &0x0F) + 2;
	var s_div0 = (array[3] & 0x0F) +2;
	$('.pa0402_pll_div0').html("m: "+(m_div0)+"<br/>s: "+(s_div0));
	
	/////////////////////////////////////////////////////////////////////
	var m_76 = Get_2N((array[4] >> 6) & 0x03); // DIV7
	var m_54 = Get_2N((array[4] >> 4) & 0x03); // DIV6
	var m_32 = Get_2N((array[4] >> 2) & 0x03); // DIV2
	var m_10 = Get_2N((array[4] >> 0) & 0x03); // DIV1
	var s_76 = Get_2N((array[5] >> 6) & 0x03); 
	var s_54 = Get_2N((array[5] >> 4) & 0x03);
	var s_32 = Get_2N((array[5] >> 2) & 0x03);
	var s_10 = Get_2N((array[5] >> 0) & 0x03);
	
	$('.pa0402_pll_div7').html("m: "+((m_76))+"<br/>s: "+((s_76)));
	$('.pa0402_pll_div1').html("m: "+((m_10))+"<br/>s: "+((s_10)));
	$('.pa0402_pll_div2').html("m: "+((m_32))+"<br/>s: "+((s_32)));
	$('.pa0402_pll_div6').html("m: "+((m_54))+"<br/>s: "+((s_54)));
	/////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////
	var m_mux1 = (array[2] >> 7) & 0x01; 
	var s_mux1 = (array[2] >> 6) & 0x01; 
	var m_mux3 = (array[2] >> 5) & 0x01; 
	var s_mux3 = (array[2] >> 4) & 0x01; 
	var m_mux4 = (array[2] >> 3) & 0x01; 
	var s_mux4 = (array[2] >> 2) & 0x01; 
	var m_mux5 = (array[2] >> 1) & 0x01; 
	var s_mux5 = (array[2] >> 0) & 0x01; 
	
	$('.pa0402_pll_mux1').html("m: "+((m_mux1))+"<br/>s: "+((s_mux1)));
	$('.pa0402_pll_mux3').html("m: "+((m_mux3))+"<br/>s: "+((s_mux3)));
	$('.pa0402_pll_mux4').html("m: "+((m_mux4))+"<br/>s: "+((s_mux4)));
	$('.pa0402_pll_mux5').html("m: "+((m_mux5))+"<br/>s: "+((s_mux5)));
	/////////////////////////////////////////////////////////////////////
	var m_mux2 = (array[6] >> 5) & 0x01; 
	var s_mux2 = (array[6] >> 4) & 0x01; 
	
	$('.pa0402_pll_mux2').html("m: "+((m_mux2))+"<br/>s: "+((s_mux2)));
	/////////////////////////////////////////////////////////////////////
	var m_div3 = (array[7]  &0x1F) + 8;
	var s_div3 = (array[8]  &0x1F) + 8;
	$('.pa0402_pll_div3').html("m: "+((m_div3))+"<br/>s: "+((s_div3)));
	
	
	var m_div4 = ((array[15]  >> 4) & 0xFF) + 2;
	var s_div4 = (array[15]  &0x0F) + 2;
	$('.pa0402_pll_div4').html("m: "+((m_div4))+"<br/>s: "+((s_div4)));
	
	var m_div5 = ((array[16]  >> 4) & 0x07) + 2;
	var s_div5 = (array[16]  &0x07) + 2;
	$('.pa0402_pll_div5').html("m: "+((m_div5))+"<br/>s: "+((s_div5)));
	
	/////////////////////////////////////////////////////////////////////
	// Result:
	//console.log(dd_osc);
	//console.log(m_div0);
	//console.log(m_76);
	$('.pa0402_pll_result_ref_clk').html("m: "+((dd_osc/m_div0/m_76/m_10/m_32)));
	$('.pa0402_pll_result_br_clk').html("m: "+((dd_osc/m_div0/m_76/m_10/m_32*m_54)));
	$('.pa0402_pll_result_tp_clk').html("m: "+((dd_osc/m_div0/m_76/m_10/m_32*m_54*m_div4/m_div5)));
	$('.pa0402_pll_result_dd_clk').html("m: "+((dd_osc/m_div0/m_76/m_10/m_32*m_54*m_div4)));
}


function FD_Parser(){
	$('#pa0402_fd_sram_cal').click(function(){
		var content = $('#pa0402_fd_sram_content').val();
		var lines = content.split('\n');
		var tmp_line;
		var tmp_val = 0;
		var buffer = 0;
		var i = 0, j = 0, k = 0;
		var offset = 0;
		
		var checksum_main_status = 0;
		var checksum_main_oe = 0;
		var checkusm_sub_status = 0;
		var checksum_sub_oe = 0;
		
		var g_checksum_main_status = 0;
		var g_checksum_main_oe = 0;
		var g_checkusm_sub_status = 0;
		var g_checksum_sub_oe = 0;
		
		//clear highlight
		$('.fd_sram').css('background-color', 'transparent');
		
		for(i = 0;i < lines.length;i++){
			tmp_line = lines[i].split('\t');
			
			for(k = 0; k < tmp_line.length; k++){
				buffer = parseInt($.trim(tmp_line[k]), 16);
				
				var item_name = '.fd_sram_b'+(offset);
				//console.log(item_name);
				$(item_name).text("0x"+buffer.toString(16).padStart(2,"0"));
				
				if(buffer > 0){
					var test_i = 255;
					if(offset >= 16)
						test_i = (offset - 16) % 12;
					
					if(offset == 7) // ic number
						$(item_name).css('background-color', '#ffff99');
					/*else if((test_i == 0) || (test_i == 1) || (test_i == 2)) // tp fail
						$(item_name).css('background-color', '#D2DE32');
					else //dd fail
						$(item_name).css('background-color', '#ffb3cc');
					*/
					if(offset >= 4 && offset < (4+96+4)){ 
						checksum_main_status+= buffer;
					}
					else if(offset >= 0x25C && offset < (0x25C+96+4)){  // 8*12
						checksum_main_oe+= buffer;
					}
					else if(offset >= 0xD4 && offset < (0xD4+192+4)){ //8 * 24
						checkusm_sub_status+= buffer;
					}
					else if(offset >= 0x2C4 && offset < (0x2C4+192+4)){ 
						checksum_sub_oe+= buffer;
					}
					else if(offset == 0){
						g_checksum_main_status = buffer;
					}
					else if(offset == 0xD0){
						g_checkusm_sub_status = buffer;
					}
					else if(offset == 0x258){
						g_checksum_main_oe = buffer;
					}
					else if(offset == 0x2C0){
						g_checksum_sub_oe = buffer;
					}
				}
				offset++;
			}
		}
		
		
		// Checker.............. fd_sram_main_oe/ fd_sram_main_status
		$(".fd_sram_main_oe").each(function() {
			var current_offset = parseInt($(this).attr('msoffset'), 10);
			var current_item = '.fd_sram_main_status[msoffset = "'+current_offset+'"]';
			var cmp_1 = parseInt($(current_item).text(), 16);
			var cmp_2 = parseInt($(this).text(), 16);
			if(cmp_1 & cmp_2){
				$(current_item).css('background-color', '#ffb3cc');
				$(this).css('background-color', '#ffb3cc');
			}
			else if(cmp_1){ // status only
				$(current_item).css('background-color', '#D2DE32');
				$(this).css('background-color', '#D2DE32');
			}
		});
		
		// Checker.............. fd_sram_sub_oe/ fd_sram_sub_status
		$(".fd_sram_sub_oe").each(function() {
			var current_offset = parseInt($(this).attr('msoffset'), 10);
			var current_item = '.fd_sram_sub_status[msoffset = "'+current_offset+'"]';
			var cmp_1 = parseInt($(current_item).text(), 16);
			var cmp_2 = parseInt($(this).text(), 16);
			if(cmp_1 & cmp_2){
				$(current_item).css('background-color', '#ffb3cc');
				$(this).css('background-color', '#ffb3cc');
			}
			else if(cmp_1){ // status only
				$(current_item).css('background-color', '#D2DE32');
				$(this).css('background-color', '#D2DE32');
			}
		});
		// Checksum Checker..........
		// Status
		checksum_main_status = (0x100 - (checksum_main_status & 0xFF)) & 0xFF;
		checksum_main_oe = (0x100 - (checksum_main_oe & 0xFF)) & 0xFF;
		checksum_sub_oe = (0x100 - (checksum_sub_oe & 0xFF)) & 0xFF;
		checkusm_sub_status = (0x100 - (checkusm_sub_status & 0xFF)) & 0xFF;
		
		if(g_checksum_sub_oe != checksum_sub_oe){
			console.log("sub item OE checksum mismatch!! calcuated checksum is "+checksum_sub_oe+", but FW shows "+g_checksum_sub_oe);
			$('.fd_sram_b704').css('background-color', '#d9b3ff');
		}
		if(g_checksum_main_status != checksum_main_status){
			console.log("main item status checksum mismatch!! calcuated checksum is "+checksum_main_status+", but FW shows "+g_checksum_main_status);
			$('.fd_sram_b0').css('background-color', '#d9b3ff');
			
		}
		if(g_checksum_main_oe != checksum_main_oe){
			console.log("main item OE checksum mismatch!! calcuated checksum is "+checksum_main_oe+", but FW shows "+g_checksum_main_oe);
			$('.fd_sram_b600').css('background-color', '#d9b3ff');
		}
		if(g_checkusm_sub_status != checkusm_sub_status){
			console.log("sub item status checksum mismatch!! calcuated checksum is "+checkusm_sub_status+", but FW shows "+g_checkusm_sub_status);
			$('.fd_sram_b208').css('background-color', '#d9b3ff');
		}
    });
}

function FD_Parser_0412(){
	$('#pa0412_fd_sram_cal').click(function(){
		var content = $('#pa0412_fd_sram_content').val();
		var lines = content.split('\n');
		var tmp_line;
		var tmp_val = 0;
		var buffer = 0;
		var i = 0, j = 0, k = 0;
		var offset = 0;
		
		var checksum_main_status = 0;
		var checksum_main_oe = 0;
		var checkusm_sub_status = 0;
		var checksum_sub_oe = 0;
		
		var g_checksum_main_status = 0;
		var g_checksum_main_oe = 0;
		var g_checkusm_sub_status = 0;
		var g_checksum_sub_oe = 0;
		
		//clear highlight
		$('.fd_sram_0412').css('background-color', 'transparent');
		
		for(i = 0;i < lines.length;i++){
			tmp_line = lines[i].split('\t');
			
			for(k = 0; k < tmp_line.length; k++){
				buffer = parseInt($.trim(tmp_line[k]), 16);
				
				var item_name = '.fd_sram_0412_b'+(offset);
				//console.log(item_name);
				$(item_name).text("0x"+buffer.toString(16).padStart(2,"0"));
				
				if(buffer > 0){
					var test_i = 255;
					if(offset >= 16)
						test_i = (offset - 16) % 12;
					
					if(offset == 7) // ic number
						$(item_name).css('background-color', '#ffff99');
					/*else if((test_i == 0) || (test_i == 1) || (test_i == 2)) // tp fail
						$(item_name).css('background-color', '#D2DE32');
					else //dd fail
						$(item_name).css('background-color', '#ffb3cc');
					*/
					if(offset >= 4 && offset < (4+128+4)){ 
						checksum_main_status+= buffer;
					}
					else if(offset >= 0x29C && offset < (0x29C+128+4)){  
						checksum_main_oe+= buffer;
					}
					else if(offset >= 0x114 && offset < (0x114+192+4)){ 
						checkusm_sub_status+= buffer;
					}
					else if(offset >= 0x324 && offset < (0x324+192+4)){ 
						checksum_sub_oe+= buffer;
					}
					else if(offset == 0){
						g_checksum_main_status = buffer;
					}
					else if(offset == 0x110){
						g_checkusm_sub_status = buffer;
					}
					else if(offset == 0x298){
						g_checksum_main_oe = buffer;
					}
					else if(offset == 0x320){
						g_checksum_sub_oe = buffer;
					}
				}
				offset++;
			}
		}
		
		
		// Checker.............. fd_sram_main_oe/ fd_sram_main_status
		$(".fd_sram_0412_main_oe").each(function() {
			var current_offset = parseInt($(this).attr('msoffset'), 10);
			var current_item = '.fd_sram_0412_main_status[msoffset = "'+current_offset+'"]';
			var cmp_1 = parseInt($(current_item).text(), 16);
			var cmp_2 = parseInt($(this).text(), 16);
			if(cmp_1 & cmp_2){
				$(current_item).css('background-color', '#ffb3cc');
				$(this).css('background-color', '#ffb3cc');
			}
			else if(cmp_1){ // status only
				$(current_item).css('background-color', '#D2DE32');
				$(this).css('background-color', '#D2DE32');
			}
		});
		
		// Checker.............. fd_sram_sub_oe/ fd_sram_sub_status
		$(".fd_sram_0412_sub_oe").each(function() {
			var current_offset = parseInt($(this).attr('msoffset'), 10);
			var current_item = '.fd_sram_0412_sub_status[msoffset = "'+current_offset+'"]';
			var cmp_1 = parseInt($(current_item).text(), 16);
			var cmp_2 = parseInt($(this).text(), 16);

			if(cmp_1 & cmp_2){
				$(current_item).css('background-color', '#ffb3cc');
				$(this).css('background-color', '#ffb3cc');
			}
			else if(cmp_1){ // status only
				$(current_item).css('background-color', '#D2DE32');
				$(this).css('background-color', '#D2DE32');
			}
		});
		// Checksum Checker..........
		// Status
		checksum_main_status = (0x100 - (checksum_main_status & 0xFF)) & 0xFF;
		checksum_main_oe = (0x100 - (checksum_main_oe & 0xFF)) & 0xFF;
		checksum_sub_oe = (0x100 - (checksum_sub_oe & 0xFF)) & 0xFF;
		checkusm_sub_status = (0x100 - (checkusm_sub_status & 0xFF)) & 0xFF;
		
		if(g_checksum_sub_oe != checksum_sub_oe){
			console.log("sub item OE checksum mismatch!! calcuated checksum is "+checksum_sub_oe+", but FW shows "+g_checksum_sub_oe);
			$('.fd_sram_0412_b800').css('background-color', '#d9b3ff');
		}
		if(g_checksum_main_status != checksum_main_status){
			console.log("main item status checksum mismatch!! calcuated checksum is "+checksum_main_status+", but FW shows "+g_checksum_main_status);
			$('.fd_sram_0412_b0').css('background-color', '#d9b3ff');
			
		}
		if(g_checksum_main_oe != checksum_main_oe){
			console.log("main item OE checksum mismatch!! calcuated checksum is "+checksum_main_oe+", but FW shows "+g_checksum_main_oe);
			$('.fd_sram_0412_b664').css('background-color', '#d9b3ff');
		}
		if(g_checkusm_sub_status != checkusm_sub_status){
			console.log("sub item status checksum mismatch!! calcuated checksum is "+checkusm_sub_status+", but FW shows "+g_checkusm_sub_status);
			$('.fd_sram_0412_b272').css('background-color', '#d9b3ff');
		}
    });
}

function Word_parser(word_val, bit_len, start_bit){
	var result = word_val;

	var tmp_bitand = Math.pow(2, bit_len);
	tmp_bitand-=1;
	result = (result >> start_bit) &  tmp_bitand;

	return result;
}

function To_word(word_val, bit_len, start_bit, value){
	var result = 0;

	var tmp_bitand = Math.pow(2, bit_len);
	tmp_bitand-=1;
	tmp_bitand  = tmp_bitand << start_bit;

	var tmp_bitor = (value << start_bit);
	// console.log(tmp_bitor);

	var tmp_bitnot = 0xFFFFFFFF - tmp_bitand;
	// console.log(tmp_bitnot);

	result = (word_val & tmp_bitnot) | tmp_bitor;
	// console.log(result);
	return result;
}

function PA0412_Val_To_V(){
	var temp_v = 0;
	var vrh = parseInt($('#pa0412_vr_vrh').html(), 10);
	var vrl = parseInt($('#pa0412_vr_vrl').html(), 10);
	
	var vrh_v = Math.round(((1.8/36)*(37.7+vrh)) *100)/100;
	var vrl_v = Math.round(((-1.8/18)*(29.1+vrl))*100)/100; 

	$('#pa0412_vr_vrh_v').html(vrh_v + " V");
	$('#pa0412_vr_vrl_v').html(vrl_v + " V");

	// VR2H
	var vr2h = parseInt($('#pa0412_vr_vr2h').html(), 10);
	temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(vr2h+30);
	var vr2h_v = Math.round(temp_v * 100)/100;
	$('#pa0412_vr_vr2h_v').html(vr2h_v + " V");
	// VR2
	var vr2 = parseInt($('#pa0412_vr_vr2').html(), 10);
	if(vr2 == 31)
	{
		temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(vr2+1);
		temp_v = Math.round(temp_v * 100)/100;
	}
	else{
		temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*vr2;
		temp_v = Math.round(temp_v * 100)/100;
	}
	var vr2_v = temp_v;
	$('#pa0412_vr_vr2_v').html(vr2_v + " V");
	// VR1
	var vr1 = parseInt($('#pa0412_vr_vr1').html(), 10);
	if(vr1 == 31)
	{
		temp_v = vrl_v + (vrh_v-vrl_v)/61 * (2*vr1 - 1);
		temp_v = Math.round(temp_v * 100)/100;
	}
	else{
		temp_v = vrl_v + (vrh_v-vrl_v)/61 * 2*vr1;
		temp_v = Math.round(temp_v * 100)/100;
		// console.log(temp_v);
	}
	var vr1_v = temp_v;
	$('#pa0412_vr_vr1_v').html(vr1_v + " V");

	// CDACL
	var cdacl = parseInt($('#pa0412_vr_cdacl').html(), 10);
	if(cdacl == 0)
	{
		temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*cdacl;
		temp_v = Math.round(temp_v * 100)/100;
	}
	else{
		temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(cdacl+1);
		temp_v = Math.round(temp_v * 100)/100;
	}
	var cdacl_v = temp_v;
	$('#pa0412_vr_cdacl_v').html(temp_v + " V");

	// CDACH
	var cdach = parseInt($('#pa0412_vr_cdach').html(), 10);
	temp_v = vrl_v + (vrh_v-vrl_v)/61 * 1*(cdach+30);
	temp_v = Math.round(temp_v * 100)/100;
	var cdach_v = temp_v;
	$('#pa0412_vr_cdach_v').html(cdach_v + " V");


	// Fill out swing
	$('#pa0412_vr_swing').html((vr2h_v -vr2_v).toFixed(3) +" V");
	$('#pa0412_vr_cdacl_swing').html((vr1_v - cdacl_v).toFixed(3) +" V");
	$('#pa0412_vr_cdach_swing').html((cdach_v - vr1_v).toFixed(3) +" V");

	//-----------------------------------------------
	// Fill out output word
	// Get input value-------------------------------------------------------------
	var dc_2 = parseInt($('#pa0412_input_dc_w2').val(), 16); 
	var dc_4 = parseInt($('#pa0412_input_dc_w4').val(), 16); 
	var dc_11 = parseInt($('#pa0412_input_dc_w11').val(), 16); 
	dc_2 = To_word(dc_2, 4, 0, vrh); // VRH
	dc_2 = To_word(dc_2, 4, 16, vrl); // VRL
	$('#vr_0412_output_status_2').val("0x"+dc_2.toString(16).padStart(8, '0').toUpperCase());

	dc_4 = To_word(dc_4, 5, 15, cdacl); // CDACL
	dc_4 = To_word(dc_4, 5, 20, cdach); // CDACH
	dc_4 = To_word(dc_4, 5, 0, vr1); // VR1
	$('#vr_0412_output_status_4').val("0x"+dc_4.toString(16).padStart(8, '0').toUpperCase());

	dc_11 = To_word(dc_11, 5, 8, vr2h); // VR2H
	dc_11 = To_word(dc_11, 5, 0, vr2); // VR2
	$('#vr_0412_output_status_11').val("0x"+dc_11.toString(16).padStart(8, '0').toUpperCase());
}


function PA0402_Val_To_V(){
	var vrh = parseInt($('#pa0402_vr_vrh').html(), 10);
	var vrh_voltage = Lookup_VRH(vrh);
	// console.log("VRH is "+vrh_voltage);
	$('#pa0402_vr_vrh_v').html(vrh_voltage + " V");

	var vr1 = parseInt($('#pa0402_vr_vr1').html(), 10);
	var vr2 = parseInt($('#pa0402_vr_vr2').html(), 10);
	var vr6 = parseInt($('#pa0402_vr_vr6').html(), 10);
	var cdacl = parseInt($('#pa0402_vr_cdacl').html(), 10);
	var cdach = parseInt($('#pa0402_vr_cdach').html(), 10);

	var vr1_v = VR_Table[VR_offset_switch+(7*vr1)+1];
	var vr2_v = VR_Table[VR_offset_switch+(7*vr2)+0];
	var vr6_v = VR_Table[VR_offset_switch+(7*vr6)+6];
	var cdacl_v = VR_Table[VR_offset_switch+(7*cdacl)+3];
	var cdach_v = VR_Table[VR_offset_switch+(7*cdach)+2];
	
	$('#pa0402_vr_vr1_v').html(vr1_v +" V");
	$('#pa0402_vr_vr2_v').html(vr2_v +" V");
	$('#pa0402_vr_vr6_v').html(vr6_v +" V");
	$('#pa0402_vr_cdacl_v').html(cdacl_v +" V");
	$('#pa0402_vr_cdach_v').html(cdach_v +" V");

	// Fill out swing
	$('#pa0402_vr_swing').html((vr1_v -vr2_v).toFixed(3) +" V");
	$('#pa0402_vr_cdacl_swing').html((cdacl_v - vr6_v).toFixed(3) +" V");
	$('#pa0402_vr_cdach_swing').html((vr6_v - cdach_v).toFixed(3) +" V");

	//-----------------------------------------------
	// Fill out output word
	// Get input value-------------------------------------------------------------
	var dc_2 = parseInt($('#pa0402_input_dc_w2').val(), 16); //console.log(dc_2);
	var dc_3 = parseInt($('#pa0402_input_dc_w3').val(), 16); //console.log(dc_3);
	dc_2 = To_word(dc_2, 4, 3, vrh); // VRH
	dc_2 = To_word(dc_2, 5, 7, vr1); // VR1
	dc_2 = To_word(dc_2, 5, 12, vr2); // VR2
	dc_2 = To_word(dc_2, 5, 27, vr6); // VR6

	dc_3 = To_word(dc_3, 5, 20, cdacl); // CDAC_L
	dc_3 = To_word(dc_3, 5, 15, cdach); // CDAC_H

	$('#vr_0402_output_status_2').val("0x"+dc_2.toString(16).padStart(8, '0').toUpperCase());
	$('#vr_0402_output_status_3').val("0x"+dc_3.toString(16).padStart(8, '0').toUpperCase());
}

function Pa0402_VR_Cal(){
	$('.pa0402_input_dc').click(function(){
		// Get input value-------------------------------------------------------------
		var dc_2 = parseInt($('#pa0402_input_dc_w2').val(), 16); //console.log(dc_2);
		var dc_3 = parseInt($('#pa0402_input_dc_w3').val(), 16); //console.log(dc_3);
		// Get VRH---------------------------------------------------------------------
		var vrh = (dc_2 >> 3 ) &0x0F; 
		$('#pa0402_vr_vrh').html(vrh);
		// VR1
		var vr1 = (dc_2 >> 7 ) &0x1F; 
		$('#pa0402_vr_vr1').html(vr1);
		// VR2
		var vr2 = (dc_2 >> 12 ) &0x1F; 
		$('#pa0402_vr_vr2').html(vr2);
		// VR6
		var vr6 = (dc_2 >> 27 ) &0x1F; 
		$('#pa0402_vr_vr6').html(vr6);
		// CDAC_L
		var cdac_l = (dc_3 >> 20 ) &0x1F; 
		$('#pa0402_vr_cdacl').html(cdac_l);
		// CDAC_H
		var cdac_h = (dc_3 >> 15 ) &0x1F; 
		$('#pa0402_vr_cdach').html(cdac_h);

		PA0402_Val_To_V();
		
		$('#pa0402_vr_cal').prop('disabled', false);
	});
	
	$('.pa0412_input_dc').click(function(){
		// Get input value-------------------------------------------------------------
		var dc_2 = parseInt($('#pa0412_input_dc_w2').val(), 16); 
		var dc_4 = parseInt($('#pa0412_input_dc_w4').val(), 16); 
		var dc_11 = parseInt($('#pa0412_input_dc_w11').val(), 16); 
		// Get VRH/VRL-----------------------------------------------------------------
		var vrh = (dc_2 >> 0 ) &0x0F; 
		$('#pa0412_vr_vrh').html(vrh);
		var vrl = (dc_2 >> 16 ) &0x0F; 
		$('#pa0412_vr_vrl').html(vrl);
		// VR2H
		var vr2h = (dc_11 >> 8 ) &0x1F;
		$('#pa0412_vr_vr2h').html(vr2h);
		// VR2
		var vr2 = (dc_11 >> 0 ) &0x1F;
		$('#pa0412_vr_vr2').html(vr2);		
		// CDAC_L
		var cdac_l = (dc_4 >> 15 ) &0x1F;
		$('#pa0412_vr_cdacl').html(cdac_l);
		// CDAC_H
		var cdac_h = (dc_4 >> 20 ) &0x1F; 
		$('#pa0412_vr_cdach').html(cdac_h);
		// VR1
		var vr1 = (dc_4 >> 0 ) &0x1F; 
		$('#pa0412_vr_vr1').html(vr1);
	
		PA0412_Val_To_V();
		
		$('#pa0412_vr_cal').prop('disabled', false);
	});

	//----------------------------------------
	//----------------------------------------
	$('#pa0402_vr_cal').click(function(){
		PA0402_Val_To_V();
	});
	$('#pa0412_vr_cal').click(function(){
		PA0412_Val_To_V();
	});
}

$(document).ready(function(){
	SCU_table();
	Checksum_calculate();
	
	//////////////////////////////
	// Init PLL svg

	var default_setting = "00	00	45	77	32	30	10	3B	3B	FF	FF	22	00	50	50	44	22	96	88	14";
	$('#pa0402_pll_content').val(default_setting);
	Parse_PLL(0); 

	$('#pa0402_pll_cal').click(function(){
		Parse_PLL(0);
	});
	/////////////////////////////
	FD_Parser();
	FD_Parser_0412();
	////////////////////////////
	Pa0402_VR_Cal();

});