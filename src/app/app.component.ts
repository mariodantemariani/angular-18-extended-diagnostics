import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  template: `
    <!-- NG8101
     <input ([ngModel])="(ng8101)" /> //Incorrect
    <input [(ngModel)]="ng8101" />//correct  -->
    <!-- ng8102 -->
    <!-- {{ ng8102 ?? 'default' }} //
    incorrect {{ ng8102 }}//correct -->
    <!-- ng8103  -->
    <!-- <div *ngIf="visibleNg8103">{{ ng8103 }}</div> -->
    <!-- ng8104 -->
    <!-- <div attr.id="ng8104_id">incorrect</div>
    <div [attr.id]="ng8104_id">Correct</div> -->
    <!-- ng8105 -->
    <!-- <li *ngFor="item; of: items"> incorrect:{{ item }}</li>
    <li *ngFor="let item of items">correct:{{ item }}</li> -->
    <!-- ng8106 -->
    <!-- <img src="incorrect" [attr.width.px]="ng8106" />
    <img src="correct" [attr.width]="ng8106" /> -->
    <!-- ng8107 -->
    <!-- <div>Incorrect: {{ ng8107?.name }}</div>
    <div>Correct: {{ ng8107.name }}</div> -->
    <!-- ng8109 -->
    <!-- <div>{{ ng8109 }}Incorrect</div>
    <div>{{ ng8109() }}Correct</div> -->

    <!-- ng8111 -->
    <!-- <button (click)="(handleClick)">Incorrect</button>
    <button (click)="handleClick()">Correct</button> -->
    <!-- NG8112: unusedLetDeclaration -->
    <!-- @let incorrect =''; @let correct ='';
    <div>{{ correct }}</div> -->
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //ng8101
  ng8101 = 'NG8101';

  //ng8102
  ng8102: string = 'ng8102';

  //ng8103
  visibleNg8103 = true;
  ng8103: string = 'ng8103'; //should import from @angular/core

  //ng8104
  ng8104_id = 'ng8104';

  //ng8105
  items = ['item1', 'item2', 'item3'];

  //ng8106
  ng8106 = 5;

  //ng8107
  ng8107: { name: string } = { name: 'ng8107' };

  //ng8109
  ng8109: Signal<number> = signal(8109);

  //ng8111
  handleClick() {
    console.log('clicked');
  }
}
