/* Example with @emotion/react */
import Carousel from "nuka-carousel";
import xw from "xwind";

const styles = {
  imgContainer: xw`
    w-full h-80 flex items-center justify-center
  `,
  img: xw`
    h-60
  `,
};

const images = [
  "/images/carousel/carousel-1.png",
  "/images/carousel/carousel-2.png",
  "/images/carousel/carousel-3.png",
];

const CustomCarousel = ({ className, children, ...props }) => {
  return (
    <Carousel
      wrapAround={true}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => <></>}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => <></>}
      defaultControlsConfig={{
        pagingDotsStyle: {
          fill: "white",
          marginLeft: "5px",
          marginRight: "5px",
        },
      }}
    >
      {images.map((image) => (
        <div key={image} css={styles.imgContainer}>
          <img css={styles.img} src={image} alt={image} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
