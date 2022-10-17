import xw, { cx } from "xwind";
import Image from "next/image";

//"react native style"
const styles = {
  balanceDisplay: xw`
    font-inter text-sm
    flex items-center
    bg-legal-gray-100
    px-0.5 py-0.5
    space-x-1
    justify-between
  `,
};

const BalanceDisplay = ({ className, children, ...props }) => (
  <div css={styles.balanceDisplay}>
    <Image src={"/images/wallet/gwei.png"} width={18} height={18} />
    <span>{props.balance}</span>
    <span>gwei</span>
  </div>
);

export default BalanceDisplay;
