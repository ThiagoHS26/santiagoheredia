// Selecciona todas las imágenes y el modal
const images = document.querySelectorAll('.zoomable');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('expanded-img');
const closeModal = document.querySelector('.close');

// Recorre todas las imágenes y añade el evento click a cada una
images.forEach((img) => {
    // Añade el evento click a la imagen
    img.addEventListener('click', function() {
        modal.style.display = "flex";   // Muestra el modal
        modalImg.src = img.src;         // Coloca la imagen en el modal
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
