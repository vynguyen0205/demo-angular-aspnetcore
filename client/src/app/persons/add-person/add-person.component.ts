import { Component, OnInit } from "@angular/core";
import { PersonService } from "../../services/person.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-add-person",
  templateUrl: "./add-person.component.html",
  styleUrls: ["./add-person.component.css"]
})
export class AddPersonComponent implements OnInit {
  submitting = false;

  constructor(
    private _personService: PersonService,
    private _router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.submitting = true;
    this._personService.addPerson(form.value).subscribe(res => {
      this.submitting = false;
      this._router.navigate(["/"]);
      this.snackBar.open("New person was added successfully.", null, {
        duration: 2000
      });
    });
  }
}
