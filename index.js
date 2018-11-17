function init() {
  var contentElement = document.querySelector("#content");
  setInterval(function() {
    var date = new Date();
    contentElement.innerText =
      date.toDateString() + " : " + date.toLocaleTimeString();
  }, 1000);
}

window.addEventListener("load", init);
