# SJV Kirkland Women's Book Group

Source repository for the **SJV Kirkland Women's Book Group** website.

**Live site:** https://sjvkirkland.github.io/womens-book-group/

The site provides information about upcoming book group meetings, current and previous book selections, meeting location, and email subscription.

## Features

* Displays the next book group meeting
* Shows upcoming books and book descriptions
* Displays book cover images stored in Google Drive
* Automatically converts URLs in book descriptions into clickable links
* Maintains a list of recent previous books
* Includes an interactive map of the meeting location
* Allows members to subscribe to book group emails
* Supports light and dark display modes
* Uses Google Sheets as the source of truth for book and meeting data

## How the Site Works

The website is built with **MkDocs** using the **Material for MkDocs** theme and is hosted with **GitHub Pages**.

The repository contains the public website files, while book group data is maintained separately.

Custom JavaScript retrieves current meeting and book information from a Google Apps Script web application and dynamically displays it on the site.

The Google Apps Script backend also manages the book group's email subscription and reminder system.

## Repository Structure

```text
womens-book-group/
├── docs/
│   ├── images/
│   ├── js/
│   │   ├── books.js
│   │   └── subscribe.js
│   ├── stylesheets/
│   │   └── extra.css
│   ├── index.md
│   └── previous-books.md
├── .gitignore
├── README.md
└── mkdocs.yml
```

### Key Files

**`docs/index.md`**
Main book group page, including meeting information, subscription content, and the meeting location.

**`docs/previous-books.md`**
Displays recent previous book selections.

**`docs/js/books.js`**
Retrieves meeting and book information from the Google Apps Script backend and renders it on the website.

It also handles:

* Upcoming and previous book display
* Book cover images
* Browser-side caching
* Clickable URLs within book descriptions

**`docs/js/subscribe.js`**
Handles the website's email subscription form and communicates with the Google Apps Script subscriber service.

**`docs/stylesheets/extra.css`**
Contains custom site styling, including book layouts, cover images, subscription elements, and responsive display behavior.

**`mkdocs.yml`**
Configures the MkDocs Material theme, navigation, custom JavaScript and CSS, site metadata, and light/dark mode.

## Book and Meeting Data

Book and meeting information is maintained in a spreadsheet outside of this repository rather than directly in the website repository.

Meeting data includes information such as:

* Meeting date
* Book title
* Author
* Synopsis
* Cover image
* Meeting location

Google Apps Script exposes the appropriate public data to the website.

Because the website retrieves this information dynamically, adding or updating a book generally does **not** require modifying this repository or redeploying the website.

## Adding a New Book

To add a book to the site:

1. Add a new row to the **Meetings** sheet.
2. Enter the meeting date, book title, author, synopsis, and meeting information.
3. Upload the book cover to the book group's Google Drive `images` folder.
4. Set the individual image to **Anyone with the link → Viewer**.
5. Copy the Google Drive file ID.
6. Paste only the file ID into the **Cover Image** column.

The Google Apps Script cache is cleared when the Meetings sheet is edited, allowing the website to retrieve the updated data.

If no cover image is provided, the website automatically adjusts the layout without displaying an empty image placeholder.

## Links in Book Descriptions

URLs entered in the **Synopsis** field are automatically converted to clickable links by `books.js`.

For example:

```text
You can view the artwork described in the book at https://monaseyesgallery.com/
```

will display the URL as a live link on the website.

## Email System

The book group also uses Google Apps Script to manage subscribers and automated emails.

The system supports:

* Welcome emails for new subscribers
* One-week meeting reminders
* "Up Next" emails after a meeting
* Book cover images embedded in emails
* Unsubscribe links
* Subscriber status management

A time-driven Google Apps Script trigger periodically checks whether a scheduled book group email needs to be sent.

## Technology

* MkDocs
* Material for MkDocs
* GitHub Pages
* Markdown
* HTML
* CSS
* JavaScript
* Google Apps Script
* Spreadsheets

## Local Development

To preview the site locally, install MkDocs and Material for MkDocs, then run:

```bash
mkdocs serve
```

Open the local URL displayed by MkDocs in your browser.

To publish the site to GitHub Pages:

```bash
mkdocs gh-deploy
```

## Book Group

The SJV Kirkland Women's Book Group meets on the **first Tuesday of each month at 7:00 PM** at St. John Vianney Church in Kirkland, Washington.

For current meeting information and upcoming books, visit:

https://sjvkirkland.github.io/womens-book-group/
