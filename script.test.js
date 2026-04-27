const { somar, subtrair, multiplicar, dividir } = require('./script');

test('soma 2 + 3 = 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('subtração 5 - 2 = 3', () => {
  expect(subtrair(5, 2)).toBe(3);
});

test('multiplicação 3 * 4 = 12', () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test('divisão 10 / 2 = 5', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('divisão por zero retorna null', () => {
  expect(dividir(10, 0)).toBe(null);
});