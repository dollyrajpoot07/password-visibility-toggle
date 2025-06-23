# 🔐 Password Visibility Toggle (Next.js)

This utility provides a clean and simple password input field with a visibility toggle using an eye icon.

## 🚀 Features
- Show/hide password on click
- Eye and eye-off icons for better UX
- Responsive and styled with CSS Modules

## 📁 File Structure
- `PasswordToggle.jsx` — React component
- `PasswordToggle.module.css` — Styling

## 🧠 How it Works
- Uses `useState` to track visibility.
- Switches between `type="password"` and `type="text"` based on visibility toggle.

<img width="460" alt="Screenshot 2025-06-23 at 7 57 29 PM" src="https://github.com/user-attachments/assets/22b2ad95-8fcf-4f56-b89d-5bf5de216982" />
<img width="467" alt="Screenshot 2025-06-23 at 7 57 18 PM" src="https://github.com/user-attachments/assets/99ee89fe-c2e8-440b-8bd3-e4735c2b5b11" />

## 🛠️ Usage

```jsx
import PasswordToggle from './PasswordToggle';

<PasswordToggle />
