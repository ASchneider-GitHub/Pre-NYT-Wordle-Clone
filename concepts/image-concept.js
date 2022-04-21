newScript = document.createElement("script");
newScript.src = "https://ifiles.ga/p/html2canvas.min.js";
newScript.onload = loaded;
document.head.appendChild(newScript);
function loaded() {
  window.septle.listName = "septle";
  window.septle.new();
  document.body.querySelector(".squares").classList.add("photo");
  document.body.querySelector(".squares").classList.remove("fail");
  setTimeout(next,2000);
}
function next() {
  let screenshotTarget = document.body.querySelector(".squares");
  html2canvas(screenshotTarget).then((canvas) => {
    finalPicture(canvas);
  });
}
function finalPicture(canvas) {
  console.log(canvas)
  const base64image = canvas.toDataURL("image/png");
  //window.open(base64image);
  //document.body.innerText = base64image;
  let link = document.createElement("a");
  link.innerText = "Download Image";
  link.href = base64image;
  link.setAttribute("download","septle-306.png");
  link.click();
  //document.body.innerHTML = link.outerHTML;
}
