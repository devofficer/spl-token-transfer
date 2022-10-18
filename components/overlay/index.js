import xw from "xwind";
import { BeatLoader } from "react-spinners";

const styles = {
  overlay: xw`
        absolute z-50 w-full h-full
        bg-black bg-opacity-50
        flex items-center justify-center
    `,
};

const Overlay = ({ children }) => {
  return (
    <div style={styles.overlay}>
      <BeatLoader color="#061D6E" />
    </div>
  );
};

export default Overlay;
