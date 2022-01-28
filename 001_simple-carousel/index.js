function toggle() {
    const x = document.querySelectorAll('.toggleButton')
    toggle.forEach()
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.content__gallery__box__image')
images.forEach(image =>{
    image.addEventListener('click', e => {
        lightbox.classList.add('lightbox--active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})