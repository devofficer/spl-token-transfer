/* Example with @emotion/react */
import xw, { cx } from "xwind";

//"react native style"
const styles = {
  connectButton: xw`
    flex flex-col items-center justify-center
    bg-white space-y-2
    w-48 py-6 rounded-lg
    hover:shadow-md hover:cursor-pointer hover:border
  `,
  connectTitle: xw`
    text-sm
  `,
};

export default styles;
