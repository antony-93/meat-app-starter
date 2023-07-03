import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import { tap, filter } from "rxjs/operators";
import { User } from "./user.model";

import { NavigationEnd, Router } from "@angular/router";


@Injectable()
export class LoginService {

    user: User
    lastUrl: string

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/users/login`, { email: email, password: password })
            .pipe(tap(user => this.user = user))
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)])
    }

    logOut() {
        this.user = undefined
    }
}