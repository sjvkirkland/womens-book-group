(function () {
  "use strict";

  /*
   * Replace this with the /exec URL from your
   * Apps Script web-app deployment.
   */
  const BOOKS_API_URL =
    "https://script.google.com/macros/s/AKfycbzNN3bLJXTwzVxjpVrlbq-E_elBsGVjg2qMSKYJCUwDHnX_ToVhoeerVtQqF4jHxesz/exec";

  /**
   * Called by the Apps Script JSONP response.
   */
  window.renderBookClubBooks = function (data) {
    if (!data || data.error) {
      showBooksError();
      return;
    }

    renderNextBook(data.next);
    renderUpcomingBooks(data.upcoming || []);
    renderPreviousBooks(data.previous || []);
  };


  /**
   * Renders the next scheduled book.
   */
  function renderNextBook(book) {
    const container =
      document.getElementById("next-book-dynamic");

    if (!container) {
      return;
    }

    if (!book) {
      container.innerHTML =
        "<p>No upcoming book has been selected yet.</p>";
      return;
    }

    container.innerHTML =
      buildDetailedBookHtml(book);
  }


  /**
   * Renders all future books after the next book.
   */
  function renderUpcomingBooks(books) {
    const container =
      document.getElementById(
        "upcoming-books-dynamic"
      );

    if (!container) {
      return;
    }

    if (books.length === 0) {
      container.innerHTML =
        "<p>Additional upcoming books will be announced soon.</p>";
      return;
    }

    container.innerHTML =
      books
        .map(buildDetailedBookHtml)
        .join("");
  }


  /**
   * Renders previously read books.
   */
  function renderPreviousBooks(books) {
    const container =
      document.getElementById(
        "previous-books-dynamic"
      );

    if (!container) {
      return;
    }

    if (books.length === 0) {
      container.innerHTML =
        "<p>No previous books are available.</p>";
      return;
    }

    const items = books
      .map(book => {
        const title =
          escapeHtml(book.book);

        const author =
          escapeHtml(book.author);

        return `
          <li>
            <strong>${title}</strong>
            ${author ? ` by ${author}` : ""}
          </li>
        `;
      })
      .join("");

    container.innerHTML = `<ul>${items}</ul>`;
  }


  /**
   * Builds the detailed display used for Next Book
   * and Upcoming Books.
   */
  function buildDetailedBookHtml(book) {
    const date =
      formatBookDate(book.date);

    const title =
      escapeHtml(book.book);

    const author =
      escapeHtml(book.author);

    const synopsis =
      escapeHtml(book.synopsis);

    const authorText =
      author ? ` by ${author}` : "";

    const synopsisHtml =
      synopsis
        ? `<p>${synopsis}</p>`
        : "";

    return `
      <div class="book-entry">
        <p>
          <strong>
            ${date}: ${title}${authorText}
          </strong>
        </p>

        ${synopsisHtml}
      </div>
    `;
  }


  /**
   * Converts 2026-10-06 into October 6, 2026.
   *
   * Parsing the pieces manually avoids browser
   * timezone conversion problems.
   */
  function formatBookDate(dateString) {
    if (!dateString) {
      return "";
    }

    const parts = dateString.split("-");

    if (parts.length !== 3) {
      return dateString;
    }

    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);

    const date = new Date(
      year,
      month - 1,
      day
    );

    return new Intl.DateTimeFormat(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    ).format(date);
  }


  /**
   * Escapes text before inserting it into HTML.
   */
  function escapeHtml(value) {
    if (
      value === null ||
      value === undefined
    ) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }


  function showBooksError() {
    [
      "next-book-dynamic",
      "upcoming-books-dynamic",
      "previous-books-dynamic"
    ].forEach(id => {
      const element =
        document.getElementById(id);

      if (element) {
        element.innerHTML =
          "<p>Book information is temporarily unavailable.</p>";
      }
    });
  }


  /**
   * Loads the Apps Script endpoint as JSONP.
   */
  function loadBookData() {
    if (
      !BOOKS_API_URL ||
      BOOKS_API_URL.includes(
        "YOUR_APPS_SCRIPT"
      )
    ) {
      console.error(
        "The book API URL has not been configured."
      );

      showBooksError();
      return;
    }

    const script =
      document.createElement("script");

    script.src =
      BOOKS_API_URL +
      "?callback=renderBookClubBooks";

    script.async = true;

    script.onerror = function () {
      console.error(
        "Unable to load book-club data."
      );

      showBooksError();
    };

    document.head.appendChild(script);
  }


  loadBookData();
})();
