import {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {getCurrencySymbol} from '@angular/common';

@Pipe({
    name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

    constructor() {
    }

    transform(value: any, currencyCode: string): string | null {
        const currencySymbol = getCurrencySymbol(currencyCode, 'narrow');
        const transformedVal = new Intl.NumberFormat([], {minimumFractionDigits: 0, maximumFractionDigits: 10}).format(value);
        return `${currencySymbol} ${transformedVal}`;
    }

}
