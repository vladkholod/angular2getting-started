import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() public rating: number;
    public starWidth: number;

    @Output() public ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    public starContainerWidth: number = 86;
    private maxStarCount: number = 5;

    public ngOnChanges(): void {
        this.starWidth = this.rating * this.starContainerWidth / this.maxStarCount;
    }

    public getStarArray(): number[] {
        return new Array<number>(this.maxStarCount);
    }

    public onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}