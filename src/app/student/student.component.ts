import { Component, OnInit,Input } from '@angular/core';
import { Scholar } from '../interfaces/scholar.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() ascholar? :Scholar;

  constructor() {
    console.log(this.ascholar)
   }

  ngOnInit(): void {
  }

}
