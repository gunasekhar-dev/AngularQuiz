import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  startQuiz() {
    localStorage.setItem('username', this.nameKey.nativeElement.value);
  }
}
