//onload
window.onload=function() {  
  // let targets = Array(54).fill(0).map((e,i)=>i+1).map((x) => '.path-' +x);
  // console.log('targetss', targets);
  let pathAnimation = anime({
    targets: '.path-xx',
    easing: 'easeInOutQuad',
    translateY: -550,
    duration: 23000,
    direction: 'normal',
    complete: function(daco, err) {
      daco.restart();
      console.log("It's alive!!", daco);
    }
  });
    
  // Create a timeline with default parameters
  anime({
    targets: '.moon',
    opacity: [0,1],
    duration: 14000,
    translateX: [
      { value: 700, duration: 0},
      { value: 400, duration: 7000 },
      { value: 200, duration: 7000 },
      { value: -20, duration: 7000 }
    ],
    translateY: [
      { value: 50, duration: 0 },
      { value: 0, duration: 7000 },
      { value: -30, duration: 7000 },
      { value: -10, duration: 7000 }
    ],
    easing: 'linear',
    loop: true,
    direction: 'alternate'
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

  let logo = anime({
    targets: 'h2',
    opacity: [0.4, 1],    
    duration: 1500,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate'
  });
  
  // anime({
  //   targets: '.n1',
  //   duration: 500,
  //   delay: 1000,
  //   translateX: [400, 0],
  //   opacity: [0, 1],
  //   loop: false,
  //   easing: 'easeOutElastic',
  //   direction: 'alternate',
  //   complete: function(daco, err) {
  //     anime({
  //       targets: '.n2',
  //       duration: 500,
  //       translateX: [400, 0],
  //       opacity: [0, 1],
  //       loop: false,
  //       easing: 'easeOutElastic',
  //       direction: 'alternate',
  //       complete: function(daco, err) {
  //         anime({
  //           targets: '.n3',
  //           translateX: [400, 0],
  //           duration: 500,
  //           opacity: [0, 1],            
  //           loop: false,
  //           easing: 'easeOutElastic',
  //           direction: 'alternate'
  //         });
  //       }
  //     });
  //   }
  // });

  async function hideWindows() {
    const initialObj = {
      fill: '#000',
      duration: 500,
      loop: false,
      easing: 'linear',
      direction: 'normal'
    }
    await anime({
      delay: 500,
      targets: '.window-1',
      fill: '#000',
      duration: 500,
      loop: false,
      easing: 'linear',
      direction: 'normal'
    }).finished
    
    var delay = 0;
    for (let i = 1; i < 16; i++) {
      await anime(Object.assign(initialObj, {
        delay: delay,
        targets: '.window-' + getRandomInt(1, 15) //i
      }))
      delay += getRandomInt(0, 500)
    }
  };
  hideWindows();
  console.log('hideWindows()')
  var hidden = true

  setInterval(function(){ 
    showWindows();
    hideWindows();
    // if (hidden == true) {
    //   console.log('SHOW')
    //   hidden = false;
    //   return showWindows();
    // }
    // console.log('HIDE')
    // hidden = true;
    // return hideWindows();
   }, 3000);

  
  async function showWindows() {    
    const initialObj = {
      fill: '#f1c40f',
      duration: 500,
      loop: false,
      easing: 'linear',
      direction: 'normal'
    }
    await anime({
      delay: 1000,
      targets: pickRandomValueFromArr('.window-', 15),
      fill: '#f1c40f',
      duration: 500,
      loop: false,
      easing: 'linear',
      direction: 'normal'
    }).finished

    for (let i = 0; i < 5; i++) {
      await anime(Object.assign(initialObj, {
        delay: getRandomInt(1000, 7000),
        targets: pickRandomValueFromArr('.window-', 15)
      }))
    }


  };
  /**
   * Get a random integer between `min` and `max`.
   * 
   * @param {number} min - min number
   * @param {number} max - max number
   * @return {number} a random integer
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function pickRandomValueFromArr(concatString, numberOfSamples) {
    const arr = []
    for (let i = 0; i < numberOfSamples; i++) {
      arr.push(concatString + (i + 1))
    }
    randomElement = arr.randomElement()
    console.log('randomElement', randomElement)

    return randomElement
  }
  Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
  }
};