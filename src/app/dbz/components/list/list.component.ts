import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter()


  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  DeleteCharacter(id?: string):void {
    if(!id) return;

    this.onDeleteCharacter.emit(id)
  }
}