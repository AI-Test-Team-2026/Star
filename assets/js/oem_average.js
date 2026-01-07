var Panel_mapping = [];
var Chart_TX, Chart_RX;
var chart;

var Panel_filename = [];
var master_rx = 0, slave_rx = 0, max_mux_adc = 0;
var IC_mux_num = 0;

function Create_average_chart(is_load, order, selectedmux, isleft, plotid){
	var i = 0,j = 0, total_count = 0;
	var tt = [];
	//==============================
	var dataarr = [];
	var mappingarr = [];
	var chart_class= ".chart_table_"+order+"_data";
	var mux = 0, adcid = 0;
	var tmp, buffer, index = 0;
	$(chart_class).each(function() {
		tmp = $(this).attr("data");
		buffer = tmp.split('_')[0];
		mux = parseInt(buffer[3], 10);
		buffer = tmp.split('_')[2];
		adcid = parseInt(buffer, 10);
		
		if(    ((isleft == 1) && (adcid < max_mux_adc) && (mux == selectedmux))
			|| ((isleft == 0) && (adcid >= max_mux_adc) && (mux == selectedmux))
		){
			dataarr.push($(this).text());
			mappingarr.push($(this).attr("data"));
			total_count++; 
		}
	});
	/*console.log(dataarr);
	console.log(mappingarr);
	console.log(total_count);
	console.log(Panel_filename[order]);*/
	
	if(is_load == 0){
		for(i = 0; i < total_count; i++){
			tt.push({
					type: "line",
					axisXIndex: 1,
					name: mappingarr[i],
					dataPoints: [{x: 1, y: parseFloat(dataarr[i]), label: Panel_filename[order], }]
			});
		}
		//==============================
		
		chart = new CanvasJS.Chart(plotid, {
			//animationEnabled: true,
			exportEnabled: true,
			/*width: 800,*/
			title: {
				text: "Average Rawdata "+plotid,
				fontSize: 16,
			},
			axisY:{
				/*minimum: 16000,
				maximum: 16400*/
				labelFontSize: 12,
			},
			axisX:{
				interval: 1,
				labelFontSize: 12,
			},
			toolTip:{   
				content: "{name}: {y}"      
			},
			data:tt
		});
	}
	else{
		
		var k = parseInt(order, 10)+1; //console.log("x is "+k);
		//chart.options.title.text = "Updated Chart Title";
		for(i = 0; i < total_count; i++){
			chart.options.data[i].dataPoints.push(
				{x: k ,y: parseFloat(dataarr[i]), label: Panel_filename[order], }
			); // Add a new dataSeries
		}
	
	}
	chart.render();
}

function Create_average_table(order, data_arr){
	var i = 0, tx = 0, index = 0;
	var rx = 0;
	var content = '';

	content+='<table class="table chart_table chart_table_'+order+'" id="chart_table_id_'+order+'" name="'+Panel_filename[order]+'">'+'\n';
	content+='	<thead>'+'\n';
	content+='		<tr style="background-color: #E3EB98;"><td colspan="'+(Chart_TX+1)+'">'+Panel_filename[order]+'</td></tr>'+'\n';
	content+='	</thead>'+'\n';
	content+='	<tbody>'+'\n';
	for(i = 0; i < (Chart_RX+1)*(Chart_TX+1); i++){
		if(i == 0){
			content+='		<tr>'+'\n';
			content+='			<td></td>'+'\n';
		}
		else if((i <= Chart_TX) && (i > 0)){
			content+='			<td>RX'+(i-1)+'</td>'+'\n';
		}
		else{
			if((i%(Chart_TX+1)) == 0){
				content+='		<tr>'+'\n';
				tx = (i/(Chart_TX+1));
				content+='			<td>TX'+(tx-1)+'</td>'+'\n';
			}
			else{
				index = (i-(Chart_TX+1)-tx);
				if(Panel_mapping[index] == ""){
					rx = (i%(Chart_TX+1)) - 1;
					Panel_mapping[index] = "RX"+rx;
				}
				content+='			<td class="chart_table_'+order+'_data" data="'+Panel_mapping[index]+'" name="td_'+index+'">'+data_arr[index]+'</td>'+'\n';
				//content+='			<td>'+(i-(Chart_TX+1)-tx)+'</td>'+'\n';
			}
			
		}
		
		if(((i% (Chart_TX+1)) == Chart_TX) && (i > 0)){
			content+='		</tr>'+'\n';
		}
	}

	content+='	</tbody>'+'\n';
	content+='</table>'+'\n';
	$('.table_info').append(content);
	
	$('.table_data').show();
}

