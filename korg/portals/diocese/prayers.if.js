$(document).ready(function() {	
	$("div.join").click(function(){

		var rel = $(this).find('a').attr('rel');
		var data ={id: rel}; 
		

		$.ajax({
			type: "POST",
			url: "/se/sites/ep/prayer/join/",
			data: data, 
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function(data){
				var item = data[0].pk
				$("div.join>a[rel="+item+"]>ins").replaceWith('<ins title="data[0].fields.count людей долучились до цієї молитви">'+data[0].fields.count +'</ins>');
				
				alert(" Дякуємо за молитву");
				return false;
			}
		
		});
	});
	
	
	$("#add_btn").click(function () {
		var prayer = $("#pr").val();
    	if (prayer != "") {
        	var data ={pr: prayer}; 
		    $.ajax({
		        type: "POST",
		        url: "/se/sites/ep/prayer/",
		        data: data, 
		        dataType: "json",
		        contentType: "application/json; charset=utf-8",
		        success: function(data){
			    	$("#pr").val('');
	  				alert(" Ваше прохання додано і очікує підтвердження адміністратором ");
		        }
		    });		
		} else{
	        alert("Подайте намір молитви!");
	    }
	});			
});

