
function format_tp_version_table(){
	var bg_color = ['#4B778D','#125B50'];
	var bg_color_shift = 0;
	var color = ['#F8B400', '#E2C2B9', '#B2F9FC', '#FFCC29'];
	var color_shift = 0;
	var title_color = ['#FAF5E4','#FAF5E4'];
	var title_shift = 0;
	
	$('.tp_version_table').each(function() {
		$(this).css('background-color', bg_color[bg_color_shift^=0x01]);
		$(this).css('font-family', "'Kalam', cursive");
		$(this).find('tbody th').css('color', title_color[title_shift^=0x01]);
		$(this).find('tr').each(function(index){
			color_shift^=0x01;
			
			$(this).css('color', color[color_shift]);
		});
		if(color_shift < 2)
			color_shift = 2;
		else
			color_shift = 0;
	});
}

function Add_version(){
	$('.tp_version_add_sure').click(function(){
		var getname = $(this).attr('name'); //console.log(getname);
		//var html_table = $('')
		var insert_version = '#tp_version_edit_insert_v_'+getname;
		var insert_status = '#tp_version_edit_insert_s_'+getname;
		var insert_content = '#tp_version_edit_insert_d_'+getname;
		var html_content = '';
		
		html_content+='	<tr>';
		html_content+='		<!-- Version -->';
		html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;">'+$(insert_version).html()+'</td>';
		html_content+='		<!-- Status -->';
		
		var status_check = $(insert_status).html();
		if(status_check.indexOf('o') == 0){
			status_check = '<i class="fas fa-check-circle"></i>';
		}
		else if(status_check.indexOf('x') == 0){
			status_check = '<i class="fas fa-bug"></i>';
		}
		else{
			status_check = '';
		}

		html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 20px;">'+status_check+'</td>';
		html_content+='		<!-- Description -->';
		html_content+='		<td>'+$(insert_content).html()+'</td>';
		html_content+='	</tr>';
		
		var insert_name = '.tp_version_table[name="'+getname+'"] tr:first-child';
		$(insert_name).after(html_content);
		
		$('.tp_version_edit').css('display', 'block');
		format_tp_version_table(); // re-render
	});
}

