class App {
	static init() {
		new Carousel('section');
	}
}

class Carousel {
	constructor(sections) {
		this.num = 0;

		this.sections = [].slice.call(document.querySelectorAll(sections));
		this.current = this.sections[this.num];
		this.left = document.querySelector('#left');
		this.right = document.querySelector('#right');
		this.init();
	}

	init() {
		this.setCurrent();
		this.onClick();
	}

	setCurrent() {
		this.sections.map(section => section.style.display = 'none');
		this.current.style.display = 'block';
	}

	onClick() {
		this.left.addEventListener('click', () => this.changeSection('prev'));
		this.right.addEventListener('click', () => this.changeSection('next'));
	}

	changeSection(btn) {
		var len = this.sections.length - 1;

		if (btn == 'prev')
			if (this.num > 0)
				this.num--;
			else
				this.num = len;

		if (btn == 'next')
			if (this.num < len)
				this.num++;
			else
				this.num = 0;

		this.current = this.sections[this.num];
		this.setCurrent();
	}

}

App.init();