import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { NAVIGATION_MENU_ROUTES } from "constants/routes";

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
  navlinkProps,
} from "./styles";

import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  const routesKey = Object.keys(NAVIGATION_MENU_ROUTES);
  const headerLinks = routesKey.map((route) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }: { isActive: boolean }) => navlinkProps(isActive)}
        to={
          NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
        }
      >
        {route}
      </HeaderLink>
    );
  });

  const footerLinks = routesKey.map((route) => {
    return (
      <FooterLink
        key={v4()}
        to={
          NAVIGATION_MENU_ROUTES[route as keyof typeof NAVIGATION_MENU_ROUTES]
        }
      >
        {route}
      </FooterLink>
    );
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
        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            alt="Logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
          />
        </FooterLogo>
        <FooterNavigation>{footerLinks}</FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
