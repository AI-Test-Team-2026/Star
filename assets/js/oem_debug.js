

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

function E5_bank3_parse(content){
	var lines = content.split('\t');
		
	var buffer = 0;
	var i = 0;

	for(i = 0;i < lines.length;i++){
		if(i == 5){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b3_pa5_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b3_pa5_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b3_pa5_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b3_pa5_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b3_pa5_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b3_pa5_5"]').text((buffer>>5)&0x01);
			$('.fail_det_grp[addr="b3_pa5_6"]').text((buffer>>6)&0x01);
			$('.fail_det_grp[addr="b3_pa5_7"]').text((buffer>>7)&0x01);
		}
		else if(i == 6){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b3_pa6_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b3_pa6_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b3_pa6_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b3_pa6_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b3_pa6_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b3_pa6_5"]').text((buffer>>5)&0x01);
			$('.fail_det_grp[addr="b3_pa6_6"]').text((buffer>>6)&0x01);
			$('.fail_det_grp[addr="b3_pa6_7"]').text((buffer>>7)&0x01);
		}
		else if(i == 7){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b3_pa7_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b3_pa7_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b3_pa7_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b3_pa7_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b3_pa7_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b3_pa7_5"]').text((buffer>>5)&0x01);
			$('.fail_det_grp[addr="b3_pa7_6"]').text((buffer>>6)&0x01);
			$('.fail_det_grp[addr="b3_pa7_7"]').text((buffer>>7)&0x01);
		}
		else if(i == 8){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b3_pa8_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b3_pa8_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b3_pa8_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b3_pa8_3"]').text((buffer>>3)&0x01);
		}
	}
}


