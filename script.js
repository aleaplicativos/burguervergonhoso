var select = function(s) {
    return document.querySelector(s);
  }, 
    bunBottom = select('#bun-bottom'),
    patty = select('#patty'),
    pattyGroup = select('#patty-group'),
    face = select('#face'),
    mouth = select('#mouth'),
    mouth2 = select('#mouth-2'),
    legLeft = select('#leg-left'),
    legRight = select('#leg-right'),
    burgerTop = select('#burger-top'),
    salad = select('#salad'),
    arms = select('#arms'),
    bunTop = select('#bun-top-group'),
    eyeLeft = select('#eye-left'),
    eyeRight = select('#eye-right'),
    eyes2 = select('#eyes-after'),
    armLeft = select('#arm-left'),
    armRight = select('#arm-right'),
    speedTwo=0.1,
    speedThree=1,
    speedFour=0.5,
    speedFive=0.6,
    speedSix=0.4,
    speedSeven=0.5,
    speedEight=0.5
    ;

TweenMax.set("svg", {visibility:"visible"})

var masterTl = new TimelineMax({repeat:-1});

masterTl
.add(one())
.add(two())
.add(three())
.add(four())
.add(five())
.add(six())
.add(seven())
.add(eight());

function one() {
var tl = new TimelineMax();

tl.to(bunBottom, 0.8, {y:55, ease: Bounce.easeOut, delay:1}, "one")
   return tl;
}

function two() {
  var tl = new TimelineMax();
  tl.to(legLeft, speedTwo, {morphSVG:"#leg-left-2", ease: Power0.easeNone}, "two")
  .to(legRight, speedTwo, {morphSVG:"#leg-right-2", ease: Power0.easeNone}, "two")
  .to(patty, speedTwo, {scaleX:1.025, scaleY:0.95, transformOrigin:'50% 0'}, "two")
  .to(burgerTop, speedTwo, {y:10}, "two")
  .to(arms, speedTwo, {y:10},"two")
  .to(salad, speedTwo, {y:10},"two");

    return tl;
}

function three() {
  var tl = new TimelineMax();
  tl.to(mouth, 0.1, {autoAlpha:0}, "three")
  .to(mouth2, 0.1, {autoAlpha:1}, "three")
  .to(legLeft, 0.1, {morphSVG:legLeft, ease: Power0.easeNone}, "three")
  .to(legRight, 0.1, {morphSVG:legRight, ease: Power0.easeNone}, "three")
  .to(burgerTop, 0.3, {y:-10}, "three")
  .to(salad, 0.3, {y:-10},"three")
  .to(arms, 0.3, {y:-10},"three")
  .to(patty,1, {scaleX:0.9, scaleY:1.2, transformOrigin:'50%'},"three")
  .to(mouth2, 1, {y:3, scaleX:1.6, scaleY:1.4, transformOrigin:'50%'},"three")
  .to(face, 1, {y:-2},"three")
  .to(pattyGroup, 1, {y:-13},"three")
  .to(bunTop, 1, {y:-13},"three");

  return tl;
}

function four() {
  var tl = new TimelineMax();
  tl.to(legLeft, speedFour, {morphSVG:"#leg-left-2", ease: Power0.easeNone}, "four")
  .to(legRight, speedFour, {morphSVG:"#leg-right-2", ease: Power0.easeNone}, "four")
  .to(patty, speedFour, {scaleX:1.025, scaleY:0.95, transformOrigin:'50% 0'},"four")
  .to(pattyGroup, speedFour, {y:0},"four")
  .to(bunTop, speedFour, {y:0},"four")
  .to(burgerTop, speedFour, {y:15}, "four")
  .to(arms, speedFour, {y:15},"four")
  .to(salad, speedFour, {y:15},"four")
  .to(face, speedFour, {y:0},"four")
  .set(mouth, {autoAlpha:1},"four+=0.1")
  .set(mouth2, {autoAlpha:0},"four+=0.1")
  .set(eyeLeft, {autoAlpha:0}, "four+=0.1")
  .set(eyeRight, {autoAlpha:0}, "four+=0.1")
  .set(eyes2, {autoAlpha:1}, "four+=0.1")
  .to(armLeft, speedFour, {morphSVG:"#arm-left-2", scaleY:0.8, ease: Power0.easeNone}, "four")
  .to(armRight, speedFour, {morphSVG:"#arm-right-2", scaleY:0.8, ease: Power0.easeNone}, "four");

  return tl;
}

function five() {
  var tl = new TimelineMax();
  tl.to(burgerTop, speedFive, {y:8}, "six")
  .to(salad, speedFive, {y:8},"six")
  .to(patty, speedFive, {scale:1, transformOrigin:'50% 0',ease: Bounce.easeOut},"six")
  .to(pattyGroup, speedFive, {y:-3, ease: Bounce.easeOut},"six")
  .to(bunTop, speedFive, {y:-3,ease: Bounce.easeOut},"six");
  
  return tl;
}

function six() {
  var tl = new TimelineMax();
  tl.to(burgerTop, speedSix, {y:15}, "six")
  .to(salad, speedSix, {y:15},"six")
  .to(patty, speedSix, {scaleX:1.05, scaleY:0.95, transformOrigin:'50% 0'},"six")
  
  return tl;
}

function seven() {
  var tl = new TimelineMax();
  tl.set(eyes2, {autoAlpha:0})
  .set(eyeLeft, {autoAlpha:1})
  .set(eyeRight, {autoAlpha:1})
  .to(bunBottom, speedSeven, {y:0}, "seven")
  .to(burgerTop, speedSeven, {y:0}, "seven")
  .to(pattyGroup, speedSeven, {y:0},"seven")
  .to(bunTop, speedSeven, {y:0},"seven")
  .to(salad, speedSeven, {y:0},"seven")
  .to(patty, speedSeven, {scale:1, transformOrigin:'50% 0'},"seven")
  .to(arms, speedSeven, {y:0},"seven")
  .to(armLeft, speedSeven, {morphSVG:"#arm-left-3", scaleY:1, ease: Power0.easeNone}, "seven")
.to(armRight, speedSeven, {morphSVG:"#arm-right-3", scaleY:1, ease: Power0.easeNone}, "seven")
  tl.to(legLeft, speedSeven, {morphSVG:legLeft, ease: Power0.easeNone}, "seven")
.to(legRight, speedSeven, {morphSVG:legRight, ease: Power0.easeNone}, "seven");
  
  return tl;
}

function eight() {
  var tl = new TimelineMax({delay:0.5});
  tl.to(armLeft, speedEight, {morphSVG:armLeft, ease: Power0.easeNone}, "seven")
.to(armRight, speedEight, {morphSVG:armRight, ease: Power0.easeNone}, "seven");
  
  return tl;
}
masterTl.timeScale(2);