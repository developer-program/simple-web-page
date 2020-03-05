const emojiPath = 'assets/frog.png'
const animatedEmojiPath = 'assets/frog.gif'

const emoji = document.querySelector('img')

const toggleDisabledButtons = function() {
  startEmojiAnimationButton.classList.toggle('disabled');
  startEmojiAnimationButton.disabled = !startEmojiAnimationButton.disabled

  stopEmojiAnimationButton.classList.toggle('disabled');
  stopEmojiAnimationButton.disabled = !stopEmojiAnimationButton.disabled
}

const changeEmojiSource = (path) => {
  emoji.src = path
  toggleDisabledButtons()
}

const startEmojiAnimationButton = document.querySelector('.animate-start')
startEmojiAnimationButton.disabled = false
startEmojiAnimationButton.addEventListener('click', () => changeEmojiSource(animatedEmojiPath))

const stopEmojiAnimationButton = document.querySelector('.animate-stop')
stopEmojiAnimationButton.disabled = true
stopEmojiAnimationButton.addEventListener('click', () => changeEmojiSource(emojiPath))
