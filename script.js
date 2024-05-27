document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const backToTopButton = document.getElementById('back-to-top');

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        fadeIns.forEach((fadeIn) => {
            const offsetTop = fadeIn.offsetTop;
            const windowHeight = window.innerHeight;
            if (scrollTop + windowHeight > offsetTop + 100) {
                fadeIn.classList.add('appear');
            }
        });

        if (scrollTop > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to handle elements already in view
});
