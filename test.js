const { 
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    const total = sum(14, 9);
    expect(total).toBe(23);
});

test('One euro should be 1.07 dollars', () => {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745);
});

test('One dollar should be 146.2616822429906 yen', () => {
    const yen = fromDollarToYen(1);
    expect(yen).toBeCloseTo(146.2616822429906);
});

test('One hundred yen should be 0.556...', () => {
    const pounds = fromYenToPound(100);
    expect(pounds).toBeCloseTo(0.556);
});
