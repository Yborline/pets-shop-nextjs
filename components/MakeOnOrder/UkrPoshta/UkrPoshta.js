import debounce from "lodash.debounce";
import { Field, Formik, FormikProps, useFormikContext } from "formik";

const UkrPoshta = ({ handleInput, adresses, inputCity }) => {
  return (
    <>
      {" "}
      <li>
        <label htmlFor="city">Місто / населений пункт</label>
        <br />
        <input
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
      </li>
      {inputCity.length <= 1 ||
      adresses?.length === 0 ||
      adresses === undefined ? (
        <></>
      ) : (
        <li>
          <label htmlFor="department">Індекс відділення</label>
          <br />
          <input
            // onChange={debounce(changeDepartment, 300)}
            onChange={debounce(handleInput, 300)}
            type="number"
            name="department"
            id="department"
            list="num"
            max="99999"
          />
        </li>
      )}
    </>
  );
};

export default UkrPoshta;
