import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public taskData = [
    { image: 'url("../../../assets/images/cenzor.png")',
      name: 'Angular list of prohibited words',
      link: 'cenzor'
    },
    { image: 'url("../../../assets/images/task.png")',
      name: 'Angular task list',
      link: 'task'
    },
    { image: 'url("../../../assets/images/users.png")',
      name: 'Angular users list',
      link: 'users'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
