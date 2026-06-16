import { Component, input, computed } from "@angular/core";
import { AppButtonVariant } from "./app-button.types";

@Component({
    selector: 'app-button',
    templateUrl: 'app-button.component.html',
    styleUrl: 'app-button.component.css'
})
export class AppButton {
    label = input<string>();
    variant = input<AppButtonVariant>('default');
    icon = input<string>();

    resolvedIcon = computed<string>(() => this.iconMap[this.variant()])

    private readonly iconMap: Record<AppButtonVariant, string> = {
        default: '',
        add: 'add',
        edit: 'edit',
        remove: 'remove',
        delete: 'delete'
    };
}