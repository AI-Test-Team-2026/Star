
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
	$('.tp_version_sel0_add_sure').click(function(){
		var getname = $(this).attr('name'); //console.log(getname);
		var insert_version = '#tp_version_edit_sel0_insert_v_'+getname;
		var insert_content = '#tp_version_edit_sel0_insert_d_'+getname;
		var html_content = '';
		
		html_content+='	<tr>';
		html_content+='		<!-- Sel 0 Version -->';
		html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 5%;">'+$(insert_version).html()+'</td>';
		html_content+='		<!-- Sel 0 Description -->';
		html_content+='		<td style="width: 45%;">'+$(insert_content).html()+'</td>';
		html_content+='		<!-- Sel 1 Version -->';
		html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 5%;"></td>';
		html_content+='		<!-- Sel 1 Description -->';
		html_content+='		<td style="width: 45%;"></td>';
		html_content+='	</tr>';
		
		var insert_name = '.tp_version_table[name="'+getname+'"] tr:nth-child(2)';
		$(insert_name).after(html_content);
		
		$('.tp_version_edit').css('display', 'block');
		format_tp_version_table(); // re-render
	});
	$('.tp_version_sel1_add_sure').click(function(){
		var getname = $(this).attr('name'); //console.log(getname);
		var insert_version = '#tp_version_edit_sel1_insert_v_'+getname;
		var insert_content = '#tp_version_edit_sel1_insert_d_'+getname;
		var html_content = '';
		
		html_content+='	<tr>';
		html_content+='		<!-- Sel 0 Version -->';
		html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 5%;"></td>';
		html_content+='		<!-- Sel 0 Description -->';
		html_content+='		<td style="width: 45%;"></td>';
		html_content+='		<!-- Sel 1 Version -->';
		html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 5%;">'+$(insert_version).html()+'</td>';
		html_content+='		<!-- Sel 1 Description -->';
		html_content+='		<td style="width: 45%;">'+$(insert_content).html()+'</td>';
		html_content+='	</tr>';
		
		var insert_name = '.tp_version_table[name="'+getname+'"] tr:nth-child(2)';
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
			html_content+='		<th colspan="4" style="text-align: center;">';
			html_content+='			<span  class="name_version">'+nname+'</span>';
			// html_content+='			<button class="btn btn-sm bg-info float-sm-right tp_version_edit" data-toggle="modal" data-target="#tp_version_edit_'+nname.toLowerCase()+'">Add Version</button>';
			html_content+='		</th>';
			html_content+='	</tr>';
			html_content+='	<tr>';
			html_content+='		<th colspan="2" style="text-align: center;"><span>Sel 0</span>';
			html_content+='			<button class="btn btn-sm bg-info float-sm-right tp_version_edit" data-toggle="modal" data-target="#tp_version_edit_sel0_'+nname.toLowerCase()+'">Add Version</button>';
			html_content+='		</th>';
			html_content+='		<th colspan="2" style="text-align: center;"><span>Sel 1</span>';
			html_content+='			<button class="btn btn-sm bg-info float-sm-right tp_version_edit" data-toggle="modal" data-target="#tp_version_edit_sel1_'+nname.toLowerCase()+'">Add Version</button>';
			html_content+='		</th>';
			html_content+='	</tr>';
			
			html_content+='	<tr>';
			html_content+='		<!-- Sel 0 Version -->';
			// html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 5%;">'+$('#tp_version_edit_insert_v_new').html()+'</td>';
			html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 5%;"></td>';
			html_content+='		<!-- Sel 0 Description -->';
			// html_content+='		<td style="width: 45%;">'+$('#tp_version_edit_insert_d_new').html()+'</td>';
			html_content+='		<td style="width: 45%;"></td>';
			html_content+='		<!-- Sel 1 Version -->';
			html_content+='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 5%;"></td>';
			html_content+='		<!-- Sel 1 Description -->';
			html_content+='		<td style="width: 45%;"></td>';
			html_content+='	</tr>';
			html_content+='</table>';
			

			$('.tp_version_table:last').after(html_content);
			$('.tp_version_edit').css('display', 'block');
			
			// Create Modal==================
			//==================================================================================
			var content_modal = '';
			// Sel 0
			content_modal+='<div class="modal fade" id="tp_version_edit_sel0_'+nname.toLowerCase()+'" style="display: none;" aria-hidden="true">';
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
			content_modal+='						<td id="tp_version_edit_sel0_insert_v_'+nname+'" style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;" contenteditable>V0x.00</td>';
			content_modal+='						<!-- Description -->';
			content_modal+='						<td id="tp_version_edit_sel0_insert_d_'+nname+'" style="background-color:  #DAF7A6 ;" contenteditable>Enter Content....</td>';
			content_modal+='					</tr>';
			content_modal+='				</table>';
			content_modal+='			</div>';
			content_modal+='			<div class="modal-footer justify-content-between">';
			content_modal+='				<button type="button" class="btn btn-outline-info" data-dismiss="modal">Close</button>';
			content_modal+='				<button type="button" class="btn btn-outline-info tp_version_sel0_add_sure" data-dismiss="modal" name="'+nname+'">Sure</button>		';
			content_modal+='			</div>';
			content_modal+='		</div> <!-- /.modal-content -->';
			content_modal+='	</div> <!-- /.modal-dialog -->';
			content_modal+='</div>	';
			// Sel 1
			content_modal+='<div class="modal fade" id="tp_version_edit_sel1_'+nname.toLowerCase()+'" style="display: none;" aria-hidden="true">';
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
			content_modal+='						<td id="tp_version_edit_sel1_insert_v_'+nname+'" style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;" contenteditable>V0x.00</td>';
			content_modal+='						<!-- Description -->';
			content_modal+='						<td id="tp_version_edit_sel1_insert_d_'+nname+'" style="background-color:  #DAF7A6 ;" contenteditable>Enter Content....</td>';
			content_modal+='					</tr>';
			content_modal+='				</table>';
			content_modal+='			</div>';
			content_modal+='			<div class="modal-footer justify-content-between">';
			content_modal+='				<button type="button" class="btn btn-outline-info" data-dismiss="modal">Close</button>';
			content_modal+='				<button type="button" class="btn btn-outline-info tp_version_sel1_add_sure" data-dismiss="modal" name="'+nname+'">Sure</button>		';
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
			item["name"] = $(this).find('tbody th span.name_version').text();
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
					item_sub["Version_sel0"] = json_version;
					item_sub["Description_sel0"] = $(this).children('td:nth-child(2)').html();

					item_sub["Version_sel1"] = $(this).children('td:nth-child(3)').html();
					item_sub["Description_sel1"] = $(this).children('td:nth-child(4)').html();

					
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
		
		
		var cbaseurl = window.base_url+ "Automotive/pa0402_Tp_version_save"; 
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
		
		window.location.href = window.base_url+ "Automotive/pa0402_Tp_version_show"; 
	});
	
	Add_new_table();
	Add_version();
	Tp_table_save_to_server();
	Button_Tab();
});