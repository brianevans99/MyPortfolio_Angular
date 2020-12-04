import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
})
export class InfoComponent implements OnInit {
  personalInfo = [
    "const",
    "info",
    "=",
    "{",
    "name:",
    "'Brian Evans',",
    "title:",
    "'Full Stack Web Developer'",
    "}",
  ];
  constructor() {}

  ngOnInit() {}
}
