// const lightBtn = document.querySelector('[data-mode="light"]');
document.addEventListener("DOMContentLoaded", () => {

    const modeBtns = document.querySelector(".button-container");
    let savedSheet = localStorage.getItem("theme");

    if (savedSheet) {
        setActiveTheme(savedSheet)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setActiveTheme("dark")
    } else {
        setActiveTheme("light")
    }

    console.log("saved theme:" + savedSheet);

    function setActiveTheme(mode) {
        let css = `link[rel="alternate stylesheet"]`;
        let stylesheets = document.querySelectorAll(css);

        stylesheets.forEach(sheet => sheet.disabled = true);

        let selector = `link[title="${mode}"]`;
        let activeSheet = document.querySelector(selector);

        activeSheet.disabled = false;
        localStorage.setItem("theme", mode);
        console.log("set theme:" + mode);
    }
    if (modeBtns) modeBtns.addEventListener("click", (e) => {
        // e.currentTarget er vores div element
        if (e.target !== e.currentTarget) {
            setActiveTheme(e.target.dataset.mode)
        } else {
            console.log("div clicked");
        }
    })
})