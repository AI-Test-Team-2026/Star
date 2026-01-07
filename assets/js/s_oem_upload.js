
//var Stash_alg_paramter_table, Stash_waveform_table_f0, Stash_waveform_table_f1, Stash_flash_func_table, Stash_flash_header_table;

var Stash_TP_VERSION_TABLE, Stash_TP_P2P_TABLE, Stash_dd_header, Stash_TP_ADC_CONFIG_NORMAL_F1, Stash_TP_ADC_CONFIG_NORMAL_F0;
var Stash_TP_HW_CONFIG_1_AUTO_SELF, Stash_TP_HW_CONFIG_1_COD_FW_CONFIG, Stash_FLASH_FUNC, Stash_FLASH_HEADER, Stash_Others;


function Save_to_server(){
	
	 $('#upload_macro_server').click(function(){
		// Get selected panel information.
		var projid = parseInt($( "#upload_select_proj option:selected" ).val(), 10); //console.log(projid);

		if(projid >=0){
			//=================================
			// Check CID exist or not
			var c_ver = $('.5478_sram_alg[rfeh="0"]').text(); 
			var d_ver = $('.5478_sram_alg[rfeh="1"]').text();
			
			c_ver = c_ver.split('x')[1]; //console.log("hhh"+c_ver);
			d_ver = d_ver.split('x')[1]; //console.log("x "+d_ver);
			var tmp_cid = projid+"_D"+d_ver+"_C"+c_ver; //console.log(tmp_cid);

			if((typeof c_ver === "undefined") || (typeof d_ver === "undefined")){
				Upload_modal(1);
				console.log("Invalid C and D version");
				return false;
			}

			var jbaseurl = window.base_url+ "Automotive/Check_fw_exist/"+tmp_cid; // for testing....
			$.ajax({
				url : jbaseurl,
				type : "POST",
				dataType : "json",
				success : function(data) {
					// do something
					var isexsist = data["result"]; //console.log(isexsist);
					
					if(isexsist == 0){
						
						Save_to_stash();

						
						var cbaseurl = window.base_url+ "Automotive/Savetodatabase/"+projid; // for testing....
						
						$.ajax({
							url : cbaseurl,
							type : "POST",
							dataType : "json",
							data : {
									"TP_version": Stash_TP_VERSION_TABLE,
									"P2P_table": Stash_TP_P2P_TABLE ,
									"DD_Header": Stash_dd_header,
									"F1_ADC_SETTING": Stash_TP_ADC_CONFIG_NORMAL_F1,
									"F0_ADC_SETTING": Stash_TP_ADC_CONFIG_NORMAL_F0,
									"AUTO_SELF": Stash_TP_HW_CONFIG_1_AUTO_SELF,
									"ALG": Stash_TP_HW_CONFIG_1_COD_FW_CONFIG,
									"FLASH_FUNC": Stash_FLASH_FUNC,
									"FLASH_HEADER": Stash_FLASH_HEADER,
									"Others": Stash_Others,
									},
							success : function(data) {
								// do something
								console.log("Success to upload");
								//console.log(data);
								Upload_modal(0);
								$('#upload_select_proj option').removeAttr('selected').filter('[value="-1"]').attr('selected', true);
							},
							error : function(data) {
								// do something
								console.log("Failed to upload");
								//console.log(data);
								Upload_modal(1);
							}
						});
					}
					else{
						console.log("There is duplicate released fw");
						Upload_modal(1);
					}
					
				},
				error : function(data) {
					// do something
					console.log('check exsiting fw failed');
					//console.log(data);
					Upload_modal(1);
				}
			});
			
			//=================================
			
		} // there is project id selected....
		else{
			Upload_modal(1);
		}
	});
}
function Save_to_stash(){
	Stash_Others = {};
	Stash_TP_VERSION_TABLE = {};
	Stash_TP_P2P_TABLE={};
	Stash_dd_header = {};
	Stash_TP_ADC_CONFIG_NORMAL_F1 = {};
	Stash_TP_ADC_CONFIG_NORMAL_F0 = {};
	Stash_TP_HW_CONFIG_1_AUTO_SELF = {}; 
	Stash_TP_HW_CONFIG_1_COD_FW_CONFIG = {};
	Stash_FLASH_FUNC = {};
	Stash_FLASH_HEADER = {};

	var tmp, ind;
	$('.5478_tp_version').each(function(i, obj) {
		tmp = $(this).attr('name'); 
		ind = tmp;
		Stash_TP_VERSION_TABLE[ind] = $(this).text();
	});
	Stash_TP_P2P_TABLE["value"] = $('#bin_p2p_table').val();
	Stash_dd_header["value"] = $('#bin_dd_initial_code').val();
	
	$('.5478_sram_waveform_f0').each(function(i, obj) {
		tmp = $(this).attr('name'); 
		ind = tmp;//tmp.slice(3, tmp.length); 
		
		Stash_TP_ADC_CONFIG_NORMAL_F0[ind] = $(this).text();
	});
	$('.5478_sram_waveform_f1').each(function(i, obj) {
		tmp = $(this).attr('name');
		ind = tmp;//tmp.slice(3, tmp.length); 
		Stash_TP_ADC_CONFIG_NORMAL_F1[ind] = $(this).text();
	});
	$('.5478_sram_autoself').each(function(i, obj) {
		tmp = $(this).attr('name');
		ind = tmp;
		Stash_TP_HW_CONFIG_1_AUTO_SELF[ind] = $(this).text();
	});
	$('.5478_sram_alg').each(function(i, obj) {
		tmp = $(this).attr('rfeh');
		ind = 'rfeh_'+tmp;
		Stash_TP_HW_CONFIG_1_COD_FW_CONFIG[ind] = $(this).text();
	});
	
	$('.5478_flash_func span').each(function(i, obj) {
		tmp = $(this).parent().attr('name');
		Stash_FLASH_FUNC[tmp] = $(this).text();
	});
	
	$('.5478_flash_header').each(function(i, obj) {
		tmp = $(this).attr('name');
		Stash_FLASH_HEADER[tmp] = $(this).text();
	});
	// Others....
	$('.5478_others').each(function(i, obj) {
		tmp = $(this).attr('name');
		Stash_Others[tmp] = $(this).text();
	});
	//........................
	// others for lvds timing
	Stash_Others["PLL"] = $('#form_bin_PLL').val();
	Stash_Others["VSP"] = $('#form_bin_VSP').val();
	Stash_Others["OSC_Freq"] = $('#form_bin_vsync_freq').val();
	Stash_Others["LVDSPORTNUMBER"] =parseInt($('#lvds_timing_port_number_sel').val(), 10);
	Stash_Others["LVDSTOPOLOGY"] =parseInt($('#lvds_timing_topology_sel').val(), 10);
	//........................
	//console.log(Stash_Others);
}