function E5_bank0_parse(content){
	var lines = content.split('\t');
		
	var buffer = 0;
	var i = 0;

	for(i = 0;i < lines.length;i++){
		if(i == 2){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b0_pa2_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b0_pa2_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b0_pa2_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b0_pa2_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b0_pa2_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b0_pa2_5"]').text((buffer>>5)&0x01);
			$('.fail_det_grp[addr="b0_pa2_6"]').text((buffer>>6)&0x01);
			$('.fail_det_grp[addr="b0_pa2_7"]').text((buffer>>7)&0x01);
		}
		else if(i == 3){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b0_pa3_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b0_pa3_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b0_pa3_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b0_pa3_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b0_pa3_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b0_pa3_5"]').text((buffer>>5)&0x01);
			$('.fail_det_grp[addr="b0_pa3_6"]').text((buffer>>6)&0x01);
			$('.fail_det_grp[addr="b0_pa3_7"]').text((buffer>>7)&0x01);
		}
		else if(i == 4){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b0_pa4_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b0_pa4_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b0_pa4_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b0_pa4_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b0_pa4_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b0_pa4_5"]').text((buffer>>5)&0x01);
			$('.fail_det_grp[addr="b0_pa4_6"]').text((buffer>>6)&0x01);
			$('.fail_det_grp[addr="b0_pa4_7"]').text((buffer>>7)&0x01);
		}
		else if(i == 5){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b0_pa5_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b0_pa5_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b0_pa5_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b0_pa5_3"]').text((buffer>>3)&0x01);
		}
		else if(i == 6){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b0_pa6_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b0_pa6_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b0_pa6_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b0_pa6_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b0_pa6_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b0_pa6_7"]').text((buffer>>7)&0x01);
		}
		else if(i == 7){
			buffer = parseInt($.trim(lines[i]), 16);
			
			$('.fail_det_grp[addr="b0_pa7_0"]').text((buffer)&0x01);
			$('.fail_det_grp[addr="b0_pa7_1"]').text((buffer>>1)&0x01);
			$('.fail_det_grp[addr="b0_pa7_2"]').text((buffer>>2)&0x01);
			$('.fail_det_grp[addr="b0_pa7_3"]').text((buffer>>3)&0x01);
			$('.fail_det_grp[addr="b0_pa7_4"]').text((buffer>>4)&0x01);
			$('.fail_det_grp[addr="b0_pa7_5"]').text((buffer>>5)&0x01);
			$('.fail_det_grp[addr="b0_pa7_6"]').text((buffer>>6)&0x01);
			$('.fail_det_grp[addr="b0_pa7_7"]').text((buffer>>7)&0x01);
		}
	}
}
function Cal_ADCCYC(){
	var buffer_3 = 0;

	var i = 0, tmp_value = 0, adccyc_value = 0;
	var tmp_class;
	for(i = 0; i < 16; i++){
		tmp_class = '.reg_adccyc[bit="'+i+'"]';
		tmp_value=parseInt($(tmp_class).text(), 10);
		if((tmp_value > 1) || (tmp_value < 0)){
			alert("Please enter binary");
			break;
		}
		adccyc_value |= (tmp_value << i);
	}
	//console.log("dac_value is 0x"+adccyc_value.toString(16));
	
	buffer_3 = ((adccyc_value >> 12) &0x0F); $('.reg_adccyc_hex[bit="15_12"]').text(buffer_3.toString(16));
	buffer_3 = ((adccyc_value >> 8) &0x0F); $('.reg_adccyc_hex[bit="11_8"]').text(buffer_3.toString(16));
	buffer_3 = ((adccyc_value >> 4) &0x0F); $('.reg_adccyc_hex[bit="7_4"]').text(buffer_3.toString(16));
	buffer_3 = ((adccyc_value) &0x0F); $('.reg_adccyc_hex[bit="3_0"]').text(buffer_3.toString(16));
	
}
function Cal_DAC(){
	var buffer_3 = 0;

	var i = 0, tmp_value = 0, dac_value = 0;
	var tmp_class;
	for(i = 0; i < 19; i++){
		tmp_class = '.reg_dacset[bit="'+i+'"]';
		tmp_value=parseInt($(tmp_class).text(), 10);
		if((tmp_value > 1) || (tmp_value < 0)){
			alert("Please enter binary");
			break;
		}
		dac_value |= (tmp_value << i);
	}
	//console.log("dac_value is 0x"+dac_value.toString(16));
	
	buffer_3 = ((dac_value >> 16) & 0x0F); $('.reg_dacset_hex[bit="18_16"]').text(buffer_3.toString(16));
	buffer_3 = ((dac_value >> 12) & 0x0F); $('.reg_dacset_hex[bit="15_12"]').text(buffer_3.toString(16));
	buffer_3 = ((dac_value >> 8) & 0x0F); $('.reg_dacset_hex[bit="11_8"]').text(buffer_3.toString(16));
	buffer_3 = ((dac_value >> 4) & 0x0F); $('.reg_dacset_hex[bit="7_4"]').text(buffer_3.toString(16));
	buffer_3 = dac_value & 0x00000F; $('.reg_dacset_hex[bit="3_0"]').text(buffer_3.toString(16));
	
	// DAC SLOPE
	var tmp = $('.reg_slope').text();
	$('.reg_slop_hex').text(tmp);
}
function Cal_ptba(){
	var buffer_3 = 0;
	var buffer_ori = 0, buffer_x = 0, buffer_y = 0;
	
	var i = 0, tmp_value = 0, ptba_value = 0;
	var tmp_class;
	for(i = 0; i < 24; i++){
		tmp_class = '.reg_ptba[bit="'+i+'"]';
		tmp_value=parseInt($(tmp_class).text(), 10);
		if((tmp_value > 1) || (tmp_value < 0)){
			alert("Please enter binary");
			break;
		}
		ptba_value |= (tmp_value << i);
	}
	//console.log("ptba is 0x"+ptba_value.toString(16));
	
	buffer_3 = ((ptba_value >> 20) & 0x0F);$('.reg_ptba_hex[bit="23_20"]').text(buffer_3.toString(16));
	buffer_3 = ((ptba_value >> 16) & 0x0F);$('.reg_ptba_hex[bit="19_16"]').text(buffer_3.toString(16));
	buffer_3 = ((ptba_value >> 12) & 0x0F);$('.reg_ptba_hex[bit="15_12"]').text(buffer_3.toString(16));
	buffer_3 = ((ptba_value >> 8) & 0x0F); $('.reg_ptba_hex[bit="11_8"]').text(buffer_3.toString(16));
	buffer_3 = ((ptba_value >> 4) & 0x0F); $('.reg_ptba_hex[bit="7_4"]').text(buffer_3.toString(16));
	buffer_3 = ((ptba_value) & 0x0F); $('.reg_ptba_hex[bit="3_0"]').text(buffer_3.toString(16));

	buffer_ori = ptba_value;
	buffer_x = ((buffer_ori >> 5) & 0x01)*4;
	buffer_x += ((buffer_ori >> 4) & 0x01)*2;
	buffer_x +=((buffer_ori >> 3) & 0x01);
	$('.reg_ptba[name="1_bit_setting"]').text(buffer_x);
	
	buffer_y = ((buffer_ori >> 20) & 0x01)*4;
	buffer_y += ((buffer_ori >> 19) & 0x01)*2;
	buffer_y +=((buffer_ori >> 18) & 0x01);
	$('.reg_ptba[name="base_setting"]').text(buffer_y);
	
	buffer_y = (1+0.5*buffer_y)/2; 
	$('.reg_ptba[name="base_current"]').text(buffer_y);
	// Current (uA)
	buffer_ori = buffer_y*(1+buffer_x);
	$('.reg_ptba[name="1_bit_current"]').text(buffer_ori);
	
}
function Cal_voltage(){
	var vrh =0, vr1 = 0, vr2 = 0, vr3 = 0, vr4 = 0, vr5 = 0, vr6 = 0;
	var v_vrh =0, v_vr1 = 0, v_vr2 = 0, v_vr3 = 0, v_vr4 = 0, v_vr5 = 0, v_vr6 = 0;
	
	vrh = parseInt($('.reg_vr[name="vrh"]').text(), 16);
	vr1 = parseInt($('.reg_vr[name="vr1"]').text(), 16);
	vr2 = parseInt($('.reg_vr[name="vr2"]').text(), 16);
	vr3 = parseInt($('.reg_vr[name="vr3"]').text(), 16);
	vr4 = parseInt($('.reg_vr[name="vr4"]').text(), 16);
	vr5 = parseInt($('.reg_vr[name="vr5"]').text(), 16);
	vr6 = parseInt($('.reg_vr[name="vr6"]').text(), 16);
	
	//Cal....
	v_vrh = (1.8/24)*(58+2*(vrh));
	v_vr1 = (v_vrh/61)*(2*vr1);
	v_vr2=  (v_vrh/61)*(2*vr2);
	v_vr3 = (v_vrh/61)*(2*vr3);
	v_vr4 = (v_vrh/61)*(2*vr4);
	v_vr5 = (v_vrh/61)*(2*vr5);
	v_vr6 = (v_vrh/61)*(2*vr6);
	
	$('.reg_vr_hex[name="vrh"]').text(v_vrh.toFixed(3));
	$('.reg_vr_hex[name="vr1"]').text(v_vr1.toFixed(3));
	$('.reg_vr_hex[name="vr2"]').text(v_vr2.toFixed(3));
	$('.reg_vr_hex[name="vr3"]').text(v_vr3.toFixed(3));
	$('.reg_vr_hex[name="vr4"]').text(v_vr4.toFixed(3));
	$('.reg_vr_hex[name="vr5"]').text(v_vr5.toFixed(3));
	$('.reg_vr_hex[name="vr6"]').text(v_vr6.toFixed(3));
}

