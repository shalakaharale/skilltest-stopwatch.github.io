let timer;
let isRunning = false;
let seconds = 0;

function updateCount() {
  seconds++;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const timeString = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  document.getElementById("stopwatch").textContent = timeString;
}

function startStopWatch() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopButton").textContent = "Start";
  } else {
    timer = setInterval(updateCount, 1000);
    document.getElementById("startStopButton").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  isRunning = false;
  document.getElementById("stopwatch").textContent = "00:00:00";
  document.getElementById("startStopButton").textContent = "Start";
}

document
  .getElementById("startStopButton")
  .addEventListener("click", startStopWatch);
document
  .getElementById("resetButton")
  .addEventListener("click", resetStopwatch);