function Compare_stash_with_latest_fw(data_stash, latest_fw, latest_fw_name){
	var content = '';

	var namee = '';
	
	// Create table...
	content = '<table class="table table-striped">';
	content += '<thead>';
	content += '	<tr>';
	content += '		<td>Item</td>';
	content += '		<td>Name</td>';
	content += '		<td>Current stash</td>';
	content += '		<td>'+(latest_fw_name)+'</td>';
	content += '	</tr>';
	content += '</thead>';
	content += '<tbody>';
	
	$.each(data_stash, function( key, value ) {
		if(key == "C_id"){
			
		}
		else{
			// Show diff only
			if((value == latest_fw[key]) || ($.trim(value) == "") || (latest_fw[key] == "")
			){
				
			}
			else{
			
				namee = '';
				content+='<tr>';
				if(key.indexOf('rfeh_') ==0){
					var tmp =key.slice(5, key.length);
					var cn = '.5478_sram_alg[rfeh="'+tmp+'"]';
					namee = $(cn).attr('name');
				}
				
				content+='		<td>'+key+'</td>';
				content+='		<td>'+namee+'</td>';
				content+='		<td>'+value+'</td>';
				content+='		<td>'+latest_fw[key]+'</td>';

				content+='</tr>';
			}
		}
	});
	
	content += '</tbody>';
	content+='</table>';
	
    $('#compare_released_result').html(content);	
}

