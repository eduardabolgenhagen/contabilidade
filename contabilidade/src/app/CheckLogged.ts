import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "./services/usuario.service"

@Injectable()

export class CheckLogged implements CanActivate {
    constructor(
        private router: Router,
         private usuarios: UsuarioService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        let ID = localStorage.getItem("ID")
        let Google = localStorage.getItem("google?");
        if (ID || Google) {
            return true;
        } else {
            this.router.navigate(['/'])
            return false;
        }
    }
}