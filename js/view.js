class View {
	static showCurrent(sections, current) {
		sections.map(section => section.style.display = 'none');
		current.style.display = 'block';
	}
}