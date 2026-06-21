import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestType } from './test-type.interface'
import { TestHostComponent } from './test-host.component'
import { GenericTable } from './generic-table.component'

describe('GenericTable', () => {
    let component: GenericTable<TestType>;
    let fixture: ComponentFixture<GenericTable<TestType>>;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        fixture = TestBed.createComponent(GenericTable<TestType>);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render all column headers', () => {
        fixture.componentRef.setInput('columns', [{ key: 'name', label: 'Name' },]);
        fixture.componentRef.setInput('data', []);

        fixture.detectChanges();

        const headers = fixture.nativeElement.querySelectorAll('th');
        expect(headers.length).toBe(1);
    });

    it('should display column labels', () => {
        fixture.componentRef.setInput('columns', [{ key: 'name', label: 'Name' }]);
        fixture.componentRef.setInput('data', []);

        fixture.detectChanges();

        const header = fixture.nativeElement.querySelector('th');
        expect(header.textContent).toContain('Name');
    });

    it('should render correct amount of rows', () => {
        fixture.componentRef.setInput('columns', [{ key: 'name', label: 'Name' }]);
        fixture.componentRef.setInput('data', [
            { name: '1' },
            { name: '2' },
            { name: '3' }
        ]);

        fixture.detectChanges();

        const rows = fixture.nativeElement.querySelectorAll('tbody tr');
        expect(rows.length).toBe(3);
    });

    it('should display cell values', () => {
        fixture.componentRef.setInput('columns', [{ key: 'name', label: 'Name' }]);
        fixture.componentRef.setInput('data', [{ name: 'John' }]);

        fixture.detectChanges();

        const cell = fixture.nativeElement.querySelector('tbody td');
        expect(cell.textContent.trim()).toBe('John');
    });

    it('should emit clicked row', () => {
        const emitSpy = vi.spyOn(component.rowClick, 'emit');
        fixture.componentRef.setInput('columns', [{ key: 'name', label: 'Name' }]);
        fixture.componentRef.setInput('data', [{ name: 'John' }]);

        fixture.detectChanges();

        const row = fixture.nativeElement.querySelector('tbody tr');
        row.click();

        expect(emitSpy).toHaveBeenCalledWith({ name: 'John' });
    });

    it('should not render action header when no action template provided', () => {
        const header = fixture.nativeElement.querySelectorAll('th');
        expect(header.length).toBe(0);
        expect(header).not.toContain('Action')
    });
});

describe('GenericTable with action template', () => {
    let fixture: ComponentFixture<TestHostComponent>;


    beforeEach(() => {
        TestBed.configureTestingModule({});

        fixture = TestBed.createComponent(TestHostComponent);

        fixture.detectChanges();
    });

    it('should bind action template to input', () => {
        const component = fixture.debugElement.componentInstance;
        const table = component.tableComponentRef();
        expect(table.actionsTemplate()).toBeDefined();
    });

    it('should render action header when action template provided', () => {
        const header = fixture.nativeElement.querySelectorAll('th');
        expect(header.length).toBe(2);
        const headerText = fixture.nativeElement.querySelectorAll('th');
        expect(headerText[1].textContent).toContain('Action');
    });

    it('should render provided action template', () => {
        const paragraphs = fixture.nativeElement.querySelectorAll('tbody p');
        expect(paragraphs.length).toBe(2);
        expect(paragraphs[0].textContent).toContain('test');
        expect(paragraphs[1].textContent).toContain('test');
    });
});