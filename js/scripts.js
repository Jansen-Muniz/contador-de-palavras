const textArea = document.querySelector('[data-js="text-area"]')
let paragraph = document.querySelector('[data-js="word-quantity"]')

textArea.addEventListener('input', e => {
  const inputValue = e.target.value
  
  let arrayWords = inputValue.trim().split(' ')
  let counterWords = 0

  arrayWords.forEach(word => {
    if(word){
      counterWords += 1
    }

    paragraph.textContent = `A mensagem tem ${counterWords} palavras.` 
  })
})