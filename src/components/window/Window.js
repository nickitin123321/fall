import './window.css'
import Circle from '../circle/Circle'

const CIRCLE_COUNT = 600;

export default function Window(){
  const circles = [];

  for (let i = 0 ; i <= CIRCLE_COUNT;i++){
    circles.push(<Circle key={i}/>);
  }

  return(
  <svg className="window">
    {circles}
  </svg>)
}