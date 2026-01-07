var Rom_filename = '';
var Rom_Ic_Type = '0';
var Rom_content_H;
var Rom_content_array;
function Parser_rom_file(filesobj){
	// read the file
	var reader = new FileReader();
	
	// Get filename
	var tmp_name = $.trim(filesobj.name);
	var tmp_ind = (tmp_name).indexOf('.rom');
	var tmp_name_t;
	Rom_filename = '';
	if(tmp_ind > 0){
		tmp_name_t = tmp_name.substring(0, (tmp_ind));
		Rom_filename = tmp_name_t.replace(/\./g,'_');
		Rom_filename+='.h';
	}
	else{
		alert('Select .rom file');
		return;
	}
	//console.log(Rom_filename);
	
	// file reading started
	reader.addEventListener('loadstart', function() {
	    console.log('Binary reading started');
		$("body").addClass('loading');
	});

	// file reading finished successfully
	reader.addEventListener('load', function(e) {
		// contents of file in variable     
	    var text = e.target.result;
		var line = text.split('\n');

		var tmp, content='', buffer, val;
		var i  = 0, j = 0 ;

		content+='#ifndef '+Rom_content_H+'\n';
		content+='#define '+Rom_content_H+'\n\n';
		content+='/*---------------------------------------------------------------------------------------------------------*/\n';
		content+='/*---------------------------------------------------------------------------------------------------------*/\n';
		content+='/*                                            CONST VARIABLE                                               */\n';
		content+='/*---------------------------------------------------------------------------------------------------------*/\n';
		content+='/*---------------------------------------------------------------------------------------------------------*/\n';
		content+=Rom_content_array+' \n';
		content+='{\n';
		for(i = 0; i < line.length; i++){
			buffer = line[i].split(' ');
			
			content = content + "    ";
			for(j = 0; j < buffer.length; j++){
				val = $.trim(buffer[j]);
				if(val != ""){
					tmp = "0x"+(val);
					content = content + tmp+", ";
				}
			}
			content+="\n";
		}
		content+='\n};\n\n';
		content+='#endif /* '+Rom_content_H+' */\n';
		$('#rom_result').val(content);
		$("body").removeClass('loading');
		
		$('#rom_save_header').html('Save As '+Rom_filename);
	});

	// file reading failed
	reader.addEventListener('error', function() {
	    alert('Error : Failed to read Binary');
	});

	// file read progress 
	reader.addEventListener('progress', function(e) {
	    if(e.lengthComputable == true) {
	    	var percent_read = Math.floor((e.loaded/e.total)*100);
	    	console.log(percent_read + '% read');
			$("body").addClass('loading');
	    }
	});

	// read as array buffer
	reader.readAsText(filesobj);
}

function Select_rom_file(){
	var file;
	var i = 0, count = 0;
	
	if($('#rom_parser').length){
		var proj = document.querySelector("#rom_parser");
		proj.addEventListener('change', function(e) {
			$('#rom_result').val("");
			//===========================
			Rom_Ic_Type = $('#rom_result').attr("ic_type");
			if(Rom_Ic_Type == '192'){
				Rom_content_H = '_PA5478A_DD_ROM_CODE_H';
				Rom_content_array = 'UINT8 Dd_rom[4092] =';
			}
			else if(Rom_Ic_Type == '180'){
				Rom_content_H = '_PA5495A_DD_ROM_CODE_H';
				Rom_content_array = 'UINT8 Dd_rom2[DD_ROM2_LEN] __attribute__((section(".dd_rom2"), aligned(1))) =';
			}
			else if(Rom_Ic_Type == '194'){
				Rom_content_H = '_PA0402A_DD_ROM_CODE_H';
				Rom_content_array = 'UINT8 Dd_rom2[DD_ROM2_LEN] __attribute__((section(".dd_rom2"), aligned(1))) =';
			}
			//===========================
			var files = e.target.files;
			Parser_rom_file(files[0]);
		});
	}
	
	$("#rom_save_header").click(function() {
		var content = $('#rom_result').val();
		if(Rom_filename == ''){
			alert('Please select a rom file');
			return;
		}
		Save_Rom(content);
	});
}

function Save_Rom(content){
	var blob = new Blob([content], {
		type: "text/plain;charset=utf-8"
	});
	saveAs(blob, Rom_filename);
}
//---------------------------
function Save_Bin(content){
	var line = content.split('\n'); 
	var i = 0, j = 0;
	var buffer;
	var array = [];
	for(i = 0; i < line.length; i++){
		var content = line[i].split('	'); 
		for(j = 0; j < content.length;j++){
			buffer = parseInt(content[j], 16);
			//console.log(buffer);
			if(!isNaN(buffer)){
				array.push(buffer);
			}
		}
	}
	var byteArray = new Uint8Array(array); //console.log(byteArray);

	var blob = new Blob([byteArray], {
		type: "application/octet-stream"
	});
	saveAs(blob, "Gamma.bin");
}
//----------------------------
$(document).ready(function(){
	Rom_filename = '';
	$('#rom_result').val("");
	Select_rom_file();
	
	//-----------------------
	$("#gamma_bin_save").click(function() {
		var content = $('#gamma_csv_result').val();
		Save_Bin(content);
	});
	//-----------------------
});