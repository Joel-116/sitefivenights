const { validatePassword, validateConfirmPassword, validateAge } = require('./signup');

test('Teste de senha com regras corretas', () => {
    const result = validatePassword('Password123!');
    expect(result).toBe(true); 
});

test('Teste de senha com menos de 3 caracteres', () => {
    const result = validatePassword('a1');
    expect(result).toBe(false);
});

test('Teste de senha faltando número', () => {
    const result = validatePassword('Password!');
    expect(result).toBe(false);
});

test('Teste de senha faltando letra', () => {
    const result = validatePassword('12345!');
    expect(result).toBe(false);
});

test('Teste de senha faltando símbolo', () => {
    const result = validatePassword('Password123');
    expect(result).toBe(false);
});

test('Teste de idade maior ou igual a 18', () => {
    const result = validateAge(18);
    expect(result).toBe(true); 
});

test('Teste de idade menor que 18', () => {
    const result = validateAge(17);
    expect(result).toBe(false);
});

test('Teste de idade maior que 150', () => {
    const result = validateAge(151);
    expect(result).toBe(false);
});