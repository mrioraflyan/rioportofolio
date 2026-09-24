document.addEventListener("DOMContentLoaded", function () {

    // --- FITUR HAMBURGER MENU MOBILE ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            const icon = hamburger.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

        // Tutup menu otomatis saat salah satu link diklik di HP
        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const icon = hamburger.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }

    // --- FITUR MODAL SERTIFIKAT ---
    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("modalImage");

    const closeModal = document.querySelector(".close-modal");
    const buttons = document.querySelectorAll(".lihatsertifikat");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let images = [];
    let currentImage = 0;

    if (modal && modalImage && buttons.length > 0) {
        buttons.forEach(function(button) {
            button.addEventListener("click", function(e) {
                e.preventDefault();

                images = this.getAttribute("data-images").split(",");
                currentImage = 0;

                modalImage.src = images[currentImage].trim();
                modal.style.display = "flex";
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener("click", function() {
                currentImage++;
                if (currentImage >= images.length) {
                    currentImage = 0;
                }
                modalImage.src = images[currentImage].trim();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", function() {
                currentImage--;
                if (currentImage < 0) {
                    currentImage = images.length - 1;
                }
                modalImage.src = images[currentImage].trim();
            });
        }

        if (closeModal) {
            closeModal.addEventListener("click", function() {
                modal.style.display = "none";
            });
        }

        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});