let itembox = $("#itembox");

$(document).ready(function() {
  let requestbody = {
    "name": "",
    "description": "",
    "minPrice": 0,
    "maxPrice": 1000000
  };
  $.ajax({
    crossDomain: true,
    data: JSON.stringify(requestbody),
    beforeSend: function(request) {
      request.setRequestHeader("api-key", "d9287f5b3b93b487c8b8e0ab56e7d5f9");
      request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    },
    url: "http://localhost:8080/api/v1/vtech/items/query",
    type: "POST",
    complete: function(data, status) {
      console.log(status);
      console.log(data);
      if(status == "success")
      {
        itembox.html(data.responseText);
      }
      else
      {
        itembox.html("Hiba...");
      }
    }
  });
});
$("#search_form").submit((e) => {
  e.preventDefault();

  console.log("Küldés...");

  let name = $('input[id=name]').val();
  let desc = $('input[id=description]').val();
  let minprice = parseInt($('input[id=minprice]').val());
  let maxprice = parseInt($('input[id=maxprice]').val());

  if(isNaN(minprice))
    minprice = 0;
  if(isNaN(maxprice))
    maxprice = 1000000;

  let requestbody = {
    "name": name,
    "description": desc,
    "minPrice": minprice,
    "maxPrice": maxprice
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
    url: "http://localhost:8080/api/v1/vtech/items/query",
    type: "POST",
    complete: function(data, status) {
      console.log(status);
      console.log(data);
      button.html("Keresés");
      button.prop( "disabled", false);
      if(status == "success")
      {
        itembox.html(data.responseText);
      }
      else
      {
        itembox.html("Hiba...");
      }
    }
  });
});

