import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.css',
    imports: [RouterLink]
})
export class Sidebar {};