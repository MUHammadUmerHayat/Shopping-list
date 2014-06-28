$(document).ready(function(){


$("#form").submit(function(event){
		event.preventDefault();
		var curr_item = $("#new_item").val();
		console.log(curr_item);
		 $("#item_list").append(curr_item)
		 // ('<li><input type="checkbox" name="" value="First list"></li>');
		form.reset();
	});

	$("li").click(function(){
		$(this).toggleClass("check_off");	
	});
	$("li").dblclick(function(){
		$(this).remove();	
	});
});