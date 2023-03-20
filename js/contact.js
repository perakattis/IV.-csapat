
$("#contact_form").submit((e) => {
  e.preventDefault();

  console.log("Küldés...");

  let name = $('input[id=contact_name]').val();
  let email = $('input[id=contact_email]').val();
  let message = $('textarea[id=contact_text]').val();
  let subject = $('input:radio[name=gridRadios]:checked').val();
  let awaitReply = $('input:checkbox[id=contact_response]').is(':checked');

  let requestbody = {
    "name": name,
    "email": email,
    "message": message,
    "subject": subject,
    "awaitReply": awaitReply
  };

  console.log(requestbody);

  let button = $( "#submit_b" );
  button.html("Folyamatban...");
  button.prop( "disabled", true);

  $.ajax({
    crossDomain: true,
    data: JSON.stringify(requestbody),
    beforeSend: function(request) {
      request.setRequestHeader("api-key", "d9287f5b3b93b487c8b8e0ab56e7d5f9");
      request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    },
    url: "http://localhost:8080/api/v1/vtech/mailing/automail",
    type: "POST",
    dataType: "json",
    complete: function(data, status) {
      console.log(status)
      button.html("Küldés");
      button.prop( "disabled", false);
      if(status == "success") {
        $("#jotoast").toast("show");
        $("#hibatoast").toast("show");
      }
      else {
        $("#jotoast").toast("show");
        $("#hibatoast").toast("show");
      }
    }
  });
});
