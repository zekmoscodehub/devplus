# DevPulse ⚡ GitHub Developer Analytics Dashboard

DevPulse is a high-performance, single-page application built to decode and visually map any public GitHub developer's profile DNA instantly. Designed with global tech recruiters in mind, it transforms dense, raw API profiles into a clean, actionable developer intelligence card.

🔗 **Live Demo:** [Insert your GitHub Pages Link Here]

## ✨ Core Features

* **Real-time API Engine:** Leverages asynchronous JavaScript (`async/await`) to run multi-threaded requests directly against the GitHub REST API.
* **Recruiter Mode Accelerator:** Features a custom trigger module allowing prospective hiring teams to auto-fetch and audit my profile data with a single click.
* **Fluid Shimmer & Micro-Interactions:** Custom UI components utilizing skewed linear-gradient overlays to produce an elegant glowing aura state without bloating layout packages.
* **Adaptive Glassmorphism Layout:** Built using modern CSS Flexbox parameters paired with custom CSS `@media` grid breakpoints for fully responsive execution across modern viewports.
* **Intuitive Skeleton Loaders:** Employs animated linear-gradient background sweeps to optimize perceived latency while awaiting client data resolution.

## 🛠️ Built With

* **HTML5:** Semantic architecture layout foundations.
* **Bootstrap 5:** Structural responsive grid component parameters.
* **Custom CSS3:** Advanced UI transitions, `cubic-bezier` motion pacing, and mesh gradients.
* **Vanilla JavaScript (ES6+):** Dynamic DOM injection, state configuration management, and API serialization.

## 🚀 Getting Started

To run this application locally on your machine:

1. Clone this repository:
   ```bash
   git clone https://github.com
   ```
2. Open the directory on your system.
3. Open `index.html` inside any modern web browser.

## ⚙️ Configuration & Engineering Details

The app uses JavaScript's Native Fetch standard. To calculate top achievements, it automatically fetches up to 100 repositories from the endpoint (`/users/{username}/repos`) and applies a sorting algorithm on the client side:

```javascript
const topRepos = repos
  .sort((a, b) => b.stargazers_count - a.stargazers_count)
  .slice(0, 5);
```
This isolates the top 5 high-impact projects ranked by community repository stargazers.