function Compare_macro_button(){
	 $('#upload_macro_compare').click(function(){
		// Get selected panel information.
		var projid = parseInt($( "#upload_select_proj option:selected" ).val(), 10); //console.log(projid);

		if(projid >=0){
			//=================================
			// Check CID exist or not
			var c_ver = $('.5478_sram_alg[rfeh="0"]').text(); 
			var d_ver = $('.5478_sram_alg[rfeh="1"]').text();
			
			c_ver = c_ver.split('x')[1]; //console.log("hhh"+c_ver);
			d_ver = d_ver.split('x')[1]; //console.log("x "+d_ver);
			var tmp_cid = projid+"_D"+d_ver+"_C"+c_ver; //console.log(tmp_cid);

			if((typeof c_ver === "undefined") || (typeof d_ver === "undefined")){
				Upload_modal(1);
				console.log("Invalid C and D version");
				return false;
			}
			// Collect data====================================
			var tmp, ind;
			var Stash_cdata = {};
			
			// compare p2p / dd init code???
			
			$('.5478_sram_alg').each(function(i, obj) {
				tmp = $(this).attr('rfeh');
				ind = 'rfeh_'+tmp;
				Stash_cdata[ind] = $(this).text();
			});
			$('.5478_sram_autoself').each(function(i, obj) {
				tmp = $(this).attr('name');
				Stash_cdata[tmp] = $(this).text();
			});
			$('.5478_tp_version').each(function(i, obj) {
				tmp = $(this).attr('name');
				Stash_cdata[tmp] = $(this).text();
			});
			$('.5478_sram_waveform_f0').each(function(i, obj) {
				tmp = $(this).attr('name'); 
				ind = tmp;//tmp.slice(3, tmp.length); 
				Stash_cdata[ind] = $(this).text();
			});
			$('.5478_sram_waveform_f1').each(function(i, obj) {
				tmp = $(this).attr('name');
				ind = tmp;//tmp.slice(3, tmp.length); 
				Stash_cdata[ind] = $(this).text();
			});
			
			$('.5478_flash_func span').each(function(i, obj) {
				tmp = $(this).parent().attr('name');
				Stash_cdata[tmp] = $(this).text();
			});
			
			$('.5478_flash_header').each(function(i, obj) {
				tmp = $(this).attr('name');
				Stash_cdata[tmp] = $(this).text();
			});
			//==============================================
			// request for latest FW	
			var cbaseurl = window.base_url+ "Automotive/Compare_macro_project_latest_fw/"+projid;
			//console.log(cbaseurl);
			
			$.ajax({
				url : cbaseurl,
				type : "POST",
				dataType : "json",
				/*data : {"account" : 1, "passwd" : 2},*/
				success : function(data) {
					// do something
					//console.log("Ceating");
					//console.log(data);
					if((data == null) || data["result"] == "-1"){
						$(document).Toasts('create', {
							class: 'bg-warning',
							title: 'Warning',
							subtitle: 'Fail to Compare with latest FW',
							body: 'There is no latest FW on DB'
						});
						
					}else{
						// Request for latest fw data....
						var r_c_id = data[0]["C_id"];
						var r_released_fw = data[0]["released_fw"]; //console.log(r_c_id); console.log(r_released_fw);
						
						cbaseurl = window.base_url+ "Automotive/Compare_macro_project_latest_fw_req/"+r_c_id;
						$.ajax({
							url : cbaseurl,
							type : "POST",
							dataType : "json",
							success : function(data) {
								// do something
								//console.log(data);
								Compare_stash_with_latest_fw(Stash_cdata, data[0], r_released_fw);
							},
							error : function(data) {
								// do something
								console.log('Failed to access latest FW data');
								//console.log(data);
							}
						});	
					}
				},
				error : function(data) {
					// do something
					console.log('Failed to find lastest project FW');
					console.log(data);
				}
			});
		}
	});
}


function Compare_modal_error(){
	// Show error....
	 $(document).Toasts('create', {
		class: 'bg-danger',
		title: 'Error',
		subtitle: 'Compare fail',
		body: 'Please select two released fw to compare'
	});
}

