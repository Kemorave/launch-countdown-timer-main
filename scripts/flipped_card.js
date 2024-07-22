function startFlipper() {
  let i = 0;
  {
    i++;
      flipDown("flip-1", "flip-2", "tx", "tx1", "tx2", "tx3", i, () => { });
  }
}

function flipDown(id, id2, txId, tx2Id, tx3Id, tx4Id, num, onEnd) {
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
    if (index == 90) {
      setTimeout(() => {
        if (index <= 90) {
          secFlip2.style.transform = `rotateX(${index}deg) rotateY(${
            index >= 90 ? 90 : 0
          }deg)`;
        }
        if (index == 90) {
          tx.innerText = val;
          tx2.innerText = val;
          tx3.innerText = val;
          secFlip.style.transform = `rotateX(${index}deg) rotateY(${180}deg)`;
        }
        if (onEnd && index == 180) {
          onEnd();
          secFlip.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
        }
      }, 200 + index * 10);
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
      if (onEnd && index == 180) {
        secFlip.style.transform = `rotateX(${0}deg)  `;
        secFlip2.style.transform = `rotateX(${90}deg) `;

        tx4.innerText = val;
        flipDown(id, id2, txId, tx2Id, tx3Id, tx4Id, ++num, onEnd);
      }
    }, 200 + index * 10);
  }
}
