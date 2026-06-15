import { Component, Input } from "@angular/core";
import { ButtonConfig } from "./button-config.interface";
import { ButtonVariant } from "./button.types";

@Component({
    selector: 'app-button',
    templateUrl: 'button.component.html',
    styleUrl: 'button.component.css'
})
export class Button {
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