function Update_released_fw_detail(){
	$('.released_list').click(function(){
		$('.released_list').removeClass('btn-info').addClass('btn-outline-info');
		$(this).removeClass('btn-outline-info').addClass('btn-info');
		
		var C_id = $(this).attr('name');
		var released_name = $.trim($(this).text()); //console.log(released_name);
		var cbaseurl = window.base_url+ "Automotive/project_show_item_detail/"+C_id;
	   
		$.ajax({
			url : cbaseurl,
			type : "POST",
			dataType : "json",
			/*data : {"account" : 1, "passwd" : 2},*/
			success : function(data) {
				// Update released_fw detail information.
				console.log('Success to access released_fw');
				$('.released_title').text(released_name);
				//console.log(data.alg);
				// Update alg=============================================
				$.each( data.alg, function( key, value ) {
					//console.log( key + ": " + value );
					// Get rfeh
					var buffer = key.split('_')[1]; //console.log(buffer);
					var alg_class = '.5478_sram_alg[rfeh="'+buffer+'"]';
					$(alg_class).text(value);
				});
				// Update waveform=============================================
				$.each( data.waveform_f0, function( key, value ) {
					//console.log( key + ": " + value );
					var buffer = key; //console.log(buffer);
					var wave_class = '.5478_sram_waveform_f0[name="'+buffer+'"]';
					$(wave_class).text(value); //console.log(value);
				});
				// Update waveform=============================================
				$.each( data.waveform_f1, function( key, value ) {
					//console.log( key + ": " + value );
					var buffer = key; //console.log(buffer);
					var wave_class = '.5478_sram_waveform_f1[name="'+buffer+'"]';
					$(wave_class).text(value); //console.log(value);
				});
				// Update flash header============================================
				$.each( data.flash_header, function( key, value ) { //console.log( key + ": " + value );
					var buffer = key; //console.log(buffer);
					var wave_class = '.5478_flash_header[name="'+buffer+'"]';
					$(wave_class).text(value); //console.log(value);
				});
				// Update flash func=============================================
				$.each( data.flash_func, function( key, value ) {
					//console.log( key + ": " + value );
					var buffer = key; //console.log(buffer);
					var wave_class = '.5478_flash_func[name="'+buffer+'"] span';
					if(value == 'On'){
						$(wave_class).text('On');
						$(wave_class).removeClass('bg-warning');
						$(wave_class).addClass('bg-success');
					}
					else{
						$(wave_class).text('Off');
						$(wave_class).addClass('bg-warning');
						$(wave_class).removeClass('bg-success');
					}
				});
				// Update auto_self============================================
				$.each( data.auto_self, function( key, value ) { //console.log( key + ": " + value );
					var buffer = key; //console.log(buffer);
					var wave_class = '.5478_sram_autoself[name="'+buffer+'"]';
					$(wave_class).text(value); //console.log(value);
				});
				// Update tp_version===========================================
				$.each( data.tp_version, function( key, value ) { //console.log( key + ": " + value );
					var buffer = key; //console.log(buffer);
					var wave_class = '.5478_tp_version[name="'+buffer+'"]';
					$(wave_class).text(value); //console.log(value);
				});
				// Update p2p, others, dd init
				$('#bin_p2p_table').val(data.p2p["value"]);
				$('#bin_dd_initial_code').val(data.dd_header["value"]);
				
				// Update others====================================================
				$.each( data.others, function( key, value ) { //console.log( key + ": " + value );
					var buffer = key; //console.log(buffer);
					var wave_class = '.5478_others[name="'+buffer+'"]';
					//$(wave_class).text(value); 
					$(wave_class).text(value);  // others input is val...
				});
				//......update others with val
				$('#form_bin_vsync_freq').val(data.others["OSC_Freq"]);
				$('#form_bin_VSP').val(data.others["VSP"]);
				$('#form_bin_PLL').val(data.others["PLL"]);
				if(data.others["LVDSPORTNUMBER"] == "1"){
					$('#lvds_timing_port_number_sel')[0].selectedIndex = 1; 
				}
				else if(data.others["LVDSPORTNUMBER"] == "2"){
					$('#lvds_timing_port_number_sel')[0].selectedIndex = 2; 
				}
				else{
					$('#lvds_timing_port_number_sel')[0].selectedIndex = 0; 
				}
						
				if(data.others["LVDSTOPOLOGY"] == "1"){
					$('#lvds_timing_topology_sel')[0].selectedIndex = 1; 
				}
				else if(data.others["LVDSTOPOLOGY"] == "2"){
					$('#lvds_timing_topology_sel')[0].selectedIndex = 2; 
				}
				else{
					$('#lvds_timing_topology_sel')[0].selectedIndex = 0; 
				}
				//............................
				//............................
				
				// Update Chart and parse ALG
				Fillout_ALG();
				Create_bl_chart();
				Create_sig_chart();
				// Update modal......
				$('.class_delete_released_fw').text(released_name);
				$('#delete_released_fw').attr("name", C_id);
				Update_dd_osc_table();
				
				Parse_fail_det_oe();
				Init_Notice();

			},
			error : function(data) {
				// do something
				console.log('Fail to access released_fw');
				//console.log(data);
			}
		});
		// AJAX to change released_fw
	});
}

