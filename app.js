const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * 1.07;
};

const fromDollarToYen = function(valueInDollar) {
    // 1 euro = 156.5 JPY and 1 euro = 1.07 USD
    return valueInDollar * (156.5 / 1.07);
};

const fromYenToPound = function(valueInYen) {
    // 1 euro = 0.87 GBP and 1 euro = 156.5 JPY
    return valueInYen * (0.87 / 156.5);
};

const sum = (a, b) => {
    return a + b;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
