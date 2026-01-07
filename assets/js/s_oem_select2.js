
function Released_fw_select2(){
	$('.released_fw_compare').select2({
		placeholder: "Select a state",
		allowClear: true,
		width: '100%',
		maximumInputLength: 10,
		minimumInputLength: 0,
		/*tags: true,*/
	});
	
	
	$('#select2_releasedfw').on("select2:select", function (e) { 
		var data = e.params.data.text;
		if(data=='all'){
			$("#select2_releasedfw > option").prop("selected", false);
			$("#select2_releasedfw > optgroup >option").prop("selected", true);
			$("#select2_releasedfw").trigger("change");
		}
    });
}

function Create_search_result(data){
	var content = '';
	var released_fw;
	var s_str = '';
	// Get key first
	
	var isprojectlist = 0;
	if($('div.row').hasClass('oem_flag_project')){
		isprojectlist = 1;
		
		
	}
	
	
	var i = 0;
	for(i = 0; i< data.length; i++){
		
		s_str = '';
		
		$.each(data[i], function( key, value ) {
			//console.log('key is '+key);
			//console.log('val is '+value);
			if((key == "released_fw") || (key == "C_id")){
				
			}
			else if(key == "value"){ // dd init .h
				//console.log(jQuery.type((value)));
				
				var dd_init_h = value.split('\n');
				var info_string = Dd_init_to_json(dd_init_h, 1);
				
				if(info_string ===""){
					
				}
				else{
					s_str+=info_string;
				}
				//console.log(info_string);
			}
			else{
				s_str += '<span class="export_select2_fw_func">'+key+'</span>: ';
				s_str += '<span class="export_select2_fw_value" style="font-weight: bold;">'+value+'</span><br>';
			}
			
		});
		
	
		content+='<div class="col-sm-4">';
		content+='	<div class="card card-info">';
		content+='		<div class="card-header with-border export_select2_fw_title">';
		if(isprojectlist == 1){
			var c_id = data[i]["C_id"];
			var cn = '.oem_project_list_cid[cid="'+c_id+'"]';
			var panel_name = $(cn).attr("name");
			
			content+='			<h3 class="card-title">'+panel_name+' '+data[i]["released_fw"]+'</h3>';
		}
		else{
			content+='			<h3 class="card-title">'+data[i]["released_fw"]+'</h3>';
		}
		content+='		</div><!-- /.card-header -->';
		content+='		<div class="card-body export_select2_fw_content">'+s_str+'</div>';
		content+='	</div>';
		content+='</div>';
	}
    $('#select2_released_result').html(content);
}


function Released_fw_search(){
	$('#released_fw_compare_button').click(function(){
		var fw_list = [];
		var alg_list = [];
		var waveform_f0_list = [];
		var waveform_f1_list = [];
		var flash_header_list = [];
		var flash_func_list = [];
		var auto_self_list = [];
		var tp_version_list = [];
		var dd_reg_show = 0;
		//var dd_reg_list = [];
		dd_reg_list_show = '';
		
		var total_len = 0;
		var tmp;
		
		var fw = $('.released_fw_compare_fw').select2('data'); //console.log(fw[0].id);
		$.each( fw, function( key, value ) {
			fw_list.push(value.id);
		});
		
		if(fw_list.length <=0){
			Select2_Toast();
			return false;
		}
		
		var group_name, end_string, gg_name;
		var alg = $('.released_fw_compare_alg').select2('data');
		$.each( alg, function( key, value ) {
			//
			group_name = value.id;
			if(group_name.indexOf('auto_') == 0){
				//remove auto_ from value.id
				end_string = group_name.length;
				gg_name = group_name.substring(5,end_string); //console.log(gg_name);
				
				auto_self_list.push(gg_name);
			}
			else{
				alg_list.push(value.id);
			}
			
		});
		total_len+=(alg_list.length); 
		total_len+=(auto_self_list.length); 
		
		
		var waveform = $('.released_fw_compare_waveform').select2('data');
		$.each( waveform, function( key, value ) {
			if((value.id).indexOf("f0_") == 0){
				tmp = (value.id);
				waveform_f0_list.push(tmp.substring(3,tmp.length));
			}
			if((value.id).indexOf("f1_") == 0){
				tmp = (value.id);
				waveform_f1_list.push(tmp.substring(3,tmp.length));
			}
		});
		total_len+=(waveform_f0_list.length);
		total_len+=(waveform_f1_list.length);
		//console.log(waveform_f0_list);
		//console.log(waveform_f1_list);
	
		var flash = $('.released_fw_compare_flash').select2('data');
		$.each( flash, function( key, value ) {
			if((value.id).indexOf("ff_") == 0){
				tmp = (value.id);
				flash_func_list.push(tmp.substring(3,tmp.length));
			}
			else if((value.id).indexOf("fh_") == 0){
				tmp = (value.id);
				flash_header_list.push(tmp.substring(3,tmp.length));
			}
			else if((value.id).indexOf("ft_") == 0){
				tmp = (value.id);
				tp_version_list.push(tmp.substring(3,tmp.length));
			}
		});
		
		var dd_reg = $('.released_fw_compare_dd').select2('data');
		$.each( dd_reg, function( key, value ) {
			if((value.id).indexOf("fd_") == 0){
				tmp = (value.id);
				//dd_reg_list.push(tmp.substring(3,tmp.length));
				//dd_reg_list.push(1);
				var tmp_cc = tmp.substring(3,tmp.length);
				dd_reg_list_show += '<div class="dd_reg_select2_list col-sm-12 dd_reg_select2_list_'+tmp_cc+'"></div>';
				
				dd_reg_show = 1;
			}
		});
	
		total_len+= flash_header_list.length;
		total_len+= flash_func_list.length;
		total_len+= tp_version_list.length;
		total_len+= dd_reg_show.length;
		//console.log(flash_header_list);
		// Get project ID from C_id
		/*var cid = $('.released_list').attr("name");
		var project_id = cid.split('_')[0]; console.log(project_id);*/
		//console.log(flash_func_list);
		
		if(total_len <=0){
			Select2_Toast();
			return false;
		}
	
		var cbaseurl = window.base_url+ "Automotive/Select2_to_DB/";
		$.ajax({
			url : cbaseurl,
			type : "POST",
			dataType : "json",
			data : {
					/*"project_id" : project_id,*/
					"fw_list": fw_list,
					"alg_list": alg_list,
					"auto_self_list": auto_self_list,
					"waveform_f0_list": waveform_f0_list,
					"waveform_f1_list": waveform_f1_list,
					"flash_func_list": flash_func_list,
					"flash_header_list": flash_header_list,
					"tp_version_list": tp_version_list,
					"dd_reg_list": dd_reg_show,
				},
			success : function(data) {
				// do something
				//console.log("Ceating");
				//console.log(data);
				$('#dd_reg_list').html(dd_reg_list_show);
				
				Create_search_result(data);
			},
			error : function(data) {
				// do something
				console.log('Failed...D');
				//console.log(data);
			}
		});
		
	});
}


