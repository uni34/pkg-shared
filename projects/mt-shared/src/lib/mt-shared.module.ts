import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsciiRestrictInputDirective} from './directive/ascii-restrict-input.directive';
import {CurrencyPipe} from './pipe/currency-pipe';
import {PaymentCardRequisitesPipe} from './pipe/payment-card-requisites-pipe';


@NgModule({
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
})
export class MtSharedModule {
}
