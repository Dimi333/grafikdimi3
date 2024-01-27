import {Route} from "@angular/router";


export const ROUTES: Route[] = [
  {path: '', pathMatch: "full", loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
  {path: 'work', pathMatch: "full", loadComponent: () => import('./portfolio/portfolio.component').then(mod => mod.PortfolioComponent)},
  {path: 'about', pathMatch: "full", loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent)},
  {path: 'links', pathMatch: "full", loadComponent: () => import('./links/links.component').then(mod => mod.LinksComponent)},
  {path: 'contact', pathMatch: "full", loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent)},
]