function Select2_Toast(){
	$(document).Toasts('create', {
		class: 'bg-warning',
		title: 'Error',
		subtitle: '',
		body: 'Please select at least one released fw and one of alg/reg/flash/waveform'
	});   
}

function Compare_two_result(data){
	var content = '';

	var s_key = [];
	var s1_value = [];
	var s2_value = [];
	
	// Get key first
	var i = 0;
	var namee = '';
	for(i = 0; i< data.length; i++){
		$.each(data[i], function( key, value ) {
			if((key == "C_id") || (key == "released_fw")){
				
			}
			else{
				if(i == 0){
					s_key.push(key);
					s1_value.push(value);
				}
				else{
					s2_value.push(value);
				}
			}
		});
	}	

	// Create table...
	content = '<table class="table table-striped">';
	content += '<thead>';
	content += '	<tr>';
	content += '		<td>Item</td>';
	content += '		<td>Name</td>';
	content += '		<td>'+(data[0].released_fw)+'</td>';
	content += '		<td>'+(data[1].released_fw)+'</td>';
	content += '	</tr>';
	content += '</thead>';
	content += '<tbody>';
	for(i = 0; i < s_key.length; i++){
		if( (s1_value[i] === s2_value[i])
			|| ($.trim(s1_value[i]) == "") || ($.trim(s2_value[i]) == "") 
		){
			content+='<tr class="oem_compare_same">';
		}
		else{
			content+='<tr class="oem_compare_diff bg-red">';
		}
		
		namee = '';
		if(s_key[i].indexOf('rfeh_') ==0){
			var tmp = s_key[i].slice(5, s_key[i].length);
			var cn = '.5478_sram_alg[rfeh="'+tmp+'"]';
			namee = $(cn).attr('name');
		}
		
		
		content+='		<td>'+s_key[i]+'</td>';
		content+='		<td>'+namee+'</td>';
		content+='		<td>'+s1_value[i]+'</td>';
		content+='		<td>'+s2_value[i]+'</td>';

		content+='</tr>';
		
	}
	content += '</tbody>';
	content+='</table>';
	
	$('.oem_show_diff_button').css('display','block');
    $('#compare_released_result').html(content);
}
function Compare_released_fw_button(){
	
	$('.released_compare').click(function(){
		var count = $('.released_compare_count').length;
		
		if($(this).hasClass('released_compare_count')){
			// off
			$(this).removeClass('released_compare_count').removeClass('oem_button_select').addClass('oem_button_unselect');
		}
		else{
			if(count < 2){ // On
				$(this).addClass('released_compare_count').addClass('oem_button_select').removeClass('oem_button_unselect');
			}
			else{ 
				Compare_modal_error();
			}
		}
	});
	
	$('.oem_show_diff_button_diff').click(function(){
		$('.oem_compare_same').hide();
		$('.oem_compare_diff').removeClass('bg-red');
		
	});
	$('.oem_show_diff_button_all').click(function(){
		$('.oem_compare_same').show();
		if($('.oem_compare_diff').hasClass('bg-red')){
			
		}
		else{
			$('.oem_compare_diff').addClass('bg-red');
		}
		
	});
}

function Compare_released_fw(){
	$('#released_two_compare').click(function(){
		var count = $('.released_compare_count').length; //console.log('sell '+count);
		if(count != 2){
			Compare_modal_error();
		}
		else{
			var fw_cid = [];
			// Get C_ID
			$('.released_compare_count').each(function( index ) {
				//console.log( index + ": " + $( this ).attr('name'));
				fw_cid.push($(this).attr('name'));
			});
			
			// Start to compare
			var cbaseurl = window.base_url+ "Automotive/Compare_to_DB/";
			
			$.ajax({
				url : cbaseurl,
				type : "POST",
				dataType : "json",
				data : {"fw_list" : fw_cid },
				success : function(data) {
					// do something
					
					Compare_two_result(data);
				},
				error : function(data) {
					// do something
					console.log('Failed to compare two released FW');
					console.log(data);
				}
			});	
		}
	});
}



$(document).ready(function(){
	Released_fw_select2();
	Released_fw_search();
	
	Compare_released_fw_button();
	Compare_released_fw();
});