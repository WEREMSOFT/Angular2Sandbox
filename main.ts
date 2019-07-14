import { Subject, BehaviorSubject, Observable } from 'rxjs/Rx';
import { createStore, Store } from 'redux';

// 1. #### COLORS!!!
//console.log('%c -=[BEGIN]=-', 'background: #000000; color: #00CC00');

// 2. #### DIMPLE FUNCTION

// function hello(){
//     console.log('Hello World!!');
// }

// 2. #### What is the Event Loop?

// setTimeout(hello, 0);

// #1 The main execution thread
// #2 Waiting Queue
// #3 Ready Queue

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

// #1 We need to complete or will never be triggered
// #2 We need to have a BehaviorSubject or we will not get the data

// console.log('%c -=[END]=-', 'background: #000000; color: #00CC00');



