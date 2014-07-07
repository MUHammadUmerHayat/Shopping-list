$(document).ready(function(){
$("#err_message").hide();
$("#rule").hide();

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
		        "<input type=\"checkbox\" id ='check' value=\"" + curr_item +"\">" +
		         curr_item +
		        "</li>");
			$("#item_list").append(curr_item1);
			 //append('<li><input type="checkbox" name=""> curr_item</li>');
			form.reset();
		}
		
	});
	$("#item_list").on("click", "li", function(event){
		$(this).toggleClass("check_off");
	});

	$("#item_list").on("dblclick", "li", function(event){
		$(this).remove();
	});

	$("#reset_all").click(function(){
		location.reload();
	});
	$("#instr").on("click", function(event){
		event.preventDefault();
		$("#rule").slideToggle("slow");
	})

	$("#sort_item").on("click", function(){
	$('li').sortElements(function(a, b){
    return $(a).text() > $(b).text() ? 1 : -1;
		});
	});
	$(function() {
	$( "#item_list" ).sortable();
	$( "#item_list" ).disableSelection();
	});

});
	