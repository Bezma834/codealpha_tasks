// ===============================
// 1. MODE TOGGLE (Dark / Light)
// ===============================
function toggleMode() {
  document.body.classList.toggle("light");
}


// ===============================
// 2. SMOOTH SCROLL (optional upgrade)
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ===============================
// 3. CONTACT FORM HANDLING
// ===============================
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  // fake submit (you can connect backend later)
  alert(`Thanks ${name}, message sent successfully!`);

  form.reset();
});


// ===============================
// 4. BUTTON ANIMATION EFFECT
// ===============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});


// ===============================
// 5. PAGE LOAD EFFECT
// ===============================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});