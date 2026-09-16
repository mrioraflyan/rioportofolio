document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("modalImage");

    const closeModal = document.querySelector(".close-modal");
    const buttons = document.querySelectorAll(".lihatsertifikat");

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let images = [];
    let currentImage = 0;


    buttons.forEach(function(button) {

        button.addEventListener("click", function(e) {

            e.preventDefault();

            images = this.getAttribute("data-images").split(",");

            currentImage = 0;

            modalImage.src = images[currentImage];

            modal.style.display = "flex";

        });

    });


    nextBtn.addEventListener("click", function() {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        modalImage.src = images[currentImage];

    });


    prevBtn.addEventListener("click", function() {

        currentImage--;

        if (currentImage < 0) {
            currentImage = images.length - 1;
        }

        modalImage.src = images[currentImage];

    });


    closeModal.addEventListener("click", function() {

        modal.style.display = "none";

    });


    modal.addEventListener("click", function(e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

});