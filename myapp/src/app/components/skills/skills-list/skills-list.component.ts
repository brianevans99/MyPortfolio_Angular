import { Component, OnInit } from "@angular/core";
import { Skill } from "../skill.model";

@Component({
  selector: "app-skills-list",
  templateUrl: "./skills-list.component.html",
  styleUrls: ["./skills-list.component.css"],
})
export class SkillsListComponent implements OnInit {
  skills: Skill[] = [
    new Skill(
      "HTML5",
      "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
    ),
    new Skill(
      "CSS3",
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
    ),
    new Skill(
      "JavaScript",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
