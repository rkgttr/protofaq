


import * as Helpers from 'Helpers';

import * as Q from 'rkgttr-q';
import Publisher from 'rkgttr-publisher';
import uuid from 'rkgttr-uuid';
import Prng from 'rkgttr-prng';

// Uncomment the following if you wish to use the Elements module, add the elements you want to unlock in the {}
// import { div, img, h2, p, a } from 'rkgttr-elements';

// uncomment the following line if script fails in Internet Explorer, or other, due to ES6 features that need the Babel Polyfill
// import 'babel-polyfill';

// uncomment some of the following lines if you wish to use some specific polyfills
// import 'rkgttr-weakmappolyfill';
// import 'rkgttr-mutationobserverpolyfill';
// import 'rkgttr-matchespolyfill';
// import 'rkgttr-consolepolyfill';
// import 'rkgttr-classlistpolyfill';
// import 'rkgttr-arrayincludespolyfill';
import 'rkgttr-arrayfrompolyfill';
function scrollWithin(element, to, duration) {
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    let animateScroll = ()=>{ 
        currentTime += increment;
        let val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};
function scrollIt(destination, duration = 200, easing = 'easeInQuad', callback) {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}
function getCoords(elem) { // crossbrowser version
    let box = elem.getBoundingClientRect();

    let body = document.body;
    let docEl = document.documentElement;

    let scrollTop = window.pageYOffset;
    let scrollLeft = window.pageXOffset;

    let clientTop = docEl.clientTop || body.clientTop || 0;
    let clientLeft = docEl.clientLeft || body.clientLeft || 0;

    let top  = box.top +  scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

/**
 *
 * Main Application
 *
 **/
class App_protofaq {
  constructor(){
    this.INITED = false;
    if(App_protofaq.instance !== undefined) {
      return App_protofaq.instance;
    } else {
      App_protofaq.instance = this;
    }
    return this;
  }
  /**
  *
  * Singleton thing
  *
  **/
  static getInstance(){
    if(App_protofaq.instance === undefined) {
      new App_protofaq();
    }
    return App_protofaq.instance;
  }
  /**
   *
   * Initialize your app, surcharge with whatever needed
   *
   **/
  init () {
    if(!this.INITED) {
      this.INITED = true;
      
      
      this.addListeners();
    }
  }

  /**
   *
   * Event Listeners, surcharge with whatever needed
   *
   **/
  addListeners () {
    window.onscroll = e=> {
      if (window.pageYOffset > document.querySelector('.intro').offsetHeight / 4) {
        document.querySelector('.content').classList.add("sticky");
        document.querySelector('.intro').classList.add("sticky");
        document.querySelector('.top').classList.add("sticky");
      } else {
        document.querySelector('.content').classList.remove("sticky");
        document.querySelector('.intro').classList.remove("sticky");
        document.querySelector('.top').classList.remove("sticky");
      }
    };
    Array.from(document.querySelectorAll('.box')).forEach((box, i) => {
      let b = i + 1;
      Array.from(box.querySelectorAll('.q')).forEach( (q, i) => {

        q.addEventListener('click', e => {
          let tab = document.querySelectorAll(`.gr${b} .tab`)[i];
          Array.from(document.querySelectorAll('.questionsbar .q')).forEach( q => q.classList.remove('selected'));
          document.querySelectorAll('.questionsbar .tab')[b-1].querySelectorAll('.q')[i].classList.add('selected');
          tab.querySelector('input').checked = true;
          document.getElementById('_'+b).checked = true;
          scrollIt(getCoords(tab).top - (window.screen.height * .7));
          //console.log(b, i+1);
        })
        
      });
    });
    document.querySelector('.top').addEventListener('click', e => {
      Array.from(document.querySelectorAll('.questionsbar .q')).forEach( q => q.classList.remove('selected'));
      Array.from(document.querySelectorAll('input')).forEach( q => q.checked = false);
    });

    Array.from(document.querySelectorAll('.see-all')).forEach((q, i) => {
      q.addEventListener('click', e => {
        document.querySelectorAll('.questionsbar input')[i].checked = true;
        scrollIt(getCoords(document.querySelector('.gr'+(i+1))).top - (window.screen.height * .7));
      });
      
    });

    Array.from(document.querySelectorAll('.questionsbar .q')).forEach((q, i) => {

      q.addEventListener('click', e => {
        Array.from(document.querySelectorAll('.questionsbar .q')).forEach( q => q.classList.remove('selected'));
        q.classList.add('selected');
        document.querySelectorAll('.content-content input')[i].checked = true;
        setTimeout(()=>{scrollIt(getCoords(document.querySelectorAll('.content-content input')[i]).top- 30)}, 600);
      });
    });

    Array.from(document.querySelectorAll('.content-content input')).forEach((input, i) => {
      input.addEventListener('change', e => {
        let index = Array.from(document.querySelectorAll('.content-content > div')).indexOf(input.parentNode.parentNode);
        document.querySelectorAll('.questionsbar input')[index].checked = true;
        Array.from(document.querySelectorAll('.questionsbar .q')).forEach( q => q.classList.remove('selected'));
        document.querySelectorAll('.questionsbar .q')[i].classList.add('selected');
        //document.querySelectorAll('.questionsbar .q')[i].scrollIntoView();
        setTimeout(()=>{
          let tp = document.querySelectorAll('.questionsbar .q')[i].offsetTop;
          scrollWithin(document.querySelectorAll('.questionsbar .tab')[index].querySelector('.tab-content'), tp, 500);
        }, 400);
      });

      // let b = i + 1;
      // Array.from(box.querySelectorAll('.q')).forEach( (q, i) => {

      //   q.addEventListener('click', e => {
      //     let tab = document.querySelectorAll(`.gr${b} .tab`)[i];
      //     Array.from(document.querySelectorAll('.questionsbar .q')).forEach( q => q.classList.remove('selected'));
      //     document.querySelectorAll('.questionsbar .tab')[b-1].querySelectorAll('.q')[i].classList.add('selected');
      //     tab.querySelector('input').checked = true;
      //     document.getElementById('_'+b).checked = true;
      //     scrollIt(getCoords(tab).top - (window.screen.height * .7));
      //     //console.log(b, i+1);
      //   })
        
      // });
    });
  }


  /**
   *
   * Declare new methods in such way
   *
   **/
  doSomething () {
    // code here
  }
}
App_protofaq.instance = undefined;

/**
 *
 * Launch the application
 *
 **/
App_protofaq.getInstance().init();
