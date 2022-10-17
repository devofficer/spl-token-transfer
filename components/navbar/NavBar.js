/* Example with @emotion/react */
import xw, { cx } from "xwind";

import Logo from "./Logo";
import Toolkit from "./toolkit/Toolkit";

//"react native style"
const styles = {
  navbar: xw`
    fixed top-0
    flex items-center flex-wrap w-full
    bg-legal-gray-100
    pt-6 pb-4 pl-8 pr-8
    border-b
    justify-between
  `,
};

const NavBar = ({ className, children, ...props }) => {
  return (
    <>
      <nav css={styles.navbar}>
        <Logo />
        <Toolkit />
      </nav>
    </>
  );
};

export default NavBar;
