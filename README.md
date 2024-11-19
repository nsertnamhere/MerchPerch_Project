# MerchPerch_Project
CIS490B Capstone Project
Overview

MerchPerch is a platform designed to provide specialized packaging and reliable shipping solutions for delicate, high-value fishing equipment. By integrating advanced APIs, custom packaging options, and real-time tracking, MerchPerch aims to streamline the shipping process for retailers and enthusiasts alike.

Project Objectives

Ensure secure and eco-friendly packaging tailored for fragile fishing gear.
Integrate reliable shipping APIs (e.g., FedEx, UPS, USPS) for real-time tracking and seamless logistics.
Automate order management, notifications, and inventory tracking to reduce manual errors.
Build a scalable system capable of supporting increasing order volumes.
Features

Order Management System (OMS): Tracks the lifecycle of orders, from placement to delivery.
Inventory and Packaging Management: Manages stock levels and restocking alerts for packaging materials.
Shipping API Integration: Supports multiple carriers to generate labels, track shipments, and manage delays.
Customer Notification System: Sends real-time updates via email or SMS.
Secure Payment Processing: Integrates with Stripe for secure transactions.

Repository Structure 
MerchPerch_Project/
├── docs/               # Project documentation
├── src/                # Source code
│   ├── api/            # API integrations (FedEx, UPS, USPS)
│   ├── oms/            # Order Management System
│   ├── inventory/      # Inventory and Packaging Management
│   └── notifications/  # Notification System
├── tests/              # Test cases and scripts
├── README.md           # Project overview
└── .github/            # GitHub-specific configurations
    ├── ISSUE_TEMPLATE/ # Issue templates
    ├── PULL_REQUEST_TEMPLATE.md
    └── workflows/      # GitHub Actions workflows

Getting Started

Prerequisites
Development Environment:
Node.js (version 14 or higher)
Python (version 3.8 or higher)
AWS CLI (for deployment)
Accounts:
FedEx, UPS, and USPS API accounts for shipping integration.
Stripe account for payment processing.

Installation

Clone the repository: git clone https://github.com/YourUsername/MerchPerch_Project.git
cd MerchPerch_Project

Install dependencies: npm install

Setup
Configure environment variables:
Create a .env file in the root directory.
Add API keys and other configurations: FEDEX_API_KEY=your_fedex_key
UPS_API_KEY=your_ups_key
USPS_API_KEY=your_usps_key
STRIPE_API_KEY=your_stripe_key

Run the application locally: npm start

Development Workflow

Branching Strategy:
main: Production-ready code.
development: Active development.
feature-*: Individual features or components.
Issue Tracking:
Use GitHub Issues for tasks, defects, and risks.
Assign appropriate labels (bug, change-request, etc.).
Pull Requests:
Submit a pull request for all code changes.
Include a summary of changes and link to the relevant issue.
Testing:
Add unit tests for new functionality.
Run tests before submitting pull requests: npm test

Contributing

We welcome contributions from the team! Please follow these steps:

Fork the repository.
Create a new branch for your feature: git checkout -b feature-your-feature-name

Make changes and commit: git commit -m "Add: Description of your change"

Push your changes and create a pull request.

Contact

Project Lead: Nick
System Architect: Ivan
Database Designer: Lavorn
Documentation Lead: Derrick
QA/Process Manager: Nate

For any issues or questions, please open a GitHub Issue or contact the team directly.
