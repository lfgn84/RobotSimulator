# 🦾 Robot Simulator

A small web app built with **React + TypeScript + TailwindCSS** where you can control a robot that moves inside a square or circular room.  
You can choose the room type, size, language (Swedish or English), start position, and a list of commands.  
The robot then runs the path and shows:

- its **final coordinate and direction**
- a **red path** showing its movement
- a **green start point**
- a **green arrow** showing the final direction
- and a **compass** for reference.

---

## 🚀 How to Run

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npm run dev
   ```

   Then open the URL shown in the terminal (usually `http://localhost:5173/`).

3. **Run tests** (Playwright)

   ```bash
   npm run test
   ```

   All tests should pass ✅ (17 total).

4. **Run linting**

   ```bash
   npm run lint
   ```

5. **Live Demo & CI**

   [![CI](https://github.com/lfgn84/RobotSimulator/actions/workflows/ci.yml/badge.svg)](https://github.com/lfgn84/RobotSimulator/actions/workflows/ci.yml)
   
   **Live URL:** https://robot-simulator-eta.vercel.app
   
   The repository uses **GitHub Actions CI/CD pipeline** that automatically:
   - ✅ Runs all Playwright tests on every push/PR
   - ✅ Validates TypeScript compilation
   - ✅ Checks code linting (ESLint) 
   - ✅ Ensures code quality and prevents regressions
   - 🚀 Deploys to Vercel on successful builds


---

## 🧩 Project Structure

The app follows a **domain-first structure** — logic and UI are clearly separated:

| Folder      | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `core/`     | Main logic for the robot (directions, movements, command parsing, room validation). |
| `ui/`       | React components for visual layout, form, and room visualization. |
| `app/`      | App-level files such as configuration and helpers. |
| `tests/`    | Playwright test cases covering logic and UI scenarios.       |
| `index.css` | Global styles and Tailwind theme customization.              |

This structure keeps the code **easy to read, modular, and scalable**, reflecting how real-world projects are organized.  
TailwindCSS is used for a clean, modern look with a consistent color palette.

---

## 💡 Notes & Design Choices

- The app uses a **screen coordinate system**, meaning Y increases downward (as used in most 2D graphics systems).  
  - In a **square room**, the origin `(0,0)` is at the **top-left corner**.  
  - In a **circular room**, the origin is at the **center (origo)**.
- The app includes a **visual compass** and an **origin marker** so the user always knows the orientation.
- The robot logic is **pure and testable** — the UI and logic are fully decoupled.
- The app includes **Playwright tests** covering both logic and UI behavior.
- Clear component separation and meaningful names were prioritized to show **structure and readability**.

---

## 🧪 Technologies Used

- React (Vite)
- TypeScript
- TailwindCSS
- Playwright (for automated tests)

---