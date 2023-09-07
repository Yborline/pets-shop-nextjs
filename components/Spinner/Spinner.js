import { ColorRing } from "react-loader-spinner";
import { DivSpinner } from "./Spinner.styled";

const Spinner = () => {
  return (
    <DivSpinner>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#483D8B", "#8B008B", "#9932CC", "#FF00FF", "#FF69B4"]}
      />
    </DivSpinner>
  );
};

export default Spinner;
