// faqAccordion
function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const parent = content.parentElement;

  const isOpen = content.classList.contains("max-h-0");

  if (isOpen) {
    content.classList.remove("max-h-0");
    content.classList.add("max-h-[500px]");
    icon.innerHTML = "-";
    icon.classList.add("rotate-180");
    parent.classList.remove("xl:pb-4");
    parent.classList.add("xl:pb-6", "bg-[#FAFAFA]");
  } else {
    content.classList.add("max-h-0");
    content.classList.remove("max-h-[500px]");
    icon.innerHTML = "+";
    icon.classList.remove("rotate-180");
    parent.classList.remove("xl:pb-6", "bg-[#FAFAFA]");
    parent.classList.add("xl:pb-4");
  }
}

// serviceModal
function modalOpen() {
  document.getElementById("service-modal").classList.remove("hidden");
}

function modalClose() {
  document.getElementById("service-modal").classList.add("hidden");
}

// mobileMenu
const button = document.getElementById("toggle-button");
const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.getElementById("toggle-menu");

button.addEventListener("click", (e) => {
  menu.classList.toggle("hidden")
    ? menu.classList.remove("flex")
    : menu.classList.add("flex");
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
});

// teamAccordion
document.querySelectorAll(".toggleButton").forEach((button) => {
  button.addEventListener("click", function () {
    const index = this.getAttribute("data-toggle");
    const revealData = document.getElementById(`data-${index}`);

    revealData.classList.toggle("max-h-0");
    revealData.classList.toggle("max-h-[1000px]");
  });
});

// historyRoadmap
const sections = document.querySelectorAll(".tab-content");
var tabs = document.querySelectorAll(".tab-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const tabId = entry.target.getAttribute("data-content");
        tabs.forEach((tab) => {
          if (tab.getAttribute("data-tab") === tabId) {
            tab.classList.add("opacity-100");
            tab.classList.remove("opacity-30");
          } else {
            tab.classList.remove("opacity-100");
            tab.classList.add("opacity-30");
          }
        });
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));

// applicationProcess
window.addEventListener("scroll", function () {
  const scrollSection = document.getElementById("scrollSection");
  const scrollLine = document.getElementById("scrollLine");

  const scrollTop = window.scrollY;

  const sectionHeight = scrollSection.offsetHeight;

  const sectionOffsetTop = scrollSection.offsetTop;

  if (
    scrollY >= sectionOffsetTop &&
    scrollY <= sectionOffsetTop + sectionHeight
  ) {
    const scrollTop = scrollY - sectionOffsetTop;
    const scrollPercentage = (scrollTop / sectionHeight) * 100;

    scrollLine.style.height = `${scrollPercentage}%`;
  }
});
