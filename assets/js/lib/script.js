$('ul').on('click', 'li', function() {
	$(this).toggleClass('strikedOut');
});

$('ul').on('click', 'span', function() {
	$(this).parent().fadeOut(1000, function() {
		$(this).remove();
	});
})

$('input[type="text"]').on('keypress', function(event) {
	if(event.key == 'Enter') {
		newLi = `<li><span><i class="fa fa-trash"></i></span> ${$(this).val()}</li>`;
		$('#list').append(newLi);
		$(this).val('');
	}
});

$('.fa-plus').on('click', function() {
	$('input[type="text"]').fadeToggle();
});