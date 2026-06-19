import { Component, input } from "@angular/core";

@Component({
    selector: 'generic-table',
    templateUrl: './generic-table.component.html',
    styleUrl: './generic-table.component.css'
})
export class GenericTable<T>{
    data = input<T[]>([]);
    columns = input<{ key: keyof T, label: string }[]>([])
};