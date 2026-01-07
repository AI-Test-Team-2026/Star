function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

function Export_project_list_compare(){
	$('#released_fw_compare_export').click(function(){
		var result_content = document.getElementById('select2_released_result');//$('#select2_released_result').html();
		//console.log(result_content.childNodes.length);
		//console.log(result_content.textContent.trim());
		if(result_content.textContent.trim() === ""){
			// empty --> no export
			$(document).Toasts('create', {
				class: 'bg-warning',
				title: 'Warning',
				subtitle: 'No Compare Result',
				body: 'Please click start to show compare result'
			});
		}
		else{
			// Excel==========================================
			var datee = new Date();
			var strDate = datee.getFullYear() + (datee.getMonth()+1).toString().padStart(2,"0") + datee.getDate().toString().padStart(2,"0")
						+'_'+datee.getHours()+ datee.getMinutes() + datee.getSeconds();
			var filename="Released_FW_Compare_List_"+strDate+".xlsx";
			var workbook = XLSX.utils.book_new();
			workbook.Props = {
				Title: "",
				Subject: "Export Compare List",
				Author: "Star",
				/*CreatedDate: new Date()*/
			};
			//-------------------------------------------------------
			workbook.SheetNames.push("Released_FW_Compare_List");
			var i = 0;
			var ws_data  = [];
			var wscols = [];//[{wch:40},{wch:30},{wch:60}];
			var isfirst = 1;
			var col_count = 0;
			$('.export_select2_fw_title').each(function(){
				
				var func_title = $(this).children('h3').text();
				var func_key = $(this).siblings('.export_select2_fw_content').children('.export_select2_fw_func');
				var func_value = $(this).siblings('.export_select2_fw_content').children('.export_select2_fw_value');
				
				//console.log(func_key);
				if(isfirst == 1){
					var index_array = [];
					index_array.push({
						v: "Project Name", 
						t: "s", 
						s:{ 
							//fill: { fgColor:{ rgb:  'f7d8e1' }},
							alignment: {vertical: "center"},
							font: {bold: true},
							border: {
								right: { style: "thin", color: {rgb: '5c5e63'} },
								bottom: { style: "thin", color: {rgb: '5c5e63'} },
							}
						}
					});
					wscols.push({wch:70});
					
					$.each(func_key, function(key, item) {
					
						index_array.push({
							v: $(item).text(),
							t: "s",
							s: {
								alignment: {vertical: "center"},
								font: {bold: true},
								border: {
									right: { style: "thin", color: {rgb: '5c5e63'} },
									bottom: { style: "thin", color: {rgb: '5c5e63'} },
								}
							}
						});
						//console.log($(item).text());
						if(col_count == 0){
							wscols.push({wch:40});
						}
						else{
							wscols.push({wch:40});
						}
						col_count++;
					});
					isfirst = 0;
					ws_data.push(index_array);
					
					//console.log(wscols);
				}
				
				var value_array = [];
				value_array.push({
					v: func_title,
					t: "s",
					s: {
						alignment: {vertical: "center"},
						border: {
							right: { style: "thin", color: {rgb: '5c5e63'} },
							bottom: { style: "thin", color: {rgb: '5c5e63'} },
						}
					}
				});
				$.each(func_value, function(key, item) {
					//value_array.push($(item).text());
					value_array.push({
						v: $(item).text(),
						t: "s",
						s: {
							alignment: {wrapText: true, vertical: "center"},
							border: {
								right: { style: "thin", color: {rgb: '5c5e63'} },
								bottom: { style: "thin", color: {rgb: '5c5e63'} },
							}
						}});
				});
				ws_data.push(value_array);
			});
			
			//-------------------------------------------------------
			var ws = XLSX.utils.aoa_to_sheet(ws_data);
			ws['!cols'] = wscols;
			workbook.Sheets["Released_FW_Compare_List"] = ws;
			//********************************************
			var wbout = XLSX.write(workbook, {bookType:'xlsx', type: 'binary'});
			saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), filename);
			//********************************************
		}
	});
}