function Fill_lfd(){
	var lfd_7, lfd_6, lfd_5, lfd_4, lfd_3, lfd_2, lfd_1, lfd_0 = 0;
	var result = 0;
	// LFD on===================================================
	lfd_7 = parseInt($('.C0_bank1_pa1_on[bit="7"]').text(), 2);
	lfd_6 = parseInt($('.C0_bank1_pa1_on[bit="6"]').text(), 2);
	lfd_5 = parseInt($('.C0_bank1_pa1_on[bit="5"]').text(), 2);
	lfd_4 = parseInt($('.C0_bank1_pa1_on[bit="4"]').text(), 2);
	lfd_3 = parseInt($('.C0_bank1_pa1_on[bit="3"]').text(), 2);
	lfd_2 = parseInt($('.C0_bank1_pa1_on[bit="2"]').text(), 2);
	lfd_1 = parseInt($('.C0_bank1_pa1_on[bit="1"]').text(), 2);
	lfd_0 = parseInt($('.C0_bank1_pa1_on[bit="0"]').text(), 2);
	result = (lfd_7 << 7) | (lfd_6 << 6) | (lfd_5 << 5) | (lfd_4 << 4) | (lfd_3 << 3) | (lfd_2 << 2) | (lfd_1 << 1) | (lfd_0); 
	$('#C0_bank1_pa1_val_on').text("0x"+result.toString(16));
	//console.log('result on is 0x'+result.toString(16));
	
	lfd_7 = parseInt($('.C0_bank1_pa2_on[bit="7"]').text(), 2);
	lfd_6 = parseInt($('.C0_bank1_pa2_on[bit="6"]').text(), 2);
	lfd_5 = parseInt($('.C0_bank1_pa2_on[bit="5"]').text(), 2);
	lfd_4 = parseInt($('.C0_bank1_pa2_on[bit="4"]').text(), 2);
	lfd_3 = parseInt($('.C0_bank1_pa2_on[bit="3"]').text(), 2);
	lfd_2 = parseInt($('.C0_bank1_pa2_on[bit="2"]').text(), 2);
	lfd_1 = parseInt($('.C0_bank1_pa2_on[bit="1"]').text(), 2);
	lfd_0 = parseInt($('.C0_bank1_pa2_on[bit="0"]').text(), 2);
	result = (lfd_7 << 7) | (lfd_6 << 6) | (lfd_5 << 5) | (lfd_4 << 4) | (lfd_3 << 3) | (lfd_2 << 2) | (lfd_1 << 1) | (lfd_0); 
	$('#C0_bank1_pa2_val_on').text("0x"+result.toString(16));
	//console.log('result on is 0x'+result.toString(16));
	
	lfd_7 = parseInt($('.C0_bank1_pa3_on[bit="7"]').text(), 2);
	lfd_6 = parseInt($('.C0_bank1_pa3_on[bit="6"]').text(), 2);
	lfd_5 = parseInt($('.C0_bank1_pa3_on[bit="5"]').text(), 2);
	lfd_4 = parseInt($('.C0_bank1_pa3_on[bit="4"]').text(), 2);
	lfd_3 = parseInt($('.C0_bank1_pa3_on[bit="3"]').text(), 2);
	lfd_2 = parseInt($('.C0_bank1_pa3_on[bit="2"]').text(), 2);
	lfd_1 = parseInt($('.C0_bank1_pa3_on[bit="1"]').text(), 2);
	lfd_0 = parseInt($('.C0_bank1_pa3_on[bit="0"]').text(), 2);
	result = (lfd_7 << 7) | (lfd_6 << 6) | (lfd_5 << 5) | (lfd_4 << 4) | (lfd_3 << 3) | (lfd_2 << 2) | (lfd_1 << 1) | (lfd_0); 
	$('#C0_bank1_pa3_val_on').text("0x"+result.toString(16));
	//console.log('result on is 0x'+result.toString(16));	
	
	// LFD off==================================================
	lfd_7 = parseInt($('.C0_bank1_pa1_off[bit="7"]').text(), 2);
	lfd_6 = parseInt($('.C0_bank1_pa1_off[bit="6"]').text(), 2);
	lfd_5 = parseInt($('.C0_bank1_pa1_off[bit="5"]').text(), 2);
	lfd_4 = parseInt($('.C0_bank1_pa1_off[bit="4"]').text(), 2);
	lfd_3 = parseInt($('.C0_bank1_pa1_off[bit="3"]').text(), 2);
	lfd_2 = parseInt($('.C0_bank1_pa1_off[bit="2"]').text(), 2);
	lfd_1 = parseInt($('.C0_bank1_pa1_off[bit="1"]').text(), 2);
	lfd_0 = parseInt($('.C0_bank1_pa1_off[bit="0"]').text(), 2);
	result = (lfd_7 << 7) | (lfd_6 << 6) | (lfd_5 << 5) | (lfd_4 << 4) | (lfd_3 << 3) | (lfd_2 << 2) | (lfd_1 << 1) | (lfd_0); 
	$('#C0_bank1_pa1_val_off').text("0x"+result.toString(16));
	//console.log('result on is 0x'+result.toString(16));
	
	lfd_7 = parseInt($('.C0_bank1_pa2_off[bit="7"]').text(), 2);
	lfd_6 = parseInt($('.C0_bank1_pa2_off[bit="6"]').text(), 2);
	lfd_5 = parseInt($('.C0_bank1_pa2_off[bit="5"]').text(), 2);
	lfd_4 = parseInt($('.C0_bank1_pa2_off[bit="4"]').text(), 2);
	lfd_3 = parseInt($('.C0_bank1_pa2_off[bit="3"]').text(), 2);
	lfd_2 = parseInt($('.C0_bank1_pa2_off[bit="2"]').text(), 2);
	lfd_1 = parseInt($('.C0_bank1_pa2_off[bit="1"]').text(), 2);
	lfd_0 = parseInt($('.C0_bank1_pa2_off[bit="0"]').text(), 2);
	result = (lfd_7 << 7) | (lfd_6 << 6) | (lfd_5 << 5) | (lfd_4 << 4) | (lfd_3 << 3) | (lfd_2 << 2) | (lfd_1 << 1) | (lfd_0); 
	$('#C0_bank1_pa2_val_off').text("0x"+result.toString(16));
	//console.log('result on is 0x'+result.toString(16));	
	
	lfd_7 = parseInt($('.C0_bank1_pa3_off[bit="7"]').text(), 2);
	lfd_6 = parseInt($('.C0_bank1_pa3_off[bit="6"]').text(), 2);
	lfd_5 = parseInt($('.C0_bank1_pa3_off[bit="5"]').text(), 2);
	lfd_4 = parseInt($('.C0_bank1_pa3_off[bit="4"]').text(), 2);
	lfd_3 = parseInt($('.C0_bank1_pa3_off[bit="3"]').text(), 2);
	lfd_2 = parseInt($('.C0_bank1_pa3_off[bit="2"]').text(), 2);
	lfd_1 = parseInt($('.C0_bank1_pa3_off[bit="1"]').text(), 2);
	lfd_0 = parseInt($('.C0_bank1_pa3_off[bit="0"]').text(), 2);
	result = (lfd_7 << 7) | (lfd_6 << 6) | (lfd_5 << 5) | (lfd_4 << 4) | (lfd_3 << 3) | (lfd_2 << 2) | (lfd_1 << 1) | (lfd_0); 
	$('#C0_bank1_pa3_val_off').text("0x"+result.toString(16));
	//console.log('result on is 0x'+result.toString(16));	
}

