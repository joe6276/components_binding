import { Component, OnInit } from '@angular/core';

import { Scholar } from '../interfaces/scholar.interface';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  scholars:Scholar[]=[]

  addTeachers(teacherEvent:{studentName:string, studentEmail:string}){

    this.scholars.push({
      role:'Teacher',
      name:teacherEvent.studentName,
      email:teacherEvent.studentEmail
    })

  }
  addStudents(studentEvent:{studentName:string, studentEmail:string}){
    this.scholars.push({
      role:'Student',
      name:studentEvent.studentName,
      email:studentEvent.studentEmail
    })

  }
  constructor() {
    console.log(this.scholars)
   }

  ngOnInit(): void {
  }

}
