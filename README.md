# Archive Haus

Archive Haus is a boutique-style vintage and designer resale website built as a static e-commerce landing page. The site showcases curated fashion items, offers an online shopping flow, and allows customers to add products to a cart using browser local storage.

## Website Pages

- Home page
- About page
- Mission & Vision page
- Products page
- Cart page
- Contact page
- Enquiry page

## Features

- Responsive static website structure using HTML and CSS
- Product gallery with pricing and size selection
- Add-to-cart functionality using `localStorage`
- Cart total and quantity tracking
- Contact and enquiry forms
- Footer on all pages
- Brand styling aligned with the Archive Haus aesthetic

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Local browser storage (`localStorage`)

## Project Structure

- `index.html` – homepage
- `about.html` – company background
- `mission-vision.html` – brand mission and vision
- `products.html` – product catalogue
- `cart.html` – cart and checkout summary
- `contact.html` – contact details and map
- `enquiry.html` – enquiry form
- `style.css` – global styling
- `js/script.js` – cart logic and shared front-end behavior
- `AH IMAGES/` – website images and product assets

## How to Run

Because this is a static website, you can run it by opening the `index.html` file in a browser.

Option 1:
- Double-click `index.html` in the project folder

Option 2:
- Start a local static server in the project folder, then visit the local URL in the browser

Example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Cart Functionality

The cart stores selected products in the browser using `localStorage`, so items remain available while the browser session is active. Product quantities are combined by name and size, and the cart count updates automatically.

## Notes

- This project is front-end only and does not include a backend database or payment system.
- The enquiry form is currently a front-end example and would need an email or form service integration for real submission.
- Images and product details are stored locally in the project folder.

## License

This project is for educational and portfolio use unless otherwise specified by the owner.