function Parser_csv_file(filesobj, isdata){
	// read the file
	var reader = new FileReader();
	
	// file reading started
	reader.addEventListener('loadstart', function() {
	    console.log('File reading started');
	});
	
	// file reading finished successfully
	reader.addEventListener('load', function(e) {
	   // contents of file in variable     
	    var text = e.target.result;
		var lines = text.split('\n');
		var tmp, buffer;
		var i  = 0, j = 0, k = 0;
		var frame_start = 0, frame_end = 0, tx = 0, rx = 0;
		var Panel = [];
		var Panel_Stella = [];
		
		for(i = 0; i < lines.length; i++){
			buffer = $.trim(lines[i]).split(','); 

			// Check the first text is Time....
			if(buffer[0].indexOf('Time:') >=0){
				if(frame_start == 0){
					//console.log(buffer);
					// Get X0~XN
					for(j = 0; j < buffer.length; j++){
						if(buffer[j].indexOf('X') ==0){
							tx++;
						}
					}
				}
				Chart_TX = tx; 
				frame_start++;
			}
			else if((frame_start > 0) && (buffer.length > 2)){
				if(buffer[1].indexOf('Y') ==0){
					for(k = 2; k < buffer.length;k++){
						if(buffer[k] == ""){
							
						}
						else{
							if(isdata == 1){
								Panel.push(buffer[k]);
							}
							else{
								var mux = 0, muxtmp = 0, adc = 0;
								muxtmp = parseInt(buffer[k],10)/1000;
								mux = ~~muxtmp; // to integer
								adc = parseInt(buffer[k],10)%1000;
								
								// Check is master or slave===
								var icis;
								if((k - 2) < slave_rx){
									icis = "s1";
								}
								else if( ((k - 2) > slave_rx) &&
								((k - 2) < (slave_rx+ master_rx))){
									icis = "m";
								}
								else{
									icis = "s2";
								}
								Panel_mapping.push("mux"+mux+"_adc_"+adc+"_"+icis); 
								
							}
						}
					}
					
					rx++;
				}
			}
			if(buffer[0].indexOf('Checksum') >=0){
				Chart_RX = rx;
				rx = 0;
				
				if(isdata == 0){
					break;
				}
			}
		}
		//console.log(Panel_mapping);
		if(isdata == 1){
			var namee = filesobj.name;
			var namee_tmp = namee.split('_')[0];
			var order = (parseInt(namee_tmp, 10) - 1);
			
			//console.log(frame_start);
			//console.log(Chart_TX);
			//console.log(Chart_RX);
			var sum = 0;
			
			// Get average....
			for(i = 0; i < Chart_TX*Chart_RX; i++){
				for(k = 0; k < frame_start; k++){
					tmp = parseInt(Panel[k*(Chart_TX*Chart_RX)+i], 10);
					//console.log(tmp);
					sum +=(tmp/frame_start);
				}
				//sum = sum/frame_start;
				//Panel_average.push(sum.toFixed(3));
				Panel_Stella.push(sum.toFixed(3));
				//Panel_average[order*(Chart_TX*Chart_RX)+i] = sum.toFixed(3);
				sum = 0;
			}
			
			//console.log(Panel_average);
			//Add_average_content();
			Create_average_table(order, Panel_Stella);
		}
	});

	// file reading failed
	reader.addEventListener('error', function() {
	    alert('Error : Failed to read file');
	});

	// read as array buffer
	reader.readAsText(filesobj);
}

function Add_CSV(){
	var file;
	var i = 0, count = 0;
	
	if($('#csv_parser').length){
		var proj = document.querySelector("#csv_parser");
		proj.addEventListener('change', function(e) {
			Panel_mapping = [];
			Panel_filename = [];
			//chart_file_count = 0;
			$('.table_info').html('');
			$('.table_data').hide();
			$('.button_load').CardWidget('collapse');
			$('#Plot_area').html('');
			if(chart != null){
				chart.destroy();
				chart = null;
			}
			slave_rx = parseInt($('#input_slave_rx_num').val(), 10); //console.log(slave_rx);
			master_rx = parseInt($('#input_master_rx_num').val(), 10);
			IC_mux_num = parseInt($('#input_mux_num').val(), 10);
			max_mux_adc = parseInt($('#input_max_mux_adc_num').val(), 10);
			max_mux_adc/=2; 
			
			$('#table_select2').html('');
			
			if(isNaN(slave_rx) 
				|| isNaN(master_rx) || (master_rx <=0)
				|| isNaN(IC_mux_num) || (IC_mux_num<=0)
				|| (max_mux_adc < 120)
				){
				alert("Please fill out rx count and mux num");
	
				return;
			}
			
			console.log("Parse Files.....");
			var files = e.target.files;
			for(i = 0; i < files.length; i++){
				file = files[i];
				if(file.name.indexOf('0_Mapping') >=0){
					Parser_csv_file(file, 0);
				}
				else{
					// Push name======
					Panel_filename.push(file.name); //console.log(file.name);
					Parser_csv_file(file, 1);	
				}
			}
		});
	}
}

