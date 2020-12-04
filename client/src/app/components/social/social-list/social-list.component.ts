import { Component, OnInit } from "@angular/core";
import { Icon } from "../social.model";

@Component({
  selector: "app-social-list",
  templateUrl: "./social-list.component.html",
})
export class SocialListComponent implements OnInit {
  icons: Icon[] = [
    new Icon(
      "https://www.linkedin.com/in/brianevans99",
      "text-blue-600 hover:text-blue-700",
      "linkedin"
    ),
    new Icon(
      "https://www.github.com/brianevans99",
      "text-yellow-600 hover:text-yellow-700",
      "github"
    ),
    new Icon(
      "https://www.instagram.com/brian_evans99",
      "text-pink-600 hover:text-pink-700",
      "instagram"
    ),
    new Icon(
      "https://www.facebook.com/brianevans99",
      "text-blue-800 hover:text-blue-900",
      "facebook"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
