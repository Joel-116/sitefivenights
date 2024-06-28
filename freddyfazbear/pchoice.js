document.addEventListener('DOMContentLoaded', function () {
    const pizzaTypeSelect = document.getElementById('pizza-type');
    const premadeOptions = document.getElementById('premade-options');
    const customOptions = document.getElementById('custom-options');
    const pizzaDescription = document.getElementById('pizza-description');
    const pizzaName = document.getElementById('pizza-name');
    const pizzaIngredients = document.getElementById('pizza-ingredients');
    const pizzaImage = document.getElementById('pizza-image');

    function togglePizzaOptions() {
        const pizza = pizzaTypeSelect.value;

        if (pizza === 'custom') {
            customOptions.style.display = 'block';
            premadeOptions.style.display = 'none';
        } else {
            customOptions.style.display = 'none';
            premadeOptions.style.display = 'block';
            showPizzaDescription(pizza);
        }

        const allOptions = document.querySelectorAll('.pizza-options');
        allOptions.forEach(option => option.style.display = 'none');

        const selectedOption = document.getElementById(`${pizza}-options`);
        if (selectedOption) {
            selectedOption.style.display = 'block';
        }
    }

    function showPizzaDescription(pizza) {
        let name, ingredients, imageSrc, imageAlt;

        switch (pizza) {
            case 'pepperoni':
                name = 'Pepperoni Pizza';
                ingredients = 'Paprika, chili flakes, cayenne pepper, fennel seed and garlic.';
                imageSrc = 'image/pizza/pepperoni_pizza.png';
                imageAlt = 'Delicious Pepperoni Pizza with paprika, chili flakes, cayenne pepper, fennel seed and garlic toppings';
                break;
            case 'mushroom':
                name = 'Mushroom Pizza';
                ingredients = 'Onions, garlic and slivers of lacinato kale.';
                imageSrc = 'image/pizza/mushroom_pizza.png';
                imageAlt = 'Savory Mushroom Pizza topped with onions, garlic and slivers of lacinato kale';
                break;
            case 'sausage':
                name = 'Sausage Pizza';
                ingredients = 'Onions, Bell Peppers, and Jalapenos.';
                imageSrc = 'image/pizza/sausage_pizza.png';
                imageAlt = 'Flavorful Sausage Pizza with onions, bell peppers, and jalapenos';
                break;
            case 'supreme':
                name = 'Supreme Pizza';
                ingredients = 'Pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions.';
                imageSrc = 'image/pizza/supreme_pizza.png';
                imageAlt = 'Hearty Supreme Pizza loaded with pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions';
                break;
            case 'cheese':
                name = 'Cheese Pizza';
                ingredients = 'Beef, Pork, Pepperoni, Olivers, Peppers and Onions.';
                imageSrc = 'image/pizza/cheese_pizza.png';
                imageAlt = 'Classic Cheese Pizza topped with beef, pork, pepperoni, olivers, peppers and onions';
                break;
            default:
                name = 'Custom Pizza';
                ingredients = 'Your choice of toppings.';
                imageSrc = 'image/pizza/custom_pizza.png';
                imageAlt = 'Custom Pizza with your choice of delicious toppings';
                break;
        }

        pizzaName.textContent = name;
        pizzaIngredients.textContent = `Ingredients: ${ingredients}`;
        pizzaImage.src = imageSrc;
        pizzaImage.alt = imageAlt;
        pizzaDescription.style.display = 'block';
    }

    pizzaName.style.fontFamily = 'Battipaglia, sans-serif';

    pizzaDescription.style.display = 'block';

    pizzaName.classList.add('center-text');

    pizzaTypeSelect.addEventListener('change', togglePizzaOptions);
    togglePizzaOptions();
});