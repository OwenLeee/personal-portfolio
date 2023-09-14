import MENU from "./menu";

const LIGHTBOX_ID: {
  [key in Uncapitalize<keyof typeof MENU> | "initial" | "empty"]: string;
} = {
  initial: "",
  empty: "empty",
  about: MENU.About,
  resume: MENU.Resume,
  portfolio: MENU.Portfolio,
};

export default LIGHTBOX_ID;
