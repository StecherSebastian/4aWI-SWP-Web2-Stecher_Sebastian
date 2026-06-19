import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-sidebar',
    templateUrl: 'app-sidebar.component.html',
    styleUrl: 'app-sidebar.component.css',
    imports: [RouterLink]
})
export class AppSidebar {};