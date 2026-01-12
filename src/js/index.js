// DatePicker
const customEN = {
  months: {
    shorthand: ["Ja","Fe","Ma","Ap","My","Ju","Jl","Au","Se","Oc","No","De"],
    longhand: ["January","February","March","April","May","June","July","August","September","October","November","December"]
  },
  weekdays: {
    shorthand: ["Su","Mo","Tu","We","Th","Fr","Sa"],
    longhand: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  }
};

document.querySelectorAll('.flatpickr').forEach((picker) => {
  flatpickr(picker, {
    monthSelectorType: "static",
    wrap: true,
    dateFormat: "d.m.Y",
    locale: customEN,
    prevArrow: '<img src="./src/img/calendar/arrow-left.svg" alt="arrow">',
    nextArrow: '<img src="./src/img/calendar/arrow-right.svg" alt="arrow">',
  });
});

// Gallery
const buttons = document.querySelectorAll(".mode-btn");
const container = document.getElementById("gallery-content");

buttons.forEach(btn => {
    if (btn.dataset.type === "mode-list") btn.classList.add("active");
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        if (button.dataset.type === "mode-grid") {
            container.className = "grid";
        } else {
            container.className = "list";
        }
    });
});