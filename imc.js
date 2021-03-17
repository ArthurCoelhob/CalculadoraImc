const calcular = document.getElementById('calcular')


function imc() {
    const nome = document.getElementById('nome').value // para acessar o valor do input, não o id nome
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {


        const valorImc = (peso / (altura * altura)).toFixed(2); // para ter 2 casas apenas

        let classificacao = '' // let pois sempre haverá alteração

        if (valorImc < 18.5) {
            classificacao = 'Abaixo do peso'
        } else if (valorImc < 25) {
            classificacao = 'Parabéns, você está no peso ideal'
        } else if (valorImc < 30) {
            classificacao = 'Levemente acima do peso'
        } else if (valorImc < 35) {
            classificacao = 'Com obesidade grau I'
        } else if (valorImc < 40) {
            classificacao = 'Com obesidade grau II'
        } else {
            classificacao = 'Com obesidade grau III, CUIDADO!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;

    } else { resultado.textContent = 'Preencha todos os campos para descobrir o seu Imc' }

}


calcular.addEventListener('click', imc) // presta atenção quando alguem clickar