import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    selectorItems: string[] = [
        'Malayalam',
        'English',
        'Arabic',
        'Urdu',
        'German',
        'French',
        'Hindi'
    ];
    constructor() {}

    ngOnInit() {}

    languageDisplay(s: string) {
        return s;
    }

    filterLanguages(search: string, items: string[]) {
        return items.filter(x => x.startsWith(search));
    }
}
