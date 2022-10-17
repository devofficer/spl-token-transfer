/* Example with @emotion/react */
import xw, { cx } from "xwind";
import Image from "next/image";

//"react native style"
const styles = {
  networkSwitch: xw`
    items-center
    flex justify-between
    space-x-2
    py-2 px-4
    border
    text-sm leading-5 font-medium
    rounded-full
    text-legal-blue-100
    bg-white
    hover:bg-gray-200
    focus[outline-none ring-2 ring-gray-400]
    active:bg-gray-300
    transition duration-150 ease-in-out
  `,
  label: xw`
    w-32
    text-left
  `,
};

const NetworkSwitch = ({ className, children, ...props }) => {
  return (
    <button {...props} css={styles.networkSwitch}>
      <Image
        src={"/images/wallet/networks/ethereum.png"}
        width={24}
        height={24}
      />
      <span css={styles.label}>Ethereum</span>
      <Image src={"/images/wallet/arrow-down.png"} width={20} height={20} />
    </button>
  );
};

export default NetworkSwitch;
