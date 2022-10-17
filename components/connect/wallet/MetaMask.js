/* Example with @emotion/react */
import Image from "next/image";
import styles from "./styles/ConnectStyle";
import { useDispatch } from "react-redux";
import WalletUtil from "../../../utils/wallet";
import { connected } from "../../../store/slices/walletSlice";

const MetaMask = ({ className, children, ...props }) => {
  const dispatch = useDispatch();
  const onConnect = async () => {
    const walletInfo = await WalletUtil.connect();
    dispatch(connected(walletInfo));
  };

  return (
    <div css={styles.connectButton} onClick={onConnect}>
      <Image
        src={"/images/wallet/connect/metamask.png"}
        width={39}
        height={36}
      />
      <span css={styles.connectTitle}>MetaMask</span>
    </div>
  );
};

export default MetaMask;
