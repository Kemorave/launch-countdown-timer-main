import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownBoxComponent } from './components/countdown-box/countdown-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
 this.startFlipper(); 
  }
  title = 'launch-countdown-timer-main';
  getLaunchTime(countDownDate: any) {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    if (distance < 0) {
      return { d: -1, h: -1, m: -1, s: -1 };
    }
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    return { d, h, m, s };
  }
  startFlipper() {
    var countDownDate = new Date();
    countDownDate.setHours(countDownDate.getHours() + 24 * 9);
    setInterval(() => {
      this.flipDown('flipper-1', () => {
        return this.getLaunchTime(countDownDate.getTime()).s;
      });
      this.flipDown('flipper-2', () => {
        return this.getLaunchTime(countDownDate.getTime()).m;
      });
      this.flipDown('flipper-3', () => {
        return this.getLaunchTime(countDownDate.getTime()).h;
      });
      this.flipDown('flipper-4', () => {
        return this.getLaunchTime(countDownDate.getTime()).d;
      });
    }, 1200);
  }

  flipDown(flipId: any, getValue: any) {
    let num = getValue();
    if (num < 0) {
      return;
    }

    let val: any = num < 10 ? '0' + num : num.toString();
    let flip: any = document.getElementById(flipId);
    let secFlip: any = flip?.querySelectorAll('.flip-1 ')[0];
    let secFlip2: any = flip?.querySelectorAll('.flip-2 ')[0];
    let tx: any = flip?.querySelectorAll('.tx1 ')[0];
    let tx2: any = flip?.querySelectorAll('.tx2 ')[0];
    let tx3: any = flip?.querySelectorAll('.tx3 ')[0];
    let tx4: any = flip?.querySelectorAll('.tx4 ')[0];
    if (val == tx?.textContent) {
      return;
    }
    for (let index = 0; index <= 180; index++) {
      if (index == 80) {
        (tx! as any).innerText = val;
      }

      setTimeout(() => {
        if (index <= 90) {
          secFlip!.style.transform = `rotateX(${index}deg)  `;
        } else {
          secFlip2.style.transform = `rotateX(${180 - index}deg)  `;
        }
        if (index == 90) {
          tx.innerText = val;
          tx2.innerText = val;
          tx3.innerText = val;
          secFlip.style.transform = `rotateX(${index}deg) `;
        }
        if (getValue && index == 180) {
          secFlip.style.transform = `rotateX(${0}deg)  `;
          secFlip2.style.transform = `rotateX(${90}deg) `;

          tx4.innerText = val;
        }
      }, 100 + index * 5);
    }
  }
}