function Fill_reg(){
	var buffer_3 = 0;
	var buffer_ori = 0, buffer_x = 0, buffer_y = 0;
	
	var i = 0, tmp_value = 0;
	var tmp_class;
	// PTBA==================================================
	buffer_3 = parseInt($('#intput_reg_ptba').val(), 16);
	for(i = 0; i < 24; i++){
		tmp_class = '.reg_ptba[bit="'+i+'"]';
		tmp_value = ((buffer_3 >> i) & 0x01);
		$(tmp_class).text(tmp_value);
	}
	// ADCCYC==================================================
	buffer_3 = parseInt($('#intput_reg_adccyc').val(), 16);
	for(i = 0; i < 16; i++){
		tmp_class = '.reg_adccyc[bit="'+i+'"]';
		tmp_value = ((buffer_3 >> i) & 0x01);
		$(tmp_class).text(tmp_value);
	}
	// DACSET==================================================
	buffer_3 = parseInt($('#intput_reg_dacset').val(), 16);
	for(i = 0; i < 19; i++){
		tmp_class = '.reg_dacset[bit="'+i+'"]';
		tmp_value = ((buffer_3 >> i) & 0x01);
		$(tmp_class).text(tmp_value);
	}
	// SLOPE==================================================
	buffer_3 = parseInt($('#intput_reg_slope').val(), 16);
	$('.reg_slope').text(buffer_3);
	
	// VR
	buffer_3 = parseInt($('#intput_reg_vrh').val(), 16);
	$('.reg_vr[name="vrh"]').text(buffer_3.toString(16));
	
	buffer_3 = parseInt($('#intput_reg_vr1').val(), 16);
	$('.reg_vr[name="vr1"]').text(buffer_3.toString(16));
	
	buffer_3 = parseInt($('#intput_reg_vr2').val(), 16);
	$('.reg_vr[name="vr2"]').text(buffer_3.toString(16));
	
	buffer_3 = parseInt($('#intput_reg_vr3').val(), 16);
	$('.reg_vr[name="vr3"]').text(buffer_3.toString(16));
	
	buffer_3 = parseInt($('#intput_reg_vr4').val(), 16);
	$('.reg_vr[name="vr4"]').text(buffer_3.toString(16));
	
	buffer_3 = parseInt($('#intput_reg_vr5').val(), 16);
	$('.reg_vr[name="vr5"]').text(buffer_3.toString(16));
	
}

