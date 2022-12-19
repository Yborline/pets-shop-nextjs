import { useTranslation } from "react-i18next";

const Heading = ({ tag, text }) => {
  const { t } = useTranslation();
  const Tag = tag || "h1";
  return <Tag>{t(text)}</Tag>;
};
export default Heading;
