import { Component, input, computed, inject } from "@angular/core";
import { AppButtonVariant } from "./app-button.types";
import { Router } from "@angular/router";

@Component({
    selector: 'app-button',
    templateUrl: 'app-button.component.html',
    styleUrl: 'app-button.component.css'
})
export class AppButton {
    label = input<string>();
    variant = input<AppButtonVariant>('default');
    icon = input<string>();
    route = input<string>();

    resolvedIcon = computed<string>(() => this.iconMap[this.variant()])

    private readonly iconMap: Record<AppButtonVariant, string> = {
        default: '',
        add: 'add',
        edit: 'edit',
        remove: 'remove',
        delete: 'delete'
    };

    private readonly router = inject(Router);

    protected onClick(): void {
        const route = this.route();

        if (route) {
            this.router.navigate([route]);
        }
    }
}