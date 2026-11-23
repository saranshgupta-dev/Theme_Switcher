# 🌗 JavaScript Theme Switcher

A simple and interactive **Light & Dark Mode Theme Switcher** built using HTML, CSS, and JavaScript. This project allows users to switch between light and dark themes while remembering their selected preference using browser `localStorage`.


## 🎬 Project Demo
[▶ Watch Theme Switcher Screen Recording](https://github.com/saranshgupta-dev/Theme_Switcher/blob/main/Screen%20Recording%20.mov)


## 🚀 Features

- Toggle between Light Mode and Dark Mode.
- Save the selected theme in browser localStorage.
- Maintain the selected theme even after refreshing the page.
- Dynamically update the website appearance using JavaScript.
- Smooth theme transition.
- Simple and responsive user interface.

## 🛠️ Technologies Used

- HTML5 – Website structure.
- CSS3 – Styling and theme customization.
- JavaScript (ES6+) – Theme switching functionality.
- Browser localStorage – Persistent theme preferences.

## 📚 Concepts Learned

This project helped me understand and practise the following JavaScript concepts:

1. **DOM Manipulation**

   - `document.body`
   - `className`
   - `textContent`

2. **localStorage**

   - `localStorage.setItem()`
   - `localStorage.getItem()`

3. **Storage and Persistence**

   - Saving user preferences in the browser.
   - Retrieving previously saved data.
   - Maintaining data after page refresh.


## 📂 Project Structure

```text
Theme-Switcher/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. When the website loads, JavaScript checks the previously saved theme using `localStorage.getItem()`.
2. If a saved theme exists, it applies that theme to the document body.
3. If no theme is saved, Light Mode is selected by default.
4. When the user clicks the theme switcher button, JavaScript toggles between Light Mode and Dark Mode.
5. The selected theme is saved using `localStorage.setItem()`.
6. Even after refreshing the page, the previously selected theme is automatically restored.


## 🎯 Project Objective

The main objective of this project was to understand browser storage and persistence in JavaScript by building a practical application that remembers user preferences.

## 👨‍💻 Author

**Saransh Gupta**

- GitHub: [saranshgupta-dev](https://github.com/saranshgupta-dev)
- LinkedIn: [Saransh Gupta](https://www.linkedin.com/in/saransh-gupta-dev/)

---

⭐ If you find this project useful, feel free to explore the repository!

