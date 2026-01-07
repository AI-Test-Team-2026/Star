function h_DisplayRxmapping_color_normalized(x_channel, y_channel){
    var content = "";
    var i = 0, j = 0, k = 0, x_div = 0, y_div = 0;
    
    x_div = x_channel/4;
    y_div = y_channel/4;
    //console.log("x_div = "+x_div);
    //console.log("y_div = "+y_div);
    
	// 2-D array
	var printarray = new Array(x_channel);

	for (var yi=0;yi<y_channel;yi++) {
		printarray[yi] = [];
	}
	
    content="<table class=\"oem_table\" id=\"h_rxmapping_table_normalized\" class=\"table2excel table2excel_with_colors\" data-tableName=\"Test Table 5\">\n";
     
    content+="<tbody>\n";
    content+="<tr>\n";
    content+="<th style=\"text-align:center\" colspan=\""+(x_channel+1)+"\">\n";
    content+="&nbsp;HX83192 Single IC"
    content+="</th>\n";
    content+="</tr>\n";
    
    // RX numbers
    content+="<tr>\n";
    content+="<td></td>\n";
    for(i = 1; i <= x_channel; i++){
         content+="<td>"+i+"</td>\n";
    }
    content+="</tr>\n";
    var colors_index = 0;
    var colors = ['ffff99', '99ccff', 'ffcccc', 'ccccff'];
	var l = 0;
	var cal = 0;
    // MUX0-3
    for( k = 0; k < y_channel; k++){ //32
        for(i = 0; i < 4; i++){
			l++;
             content+="<tr>\n";
            // Left
            for(j = 0; j < x_div; j++){
                if(j == 0)
                    content+="<td>"+(l)+"</td>\n";
				
				cal = (k+i+j*y_channel);
				if(cal >= 120){
					cal = 120 - (cal-120) - 1;
				}
				
                content+="<td style=\"width: 50px; background-color: #"+colors[colors_index]+";\">"+cal+"</td>\n";
            }
            for(j = 0; j < x_div; j++){
				
				cal = (k+i+j*y_channel);
				if(cal >= 120){
					cal = 120 - (cal-120) - 1;
				}
								
                content+="<td style=\"width: 50px; background-color: #"+colors[colors_index+1]+";\">"+cal+"</td>\n";
            }
            
            // Right
            for(j = 0; j < x_div; j++){
				cal = (k+i+j*y_channel);
				if(cal >= 120){
					cal = 120 - (cal-120) - 1;
				}
				cal+=120;
				
                content+="<td style=\"width: 50px; background-color: #"+colors[3-colors_index]+";\">"+cal+"</td>\n";
            }
            for(j = 0; j < x_div; j++){
				cal = (k+i+j*y_channel);
				if(cal >= 120){
					cal = 120 - (cal-120) - 1;
				}				
				cal+=120;
				
                content+="<td style=\"width: 50px; background-color: #"+colors[2-colors_index]+";\">"+cal+"</td>\n";
            }
            content+="</tr>\n";
        }
        k+=3;
        colors_index+=2;
        if(colors_index  > 3)
            colors_index = 0;
    }
    content+="</tbody>\n";
    content+="</table>\n";
    
	
    return content;
}

