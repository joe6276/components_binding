import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  name:string=''
  email:string=''
  @Output() addS=new EventEmitter<{studentName:string, studentEmail:string}>()
  @Output()  addT=new EventEmitter<{studentName:string, studentEmail:string}>()


  addStudent(){
    this.addS.emit({
      studentName:this.name,studentEmail:this.email
    })

  }
  addTeacher(){
    this.addT.emit({
      studentName:this.name,studentEmail:this.email
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
