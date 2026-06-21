import { Component, input, output, TemplateRef } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { TableColumn } from "./table-column.interface";

@Component({
    selector: 'generic-table',
    templateUrl: './generic-table.component.html',
    styleUrl: './generic-table.component.css',
    imports: [NgTemplateOutlet]
})
export class GenericTable<T> {
    data = input<T[]>([]);
    columns = input<TableColumn<T>[]>([])
    actionsTemplate = input<TemplateRef<unknown> | undefined>();
    rowClick = output<T>()
};