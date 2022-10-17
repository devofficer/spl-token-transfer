/* Example with @emotion/react */
import Link from "next/link";
import Image from "next/image";

const Logo = ({ className, children, ...props }) => {
  return <Image src={"/images/logo.png"} width={106} height={50} />;
};

export default Logo;
