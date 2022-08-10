import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaymentCardRequisitesPipe implements PipeTransform {
    private requisitesRegex;
    private invalidCharsRegex;
    transform(value: any, ...args: any[]): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentCardRequisitesPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PaymentCardRequisitesPipe, "paymentCardRequisites", false>;
}
