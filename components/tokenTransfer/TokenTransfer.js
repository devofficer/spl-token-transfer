import xw from "xwind";
import ReceiveToken from "./ReceiveToken";
import SendToken from "./SendToken";

import { useState } from "react";
import Overlay from "../overlay";
import toast, { Toaster } from "react-hot-toast";
//"react native style"
const styles = {
  tokenTransfer: xw`
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
  termsWrapper: xw`
    text-xs text-center
  `,
};

const TokenTransfer = ({ className, children, ...props }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div css={styles.tokenTransfer}>
      {isLoading && <Overlay />}
      <h2 css={styles.title}>Transfer new spl-token</h2>
      <p css={styles.description}>
        You can receive 100 new spl-token to your wallet
      </p>
      <div css={styles.buttonWrapper}>
        <ReceiveToken setLoading={setLoading} toast={toast} />
      </div>
      <p css={styles.description}>You can send token to other address</p>
      <div css={styles.buttonWrapper}>
        <SendToken setLoading={setLoading} toast={toast} />
      </div>

      <div css={styles.termsWrapper}>
        Please make sure that you are on a devnet.
      </div>

      <Toaster
        position="top-right"
        duration="4000"
        toastOptions={{
          style: {
            fontSize: "12px",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </div>
  );
};

export default TokenTransfer;