function h_Show_normalized_mapping(){
	var i = 0, j = 0, k = 0, x_div = 0, y_div = 0;
    var x_channel, y_channel;
	var total_counter = 0;
	var hexcal = "";
	
	x_channel = parseInt($('input[name="col_ch"]').val(), 10);
	y_channel = parseInt($('input[name="row_ch"]').val(), 10);
		
    x_div = x_channel/4;
    y_div = y_channel/4;
	var ssave = "";
	var cal = 0;
	
	l = 0;
	cal = 0;
	for(j = 0; j < x_div;j++){
		for( i = 0; i<y_channel; i++){
			if(l >= 120){
				cal = 120 - (l-120) - 1;
			}
			hexcal = "0x"+(cal.toString(16)); 
			ssave+=" "+hexcal+",";
			l++;
			cal++;
			total_counter++;
		}
		//ssave+="\n"; // ignore for Hxdesing
	}
	//ssave+="\n"; //ignore for Hxdesing
	
	l = 0;
	cal = 0;
	for(j = 0; j < x_div;j++){
		for( i = 0; i<y_channel; i++){
			if(l >= 120){
				cal = 120 - (l-120) - 1;
			}
			hexcal = "0x"+(cal.toString(16));
			ssave+=" "+hexcal+",";
			l++;
			cal++;
			total_counter++;
		}
		//ssave+="\n"; //ignore for Hxdesing
	}
	//ssave+="\n"; //ignore for Hxdesing
	
	l = 0;
	cal = 0;
	for(j = 0; j < x_div;j++){
		for( i = 0; i<y_channel; i++){
			if(l >= 120){
				cal = 120 - (l-120) - 1;
				
			}
			hexcal = "0x"+((cal+120).toString(16));
			ssave+=" "+(hexcal)+",";
			l++;
			cal++;
			total_counter++;
		}
		//ssave+="\n"; // ignore for Hxdesing
	}
	//ssave+="\n"; // ignore for Hxdesing
	
	l = 0;
	cal = 0;
	for(j = 0; j < x_div;j++){
		for( i = 0; i<y_channel; i++){
			if(l >= 120){
				cal = 120 - (l-120) - 1;
				
			}
			hexcal = "0x"+((cal+120).toString(16));
			ssave+=" "+(hexcal)+",";
			l++;
			cal++;
			total_counter++;
		}
		//ssave+="\n"; // ignore for Hxdesing
	}
	
	
	for(i = total_counter; i< 960; i++){
		ssave+="0x00,";
	}
	
	//console.log(total_counter);
	//console.log(ssave);
	
	
	var blob = new Blob([ssave], {
		type: "text/plain;charset=utf-8"
	});
	saveAs(blob, "192_h_mapping.txt");
	
	
}
function Create_h_RXTable(){
    $('#P2Table').click(function(){
        $('div.h_Rxmapping_color').html("");
        
        var settingcontent="";
        var mux_num = 0, res_check = 0;
        var x_channel = 0, y_channel = 0;
     
		x_channel = parseInt($('input[name="col_ch"]').val(), 10);
		y_channel = parseInt($('input[name="row_ch"]').val(), 10);
		
		if( isNaN(x_channel) || isNaN(y_channel)){
			settingcontent+="<p style=\"color:red\">please enter correct col/row </p>";
			res_check = 1;
		}
		
		if( (x_channel%4) > 0 ){
			console.log("x chaennel number must be dtivided by 4 without rem.");
			settingcontent+="<p style=\"color:red\">x chaennel number must be dtivided by 4 without rem. </p>";
			res_check = 1;
		}
		if( (y_channel%8) > 0 ){
			console.log("y chaennel number must be dtivided by 8 without rem.");
			settingcontent+="<p style=\"color:red\">y chaennel number must be dtivided by 8 without rem </p>";
			res_check = 1;
		}
	     
     
        if( ((y_channel*x_channel) > 960) && ((y_channel*x_channel) < 1) ){
            console.log("x_channel * y_channel is not in 1~960 range");
            settingcontent+="<p style=\"color:red\">x_channel * y_channel > 960 </p>";
            res_check = 1;
        }
     
        if(res_check == 1)
        {
             //$('.h_Exportdiv').css('display','none');
        }               
        else{
			settingcontent+= h_DisplayRxmapping_color_normalized(x_channel, y_channel);
        }
        // Paste Table
        $('div.h_Rxmapping_color').append(settingcontent);
        
    });

	$('#h_rxmapping_normalized').click(function(){		
		h_Show_normalized_mapping();
	});
}


$(document).ready(function(){
    Create_h_RXTable();
});