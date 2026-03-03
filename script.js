 document.addEventListener('DOMContentLoaded', () => {
            const aboutBtn = document.getElementById('about-btn');
            const aboutDetails = document.getElementById('about-details');

            aboutBtn.addEventListener('click', () => {
                if (aboutDetails.style.display === "none" || aboutDetails.style.display === "") {
                    aboutDetails.style.display = "block";
                    aboutBtn.textContent = "Hide Details";
                } else {
                    aboutDetails.style.display = "none";
                    aboutBtn.textContent = "Get Started!";
                }
            });
        });