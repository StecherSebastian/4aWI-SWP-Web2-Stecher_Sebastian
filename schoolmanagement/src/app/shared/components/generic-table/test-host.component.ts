import { Component, viewChild, ViewChild } from "@angular/core";
import { GenericTable } from "./generic-table.component";
import { TableColumn } from "./table-column.interface";
import { TestType } from "./test-type.interface";

@Component({
  template: `
    <generic-table
      [columns]="columns"
      [data]="data"
      [actionsTemplate]="testFragment"
    />

    <ng-template #testFragment>
      <p>test</p>
    </ng-template>
  `,
  imports: [GenericTable]
})
export class TestHostComponent {
  tableComponentRef = viewChild<GenericTable<TestType>>(GenericTable);
  columns: TableColumn<TestType>[] = [{ key: 'name', label: 'Name' }];
  data: TestType[] = [
    { name: 'John' },
    { name: 'Jasmine' }
  ];
}