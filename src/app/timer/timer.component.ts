import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {firestore} from 'firebase';
import { AuthguardService } from '../authguard.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  hasStarted: any;
  value: any;
  endValue: any;


  constructor(private route: Router, private authservice: AuthguardService) {
    this.value = firestore.Timestamp.now().toMillis();
    const timer = setInterval(function() {
      this.endValue = firestore.Timestamp.fromDate(new Date('Jun 25, 2019 00:25:00')).toMillis();
      this.value = firestore.Timestamp.now().toMillis();
      this.t = +(this.endValue - this.value);
      if (this.t >= 0) {
        const days = Math.floor(this.t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((this.t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((this.t % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((this.t % (1000 * 60)) / 1000);

        document.getElementById('timer-days').innerHTML = days +
          '<span class="label">Day-</span>';

        document.getElementById('timer-hours').innerHTML = ('0' + hours).slice(-2) +
          '<span class="label">Hour-</span>';

        document.getElementById('timer-mins').innerHTML = ('0' + mins).slice(-2) +
          '<span class="label">Min-</span>';

        document.getElementById('timer-secs').innerHTML = ('0' + secs).slice(-2) +
          '<span class="label">Sec</span>';

      } else {
        clearInterval(timer);
        authservice.setCanRoute(1);
        route.navigate(['home']);
      }
    }, 1000);
  }
  ngOnInit() {
    this.hasStarted = true;
  }

}
