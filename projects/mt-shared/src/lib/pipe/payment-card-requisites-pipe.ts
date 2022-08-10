import {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

// TODO: temporary solution. this class should be move to another package.
//  this package only for classes that will be shared among different projects
@Pipe({
    name: 'paymentCardRequisites'
})
export class PaymentCardRequisitesPipe implements PipeTransform {

    private requisitesRegex = new RegExp(
        '(\\d{4}[-. ]?)(\\d{3}[-. ]?){2}\\d{3}|(\\d{4}[-. ]?)(\\d{6}[-. ]?)\\d{5}|(\\d{4}[-. ]?){3}\\d{4}|(\\d{8}[-. ]?)\\d{10}'
    );
    private invalidCharsRegex = new RegExp('[\\s.-]+', 'g');

    transform(value: any, ...args: any[]): any {
        const requisites = this.requisitesRegex.exec(value)?.[0];
        if (requisites) {
            const transformedRequisites = requisites.replace(this.invalidCharsRegex, '');
            return value.replace(requisites, transformedRequisites);
        }
        return value;
    }
}
