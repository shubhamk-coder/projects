const fileInput = document.getElementById("actual-btn");
const fileResult = document.getElementById("fileResult");
const circles = document.querySelectorAll(".dot");
const img = document.getElementById("img");
const pic = document.getElementById("pic");
const btnText = document.getElementById("btnText");
const cross = document.getElementById("cross");
const loaded = document.getElementById("loaded");
const blue = document.querySelector(".blue");
let selectedFiles;
loaded.style.display = "none";
for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function () {
    circles.forEach((circle) => {
      if (circle.classList.contains("active")) {
        circle.classList.remove("active");
      }
    });
    circles[i].classList.add("active");
    pic.classList.remove("pic");
    img.classList.add("loader");
    loaded.style.display = "none";
    // if (cross.style.display != "none") {
    //   loaded.style.display = null;
    // }
    if (circles[i].classList.contains("pink")) {
      img.src = "./assets/loader_icon_pink.svg";
    } else if (circles[i].classList.contains("blue")) {
      img.src = "./assets/loader_icon_blue.svg";
    } else {
      img.src = "./assets/loader_icon_yellow.svg";
    }

    setTimeout(function () {
      img.classList.remove("Pink", "blue", "yellow");
      img.classList.remove("loader");
      pic.classList.add("pic");
      if (cross.style.display != "none") {
        loaded.style.display = null;
      }
      if (circles[i].classList.contains("pink")) {
        // if (cross.style.display != "none") {
        //   loaded.style.display = null;
        // }
        img.src = "./assets/Pink umbrella.png";
      } else if (circles[i].classList.contains("blue")) {
        // if (cross.style.display != "none") {
        //   loaded.style.display = null;
        // }
        img.src = "./assets/Blue umbrella.png";
      } else {
        // if (cross.style.display != "none") {
        //   loaded.style.display = null;
        // }
        img.src = "./assets/Yello umbrella.png";
      }
    }, 1000);
  });
}

fileInput.addEventListener("change", function (e) {
  selectedFiles = [...fileInput.files];
  const reader = new FileReader();
  let selectedFile = fileInput.files.item(0);
  if (fileInput.files.length > 0) {
    const fileSize = selectedFile.size;
    const fileName = selectedFile.name;
    const fileMb = fileSize / 1024 ** 2;
    if (fileMb >= 5) {
      fileResult.classList.remove("green");
      fileResult.classList.add("red");
      fileResult.innerHTML = "* Please select a file less than 5MB.";
    } else {
      fileResult.classList.remove("red");
      fileResult.classList.add("green");
      // read the file
      reader.addEventListener("load", () => {
        loaded.style.display = null;
        loaded.src = reader.result;
      });
      reader.readAsDataURL(this.files[0]);

      btnText.innerHTML = fileName;
      cross.style.display = "block";
      fileResult.innerHTML =
        "Success, your file is " + fileMb.toFixed(1) + "MB.";
      fileInput.disabled = true;

      cross.addEventListener("click", function () {
        cross.style.display = "none";
        btnText.innerHTML = "UPLOAD LOGO";
        fileResult.innerHTML = "";
        loaded.style.display = "none";
        setTimeout(() => {
          fileInput.disabled = false;
        }, 1000);
      });
    }
  }
});
