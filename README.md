
# PlaywrightDemo

This repository contains a sample Playwright test automation project demonstrating UI testing using Playwright framework with JavaScript.

## Table of Contents

- [Overview](#overview)  
- [Project Structure](#project-structure)  
- [Setup](#setup)  
- [Running Tests](#running-tests)  
- [Configuration](#configuration)  
- [Continuous Integration](#continuous-integration)  
- [Contributing](#contributing)  

## Overview

PlaywrightDemo is designed to showcase best practices for automated UI testing using Microsoft Playwright. It includes sample tests, configuration files, and CI workflow integration.

## Project Structure

```
ui-automation-playwright/
├── tests/                 # Test scripts written in JavaScript
├── pages/                 # Page classes representing UI pages or components
├── playwright.config.js   # Playwright configuration file
├── package.json           # Node.js project manifest
├── uploads                # Folder for uploads
└── workflows/
    └── run-automation.yml             # GitHub Actions workflow for CI
```

## Setup

### Prerequisites

- Node.js (version 16 or above recommended)  
- npm or yarn package manager  

### Installation

Clone the repository:

```bash
git clone git@github.com:kvr24611/PlaywrightDemo.git
cd PlaywrightDemo
```

Install dependencies:

```bash
npm install
# or
yarn install
```

## Running Tests

To run the tests locally:

```bash
npx playwright test
```

To run tests in headed mode (with browser UI):

```bash
npx playwright test --headed
```

To run a specific test file:

```bash
npx playwright test tests/example.spec.js
```

Generate Allure Report

`npx allure generate allure-results -o allure-report clean`

Open Allure Report

`npx allure open allure-report`


## Configuration

The `playwright.config.js` file contains configurations like browser settings, test retries, and timeout settings. Modify it according to your testing needs.

## Continuous Integration

This project includes a GitHub Actions workflow located at `.github/workflows/run-automation.yml` that runs the Playwright tests on every push and pull request.

## Contributing

Feel free to fork the repo and submit pull requests. Please follow the existing code style and add tests for new features or bug fixes.



