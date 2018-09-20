import { Component, OnInit } from "@angular/core";
import { PersonService } from "../../services/person.service";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-list-persons",
  templateUrl: "./list-persons.component.html",
  styleUrls: ["./list-persons.component.css"]
})
export class ListPersonsComponent implements OnInit {
  persons = [];
  personsOriginal = [];
  ready = false;
  searchTerm;
  searchTerm$: Subject<string> = new Subject<string>();

  constructor(private _personService: PersonService) {}

  ngOnInit() {
    this._personService.getPersons().subscribe(response => {
      this.persons = response;
      this.personsOriginal = this.persons;
      this.ready = true;
    });

    // Delay the search, only start searching if user stops typing for more than 500ms
    this.searchTerm$
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(val => {
        this.search(this.searchTerm);
      });
  }

  search(keyword) {
    keyword = keyword.toLowerCase();
    this.persons = this.personsOriginal.filter(
      person =>
        person.name.toLowerCase().indexOf(keyword) != -1 ||
        person.address.toLowerCase().indexOf(keyword) != -1 ||
        person.age.toString().indexOf(keyword) != -1
    );
  }

  reset() {
    this.searchTerm = "";
    this.search(this.searchTerm);
  }

  nextSearch(event) {
    this.searchTerm$.next(event);
  }
}
