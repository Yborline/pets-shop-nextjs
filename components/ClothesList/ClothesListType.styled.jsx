import styled from 'styled-components';

export const DivType = styled.div`

`

// background-color:${({theme}) => theme.green};


export const Ul = styled.ul`


letter-spacing: 4px;


padding: 10px 0px 10px 0px;

display:flex;
flex-direction: column;
text-align: center;


`


export const Div = styled.div`

     @media screen and (min-width: 768px) {


    height: inherit;
margin-right: 20px;
}
`

export const DivReset = styled.div`
display:flex;
flex-direction: column;
align-items: center;`

export const DivOther = styled.div`
display:flex;
          justify-content:center;


     @media screen and (min-width: 768px) {
justify-content: flex-start;
    height: inherit;
    position: sticky;
        top: 150px;


}`

export const Select = styled.select`
border: 1.5px solid;
  border-radius: 5px;
height: 30px;
width: 230px;
margin-bottom: 15px;

`


export const Option = styled.option`
    overflow-y:scroll;`



//     import styled from 'styled-components';

// export const DivType = styled.div`

// `

// // background-color:${({theme}) => theme.green};


// export const Ul = styled.ul`

// background-color:#B0C4DE;

// border-radius :4px;
// border-right: 1px solid #808080;
// border-bottom: 1px solid #808080;

// display:flex;
// flex-direction: column;
// text-align: center;

//       position: sticky;
//   top: -1px;

// `


// export const DivReset = styled.div`
// display:flex;
// flex-direction: column;
// align-items: center;`

// export const DivOther = styled.div`
// display:flex;
//           justify-content:center;


//      @media screen and (min-width: 768px) {
// justify-content: flex-start;

// }`

// export const Select = styled.select`
// border: 1.5px solid;
// border-radius: 10px;
// height: 30px;
// width: 200px;
// margin-bottom: 15px;

// `


// export const Option = styled.option`
//     overflow-y:scroll;`