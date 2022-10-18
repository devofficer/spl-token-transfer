import xw from "xwind";

import Logo from "./Logo";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
//"react native style"
const styles = {
  navbar: xw`
    fixed top-0
    flex items-center flex-wrap w-full
    bg-legal-gray-100
    pt-2 pb-2 pl-8 pr-8
    border-b
    justify-between
  `,
};

const NavBar = ({ className, children, ...props }) => {
  return (
    <>
      <nav css={styles.navbar}>
        <Logo />
        <WalletMultiButton />
      </nav>
    </>
  );
};

export default NavBar;
