module.exports = function toReadable(number) {
  const words = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const dozens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number < 20) {
    return words[number];
  } else if (number < 100) {
    const tens = Math.floor(number / 10);
    const remainder = number % 10;
    return dozens[tens] + (remainder !== 0 ? ' ' + words[remainder] : '');
  } else if (number < 1000) {
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    return words[hundreds] + ' hundred' + (remainder !== 0 ? ' ' + toReadable(remainder) : '');
  }
}
