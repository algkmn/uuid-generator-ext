const uuidInput = document.getElementById("uuidInput"),
  generateButton = document.getElementById('generateButton'),
  copyButton = document.getElementById('copyButton');
let messageBox = document.getElementById('messageBox')

const generateUUID = () => {
  // via https://stackoverflow.com/a/2117523/999633
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

const fillInput = () => uuidInput.value = generateUUID()

const closeWindow = (timeout = 0) => setTimeout(window.close, timeout);

const copyInputText = () => {
  uuidInput.select()
  document.execCommand("copy")
}

const showCopyMessage = (timeout = 0) => {
  messageBox.style.display = "flex";
  setTimeout(() => messageBox.style.display = "none", timeout)
}

window.onload = fillInput

generateButton.onclick = fillInput

copyButton.onclick = () => {
  copyInputText()
  closeWindow()
}

uuidInput.onclick = () => {
  copyInputText()
  showCopyMessage(2000)
}
