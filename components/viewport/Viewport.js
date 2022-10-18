/* Example with @emotion/react */
import { useWallet } from "@solana/wallet-adapter-react";
import xw from "xwind";
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

const Viewport = () => {
  const { publicKey } = useWallet();
  return (
    <div css={styles.viewport}>
      {publicKey ? <TokenTransfer /> : <ConnectWallet />}
    </div>
  );
};

export default Viewport;
