import { Component, input, signal } from "@angular/core";

@Component({
    selector: 'counter',
    templateUrl: 'counter.html',
    styleUrl: 'counter.css',
})
export class Counter {
    count = signal<number>(0);

    protected increaseCounter() {
        this.count.update((value) => value + 1);
    }
}