function Add_new_table(){
	$('#tp_version_add_sure_new').click(function(){
		
		var html_content = '';
		var nname= $.trim($('#tp_version_edit_insert_h_new').text());
		if(nname === ""){
			console.log("nan....");
		}
		else{
			html_content+='<table class="table table-bordered tp_version_table" name="'+nname+'" contenteditable>';
			html_content+='	<tr>';
			html_content+='		<th colspan="3" style="text-align: center;">';
			html_content+='			<span>'+nname+'</span>';
			html_content+='			<button class="btn btn-sm bg-info float-sm-right tp_version_edit" data-toggle="modal" data-target="#tp_version_edit_'+nname.toLowerCase()+'">Add Version</button>';
			html_content+='		</th>';
			html_content+='	</tr>';
			
			html_content+='	<tr>';
			html_content+='		<!-- Version -->';
			html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;">'+$('#tp_version_edit_insert_v_new').html()+'</td>';
			html_content+='		<!-- Status -->';

			var status_check = $('#tp_version_edit_insert_s_new').html();
			if(status_check.indexOf('o') == 0){
				status_check = '<i class="fas fa-check-circle"></i>';
			}
			else if(status_check.indexOf('x') == 0){
				status_check = '<i class="fas fa-bug"></i>';
			}
			else{
				status_check = '';
			}
			html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 20px;" >'+status_check+'</td>';
			html_content+='		<!-- Description -->';
			html_content+='		<td>'+$('#tp_version_edit_insert_d_new').html()+'</td>';
			html_content+='	</tr>';
			html_content+='	<tr>';
			html_content+='		<!-- Version -->';
			html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;">V00.00</td>';
			html_content+='		<!-- Description -->';
			html_content+='		<td></td>';
			html_content+='		<td></td>';
			html_content+='	</tr>';
			html_content+='</table>';
			

			$('.tp_version_table:last').after(html_content);
			$('.tp_version_edit').css('display', 'block');
			
			// Create Modal==================
			//==================================================================================
			var content_modal = '';
			content_modal+='<div class="modal fade" id="tp_version_edit_'+nname.toLowerCase()+'" style="display: none;" aria-hidden="true">';
			content_modal+='	<div class="modal-dialog">';
			content_modal+='		<div class="modal-content ">';
			content_modal+='			<div class="modal-header">';
			content_modal+='				<h4 class="modal-title">Add Version into '+nname+'</h4>';
			content_modal+='				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>';
			content_modal+='			</div>';
			content_modal+='			<div class="modal-body">';
			content_modal+='				<table class="table table-bordered" spellcheck="false">';
			content_modal+='					<tr>';
			content_modal+='						<!-- Version -->';
			content_modal+='						<td id="tp_version_edit_insert_v_'+nname+'" style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;" contenteditable>V0x.00</td>';
			content_modal+='						<!-- Status -->';
			content_modal+='						<td id="tp_version_edit_insert_s_'+nname+'" style="font-weight: bold;text-align: center; vertical-align: middle;width: 20px;" contenteditable>o</td>';
			content_modal+='						<!-- Description -->';
			content_modal+='						<td id="tp_version_edit_insert_d_'+nname+'" style="background-color:  #DAF7A6 ;" contenteditable>Enter Content....</td>';
			content_modal+='					</tr>';
			content_modal+='				</table>';
			content_modal+='			</div>';
			content_modal+='			<div class="modal-footer justify-content-between">';
			content_modal+='				<button type="button" class="btn btn-outline-info" data-dismiss="modal">Close</button>';
			content_modal+='				<button type="button" class="btn btn-outline-info tp_version_add_sure" data-dismiss="modal" name="'+nname+'">Sure</button>		';
			content_modal+='			</div>';
			content_modal+='		</div> <!-- /.modal-content -->';
			content_modal+='	</div> <!-- /.modal-dialog -->';
			content_modal+='</div>	';
			
			$('div.modal').after(content_modal);
			
			
			format_tp_version_table(); // re-render
			Add_version();
		}
	});
}

function Tp_table_save_to_server(){
	$('#tp_version_save_click').click(function(){
		// to Json.....
		
		var json_obj = [];
		$('.tp_version_table').each(function() {
			var item = {};
			item["name"] = $(this).find('tbody th span').text();
			item["field"] = [];
			
			var tr_count = 0;
			
			$(this).find('tr').each(function(index){
				var json_version = $(this).children('td:first-child').html();
				if(json_version == undefined ){
					
				}
				else if($.trim(json_version) == "<br>"){ // empry version
					$(this).remove();
				}
				else{
					var item_sub = {};
					item_sub["Version"] = json_version;
					
					//..............
					var status_check = $(this).children('td:nth-child(2)').html();  
					//console.log(status_check.indexOf('fa-check-circle'));
					//console.log(status_check.indexOf('fas fa-bug'));
					
					if(status_check.indexOf('o') ==0){
						status_check = '<i class=\"fas fa-check-circle\"></i>';
					}
					else if(status_check.indexOf('x')==0){
						status_check = '<i class=\"fas fa-bug\"></i>';
					}
					else if(status_check.indexOf('fas fa-bug') >=0){
						status_check = '<i class=\"fas fa-bug\"></i>';
					}
					else if(status_check.indexOf('fa-check-circle') >=0){
						status_check = '<i class=\"fas fa-check-circle\"></i>';
					}
					else{
						status_check = '';
					}
					

					//console.log(item["name"] + " version "+json_version+" is "+status_check);
					item_sub["Status"] = status_check;
					item_sub["Description"] = $(this).children('td:last').html();
					
					item["field"].push(item_sub);
					
					tr_count++;
				}
			});
			json_obj.push(item);
		
			if(tr_count == 0){
				$(this).remove();
			}
		
		});
		
		console.log(JSON.stringify(json_obj));
		
		
		var cbaseurl = window.base_url+ "Automotive/Tp_version_save"; 
		$.ajax({
			url : cbaseurl,
			type : "POST",
			//dataType : "json",
			data : {"result": JSON.stringify(json_obj) },
			success : function(data) {
				// do something
				$(document).Toasts('create', {
					class: 'bg-success',
					title: 'Success ',
					subtitle: 'Upload success',
					body: 'Update Tp version on server'
				});
				
			},
			error : function(data) {
				// do something
				console.log(data);
				$(document).Toasts('create', {
					class: 'bg-danger',
					title: 'Error',
					subtitle: 'Fail to update to server',
					body: 'Fail to update tp version to server'
				});
				
			},
		});
		
		
	});
}

