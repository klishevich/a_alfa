function parseOpenedUrl(openedUrl) {
    console.log(7001, openedUrl);
    const url = openedUrl || '/';
    console.log(7002, url);
    const urlArr = url.split('/');
    console.log(7003, urlArr);
    const ordersIndex = urlArr.indexOf('orders');
    console.log(ordersIndex);
    const arrLength = urlArr.length;
    console.log(arrLength);
    if (ordersIndex !== -1 && ordersIndex + 1 < arrLength) {
        return { id: urlArr[ordersIndex + 1], openedPage: urlArr[ordersIndex + 2] }
    }
    return {};
}
const res = parseOpenedUrl('/orders/:id/files');
console.log(res);

// const props = { id: 'qwe', match: { params: { path: '/orders/:id/files' } } };
// const { id, match: { params: { path = '/' } = {} } = {} } = props;
// console.log(111, id, path);
// const urlArr = path.split('/');
// const openedRoute = urlArr[urlArr.length - 1];
// console.log(1111, id, path, openedRoute);

// let a = '/orders/:id/files';
// let b = a.split('/');
// let c = b[b.length - 1];
// console.log(c);

// const locale = 'ru-RU';
// const intDate = 1504098828000;
// const date = new Date(intDate);
// console.log(1, date);
// const options = { day: 'numeric', month: 'long', year: 'numeric' };
// const res = date.toLocaleDateString(locale, options);
// console.log(2, res);

// const res = Math.floor(121324 / 1000);
// console.log(res);
