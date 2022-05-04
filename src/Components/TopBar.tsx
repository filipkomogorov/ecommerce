import { BsFacebook, BsPinterest } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { styled } from "@mui/system";

import { Container } from "react-bootstrap";

import "./styles.css";

const theme = createTheme();

theme.typography.body2 = {
  fontSize: "8px",
  "@media (min-width:600px)": {
    fontSize: "10px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
};

const styles = {
  topbarStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  socialStyles: {
    marginRight: "50px",
  },
};

const StyledContainer = styled(Container, {})`
  justify-content: flex-end !important;
`;

const TopBar = () => {
  return (
    <StyledContainer>
      <ThemeProvider theme={theme}>
        <Box sx={styles.topbarStyles}>
          <Box sx={styles.socialStyles}>
            <a
              className=" fb some-top-bar"
              href="https://www.facebook.com/filip.komogorov/"
              target="_blank"
            >
              <BsFacebook size={18} />
            </a>
            <a
              className="ig some-top-bar"
              href="https://www.instagram.com/fkomogorov/"
              target="_blank"
            >
              <AiFillInstagram size={20} />
            </a>
            <a className="tw some-top-bar" href="#">
              <AiFillTwitterCircle size={20} />
            </a>
            <a className=" yt some-top-bar" href="#">
              <AiFillYoutube size={24} />
            </a>
            <a className="pint some-top-bar" href="#">
              <BsPinterest size={18} />
            </a>
            <a className=" tt some-top-bar" href="#">
              <FaTiktok size={18} />
            </a>
          </Box>
          <Typography variant="body2">
            Free delivery for orders over 39 EUR
          </Typography>
        </Box>
      </ThemeProvider>
    </StyledContainer>
  );
};

export default TopBar;
