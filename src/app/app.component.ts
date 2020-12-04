import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("routeAnimation", [
      transition("* <=> *", [
        style({ height: "!" }),
        query(":enter", style({ transform: "translateX(100%)" })),
        query(
          ":enter, :leave",
          style({ position: "absolute", top: 0, left: 0, right: 0 })
        ),
        // animate :leave away
        group([
          query(":leave", [
            animate(
              "0.3s cubic-bezier(.35,0,.25,1)",
              style({ transform: "translateX(-100%)" })
            ),
          ]),
          // animate :enter in
          query(
            ":enter",
            animate(
              "0.3s cubic-bezier(.35,0,.25,1)",
              style({ transform: "translateX(0)" })
            )
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  getDepth(outlet) {
    return outlet.activatedRouteData["depth"];
  }
}
