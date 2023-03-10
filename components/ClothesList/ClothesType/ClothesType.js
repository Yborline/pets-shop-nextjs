import Link from "next/link";
import { LinkActive, LinkNormal, Li } from "./ClothesType.styled";
import { useRouter } from "next/router";

const ClothesType = ({ id, path, title }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Li key={id}>
        <Link href={path}>
          {pathname === path ? (
            <LinkActive>{title}</LinkActive>
          ) : (
            <LinkNormal>{title}</LinkNormal>
          )}
        </Link>
        {/* <Link href={path}>{title}</Link> */}
      </Li>
    </>
  );
};
export default ClothesType;
