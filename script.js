function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".details-container-for-project-cards");
  const wrapper = document.querySelector(".projects-wrapper");

  const INITIAL_VISIBLE = 3;
  const LOAD_MORE_COUNT = 3;

  let visibleCount = INITIAL_VISIBLE;

  // Hide extra cards
  cards.forEach((card, i) => {
    if (i >= INITIAL_VISIBLE) {
      card.style.display = "none";
    }
  });

  // Create button
  const btn = document.createElement("button");
  btn.textContent = "Explore More";
  btn.classList.add("btn", "btn-color-1", "view-more-btn");

  btn.addEventListener("click", () => {
    const next = visibleCount + LOAD_MORE_COUNT;

    cards.forEach((card, i) => {
      if (i >= visibleCount && i < next) {
        card.style.display = "block";
        card.classList.add("card-reveal");
      }
    });

    visibleCount = next;

    if (visibleCount >= cards.length) {
      btn.style.display = "none";
    }

    // 🔥 IMPORTANT: force layout recalculation
    document.querySelector("#projects").style.height = "auto";
  });

  wrapper.appendChild(btn);

  if (cards.length <= INITIAL_VISIBLE) {
    btn.style.display = "none";
  }
});