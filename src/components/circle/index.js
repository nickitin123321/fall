import { getRandomInteger, getRandomFloat } from '../../utils'
import './circle.css'

const RADIUS = 30;
const PALETTE = [
'#FFCC99',	'#FF9966',	'#FF6600',
'#6699CC','#006699',
'#99FF99',	'#66FF66',	'#33FF66',	'#00FF66',
'#CC99FF', '#9933CC', '#9933FF', '#9900FF', '#660099']


export default function Circle(props){
  const { className, windowSize } = props;
  const {width, height} =  windowSize;
  const randomWidth = getRandomFloat(width);
  const randomHeight = getRandomFloat(height);
  const randomRadius =  getRandomFloat(RADIUS);
  const randomFill = PALETTE[getRandomInteger(PALETTE.length)]

  return <circle
  className= {className}
  style={{transformOrigin: `${randomWidth}px ${randomHeight}px`}}
  r={randomRadius}
  cx={randomWidth}
  cy={randomHeight}
  fill={randomFill}></circle>
}
