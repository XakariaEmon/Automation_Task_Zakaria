# E-commerce Test Automation

This project automates various tasks on the [Automation Exercise](https://automationexercise.com/) website using Playwright. The automation covers user sign-up, product selection, cart updates, checkout, and contact form submission.

## Features
- **User Sign-up**: Fills out and submits the sign-up form.
- **Product Selection**: Selects a product from the "Men > Jeans" category.
- **Cart Update**: Modifies product quantity and adds it to the cart.
- **Checkout**: Enters dummy payment details and places an order.
- **Contact Form**: Submits the contact form with a file attachment.

## Installation

### 1. Install Node.js
Download and install [Node.js](https://nodejs.org/), then verify:
```sh
node -v
```

### 2. Install Playwright
Run the following command:
```sh
npm init playwright@latest
```

### 3. Verify Installation
Ensure Playwright is installed:
```sh
npx playwright --version
```

## Running Tests

### 1. Clone the Repository
```sh
git clone <repository-url>
cd <project-folder>
```

### 2. Run Tests
Run the sign-up test:
```sh
npx playwright test signupTest.test.js
```
Run the full test suite:
```sh
npx playwright test myTest.test.js
```
Run tests in headed mode (debugging):
```sh
npx playwright test myTest.test.js --headed
```

### 3. View Test Reports
```sh
npx playwright show-report
```

## Project Structure
```
project-folder/
│-- tests/              # Test scripts
│   ├── signupTest.test.js  # Signup test
│   ├── myTest.test.js      # Full test flow
│-- pages/              # Page Object Model (POM) files
│   ├── cartPage.js
│   ├── checkoutPage.js
│   ├── contactUsPage.js
│   ├── homePage.js
│   ├── loginPage.js
│   ├── productPage.js
│   ├── signupPage.js
│-- package.json        # Dependencies and scripts
│-- README.md           # Documentation
│-- playwright.config.js # Playwright settings
```

## Assertions in Tests
- **Login Page**: Validate login credentials and error handling.
- **Signup Page**: Verify form fields and successful account creation.
- **Product Page**: Ensure correct product details and price calculations.
- **Cart Page**: Check product details and total price.
- **Checkout Page**: Validate order placement and payment processing.
- **Contact Us Page**: Confirm form submission and file upload.

This README provides a streamlined overview of the automation project. 🚀

