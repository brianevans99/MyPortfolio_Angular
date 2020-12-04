import { Component, OnInit } from "@angular/core";
import { Contact } from "./contact.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
})
export class ContactComponent implements OnInit {
  contactInfo: Contact[] = [
    new Contact("envelope-open", "brianevans99@gmail.com"),
    new Contact("phone", "404.985.7506"),
  ];

  constructor() {}

  ngOnInit() {}
}
