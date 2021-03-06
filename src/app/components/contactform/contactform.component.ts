import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-contactform",
  templateUrl: "./contactform.component.html",
})
export class ContactFormComponent implements OnInit {
  myForm: FormGroup;

  loading = false;
  success = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phones: this.fb.array([]),
      message: "",
      verify: [false, [Validators.requiredTrue]],
    });
  }

  submitHandler() {
    this.loading = true;
    const formValue = this.myForm.value;

    // logic for submitting values to backend (async/await)

    setTimeout(() => {
      this.loading = false;
      this.success = true;
    }, 1000);
  }

  get phoneForms() {
    return this.myForm.get("phones") as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }

  get name() {
    return this.myForm.get("name");
  }
  get email() {
    return this.myForm.get("email");
  }
  get verify() {
    return this.myForm.get("verify");
  }
}
