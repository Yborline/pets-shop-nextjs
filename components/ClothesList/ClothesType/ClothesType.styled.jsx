import styled from "styled-components";

export const LinkActive = styled.span`

color: ${({theme})=> theme.yelow};

`

export const LinkNormal = styled.span`

color: ${({theme})=> theme.text};
`


// const handleColorType = (color,theme )=> {
//   switch (color) {
// case "1":
//             return "#ffffff";
//         case "2":
//             return "#fffff7";
//         case "3":
//             return "#fffeef";
//         case "4":
//             return "#fffee8";
//         case "5":
//             return "#fffee0";
//         case "6":
//             return "#fffdd8";
//         case "7":
//             return "#fffdd0";
//         case "8":
//             return "#fffdd0";
//         case "9":
//             return "#fbf9d4";
//         case "10":
//             return "#f8f6d8";
//         case "11":
//             return "#f4f2dc";
//         case "12":
//             return "#f0efe0";
//         case "13":
//             return "#ecebe4";
//         default:
//             return "#e8e8e8";
//   }
// };
// ${(props) =>  handleColorType(props.parent
// background-color: ${(props) =>  handleColorType(props.parent , props.theme)};
// ${({theme}) => theme.mobilMenu}
export const Li = styled.li`
background-color:${({theme}) => theme.yelowLight};
height:25px;
padding:5px;
width: 100%;
border-bottom: 1px solid #C0C0C0;

:hover{
    background-color:#FFDEAD;
}

`

// :not(:first-child){
//     margin-left:10px;
// }