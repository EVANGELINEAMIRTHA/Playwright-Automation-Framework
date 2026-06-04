# Playwright UI & API Automation Framework

## Overview

This project demonstrates UI and API automation using Playwright and JavaScript.

The framework includes:

* UI automation for the DemoQA Book Store Application
* API automation for ReqRes APIs
* Cross-browser execution (Chromium, Firefox, WebKit)
* Environment variable support using dotenv
* Playwright HTML reporting
* GitHub Actions CI integration

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Dotenv
* GitHub Actions

---

## Project Structure

```text
playwright-ui-api-automation-framework
│
├── tests
│   ├── api
│   │   └── user.spec.js
│   │
│   └── ui
│       └── bookstore.spec.js
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── bookDetails.txt
├── playwright.config.js
├── package.json
├── .env
└── README.md
```

---

## UI Automation Scenario

### DemoQA Book Store Application

1. Navigate to DemoQA
2. Open Book Store Application
3. Login with an existing user
4. Validate username after successful login
5. Navigate to Book Store
6. Search for:

```text
Learning JavaScript Design Patterns
```

7. Validate the search result
8. Capture book information:

   * Title
   * Author
   * Publisher
9. Write book details into a file
10. Logout successfully

---

## API Automation Scenario

### ReqRes API

#### Create User

* Create a new user
* Validate HTTP Status Code: 201
* Store generated user ID

#### Get User

* Fetch user details
* Validate API response

#### Update User

* Update user name
* Validate HTTP Status Code: 200
* Validate updated response

**Note:** ReqRes demo endpoints are read-only. User creation returns a generated ID, but the created user is not persisted. Therefore, GET requests for the generated user ID may return 404 by design.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/EVANGELINEAMIRTHA/playwright-ui-api-automation-framework.git
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
REQRES_API_KEY=your_api_key_here
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/ui
```

Run API tests:

```bash
npx playwright test tests/api
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

---

## Test Report

Generate and open Playwright HTML Report:

```bash
npx playwright show-report
```

---

## Cross Browser Execution

Tests are executed on:

* Chromium
* Firefox
* WebKit

---

## CI/CD

GitHub Actions workflow is configured to:

* Install dependencies
* Execute Playwright tests
* Generate reports
* Run automatically on push and pull requests

---

## Results

All UI and API test scenarios executed successfully across Chromium, Firefox, and WebKit browsers.

### Execution Report

<img width="1091" height="473" alt="image" src="https://github.com/user-attachments/assets/307409c8-b6ec-46df-9b7e-05813bff8f05" />


**Summary**

* Total Tests: 6
* Status: Passed
* Browsers: Chromium, Firefox, WebKit
* UI Automation: Passed
* API Automation: Passed

---

## Author

Evangeline Amirtha

QA Automation Engineer
