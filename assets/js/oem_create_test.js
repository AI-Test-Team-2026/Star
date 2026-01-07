function textarea_create_json(){
   $('#Create_json').click(function(){
	   var cbaseurl = window.base_url+ "Automotive/Create_json_textarea";
	   var content = $('#jsoninputMessage').val();
	   
		$.ajax({
			url : cbaseurl,
			type : "POST",
			dataType : "json",
			data : {"account" : 1, "passwd" : 2},
			success : function(data) {
				// do something
				console.log("Ceating");
				console.log(data);
			},
			error : function(data) {
				// do something
				console.log('textarea_create_json is failed');
				console.log(data);
			}
		});
	});
}

function rawsqlsearch(){
   $('#sql_enter').click(function(){
		
	   var cbaseurl = window.base_url+ "Automotive/Text_to_DB";
	   var content = $('#sqltext').val();
	   
		$.ajax({
			url : cbaseurl,
			type : "POST",
			dataType : "json",
			data : {"query_req" : content},
			success : function(data) {
				// do something
				console.log("query DB success");
				//console.log(data);
				result = JSON.stringify(data);
				$('#sql_result').val(result);
			},
			error : function(data) {
				// do something
				console.log('query DB failed');
				$('#sql_result').val("query DB failed");
			}
		});
		
	});
}


$(document).ready(function(){
    textarea_create_json();
	rawsqlsearch();
});