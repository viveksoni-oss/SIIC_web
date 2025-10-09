export const SearchbarFocus = (event, searchBarRef) => {
  if (event.key == "/") {
    searchBarRef.current.focus();
    event.preventDefault();
  }
};
export const SearchbarBlur = (e, searchBarRef) => {
  if (e.key == "Escape") {
    console.log(e);
    searchBarRef.current.blur();
    e.preventDefault();
  }
};
