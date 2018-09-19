import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../../interceptors/person.service";
import { MatSnackBar } from "@angular/material";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-update-person",
  templateUrl: "./update-person.component.html",
  styleUrls: ["./update-person.component.css"]
})
export class UpdatePersonComponent implements OnInit {
  person;
  submitting = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _personService: PersonService,
    private _router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const personId = params.id;

      if (personId) {
        this._personService
          .getPerson(personId)
          .subscribe(response => (this.person = response));
      }
    });
  }

  onSubmit(form: NgForm) {
    this.submitting = true;
    this._personService.updatePerson(form.value).subscribe(res => {
      this.submitting = false;
      this._router.navigate(["/"]);
      this.snackBar.open("This person was updated successfully.", null, {
        duration: 2000
      });
    });
  }
}
