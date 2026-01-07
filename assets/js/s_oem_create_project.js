function Create_project(iscreate, sproj_id){
	//$('#Create_project_button').click(function(){
		// Check fields....
		var res = 0, buffer = 0, cascade_num = 0;
		var content = '', tmp, project_name = '', icver, icpower;
		
		tmp = $('#form_cascadeicnum').val(); //console.log(tmp);
		if($.isNumeric(tmp)){
			buffer = parseInt(tmp, 10);
			if( (buffer < 1) || (buffer > 3)){
				content+='cascade IC num must be interger which ranges from 1 to 3.\n';
				res |= 0x01;
			}
			else{
				cascade_num = buffer;
			}
			
		}
		else{
			res |= 0x01;
			content+='cascade IC num must be interger which ranges from 1 to 3.\n';
		}
		//==========================================================
		// get type
		var typee = $('input[name="create_type_radio"]:checked').val();
		
		// get material
		var material = $('input[name="create_material_radio"]:checked').val();
		//==========================================================
		//==========================================================
		// get ic_ver
		icver = $( "#form_ic_ver option:selected" ).text(); //console.log(icver);
		//==========================================================
		var panelid = parseInt($('#form_panelid').val(), 16);
		if(isNaN(panelid)){
			res |= 0x02;
			content+='Invalid panel ID.\n';
			content+='Please enter hex panel id.\n';
		}
		//==========================================================
		// Get IC power mode
		icpower = $( "#form_ic_power_mode option:selected" ).text(); //console.log(icpower);
		//==========================================================
		// Get AA size
		var aa_size_hor , aa_size_ver;
		tmp = $('#form_aa_size_horizontal').val(); 
		if($.isNumeric(tmp)){
			aa_size_hor = parseFloat(tmp); //console.log("horizontal "+aa_size_hor);
		}
		else{
			aa_size_hor = '';
		}
		tmp = $('#form_aa_size_vertical').val();
		if($.isNumeric(tmp)){
			aa_size_ver = parseFloat(tmp);
		}
		else{
			aa_size_ver = '';
		}
		//===========================================================
		tmp = $('#form_project_name').val();
		var strlen = tmp.length; //console.log('str len '+strlen);
		buffer = tmp.indexOf('_');
		if( (buffer > 0) && (buffer < strlen)){		
			if(res == 0x00){
				project_name = tmp + '_'+cascade_num+'_'+material+'_'+typee;
			
				content= 'Project '+project_name + ' is created \n';
			}
		}
		else{
			res |= 0x04;
			content+='Invalid project name.\n';
			content+='Project nam example: LGD_1065\n';
		}
		//==========================================================
		if(res == 0x00){
			$(document).Toasts('create', {
				class: 'bg-success',
				title: 'Success',
				subtitle: 'Create success',
				body: content
			});
			
			
			// Upload to server...
			if(iscreate == 0){
				var cbaseurl = window.base_url+ "Automotive/Modify_projects_todatabase/"+sproj_id; // modify
			}
			else{
				var cbaseurl = window.base_url+ "Automotive/Create_projects_todatabase"; // create --> dont care
			}
			$.ajax({
				url : cbaseurl,
				type : "POST",
				dataType : "json",
				data : {
						"project_name": project_name,
						"cascade_ic" : cascade_num,
						"type": typee,
						"ic_ver": icver,
						"panelid": panelid,
						"aa_size_vertical": aa_size_ver,
						"aa_size_horizontal": aa_size_hor,
						"ic_power_mode": icpower
					},
				
				success : function(data) {
					
					// Clear input
					$('#form_project_name').val("");
					$('#form_aa_size_horizontal').val("");
					$('#form_aa_size_vertical').val("");
					$('#form_cascadeicnum').val("");
					$('#form_panelid').val("");
					
					$('.form_panel_type_radio[value="LH"]').prop('checked', true);
					$('#form_ic_ver option').removeAttr('selected').filter('[value="1"]').attr('selected', true);
							
				},
				error : function(data) {
					console.log("Failed to create project...");
				}
			});
			
		}
		else{
			$(document).Toasts('create', {
				class: 'bg-danger',
				title: 'Error',
				subtitle: 'Create fail',
				body: content
			});
		}

		
	//});

}


