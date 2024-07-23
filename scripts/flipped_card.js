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
  countDownDate.setHours(countDownDate.getHours() + 8);

  flipDown("flip-1", "flip-2", "tx", "tx1", "tx2", "tx3", () => {
    return getLaunchTime(countDownDate.getTime()).s;
  });
}

function flipDown(id, id2, txId, tx2Id, tx3Id, tx4Id, getValue) {
  let num = getValue();
  if (num < 0) {
    return;
  }
  let val = num < 10 ? "0" + num : num.toString();
  let secFlip = document.getElementById(id);
  let secFlip2 = document.getElementById(id2);
  let tx = document.getElementById(txId);
  let tx2 = document.getElementById(tx2Id);
  let tx3 = document.getElementById(tx3Id);
  let tx4 = document.getElementById(tx4Id);
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

        flipDown(id, id2, txId, tx2Id, tx3Id, tx4Id, getValue);
      }
    }, 100 + index * 5);
  }
}
