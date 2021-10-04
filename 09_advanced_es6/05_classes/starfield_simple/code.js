class Star {

  constructor () {
    this.size = Math.floor(Math.random() * 15)
    this.x = Math.floor(Math.random() * (window.innerWidth  + 1) - 15)
    this.y = Math.floor(Math.random() * (window.innerHeight  + 1) - 15)
  }

  create () {
    const container = document.querySelector('body')
    const starElement = document.createElement('div')
    starElement.classList.add('star')
    starElement.style.width = this.size + 'px'
    starElement.style.height = this.size + 'px'
    starElement.style.left = this.x + 'px'
    starElement.style.top = this.y + 'px'
    container.appendChild(starElement)

  }

}

let stars = []

for (let i = 0; i < 500; i++){
  stars.push(new Star)
  stars[i].create()
}

console.log(stars[230])
console.log(stars[400])