const fileInput = document.getElementById("actual-btn");
const fileResult = document.getElementById("fileResult");
const circles = document.querySelectorAll(".dot");
const img = document.getElementById("img");
const pic = document.getElementById("pic");
const btnText = document.getElementById("btnText");
const cross = document.getElementById("cross");
const loaded = document.getElementById("loaded");
loaded.style.display = "none";

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function () {
    circles.forEach((circle) => {
      // checks & removes active class from dot circle
      if (circle.classList.contains("active")) {
        circle.classList.remove("active");
      }
    });
    // adds active class to clicked circle dot
    circles[i].classList.add("active");

    // removes pic class from pic & added loader class to img
    pic.classList.remove("pic");
    img.classList.add("loader");
    loaded.style.display = "none";

    // changes loading svg source as per the dots clicked
    if (circles[i].classList.contains("pink")) {
      img.src = "./assets/loader_icon_pink.svg";
    } else if (circles[i].classList.contains("blue")) {
      img.src = "./assets/loader_icon_blue.svg";
    } else {
      img.src = "./assets/loader_icon_yellow.svg";
    }

    setTimeout(function () {
      // removes the loading icon & adds back the icture again
      img.classList.remove("loader");
      pic.classList.add("pic");

      // checks if "X" is present on button or not
      if (cross.style.display == "block") {
        loaded.style.display = null;
      }

      // changes image source as per the dots clicked
      if (circles[i].classList.contains("pink")) {
        img.src = "./assets/Pink umbrella.png";
      } else if (circles[i].classList.contains("blue")) {
        img.src = "./assets/Blue umbrella.png";
      } else {
        img.src = "./assets/Yello umbrella.png";
      }
    }, 1000);
  });
}

fileInput.addEventListener("change", function (e) {
  const reader = new FileReader();
  let selectedFile = fileInput.files.item(0);

  // checks if the file size is above 5MB
  if (fileInput.files.length > 0) {
    const fileSize = selectedFile.size;
    const fileName = selectedFile.name;

    const fileMb = fileSize / 1024 ** 2;
    if (fileMb >= 5) {
      fileResult.classList.remove("green");
      fileResult.classList.add("red");

      // failure message when the file is above 5MB
      fileResult.innerHTML = "* Please select a file less than 5MB.";
    } else {
      fileResult.classList.remove("red");
      fileResult.classList.add("green");

      // read the file & assigned it to the loaded image source
      reader.addEventListener("load", () => {
        loaded.style.display = null;
        loaded.src = reader.result;
      });
      reader.readAsDataURL(this.files[0]);

      // display filename on button
      btnText.innerHTML = fileName;
      cross.style.display = "block";

      // success message when the file is below 5MB
      fileResult.innerHTML =
        "Success, your file is " + fileMb.toFixed(1) + "MB.";
      fileInput.disabled = true;

      // removing all the applied changes
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
