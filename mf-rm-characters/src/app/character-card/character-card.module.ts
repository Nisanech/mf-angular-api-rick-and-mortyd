import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CHARACTER_ROUTES } from "./character-card.routes";
import { CharacterCardComponent } from "./character-card.component";

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(CHARACTER_ROUTES), CommonModule],
  exports: [RouterModule]
})
export class CharacterCardModule {}

