import { ethers } from "ethers";

const connect = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      let address = await signer.getAddress();
      return { connected: true, address: address };
    } catch (error) {
      return { connected: false, address: "" };
    }
  }
  return { connected: false, address: "" };
};

export default {
  connect,
};
