import { useState } from "react";
import xw, { cx } from "xwind";
import {
  SECRET_KEY,
  TOKEN_IDENTIFIER,
  TOKEN_ACCOUNT_ADDRESS,
} from "../../utils/walletConfig";
//"react native style"
const styles = {
  walletButton: xw`
      relative
      flex justify-center
      py-2 px-4
      mx-auto
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
  sendTokenInput: xw`
      relative
      flex justify-center
      py-2 px-4
      mb-4
      border 
      text-sm leading-5 font-medium
      rounded-full
      text-gray-700
      shadow
      focus[outline-none ring-2 ring-gray-400]
      transition duration-150 ease-in-out
    `,
};

const SendToken = () => {
  const [toAddress, setToAddress] = useState();
  const [tokenAmount, setTokenAmount] = useState(0);
  const handleToAddress = (toAddress) => {
    setToAddress(toAddress);
  };
  const handleTokenAmount = (tokenAmount) => {
    setTokenAmount(tokenAmount);
  };

  async function sendMyToken() {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const fromWallet = Keypair.fromSecretKey(Uint8Array.from(SECRET_KEY));
    const mint = new PublicKey(TOKEN_IDENTIFIER);
    const fromTokenAccountAddress = new PublicKey(TOKEN_ACCOUNT_ADDRESS);
    const toWallet = new PublicKey(toAddress);
    // Get the token account of the toWallet address, and if it does not exist, create it
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      fromWallet,
      mint,
      toWallet
    );
    console.log(`toTokenAccount ${toTokenAccount.address}`);

    const signature = await transfer(
      connection,
      fromWallet,
      fromTokenAccountAddress,
      toTokenAccount.address,
      fromWallet.publicKey,
      tokenAmount * 1000000
    );
    console.log(`finished transfer with ${signature}`);
  }
  return (
    <div>
      <input
        css={styles.sendTokenInput}
        id="toAddress"
        type="text"
        placeholder="Recipient's address"
        onChange={(e) => handleToAddress(e.target.value)}
      ></input>
      <input
        css={styles.sendTokenInput}
        id="tokenAmount"
        type="text"
        placeholder="Amount"
        onChange={(e) => handleTokenAmount(e.target.value)}
      ></input>
      <button css={styles.walletButton}>Send token</button>
    </div>
  );
};

export default SendToken;
