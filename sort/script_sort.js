
var array = [];
var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
      icon.src = "images/moon.png";
      
    }
    else{
      icon.src="images/sun.png";
    }
}
let audioCtx = null;

function playNote(freq) {
  if (audioCtx == null) {
    audioCtx = new (AudioContext ||
      webkitAudioContext ||
      window.AudioContext)();
  }
  const dur = 0.1;
  const osc = audioCtx.createOscillator();
  osc.frequency.value = freq;
  osc.start();
  osc.stop(audioCtx.currentTime + dur);
  const node = audioCtx.createGain();
  node.gain.value = 0.1;
  node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);
  osc.connect(node);
  node.connect(audioCtx.destination);
}

function createArray(n) {
  clearBar();
  resetTime();
  resetAlgo();

  for (let i = 0; i <n; i++) {
    array[i] = Math.random() * 130 + 2;
  }
  const bars = document.querySelector(".container");
  console.log(array);

  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.innerText = `${Math.floor(` ${array[i] * 2} `)}`
    bars.appendChild(bar);
  }
}


function clearBar() {
  const bars = document.querySelector(".container");
  bars.innerHTML = "";
}

function swap(bar1, bar2) {
  const a = bar1.innerText
  const b = bar2.innerText
  let temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar1.innerText = b;
  bar2.style.height = temp;
  bar2.innerText = a;
}


function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}


let size = document.querySelector("#arr_size");
size.addEventListener("input", function () {
  createArray(15);
});


let delay = 1000;
let delayElement = document.querySelector("#sort_speed");
delayElement.addEventListener("input", function () {
  delay = 310 - parseInt(delayElement.value);
});


createArray(20);

const newArray = document.querySelector("#new_arr");
newArray.addEventListener("click", function () {
  enableSort();
  enableSize();
  createArray(20);
});

function disableSort() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
}

function enableSort() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
}

function disableSize() {
  document.querySelector("#arr_size").disabled = true;
}

function enableSize() {
  document.querySelector("#arr_size").disabled = false;
}

function disableNewArray() {
  document.querySelector("#new_arr").disabled = true;
}

function enableNewArray() {
  document.querySelector("#new_arr").disabled = false;
}

function resetTime() {
  document.querySelector("#timeExec").textContent = "-";
  document.querySelector("#notation").innerHTML = "-";
}

function displayTime(time, notation) {
  document.querySelector("#timeExec").textContent = time;
  document.querySelector("#notation").innerHTML = notation;
}

function resetAlgo() {
  document.querySelector("#algo").textContent = "Sorting";
}

function displayAlgo(algo) {
  document.querySelector("#algo").textContent = algo;
}