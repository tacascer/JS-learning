const IMAGES = document.querySelectorAll("img")

for (let i = 0; i < IMAGES.length; i++) {
  let imgSRC = IMAGES[i].getAttribute("src")
  imgSRC = imgSRC.slice(0, -8)
  console.log(imgSRC)

  let type = IMAGES[i].getAttribute("data-type")
  console.log(type)
}