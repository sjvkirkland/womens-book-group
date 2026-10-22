
(function () {
  "use strict";

  const SUGGESTIONS_URL =
    "https://script.google.com/macros/s/AKfycbzNN3bLJXTwzVxjpVrlbq-E_elBsGVjg2qMSKYJCUwDHnX_ToVhoeerVtQqF4jHxesz/exec";

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const form =
        document.getElementById(
          "book-suggestion-form"
        );

      if (!form) {
        return;
      }

      const message =
        document.getElementById(
          "book-suggestion-status"
        );

      const button =
        form.querySelector(
          'button[type="submit"]'
        );

      form.addEventListener(
        "submit",
        function (event) {
          event.preventDefault();

          if (!form.reportValidity()) {
            return;
          }

          const suggestion = {
            action: "suggestBook",
            book: document
              .getElementById("suggestion-book")
              .value
              .trim(),
            author: document
              .getElementById("suggestion-author")
              .value
              .trim(),
            suggestedBy: document
              .getElementById("suggestion-name")
              .value
              .trim(),
            reason: document
              .getElementById("suggestion-reason")
              .value
              .trim()
          };

          if (!suggestion.book) {
            message.textContent =
              "Please enter a book title.";
            return;
          }

          button.disabled = true;

          const queued =
            navigator.sendBeacon(
              SUGGESTIONS_URL,
              JSON.stringify(suggestion)
            );

          if (!queued) {
            message.textContent =
              "Unable to submit your suggestion. Please try again.";

            button.disabled = false;
            return;
          }

          message.textContent =
            "Your suggestion has been sent. Thank you!";

          form.reset();
          button.disabled = false;
        }
      );
    }
  );
})();