function SCU_table(){
	$('#cal_lfd').click(function(){	
		Fill_lfd();
	});
	$('#cal_reg').click(function(){	
		Fill_reg();
		
		Cal_ptba();
		Cal_voltage();
		Cal_DAC();
		Cal_ADCCYC();
	});
	$('#cal_ptba').click(function(){
        //console.log("SCU_Enter: Enter Button is pressed");
		Cal_ptba();
		Cal_voltage();
		Cal_DAC();
		Cal_ADCCYC();
    });
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
	$('#db_reg_rr_enter').click(function(){
		var rr = 0;
        rr = parseInt($('#rr_value').val(), 16);

		SCU_rr_table(rr);

    });
	//===========================================
	$('#db_fail_det_enter').click(function(){
		var fd_bank3 = $('#fail_e5_bank3').val();
		var fd_bank0 = $('#fail_e5_bank0').val();
		
		
		$('.fail_det_grp').text("0");
		E5_bank3_parse(fd_bank3);
		E5_bank0_parse(fd_bank0);
		
		
		$(".fail_det_grp").each(function() {
			$(this).parent('tr').removeClass('bg-warning');
			if($(this).text() === "1"){
				$(this).parent('tr').addClass('bg-warning');
			}
		});
    });
	
	$('#db_fail_det_clear').click(function(){
		$('#fail_e5_bank3').val("");
		$('#fail_e5_bank0').val("");

		$('.fail_det_grp').text("0");
		$(".fail_det_grp").each(function() {
			$(this).parent('tr').removeClass('bg-warning');
		});

    });
}

