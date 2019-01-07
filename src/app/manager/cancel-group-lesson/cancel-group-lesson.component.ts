import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-cancel-group-lesson',
  templateUrl: './cancel-group-lesson.component.html',
  styleUrls: ['./cancel-group-lesson.component.css']
})
export class CancelGroupLessonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }

}
