import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppButton } from './app-button.component';
import { Router } from '@angular/router';

describe('AppButton', () => {
    let component: AppButton;
    let fixture: ComponentFixture<AppButton>;
    let routerMock: Pick<Router, 'navigate'>;

    beforeEach(async () => {
        routerMock = {
            navigate: vi.fn(),
        };

        TestBed.configureTestingModule({
             providers: [{ provide: Router, useValue: routerMock }]
        });

        fixture = TestBed.createComponent(AppButton);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should bind correct label', () => {
        const expectedLabel = 'BUTTON'

        fixture.componentRef.setInput('label', expectedLabel);

        fixture.detectChanges();

        expect(component.label()).toBe(expectedLabel);
        const button = fixture.nativeElement.querySelector('button');
        expect(button.textContent).toContain(expectedLabel);
    });

    it('should select the correct icon and class for each variant', () => {
        const testCases = [
            { variant: 'add', expectedIcon: 'add' },
            { variant: 'edit', expectedIcon: 'edit' },
            { variant: 'remove', expectedIcon: 'remove' },
            { variant: 'delete', expectedIcon: 'delete' }
        ] as const;

        testCases.forEach(({ variant, expectedIcon }) => {
            const fixture = TestBed.createComponent(AppButton);
            const component = fixture.componentInstance;

            fixture.componentRef.setInput('variant', variant);

            fixture.detectChanges();

            expect(component.variant()).toBe(variant);
            expect(component.resolvedIcon()).toBe(expectedIcon);
            const icon = fixture.nativeElement.querySelector('i');
            expect(icon.className).toBe(expectedIcon);
        });
    });

    it('should navigate to given route', () => {
        const expectedRoute = '/dashboard';

        fixture.componentRef.setInput('route', expectedRoute);

        const button = fixture.nativeElement.querySelector('button');
        button.click()

        expect(routerMock.navigate).toHaveBeenCalled()
    });
});