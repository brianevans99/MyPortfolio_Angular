import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
})
export class HomepageComponent implements OnInit {
  tailwind = {
    baseCSS: "cursor-pointer bg-black",
    hover:
      "transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform",
  };

  constructor() {}

  ngOnInit() {}
}
