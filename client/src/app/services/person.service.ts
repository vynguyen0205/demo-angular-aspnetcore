import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../shared/constants";

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersons(): Observable<any> {
    return this.http.get(Constants.apiPersons);
  }

  getPerson(id): Observable<any> {
    return this.http.get(`${Constants.apiPersons}/${id}`);
  }

  addPerson(person): Observable<any> {
    person.personId = 0;
    return this.http.post(Constants.apiPersons, person);
  }

  updatePerson(person): Observable<any> {
    return this.http.put(`${Constants.apiPersons}/${person.personId}`, person);
  }
}
