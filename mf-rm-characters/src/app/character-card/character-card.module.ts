import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CHARACTER_ROUTES } from "./character-card.routes";

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(CHARACTER_ROUTES), CommonModule],
})
export class CharacterCardModule {}

