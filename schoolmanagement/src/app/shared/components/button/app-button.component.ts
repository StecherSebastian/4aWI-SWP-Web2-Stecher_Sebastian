import { Component, Input } from "@angular/core";
import { AppButtonVariant } from "./app-button.types";

@Component({
    selector: 'app-button',
    templateUrl: 'app-button.component.html',
    styleUrl: 'app-button.component.css'
})
export class AppButton {
    @Input() label?: string;
    @Input() variant?: AppButtonVariant;
    @Input() icon?: string;

    get resolvedIcon(): string {
        if (this.variant)
            return this.icon ?? this.iconMap[this.variant];
        else return '';
    }

    readonly iconMap: Record<AppButtonVariant, string> = {
        add: 'add',
        edit: 'edit',
        remove: 'remove',
        delete: 'delete'
    };
}