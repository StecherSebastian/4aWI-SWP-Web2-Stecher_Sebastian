import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestInterface } from './test.interface'
import { GenericTable } from './generic-table.component'

describe('GenericTable', () => {
    let component: GenericTable<TestInterface>;
    let fixture: ComponentFixture<GenericTable<TestInterface>>;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        fixture = TestBed.createComponent(GenericTable<TestInterface>);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render all column headers', () => {
        fixture.componentRef.setInput('columns',
            [
                { key: 'name', label: 'Name' },
                { key: 'age', label: 'Age' }
            ]
        );
        fixture.componentRef.setInput('data', []);

        fixture.detectChanges();

        const headers = fixture.nativeElement.querySelectorAll('th');
        expect(headers.length).toBe(2);
    });

    it('should display column labels', () => {
        fixture.componentRef.setInput('columns', [
            { key: 'name', label: 'Name' },
        ]);
        fixture.componentRef.setInput('data', []);

        fixture.detectChanges();

        const header = fixture.nativeElement.querySelector('th');
        expect(header.textContent).toContain('Name');
    });

    it('should render correct amount of rows', () => {
        fixture.componentRef.setInput('columns', [
            { key: 'name', label: 'Name' },
            { key: 'age', label: 'Age' }
        ]);
        fixture.componentRef.setInput('data', [
            { name: '1', age: '1' },
            { name: '2', age: '2' },
            { name: '3', age: '3' }
        ]);

        fixture.detectChanges();

        const rows = fixture.nativeElement.querySelectorAll('tbody tr');
        expect(rows.length).toBe(3);
    });

    it('should display cell values', () => {
        fixture.componentRef.setInput('columns', [
            { key: 'name', label: 'Name' }
        ]);
        fixture.componentRef.setInput('data', [
            { name: 'John' }
        ]);

        fixture.detectChanges();

        const cell = fixture.nativeElement.querySelector('tbody td');
        expect(cell.textContent.trim()).toBe('John');
    });
});