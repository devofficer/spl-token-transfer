/* Example with @emotion/react */
import xw, { cx } from "xwind";
import TokenTransfer from "../tokenTransfer/TokenTransfer";
import ConnectWallet from "../connect/ConnectWallet";
//"react native style"
const styles = {
  viewport: xw`
    font-inter
    flex items-center justify-center flex-wrap
    w-full h-full
  `,
};

const Viewport = ({ className, children, ...props }) => {
  return (
    <div css={styles.viewport}>
      <ConnectWallet />
      <TokenTransfer />
    </div>
  );
};

export default Viewport;
