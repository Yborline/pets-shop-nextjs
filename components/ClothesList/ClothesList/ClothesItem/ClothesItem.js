import Image from "next/image";
import Link from "next/link";
import {
  Li,
  Imgg,
  Div,
  DivOptions,
  Title,
  DivPrice,
  P,
} from "./ClotheItem.styled";
import { useDispatch } from "react-redux";
import { TbDiscount } from "react-icons/tb";

import { fetchClothesId } from "../../../../redux/clothes/clothes-operations";
import { useRouter } from "next/router";
import OnSale from "../../../OnSale/OnSale";
import { useEffect, useState } from "react";
import { getComments } from "../../../../services/api";
import { ColorRing } from "react-loader-spinner";
import { useTranslation } from "react-i18next";
const ClothesItem = (
  {
    pathname,
    id,
    code,
    name,
    prices,
    model,
    active,
    owner,
    image,
    type,
    dell,
    discount,
  } = ""
) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { opt, price } = prices;

  return (
    <Li>
      <Div>
        <Link href={`/clothes/${id}`}>
          {discount > 0 ? (
            <TbDiscount
              style={{
                position: "absolute",
                left: "80%",
                zIndex: "1",
                color: "yellow",
              }}
              size="40px"
              title=""
            />
          ) : (
            <></>
          )}

          <Image
            src={
              image?.secure_url ? (
                image.secure_url
              ) : (
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              )
            }
            alt={name}
            // fill
            width={230}
            height={230}
            // sizes="(max-width: 768px) 100vw,
            //   (max-width: 1200px) 50vw,
            //   33vw"
          />
        </Link>
      </Div>
      <DivOptions>
        <Title>{name}</Title>
        <P>
          {t("Code")}: {code}
        </P>
        {pathname === "" ? <P>{t(`${model}`)}</P> : <></>}
        <>
          {type === "wholesaler" ? (
            <p>{opt} грн.</p>
          ) : (
            <OnSale price={price} discount={discount} />
          )}
        </>
        {type === "admin" ? (
          <>
            <button onClick={dell}>dell</button>
          </>
        ) : (
          <></>
        )}
      </DivOptions>
    </Li>
  );
};

export default ClothesItem;
