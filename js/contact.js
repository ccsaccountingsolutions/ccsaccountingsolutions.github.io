var $contactForm = $('#contactForm');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/info@ccsaccounts.co.nz',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			
			$('#success').hide();
			$contactForm.append('<div class="alert alert--success"><h4>Message sent! </h4><br><br><br><br><br></div>');
			
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