function Delete_releasded_fw(){
	$('#delete_released_fw').click(function(){
		
		// Get project ID
		var C_id = $(this).attr("name"); //console.log(C_id);
		var project_id = C_id.split('_')[0];
		
		
		// Delete released fw button....
		var nname = '.released_list[name="'+C_id+'"]'; //console.log(nname);
		$(nname).remove();
		
		var cbaseurl = window.base_url+ "Automotive/project_delete_released_fw/"+project_id+"/"+C_id;
		var redirecturl = window.base_url+ "Automotive/index";
		//console.log(cbaseurl);
		$.ajax({
			url : cbaseurl,
			type : "POST",
			dataType : "json",
			//data : {"account" : 1, "passwd" : 2},
			success : function(data) {
				// do something
				console.log('delete released fw success');
				//console.log(data);
				C_id = data.C_id; //console.log(C_id);
				
				if(C_id == "-1"){
					console.log('Empty... Redirect');
					window.location.replace(redirecturl);
				}
				else{
					nname = '.released_list[name="'+C_id+'"]';
					$(nname).click();
				}
				
			},
			error : function(data) {
				// do something
				console.log('delete released fw failed or released fw is empty');
				//console.log(data);
			}
		});
		
	});
	
}

function Toggle_flash_funcs(){
	$('.5478_flash_func_macro').click(function(){
		var a = $(this).children('span').text();
		if(a == 'Off'){
			$(this).children('span').text('On');
			$(this).children('span').removeClass('bg-warning').addClass('bg-success'); 
		}
		else{
			$(this).children('span').text('Off');
			$(this).children('span').removeClass('bg-success').addClass('bg-warning'); 
		}
	});
}

function Upload_modal(type){
	if(type == 0){
      $(document).Toasts('create', {
        class: 'bg-success',
        title: 'Success',
        subtitle: 'Upload success',
        body: 'Please check the results on panel item page.'
      });
    }
	else{
      $(document).Toasts('create', {
        class: 'bg-danger',
        title: 'Error',
        subtitle: 'upload fail',
        body: 'Please check marco results and select one of project name. Make sure there is no duplicate released fw'
      });
    }
}


function Global_ajax_loading(){
	var building = $('#build_tp_checking').attr('isbuild'); //console.log(building+'..?');
	
	$( document ).ajaxStart(function() {
		if(building != 1){
			$("body").addClass('loading');
		}
		//console.log('!!! j');
	});
	$( document ).ajaxStop(function() {
		if(building != 1){
			$("body").removeClass('loading');
		}
		//console.log('!!! stop....');
	});
}

