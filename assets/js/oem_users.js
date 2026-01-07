

$(document).ready(function(){
	$('#add_users_page').click(function(){
		var userid = $.trim($('#form_users_id').val());
		var usertele = $.trim($('#form_users_tele').val());
		var username = $.trim($('#form_users_name').val());
		
		//console.log(userid);
		if((userid=="") | (usertele=="")|| (userid=="")){
			$(document).Toasts('create', {
				class: 'bg-warning',
				title: 'Warning',
				subtitle: 'Fail to Create Users',
				body: 'There is empty field.'
			});
		}
		else{
			var cbaseurl = window.base_url+ "Automotive/Request_Add_Users"
			//console.log(cbaseurl);
			
			$.ajax({
				url : cbaseurl,
				type : "POST",
				dataType : "json",
				data : {"userid" : userid, "passwd" : usertele, "username": username},
				success : function(data) {
					// do something
					//console.log("Ceating");
					//console.log(data);
					if((data == null) || data["result"] == "-1"){
						$(document).Toasts('create', {
							class: 'bg-warning',
							title: 'Warning',
							subtitle: 'Fail to Create Users',
							body: 'Create Users fail'
						});
						
					}else{
						
						$(document).Toasts('create', {
							class: 'bg-success',
							title: 'Success',

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
	//==================================================================
	$('#remove_users_page').click(function(){
		var userid = $.trim($('#form_users_id_remove').val());

		if(userid==""){
			$(document).Toasts('create', {
				class: 'bg-warning',
				title: 'Warning',
				subtitle: 'Fail to Create Users',
				body: 'There is empty field.'
			});
		}
		else{
			var cbaseurl = window.base_url+ "Automotive/Request_Remove_Users/"+userid;
			//console.log(cbaseurl);
			
			$.ajax({
				url : cbaseurl,
				type : "POST",
				dataType : "json",
				//data : {"userid" : userid, "passwd" : usertele, "username": username},
				success : function(data) {
					// do something
					//console.log("Ceating");
					//console.log(data);
					if((data == null) || data["result"] == "-1"){
						$(document).Toasts('create', {
							class: 'bg-warning',
							title: 'Warning',
							subtitle: 'Fail to Remove Users',
							body: 'There is no user id in DB'
						});
						
					}else{
						
						$(document).Toasts('create', {
							class: 'bg-success',
							title: 'Success',

						});
					}
				},
				error : function(data) {
					// do something
					console.log('Failed to remove users');
					console.log(data);
				}
			});
		}
		
	});
	
	
});