import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {

    // isOpen property wird an Host Binding gebunden
 @HostBinding('class.open') isOpen = false; //property um zu erkennen, ob der dropedown offen ist
 // Wird an die class open gebunden, damit das Dropdown nicht immer auf ist
 @HostListener('click') toggle(){
    this.isOpen = !this.isOpen; //Der Property wert wird anfangs auf false gesetzt

 }

}
//written by Carolin Bischoping 
