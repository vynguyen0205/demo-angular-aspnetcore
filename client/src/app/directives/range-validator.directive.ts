import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
  selector: "[range][formControlName],[range][formControl],[range][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RangeValidatorDirective,
      multi: true
    }
  ]
})
export class RangeValidatorDirective implements Validator {
  @Input()
  range: string;

  validate(c: FormControl): { [key: string]: any } {
    let v = c.value;
    let splits = this.range.split("-");
    let from = splits[0];
    let to = splits[1];
    return from > v || v > to ? { "range": true } : null;
  }
}