function Export_ap_note_data(){
	$('#show_export_sample').change(function(){
		sample_name = $(this).val(); //console.log(sample_name);
		if(sample_name != "NAN"){
		
			var cbaseurl = window.base_url+ "Automotive/Show_Export_Samples/"+sample_name;
				
			$.ajax({
				url : cbaseurl,
				type : "POST",
				dataType : "json",
				success : function(data) {
					if((data == null) || data["result"] == "-1"){
						$(document).Toasts('create', {
							class: 'bg-warning',
							title: 'Warning',
							subtitle: 'No such template',
							body: 'There is no template on Server.'
						});
						
					}else{
						var json_file = JSON.parse(data);
						//console.log(json_file[0].name);
						
						// Excel==========================================
						var filename="Release_Alg.xlsx";
						var workbook = XLSX.utils.book_new();
						workbook.Props = {
							Title: "",
							Subject: "Export ALG",
							Author: "Star",
							/*CreatedDate: new Date()*/
						};
						//-------------------------------------------------------
						workbook.SheetNames.push("Algorithm");
						var i = 0;
						var ws_data  = [];
						var wscols = [{wch:40},{wch:10}];
						var alg_val, itemname;
						for(i = 0; i< json_file.length; i++){
							
							if(json_file[i].bit == 8){
								itemname = '.5478_sram_alg_val[name="'+json_file[i].itemname+'"]';
							}
							else{
								// Change itemname workaround.....
								var cc_tmp = (json_file[i].itemname).split('tp_sample_')[1]; 
								cc_tmp = '5478_sram_'+cc_tmp;//console.log(cc_tmp);
								itemname = '.'+cc_tmp+'[bit='+json_file[i].field+']';
							}
							//console.log(itemname);
							ws_data.push([json_file[i].name, $(itemname).eq('0').text()]);
						}
						//-------------------------------------------------------
						var ws = XLSX.utils.aoa_to_sheet(ws_data);
						ws['!cols'] = wscols;
						workbook.Sheets["Algorithm"] = ws;
						//-------------------------------------------------------
						workbook.SheetNames.push("Waveform");
						ws_data  = [];
						wscols = [{wch:40},{wch:20}];
						
						ws_data.push(['F0 Sensing Freq', $('.5478_sram_waveform_f0[name="tcon_sc_clk2_period"]').text()]);
						ws_data.push(['F1 Sensing Freq', $('.5478_sram_waveform_f1[name="tcon_sc_clk2_period"]').text()]);
						ws_data.push(['F0 VR1', $('.5478_sram_waveform_f0[name="tcon_set_vr1"]').text()]);
						ws_data.push(['F1 VR1', $('.5478_sram_waveform_f1[name="tcon_set_vr1"]').text()]);
						ws_data.push(['F0 VR2', $('.5478_sram_waveform_f0[name="tcon_set_vr2"]').text()]);
						ws_data.push(['F1 VR2', $('.5478_sram_waveform_f1[name="tcon_set_vr2"]').text()]);
						ws_data.push(['F0 VR3', $('.5478_sram_waveform_f0[name="tcon_set_vr3"]').text()]);
						ws_data.push(['F1 VR3', $('.5478_sram_waveform_f1[name="tcon_set_vr3"]').text()]);
						ws_data.push(['F0 VRH', $('.5478_sram_waveform_f0[name="tcon_set_vrh"]').text()]);
						ws_data.push(['F1 VRH', $('.5478_sram_waveform_f1[name="tcon_set_vrh"]').text()]);
						ws_data.push(['F0 PTBA', $('.5478_sram_waveform_f0[name="tcon_ptba_reg"]').text()]);
						ws_data.push(['F1 PTBA', $('.5478_sram_waveform_f1[name="tcon_ptba_reg"]').text()]);
						ws_data.push(['F0 Tx Pulse Count', $('.5478_sram_waveform_f0[name="tcon_osr_count"]').text()]);
						ws_data.push(['F1 Tx Pulse Count', $('.5478_sram_waveform_f1[name="tcon_osr_count"]').text()]);
						
						//-------------------------------------------------------
						ws = XLSX.utils.aoa_to_sheet(ws_data);
						ws['!cols'] = wscols;
						workbook.Sheets["Waveform"] = ws;
						
						var wbout = XLSX.write(workbook, {bookType:'xlsx', type: 'binary'});
						saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), filename);
						//===================================================	
					}
						
				},
				error : function(data) {
					// do something
					console.log('Failed to samples');
					console.log(data);
					
				}
			});
		}
		// Create XLSX
		/*var exdata = '';
		var itemname;
		var i = 0;
		
		for(i = 0; i< ap_note_arr.length; i++){
			if(ap_note_arr[i].indexOf('.alg_switch_') >=0){ // is class --> function bit
				itemname = ap_note_arr[i];	
			}
			else{ // is id
				itemname = "#"+ap_note_arr[i];
			}
			exdata+=$.trim($(itemname).text())+'\n';
		}

		//console.log(exdata);
		var filename = $.trim($('.released_title').text()); //console.log(filename);
		filename+="_ap_note_data.txt";
		// Saveas File....
		var blob = new Blob([exdata], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, filename);*/
	});
	
}

