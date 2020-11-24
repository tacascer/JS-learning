function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    }
}

var courses = [
    new Course("JS Essentials", "Tim", 1, true, 0),
]

console.log(courses[0].instructor);