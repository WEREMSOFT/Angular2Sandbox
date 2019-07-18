import { Subject, BehaviorSubject, Observable } from 'rxjs/Rx';
import { createStore, Store } from 'redux';

let arrNum: Array<number> = [1, 2, 3, 4, 5, 6];

setTimeout(() => { console.log('plus start'); arrNum = arrNum.map(x => x + 1), console.log('plus end') }, 0);
setTimeout(() => { console.log('times start'); arrNum = arrNum.map(x => x * 2), console.log('times end') }, 0);


setTimeout(() => console.log(arrNum), 1000);




// 1. #### COLORS!!!
//console.log('%c -=[BEGIN]=-', 'background: #000000; color: #00CC00');

// 2. #### SIMPLE FUNCTION

// function hello(){
//     console.log('Hello World!!');
// }

// 2. #### What is the Event Loop?

// setTimeout(hello, 0);

// #1 The main execution thread
// #2 Waiting Queue
// #3 Ready Queue

// 2.5 ### Promises
//  let p: Promise<string> = new Promise<string>((resolve, reject) => {
//     resolve('Hello World!!');
// });
// p.then(data => console.log('data: ' + data));

// 3. #### What about observables? In or out the vent loop?
// let bs: Subject<string> = new Subject<string>();
// bs.subscribe(data => console.log('from observable: ' + data));
// bs.next('test');

// 4. #### Observables are Sync EVENT IF WE HAVE A LOT OF SUBSCRIBERS!!!
// let bs: Subject<string> = new Subject<string>();
// bs.subscribe(data => console.log('from observable 1: ' + data));
// bs.subscribe(data => console.log('from observable 2: ' + data));
// bs.subscribe(data => console.log('from observable 3: ' + data));
// bs.subscribe(data => console.log('from observable 4: ' + data));
// bs.subscribe(data => console.log('from observable 5: ' + data));

// bs.next('test 1');
// bs.next('test 2');
// bs.next('test 3');
// bs.next('test 4');
// bs.next('test 5');
// bs.next('test 6');

// 5. #### We can turn an observable into a promise

// console.log('%c -=[BEGIN]=-', 'background: #000000; color: #00CC00');

// let bs: BehaviorSubject<string> = new BehaviorSubject<string>('');


// bs.subscribe(data => console.log('subscription: ' + data));

// bs.next('MyData');

// bs.toPromise().then(data => console.log('from promise: ' + data));

// bs.complete(); 

// 6 ### GENERATORS

// function* printHello(){
//     let myValue: number = 0;
//     myValue = yield myValue;
//     console.log('Hello World from generator: ' + myValue);
// }

// console.log('%c [BEGIN]', 'background: #000000; color: #FF0000');

// let g: Generator = printHello();

// console.log('value of myValue: ' + g.next().value);

// setTimeout(() => g.next(4), 1000);

// console.log('%c [END]', 'background: #000000; color: #FF0000');