const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`
/*function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}*/

function Coloris_init(){
	Coloris({
		el: '.oem_coloris',
		theme: 'default',
		themeMode: 'dark',
		alpha: false,
		wrap: true,
		focusInput: true,
		swatchesOnly: false,
		swatches: [
			'#ffcc00',
			'#b3b3ff',
			'#ff9500',
			'#e6f7ff',
			'#f2ffcc'
		],
		
	});
	
	$('.oem_coloris').on('change', function(){
		var get_bh = $.trim($(this).parent('span.clr-field').css('color'));//console.log(get_bh);
		var tmp_color = rgba2hex(get_bh); //console.log(tmp_color);
		$(this).parent('span.clr-field').parent('td').css('background-color', get_bh);
		
		// Change coloron
		$(this).parent('span.clr-field').parent('td').attr('coloron', tmp_color.slice(1)); 
		
	});
}


function Add_dd_field(){
	
	$('#dd_version_add_click').click(function(){
		var html_content = '';
		//Get the last item
		var last_item = parseInt($('#dd_list_table tr:last td.dd_list_table_item').text(), 10);
		last_item++;
		
		html_content+='	<tr>';
		html_content+='		<td class="dd_list_table_item" contenteditable>'+last_item+'</td>';
		html_content+='		<td class="dd_list_table_owner" style="color: #000000; background-color: #ffffff;">';
		html_content+='			<span class="dd_version_edit clr-field float-sm-right" style=" width: 15px; height: 15px; color: #ffffff;">';
		html_content+='				<button style="width: 100%; height: 100%;border: 1px solid black;" aria-labelledby="clr-open-label"></button>';
		html_content+='				<input type="text" class=" oem_coloris"  style="width:10px;height: 10px;"/>';
		html_content+='			</span>';
		html_content+='			<span class="dd_list_table_owner_val float-sm-left" contenteditable style="width: 90%;"></span>';
		html_content+='		</td>';	
		html_content+='		<td class="dd_list_table_feature" coloron="" style="color: #000000; background-color: #ffffff;">';
		html_content+='			<span class="dd_version_edit clr-field float-sm-right" style=" width: 15px; height: 15px; color: #ffffff;">';
		html_content+='				<button style="width: 100%; height: 100%;border: 1px solid black;" aria-labelledby="clr-open-label"></button>';
		html_content+='				<input type="text" class=" oem_coloris"  style="width:10px;height: 10px;"/>';
		html_content+='			</span>';
		html_content+='			<span class="dd_list_table_feature_val float-sm-left" contenteditable style="width: 90%;"></span>';
		html_content+='		</td>';
		html_content+='		<td class="dd_list_table_setting" coloron="" style="color: #000000; background-color: #ffffff;">';
		html_content+='			<span class="dd_version_edit clr-field float-sm-right" style=" width: 15px; height: 15px; color: #ffffff; ">';
		html_content+='				<button style="width: 100%; height: 100%;border: 1px solid black;" aria-labelledby="clr-open-label"></button>';
		html_content+='				<input type="text" class=" oem_coloris"  style="width:10px;height: 10px;"/>';
		html_content+='			</span>';
		html_content+='			<span class="dd_list_table_setting_val float-sm-left" contenteditable style="width: 90%;"></span>';
		html_content+='		</td>';
		
		
		html_content+='		<td class="dd_list_table_tp_se" style="display: none;"></td>';
		html_content+='	</tr>';
		
		$('#dd_list_table tr:last').after(html_content);
		Coloris_init();

	});
}


function Save_dd_field(){
	$('#dd_version_save_click').click(function(){

		// to Json.....
		
		var json_obj = [];
		$('#dd_list_table tr').each(function() {
			var content, ft_color, bg_color;
			var counter = $.trim($(this).children('td.dd_list_table_item').text()); 
			var item = {};
			
			if(counter == 'undefined' || counter == '' || counter == false){
				$(this).remove(); // remove empty tr
			}
			else if(counter == '#'){
				
			}
			else{
				item["item"] = counter;//$(this).children('td.dd_list_table_item').text();
				
				content = $(this).find('span.dd_list_table_owner_val').html();  
				ft_color = $(this).children('td.dd_list_table_owner').css('color');//console.log(ft_color);	
				bg_color = $(this).children('td.dd_list_table_owner').css('background-color'); //console.log(bg_color);	
				if(ft_color.indexOf('#')<0){
					ft_color = rgba2hex(ft_color);
				}
				if(bg_color.indexOf('#')<0){
					
					bg_color = rgba2hex(bg_color);
				}
				
				item["owner"] = [content, ft_color, bg_color];
				
				content = $(this).find('span.dd_list_table_feature_val').html();//console.log(content);
				ft_color = $(this).children('td.dd_list_table_feature').css('color'); //console.log(rgba2hex(ft_color));	
				bg_color = ($(this).children('td.dd_list_table_feature').css('background-color')); 
				if(ft_color.indexOf('#')<0){
					ft_color = rgba2hex(ft_color);
				}
				if(bg_color.indexOf('#')<0){
					bg_color = rgba2hex(bg_color);
				}
				item["feature"] = [content, ft_color, bg_color];
				
				
				content = $(this).find('td.dd_list_table_setting_val').html();//console.log(content);
				if(content == null){
					content = "";
				}
				ft_color = $(this).children('td.dd_list_table_setting').css('color'); //console.log(rgba2hex(ft_color));
				bg_color = $(this).children('td.dd_list_table_setting').css('background-color');//console.log(rgba2hex(bg_color));
				if(ft_color.indexOf('#')<0){
					ft_color = rgba2hex(ft_color);
				}
				if(bg_color.indexOf('#')<0){
					bg_color = rgba2hex(bg_color);
				}
				
				item["setting"] = [content, ft_color, bg_color];

				content = $(this).children('td.dd_list_table_tp_se').html();//console.log(content);
				ft_color = $(this).children('td.dd_list_table_tp_se').css('color'); //console.log(rgba2hex(ft_color));
				bg_color = $(this).children('td.dd_list_table_tp_se').css('background-color');//console.log(rgba2hex(bg_color));
				if(ft_color.indexOf('#')<0){
					ft_color = rgba2hex(ft_color);
				}
				if(bg_color.indexOf('#')<0){
					bg_color = rgba2hex(bg_color);
				}
				item["TP_SE"] = [content, ft_color, bg_color];
				
				json_obj.push(item);

			}
			
		});
		
		//console.log(JSON.stringify(json_obj));	
		
		var cbaseurl = window.base_url+ "Automotive/Dd_version_save"; 
		$.ajax({
			url : cbaseurl,
			type : "POST",
			//dataType : "json",
			data : {"result": JSON.stringify(json_obj) },
			success : function(data) {
				// do something
				$(document).Toasts('create', {
					class: 'bg-success',
					title: 'Success ',
					subtitle: 'Upload success',
					body: 'Update DD Feature on server'
				});
				
				$('#dd_version_cancel_click').click();
			},
			error : function(data) {
				// do something
				console.log(data);
				$(document).Toasts('create', {
					class: 'bg-danger',
					title: 'Error',
					subtitle: 'Fail to update to server',
					body: 'Fail to update DD feature to server'
				});
				
			},
		});
		
		
		
			/*var tr_count = 0;
			
			$(this).find('tr').each(function(index){
				var json_version = $(this).children('td:first-child').html();
				if(json_version == undefined ){
					
				}
				else if($.trim(json_version) == "<br>"){ // empry version
					$(this).remove();
				}
				else{
					var item_sub = {};
					item_sub["Version"] = json_version;
					item_sub["Description"] = $(this).children('td:last').html();
					
					item["field"].push(item_sub);
					
					tr_count++;
				}
			});
			json_obj.push(item);
		
			if(tr_count == 0){
				$(this).remove();
			}*/
		
		
		
		//console.log(JSON.stringify(json_obj));
		
		
	});
}

function Button_Tab(){
	$('.tp_version_table_tab').click(function(){
		var tabname = $(this).attr('name');
		//console.log(tabname);
		
		var scrollto = '.tp_version_table[name="'+tabname+'"]';
		//console.log(scrollto);
		
		/*$('html,body').animate({
			scrollTop: $(scrollto).offset().top},
        'slow');*/

		var s =document.getElementById('tp_version_parent');
		var s_offset =document.querySelector(scrollto);
		s.scrollTo({
			top: s_offset.offsetTop,
			behavior: "smooth"
		});
	});
}


$(document).ready(function(){
	//==========================================
	//==========================================
	// Tp version
	format_tp_version_table();
	$('.tp_version_table').css('cursor', 'pointer');
	
	$('#tp_version_edit_click').click(function(){
		$('.tp_version_edit').css('display', 'block');
		$('#tp_version_edit_click').prop('disabled', true);
		$('.tp_version_table').prop('contenteditable', true);
		$('.tp_version_table').css('cursor', 'text');
				
	});
	$('#tp_version_cancel_click').click(function(){
		$('.tp_version_edit').css('display', 'none');
		$('#tp_version_edit_click').prop('disabled', false);
		$('.tp_version_table').prop('contenteditable', false);
		
		window.location.href = window.base_url+ "Automotive/Tp_version_show"; 
		
	
	});
	
	Add_new_table();
	Add_version();
	Tp_table_save_to_server();
	//==========================================
	//==========================================
	Add_dd_field();
	Save_dd_field();
	Coloris_init();
	$('.dd_version_edit').hide();
	$('#dd_version_edit_click').click(function(){
		$('.dd_version_edit').show();
		$('#dd_version_edit_click').prop('disabled', true);
		$('#dd_checklist_xlsx').prop('disabled', true);
		$('.dd_list_table_tp_se').hide();
		
		$('.dd_list_table_item').prop('contenteditable', true);
		$('.dd_list_table_item_val').prop('contenteditable', true);
		$('.dd_list_table_owner_val').prop('contenteditable', true);
		$('.dd_list_table_feature_val').prop('contenteditable', true);
		
	});
	$('#dd_version_cancel_click').click(function(){
		$('.dd_version_edit').hide();
		$('.dd_list_table_item').prop('contenteditable', false);
		$('.dd_list_table_item_val').prop('contenteditable', false);
		$('.dd_list_table_owner_val').prop('contenteditable', false);
		$('.dd_list_table_feature_val').prop('contenteditable', false);
		$('#dd_checklist_xlsx').prop('disabled', false);
		
		$('#dd_version_edit_click').prop('disabled', false);
		$('.dd_list_table_tp_se').show();
		
		window.location.href = window.base_url+ "Automotive/Fw_checklist_show"; 
	});
	
	//$('.dd_checklist_delete').click(function(){
		//console.log('delete...');
	//	$(this).closest('tr').remove('tr');
	//});
	Button_Tab();
});