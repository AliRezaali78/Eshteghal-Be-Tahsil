import { faFileExcel, faSignInAlt, faUserPlus, faKey, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [FontAwesomeModule],
    exports: [FontAwesomeModule]
})
export class FontAwesomeIconsModule {
    constructor(library: FaIconLibrary, faConfig: FaConfig) {
        library.addIcons(faFileExcel);
        library.addIcons(faSignInAlt);
        library.addIcons(faUserPlus);
        library.addIcons(faKey);
        library.addIcons(faPen);
    }
}