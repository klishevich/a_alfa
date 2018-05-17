import foo from './foo';

jest.mock('./foo');

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('Mock function', () => {
    const mockCallback = jest.fn();
    forEach([0, 1], mockCallback);
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);
    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('Mock function 2', () => {
    const myMock = jest.fn();
    const a = new myMock();
    // const b = {};
    const bound = myMock.bind({});
    bound();
    const c = new myMock();
    console.log(myMock.mock.instances);
});

test('Mock function 3', () => {
    const someMockFunction = jest.fn();
    someMockFunction('one', 'two');
    someMockFunction('three', 'four');
    expect(someMockFunction.mock.calls.length).toBe(2);
    expect(someMockFunction.mock.calls[0][0]).toBe('one');
    expect(someMockFunction.mock.calls[1][1]).toBe('four');
    expect(someMockFunction.mock.instances.length).toBe(2);
    console.log(someMockFunction.mock.instances);
});

test('Mock return value', () => {
    const someMockFunction = jest.fn();
    someMockFunction('one', 'two');
    someMockFunction('three', 'four');
    expect(someMockFunction.mock.calls.length).toBe(2);
    expect(someMockFunction.mock.calls[0][0]).toBe('one');
    expect(someMockFunction.mock.calls[1][1]).toBe('four');
    expect(someMockFunction.mock.instances.length).toBe(2);
    console.log(someMockFunction.mock.instances);
});

test('Mock return value', () => {
    const myMock = jest.fn();
    console.log(myMock());
    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('x')
        .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
});

test('continuation passing style', () => {
    const filterTestFn = jest.fn();
    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const result = [11, 12].filter(filterTestFn);
    console.log(result);
    // > [11]
    console.log(filterTestFn.mock.calls);
});

test('Mock Implementations', () => {
    const myMockFn = jest.fn(cb => cb(null, true));
    myMockFn((err, val) => console.log(val));
    // > true
    myMockFn((err, val) => console.log(val));
    // > true

    const myMockFn2 = jest.fn(v => (v > 10 ? 100 : 1));
    console.log(myMockFn2(5));
    console.log(myMockFn2(50));
});

test('Mock Implementation 2', () => {
    foo.mockImplementation(() => 42);
    foo();
    expect(foo()).toBe(42);
});

test('Mock Implementation different results', () => {
    const myMockFn = jest
        .fn()
        .mockImplementationOnce(cb => cb(null, true))
        .mockImplementationOnce(cb => cb(null, false));

    myMockFn((err, val) => console.log(val));
    // > true

    myMockFn((err, val) => console.log(val));
    // > false
});

test('Mock Implementation default ', () => {
    const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first_call')
        .mockImplementationOnce(() => 'second_call');

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // > 'first call', 'second call', 'default', 'default'
});

test('Mock return this ', () => {
    const myObj = {
        name: 'my name',
        myMethod: jest.fn().mockReturnThis()
    };

    console.log(myObj.myMethod().name);
    console.log(myObj.myMethod().myMethod().name);
});

test('Mock name', () => {
    const myMockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');
    expect(myMockFn(1)).toBe(1);
    // console.log(myMockFn(1));
});

test.only('Custom Matchers', () => {
    const mockFunc = jest.fn();
    const arg1 = 5;
    const arg2 = 8;
    mockFunc(1, 2);
    mockFunc(arg1, arg2);
    mockFunc(2, 3);
    // The mock function was called at least once
    expect(mockFunc).toBeCalled();

    // The mock function was called at least once with the specified args
    expect(mockFunc).toBeCalledWith(1, 2);

    // The last call to the mock function was called with the specified args
    expect(mockFunc).lastCalledWith(2, 3);

    // All calls and the name of the mock is written as a snapshot
    expect(mockFunc).toMatchSnapshot();

    expect(mockFunc.mock.calls.length).toBeGreaterThan(1);
    // not working
    // expect(mockFunc.mock.calls).toContain([arg1, arg2]);

    expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 2][0]).toBe(5);
    expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 2][1]).toBe(8);
});
