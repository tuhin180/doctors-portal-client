const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout.js/Main");

const routes = createBrowserRouter([{ path: "/", element: <Main></Main> }]);
export default routes;
