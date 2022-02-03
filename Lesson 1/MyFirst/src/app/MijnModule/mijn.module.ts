import { NgModule } from '@angular/core';
import { MijnComonent } from './mijn.component';
import { MijnDirective } from './mijn.directive';

@NgModule({
    declarations:[MijnComonent, MijnDirective],
    exports:[MijnComonent, MijnDirective]
})
export class MijnModule
{

}