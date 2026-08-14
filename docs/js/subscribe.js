(function () {
  "use strict";

  const SUBSCRIBE_URL =
    "https://script.google.com/macros/s/AKfycbwzqsoc7u6f1xqRvdbWjtHQl9xzOTK2_QvYlqRd_v7gmVKI9wM4mU-50RQdF0gLrGG2/exec";

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const form =
        document.getElementById(
          "subscribeForm"
        );

      const message =
        document.getElementById(
          "message"
        );

      if (!form) {
        console.error(
          "Subscribe form was not found."
        );
        return;
      }

      form.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();

          const name =
            document
              .getElementById("name")
              .value
              .trim();

          const email =
            document
              .getElementById("email")
              .value
              .trim();

          if (!name || !email) {
            message.textContent =
              "Please enter your name and email address.";
            return;
          }

          const payload =
            JSON.stringify({
              name: name,
              email: email
            });

          const queued =
            navigator.sendBeacon(
              SUBSCRIBE_URL,
              payload
            );

          if (!queued) {
            message.textContent =
              "Sorry, something went wrong. Please try again.";
            return;
          }

          message.textContent =
            "Thank you for joining our mailing list!";

          form.reset();
        }
      );
    }
  );
})();