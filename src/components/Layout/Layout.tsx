import { useNavigate } from "react-router-dom";

import {
  LayoutWrapper,
  Header,
  Logo,
  LogoImg,
  NavigationContainer,
  HeaderLink,
  Main,
  Footer,
  FooterLogo,
  FooterNavigation,
  FooterLink,
} from "./styles";

import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  const getStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
    padding: "10px",
    borderRadius: "15px",
    backgroundColor: isActive ? "rgba(148, 155, 201, 0.9)" : "transparent",
  });

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToMainPage}>
          <LogoImg
            alt="Logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
          />
        </Logo>
        <NavigationContainer>
          <HeaderLink style={getStyle} to="/">
            Home
          </HeaderLink>
          <HeaderLink style={getStyle} to="/contactUs">
            Contact Us
          </HeaderLink>
          <HeaderLink style={getStyle} to="/about">
            About
          </HeaderLink>
          <HeaderLink style={getStyle} to="/login">
            Login
          </HeaderLink>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            alt="Logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
          />
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
