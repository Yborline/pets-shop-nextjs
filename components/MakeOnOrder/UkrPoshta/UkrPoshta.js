import debounce from "lodash.debounce";
import { Li, Input } from "../NovaPoshta/NovaPoshta.styled";

const UkrPoshta = ({ handleInput, adresses, inputCity }) => {
  return (
    <>
      {" "}
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
          <p>Писати тільки українською мовою</p>
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
      {inputCity.length <= 1 ||
      adresses?.length === 0 ||
      adresses === undefined ? (
        <></>
      ) : (
        <Li>
          <label htmlFor="department">Індекс відділення</label>
          <br />
          <Input
            // onChange={debounce(changeDepartment, 300)}
            type="text"
            onChange={debounce(handleInput, 300)}
            name="department"
            id="department"
            pattern="/^[0-9]{5}$/"
            maxLength="5"
            // maxLength="5"
          />
        </Li>
      )}
    </>
  );
};

export default UkrPoshta;
