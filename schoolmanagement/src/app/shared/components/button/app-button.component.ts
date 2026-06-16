import { Component, input, computed, inject, output, EventEmitter } from "@angular/core";
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
    clicked = output<void>();

    resolvedIcon = computed<string>(() => this.iconMap[this.variant()])

    handleClick() {
        this.clicked.emit();
    }

    private readonly iconMap: Record<AppButtonVariant, string> = {
        default: '',
        add: 'add',
        edit: 'edit',
        remove: 'remove',
        delete: 'delete'
    };
}