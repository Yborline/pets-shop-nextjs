import styled from "@emotion/styled";

export const Backdrop = styled.div`

position: fixed;
top: 0;
left:0;
z-index:5;

width: 100%;
height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
// width: 100vw;
// height: 100vh;



export const ModalConent = styled.div`


margin-top: 60px;
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 768px) {
      max-height:550px;
max-width:310px;
z-index:5;
        left: 50%;
    top: 40%;
    margin-left: -120px;
    margin-top: -155px;
    
    }


box-shadow: 0px 2px 1px -1px rgba(0,0,0, 0.2),
0px 1px 1px 0px rgba(0,0,0, 0.14), 0px 1px 3px 0px rgba(0,0,0, 0.12);
background-color: #fff;
`