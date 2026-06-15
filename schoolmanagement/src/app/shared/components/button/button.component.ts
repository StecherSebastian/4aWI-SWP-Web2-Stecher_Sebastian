import { Component, Input } from "@angular/core";
import { ButtonConfig } from "./button-config.interface";

@Component({
    selector: 'app-button',
    templateUrl: 'button.component.html',
    styleUrl: 'button.component.css'
})
export class Button{
    @Input({required: true}) config!: ButtonConfig;

    variant = this.config.variant ?? 'primary';
    icon = this.config.icon
    label = this.config.label
}