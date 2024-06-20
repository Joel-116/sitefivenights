document.addEventListener('DOMContentLoaded', function () {
    // Lógica para exibir as opções corretas com base na escolha do tipo de pizza
    const pizzaTypeElement = document.getElementById('pizza-type');
    const customOptions = document.getElementById('custom-options');
    const premadeOptions = document.getElementById('premade-options');

    pizzaTypeElement.addEventListener('change', function () {
        if (this.value === 'custom') {
            customOptions.style.display = 'block';
            premadeOptions.style.display = 'none';
        } else {
            customOptions.style.display = 'none';
            premadeOptions.style.display = 'block';
        }
    });

    // Estado inicial
    if (pizzaTypeElement.value === 'custom') {
        customOptions.style.display = 'block';
        premadeOptions.style.display = 'none';
    } else {
        customOptions.style.display = 'none';
        premadeOptions.style.display = 'block';
    }
});