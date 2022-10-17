import xw from "xwind";
import Viewport from "../components/viewport/ViewPort";

//"react native style"
const styles = {
  index: xw`
    py-6
    justify-center items-center
    h-screen
    w-full
  `,
};

const Index = () => (
  <div css={styles.index}>
    <Viewport />
  </div>
);

export default Index;
