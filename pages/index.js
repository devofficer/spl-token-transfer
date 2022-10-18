import xw from "xwind";
import ViewPort from "../components/viewport/Viewport";

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
    <ViewPort />
  </div>
);

export default Index;
