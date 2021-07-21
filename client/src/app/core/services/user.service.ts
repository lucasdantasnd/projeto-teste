import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CreateUserModel } from "../models/inputs/create.user.model";
import { resultModel } from "../models/outputs/result.model";
import { UserModel } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(protected http: HttpClient) { }

    protected httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    };


    createUser(createUserModel: CreateUserModel): Observable<resultModel> {
        return this.http.post<resultModel>(`${environment.apiUrl}/users/create`, createUserModel, this.httpOptions);
    }

    updateUser(name: string, email: string) {
        const params = {
            name: name,
            email: email
        };

        return this.http.put<resultModel>(`${environment.apiUrl}/update`, params, this.httpOptions);
    }

    deleteUser(id: string): Observable<resultModel> {
        const params = {
            id: id,
        };

        return this.http.put<resultModel>(`${environment.apiUrl}/users/delete`, params, this.httpOptions);
    }

    getAll(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`${environment.apiUrl}/users/all`)
    }

    getUserById(id: string) {
        return this.http.get<resultModel>(`${environment.apiUrl}/users/${id}`, this.httpOptions);
    }

}