function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

function Export_ap_note_data(){ // PA0402/PA0412 version
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
						/*
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
						*/
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
	});
	
}


$(document).ready(function(){
	Export_ap_note_data();
});