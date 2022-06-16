import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({
  rating,
  style,
  onClick,
}: {
  style?: React.CSSProperties;
  rating: number;
  onClick?: React.MouseEvent<HTMLElement> | any;
}) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} onClick={() => onClick(index)} style={style}>
            {rating > index ? (
              <AiFillStar fontSize="20px" />
            ) : (
              <AiOutlineStar fontSize="20px" />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
