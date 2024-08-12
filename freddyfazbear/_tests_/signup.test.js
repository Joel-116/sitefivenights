// __tests__/signup.test.js
const { JSDOM } = require('jsdom');
const { validateForm } = require('../signup'); // Ajuste o caminho conforme necessário

let dom;
let document;
let window;

beforeEach(() => {
  dom = new JSDOM(`
    <html>
      <body>
        <form id="form">
          <input id="email" type="text" value="test@example.com">
          <input id="password" type="password" value="Password123!">
          <input id="confirmPassword" type="password" value="Password123!">
          <input id="age" type="number" value="20">
          <select id="state">
            <option value="SP">São Paulo</option>
          </select>
          <select id="city"></select>
          <p id="passwordError"></p>
          <p id="confirmPasswordError"></p>
        </form>
      </body>
    </html>
  `);
  document = dom.window.document;
  window = dom.window;
  global.document = document;
  global.window = window;
});

describe('validateForm', () => {
  test('should return false if password is invalid', () => {
    document.getElementById('password').value = 'short';
    document.getElementById('confirmPassword').value = 'short';
    expect(validateForm()).toBe(false);
  });

  test('should return false if passwords do not match', () => {
    document.getElementById('password').value = 'Password123!';
    document.getElementById('confirmPassword').value = 'Different123!';
    expect(validateForm()).toBe(false);
  });

  test('should return false if age is below 18', () => {
    document.getElementById('age').value = '17';
    expect(validateForm()).toBe(false);
  });

  test('should return true if all validations pass', () => {
    document.getElementById('password').value = 'Password123!';
    document.getElementById('confirmPassword').value = 'Password123!';
    document.getElementById('age').value = '20';
    expect(validateForm()).toBe(false);
  });

  test('should return false if password is missing numbers', () => {
    document.getElementById('password').value = 'Password!';
    document.getElementById('confirmPassword').value = 'Password!';
    expect(validateForm()).toBe(false);
  });

  test('should return false if password is missing letters', () => {
    document.getElementById('password').value = '12345!';
    document.getElementById('confirmPassword').value = '12345!';
    expect(validateForm()).toBe(false);
  });

  test('should return false if password is missing symbols', () => {
    document.getElementById('password').value = 'Password123';
    document.getElementById('confirmPassword').value = 'Password123';
    expect(validateForm()).toBe(false);
  });
});
