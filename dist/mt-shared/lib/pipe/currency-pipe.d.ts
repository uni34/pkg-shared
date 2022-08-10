import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CurrencyPipe implements PipeTransform {
    constructor();
    transform(value: any, currencyCode: string): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyPipe, "currency", false>;
}
