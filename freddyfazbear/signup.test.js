const { validatePassword, validateAge } = require('./signup');

it('Teste de senha com regras corretas', () => {
    expect(validatePassword('Password123!')).toBe(true);
});

it('Teste de senha com menos de 3 caracteres', () => {
    expect(validatePassword('a1')).toBe(false);
});

it('Teste de senha faltando número', () => {
    expect(validatePassword('Password!')).toBe(false);
});

it('Teste de senha faltando letra', () => {
    expect(validatePassword('12345!')).toBe(false);
});

it('Teste de senha faltando símbolo', () => {
    expect(validatePassword('Password123')).toBe(false);
});

it('Teste de idade maior ou igual a 18', () => {
    expect(validateAge(18)).toBe(true);
});

it('Teste de idade menor que 18', () => {
    expect(validateAge(17)).toBe(false);
});

it('Teste de idade maior que 150', () => {
    expect(validateAge(151)).toBe(false);
});