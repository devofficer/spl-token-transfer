/* Example with @emotion/react */
import Link from "next/link";
import xw, { cx } from "xwind";
import MetaMask from "../connect/wallet/MetaMask";
import WalletConnect from "../connect/wallet/WalletConnect";
import ReceiveToken from "./ReceiveToken";
import SendToken from "./SendToken";
//"react native style"
const styles = {
  connectWallet: xw`
    flex flex-col items-center
    w-11/12 sm:w-10/12 md:w-8/12 lg:w-5/12 h-3/5
    rounded-t-lg lg:rounded-t-none lg:rounded-l-lg
    bg-white shadow-md
    justify-center space-y-4
    font-inter
  `,
  title: xw`
    text-3xl font-bold
  `,
  description: xw`
    text-gray-500 text-xs
  `,
  buttonWrapper: xw`
    flex items-center
    my-10
  `,
  linkWrapper: xw`
    flex items-center justify-between space-x-20
    border-t-2 border-b-2
    py-4 text-xs
  `,
  link: xw`
    text-legal-blue-100 font-bold
  `,
  suggestWrapper: xw`
    flex items-center justify-between space-x-1
  `,
  termsWrapper: xw`
    text-xs text-center
  `,
};

const TokenTransfer = ({ className, children, ...props }) => {
  return (
    <div css={styles.connectWallet}>
      <h2 css={styles.title}>Transfer new spl-token</h2>
      <p css={styles.description}>
        You can receive 100 new spl-token to your wallet
      </p>
      <div css={styles.buttonWrapper}>
        <ReceiveToken />
      </div>
      <p css={styles.description}>You can send token to other address</p>
      <div css={styles.buttonWrapper}>
        <SendToken />
      </div>

      <div css={styles.termsWrapper}>
        Please make sure that you are on a devnet.
      </div>
    </div>
  );
};

export default TokenTransfer;
