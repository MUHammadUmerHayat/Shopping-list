$(document).ready(function(){
$("#err_message").hide();

$("#form").submit(function(event){
		event.preventDefault();
		var curr_item = $("#new_item").val();
		//console.log(curr_item);

		if (curr_item === "")
		{
			$("#err_message").show("fast");
		}
		else{
			$("#err_message").hide();
		var curr_item1 = $(
        "<li>" +
        "<input type=\"checkbox\" value=\" \">" +
         curr_item +
        "</li>");
		 $("#item_list").append(curr_item1);
		 //append('<li><input type="checkbox" name=""> curr_item</li>');
		form.reset();
		}
		
	});

	$("li").click(function(){
		$(this).toggleClass("check_off");	
	});
	$("li").dblclick(function(){
		$(this).remove();	
	});
	$("").click(function(){
		$('ul').sort();
	});
});