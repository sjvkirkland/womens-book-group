![wine](images/wine-chocolate-books.png)

# St. John Vianney Women's Book Group

Welcome to the [St. John Vianney](https://sjvkirkland.org/) Women's Book Group site!

The first Tuesday of each month at 7:00pm, the St. John Vianney Women’s Book Group gathers in **SJV's Room 11** with wine and chocolate to discuss a book that's been chosen by the group. 

No need to bring anything - just yourself. 

**You don't need to read the book to come to the book group.**

!!! custom "Note"
    At times, books can be waitlisted in local libraries for several weeks. If availability is limited, then a book choice is subject to change. Refer to this site for the most up-to-date book selections.

## Next Book

<div id="next-book-dynamic">
  <p>Loading next book...</p>
</div>

## Upcoming Books

<div id="upcoming-books-dynamic">
  <p>Loading upcoming books...</p>
</div>

## Suggest a Book

Have a book you'd love to read with the group? Share your suggestion! We're always looking for ideas for future meetings.

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


## Join Our Email List

<section id="subscribe">

    <p>
        Interested in joining our Women's Book Group?
        Enter your information below to receive meeting reminders,
        upcoming book selections, and special announcements. 
    </p>
    <p>
        If you have any questions, contact Angela Bartz at <a href="mailto:abartzmail@gmail.com">abartzmail@gmail.com</a>.
    </p>

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

    <p id="message"></p>

</section>

