import { NgModule } from '@angular/core';
import { MessageComponent } from './message/message';
import { NavHeaderComponent } from './nav-header/nav-header';
@NgModule({
	declarations: [MessageComponent,
    NavHeaderComponent],
	imports: [],
	exports: [MessageComponent,
    NavHeaderComponent]
})
export class ComponentsModule {}
