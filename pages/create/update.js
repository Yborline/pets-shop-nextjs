import { useRouter } from "next/router";
import CLothesForm from "../../components/ClothesForm/ClothesForm";
import { getFetchClothesId } from "../../services/api";
const CorrectionCloth = ({ cloth }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(cloth);
  const {
    description,
    _id,
    name,
    code,
    allprice = {},
    active,
    model,
    image,
  } = cloth;
  const { xs, s, sm, m, ml, l, xl, xxl, xl3, xl4, xl5, xl6, xl7 } = allprice;

  const correctionCloth = {
    name: name,
    allprice: {
      xs: {
        price: xs?.price,
        opt: xs?.opt,
        active: xs?.active,
      },
      s: {
        price: s?.price,
        opt: s?.opt,
        active: s?.active,
      },
      sm: {
        price: sm?.price,
        opt: sm?.opt,
        active: sm?.active,
      },
      m: {
        price: m?.price,
        opt: m?.opt,
        active: m?.active,
      },
      ml: {
        price: ml?.price,
        opt: ml?.opt,
        active: ml?.active,
      },
      l: {
        price: l?.price,
        opt: l?.opt,
        active: l?.active,
      },
      xl: {
        price: xl?.price,
        opt: xl?.opt,
        active: xl?.active,
      },
      xxl: {
        price: xxl?.price,
        opt: xxl?.opt,
        active: xxl?.active,
      },
      xl3: {
        price: xl3?.price,
        opt: xl3?.opt,
        active: xl3?.active,
      },
      xl4: {
        price: xl4?.price,
        opt: xl4?.opt,
        active: xl4?.active,
      },
      xl5: {
        price: xl5?.price,
        opt: xl5?.opt,
        active: xl5?.active,
      },
      xl6: {
        price: xl6?.price,
        opt: xl6?.opt,
        active: xl6?.active,
      },
      xl7: {
        price: xl7?.price,
        opt: xl7?.opt,
        active: xl7?.active,
      },
    },
    active: active,
    model: model,
    description: description,
  };

  return (
    <>
      {cloth.name && (
        <CLothesForm initial={correctionCloth} cloth={cloth} id={id} />
      )}
    </>
  );
};

export async function getServerSideProps({ query }) {
  if (query.id) {
    const data = await getFetchClothesId(query.id);

    return {
      props: {
        cloth: data || null,
      },
    };
  }
  return {
    props: {
      cloth: null,
    },
  };
}

export default CorrectionCloth;
