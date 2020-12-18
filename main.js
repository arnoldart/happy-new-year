const yrss = document.getElementById('yrss')
const yrs = document.getElementById('yrs')
const container = document.getElementById('container__inner')
const containers = document.getElementById('containers')

const strText = yrss.textContent;
const strTexts = yrs.textContent;

const splitText = strText.split('')
const splitTexts = strTexts.split('')

let hrs = 20 //setting jam
let mnt = 03 //setting menit
let scn = 58 //setting detik

yrss.textContent = ''
yrs.textContent = ''

for(let i = 0; i < splitText.length; i++) {
  yrss.innerHTML += `<span>${splitText[i]}</span>`
}

for(let a = 0; a < splitTexts.length; a++) {
  yrs.innerHTML += `<span>${splitTexts[a]}</span>`
}

setInterval(() => {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()

  let char = 0
  let timer = setInterval(onTick, 50)

  function onTick(){
    const span = yrss.querySelectorAll('span')[char]

    if(h === hrs && m == mnt && s >= scn ) {
      span.classList.add('fade')
    }
    char++
    if( char === splitText.length) {
      complete()
      return
    }

  }

  function complete() {
    clearInterval(timer)
    timer = null
  }

}, 1000)

setInterval(() => {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()

  let char = 0
  let timer = setInterval(onTick, 50)

  function onTick(){
    const span = yrs.querySelectorAll('span')[char]

    if(h === hrs && m == mnt && s >= scn) {
      span.classList.add('fade')
    }
    char++
    if( char === splitTexts.length) {
      complete()
      return
    }

  }

  function complete() {
    clearInterval(timer)
    timer = null
  }

}, 2000)

setInterval(() => {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()

  document.getElementById('h').innerHTML = h < 10 ? `0${h}` : h
  document.getElementById('m').innerHTML = m < 10 ? `0${m}` : m
  document.getElementById('s').innerHTML = s < 10 ? `0${s}` : s

  if(h === hrs && m === mnt && s >= scn) {
    container.style.marginTop = "0rem"
    containers.style.marginTop = "2rem"
  }
  
}, 1)

  


