import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class AsciiRestrictInputDirective {
    constructor() {
        this.navigationKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Clear', 'Copy', 'Paste'];
    }
    onPaste(event) {
        event.preventDefault();
        const replacement = event?.clipboardData?.getData('text/plain').replace(/[^\x00-\x7F]/g, '');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNjaWktcmVzdHJpY3QtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXQtc2hhcmVkL3NyYy9saWIvZGlyZWN0aXZlL2FzY2lpLXJlc3RyaWN0LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTywyQkFBMkI7SUFIeEM7UUFLWSxtQkFBYyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztLQTJCbEo7SUF4QkcsT0FBTyxDQUFDLEtBQXFCO1FBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBR0QsU0FBUyxDQUFDLEtBQVk7UUFDbEIsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFFLE9BQU87YUFDVjtZQUNELElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUFFTyxhQUFhLENBQUMsQ0FBZ0I7UUFDbEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3BFLENBQUM7O3dIQTVCUSwyQkFBMkI7NEdBQTNCLDJCQUEyQjsyRkFBM0IsMkJBQTJCO2tCQUh2QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3RDOzhCQU1HLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBUWpDLFNBQVM7c0JBRFIsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYXBwQXNjaWlSZXN0cmljdElucHV0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFzY2lpUmVzdHJpY3RJbnB1dERpcmVjdGl2ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0aW9uS2V5cyA9IFsnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdUYWInLCAnRXNjYXBlJywgJ0VudGVyJywgJ0hvbWUnLCAnRW5kJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0NsZWFyJywgJ0NvcHknLCAnUGFzdGUnXTtcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXHJcbiAgICBvblBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBldmVudD8uY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dC9wbGFpbicpLnJlcGxhY2UoL1teXFx4MDAtXFx4N0ZdL2csICcnKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCByZXBsYWNlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBvbktleURvd24oZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uYXZpZ2F0aW9uS2V5cy5pbmRleE9mKGV2ZW50LmtleSkgPiAtMSB8fCB0aGlzLmlzS2V5Qm9hcmRDbWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleS5jaGFyQ29kZUF0KDApID4gMTI3KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNLZXlCb2FyZENtZChlOiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChlLmtleUNvZGUgPT09IDY1ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHxcclxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gNjcgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fFxyXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8XHJcbiAgICAgICAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgZS5jdHJsS2V5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==