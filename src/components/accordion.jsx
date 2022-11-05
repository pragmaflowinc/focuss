import React from "react";
import $ from "jquery";


export function Accordion(props) {
    const {
      name,
      color,
      height,
      width,
      className,
      label,
      checked,
      onChange,
      defaultChecked,
      styles,
    } = props;

//https://codepen.io/jonesen/pen/KKpEZLK
const boxOne = $("#box1");
const boxTwo = $("#box2");
const boxThree = $("#box3");
const menuBtn = $(".logo");
const neuBtn = $(".neuOne");
let trayOpen = false;
// const navToggle = $("#nav-toggle")

const Numlist = $(".Num-list");
const Strlist = $(".Str-list");
const Arrlist = $(".Arr-list");

$(document).ready(function () {
  $(".wrapper").hide();
});

neuBtn.on("click", function () {
  neuBtn.toggleClass("neuActive");
  toggleArrow();
});

menuBtn.on("click", function () {
  $(".wrapper").slideToggle(200, "swing");
});

$(".tray").on("click", function () {
  console.log("1", neuBtn.hasClass(!"neuActive"));

  neuBtn.toggleClass("neuActive");

  $(".wrapper").slideToggle(200, "swing");
  toggleArrow();
});

function toggleArrow() {
  trayOpen = !trayOpen;
  if (trayOpen) {
    console.log("2", trayOpen);
    $(".arrow").hide();
    $(".arrow").addClass("fa-angle-double-up").show();
  } else {
    $(".arrow").hide();
    $(".arrow").addClass("fa-angle-double-down").show();
  }
}

boxOne.on("click", function () {
  console.log("1 clicked!");
  Numlist.slideToggle(250, "swing");
  Strlist.slideUp(250, "swing");
  Arrlist.slideUp(250, "swing");
});

boxTwo.on("click", function () {
  console.log("2 clicked!");
  Strlist.slideToggle(250, "swing");
  Arrlist.slideUp(250, "swing");
  Numlist.slideUp(250, "swing");
});

boxThree.on("click", function () {
  console.log("3 clicked!");
  Arrlist.slideToggle(250, "swing");
  Numlist.slideUp(250, "swing");
  Strlist.slideUp(250, "swing");
});

//return
return(
<Accordion>
<div class="nav">
  <div class="neuOne logo ">
      <img src="https://www.dropbox.com/s/1nbjix5040pmkmj/js6.png?dl=0" class="logo js6" alt='testimage' />
  </div>
</div>
<div class="wrapper" id="nav-toggle">
  <div class="box" id="box1">
    <h1>Numbers</h1>
    <ul class="Num-list">
      <li>Excersise One</li>
      <li>Excersise Two</li>
      <li>Excersise Three</li>
    </ul>
  </div>
  <div class="box" id="box2">
    <h1>Strings</h1>
    <ul class="Str-list">
      <li>Excersise One</li>
      <li>Excersise Two</li>
      <li>Excersise Three</li>
    </ul>
  </div>
  <div class="box" id="box3">
    <h1>Arrays</h1>
    <ul class="Arr-list">
      <li>Excersise One</li>
      <li>Excersise Two</li>
      <li>Excersise Three</li>
    </ul>
  </div>
</div>
<div class="tray">
  <div class="fas arrow fa-angle-double-down"></div>
</div>
</Accordion>

);
}

export default Accordion;