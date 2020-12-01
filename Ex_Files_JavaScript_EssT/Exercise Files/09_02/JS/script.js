//Any href that starts with http.
var extLinks = document.querySelectorAll('a[href^="http"]')

for (var i = 0; i < extLinks.length; i++) {
  if (!extLinks[i].hasAttribute("target")) {
    extLinks[i].setAttribute("target", "_blank")
  }
}