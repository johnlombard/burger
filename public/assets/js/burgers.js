// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#burger-submit").on("click", function(event) {
    event.preventDefault();

    console.log("test");
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    
    var newDevouredState = {
      devoured: newDevoured
    };
    console.log("THIS IS THE NEW BURGER")
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 
});
