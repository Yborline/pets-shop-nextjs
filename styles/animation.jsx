import styled, { keyframes } from 'styled-components'

export const pulse =(props)=> keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(${props.theme.hoverRgb}, 0.4);
    box-shadow: 0 0 0 0 rgba(${props.theme.hoverRgb}, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(${props.theme.hoverRgb}, 0);
      box-shadow: 0 0 0 10px rgba(${props.theme.hoverRgb}, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(${props.theme.hoverRgb}, 0);
      box-shadow: 0 0 0 0 rgba(${props.theme.hoverRgb}, 0);
  }
}
`


export const heart =( props)=> keyframes` 
  0% {
  transform: scale(1);
  transform-origin: center center;
  transition-timing-function: ease-out;
  }
  10% {
      transform: scale(0.90);
  transition-timing-function: ease-in;
  }
  17% {
      transform: scale(0.95);
  transition-timing-function: ease-out;
  }
  33% {
    transform: scale(0.85);
    transition-timing-function: ease-in;
  }
  45% {
    transform: scale(1.0);
      transition-timing-function: ease-out;
  }
}`