import { Pipe } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import * as i0 from "@angular/core";
export class CurrencyPipe {
    constructor() {
    }
    transform(value, currencyCode) {
        const currencySymbol = getCurrencySymbol(currencyCode, 'narrow');
        const transformedVal = new Intl.NumberFormat([], { minimumFractionDigits: 0, maximumFractionDigits: 10 }).format(value);
        return `${currencySymbol} ${transformedVal}`;
    }
}
CurrencyPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: CurrencyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CurrencyPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.1.1", ngImport: i0, type: CurrencyPipe, name: "currency" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: CurrencyPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'currency'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL210LXNoYXJlZC9zcmMvbGliL3BpcGUvY3VycmVuY3ktcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUtsRCxNQUFNLE9BQU8sWUFBWTtJQUVyQjtJQUNBLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVSxFQUFFLFlBQW9CO1FBQ3RDLE1BQU0sY0FBYyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRSxNQUFNLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUMscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RILE9BQU8sR0FBRyxjQUFjLElBQUksY0FBYyxFQUFFLENBQUM7SUFDakQsQ0FBQzs7eUdBVFEsWUFBWTt1R0FBWixZQUFZOzJGQUFaLFlBQVk7a0JBSHhCLElBQUk7bUJBQUM7b0JBQ0YsSUFBSSxFQUFFLFVBQVU7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtnZXRDdXJyZW5jeVN5bWJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdjdXJyZW5jeSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjdXJyZW5jeUNvZGU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbmN5U3ltYm9sID0gZ2V0Q3VycmVuY3lTeW1ib2woY3VycmVuY3lDb2RlLCAnbmFycm93Jyk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRWYWwgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoW10sIHttaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMTB9KS5mb3JtYXQodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBgJHtjdXJyZW5jeVN5bWJvbH0gJHt0cmFuc2Zvcm1lZFZhbH1gO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=