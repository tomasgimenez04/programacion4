document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-cerrar');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    const galleryItems = document.querySelectorAll('.galeria-item');
    const images = [];
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            images.push(img.src);
        }
    });

    let currentImageIndex;

    function openLightbox(index) {
        if (index >= 0 && index < images.length) {
            lightbox.style.display = 'flex';
            lightboxImg.src = images[index];
            currentImageIndex = index;
        }
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showNextImage() {
        const nextIndex = (currentImageIndex + 1) % images.length;
        openLightbox(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox(prevIndex);
    }

    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            item.addEventListener('click', () => {
                // Find the correct index in the 'images' array
                const imageSrc = img.src;
                const imageIndex = images.findIndex(src => src === imageSrc);
                openLightbox(imageIndex);
            });
        }
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                showNextImage();
            }
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
            if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
});
