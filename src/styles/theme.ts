interface Size {
  mobile: string;
  tablet: string;
}

const size: Size = {
  mobile: "765px",
  tablet: "1023px",
};

export const device = {
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
};
