import history from "./browser-history";

const handleClick = (event) => {
  event.preventDefault();

  history.push({
    pathname: event.currentTarget.pathname,
  });
};

export default handleClick;
