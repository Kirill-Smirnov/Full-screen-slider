class Carousel {
	constructor(sections) {
		this.num = 0;

		this.sections = [].slice.call(document.querySelectorAll(sections));
		this.current = this.sections[this.num];
		this.left = document.querySelector('#left');
		this.right = document.querySelector('#right');
	}

	init() {
		View.showCurrent(this.sections, this.current);
		this.onClick();
		this.setHash();
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
		View.showCurrent(this.sections, this.current);
		this.setHash();
	}

	setHash() {
		var hash = new Hash(this.getCurrent(), 'title');
		hash.setHash();
	}

	setCurrent(current) {
		this.current = current;
	}

	getCurrent() {
		return this.current;
	}

	getSectionByTitle(title) {
		for (let i = 0; i < this.sections.length; i++) {
			if (this.sections[i].dataset.title == title) {
				return this.sections[i];
			}
		}
	}

	getSections() {
		return this.sections;
	}
}