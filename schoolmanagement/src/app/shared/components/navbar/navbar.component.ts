import { Component } from "@angular/core";
import { AppButton } from "../button/app-button.component";

@Component ({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrl: 'navbar.component.css',
    imports: [AppButton]
})
export class Navbar{

};