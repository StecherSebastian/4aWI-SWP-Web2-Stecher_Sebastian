import { Component, input, signal } from "@angular/core";

@Component({
    selector: 'counter',
    templateUrl: 'counter.html'
})
export class Counter {
    count = signal<number>(0);

    public increaseCounter() {
        this.count.update((value) => value + 1);
    }
}