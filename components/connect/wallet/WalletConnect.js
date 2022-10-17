/* Example with @emotion/react */
import Image from "next/image";
import styles from "./styles/ConnectStyle";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { connected } from "../../../store/slices/walletSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const WalletConnectButton = ({ className, children, ...props }) => {
  const [connector, setConnector] = useState(null);
  const dispatch = useDispatch();

  const subscribeToEvents = async () => {
    if (!connector) {
      return;
    }

    connector.on("session_update", async (error, payload) => {
      console.log(`connector.on("session_update")`);
    });

    connector.on("connect", (error, payload) => {
      console.log(`connector.on("connect")`);
    });

    connector.on("disconnect", (error, payload) => {
      console.log(`connector.on("disconnect")`);
      if (error) {
        throw error;
      }
    });

    if (connector.connected) {
      const { chainId, accounts } = connector;
      const address = accounts[0];
      dispatch(connected({ connected: true, address: address }));
      setConnector(connector);
    }
  };

  const onConnect = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    if (!connector.connected) {
      // create new session
      await connector.createSession();
    }

    // subscribe to events
    await subscribeToEvents();
  };

  return (
    <div css={styles.connectButton} onClick={onConnect}>
      <Image
        src={"/images/wallet/connect/walletconnect.png"}
        width={65}
        height={36}
      />
      <span css={styles.connectTitle}>Wallet Connect</span>
    </div>
  );
};

export default WalletConnectButton;
