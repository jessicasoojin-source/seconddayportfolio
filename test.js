// Botones de proyectos
document.querySelectorAll(".mini-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`Abriste el proyecto: ${btn.dataset.name}`);
  });
});

// Formulario fake (sin enviar)
const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", e => {
  e.preventDefault();
  status.textContent = "Mensaje enviado ✨ (mentira, pero funciona 😎)";
  form.reset();
});

// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();
