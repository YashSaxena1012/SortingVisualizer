export function enableButtons() {
    document.getElementById("reset").disabled = false;
    document.getElementById("gen-arr").disabled = false;
    document.getElementById("Bubble Sort").disabled = false;
    document.getElementById("Insertion Sort").disabled = false;
    document.getElementById("Selection Sort").disabled = false;
    document.getElementById("Merge Sort").disabled = false;
    document.getElementById("Quick Sort").disabled = false;
    document.getElementById("elements").disabled = false;
    document.getElementById("speed").disabled = false;
  }
  
  // ## Disables all the buttons ## //
  export function disableButtons() {
    document.getElementById("reset").disabled = true;
    document.getElementById("gen-arr").disabled = true;
    document.getElementById("Bubble Sort").disabled = true;
    document.getElementById("Insertion Sort").disabled = true;
    document.getElementById("Selection Sort").disabled = true;
    document.getElementById("Merge Sort").disabled = true;
    document.getElementById("Quick Sort").disabled = true;
    document.getElementById("elements").disabled=true;
    document.getElementById("speed").disabled=true;
  }
