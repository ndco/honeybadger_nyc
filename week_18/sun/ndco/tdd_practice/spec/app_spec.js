const App = require('../app');
const sinon = require('sinon');
require('jasmine-sinon');

describe('App', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        app = new App();
    });

    describe('sortNums()', () => {
        it('sorts numbers in order', () => {
            expect(app.sortNums([3, 2, 1])).toEqual
            ([1, 2, 3]);
        });
    });

    describe('sinonSpy()', () => {
        it('uses spy to show external function was called', () => {
            const spy = sandbox.spy(Date, 'now');
            app.sinonSpy();
            
            expect(spy.calledOnce).toBe(true);
        });
    });

    afterEach(() => {
        sandbox.restore();
    })
})