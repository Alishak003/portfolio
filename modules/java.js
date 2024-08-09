var icon = document.getElementById("hamburger");
var index = 0;
function buttonIconToggler() {
  if (icon.classList.contains("bi-list")) {
    icon.classList.replace("bi-list", "bi-x");
    document.getElementById("theme-icon").style.display = "none";
    return;
  }
  icon.classList.replace("bi-x", "bi-list");
  setInterval(() => {
    document.getElementById("theme-icon").style.display = "block";
  }, 400);
}

var upperTextList = [
  'console.log ("',
  "&lt?php echo",
  'System.out.println ("',
  "print('''",
];
var lowerTextList = ['")', "?&gt", '");', "''')"];

document.addEventListener("DOMContentLoaded", () => {
  setInterval(codeTitleUpdater, 2500);
});

function codeTitleUpdater() {
  if (index < upperTextList.length) {
    document.getElementById("code__title__upper").innerHTML =
      upperTextList[index];
    document.getElementById("code__title__lower").innerHTML =
      lowerTextList[index];
    index++;
  } else {
    document.getElementById("code__title__upper").innerHTML =
      "#include &ltstdio.h&gt";
    document.getElementById("code__title__lower").innerHTML = "return 0;";
    index = 0;
  }
}

// var maskCursor = document.getElementById("mask");

// document.addEventListener("mousemove", function (e) {
//   maskCursor.style.maskPosition = e.offsetX + "px" + " " + e.offsetY + "px";
// });
