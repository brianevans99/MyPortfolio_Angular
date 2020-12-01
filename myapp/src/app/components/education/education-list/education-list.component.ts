import { Component, OnInit } from "@angular/core";
import { Education } from "../education.model";

@Component({
  selector: "app-education-list",
  templateUrl: "./education-list.component.html",
  styleUrls: ["./education-list.component.css"],
})
export class EducationListComponent implements OnInit {
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
