$(document)
.ready(function() {

	// $('.ui.sidebar.skills')
	// .sidebar('toggle')
	// ;


	$('#hide-button').click(function(){
		$('.ui.segment.php').toggle();
	});

	$('.ui.sticky')
	.sticky({
		context: '.ui.grid.sixteen.skill'
	})
	;

});