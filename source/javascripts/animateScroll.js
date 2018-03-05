export default class AnimateScroll {
  constructor(param){
    const imgL = document.querySelector('.project__lending-img')
    const start = imgL.scrollTop
    const end = imgL.scrollHeight
    const change = end - start
    const increment = 20

    function easeInOut(currentTime, start, change, param) {
      currentTime /= param / 2;
      if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }

    function animate(elapsedTime) {
      elapsedTime += increment;
      const position = easeInOut(elapsedTime, start, change, param);
      imgL.scrollTop = position;
      if (elapsedTime < param) {
        setTimeout(function() {
          animate(elapsedTime);
        }, increment)
      }
    }
    animate(0);
  }
}
