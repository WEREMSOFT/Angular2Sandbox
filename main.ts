import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { createStore, Store } from 'redux';

let bs: BehaviorSubject<string> = new BehaviorSubject<string>('Hello World!!');

const ID: string  = '1';

bs
.map((value: string) => value.toUpperCase())
.subscribe(value => console.log(value));

function myReducer(state: number = 0, action: any) {
    switch(action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default:
            return state;
    }

}

let store: Store = createStore(myReducer);

// store.subscribe( subscribe( (value) => console.log(store.getState(), store. , value));

store.dispatch({type: 'INCREMENT', id: ID});

