import technicianImage from "assets/images/technician.png";
import StyledImageWithBackgroundShape from "./ImageWithBackgroundShape.styled";
import ImageWrapper from "./ImageWrapper.styled";

const ImageWithBackgroundShape = (props) => {
  return (
    <ImageWrapper>
      <StyledImageWithBackgroundShape
        src={technicianImage}
        alt="Technician repairing car"
      />
    </ImageWrapper>
  );
};

export default ImageWithBackgroundShape;
