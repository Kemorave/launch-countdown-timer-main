function getLaunchTime(countDownDate) {
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
function startFlipper() {
  var countDownDate = new Date();
  countDownDate.setHours(countDownDate.getHours() + 24*9);
setInterval(() => {
    flipDown("flipper-1", () => {
    return getLaunchTime(countDownDate.getTime()).s;
  });
  flipDown("flipper-2", () => {
    return getLaunchTime(countDownDate.getTime()).m;
  });  flipDown("flipper-3", () => {
    return getLaunchTime(countDownDate.getTime()).h;
  }); flipDown("flipper-4", () => {
    return getLaunchTime(countDownDate.getTime()).d;
  });
}, 1200);

}

function flipDown(flipId, getValue) {
  let num = getValue();
  if (num < 0) {
    return;
  }
   
  let val = num < 10 ? "0" + num : num.toString();
  let flip = document.getElementById(flipId);
  let secFlip = flip.querySelectorAll(".flip-1 ")[0];
  let secFlip2 = flip.querySelectorAll(".flip-2 ")[0];
  let tx = flip.querySelectorAll(".tx1 ")[0];
  let tx2 = flip.querySelectorAll(".tx2 ")[0];
  let tx3 = flip.querySelectorAll(".tx3 ")[0];
  let tx4 = flip.querySelectorAll(".tx4 ")[0];
  if (val==tx.textContent) {
    return;
  }
  for (let index = 0; index <= 180; index++) {
    if (index == 80) {
      tx.innerText = val;
    }

    setTimeout(() => {
      if (index <= 90) {
        secFlip.style.transform = `rotateX(${index}deg)  `;
      } else {
        secFlip2.style.transform = `rotateX(${180 - index}deg)  `;
      }
      if (index == 90) {
        tx.innerText = val;
        tx2.innerText = val;
        tx3.innerText = val;
        secFlip.style.transform = `rotateX(${index}deg) rotateY(${180}deg)`;
      }
      if (getValue && index == 180) {
        secFlip.style.transform = `rotateX(${0}deg)  `;
        secFlip2.style.transform = `rotateX(${90}deg) `;

        tx4.innerText = val;

      }
    }, 100 + index * 5);
  }
}
