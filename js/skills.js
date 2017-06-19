$(document)
.ready(function() {

	// $('.ui.sidebar.skills')
	// .sidebar('toggle')
	// ;

	// $('.ui.sticky.segment').hide();


	// $('.row .column').click(function(){
	// 	// $('.ui.sticky.segment.js').hide();

	// 	var myId = $(this).attr("id");
	// 	// alert('.' + myId);
	// 	// console.log(.ui.right.very.close.rail);
	// 	// $(".ui.right.very.close.rail .segment").each(function(e){
	// 	$(".ui.right.very.close.rail .segment").each(function(i,e){
	// 		console.log(myId);
	// 		if($(e).hasClass(myId)){
	// 			$(e).show();
	// 		}
	// 		// if($(e.className == myId)){
	// 			// alert("blarg");
	// 			// $(e).show();
	// 		else{
	// 			// alert(e.attr('class'));
	// 			// e.preventDefault();
	// 			$(e).hide();
	// 			// e.preventDefault();
	// 		}
	// 	});
	// 	// $('.ui.sticky.segment').hide();
	// 	// $('.'+myId).show();

	// });

	$('.row .column').click(function(){
		// $('.ui.sticky.segment.js').hide();

		var myId = $(this).attr("id");
		$(".ui.right.very.close.rail .segment .inside").each(function(i,e){
 			if(!($(e).hasClass(myId))){
				// $(e).addClass('hide');
				$(e).show();
			}
			else{
				$(e).hide();
				// $(e).removeClass('hide');
			}
		});
	});

// $('.row .column').click(function(){
// 	$('.ui.right.very.close.rail').empty();
// 	// $(".ui.right.very.close.rail .segment").each(function(i,e){

// 	// }



// }

$('.ui.sticky')
.sticky({
	context: '.ui.grid.sixteen.skill'
});

});