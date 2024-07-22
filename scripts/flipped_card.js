function startFlipper() {
  flipDown("flip-1", "tx", "tx1", "123456788"); 
}
function flipDown(id, txId, tx2Id, val) {
  let secFlip = document.getElementById(id);
  let tx = document.getElementById(txId);
  let tx2 = document.getElementById(tx2Id);
  for (let index = 0; index < 180; index++) {
    if (index == 90) {
      tx.innerText = val;
      tx2.innerText = val;
    }
    setTimeout(() => {
      secFlip.style.transform = `rotateX(${index}deg) rotateY(${
        index >= 90 ? 90 : 0
      }deg)`;
    }, 200 + index * 10);
  }
}
