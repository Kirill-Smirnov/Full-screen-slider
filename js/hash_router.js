class HashRouter {
	static hashRouter() {
		var hash = location.hash;
		var section = app.carousel.getSectionByTitle(hash.substring(1));
		if (!section)
			section = app.carousel.getCurrent();
		app.carousel.setCurrent(section);
		View.showCurrent(app.carousel.getSections(), app.carousel.getCurrent());
	}
}