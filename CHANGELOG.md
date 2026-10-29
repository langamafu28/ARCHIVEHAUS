# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
- Added a project README file for setup and usage guidance.
- Documented website structure and feature overview.
- Standardized cart functionality notes for future maintenance.

## [2026-10-29]
### Added
- Footer added to product, cart, and enquiry pages.
- About and Mission & Vision content combined onto a single About page for easier navigation.
- New navigation links pointing to `about.html#about` and `about.html#mission-vision`.
- Added shared JavaScript cart logic in `js/script.js`.

### Fixed
- Resolved broken add-to-cart flow by consolidating the cart logic into a single script.
- Fixed product quantity and cart badge updates.
- Corrected cart storage key consistency between products and cart page.
- Ensured footer sits at the bottom of pages using layout styling.

### Updated
- Improved spacing and readability of the About and Mission & Vision content.
- Removed duplicate inline cart logic that was conflicting with the main script.

## Future Improvements
- Connect the enquiry form to an email service or backend.
- Add a real checkout flow with payment integration.
- Improve mobile menu experience and dropdown behavior.
- Add product filtering and category sorting.
