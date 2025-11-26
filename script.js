// Ocultar y mostrar secciones al hacer clic
const enlaces = document.querySelectorAll('.menu-link');
const secciones = document.querySelectorAll('section');

function mostrarSeccion(id) {
  secciones.forEach(sec => sec.style.display = 'none');
  document.querySelector(id).style.display = 'block';
}

enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    const id = enlace.getAttribute('href');
    if (id.startsWith('#')) {
      e.preventDefault();
      mostrarSeccion(id);
    }
  });
});

// Mostrar sección inicial
window.onload = () => mostrarSeccion('#principal');
