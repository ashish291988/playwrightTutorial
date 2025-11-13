# Selfcare Application - Comprehensive Operations Test Plan

## Executive Summary

The Selfcare application provides users with a portal to manage their internet and TV subscriptions, view invoices, check order status, activate customer benefits, access help resources, and perform account management tasks. The dashboard offers navigation to all major features, with clear links and buttons for each operation. This test plan covers all major user operations, including happy paths, edge cases, and error handling, ensuring thorough coverage and reliability.

---

## Test Scenarios

### 1. Login Operations
#### 1.1 Successful Login
- Steps:
  1. Navigate to `https://selfcare-dev.glasoperator.nl/`
  2. Enter valid username and password
  3. Click the login button
- Expected Results: User is redirected to dashboard; "Bekijk abonnement" link is visible

#### 1.2 Invalid Credentials
- Steps:
  1. Enter invalid username and/or password
  2. Click login
- Expected Results: Error message is displayed; user remains on login page

#### 1.3 Required Field Validation
- Steps:
  1. Leave username empty, fill password, click login
  2. Fill username, leave password empty, click login
- Expected Results: Validation message for missing fields; login prevented

---

### 2. Dashboard Navigation
#### 2.1 View Subscription Details
- Steps:
  1. Log in successfully
  2. Click "Bekijk abonnement"
- Expected Results: Subscription details page loads; information is displayed

#### 2.2 View Order Status
- Steps:
  1. Log in successfully
  2. Click "Status van je bestelling"
- Expected Results: Order status page loads; current status is shown

#### 2.3 View Invoices
- Steps:
  1. Log in successfully
  2. Click "Facturen" in navigation
- Expected Results: Invoice overview page loads; invoices are listed

#### 2.4 View Account Overview
- Steps:
  1. Log in successfully
  2. Click "Overzicht" in navigation
- Expected Results: Account overview page loads; summary is shown

---

### 3. Subscription Management
#### 3.1 Change Subscription
- Steps:
  1. Log in successfully
  2. Navigate to subscription details
  3. Click option to change subscription (if available)
  4. Follow prompts to modify subscription
- Expected Results: Subscription change is processed; confirmation shown

#### 3.2 View Linked Subscriptions
- Steps:
  1. Log in successfully
  2. Click "Meerdere gelinkte abonnementen"
- Expected Results: Linked subscriptions are listed

---

### 4. Customer Benefits
#### 4.1 Activate Klantvoordeel
- Steps:
  1. Log in successfully
  2. Click "Activeer nu" for Klantvoordeel
- Expected Results: Benefit activation page loads; user can proceed

---

### 5. Entertainment Add-ons
#### 5.1 Order Viaplay Basis
- Steps:
  1. Log in successfully
  2. Click "Bestel Viaplay Basis"
- Expected Results: Order page loads; user can complete order

---

### 6. Help and Service
#### 6.1 Access Wifi Improvement Tips
- Steps:
  1. Log in successfully
  2. Click "Lees alle tips" under wifi improvement
- Expected Results: Help page opens; tips are displayed

#### 6.2 Access Service/Contact
- Steps:
  1. Log in successfully
  2. Click "Naar Service" in header
- Expected Results: Service/help page opens

---

### 7. Address and Personal Data
#### 7.1 View/Change Address
- Steps:
  1. Log in successfully
  2. Click "Bekijk aanbod" under Verhuizen
- Expected Results: Address management page loads; user can view/change address

---

### 8. Logout and Session Management
#### 8.1 Logout Operation
- Steps:
  1. Log in successfully
  2. Locate and click logout button/link
- Expected Results: User is redirected to login page; session terminated

#### 8.2 Session Persistence
- Steps:
  1. Log in successfully
  2. Refresh dashboard
  3. Navigate between dashboard, subscription, invoices, and order status
- Expected Results: Session persists; no unexpected logouts

---

### 9. External Navigation
#### 9.1 Access External Links
- Steps:
  1. Log in successfully
  2. Click external links (e.g., Odido, Facebook, LinkedIn, App Store, Play Store)
- Expected Results: External pages open in new tab/window

---

## Notes
- All scenarios assume a fresh browser state before execution.
- Test data (valid credentials) should be managed securely.
- Error messages and UI feedback should be clear and actionable.
- All navigation links and buttons should be tested for accessibility and visibility.
- Edge cases (e.g., network errors, expired sessions) should be covered in negative tests.

---

This comprehensive plan covers all major operations and user journeys in the Selfcare application.