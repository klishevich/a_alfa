test.only('the data is peanut butter', (done) => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }
    setTimeout(() => callback('peanut butter'), 100);
});

test('the data is not peanut butter', (done) => {
    function callback(data) {
        expect(data).not.toBe('peanut butter');
        done();
    }
    setTimeout(() => callback('not peanut butter'), 100);
});

test('this test should fails', (done) => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }
    setTimeout(() => callback('not peanut butter2'), 100);
});
