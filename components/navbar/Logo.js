/* Example with @emotion/react */
import Link from "next/link";
import Image from "next/image";

const Logo = ({ className, children, ...props }) => {
  return <Image src={"/images/logo.png"} width={193} height={38} />;
};

export default Logo;
