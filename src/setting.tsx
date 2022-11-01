type keyStrValStr = { [key: string]: string };
export const menuItems: keyStrValStr = {
  Home: "/home",
  Blogs: "/blogs",
  IDE: "/ide",
};

export const footerCSS = {
  backgroundColor: "lightblue",
  textAlign: "center" as const,
};
export let textFooter: string = "Copyright ©; fmide.com";
export let btnTextAddNewAccount: string = "New Account";
export let btnTextOk: string = "OK";
export let btnTextCancel: string = "Cancel";
export let titleAddNewAccount: string = "Account Name";
export let defaultAccountName: string = "Account Name";

export const testIdInputAddNewAccount: string = "input addNewAccount";
