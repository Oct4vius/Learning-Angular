import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
