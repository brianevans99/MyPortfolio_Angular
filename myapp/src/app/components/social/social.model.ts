export class Icon {
  public urlLink: string;
  public class: string;
  public icon: string;

  constructor(urlLink: string, className: string, icon: string) {
    this.urlLink = urlLink;
    this.class = className;
    this.icon = icon;
  }
}
