// skill template
export class Skill {
  public name: string;
  public icon: string;
  public color: string;

  constructor(name: string, path: string, color: string) {
    this.name = name;
    this.icon = path;
    this.color = color;
  }
}
