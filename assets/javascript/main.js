
const select = (el, all=false)=>{
    if(all)return [...document.querySelectorAll(el)]
    return document.querySelector(el)
}

const menuButton = select('#mobile-menu')

const sideBar = select('#header')

menuButton.onclick = ()=>{
    if(menuButton.sideBarShowing){
        sideBar.style.left = "-300px"
        menuButton.sideBarShowing = false
        menuButton.classList.remove("bi-x")
        menuButton.classList.add("bi-list")
    }
    else{
        sideBar.style.left = "0"
        menuButton.sideBarShowing = true
        menuButton.classList.remove("bi-list")
        menuButton.classList.add("bi-x")
    }
}


// typing animatios

const typed = select('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}


//back-to-top

let backtotop = select('#back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.style.opacity = 1;
    } else {
      backtotop.style.opacity = 0;
    }
  }
  window.addEventListener('load', toggleBacktotop)
  document.addEventListener('scroll', e=>toggleBacktotop())
}


//nav links active on scroll

let navbarlinks = select('#navbar a', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.parentElement.classList.add('navlink-active')
      } else {
        navbarlink.parentElement.classList.remove('navlink-active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  document.addEventListener('scroll', e=>navbarlinksActive())



  //preloader

  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }


  //sample swiper for testimonials 


//   new Swiper(classname, {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: ,
//       type: 'bullets',
//       clickable: true
//     }
//   });