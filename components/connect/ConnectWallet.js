/* Example with @emotion/react */
import Link from "next/link";
import xw, { cx } from "xwind";
import MetaMask from "./wallet/MetaMask";
import WalletConnect from "./wallet/WalletConnect";

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

const ConnectWallet = ({ className, children, ...props }) => {
  return (
    <div css={styles.connectWallet}>
      <h2 css={styles.title}>Connect to your wallet</h2>
      <p css={styles.description}>
        Please select a wallet to connect to this app
      </p>
      <div css={styles.buttonWrapper}>
        <MetaMask />
        <WalletConnect />
      </div>
      <div css={styles.linkWrapper}>
        <Link href="/">
          <span css={styles.link}>What is wallet?</span>
        </Link>
        <span css={styles.suggestWrapper}>
          <span>Can't find your wallet?</span>
          <span css={styles.link}>Suggest Wallet</span>
        </span>
      </div>
      <div css={styles.termsWrapper}>
        <div>By connecting to your wallet, you can transfer new spl-token</div>
      </div>
    </div>
  );
};

export default ConnectWallet;
