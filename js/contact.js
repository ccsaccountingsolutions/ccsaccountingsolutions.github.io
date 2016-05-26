var $contactForm = $('#contactForm');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/sahif_ali@hotmail.co.nz',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message received! We'll be in shortly</div>');
			$contactForm.find('#success').hide();
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
