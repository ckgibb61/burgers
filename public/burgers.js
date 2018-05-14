/// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-eaten").on("click", function (event) {
        const id = $(this).data("id");
        var devour = $(this).data("newlyEaten");

        var newState = {
            eaten: newlyEaten
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function () {
                console.log("changed status to", newlyEaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger= {
            name: $("#ca").val().trim(),
            sleepy: $("[name=eaten]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
