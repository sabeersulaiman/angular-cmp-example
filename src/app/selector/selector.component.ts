import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
    search: string;

    private _items: any[];

    @Input()
    get items(): any[] {
        return this._items;
    }
    set items(v: any[]) {
        this._items = v;
        this.selectedItems = this._items;
    }

    @Input()
    getter: () => string;

    @Input()
    filter: (search: string, items: any[]) => any[];

    selectedItems: any[];

    constructor() {}

    onInputChange() {
        if (!this.search || this.search.trim().length === 0) {
            this.selectedItems = this.items;
            return;
        }

        // console.log(typeof this.filter);
        if (this.filter && typeof this.filter === 'function') {
            this.selectedItems = this.filter(this.search, this.items);
        } else {
            console.error('No Filter Function Provided.');
        }
    }
}
