function changeNavColorOnScroll() {
	const navButton = document.querySelector('.nav-link');
	const scrollPosition = window.scrollY;
	
	if (scrollPosition > 100) {
	  navButton.classList.add('nav-button-scrolled');
	} else {
	  navButton.classList.remove('nav-button-scrolled');
	}
  }