function Export_dd_checklist(){
	$('#dd_checklist_xlsx').click(function(){
			
		// Excel==========================================
		var filename="Template_FW_workaround.xlsx";
		var workbook = XLSX.utils.book_new();
		workbook.Props = {
			Title: "",
			Subject: "Export DD Checklist",
			Author: "Star",
			/*CreatedDate: new Date()*/
		};
		//-------------------------------------------------------
		workbook.SheetNames.push("Feature list check");
		var i = 0;
		var ws_data  = [];
		var wscols = [{wch:40},{wch:85},{wch:10}];
		var col_1, col_2, col_3, col_4;
		var tmp , color;
		var col_1_color, col_2_color, col_3_color;
		
		$('#dd_list_table tr td').each(function() {
			color = $(this).attr('coloron'); 
			if(typeof color !== 'undefined' && color !== false && color != ''){
				
			}
			else{
				color = "ffffff";
			}
			
			if(i == 0){
				i++;
			}
			else if(i == 1){
				tmp = $(this).children('span.dd_list_table_owner_val').html(); 
				col_1 = tmp.replace(/<br\s*[\/]?>/gi, "\r\n");
				i++;
				
				col_1_color = color;
			}
			else if(i == 2){
				tmp = $(this).children('span.dd_list_table_feature_val').html(); 
				col_2 = tmp.replace(/<br\s*[\/]?>/gi, "\r\n");
				i++;
				
				col_2_color = color;
			}
			else if(i == 3){
				tmp = $(this).children('span.dd_list_table_setting_val').html(); 
				col_3 = tmp.replace(/<br\s*[\/]?>/gi, "\r\n");
				i++;
				col_3_color = color;
			}
			else{
				//tmp = $(this).html(); 
				//col_4 = tmp.replace(/<br\s*[\/]?>/gi, "\r\n");
				i = 0;
				
				ws_data.push([
					{ v: col_1, t: "s", 
						s: { 
							fill: { fgColor: { rgb: col_1_color } }, 
							alignment: {wrapText: true, vertical: "top"} ,
							border: { top: {style: "thin"}, left: {style: "thin"}, right: {style: "thin"}, bottom: {style: "thin"}}, // thick/thin
							font: { sz: "12", name: "Calibri"}
						} 
					},
					{ v: col_2, t: "s", 
						s: { 
							fill: { fgColor: { rgb: col_2_color } }, 
							alignment: {wrapText: true, vertical: "top"} ,
							border: { top: {style: "thin"}, left: {style: "thin"}, right: {style: "thin"}, bottom: {style: "thin"}}, // thick/thin
							font: { sz: "12", name: "Calibri"}
						} 
					},
					{ v: col_3, t: "s", 
						s: { 
							fill: { fgColor: { rgb: col_3_color } }, 
							alignment: {wrapText: true, vertical: "top"} ,
							border: { top: {style: "thin"}, left: {style: "thin"}, right: {style: "thin"}, bottom: {style: "thin"}}, // thick/thin
							font: { sz: "12", name: "Calibri"}
						} 
					}
				]);
				
			}
		});
		
		//-------------------------------------------------------
		var ws = XLSX.utils.aoa_to_sheet(ws_data);
		ws['!cols'] = wscols;
		workbook.Sheets["Feature list check"] = ws;	
		
		var wbout = XLSX.write(workbook, {bookType:'xlsx', bookSST:true, type: 'binary'});
		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), filename);
		//===================================================	
	});
}

$(document).ready(function(){
	Export_ap_note_data();
	Export_dd_checklist();
	Export_project_list_compare();
});