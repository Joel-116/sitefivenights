// Função para verificar data e nome
function verificarDataNome() {
    const nome = document.getElementById('nome1').value; // Obtém o valor do campo de nome
    const dia = parseInt(document.getElementById('dia1').value); // Obtém o valor do campo de dia e converte para inteiro
    const mes = parseInt(document.getElementById('mes1').value); // Obtém o valor do campo de mês e converte para inteiro
    const resultado = document.getElementById('resultado1'); // Elemento onde será exibido o resultado

    // Verifica condições específicas para exibir mensagens específicas
    if (nome === "Celso Portiolli" && dia === 11 && mes === 9) {
        resultado.textContent = "O Celso Portiolli não tem nada a ver com o 11 de Setembro";
    } else if (nome === "João Emanoel" && dia === 4 && mes === 7) {
        resultado.textContent = "Faça a prova com atenção";
    } else {
        resultado.textContent = "Nada não zé"; // Mensagem padrão se não houver correspondência
    }
}

// Função para calcular média de notas e verificar aprovação
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value); // Obtém o valor da primeira nota e converte para float
    const nota2 = parseFloat(document.getElementById('nota2').value); // Obtém o valor da segunda nota e converte para float
    const nota3 = parseFloat(document.getElementById('nota3').value); // Obtém o valor da terceira nota e converte para float
    const resultado = document.getElementById('resultado2'); // Elemento onde será exibido o resultado

    const media = (nota1 + nota2 + nota3) / 3; // Calcula a média das notas

    // Verifica se a média é maior ou igual a 60 para aprovação
    if (media >= 60) {
        resultado.textContent = "Aprovado";
    } else {
        resultado.textContent = "Reprovado";
    }
}

let pesos = []; // Array para armazenar os pesos dos gados

// Função para adicionar peso do gado
function adicionarPeso() {
    const pesoGadoInput = document.getElementById('pesoGado'); // Obtém o campo de entrada de peso do gado
    const pesoGado = parseFloat(pesoGadoInput.value); // Obtém o valor do peso do gado e converte para float
    const resultado = document.getElementById('resultado3'); // Elemento onde será exibido o resultado

    // Verifica se o valor do peso do gado é válido (não é NaN e é diferente de zero)
    if (!isNaN(pesoGado) && pesoGado !== 0) {
        pesos.push(pesoGado); // Adiciona o peso do gado ao array de pesos

        // Calcula menor peso, maior peso e média dos pesos
        const menorPeso = Math.min(...pesos);
        const maiorPeso = Math.max(...pesos);
        const mediaPeso = pesos.reduce((a, b) => a + b, 0) / pesos.length;

        // Monta o resultado com quantidade de gados, menor peso, maior peso, média e pesos informados
        resultado.innerHTML = `<p>Quantidade de gados: ${pesos.length}</p>`;
        resultado.innerHTML += `<p>Menor gado: ${menorPeso.toFixed(2)}</p>`;
        resultado.innerHTML += `<p>Maior gado: ${maiorPeso.toFixed(2)}</p>`;
        resultado.innerHTML += `<p>Média dos pesos: ${mediaPeso.toFixed(2)}</p>`;

        resultado.innerHTML += "<hr>";
        resultado.innerHTML += "<p>Pesos informados:</p>";

        // Exibe cada peso informado no resultado
        pesos.forEach((peso, index) => {
            resultado.innerHTML += `<p>Gado ${index + 1}: ${peso.toFixed(2)}</p>`;
        });

        // Limpa o campo de entrada de peso do gado após adicionar o peso
        pesoGadoInput.value = "";
    } else {
        resultado.textContent = "Por favor, insira um peso válido (diferente de zero).";
    }
}

// Função para calcular potência de um número
function calcularPotencia() {
    const base = parseFloat(document.getElementById('base').value); // Obtém o valor da base e converte para float
    const expoente = parseFloat(document.getElementById('expoente').value); // Obtém o valor do expoente e converte para float
    const resultado = document.getElementById('resultado4'); // Elemento onde será exibido o resultado

    // Verifica se os valores de base e expoente são válidos (números)
    if (!isNaN(base) && !isNaN(expoente)) {
        const potencia = Math.pow(base, expoente); // Calcula a potência
        resultado.textContent = `${base} elevado a ${expoente} é ${potencia}`; // Exibe o resultado da potência
    } else {
        resultado.textContent = "Por favor, insira valores numéricos válidos para base e expoente."; // Mensagem de erro se os valores não forem válidos
    }
}