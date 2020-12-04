import { Component, OnInit } from "@angular/core";
import { Education } from "./education.model";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
})
export class EducationComponent implements OnInit {
  education: Education[] = [
    new Education("Summer / Fall 2019", "Full Stack Development Certification"),
    new Education(
      "Fall '94 to Spring '99",
      "Bachelor of Civil Engineering Undergraduate Degree"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
