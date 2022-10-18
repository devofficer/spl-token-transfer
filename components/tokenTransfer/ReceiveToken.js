import { clusterApiUrl, Connection, PublicKey, Keypair } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import xw from "xwind";
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

const ReceiveToken = ({ setLoading, toast }) => {
  const { publicKey: toPublicKey } = useWallet();
  async function receiveFreeToken() {
    setLoading(true);
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const fromWallet = Keypair.fromSecretKey(Uint8Array.from(SECRET_KEY));
    const mint = new PublicKey(TOKEN_IDENTIFIER);
    const tokenPublicKey = new PublicKey(TOKEN_ACCOUNT_ADDRESS);

    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      fromWallet,
      mint,
      toPublicKey
    );
    console.log(`toTokenAccount ${toTokenAccount.address}`);

    const signature = await transfer(
      connection,
      fromWallet,
      tokenPublicKey,
      toTokenAccount.address,
      fromWallet.publicKey,
      100000000
    );
    console.log(`finished transfer with ${signature}`);
    setLoading(false);
    toast.success("Received token to your wallet");
  }
  return (
    <button css={styles.walletButton} onClick={receiveFreeToken}>
      Receive 100 token
    </button>
  );
};

export default ReceiveToken;
