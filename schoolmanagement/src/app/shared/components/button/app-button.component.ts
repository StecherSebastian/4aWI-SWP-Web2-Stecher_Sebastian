import { Component, Input } from "@angular/core";
import { ButtonConfig } from "./app-button-config.interface";
import { ButtonVariant } from "./app-button.types";

@Component({
    selector: 'app-button',
    templateUrl: 'app-button.component.html',
    styleUrl: 'app-button.component.css'
})
export class AppButton {
    @Input({ required: true }) config!: ButtonConfig;

    get icon(): string {
        return this.config.icon ?? this.iconMap[this.config.variant];
    }

    readonly iconMap: Record<ButtonVariant, string> = {
        add: 'add',
        edit: 'edit',
        remove: 'remove',
        delete: 'delete'
    };
}