function Show_buttons(){
	$('#plot_show_data').click(function(){
		var total_data_length = $('.chart_table').length;
		//console.log($('.chart_table').length);
		var i = 0;
		var content = '';
		content+='<h6>Select CSV Data</h6>'+'\n';
		content+='<select id="table_name_select2" multiple="multiple">'+'\n';
		content+='	<option value="all">all</option>'+'\n';
		content+='	<optgroup label="Add Data">'+'\n';
		for (i = 0; i< total_data_length; i++){
			content+='		<option value="'+i+'">'+Panel_filename[i]+'</option>'+'\n';
		}
		content+='	</optgroup>'+'\n';
		content+='</select>'+'\n';	
		$('#table_select2').html(content);
		// =================================================
		// =================================================
		$('#table_name_select2').select2({
			placeholder: "Select a state",
			allowClear: true,
			width: '100%',
			maximumInputLength: 10,
			minimumInputLength: 0,
			/*tags: true,*/
		});
		
		
		$('#table_name_select2').on("select2:select", function (e) { 
			var data = e.params.data.text;
			if(data=='all'){
				$("#table_name_select2 > option").prop("selected", false);
				$("#table_name_select2 > optgroup >option").prop("selected", true);
				$("#table_name_select2").trigger("change");
			}
		});
	});
	$('#plot_enter_data').click(function(){
		//$('body').addClass('loading');
		// Get select2 data....
		var dataid = $('#table_name_select2').select2('data');
		var isfirst = 0;
		//======================================
		// Get mux information==================
		var mux_index = 0;
		
		// Create plot area =================
		var plotid;
		//===================================
		for(mux_index = 0; mux_index < IC_mux_num; mux_index++){
			plotid = "Mux_"+mux_index+"_"+"0_"+(max_mux_adc-1); // LEFT: 0-119
			$('#Plot_area').append('<div id="'+plotid+'" style="width: 100%; height: 800px""></div>');
			isfirst = 0;
			$.each( dataid, function( key, value ) {
				//console.log("order is "+value.id);
				Create_average_chart(isfirst, value.id, mux_index, 1, plotid);
				//Plot data=========================
				if(isfirst == 0){
					isfirst = 1;
				}
			});
			//====================================================
			plotid = "Mux_"+mux_index+"_"+max_mux_adc+"_"+(2*max_mux_adc-1); // RIGHT:120_239
			$('#Plot_area').append('<div id="'+plotid+'" style="width: 100%; height: 800px""></div>');
			isfirst = 0;
			$.each( dataid, function( key, value ) {
				//console.log("order is "+value.id);
				Create_average_chart(isfirst, value.id, mux_index, 0, plotid);
				//Plot data=========================
				if(isfirst == 0){
					isfirst = 1;
				}
			});
		}
		//$('body').removeClass('loading');
	});
	$('#average_excel').click(function(){
		//console.log("Export to excel button (xlsx) is pressed");

		var filename = "";
		var tableid, tablename, buffer;
		filename="Average_rawdata.xlsx";


		var workbook = XLSX.utils.book_new();
		$.each( $('.chart_table'), function( key, value ) {
			buffer = $(this).attr('name');
			tablename = buffer.split('.')[0];
			//console.log(tablename);
			// Get ID
			tableid = $(this).attr('id'); console.log(tableid);
			tableid = "#"+tableid;
			var ws1 = XLSX.utils.table_to_sheet(document.querySelector(tableid));
			XLSX.utils.book_append_sheet(workbook, ws1, tablename);
		});
		
		XLSX.writeFile(workbook, filename);
		
	});	
}

$(document).ready(function(){
	Add_CSV();
	Show_buttons();
	$('.button_load').CardWidget('collapse');
});