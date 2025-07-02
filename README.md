# Expense Tracker

A modern, user-friendly web application to track your expenses, analyze spending habits, and manage your finances efficiently.

## 🚀 Features

- Add, edit, and delete transactions
- Categorize expenses and income
- Visual analytics: Pie charts, radar charts, and trend lines
- Pagination and filters for transaction history
- Responsive design for desktop and mobile
- Light/Dark theme support

## 🛠️ Technologies Used

- **Frontend Framework:** React (with TypeScript)
- **Build Tool:** Vite
- **Package Manager:** Bun
- **State Management:** Redux Toolkit
- **Charting:** [Recharts](https://recharts.org/)
- **Styling:** Material UI
- **Data fetching** Tanstack/react-query

## 📁 Project Structure

```
expense-tracker/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI and page components
│   ├── constants/         # Constant values and queries
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout components
│   ├── pages/             # Page-level components
│   ├── routes/            # App routing
│   ├── services/          # API and storage services
│   ├── store/             # Redux store and slices
│   ├── theme/             # Theme configuration
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── index.html             # App entry point
├── package.json           # Project metadata and scripts
├── bun.lock               # Bun lockfile
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🖥️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed globally (`curl -fsSL https://bun.sh/install | bash`)
- Node.js

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/parthnariya/expense-tracker-frontend.git
   cd expense-tracker
   ```

2. **Install dependencies:**

   ```sh
   bun install
   ```

3. **Start the development server:**
   ```sh
   bun run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Build for Production

```sh
bun run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```sh
bun run preview
```

## 🧑‍💻 Usage

- Navigate to the app in your browser.
- Add new transactions using the form.
- Filter, search, and paginate through your transaction history.
- View analytics in the dashboard section.
- Switch between light and dark themes as desired.