function SCU_rr_table(data){
	$('.scu_rr_table table').remove();
	var content = "";
	
	content = '<table class="table " style="text-align: center">';
	content+='<thead>';
	content+="<tr style=\"background-color: #d6d6c2\"><td colspan=\"8\">Reload_Status (8005_0000)</td></tr>\n";
	content+='</thead>';
	content+='		<tr>';
	content+='			<td style=\"background-color: #ffff99\"><p>bit [0]</p><p>Reload is Busy</p></td>';
	content+='			<td style=\"background-color: #ffff99\"><p>bit [1]</p><p>Reload Exception</p></td>';
	content+='			<td style=\"background-color: #ffff99\"><p>bit [2]</p><p></p></td>';
	content+='			<td style=\"background-color: #ffff99\"><p>bit [3]</p><p>Force Reload Break</p></td>';
	content+='			<td style=\"background-color: #ccff66\"><p>bit [4]</p><p>CRC8 Fail</p></td>';
	content+='			<td style=\"background-color: #ccff66\"><p>bit [5]</p><p>Command Error</p></td>';
	content+='			<td style=\"background-color: #ccff66\"><p>bit [6]</p><p>CRC32 Fail</p></td>';
	content+='			<td style=\"background-color: #ccff66\"><p>bit [7]</p><p>Compare Fail</p></td>';	
	content+='		</tr>';
	content+='		<tr>';
	content+='			<td style=\"background-color: #ffff99\">'+(data&0x01)+'</td>';
	content+='			<td style=\"background-color: #ffff99\">'+((data>>1)&0x1)+'</td>';
	content+='			<td style=\"background-color: #ffff99\">'+((data>>2)&0x1)+'</td>';
	content+='			<td style=\"background-color: #ffff99\">'+((data>>3)&0x1)+'</td>';
	content+='			<td style=\"background-color: #ccff66\">'+((data>>4)&0x1)+'</td>';
	content+='			<td style=\"background-color: #ccff66\">'+((data>>5)&0x1)+'</td>';
	content+='			<td style=\"background-color: #ccff66\">'+((data>>6)&0x1)+'</td>';
	content+='			<td style=\"background-color: #ccff66\">'+((data>>7)&0x1)+'</td>';
	content+='		</tr>';
	
	content+='		<tr >';
	content+='			<td colspan="8" style=\"background-color: #ccccff\"><p>bit [15:8]</p><p>Executing Command [7:0]</p></td>';		
	content+='		</tr>';
	content+='		<tr>';
	content+='			<td colspan="8" style=\"background-color: #ccccff\">'+((data>>8)&0xFF)+'</td>';	
	content+='		</tr>';
	
	content+='		<tr>';
	content+='			<td colspan="8" style=\"background-color: #ffff99\"><p>bit [31:16]</p><p>Excuting Index[15:0] for reload/schedule-CMD</p></td>';		
	content+='		</tr>';
	content+='		<tr>';
	content+='			<td colspan="8" style=\"background-color: #ffff99\">'+((data>>16)&0xFFFF)+'</td>';	
	content+='		</tr>';
	content+='	</table>';
	
	
	$('.scu_rr_table').append(content);
	
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
$(document).ready(function(){
	SCU_table();
	Checksum_calculate();
});