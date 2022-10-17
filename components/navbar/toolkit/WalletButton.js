/* Example with @emotion/react */
import xw, { cx } from "xwind";
import { useSelector, useDispatch } from "react-redux";
import { connected } from "../../../store/slices/walletSlice";
import WalletUtil from "../../../utils/wallet";

//"react native style"
const styles = {
  walletButton: xw`
    relative
    flex justify-center
    py-2 px-4
    border border-transparent
    text-sm leading-5 font-medium
    rounded-full
    text-white
    bg-legal-blue-100
    hover:bg-legal-blue-200
    focus[outline-none ring-2 ring-gray-400]
    active:bg-legal-blue-300
    transition duration-150 ease-in-out
  `,
};

const WalletButton = ({ className, children, ...props }) => {
  const dispatch = useDispatch();
  const isWalletConnected = useSelector((state) => state.wallet.isConnected);
  const walletAddress = useSelector((state) => state.wallet.address);

  const onConnect = async () => {
    const walletInfo = await WalletUtil.connect();
    dispatch(connected(walletInfo));
  };

  return (
    <button {...props} css={styles.walletButton} onClick={onConnect}>
      {isWalletConnected ? walletAddress : `Connect to a wallet`}
    </button>
  );
};

export default WalletButton;
