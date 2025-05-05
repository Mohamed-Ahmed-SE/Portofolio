document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.querySelector('[data-theme-btn]');
    const HTML = document.documentElement;

    if (sessionStorage.getItem("theme")) {
        HTML.dataset.theme = sessionStorage.getItem("theme");
    } else {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        HTML.dataset.theme = isDark ? "dark" : "light";
    }

    sessionStorage.setItem("theme", HTML.dataset.theme);

    const changeTheme = () => {
        HTML.dataset.theme = HTML.dataset.theme === "light" ? "dark" : "light";
        sessionStorage.setItem("theme", HTML.dataset.theme);
    }

    themeBtn.addEventListener("click", changeTheme);
});


const $tabBtn = document.querySelectorAll("[data-tab-btn]");

let lastActiveTab = document.querySelector("[data-tab-content].active");
let lastActiveTabBtn = document.querySelector("[data-tab-btn].active");


$tabBtn.forEach(item => {
  item.addEventListener('click', function() {
   
    lastActiveTab.classList.remove('active');
    lastActiveTabBtn.classList.remove('active');

  
    const $tabContent = document.querySelector(
      `[data-tab-content="${item.dataset.tabBtn}"]`
    );
    

    $tabContent.classList.add('active');
    this.classList.add('active');

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});
