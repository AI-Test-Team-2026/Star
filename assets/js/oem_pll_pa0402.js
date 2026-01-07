function Get_2N(inputval){
	var res = 0;
	if(inputval == 3)
		res = 8;
	else if(inputval == 2)
		res = 4;
	else if(inputval == 1)
		res = 2;
	else
		res = 1;
	return res;
}

function Parse_PLL(inputfrom){
	var array = [];
	var dd_osc;

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

		// PA0 --> dd osc 
		dd_osc = parseInt($('#pa0402_pll_dd_osc_input').val(),10);//array[0];
	}
	else{ // from bin

		// Cal dd osc
		dd_osc = 90; // FIXED 
		
		array[2] = parseInt($('.oem_check_interface[name="cb_bk3_pa2"]').text(), 16);
		array[3] = parseInt($('.oem_check_interface[name="cb_bk3_pa3"]').text(), 16);
		array[4] = parseInt($('.oem_check_interface[name="cb_bk3_pa4"]').text(), 16);
		array[5] = parseInt($('.oem_check_interface[name="cb_bk3_pa5"]').text(), 16);
		array[6] = parseInt($('.oem_check_interface[name="cb_bk3_pa6"]').text(), 16);
		array[7] = 0x3B; // FIXED --> DIV3 fixed
		array[8] = 0x3B; // FIXED
		array[15] = parseInt($('.oem_check_interface[name="cb_bk3_pa15"]').text(), 16);
		array[16] = parseInt($('.oem_check_interface[name="cb_bk3_pa16"]').text(), 16);
	}
	/////////////////////////////////////////////////////////////
	// Calculate.......................................
	$('.pa0402_pll_dd_osc').text(dd_osc);
	var m_div0 =  ((array[3] >> 4 ) &0x0F) + 2; // m: DIV0
	var s_div0 = (array[3] & 0x0F) +2;          // s: DIV0
	var m_76 = Get_2N((array[4] >> 6) & 0x03);  // m: DIV7
	var m_54 = Get_2N((array[4] >> 4) & 0x03);  // m: DIV6
	var m_32 = Get_2N((array[4] >> 2) & 0x03);  // m: DIV2
	var m_10 = Get_2N((array[4] >> 0) & 0x03);  // m: DIV1
	var s_76 = Get_2N((array[5] >> 6) & 0x03);  // s: DIV7
	var s_54 = Get_2N((array[5] >> 4) & 0x03);  // S: DIV6
	var s_32 = Get_2N((array[5] >> 2) & 0x03);  // s: DIV2
	var s_10 = Get_2N((array[5] >> 0) & 0x03);  // s: DIV1

	var m_div3 = (array[7]  &0x1F) + 8;          // m: DIV3
	var s_div3 = (array[8]  &0x1F) + 8;          // s: DIV3
	var m_div4 = ((array[15]  >> 4) & 0xFF) + 2; // m: DIV4
	var s_div4 = (array[15]  &0x07) + 2;         // s: DIV4
	var m_div5 = ((array[16]  >> 4) & 0x07) + 2; // m: DIV5
	var s_div5 = (array[16]  &0x07) + 2;         // s: DIV5

	var m_mux1 = (array[2] >> 7) & 0x01;  // m: mux1
	var s_mux1 = (array[2] >> 6) & 0x01;  // s: mux1
	var m_mux3 = (array[2] >> 5) & 0x01;  // m: mux3
	var s_mux3 = (array[2] >> 4) & 0x01;  // s: mux3
	var m_mux4 = (array[2] >> 3) & 0x01;  // m: mux4
	var s_mux4 = (array[2] >> 2) & 0x01;  // s: mux4
	var m_mux5 = (array[2] >> 1) & 0x01;  // m: mux5
	var s_mux5 = (array[2] >> 0) & 0x01;  // s: mux5
	var m_mux2 = (array[6] >> 5) & 0x01;  // m: mux2
	var s_mux2 = (array[6] >> 4) & 0x01;  // s: mux2
	//console.log(array);
	/////////////////////////////////////////////////////////////
	$('.pa0402_pll_div0').html("m: "+(m_div0)+"<br/>s: "+(s_div0));
	$('.pa0402_pll_div7').html("m: "+((m_76))+"<br/>s: "+((s_76)));
	$('.pa0402_pll_div1').html("m: "+((m_10))+"<br/>s: "+((s_10)));
	$('.pa0402_pll_div2').html("m: "+((m_32))+"<br/>s: "+((s_32)));
	$('.pa0402_pll_div6').html("m: "+((m_54))+"<br/>s: "+((s_54)));

	$('.pa0402_pll_mux1').html("m: "+((m_mux1))+"<br/>s: "+((s_mux1)));
	$('.pa0402_pll_mux3').html("m: "+((m_mux3))+"<br/>s: "+((s_mux3)));
	$('.pa0402_pll_mux4').html("m: "+((m_mux4))+"<br/>s: "+((s_mux4)));
	$('.pa0402_pll_mux5').html("m: "+((m_mux5))+"<br/>s: "+((s_mux5)));

	$('.pa0402_pll_mux2').html("m: "+((m_mux2))+"<br/>s: "+((s_mux2)));
	$('.pa0402_pll_div3').html("m: "+((m_div3))+"<br/>s: "+((s_div3)));
	$('.pa0402_pll_div4').html("m: "+((m_div4))+"<br/>s: "+((s_div4)));
	$('.pa0402_pll_div5').html("m: "+((m_div5))+"<br/>s: "+((s_div5)));
	/////////////////////////////////////////////////////////////////////
	// Result:
	//console.log(dd_osc);
	//console.log(m_div0);
	//console.log(m_76);
	var pll_result_ref_clk = dd_osc/m_div0/m_76/m_10/m_32;
	var pll_result_br_clk = dd_osc/m_div0/m_76/m_10/m_32*m_54;
	var pll_result_tp_clk = dd_osc/m_div0/m_76/m_10/m_32*m_54*m_div4/m_div5;
	var pll_result_dd_clk = dd_osc/m_div0/m_76/m_10/m_32*m_54*m_div4;
	$('.pa0402_pll_result_ref_clk').html("m: "+(pll_result_ref_clk.toFixed(2)));
	$('.pa0402_pll_result_br_clk').html("m: "+(pll_result_br_clk.toFixed(2)));
	$('.pa0402_pll_result_tp_clk').html("m: "+(pll_result_tp_clk.toFixed(2)));
	$('.pa0402_pll_result_dd_clk').html("m: "+(pll_result_dd_clk.toFixed(2)));

}


