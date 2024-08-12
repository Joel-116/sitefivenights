function validateForm(password, confirmPassword, age) {
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    // const confirmPassword = document.getElementById('confirmPassword').value;
    // const age = parseInt(document.getElementById('age').value);
    // const state = document.getElementById('state').value;
    // const city = document.getElementById('city').value;
    // const passwordError = document.getElementById('passwordError');
    // const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Validação da senha
    const passwordValid = /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[\W_]/.test(password) && password.length >= 3;
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
    if (age < 18 || age < 0 || age > 150) {
        // document.body.innerHTML += '<p class="alert">Invalid age. Must be between 0 and 150 years.</p>';
        return false;
    }

    // Validação da cidade
    // if (!city) {
    //     document.body.innerHTML += '<p class="alert">Select a city.</p>';
    //     return false;
    // }

    return true;
}

function loadCities() {
    // Função não usada no teste
    const state = document.getElementById('state').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '';

    const cities = {
        'SP': ['São Paulo', 'Campinas', 'Guarulhos'],
        'RJ': ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes'],
        'MG': ['Nova Lima', 'Belo Horizonte', 'Juiz de Fora'],
        'ES': ['Vitória', 'Vila Velha', 'Serra']
    };

    if (cities[state]) {
        cities[state].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    citySelect.disabled = false;
}

module.exports = { validateForm, loadCities };
