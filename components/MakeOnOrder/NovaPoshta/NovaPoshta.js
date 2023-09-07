import debounce from "lodash.debounce";
import { Li, Input } from "./NovaPoshta.styled";

import dog from "../../../public/photo/dog.png";
import Image from "next/image";
const NovaPoshta = ({ handleInput, adresses, inputCity, department }) => {
  return (
    <>
      <Li>
        <label htmlFor="city">Місто / населений пункт</label>
        <br />
        <Input
          // onChange={debounce(changeCity, 300)}
          onChange={debounce(handleInput, 300)}
          type="text"
          name="city"
          id="city"
          list="select"

          // value={inputCity}
        />
        {adresses === undefined || adresses.length === 0 ? (
          <p>Тільки українською мовою</p>
        ) : (
          <datalist id="select">
            {adresses.map((item, index) => {
              // setInputCity(item.Present);
              return (
                <option key={index} value={item.Present}>
                  {item.Present}
                </option>
              );
            })}
          </datalist>
        )}
      </Li>

      {inputCity === null ||
      // inputCity.length <= 1 ||
      // adresses?.length === 0 ||
      adresses === undefined ? (
        <></>
      ) : (
        <Li>
          <label htmlFor="department">Номер відділення</label>
          <br />
          <Input
            // onChange={debounce(changeDepartment, 300)}
            onChange={debounce(handleInput, 300)}
            type="text"
            name="department"
            id="department"
            list="num"
          />
          {/* {number === undefined || number.length === 0 ? (
                <p>Писати тільки українською мовою</p>
              ) : ( */}
          <datalist id="num">
            {/* {number.map((item) => {
                    return ( */}
            <option key={department} value={department}>
              {department}
            </option>
            {/* ); })} */}
          </datalist>
          {/* )} */}
        </Li>
      )}
    </>
  );
};

export default NovaPoshta;
