import clothesMenu from "../clothesMenu/clothesMenu";
import ClothesType from "./ClothesType/ClothesType";
import {
  Ul,
  Div,
  Select,
  Option,
  DivOther,
  DivReset,
} from "./ClothesListType.styled";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useContext } from "react";
import ctxInput from "../../context/filterContext";
import { useSearchParams } from "next/navigation";
import Button from "../Button/Button";

const ClothesListType = () => {
  const { input, inputIn } = useContext(ctxInput);
  const windowWidth = useRef(window.innerWidth);

  const params = useSearchParams();
  const { t } = useTranslation();
  const search = params.get("type");

  const router = useRouter();

  const handleChange = ({ target }) => {
    router.push({
      pathname: `/clothes/type`,
      query: { page: "1", type: target.value },
    });
  };

  const handleClick = () => {
    router.push({
      pathname: `/clothes`,
      query: { page: "1" },
    });
    inputIn("");
  };

  return (
    <Div>
      <DivOther>
        {windowWidth.current > 767 ? (
          <Ul style={{ padding: "0px" }}>
            <Button
              marginbottom="10px"
              text="очистити фільтр"
              handleClick={handleClick}
            ></Button>
            {clothesMenu.map(({ page, type, id, title, parent }) => (
              <ClothesType
                key={id}
                id={id}
                title={t(`${title}`)}
                page={page}
                type={type}
                parent={parent}
              />
            ))}
          </Ul>
        ) : (
          <DivReset>
            <Select
              // value={select}
              defaultValue={search ? search : "Model"}
              onChange={(event) => handleChange(event)}
            >
              {!search && (
                <option value={"Model"} disabled hidden>
                  {t("Model")}
                </option>
              )}
              {clothesMenu.map(({ page, type, id, title }) => (
                <Option value={type} key={id} id={id}>
                  {t(`${title}`)}
                </Option>
              ))}
            </Select>
            <Button
              height="30px"
              width="230px"
              text="очистити"
              handleClick={handleClick}
            ></Button>
          </DivReset>
        )}
      </DivOther>
    </Div>
  );
};

export default ClothesListType;
