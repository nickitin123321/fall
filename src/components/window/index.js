import { getRandomInteger, coinFlip } from '../../utils'
import './window.css'
import Circle from '../circle'

const CIRCLE_COUNT = 1000;

export default function Window(){
  const {width, height} =  window.screen;
  const windowSize = {width, height}
  const circles = [];
  let style = '';

  const steps = getRandomInteger(10);

  for (let i = 0; i <= CIRCLE_COUNT; i++){
    circles.push(<Circle className={`translate-${i}`} windowSize = {windowSize} key={i}/>);

    style += `@keyframes anim-${i}{`;
    for (let i = steps; i>= 1; i--){
      style += `${100/i}% {
        transform: translate${coinFlip() ? 'X' : 'Y'}(${coinFlip() ? '-' : '+'}${getRandomInteger(300)}px);
      }`
    }
    style += '}';
    style += `
    .translate-${i} {
      animation: anim-${i} ${steps}s infinite;
    }
    `
  }

  const styleRef = document.createElement('style');
  styleRef.innerHTML = style;
  document.head.appendChild(styleRef);

  return(
  <svg className="window">
    {circles}
  </svg>)
}