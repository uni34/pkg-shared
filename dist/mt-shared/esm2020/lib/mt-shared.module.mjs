import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsciiRestrictInputDirective } from './directive/ascii-restrict-input.directive';
import { CurrencyPipe } from './pipe/currency-pipe';
import { PaymentCardRequisitesPipe } from './pipe/payment-card-requisites-pipe';
import * as i0 from "@angular/core";
export class MtSharedModule {
}
MtSharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: MtSharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MtSharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.1", ngImport: i0, type: MtSharedModule, declarations: [AsciiRestrictInputDirective,
        CurrencyPipe,
        PaymentCardRequisitesPipe], imports: [CommonModule], exports: [AsciiRestrictInputDirective,
        CurrencyPipe,
        PaymentCardRequisitesPipe] });
MtSharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: MtSharedModule, providers: [
        CurrencyPipe,
        PaymentCardRequisitesPipe
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: MtSharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AsciiRestrictInputDirective,
                        CurrencyPipe,
                        PaymentCardRequisitesPipe
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        CurrencyPipe,
                        PaymentCardRequisitesPipe
                    ],
                    exports: [
                        AsciiRestrictInputDirective,
                        CurrencyPipe,
                        PaymentCardRequisitesPipe
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXQtc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL210LXNoYXJlZC9zcmMvbGliL210LXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDdkYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDOztBQXNCOUUsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFqQnZCLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1oseUJBQXlCLGFBR3pCLFlBQVksYUFPWiwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLHlCQUF5Qjs0R0FHaEIsY0FBYyxhQVZkO1FBQ1QsWUFBWTtRQUNaLHlCQUF5QjtLQUMxQixZQUxDLFlBQVk7MkZBWUgsY0FBYztrQkFuQjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDJCQUEyQjt3QkFDM0IsWUFBWTt3QkFDWix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVCxZQUFZO3dCQUNaLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjt3QkFDM0IsWUFBWTt3QkFDWix5QkFBeUI7cUJBQzFCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QXNjaWlSZXN0cmljdElucHV0RGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZS9hc2NpaS1yZXN0cmljdC1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtDdXJyZW5jeVBpcGV9IGZyb20gJy4vcGlwZS9jdXJyZW5jeS1waXBlJztcbmltcG9ydCB7UGF5bWVudENhcmRSZXF1aXNpdGVzUGlwZX0gZnJvbSAnLi9waXBlL3BheW1lbnQtY2FyZC1yZXF1aXNpdGVzLXBpcGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFzY2lpUmVzdHJpY3RJbnB1dERpcmVjdGl2ZSxcbiAgICBDdXJyZW5jeVBpcGUsXG4gICAgUGF5bWVudENhcmRSZXF1aXNpdGVzUGlwZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEN1cnJlbmN5UGlwZSxcbiAgICBQYXltZW50Q2FyZFJlcXVpc2l0ZXNQaXBlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBc2NpaVJlc3RyaWN0SW5wdXREaXJlY3RpdmUsXG4gICAgQ3VycmVuY3lQaXBlLFxuICAgIFBheW1lbnRDYXJkUmVxdWlzaXRlc1BpcGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNdFNoYXJlZE1vZHVsZSB7XG59XG4iXX0=