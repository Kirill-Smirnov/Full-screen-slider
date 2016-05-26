class App {
	init() {
		this.carousel = new Carousel('section');
		this.carousel.init();
		Hash.init();
	}
}

var app = new App();

window.onload = app.init();