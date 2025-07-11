const apiKeyImput = document.getElementById('apiKey')
const gamameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const enviarFormulario = (event) => {
    event.preventDefault()
    const apiKey = apiKeyImput.value
    const game = gamameSelect.value
    const question = questionInput.value

    console.log ({apiKey, game, question})

    if(apiKey == '' || game == '' || question == '') {
        alert('Por Favor Completar Todos os Campos')
        return
    }
    askButton.disabled = true
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')
    
    try {

    } catch (error) {

    } finally {
      askButton.disabled = false
      askButton.textContent = 'Perguntar'
      askButton.classList.remove('loading')  
    }



}

form.addEventListener('submit', enviarFormulario )
