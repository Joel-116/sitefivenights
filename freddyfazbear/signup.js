function validatePassword(password) {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    passwordError.textContent = '';

    const passwordValid = /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[\W_]/.test(password);
    if (!passwordValid) {
        passwordError.textContent = 'Invalid password, missing numbers, letters or symbols.';
        return false;
    }
    return true;
}

function validateConfirmPassword(password, confirmPassword) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.textContent = '';

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    }
    return true;
}

function validateAge(age) {
    const age = parseInt(document.getElementById('age').value, 10);
    const ageError = document.getElementById('ageError');
    ageError.textContent = '';

    if (isNaN(age) || age < 18) {
        ageError.textContent = 'Unable to create account. The minimum age is 18 years old.';
        return false;
    }
    if (age < 0 || age > 150) {
        ageError.textContent = 'Invalid age. Must be between 0 and 150 years.';
        return false;
    }
    return true;
}

function validateCity(city) {
    const city = document.getElementById('city').value;
    if (!city) {
        document.body.innerHTML += '<p class="alert">Select a city.</p>';
        return false;
    }
    return true;
}

function validateForm(password, confirmPassword, age, city) {
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgeValid = validateAge();
    const isCityValid = validateCity();

    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);
    const isAgeValid = validateAge(age);
    const isCityValid = validateCity(city);

    if (isPasswordValid && isConfirmPasswordValid && isAgeValid && isCityValid) {
        document.body.innerHTML += '<p class="alert success">Registration completed successfully!</p>';
        return true;
    }
    return false;
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

document.getElementById('state').addEventListener('change', loadCities);
