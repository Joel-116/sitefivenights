function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    passwordError.textContent = '';

    const passwordValid = /[a-zA-Z]/.test(password) &&
                          /[0-9]/.test(password) &&
                          /[\W_]/.test(password) &&
                          password.length >= 8;

    if (!passwordValid) {
        passwordError.textContent = 'Invalid password. The password must be at least 8 characters long and include letters, numbers and symbols.';
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.textContent = '';

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    }
    return true;
}

function validateAge() {
    const age = parseInt(document.getElementById('age').value, 10);
    const ageError = document.getElementById('ageError');
    ageError.textContent = '';

    if (isNaN(age) || age < 18 || age > 150) {
        ageError.textContent = 'The minimum age is 18 years old.';
        return false;
    }
    return true;
}

function validateCity() {
    const city = document.getElementById('city').value;
    const cityError = document.getElementById('cityError');
    cityError.textContent = '';

    if (!city) {
        cityError.textContent = 'Select a city.';
        return false;
    }
    return true;
}

function loadCities() {
    const state = document.getElementById('state').value;
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '';

    const citiesByState = {
        'SP': ['São Paulo', 'Campinas', 'Guarulhos'],
        'RJ': ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes'],
        'MG': ['Nova Lima', 'Belo Horizonte', 'Juiz de Fora'],
        'ES': ['Vitória', 'Vila Velha', 'Serra']
    };

    if (citiesByState[state]) {
        citiesByState[state].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        citySelect.disabled = false;
    } else {
        citySelect.disabled = true;
        const option = document.createElement('option');
        option.textContent = 'Select state first';
        citySelect.appendChild(option);
    }
}

function validateForm(event) {
    event.preventDefault(); 

    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgeValid = validateAge();
    const isCityValid = validateCity();

    if (isPasswordValid && isConfirmPasswordValid && isAgeValid && isCityValid) {
        document.getElementById('successMessage').textContent = 'Registration completed successfully!';
        return true;
    }
    return false;
}

document.getElementById('registrationForm').addEventListener('submit', validateForm);

document.getElementById('state').addEventListener('change', loadCities);
