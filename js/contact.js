$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/sahif.ali@gmail.com", 
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        subject: $(form).find("input[name='subject']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contact-form").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();        
      }
    });
  }
});
