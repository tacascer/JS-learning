var course = new Object()

course.title = "JavaScript"

var course = {
  title: "JavaScript",
  views: 0,
  updateViews: function () {
    return ++course.views
  }
}

console.log(course)
console.log(course.title)