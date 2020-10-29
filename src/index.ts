import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2); // emit 2
    subscriber.next(3); // emit 3
    setTimeout(() => {
        subscriber.next(4); // emit 4
        subscriber.complete();
    }, 2000);
});

console.log('just before subscriber');
observable$.subscribe({
    next(x) { console.log('value is', x)},
    error(err: any) { console.log('error is', err)},
    complete() { console.log('I am done') },
});
console.log('just after subscription');

