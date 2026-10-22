---
hide:
  - navigation
  - toc
---


<div class="welcome-hero">

  <div class="welcome-hero-content">

    <h1>Welcome to our book group!</h1>

    <p>
      The first Tuesday of each month at 7:00pm, the
      <a href="https://sjvkirkland.org/">St. John Vianney</a>
      Women’s Book Group gathers in SJV's Room 11 with wine
      and chocolate to discuss a book that's been chosen by our group.
    </p>

    <p>
      Everyone is welcome! No need to bring anything,
      and you don't even need to read the book to join us.
    </p>

    <p>
      Questions? Reach out to Angela Bartz at
      <a href="mailto:abartzmail@gmail.com">abartzmail@gmail.com</a>.
    </p>

    <p class="book-availability-note">
      <strong>Note:</strong>
      Book choices may change if library waitlists are unusually
      long. Check this site for the latest selections.
    </p>

  </div>



  <div class="welcome-hero-image">
    <img
      src="images/wine-chocolate-books.png"
      alt="Wine, chocolate, and books"
    >
  </div>

</div>


## What We're Reading

<div class="reading-section">

  <h3 class="reading-subheading">Next Book</h3>

  <section class="featured-book-card next-book-card">

    <div id="next-book-dynamic">
      <p>Loading next book...</p>
    </div>
  </section>

  <h3 class="reading-subheading">Upcoming Books</h3>

  <div id="upcoming-books-dynamic" class="upcoming-books-grid">
    <p>Loading upcoming books...</p>
  </div>

</div>

<div class="get-involved-section">

  <h2>Get Involved</h2>

  <div class="get-involved">

    <details class="involvement-card">
      <summary>
        <span class="involvement-title">Join Our Email List</span>
        <span class="involvement-description">
          Receive meeting reminders, upcoming book selections,
          and special announcements.
        </span>
        <span class="involvement-toggle" aria-hidden="true">
          <span class="involvement-toggle-text"></span>
        </span>
      </summary>

      <div class="involvement-content">

        <section id="subscribe">

          <form id="subscribeForm">

            <!-- Spam protection: hidden honeypot field -->
            <div class="form-honeypot" aria-hidden="true">
                <label for="subscribe-website">Website</label>
                <input
                    type="text"
                    id="subscribe-website"
                    name="website"
                    tabindex="-1"
                    autocomplete="off">
            </div>

            <input
                type="text"
                id="name"
                placeholder="Your name"
                required>

            <input
                type="email"
                id="email"
                placeholder="Email address"
                required>

            <button type="submit">
                Subscribe
            </button>

          </form>

          <p id="message" aria-live="polite"></p>

        </section>

      </div>
    </details>

    <details class="involvement-card">
      <summary>
        <span class="involvement-title">Suggest a Book</span>
        <span class="involvement-description">
          Have a book you'd love to read with the group?
          Share your suggestion here!
        </span>
        <span class="involvement-toggle" aria-hidden="true">
          <span class="involvement-toggle-text"></span>
        </span>
      </summary>

      <div class="involvement-content">

        <form id="book-suggestion-form" class="book-suggestion-form">

          <!-- Spam trap: leave this field empty -->
          <div
            class="form-honeypot"
            aria-hidden="true"
          >
            <label for="suggestion-website">
              Website
            </label>
            <input
              type="text"
              id="suggestion-website"
              name="website"
              tabindex="-1"
              autocomplete="off"
            >
          </div>

        <!--  <label for="suggestion-book">Book title *</label> -->
          <input
            type="text"
            id="suggestion-book"
            name="book"
            required
            maxlength="200"
            placeholder="Book title (required)"
          >

        <!--  <label for="suggestion-author">Author</label> -->
          <input
            type="text"
            id="suggestion-author"
            name="author"
            maxlength="200"
            placeholder="Author (optional)"
          >

        <!--  <label for="suggestion-name">Your name (optional)</label> -->
          <input
            type="text"
            id="suggestion-name"
            name="suggestedBy"
            maxlength="100"
            placeholder="Your name (optional)"
          >

        <!--  <label for="suggestion-reason">Why do you recommend it? (optional)</label> -->
          <textarea
            id="suggestion-reason"
            name="reason"
            rows="3"
            maxlength="1000"
            placeholder="What makes this a good book group pick? (optional)"
          ></textarea>

          <button type="submit">
            Submit Suggestion
          </button>

          <p id="book-suggestion-status" aria-live="polite"></p>

        </form>
      </div>
    </details>
  </div>
</div>



## Location

<div class="church-location">
  <div class="church-address">
    <p>
      <strong>St. John Vianney Catholic Church</strong><br>
      12600 84th Avenue NE<br>
      Room 11 <br>
      Kirkland, WA 98034
    </p>
  </div>

  <div class="book-group-map">
    <iframe
      src="https://www.google.com/maps?q=St.+John+Vianney+Church,+12600+84th+Avenue+NE,+Kirkland,+WA+98034&output=embed"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Map showing St. John Vianney Catholic Church in Kirkland">
    </iframe>
  </div>
</div>


