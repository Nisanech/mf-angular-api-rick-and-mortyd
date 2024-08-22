import { Routes } from "@angular/router"
import { CharacterCardComponent } from "./character-card/character-card.component";

export const MFE1_ROUTES: Routes = [
  {
    path: "",
    component: CharacterCardComponent,
    pathMatch: "full"
  }
]