// Selecciona todas las imágenes y el modal
const images = document.querySelectorAll('.zoomable');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('expanded-img');
const closeModal = document.querySelector('.close');
const externalLink = document.createElement('a'); // Crear el enlace
externalLink.textContent = "Visitar";
externalLink.target = "_blank"; // Abrir en una nueva pestaña

externalLink.style.fontSize = '15px';    // Cambiar el tamaño de fuente
externalLink.style.color = '#ccc';    // Cambiar el color
externalLink.style.textDecoration = 'none'; // Quitar subrayado

modal.appendChild(externalLink); // Añadir el enlace al modal


// Recorre todas las imágenes y añade el evento click a cada una
images.forEach((img) => {
    img.addEventListener('click', function() {
        modal.style.display = "flex";   // Muestra el modal
        modalImg.src = img.src;         // Coloca la imagen en el modal
        externalLink.href = img.getAttribute('data-link');  // Enlace externo (puedes cambiarlo dinámicamente)
    });
});

// Añade el evento click al botón de cerrar
closeModal.addEventListener('click', function() {
    modal.style.display = "none";   // Oculta el modal
});

// Cierra el modal al hacer clic fuera de la imagen
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
