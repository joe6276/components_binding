import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  name:string=''
  email:string=''
  role:string=''
  @Output() addS=new EventEmitter<{studentName:string, studentEmail:string ,role:string}>()
  // @Output()  addT=new EventEmitter<{studentName:string, studentEmail:string,role:string}>()


  // addStudent(){
  //   this.addS.emit({
  //     studentName:this.name,studentEmail:this.email, role:this.role
  //   })

  // }
  addTeacher(){
    this.addS.emit({
      studentName:this.name,studentEmail:this.email, role:this.role
   
    })

    console.log(this.name,this.email,this.role)
  }
  constructor() {
  
   }
   
  ngOnInit(): void {
  }

}
