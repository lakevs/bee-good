// theme.js
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");
  
    if (body.getAttribute("data-theme") === "light") {
      body.setAttribute("data-theme", "dark");
      themeToggle.textContent = "🌙"; // Moon icon for dark mode
      localStorage.setItem("theme", "dark"); // Save theme preference
    } else {
      body.setAttribute("data-theme", "light");
      themeToggle.textContent = "☀️"; // Sun icon for light mode
      localStorage.setItem("theme", "light"); // Save theme preference
    }
  }
  
  function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark mode
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");
  
    body.setAttribute("data-theme", savedTheme);
    themeToggle.textContent = savedTheme === "light" ? "☀️" : "🌙";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", toggleTheme);
  
    loadTheme();
  });
