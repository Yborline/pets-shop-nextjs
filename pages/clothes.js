import Head from "next/head";
import { useEffect } from "react";
// import ClothesListType from "../components/ClothesList/ClothesListType";
import Modal from "../components/Modal";
import ClothesListType from "../components/ClothesList/ClothesListType";
import { useDispatch } from "react-redux";
import {
  fetchClothes,
  filterSearch,
} from "../redux/clothes/clothes-operations";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  getClothes,
  getCount,
  getLoadingCloth,
} from "../redux/clothes/clothes-selector";
import PaginationCloth from "../components/Pagination/Pagination";
import FilterName from "../components/Filter/FilterName/FilterName";
import { Div, DivColumn, DivListClothes } from "../styles/clothes.styled";
import { usePageLoading } from "../hooks/hook";
import Spinner from "../components/Spinner/Spinner";
import dynamic from "next/dynamic";
import { getUser } from "../redux/auth/auth-selectors";
import Link from "next/link";
import useToggleSignUpForm from "../hooks/useToggleSignUpForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import { useContext } from "react";
import ctxInput from "../context/filterContext";
import debounce from "lodash.debounce";

// export const getStaticProprs = async (context) => {
//   const response = await fetch(
//     "https://petshop-api-dqwd.onrender.com/api/clothes"
//   );
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { clothes: data },
//   };
// };

// const ClothesListType = dynamic(
//   () => import("../components/ClothesList/ClothesListType"),
//   {
//     loading: () => <Spinner />,
//   }
// );

const ClothesList = dynamic(
  () => import("../components/ClothesList/ClothesList/ClothesList"),
  {
    loading: () => <Spinner />,
  }
);

const Clothes = () => {
  const [signUpForm, changeForm] = useToggleSignUpForm();
  const { isPageLoading } = usePageLoading();
  const loadingCloth = useSelector(getLoadingCloth);
  const clothes = useSelector(getClothes);
  const count = useSelector(getCount);
  const user = useSelector(getUser);
  const { input, inputIn } = useContext(ctxInput);
  const { pathname } = useRouter();

  // const { pathname } = useRouter();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchPage = router.query.page;

  const handleChange = (event, value) => {
    if (value) {
      router.query.page = value;
      router.push(`${router.pathname}?page=${router.query.page}`);
    }
    // else {
    //   router.query.page = stringPage;
    //   router.push(router);
    // }
  };
  // const handleAutocomplete = () => {
  //   dispatch(filterSearch({ text: input, page: searchPage, limit: 30 }));
  // };

  // const debounceHandleAutocomplete = debounce(handleAutocomplete, 1500);

  useEffect(() => {
    console.log(input);
    if (input === "") {
      if (searchPage) {
        dispatch(fetchClothes({ page: searchPage }));
      } else {
        dispatch(fetchClothes({ page: "1" }));
      }
    } else {
      dispatch(filterSearch({ text: input, page: searchPage, limit: 30 }));
    }
  }, [dispatch, input, searchPage]);

  return (
    <Div>
      <Head>
        <title>Clothes</title>
      </Head>
      {user?.user === "admin" && (
        <div style={{ display: "flex" }}>
          <Link href="/create">Створити нову картку</Link>
          <button onClick={changeForm}>Опт</button>
        </div>
      )}
      <FilterName position="center" value={input} marginbottom="15px" />

      <DivColumn>
        <ClothesListType clothes={clothes} count={count} />

        {loadingCloth || isPageLoading ? (
          <div style={{ width: "100%" }}>
            <Spinner />
          </div>
        ) : (
          <DivListClothes>
            <ClothesList clothes={clothes} />
            {clothes.length !== 0 && (
              <PaginationCloth
                clothes={clothes}
                count={count}
                handleChange={handleChange}
                currentPage={searchPage ? Number(searchPage) : 1}
              />
            )}
          </DivListClothes>
        )}
        {/* </div> */}
      </DivColumn>
      {signUpForm && (
        <Modal path={pathname} close={changeForm}>
          <div style={{ padding: "20px" }}>
            <SignUpForm
              signUpForm={signUpForm}
              toggleModal={changeForm}
              changeForm={changeForm}
            />
          </div>
          {/* <CLothesForm onSave={toggleModal} toggleModal={toggleModal} /> */}
        </Modal>
      )}

      {/* {signUpForm && (
          <SignUpForm
            signUpForm={signUpForm}
            // toggleModal={toggleModal}
            changeForm={changeForm}
          />
        )} */}
    </Div>
  );
};

// export async function getServerSideProps({ query }) {
//   const data = await getFetchClothes({ page: query.page });

//   return {
//     props: {
//       clothes: data?.data || null,
//       count: data?.allPage || null,
//     },
//   };
// }

export default Clothes;
