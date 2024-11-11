async function bubbleSort() {
  const bar = document.querySelectorAll(".bar");
  for (let i = 0; i < bar.length - 1; i++) {
    for (let j = 0; j < bar.length - i - 1; j++) {
      bar[j].style.background = "lightgreen"; //active bars
      bar[j + 1].style.background = "lightgreen";
      if (
        parseFloat(bar[j].style.height) >= parseFloat(bar[j + 1].style.height)
      ) {
        await waitforme(delay);
        swap(bar[j], bar[j + 1]);
      }
      playNote(300 + array[j] * 2);
      playNote(300 + array[j] * 2);
      bar[j].style.background = "#F7FBFC";
      bar[j + 1].style.background = "#F7FBFC";
    }
    bar[bar.length - 1 - i].style.background = "green";
  }
  bar[0].style.background = "green";
}

const bubblebtn = document.querySelector(".bubbleSort");
bubblebtn.addEventListener("click", async function () {
  let start = new Date().getTime();
  displayAlgo("Bubble Sort");
  disableSort();
  disableSize();
  disableNewArray();
  await bubbleSort();
  enableSort();
  enableSize();
  enableNewArray();
  let end = new Date().getTime();
  let time = (end - start) * 0.001;
  displayTime(time + " s", "O(n<sup>2</sup>)");
});
