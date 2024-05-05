// header ==> adjust height of header
$(function () {
  $("body").css("paddingTop", `${$("nav").innerHeight()}px`);
  $("header").css(
    "minHeight",
    `${$(window).height() - $("nav").innerHeight()}px`
  );
});

// statstics section
let nums = document.querySelectorAll(".stats .card .num");
let statsSection = document.querySelector(".stats");
let started = false;

function increaseCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((ele) => {
        increaseCount(ele);
      });
    }
    started = true;
  }
});

// filter images ==> portfolio section

$(".portfolio-links li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".portfolio-items .portfolio-img").css("display", "none");
  $($(this).data("filter")).fadeIn(700);
});

// gallery
// create popup with the image

let ourGallery = document.querySelectorAll(".portfolio .portfolio-img img");

ourGallery.forEach((img) => {
  img.addEventListener("click", function (e) {
    // create overlay element
    let overlay = document.createElement("div");

    // add class to overlay
    overlay.className = "popup-overlay";

    // append the overlay to the body
    document.body.appendChild(overlay);

    // create the popup box
    let popupBox = document.createElement("div");

    // add class to the popup box
    popupBox.className = "popup-box";

    // add alternate text
    if (img.alt !== null) {
      // create heading
      let imgHeading = document.createElement("h3");

      // create the text of heading
      let imgHeadingText = document.createTextNode(img.alt);

      // append text to the heading
      imgHeading.appendChild(imgHeadingText);

      // append the heading to the popup box
      popupBox.appendChild(imgHeading);
    }

    // create the image
    let thePopupImage = document.createElement("img");

    // change src of image to the src of the clicked image
    thePopupImage.src = img.src;

    // add image to popup box
    popupBox.appendChild(thePopupImage);

    // append the popup box to body
    document.body.appendChild(popupBox);

    // create close span
    let spanClose = document.createElement("span");

    // add classname to close span
    spanClose.className = "popup-close";

    // create close icon
    let spanCloseIcon = document.createElement("i");
    spanCloseIcon.className = "fa fa-times";

    // append spanCloseIcon to spanClose
    spanClose.appendChild(spanCloseIcon);

    // append close span to popup box
    popupBox.appendChild(spanClose);

    // on click on span close
    spanClose.addEventListener("click", function () {
      // remove popup box and popup overlay
      popupBox.remove();
      overlay.remove();
    });

    // on click on escape key on keyboard close the popupBox and overlay
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        popupBox.remove();
        overlay.remove();
      }
    });
  });
});

// progress

$(window).on("scroll", function () {
  if ($(this).scrollTop() >= $(".experts").offset().top) {
    $(".experts .prog").addClass("custom-prog");
  }
});

// carousel owl
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

// choose us section ==> tabs
$(".choose-panels ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".panel-content-item").hide();
  $($(this).data("panel")).fadeIn(700);
});

$(".choose-image img").css("minHeight", $(".choose-panels").innerHeight());

// choose us ==> popup image ==> magnificPopup plugin
$(".popup-link").magnificPopup({
  type: "image",
});

// reviews section ==> skick plugin
$(".reviews-slick").slick({
  autoplay: true,
  arrows: false,
});

// scroll to top
let scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  this.scrollY >= 200
    ? (scrollBtn.style.right = "20px")
    : (scrollBtn.style.right = "-60px");
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// auto writing in header
let heading = document.querySelector("header .card-title");
let headingText = heading.getAttribute("data-text");
let haedingArr = headingText.split("");
let i = 0;

const autoWriting = () => {
  heading.innerHTML += haedingArr[i];
  i++;
  if (i > haedingArr.length) {
    heading.innerHTML = "";
    i = 0;
  }
};
let autoWr = setInterval(autoWriting, 300);
