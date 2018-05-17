const locale = 'ru-RU';
const intDate = 1504098828000;
const date = new Date(intDate);
console.log(1, date);
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const res = date.toLocaleDateString(locale, options);
console.log(2, res);

// const res = Math.floor(121324 / 1000);
// console.log(res);
