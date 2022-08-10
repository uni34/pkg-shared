import {Directive} from '@angular/core';
import {HostListener} from '@angular/core';

@Directive({
    selector: '[appAsciiRestrictInput]'
})
export class AsciiRestrictInputDirective {

    private navigationKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Clear', 'Copy', 'Paste'];

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent) {
        event.preventDefault();
        const replacement = event?.clipboardData?.getData('text/plain').replace(/[^\x00-\x7F]/g, '');
        document.execCommand('insertText', false, replacement);
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: Event) {
        if (event instanceof KeyboardEvent) {
            if (this.navigationKeys.indexOf(event.key) > -1 || this.isKeyBoardCmd(event)) {
                return;
            }
            if (event.key.charCodeAt(0) > 127) {
                event.preventDefault();
            }
        }
    }

    private isKeyBoardCmd(e: KeyboardEvent): boolean {
        return (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || e.ctrlKey;
    }
}
