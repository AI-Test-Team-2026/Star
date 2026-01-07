
function S_Login(){
	var cbaseurl, s_userid, s_password, s_remember;
	var r = 0;
	
	$('#auth_sign_in').click(function(){

		cbaseurl = window.base_url+ "Automotive/pa5478_login"; 
		s_userid = $('input[name="userid"]').val();
		s_password = $('input[name="teleext"]').val();
		s_remember = $('#remember').is(":checked"); 
		if(s_remember == true){
			r = 1;
		}
		else{
			r = 0;
		}

		//console.log("user id is "+s_userid+" password is "+s_password+" remember is "+r);
		// Start to compare
		
		//console.log(cbaseurl);
			
		$.ajax({
			url : cbaseurl,
			type : "POST",
			dataType : "json",
			data : {
				"userid" : s_userid, "password" : s_password, "guest": r
			},
			success : function(data) {
				// do something
				console.log("success to login");
				//console.log(data);
				//console.log(data.id);
				if(data.id < 0){
				
					$('.login-box-msg').html("Wrong User ID or Password");
					$('.login-box-msg').css('color','red');
				}
				else{
					window.location.replace(window.base_url+"Automotive/index");
				}
			},
			error : function(data) {
				// do something
				console.log('Failed to login');
				console.log(data);
			},
		});
		
		
	});
}



$(document).ready(function(){
	S_Login();

});