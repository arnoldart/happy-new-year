const $ = document.querySelector.bind(document)

// capital letters mean you shouldn't change the value
const CONTAINER = $(".container__greet")
const CONTAINER_COUNTDOWN = $(".container__countdown")
const BIG_TEXT = $(".greet__big-text")
const YEAR_TEXT = $(".greet__year")
const BIG_LETTERS = BIG_TEXT.textContent.split("")
const YEAR_LETTERS = YEAR_TEXT.textContent.split("")

// adjust targetted time here
const targetHour = 00
const targetMinute = 00
const targetSecond = 00

BIG_TEXT.textContent = ""
YEAR_TEXT.textContent = ""

BIG_LETTERS.forEach(
  letter => (BIG_TEXT.innerHTML += `<span class="letter">${letter}</span>`)
)
YEAR_LETTERS.forEach(
  letter => (YEAR_TEXT.innerHTML += `<span class="letter">${letter}</span>`)
)

const startCountdown = (content, letters, delay) => {
  setInterval(() => {
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let charIdx = 0

    // prevent memory leak by clearing interval when we're done
    const complete = () => {
      clearInterval(timer)
      timer = null
    }

    const onTick = () => {
      const span = content.querySelectorAll("span")[charIdx]

      if (hour === targetHour && minute === targetMinute && second >= targetSecond) {
        span.classList.add("fade")
      }

      charIdx++

      if (charIdx === letters.length) {
        complete()
        return
      }
    }

    let timer = setInterval(onTick, 50)
  }, delay)
}

startCountdown(BIG_TEXT, BIG_LETTERS, 1000)
startCountdown(YEAR_TEXT, YEAR_LETTERS, 2000)

setInterval(() => {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()

  $("#hour-num").innerHTML = h < 10 ? `0${h}` : h
  $("#minute-num").innerHTML = m < 10 ? `0${m}` : m
  $("#second-num").innerHTML = s < 10 ? `0${s}` : s

  if (h === targetHour && m === targetMinute && s >= targetSecond) {
    CONTAINER.style.marginTop = "7rem"
    CONTAINER_COUNTDOWN.style.opacity = 0
  }
}, 1)
