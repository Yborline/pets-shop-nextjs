import ClothesListType from "../../../components/ClothesList/ClothesListType";

import { useRouter } from "next/router";

import Pagination from "../../../components/Pagination/Pagination";

import { getFetchType } from "../../../services/api";
import ClothesList from "../../../components/ClothesList/ClothesList/ClothesList";
import {
  Div,
  DivSpinner,
  DivColumn,
  DivMain,
  DivContent,
} from "../../../styles/type.styled";
import { usePageLoading } from "../../../hooks/hook";

import ButtonUp from "../../../components/ButtonUp/ButtonUp";
import Spinner from "../../../components/Spinner/Spinner";

const Type = ({ clothes, count }) => {
  console.log(clothes);
  console.log(count);
  const { isPageLoading } = usePageLoading();
  // const dispatch = useDispatch();
  // const clothes = useSelector(getType);
  // const count = useSelector(getCountType);
  const router = useRouter();
  const searchPage = router.query.page;
  const type = router.query.type;

  const handleChange = async (event, value) => {
    if (value) {
      router.query.page = value;
      router.push(
        `${router.pathname}?page=${router.query.page}&type=${router.query.type}`
      );
      // console.log(router);
      // router.push(router);
    }
    // else {
    //   router.query.page = searchPage;
    //   router.push(router);
    // }
  };

  // useEffect(() => {
  //   if (searchPage) {
  //     dispatch(fetchType({ searchPage, path: type }));
  //   }
  // }, [dispatch, searchPage, type]);

  return (
    <Div>
      <DivMain>
        <ClothesListType />
        {isPageLoading ? (
          <DivSpinner>
            <Spinner />
          </DivSpinner>
        ) : (
          <DivColumn>
            <DivContent>
              <ClothesList clothes={clothes} />
            </DivContent>
            {clothes.length !== 0 && (
              <Pagination
                currentPage={Number(searchPage)}
                clothes={clothes}
                count={count}
                handleChange={handleChange}
              />
            )}
          </DivColumn>
        )}
      </DivMain>
      <ButtonUp />
    </Div>
  );
};

// export async function getStaticPaths() {
//   const { data } = await fetchAll();
//   const paths = data.map((cloth) => ({
//     params: { id: cloth._id },
//   }));
//   return { paths, fallback: true };
// }

export async function getServerSideProps({ query }) {
  if (query.type || query.page) {
    const data = await getFetchType({ page: query.page, path: query.type });
    const { type, allPage } = await data;

    return {
      props: {
        clothes: type || null,
        count: allPage || null,
      },
    };
  }
}

// Embroidery.getServerSideProps = async ({ query }) => {
//   const data = await getFetchType({ page: query.page, path: query.type });

//   return {
//     clothes: data.type || null,
//     count: data.allPage || null,
//   };
// };

export default Type;
