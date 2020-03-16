import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ItemComponent } from './item/item.component';
import { AddComponent } from './add/add.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ItemComponent,
        AddComponent
    ]
})

export class ListModule {}