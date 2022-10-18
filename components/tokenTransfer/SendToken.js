import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import {
  getOrCreateAssociatedTokenAccount,
  TOKEN_PROGRAM_ID,
  createTransferInstruction,
} from "@solana/spl-token";
import xw, { cx } from "xwind";
import {
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

const SendToken = ({ setLoading, toast }) => {
  const { publicKey: fromPublicKey, signTransaction } = useWallet();
  const [toAddress, setToAddress] = useState();
  const [tokenAmount, setTokenAmount] = useState(0);
  const handleToAddress = (toAddress) => {
    setToAddress(toAddress);
  };
  const handleTokenAmount = (tokenAmount) => {
    setTokenAmount(tokenAmount);
  };

  async function sendMyToken() {
    try {
      setLoading(true);
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      // const fromWallet = Keypair.fromSecretKey(Uint8Array.from(SECRET_KEY));
      const mint = new PublicKey(TOKEN_IDENTIFIER);
      const tokenPublicKey = new PublicKey(TOKEN_ACCOUNT_ADDRESS);
      const toPublicKey = new PublicKey(toAddress);
      // Get the token account of the toPublicKey address, and if it does not exist, create it
      const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromPublicKey,
        mint,
        fromPublicKey,
        signTransaction // Don't pass that if you have the private key as a string
      );

      const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromPublicKey,
        mint,
        toPublicKey,
        signTransaction // Don't pass that if you have the private key as a string
      );

      const transaction = new Transaction().add(
        createTransferInstruction(
          // imported from '@solana/spl-token'
          fromTokenAccount.address,
          toTokenAccount.address,
          fromPublicKey,
          parseInt(tokenAmount * Math.pow(10, 6)), // tokens have 6 decimals of precision so your amount needs to have the same
          [],
          TOKEN_PROGRAM_ID // imported from '@solana/spl-token'
        )
      );

      // set a recent block hash on the transaction to make it pass smoothly
      const latestBlockHash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockHash.blockhash;

      // set who is the fee payer for that transaction
      transaction.feePayer = fromPublicKey;

      // sign the transaction using the signTransaction method that we got from the useWallet hook above
      const signed = await signTransaction(transaction);

      // send the signed transaction
      const signature = await connection.sendRawTransaction(signed.serialize());

      // wait for a confirmation to make sure it went to the blockchain (optional)
      await connection.confirmTransaction({
        signature,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        blockhash: latestBlockHash.blockhash,
      });
      toast.success(`${tokenAmount} tokens are sent from your wallet`);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
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
        type="number"
        placeholder="Amount"
        onChange={(e) => handleTokenAmount(e.target.value)}
      ></input>
      <button css={styles.walletButton} onClick={sendMyToken}>
        Send token
      </button>
    </div>
  );
};

export default SendToken;
