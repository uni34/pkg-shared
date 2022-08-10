import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
// TODO: temporary solution. this class should be move to another package.
//  this package only for classes that will be shared among different projects
export class PaymentCardRequisitesPipe {
    constructor() {
        this.requisitesRegex = new RegExp('(\\d{4}[-. ]?)(\\d{3}[-. ]?){2}\\d{3}|(\\d{4}[-. ]?)(\\d{6}[-. ]?)\\d{5}|(\\d{4}[-. ]?){3}\\d{4}|(\\d{8}[-. ]?)\\d{10}');
        this.invalidCharsRegex = new RegExp('[\\s.-]+', 'g');
    }
    transform(value, ...args) {
        const requisites = this.requisitesRegex.exec(value)?.[0];
        if (requisites) {
            const transformedRequisites = requisites.replace(this.invalidCharsRegex, '');
            return value.replace(requisites, transformedRequisites);
        }
        return value;
    }
}
PaymentCardRequisitesPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: PaymentCardRequisitesPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PaymentCardRequisitesPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.1.1", ngImport: i0, type: PaymentCardRequisitesPipe, name: "paymentCardRequisites" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: PaymentCardRequisitesPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'paymentCardRequisites'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLXJlcXVpc2l0ZXMtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL210LXNoYXJlZC9zcmMvbGliL3BpcGUvcGF5bWVudC1jYXJkLXJlcXVpc2l0ZXMtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUVuQywwRUFBMEU7QUFDMUUsOEVBQThFO0FBSTlFLE1BQU0sT0FBTyx5QkFBeUI7SUFIdEM7UUFLWSxvQkFBZSxHQUFHLElBQUksTUFBTSxDQUNoQyx3SEFBd0gsQ0FDM0gsQ0FBQztRQUNNLHNCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQVUzRDtJQVJHLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBRyxJQUFXO1FBQ2hDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxVQUFVLEVBQUU7WUFDWixNQUFNLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQztTQUMzRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7O3NIQWRRLHlCQUF5QjtvSEFBekIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBSHJDLElBQUk7bUJBQUM7b0JBQ0YsSUFBSSxFQUFFLHVCQUF1QjtpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gVE9ETzogdGVtcG9yYXJ5IHNvbHV0aW9uLiB0aGlzIGNsYXNzIHNob3VsZCBiZSBtb3ZlIHRvIGFub3RoZXIgcGFja2FnZS5cclxuLy8gIHRoaXMgcGFja2FnZSBvbmx5IGZvciBjbGFzc2VzIHRoYXQgd2lsbCBiZSBzaGFyZWQgYW1vbmcgZGlmZmVyZW50IHByb2plY3RzXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdwYXltZW50Q2FyZFJlcXVpc2l0ZXMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50Q2FyZFJlcXVpc2l0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZXF1aXNpdGVzUmVnZXggPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICcoXFxcXGR7NH1bLS4gXT8pKFxcXFxkezN9Wy0uIF0/KXsyfVxcXFxkezN9fChcXFxcZHs0fVstLiBdPykoXFxcXGR7Nn1bLS4gXT8pXFxcXGR7NX18KFxcXFxkezR9Wy0uIF0/KXszfVxcXFxkezR9fChcXFxcZHs4fVstLiBdPylcXFxcZHsxMH0nXHJcbiAgICApO1xyXG4gICAgcHJpdmF0ZSBpbnZhbGlkQ2hhcnNSZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxccy4tXSsnLCAnZycpO1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRlcyA9IHRoaXMucmVxdWlzaXRlc1JlZ2V4LmV4ZWModmFsdWUpPy5bMF07XHJcbiAgICAgICAgaWYgKHJlcXVpc2l0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRSZXF1aXNpdGVzID0gcmVxdWlzaXRlcy5yZXBsYWNlKHRoaXMuaW52YWxpZENoYXJzUmVnZXgsICcnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UocmVxdWlzaXRlcywgdHJhbnNmb3JtZWRSZXF1aXNpdGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==