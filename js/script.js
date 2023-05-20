function removeExtraSpaces() {
  var inputText = document.getElementById("inputText").value;
  var trimmedText = inputText.replace(/\s+/g, " ").trim();
  document.getElementById("outputText").value = trimmedText;
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}