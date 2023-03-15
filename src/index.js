import './styles/style.scss'
import './styles/fonts.css'
import './styles/media.css'
import logo from './images/icons/logo.png'
import iconTel from './images/icons/iconTel.png'
import exit from './images/icons/exit.png'
import map from './images/map.png'
import share from './images/icons/share.png'
import iconMenu from './images/icons/iconMenu.png'
import image0 from './images/image 12.png'
import image1 from './images/image 20.png'
import image2 from './images/image 21.png'
import image3 from './images/image 22.png'
import image4 from './images/image 23.png'
import image5 from './images/image 24.png'
import image6 from './images/image 25.png'
import image7 from './images/image 26.png'
import image8 from './images/image 27.png'
import slider from './components/slider'

//js
document.querySelector('.header__logo img').src = logo
document.querySelector('.header__number img').src = iconTel
document.querySelector('.bottom-block__number img').src = iconTel
document.querySelector('.main-info__exit-icon img').src = exit
document.querySelector('.bottom-block__left-block img').src = map
document.querySelector('.bottom-block__full-price-number img').src = share
document.querySelector('.header__mobile-menu img').src = iconMenu

let dataImages = [image0, image1, image2, image3, image4, image5 , image6, image7, image8]
let arrSlides = document.querySelectorAll('.swiper-slide img')
let i = 0
for (const arrSlide of arrSlides) {
    if (i === 8) {
        i = 0
    }
    arrSlide.src = dataImages[i]
    i++
}

