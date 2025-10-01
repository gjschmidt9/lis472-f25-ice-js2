console.log("utils.js loaded");

/**
 * Returns the number in the principal input box.
 * @returns The number if it exists, else null
 */
function getPrincipal() {
  const inp = document.getElementById("principal").value.trim();
  if (inp === "") {
    return null;
  } else {
    return parseFloat(inp);
  }
}

/**
 * Returns the number in the return rate as a decimal number, e.g. 7% returns 0.07
 * @returns The number if it exists, else null
 */
function getReturnDecimal() {
  const inp = document.getElementById("return-rate").value.trim();
  if (inp === "") {
    return null;
  } else {
    return parseFloat(inp) / 100;
  }
}

/**
 * Returns the number in the number of years input box.
 * @returns The number if it exists, else null
 */
function getNumOfYears() {
  const inp = document.getElementById("num-years").value.trim();
  if (inp === "") {
    return null;
  } else {
    return parseFloat(inp);
  }
}

function updateReturnRateDisplay() {
  document.getElementById("return-rate-display").innerText =
    document.getElementById("return-rate").value + "%";
}

window.onload = updateReturnRateDisplay;
