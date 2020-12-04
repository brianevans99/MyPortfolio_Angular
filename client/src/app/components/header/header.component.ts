import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  urlName1: string = "home";
  urlPath1: string = "";
  urlIcon1: string = "home";
  urlName2: string = "portfolio";
  urlPath2: string = "/portfolio";
  urlIcon2: string = "folder";
  urlName3: string = "resume";
  urlPath3: string = "/resume";
  urlIcon3: string = "file";
  urlName4: string = "contact me";
  urlPath4: string = "/contact";
  urlIcon4: string = "envelope";
  constructor() {}

  ngOnInit() {}
}
