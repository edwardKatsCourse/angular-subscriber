export class Color {
  private readonly _color: string;

  constructor(color: string) {
    this._color = color;
  }


  get color(): string {
    return this._color;
  }
}
