// define styles here as object sets with APIs i.e. isActive etc...
// then we can use these in glamourous and DRY up our style code but also maintaining consistent styling and scalability
// at the same time each component is its own complete 'lego block' complete with props(data), logic, and styles

export const payTMcolors = {
  lt_blue: "#01B9F5",
  dark_Blue: "#012B74",
  lt_grey: "#EEF0EB",
};

export const wrapper = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: payTMcolors.lt_blue,
  padding: 20,
  margin: 5,
  border: "2px solid",
  borderColor: payTMcolors.dark_Blue,
  listStyle: "none",
  fontFamily: "'Varela Round', sans-serif",
  letterSpacing: "4px",
};

export const btn = {
  background: payTMcolors.lt_grey,
  borderColor: payTMcolors.dark_Blue,
  border: "2px solid",
  borderRadius: "4px",
  fontFamily: "'Varela Round', sans-serif",
  letterSpacing: "4px",
  fontWeight: "600",
  height: "25px",
};

export const sectionWithFlexGrow = flexPercent=> ({
  background: "#01B9F5",
  marginRight: 'auto',
  marginLeft: 5,
  width: flexPercent,
});
