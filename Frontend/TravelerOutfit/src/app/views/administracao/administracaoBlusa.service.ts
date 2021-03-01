import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import AdministracaoBlusa from './administracaoBlusa'


@Injectable({
    providedIn: 'root',
})

export class AdministracaoBlusaService {

    protected url = 'http://localhost:8080/api/administracaoBlusas';

    constructor(protected http: HttpClient) { }

    findaAll(): Observable<AdministracaoBlusa[]> {
        return this.http.get<AdministracaoBlusa[]>(this.url);
    }

    findById(id: number): Observable<AdministracaoBlusa> {
        return this.http.get<AdministracaoBlusa>(`${this.url}/${id}`);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    save(data: AdministracaoBlusa): Observable<AdministracaoBlusa> {
        if (data.id) {
            return this.http.put<AdministracaoBlusa>(this.url, data);
        } else {
            return this.http.post<AdministracaoBlusa>(this.url, data);
        }
    }


}