const funcs = require('./demoFuncs')

test("Testing the demo test function", () => {
    expect(funcs.testCase()).toBe(true);
});