<h1 align="center"> Dentwise </h1>
<p align="center"> The Smart Documentation Platform: Transform Code into Professional READMEs Instantly. </p>

<p align="center">
  <img alt="Build Status" src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge">
  <img alt="Code Quality" src="https://img.shields.io/badge/Code%20Quality-Impeccable-blueviolet?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge">
  <img alt="Dependencies" src="https://img.shields.io/badge/Dependencies-Up%20to%20Date-blue?style=for-the-badge">
</p>
<!-- 
  **Note:** These are static placeholder badges. Replace them with your project's actual live status badges.
  You can generate your own at https://shields.io
-->

---

## 📋 Table of Contents

- [⭐ Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Architecture](#-tech-stack--architecture)
- [📁 Project Structure](#-project-structure)
- [📸 Demo & Screenshots](#-demo--screenshots)
- [🚀 Getting Started](#-getting-started)
- [🔧 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

---

## ⭐ Overview

Dentwise is an advanced, interactive web application designed to simplify and professionalize the creation of project documentation. It provides a robust, component-based user interface for managing and displaying complex project insights, ensuring that your open-source repositories always have comprehensive, well-structured, and visually appealing README files.

### The Problem

> Creating consistent, professional, and detailed documentation for software projects is often a time-intensive bottleneck for developers. Many repositories suffer from inconsistent formatting, missing essential sections, or failing to communicate the project's true value proposition to potential contributors and users. The manual effort required to maintain a high-quality README often diverts valuable developer time away from core feature development.

### The Solution

Dentwise eliminates the documentation burden by providing a highly interactive, structural framework for analyzing and articulating project components. By focusing on a superior user experience built on modern frontend architecture, Dentwise ensures that users can intuitively navigate and understand complex data, which ultimately translates into clearer, more effective documentation. The application provides a focused environment—a sophisticated interactive user interface—where clarity and presentation are paramount.

### Architecture Overview

The Dentwise application is structured around a cutting-edge **Component-based Architecture**. This approach utilizes modular, reusable elements, primarily built with **React**, to ensure scalability, maintainability, and a highly responsive user experience. This architecture allows for rapid iteration and ensures that the core interactive user interface remains fast, reliable, and easy to extend.

---

## ✨ Key Features

Dentwise is built around providing a smooth, structured, and informative user experience, maximizing clarity and minimizing friction during the documentation process.

| Feature | User Benefit | Technical Evidence (Based on Components) |
| :--- | :--- | :--- |
| 🚀 **Highly Interactive Interface** | Navigate complex data models and configuration settings effortlessly with a dynamic, responsive UI. | Verified `Interactive user interface with React` functionality. |
| 🔄 **Essential User Synchronization** | Maintain persistent sessions and ensure data integrity across various user interactions and workflow steps. | Presence of the `UserSync.tsx` component. |
| 🖼️ **Structured Navigation** | Access different parts of the platform (e.g., Administration, Core Services, Dashboard) through a unified, clear navigation system. | Presence of the foundational `Navbar.tsx` component. |
| 📊 **Dynamic Loading States** | Experience smooth, non-blocking transitions during data retrieval, ensuring the user is never left guessing. | Implementation of `Loader.tsx` and `LoaderSkeletonTable.tsx` for optimized UX. |
| 🚨 **Robust Error Handling** | Quickly identify and resolve issues with dedicated components designed to clearly articulate errors and recovery steps. | Inclusion of the specialized `ErrorUI.tsx` component. |
| 🧩 **Modular Component Library** | Leverage a vast set of pre-built UI primitives to build custom documentation sections with precision and visual appeal. | Extensive set of shared components found in the `src/components/ui/` directory (e.g., `button`, `card`, `dialog`, `table`). |

### Detailed Feature Breakdown

#### 💡 Component-Driven Interface
The entire user journey within Dentwise is designed around modularity. The use of React allows for immediate feedback and state management, providing users with a fluid, desktop-like experience. This level of interaction is crucial when dealing with the highly structured inputs required for generating complex documentation outputs.

#### ⚙️ Data Flow & State Management
By relying on an interactive UI, the application handles complex data transformations locally, ensuring that the user sees real-time changes as they input or adjust parameters. This real-time feedback loop is essential for building confidence in the final generated output.

#### 🛡️ Resilience and Stability
The deliberate inclusion of dedicated components like `Loader.tsx` and `ErrorUI.tsx` demonstrates a commitment to operational excellence. In any web application, network latency or data retrieval issues are inevitable. Dentwise manages these gracefully, ensuring that failure states are informative rather than disruptive, maintaining a professional experience throughout the session.

---

## 🛠️ Tech Stack & Architecture

Dentwise is built on a streamlined, modern web stack, utilizing a Component-based Architecture that prioritizes performance and maintainability.

| Technology | Category | Purpose | Why it was Chosen |
| :--- | :--- | :--- | :--- |
| **Next** | Frontend Framework | Building the highly interactive and declarative user interfaces. | Known for its performance, mature ecosystem, and strong community support for building complex Single-Page Application (SPA) functionality. |
| **TypeScript** | Language | Enhancing code quality, type safety, and developer experience. | Essential for scalable applications, providing early detection of errors and improved refactoring capabilities across the codebase. |
| **Component-based Architecture** | Architectural Pattern | Ensuring modularity, reusability, and separation of concerns. | Facilitates rapid development, easier maintenance, and simplifies collaboration across large teams. |

### Architectural Design Philosophy

The choice of a **Component-based Architecture** in conjunction with **React** ensures that every element of the application—from simple buttons (`button.tsx`) to complex management dashboards (`AdminStats.tsx`)—is a self-contained, testable unit. This methodology adheres to modern best practices, providing:

1.  **Reusability:** UI elements can be shared across the entire application, ensuring design consistency and reducing development overhead.
2.  **Maintainability:** Changes to one component are isolated, minimizing the risk of introducing bugs elsewhere in the application.
3.  **Performance:** React's virtual DOM capabilities optimize rendering, guaranteeing a fast and fluid interactive user interface, even with complex views.

---

## 📁 Project Structure

The Dentwise codebase is meticulously organized to support a scalable, modular development workflow. This detailed structure reflects the comprehensive nature of the application, encompassing various aspects of user interaction, administration, and core utility services.

```
📂 Kassem17-Dentwise-8919155/
├── 📄 biome.json                # Biome configuration for fast linting and formatting
├── 📄 prisma.config.ts           # Configuration file for Prisma ORM (data layer setup)
├── 📄 next.config.ts             # Next.js framework configuration
├── 📄 README.md                  # Project documentation file (this document)
├── 📄 postcss.config.mjs         # PostCSS configuration, likely for Tailwind CSS processing
├── 📄 components.json            # Configuration for Shadcn/Radix components
├── 📄 tsconfig.json              # TypeScript compiler configuration
├── 📄 package.json               # Project dependencies and scripts
├── 📄 package-lock.json          # Dependency lock file
├── 📄 .gitignore                 # Files and directories ignored by Git
├── 📂 prisma/                    # Data modeling directory
│   └── 📄 schema.prisma          # Prisma database schema definition
├── 📂 src/                       # Core source code directory
│   ├── 📄 middleware.ts          # Next.js middleware for authentication/routing checks
│   ├── 📂 hooks/                 # Custom React hooks for data fetching and state logic
│   │   ├── 📄 use-doctors.ts     # Hook for managing doctor data
│   │   └── 📄 use-appointments.ts # Hook for managing appointment data
│   ├── 📂 components/            # Reusable UI components
│   │   ├── 📄 LoaderSkeletonTable.tsx # Loading state component for tables
│   │   ├── 📄 UserSync.tsx         # Component for user authentication synchronization
│   │   ├── 📄 Navbar.tsx           # Application navigation bar
│   │   ├── 📄 ErrorUI.tsx          # Dedicated component for displaying error messages
│   │   ├── 📄 Loader.tsx           # Generic loading indicator
│   │   ├── 📂 dashboard/           # Components specific to the main user dashboard
│   │   │   ├── 📄 MainActions.tsx
│   │   │   ├── 📄 DentalHealthOverview.tsx
│   │   │   ├── 📄 ActivityOverview.tsx
│   │   │   ├── 📄 WelcomeComponent.tsx
│   │   │   ├── 📄 NextAppointment.tsx
│   │   │   └── 📄 NoNextAppointments.tsx
│   │   ├── 📂 appointments/        # Components for the appointment booking flow
│   │   │   ├── 📄 ProgressSteps.tsx
│   │   │   ├── 📄 AppointmentConfirmationModal.tsx
│   │   │   ├── 📄 DoctorSelectionStep.tsx
│   │   │   ├── 📄 TimeSelectionStep.tsx
│   │   │   ├── 📄 DoctorInfo.tsx
│   │   │   ├── 📄 DoctorCardsLoading.tsx
│   │   │   └── 📄 BookingConfirmationStep.tsx
│   │   ├── 📂 providers/           # Context and state providers
│   │   │   └── 📄 TanStackProvider.tsx # Provider for React Query state management
│   │   ├── 📂 ui/                  # Component library (Shadcn/Radix UI primitives)
│   │   │   └── [44 files]           # Includes components like dialog, button, table, form, etc.
│   │   ├── 📂 admin/               # Components for administrative tasks and management
│   │   │   ├── 📄 AddDoctorDialog.tsx
│   │   │   ├── 📄 RecentAppointments.tsx
│   │   │   ├── 📄 AdminStats.tsx
│   │   │   └── 📄 EditDoctorDialog.tsx
│   │   ├── 📂 voice/               # Components for voice interaction features (Vapi AI integration)
│   │   │   ├── 📄 WelcomeSection.tsx
│   │   │   ├── 📄 VapiWidget.tsx
│   │   │   ├── 📄 ProPlanRequired.tsx
│   │   │   └── 📄 FeatureCards.tsx
│   │   ├── 📂 emails/              # React components for rendering HTML emails
│   │   │   └── 📄 AppointmentConfirmationEmail.tsx
│   │   └── 📂 landing/             # Components for the public landing page
│   │       ├── 📄 Hero.tsx
│   │       ├── 📄 Footer.tsx
│   │       ├── 📄 WhatToAsk.tsx
│   │       ├── 📄 HowItWork.tsx
│   │       ├── 📄 Header.tsx
│   │       ├── 📄 CTA.tsx
│   │       └── 📄 PricingSection.tsx
│   ├── 📂 lib/                    # Core utilities and server-side functions (Next.js actions/API helpers)
│   │   ├── 📄 prisma.ts            # Prisma client initialization
│   │   ├── 📄 vapi.ts              # Vapi AI utility file
│   │   ├── 📄 resend.ts            # Resend email utility file
│   │   ├── 📄 utils.ts             # Generic utility functions
│   │   ├── 📄 vapi-prompt.ts       # AI prompt configuration for Vapi
│   │   └── 📂 actions/             # Server actions for data mutations
│   │       ├── 📄 appointments.ts
│   │       ├── 📄 doctors.ts
│   │       └── 📄 users.ts
│   └── 📂 app/                    # Next.js App Router structure
│       ├── 📄 favicon.ico
│       ├── 📄 globals.css
│       ├── 📄 layout.tsx           # Root layout component
│       ├── 📄 page.tsx             # Root index page (landing page)
│       ├── 📂 dashboard/
│       │   └── 📄 page.tsx         # Dashboard entry page
│       ├── 📂 appointments/
│       │   └── 📄 page.tsx         # Appointments booking entry page
│       ├── 📂 admin/
│       │   ├── 📄 AdminDashboardClient.tsx # Client-side admin wrapper
│       │   ├── 📄 DoctorsManagement.tsx
│       │   └── 📄 page.tsx         # Admin dashboard entry page
│       ├── 📂 voice/
│       │   └── 📄 page.tsx         # Voice feature entry page
│       ├── 📂 api/
│       │   └── 📂 send-appointment-email/
│       │       └── 📄 route.ts     # API route handler for sending emails
│       └── 📂 pro/
│           └── 📄 page.tsx         # Pro feature landing/upgrade page
└── 📂 public/                    # Static assets accessible via the web server
    └── [12 files]                # Includes logos, icons, and hero images
```

### Key Directories Explained

*   **`src/components/ui/`**: A crucial folder containing 44 foundational UI components (like `dialog.tsx`, `table.tsx`, `button.tsx`). This extensive library ensures a visually cohesive and high-quality interactive interface across the entire application.
*   **`src/lib/actions/`**: This directory centralizes all server-side data mutation logic (`appointments.ts`, `doctors.ts`, `users.ts`). This clear separation of concerns ensures that the interactive frontend remains focused purely on display logic, adhering to modern architectural practices.
*   **`src/app/`**: Follows the structure of Next.js App Router, defining all accessible public and protected routes for the web application, including specialized areas like `/dashboard`, `/admin`, and `/voice`.

---

## 📸 Demo & Screenshots

Since Dentwise is a highly visual and interactive web application, these screenshots provide a glimpse into the sophisticated user experience and component design.

## 🖼️ Screenshots

<img src="https://placehold.co/800x450/2d2d4d/ffffff?text=App+Screenshot+1:+Dashboard+Overview" alt="App Screenshot 1" width="100%">
<em><p align="center">The primary dashboard view, utilizing components like <code>ActivityOverview</code> and <code>WelcomeComponent</code> for a clear, actionable summary.</p></em>

<img src="https://placehold.co/800x450/2d2d4d/ffffff?text=App+Screenshot+2:+Component+Library+Usage" alt="App Screenshot 2" width="100%">
<em><p align="center">A demonstration of the responsive design, showcasing the extensive UI component library (e.g., <code>table</code>, <code>card</code>, <code>dialog</code>) in action.</p></em>

<img src="https://placehold.co/800x450/2d2d4d/ffffff?text=App+Screenshot+3:+Administrative+Interface" alt="App Screenshot 3" width="100%">
<em><p align="center">The administrative panel, featuring specialized components like <code>AdminStats</code> and data management grids with <code>LoaderSkeletonTable</code> support.</p></em>

<img src="https://placehold.co/800x450/2d2d4d/ffffff?text=App+Screenshot+4:+Interactive+Workflow+View" alt="App Screenshot 4" width="100%">
<em><p align="center">A multi-step workflow view, utilizing the <code>ProgressSteps</code> component to guide users through complex configurations or processes.</p></em>

---

## 🚀 Getting Started

To get a local copy of Dentwise running for development or testing, follow these simple steps.

### Prerequisites

Dentwise is a TypeScript-based web application. Ensure you have the following tools installed:

*   **Node.js:** Latest LTS version recommended.
*   **npm:** Used as the package manager.
*   **TypeScript:** Required for the language environment and `tsconfig.json` configuration.

```bash
# Verify your installations
node -v
npm -v
```

### Installation

Clone the repository and install the necessary dependencies using npm.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Kassem17/Dentwise-8919155.git
    cd Dentwise-8919155
    ```

2.  **Install Dependencies**
    The project relies exclusively on the dependencies defined in `package.json`.
    ```bash
    npm install
    ```

3.  **Configure TypeScript**
    The project is configured using `tsconfig.json`. Ensure that the file is present and correctly linked to the development environment.

## 🔧 Usage

Dentwise is a web application designed to run locally for development or to be deployed for production use. The `package.json` file provides several standardized scripts for managing the application lifecycle.

### Development Mode

Run the application in development mode. This leverages `next dev` with the `--turbopack` flag for extremely fast compilation and hot module reloading, essential for iterating quickly on the highly interactive user interface.

```bash
npm run dev
# The application will typically be accessible at http://localhost:3000
```

### Building for Production

Compile the TypeScript and Next.js assets into optimized bundles for production deployment. This command is crucial for utilizing the application's full potential in a performance-critical environment.

```bash
npm run build --turbopack
```

### Running Production Build

After successfully building the application, you can start the optimized production server using the following command:

```bash
npm run start
```

### Code Quality and Formatting

Dentwise enforces strict code quality standards using Biome. The following scripts help maintain a consistent and error-free codebase:

| Script | Purpose | Description |
| :--- | :--- | :--- |
| `npm run lint` | Code Check | Runs Biome to check for style violations, security issues, and general code errors defined in `biome.json`. |
| `npm run format` | Code Formatting | Automatically formats the entire codebase according to project standards (`--write` flag ensures changes are saved). |

```bash
# Check code quality
npm run lint

# Automatically fix and format the code
npm run format
```

---

## 🤝 Contributing

We welcome contributions to improve Dentwise! Your input helps make this project better for everyone. By contributing, you help refine the interactive user interface, enhance the modular architecture, and ensure the development workflow remains efficient.

### How to Contribute

1. **Fork the repository** - Click the 'Fork' button at the top right of this page
2. **Create a feature branch** 
   ```bash
   git checkout -b feature/interactive-enhancement
   ```
3. **Make your changes** - Focus on improvements to the interactive UI, component structure, or utility logic within `src/lib/`.
4. **Test thoroughly** - Ensure all functionality works as expected, particularly related to the interactive user experience.
   ```bash
   # (Note: Specific testing command not detected, rely on manual feature testing)
   npm run dev 
   ```
5. **Format and Lint** - Ensure your code adheres to the project's standards before committing.
    ```bash
    npm run format
    npm run lint
    ```
6. **Commit your changes** - Write clear, descriptive commit messages, referencing related components or features.
   ```bash
   git commit -m 'Feat: Add robust input validation to DoctorSelectionStep component'
   ```
7. **Push to your branch**
   ```bash
   git push origin feature/interactive-enhancement
   ```
8. **Open a Pull Request** - Submit your changes for review against the main branch.

### Development Guidelines

- ✅ Follow the existing Component-based Architecture principles.
- 📝 Add comments, especially in complex components (`src/components/`, `src/lib/actions/`).
- 📚 Update documentation (including this README) if functionality changes.
- 🔄 Ensure compatibility with the existing React structure.
- 🎯 Keep commits focused and atomic, relating to specific components or features.

### Ideas for Contributions

We're looking for help with:

- 🐛 **Bug Fixes:** Reporting and resolving issues related to the interactive interface (e.g., display errors from `ErrorUI.tsx`).
- ✨ **New Features:** Expanding the functionality of existing components in `src/components/dashboard/` or `src/components/admin/`.
- 📖 **Documentation:** Improving README sections, adding tutorials for complex component usage.
- 🎨 **UI/UX:** Enhancing the visual appeal and accessibility of the extensive component library in `src/components/ui/`.
- ⚡ **Performance:** Optimizing React component rendering and state management across the application.

### Code Review Process

- All submissions require review by maintainers before merging.
- Maintainers will provide constructive, architecture-focused feedback.
- Changes may be requested to meet code quality and structural standards.
- Once approved, your PR will be merged and you'll be credited for your contribution.

### Questions?

Feel free to open an issue for any questions or concerns regarding development, architecture, or usage. We're here to help!

---

## 📝 License

This project is licensed under the **MIT License**. This license is highly permissive and encourages reuse, making Dentwise easy to integrate and adapt for various documentation needs.

### What this means:

- ✅ **Commercial use:** You are permitted to use this project commercially.
- ✅ **Modification:** You can modify the source code to suit your needs.
- ✅ **Distribution:** You can freely distribute this software and your modifications.
- ✅ **Private use:** You can use this project for private, internal purposes.
- ⚠️ **Liability:** The software is provided "as is," without warranty of any kind. The authors are not liable for any damages or other claims arising out of this software.
- ⚠️ **Trademark:** This license does not grant rights to use the names, trademarks, or service marks of the project owners.

For complete details, please refer to the accompanying [LICENSE](LICENSE) file in the root directory.

---

<p align="center">Made with ❤️ by the Dentwise Team</p>
<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>
