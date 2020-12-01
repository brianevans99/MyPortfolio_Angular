import { Component, OnInit } from "@angular/core";
import { Project } from "../project.model";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.css"],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [
    new Project(
      "Bravo Echo Web Development",
      "",
      "https://github.com/brianevans99/BravoEcho",
      "http://www.bravoechoweb.com",
      "As a sole proprietor, my passion is to provide small businesses with a web presence that is eye-catching, marketable and affordable. Built with NodeJS, React and a few CSS tricks."
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
