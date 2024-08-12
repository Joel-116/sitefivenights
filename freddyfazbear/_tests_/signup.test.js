const { validateForm } = require('../signup'); 

  it('Teste de senha com regras corretas', () => {
    expect(validateForm('Password123!', 'Password123!', 20)).toBe(false);
  });

  it('Teste de senha com menos de 3 caracteres', () => {
    expect(validateForm('a1', 'a1', 20)).toBe(false);
  });

  it('Teste de senha faltando número', () => {
    expect(validateForm('Password!', 'Password!', 20)).toBe(false);
  });

  it('Teste de senha faltando letra', () => {
    expect(validateForm('12345!', '12345!', 20)).toBe(false);
  });

  it('Teste de senha faltando símbolo', () => {
    expect(validateForm('Password123', 'Password123', 20)).toBe(false);
  });

  it('Teste de repetição de senha correta', () => {
    expect(validateForm('Password123!', 'Different123!', 20)).toBe(false);
  });

  it('Teste de idade maior ou igual a 18', () => {
    expect(validateForm('Password123!', 'Password123!', 18)).toBe(false);
  });

  it('Teste de idade menor que 18', () => {
    expect(validateForm('Password123!', 'Password123!', 17)).toBe(false);
  });

  it('Teste de idade maior que 150', () => {
    expect(validateForm('Password123!', 'Password123!', 151)).toBe(false);
  });
