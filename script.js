//
window.onload=function() {
  // let targets = Array(54).fill(0).map((e,i)=>i+1).map((x) => '.path-' +x);
  // console.log('targetss', targets);
let pathAnimation = anime({
  targets: '.path-xx', //targets,
  easing: 'easeInOutQuad',
  translateY: -550,
  duration: 23000,
  direction: 'normal',
  complete: function(daco, err) {
    daco.restart();
    console.log("It's alive!!", daco);            ;
  }
});
  
let pathAnimationMoon = anime({
  targets: '.moon',
  opacity: [0.4, 0.6],
  easing: 'easeInOutQuad',
  duration: 2000,
  direction: 'alternate',
  loop: true
});
 let pathAnimationLamp = anime({
  targets: '.lamp',
  opacity: [0.25, 1],
  duration: 2000,
  endDelay: 1000,
  delay: 1000,
  loop: true,
  easing: 'linear',
  direction: 'alternate'
});
};

async function animateWindows() {
  const initialObj = {
    fill: '#000',
    duration: 1000,
    loop: false,
    easing: 'linear',
    direction: 'normal'
  }
  await anime({
    delay: 1000,
    targets: '.window-1',
    fill: '#000',
    duration: 1000,
    loop: false,
    easing: 'linear',
    direction: 'normal'
 }).finished

 await anime(Object.assign(initialObj, {
   delay: 2000,
   targets: '.window-2',
 }))
 await anime(Object.assign(initialObj, {
   delay: 4000,
   targets: '.window-3',
 }))
 await anime(Object.assign(initialObj, {
   delay: 3500,
   targets: '.window-4',
 }))
 await anime(Object.assign(initialObj, {
   delay: 4250,
   targets: '.window-5',
 }))
 await anime(Object.assign(initialObj, {
   delay: 6000,
   targets: '.window-6',
 }))
  await anime(Object.assign(initialObj, {
   delay: 6500,
   targets: '.window-7',
 }))
 await anime(Object.assign(initialObj, {
   delay: 7000,
   targets: '.window-8',
 }))

 await anime(Object.assign(initialObj, {
   duration: 100,
   delay: 10000,
   targets: '.window-9',
 }))
};
animateWindows();
