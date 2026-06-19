import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AppSidebar } from './app-sidebar.component';

describe('Sidebar', () => {
    let component: AppSidebar;
    let fixture: ComponentFixture<AppSidebar>

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideRouter([])
            ]
        });

        fixture = TestBed.createComponent(AppSidebar);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render navigation links', () => {
        const text = fixture.nativeElement.textContent;

        expect(text).toContain('Home');
        expect(text).toContain('Schools');
        expect(text).toContain('Classrooms');
        expect(text).toContain('Students');
        expect(text).toContain('Create');
    });


    it('should configure correct routes', () => {
        const links = fixture.debugElement.queryAll(
            By.directive(RouterLink)
        );

        const routes = links.map(
            link => link.injector.get(RouterLink).href
        );

        expect(routes).toEqual([
            '/dashboard',
            '/dashboard',
            '/schools',
            '/classrooms',
            '/students',
            '/create'
        ]);
    });
});