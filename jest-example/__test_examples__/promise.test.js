function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('peanut butter'), 100);
    });
}

function fetchDataError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('error'), 100); // eslint-disable-line
    });
}

test('Promise Example: the data is peanut butter', () => {
    expect.assertions(1);
    return fetchData().then((data) => {
        expect(data).toBe('peanut butter');
    });
});

test('Promise with resolve Example: the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('Async/Await Example: the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('Async/Await with resolve Example: the data is peanut butter', async () => {
    expect.assertions(1);
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('Async/Await catch: the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchDataError();
    } catch (e) {
        expect(e).toMatch('error');
    }
});