function Load_external_settings(projid){
	//==============================================
	// request for latest FW	
	var cbaseurl = window.base_url+ "Automotive/Compare_macro_project_latest_fw/"+projid;
	//console.log(cbaseurl);
	
	$.ajax({
		url : cbaseurl,
		type : "POST",
		dataType : "json",
		/*data : {"account" : 1, "passwd" : 2},*/
		success : function(data) {
			//console.log("stella"+data["result"]);
			if((data == null) || (data["result"] == "-1")){
				$(document).Toasts('create', {
					class: 'bg-warning',
					title: 'Warning',
					subtitle: 'Please Check external Setting',
					body: 'There is no external settings on DB'
				});
				
				$('#form_bin_vsync_freq').val("");
				$('#form_bin_VBP').text("");
				$('#form_bin_VFP').text("");
				$('#form_bin_VSA').text("");
				$('#form_bin_VSP').val("");
				$('#form_bin_PLL').val("");
				// Set default PLL setting....
				$('#form_bin_PLL').val("0x1B");
				
				//======================================================				
				$('#form_bin_VBP_max').text("");
				$('#form_bin_VBP_min').text("");
				$('#form_bin_VFP_max').text("");
				$('#form_bin_VFP_min').text("");
				$('#form_bin_VSA_max').text("");
				$('#form_bin_VSA_min').text("");
				
				$('#form_bin_FCLK').text("");
				$('#form_bin_FCLK_max').text("");
				$('#form_bin_FCLK_min').text("");
				$('#form_bin_TCLK').text("");
				$('#form_bin_TCLK_max').text("");
				$('#form_bin_TCLK_min').text("");
				$('#form_bin_HP').text("");
				$('#form_bin_HP_max').text("");
				$('#form_bin_HP_min').text("");
				$('#form_bin_HW').text("");
				$('#form_bin_HW_max').text("");
				$('#form_bin_HW_min').text("");
				$('#form_bin_HV').text("");
				$('#form_bin_HBP').text("");
				$('#form_bin_HBP_max').text("");
				$('#form_bin_HBP_min').text("");
				$('#form_bin_HFP').text("");
				$('#form_bin_HFP_max').text("");
				$('#form_bin_HFP_min').text("");
				$('#form_bin_VP').text("");
				$('#form_bin_VP_max').text("");
				$('#form_bin_VP_min').text("");
				$('#form_bin_VV').text("");
				$('#form_bin_VV_max').text("");
				$('#form_bin_VV_min').text("");
				//======================================================
				
			}else{
				// Request for latest fw data....
				var r_c_id = data[0]["C_id"];
				var r_released_fw = data[0]["released_fw"]; //console.log(r_c_id); console.log(r_released_fw);
				
				cbaseurl = window.base_url+ "Automotive/Compare_macro_project_latest_fw_req_external/"+r_c_id;
				$.ajax({
					url : cbaseurl,
					type : "POST",
					dataType : "json",
					success : function(data) {
						// do something
						//console.log("hahhahha===="+data[0]["VSA"]);
						
						// Fill out external setting....
						$('#dd_osc_vsa').text(data[0]["VSA"]);
						$('#dd_osc_vfp').text(data[0]["VFP"]);
						$('#dd_osc_vbp').text(data[0]["VBP"]);
						$('#dd_osc_fr').text(data[0]["OSC_Freq"]);
						$('#dd_osc_fr_dev').text(data[0]["OSC_Freq"]);
						
						//======================================================
						$('#form_bin_vsync_freq').val(data[0]["OSC_Freq"]);
						$('#form_bin_VBP').text(data[0]["VBP"]);
						$('#form_bin_VFP').text(data[0]["VFP"]);
						$('#form_bin_VSA').text(data[0]["VSA"]);
						$('#form_bin_VSP').val(data[0]["VSP"]);
						$('#form_bin_PLL').val(data[0]["PLL"]);
						
						$('#form_bin_VBP_max').text(data[0]["VBP_max"]);
						$('#form_bin_VBP_min').text(data[0]["VBP_min"]);
						$('#form_bin_VFP_max').text(data[0]["VFP_max"]);
						$('#form_bin_VFP_min').text(data[0]["VFP_min"]);
						$('#form_bin_VSA_max').text(data[0]["VSA_max"]);
						$('#form_bin_VSA_min').text(data[0]["VSA_min"]);
						
						$('#form_bin_FCLK').text(data[0]["FCLK"]);
						$('#form_bin_FCLK_max').text(data[0]["FCLK_max"]);
						$('#form_bin_FCLK_min').text(data[0]["FCLK_min"]);
						$('#form_bin_TCLK').text(data[0]["TCLK"]);
						$('#form_bin_TCLK_max').text(data[0]["TCLK_max"]);
						$('#form_bin_TCLK_min').text(data[0]["TCLK_min"]);
						$('#form_bin_HP').text(data[0]["HP"]);
						$('#form_bin_HP_max').text(data[0]["HP_max"]);
						$('#form_bin_HP_min').text(data[0]["HP_min"]);
						$('#form_bin_HW').text(data[0]["HW"]);
						$('#form_bin_HW_max').text(data[0]["HW_max"]);
						$('#form_bin_HW_min').text(data[0]["HW_min"]);
						$('#form_bin_HV').text(data[0]["HV"]);
						$('#form_bin_HBP').text(data[0]["HBP"]);
						$('#form_bin_HBP_max').text(data[0]["HBP_max"]);
						$('#form_bin_HBP_min').text(data[0]["HBP_min"]);
						$('#form_bin_HFP').text(data[0]["HFP"]);
						$('#form_bin_HFP_max').text(data[0]["HFP_max"]);
						$('#form_bin_HFP_min').text(data[0]["HFP_min"]);
						$('#form_bin_VP').text(data[0]["VP"]);
						$('#form_bin_VP_max').text(data[0]["VP_max"]);
						$('#form_bin_VP_min').text(data[0]["VP_min"]);
						$('#form_bin_VV').text(data[0]["VV"]);
						$('#form_bin_VV_max').text(data[0]["VV_max"]);
						$('#form_bin_VV_min').text(data[0]["VV_min"]);
						//..........................................................
						if(data[0]["LVDSPORTNUMBER"] == "1"){
							$('#lvds_timing_port_number_sel')[0].selectedIndex = 1; 
						}
						else if(data[0]["LVDSPORTNUMBER"] == "2"){
							$('#lvds_timing_port_number_sel')[0].selectedIndex = 2; 
						}
						else{
							$('#lvds_timing_port_number_sel')[0].selectedIndex = 0; 
						}
						
						if(data[0]["LVDSTOPOLOGY"] == "1"){
							$('#lvds_timing_topology_sel')[0].selectedIndex = 1; 
						}
						else if(data[0]["LVDSTOPOLOGY"] == "2"){
							$('#lvds_timing_topology_sel')[0].selectedIndex = 2; 
						}
						else{
							$('#lvds_timing_topology_sel')[0].selectedIndex = 0; 
						}
						
						//======================================================
						/*Calcualate PLL*/
						Update_scclk2(1);
						//=========================================================
						
					},
					error : function(data) {
						// do something
						console.log('Failed to access latest FW data');
						//console.log(data);
					}
				});	
			}
		},
		error : function(data) {
			// do something
			console.log('Failed to find external setting of lastest project FW');
			//console.log(data);
		}
	});	
	$('.bin_external_settings').css('display', 'block'); 
}

function Select_project_check(){
	$('#upload_select_proj').on('change', function() {
		// Get project id
		var projid = parseInt($( "#upload_select_proj option:selected" ).val(), 10); //console.log(projid);

		if(projid < 0){
			$("#upload_macro_server").prop("disabled", true);
			$('.pu_compare_lastest').hide();
			$('#upload_macro_compare').hide();
			$('.bin_external_settings').css('display', 'none');
		}
		else{
			$("#upload_macro_server").removeAttr('disabled');
			$('.pu_compare_lastest').show();
			$('#upload_macro_compare').show();
			Load_external_settings(projid);
		}
	});
}

$(document).ready(function(){
	$('#upload_select_proj option').removeAttr('selected').filter('[value="-1"]').attr('selected', true);
	Select_project_check();
  
	Compare_macro_button();
	Save_to_server();
	Update_released_fw_detail();
	Delete_releasded_fw();
	Toggle_flash_funcs();
	//Create_modal_draggable();

	Global_ajax_loading();
});