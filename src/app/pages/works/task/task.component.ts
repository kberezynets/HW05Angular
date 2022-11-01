import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {
  public inputTask!: string;
  public task = '';
  public taskData = [
    { name: 'HTML5', check: true},
    { name: 'Angular', check: false},
    { name: 'JavaScript', check: false}
  ]

  public count = this.taskData.length;
  public status!: string;
  public editStatus = false;
  public editIndex!: number;
  public editValue!: string;
  public minusTask = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  addTask (): void {
    this.task = this.inputTask;
    this.inputTask = '';
    let newTask = { name: this.task, check: false}
    this.taskData.push(newTask);
    this.count = this.taskData.length;
  }

  deleteTask(index: number): void{
    this.taskData.splice(index, 1);
    this.count = this.taskData.length;
  }

  editTask(index: number): void{
    this.editStatus = true;
    this.editIndex = index;
    this.editValue = this.taskData[index].name;
  }

  saveEdit(): void{
    this.taskData[this.editIndex].name = this.editValue;
    this.editValue ='';
    this.editStatus = false;
  }
}