import { Component, OnInit } from "@angular/core";
import { Interest } from "../interest.model";

@Component({
  selector: "app-interests-list",
  templateUrl: "./interests-list.component.html",
  styleUrls: ["./interests-list.component.css"],
})
export class InterestsListComponent implements OnInit {
  interests: Interest[] = [
    new Interest("Options trading"),
    new Interest("Fishing with my daughters"),
    new Interest("College & pro football"),
    new Interest("Piano playing"),
    new Interest("Making videos"),
    new Interest("Current show: Cobra Kai"),
  ];

  constructor() {}

  ngOnInit() {}
}
