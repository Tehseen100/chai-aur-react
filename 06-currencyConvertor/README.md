# Currency Converter (React)

A simple currency converter built with React to practice **custom hooks, derived state, and component reusability**.

This project focuses more on **understanding React concepts** than building a feature-heavy application.

---

## 🚀 Features

- Convert currency values using live exchange rates
- Dynamic currency dropdowns populated from API data
- Swap base and target currencies
- Clean and reusable UI components
- Custom hook for data fetching

---

## 🧠 Key Concepts Practiced

### 1. Custom Hooks

- Created a `useCurrencyRates` hook to handle:
  - API fetching
  - loading state
  - error handling
- Kept data-fetching logic separate from UI logic

### 2. Derived State

- Avoided storing unnecessary state
- Derived values like:
  - converted amount
  - available currency list
- Calculated these directly from existing state and API data

### 3. Controlled Components

- Inputs and selects are fully controlled by React state
- Parent component owns the state
- Child components receive values and callbacks via props

### 4. Component Reusability

Extracted reusable components:

- `AmountInput` – handles amount input UI
- `CurrencySelect` – reusable dropdown for currencies
- `SwapCurrencies` – handles swapping base and target currencies

Focused on:

- keeping components simple
- avoiding internal state where unnecessary
- passing only required props

---

## 🛠 Tech Stack

- React
- Custom React Hooks
- Fetch API
- Tailwind CSS
- React Icons

---

## ⚠️ Important Notes / Learnings

- **State should store facts, not calculations**
- Derived data does not need its own state
- React UI updates automatically when state changes
- Custom hooks are just functions that group related logic
- Reusability starts with reducing JSX duplication, not over-abstraction

---

## 📚 Future Improvements (Optional)

- Improve initial loading UX
- Add more currencies dynamically
- Add routing with React Router
- Better error handling and retry logic
- Accessibility improvements

---

## 📌 Purpose

This project was built as a **learning exercise** to deepen understanding of:

- React state flow
- custom hooks
- component design

Not intended as a production-ready financial tool.
