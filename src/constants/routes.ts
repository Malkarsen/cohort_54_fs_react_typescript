interface ROUTES_DATA {
  HOME: string;
  CONTACTUS: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  FACEBOOK: string;
  INSTAGRAM: string;
  YOUTUBE: string;
  NOT_FOUND: string;
}

export const ROUTES: ROUTES_DATA = {
  HOME: "/",
  CONTACTUS: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  FACEBOOK: "/clients/facebook",
  INSTAGRAM: "/clients/instagram",
  YOUTUBE: "/clients/youtube",
  NOT_FOUND: "*",
};

export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  "Contact Us" = "/contactUs",
  About = "/about",
  Login = "/login",
  Clients = "/clients",
};
