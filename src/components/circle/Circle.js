import './circle.css'

const RADIUS = 30;
const PALETTE = ['red','blue','green']

const randomizeFloat = max => max *  Math.random();
const randomizeInteger = count => Math.floor(Math.random() * count);;
const coinFlip = () => randomizeInteger(2);


export default function Circle(){
  const {width, height} =  window.screen;
  const randomWidth = randomizeFloat(width);
  const randomHeight = randomizeFloat(height);
  const randomRadius =  randomizeFloat(RADIUS);
  const randomFill = PALETTE[randomizeInteger(PALETTE.length)]

  return <circle
  className={coinFlip() ? 'circleTop' : 'circleBot'}
  style={{transformOrigin: `${randomWidth}px ${randomHeight}px`}}
  r={randomRadius}
  cx={randomWidth}
  cy={randomHeight}
  fill={randomFill}></circle>
}
