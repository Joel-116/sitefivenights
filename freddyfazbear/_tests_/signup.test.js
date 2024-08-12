// __tests__/signup.test.js
const { validateForm } = require('../signup'); // Ajuste o caminho conforme necessário

// Teste de senha com regras corretas
it('should return true if password meets all requirements', () => {
  expect(validateForm('Password123!', 'Password123!', 20)).toBe(true);
});

// Teste de senha com menos de 3 caracteres
it('should return false if password is less than 3 characters', () => {
  expect(validateForm('a1', 'a1', 20)).toBe(false);
});

// Teste de senha faltando número
it('should return false if password is missing numbers', () => {
  expect(validateForm('Password!', 'Password!', 20)).toBe(false);
});

// Teste de senha faltando letra
it('should return false if password is missing letters', () => {
  expect(validateForm('12345!', '12345!', 20)).toBe(false);
});

// Teste de senha faltando símbolo
it('should return false if password is missing symbols', () => {
  expect(validateForm('Password123', 'Password123', 20)).toBe(false);
});

// Teste de repetição de senha correta
it('should return false if passwords do not match', () => {
  expect(validateForm('Password123!', 'Different123!', 20)).toBe(false);
});

// Teste de idade maior ou igual a 18
it('should return true if age is 18 or older', () => {
  expect(validateForm('Password123!', 'Password123!', 18)).toBe(true);
});

// Teste de idade menor que 18
it('should return false if age is less than 18', () => {
  expect(validateForm('Password123!', 'Password123!', 17)).toBe(false);
});

// Teste de idade maior que 150
it('should return false if age is greater than 150', () => {
  expect(validateForm('Password123!', 'Password123!', 151)).toBe(false);
});
