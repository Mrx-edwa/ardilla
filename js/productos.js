document.addEventListener('DOMContentLoaded', function() {
    // Cambiar imagen principal al hacer clic en thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remover clase active de todos los thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Añadir clase active al thumbnail clickeado
            this.classList.add('active');
            
            // Cambiar imagen principal
            const imgSrc = this.querySelector('img').src;
            imagenPrincipal.src = imgSrc;
        });
    });
    
    // Selección de colores
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Selección de tallas
    const tallaOptions = document.querySelectorAll('.talla-option:not(.disabled)');
    tallaOptions.forEach(option => {
        option.addEventListener('click', function() {
            tallaOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Zoom en imagen principal
    const imagenContainer = document.querySelector('.imagen-principal');
    imagenContainer.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = (e.clientX - left) / width * 100;
            const y = (e.clientY - top) / height * 100;
            imagenPrincipal.style.transformOrigin = `${x}% ${y}%`;
            imagenPrincipal.style.transform = 'scale(2)';
        }
    });
    
    imagenContainer.addEventListener('mouseleave', function() {
        imagenPrincipal.style.transform = 'scale(1)';
    });
    
    // Botón favorito
    const btnFavorito = document.querySelector('.btn-favorito');
    btnFavorito.addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-heart"></i> En favoritos';
        } else {
            this.innerHTML = '<i class="far fa-heart"></i> Favoritos';
        }
    });
});