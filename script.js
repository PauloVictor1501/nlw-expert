//Chave para certificado é Expert
const perguntas = [
    {
        pergunta: "Qual é a linguagem de programação padrão para desenvolvimento web?",
        respostas: [
            "Java",
            "Python",
            "JavaScript",
        ],
        correta: 2
    },
    {
        pergunta: "O que o console.log() faz em JavaScript?",
        respostas: [
            "Exibe uma mensagem de alerta",
            "Imprime informações no console do navegador",
            "Cria uma nova variável",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "variável myVar;",
            "v myVar;",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de comparação usado para verificar se dois valores são iguais em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função utilizada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toInteger()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método .push() faz em um array em JavaScript?",
        respostas: [
            "Remove o último elemento do array",
            "Adiciona um novo elemento no início do array",
            "Adiciona um novo elemento no final do array",
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador && representa em JavaScript?",
        respostas: [
            "Operador de adição",
            "Operador de ou",
            "Operador lógico 'E'",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário de uma linha",
            "<!-- Este é um comentário de uma linha -->",
            "/* Este é um comentário de uma linha */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função utilizada para obter o comprimento de uma string em JavaScript?",
        respostas: [
            ".length()",
            ".size()",
            ".length",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
        respostas: [
            "4",
            "22",
            "Erro",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')



for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h2').textContent = item.pergunta
    
    for (const resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if (estaCorreta) {
                 corretas.add(item)
            }

            mostrarTotal.innerHTML = corretas.size + ' de ' + totalDePerguntas
        }
        

        quizItem.querySelector('dl').appendChild(dt)
    }    

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)

}




