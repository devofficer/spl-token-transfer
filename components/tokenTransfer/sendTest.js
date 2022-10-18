const tokenAddress = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";

const fromAddress = "FROM_ADDRESS";
const toAddress = "TO_ADDRESS";

const fromPublicKey = new SolanaWeb3.PublicKey(fromAddress);
const toPublicKey = new SolanaWeb3.PublicKey(toAddress);

const tokenPublicKey = new SolanaWeb3.PublicKey(tokenAddress);
const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  fromPublicKey,
  tokenPublicKey,
  fromPublicKey,
  signTransaction // Don't pass that if you have the private key as a string
);

const toTokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  fromPublicKey,
  tokenPublicKey,
  toPublicKey,
  signTransaction // Don't pass that if you have the private key as a string
);

const transaction = new SolanaWeb3.Transaction().add(
  createTransferInstruction(
    // imported from '@solana/spl-token'
    fromTokenAccount.address,
    toTokenAccount.address,
    fromPublicKey,
    parseInt(amount * Math.pow(10, 6)), // tokens have 6 decimals of precision so your amount needs to have the same
    [],
    TOKEN_PROGRAM_ID // imported from '@solana/spl-token'
  )
);

// set a recent block hash on the transaction to make it pass smoothly
const latestBlockHash = await connection.getLatestBlockhash();
transaction.recentBlockhash = latestBlockHash.blockhash;

// set who is the fee payer for that transaction
transaction.feePayer = solPublicKey;

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
