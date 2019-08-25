
var timezone_mock = require('timezone-mock');

// Date override routine

Date.prototype.toJSON = function() { return this.getFullYear() + '-' + this.getMonth() + '-' +  this.getDate() + '-' + this.getHours() + ':' + this.getMinutes() };
Date = function (...values) {
    this.getFullYear = function() {}
};

test('should create a javscritp date on UTD because we do not specify time', () => {
    let d = new Date(1978, 10, 9);
    expect(d.toISOString()).toBe('1978-11-08T23:00:00.000Z');
});

test('should create a date in current timezone, since we specify time', () => {
    let d = new Date(1978, 10, 9, 12, 15);
    expect(d.toISOString()).toBe('1978-11-09T11:15:00.000Z');
})

test('timezone offset should be -0', () => {
    timezone_mock.register('Europe/London');
    let d = new Date(1978, 10, 9);
    expect(d.getTimezoneOffset()).toBe(-0);
})

test('timezone offset should be -0', () => {
    timezone_mock.register('US/Pacific');
    let d = new Date(1978, 10, 9);
    expect(d.getTimezoneOffset()).toBe(480);
});

test('stringify should create a date json string', () => {
    timezone_mock.register('Europe/London');
    // Date.prototype.toJSON = () => 'CADORNA';
    let d = new Date(1978, 10, 9, 12, 15);
    expect(JSON.stringify(d)).toBe('\"1978-11-09T12:15:00.000Z\"');


})