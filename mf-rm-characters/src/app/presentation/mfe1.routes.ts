import { Routes } from "@angular/router"
import { CharacterCardComponent } from "./shared/components/character-card/character-card.component"
import { CharacterTableComponent } from "./shared/components/character-table/character-table.component"


export const MFE1_ROUTES: Routes = [
  {
    path: "character-card",
    component: CharacterCardComponent,
    pathMatch: "full"
  },
  {
    path: "character-table",
    component: CharacterTableComponent,
    pathMatch: "full"
  },
]