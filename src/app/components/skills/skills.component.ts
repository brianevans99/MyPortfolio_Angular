import { Component, OnInit } from "@angular/core";
import { Skill } from "./skill.model";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    new Skill("HTML5", "fab fa-html5", "#e34f26"),
    new Skill("CSS3", "fab fa-css3", "#1572b6"),
    new Skill("JavaScript", "fab fa-js", "#f7df1e"),
    new Skill("React", "fab fa-react", "#61DAFB"),
    new Skill("Redux", "", "#764abc"),
    new Skill("Node.js", "fab fa-node-js", "#339933"),
    new Skill("RESTful APIs", "fas fa-plug", "#abcdef"),
    new Skill("MongoDB", "", "#47a248"),
    new Skill("Express", "", ""),
    new Skill("WordPress", "fab fa-wordpress", "#21759b"),
    new Skill("Angular", "fab fa-angular", "#d0042f"),
  ];
  constructor() {}

  ngOnInit() {}
}
