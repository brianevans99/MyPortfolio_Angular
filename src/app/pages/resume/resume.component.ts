import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
})
export class ResumeComponent implements OnInit {
  tailwind = {
    baseCSS: "cursor-pointer bg-black",
    hover:
      "transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform",
    headTextCSS:
      "font-mono font-bold text-center text-2xl leading-snug capitalize",
  };

  constructor() {}

  ngOnInit() {}
}
