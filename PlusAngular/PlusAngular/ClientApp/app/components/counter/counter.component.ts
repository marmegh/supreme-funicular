import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;
    public addings: Array<number>;

    public incrementCounter() {
        this.currentCount++;
        console.log(Math.floor(Math.random() * 9));
        this.addings.push(5);
        console.log(this.addings);
    }
}
