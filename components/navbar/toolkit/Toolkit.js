import xw, { cx } from "xwind";
import BalanceDisplay from "./BalanceDisplay";
import NetworkSwitch from "./NetworkSwtich";
import WalletButton from "./WalletButton";

//"react native style"
const styles = {
  toolkit: xw`
      flex items-center
      bg-legal-gray-100
      px-0.5 py-0.5
      space-x-2
      justify-between
      hidden
      md:flex
    `,
};

const Toolkit = ({ className, children, ...props }) => (
  <div css={styles.toolkit}>
    <WalletButton />
  </div>
);

export default Toolkit;
