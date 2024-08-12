function validateForm() {
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    // const confirmPassword = document.getElementById('confirmPassword').value;
    // const age = parseInt(document.getElementById('age').value);
    // const state = document.getElementById('state').value;
    // const city = document.getElementById('city').value;
    // const passwordError = document.getElementById('passwordError');
    // const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Mensagens de erro
    // passwordError.textContent = '';
    // confirmPasswordError.textContent = '';

    // Validação da senha
    const password = ''; // Placeholder para a senha real
    const confirmPassword = ''; // Placeholder para a confirmação da senha real
    const age = 0; // Placeholder para a idade real
    const city = ''; // Placeholder para a cidade real

    const passwordValid = /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[\W_]/.test(password);
    if (!passwordValid) {
        // passwordError.textContent = 'Invalid password, missing numbers, letters, or symbols.';
        return false;
    }

    // Validação da confirmação da senha
    if (password !== confirmPassword) {
        // confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    }

    // Validação de idade
    if (age < 18) {
        // document.body.innerHTML += '<p class="alert">Unable to create account. Minimum age is 18 years.</p>';
        return false;
    }

    if (age < 0 || age > 150) {
        // document.body.innerHTML += '<p class="alert">Invalid age. Must be between 0 and 150 years.</p>';
        return false;
    }

    // Validação da cidade
    if (!city) {
        // document.body.innerHTML += '<p class="alert">Select a city.</p>';
        return false;
    }

    // Sucesso ao enviar o formulário :D
    // document.body.innerHTML += '<p class="alert success">Registration successful!</p>';
    return true;
}

function loadCities() {
    const state = document.getElementById('state').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '';

    if (state === 'SP') {
        const citiesSP = ['São Paulo', 'Campinas', 'Guarulhos'];
        citiesSP.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else if (state === 'RJ') {
        const citiesRJ = ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes'];
        citiesRJ.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else if (state === 'MG') {
        const citiesMG = ['Nova Lima', 'Belo Horizonte', 'Juiz de Fora'];
        citiesMG.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else if (state === 'ES') {
        const citiesES = ['Vitória', 'Vila Velha', 'Serra'];
        citiesES.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    citySelect.disabled = false;
}

module.exports = { validateForm, loadCities };
