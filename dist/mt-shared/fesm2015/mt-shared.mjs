import * as i0 from '@angular/core';
import { Directive, HostListener, Pipe, NgModule } from '@angular/core';
import { getCurrencySymbol, CommonModule } from '@angular/common';

class AsciiRestrictInputDirective {
    constructor() {
        this.navigationKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Clear', 'Copy', 'Paste'];
    }
    onPaste(event) {
        var _a;
        event.preventDefault();
        const replacement = (_a = event === null || event === void 0 ? void 0 : event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text/plain').replace(/[^\x00-\x7F]/g, '');
        document.execCommand('insertText', false, replacement);
    }
    onKeyDown(event) {
        if (event instanceof KeyboardEvent) {
            if (this.navigationKeys.indexOf(event.key) > -1 || this.isKeyBoardCmd(event)) {
                return;
            }
            if (event.key.charCodeAt(0) > 127) {
                event.preventDefault();
            }
        }
    }
    isKeyBoardCmd(e) {
        return (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || e.ctrlKey;
    }
}
AsciiRestrictInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: AsciiRestrictInputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AsciiRestrictInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.1.1", type: AsciiRestrictInputDirective, selector: "[appAsciiRestrictInput]", host: { listeners: { "paste": "onPaste($event)", "keydown": "onKeyDown($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.1", ngImport: i0, type: AsciiRestrictInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appAsciiRestrictInput]'
                }]
        }], propDecorators: { onPaste: [{
                type: HostListener,
                args: ['paste', ['$event']]
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });

class CurrencyPipe {
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

// TODO: temporary solution. this class should be move to another package.
//  this package only for classes that will be shared among different projects
class PaymentCardRequisitesPipe {
    constructor() {
        this.requisitesRegex = new RegExp('(\\d{4}[-. ]?)(\\d{3}[-. ]?){2}\\d{3}|(\\d{4}[-. ]?)(\\d{6}[-. ]?)\\d{5}|(\\d{4}[-. ]?){3}\\d{4}|(\\d{8}[-. ]?)\\d{10}');
        this.invalidCharsRegex = new RegExp('[\\s.-]+', 'g');
    }
    transform(value, ...args) {
        var _a;
        const requisites = (_a = this.requisitesRegex.exec(value)) === null || _a === void 0 ? void 0 : _a[0];
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

class MtSharedModule {
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

/*
 * Public API Surface of mt-shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AsciiRestrictInputDirective, CurrencyPipe, MtSharedModule, PaymentCardRequisitesPipe };
//# sourceMappingURL=mt-shared.mjs.map
