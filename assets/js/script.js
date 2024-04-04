const accordionToggle = document.querySelectorAll(".js-accordion-toggle");
const accordionCollapse = document.querySelectorAll(".js-accordion-collapse");
const accordionToggleIcon = document.querySelectorAll(
  ".js-accordion-toggle .js-accordion-toggle-icon"
);
let currentlyOpenIndex = -1; // Track the currently open accordion, -1 means none are open initially

accordionToggle.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    // Close the previously open accordion
    if (currentlyOpenIndex !== -1) {
      accordionToggle[currentlyOpenIndex].setAttribute(
        "aria-expanded",
        "false"
      );
      accordionCollapse[currentlyOpenIndex].classList.remove("active");
      accordionToggleIcon[currentlyOpenIndex].src =
        "./assets/images/icon-plus.svg";
    }

    if (!isExpanded) {
      // Open the clicked accordion
      toggle.setAttribute("aria-expanded", "true");
      accordionCollapse[index].classList.add("active");
      accordionToggleIcon[index].src = "./assets/images/icon-minus.svg";
      currentlyOpenIndex = index; // Update the currently open accordion
    } else {
      currentlyOpenIndex = -1; // No accordion is open
    }
  });
});
