class Hash {
	constructor(section, attr) {
		this.section = section;
		this.hash = this.section.dataset[attr];
	}

	static init() {
		HashRouter.hashRouter();
		Hash.onHashChange();
	}

	setHash() {
		location.hash = this.hash;
	}

	static getHash() {
		return this.hash;
	}

	static onHashChange() {
		window.onhashchange = (() => HashRouter.hashRouter());
	}
}