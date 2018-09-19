import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../interceptors/person.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  person;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _personService: PersonService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const personId = params.id;

      if (personId) {
        this._personService.getPerson(personId)
          .subscribe(response => this.person = response);
      }
    })
  }

}
