import { default as API } from "./API.cjs";
import { default as Router } from "./Router.cjs";

/***
 *
 * @type {{Router: Router, API: (*|Express)}}
 *
 */

const Library = {
    API, Router
};

export default Library;
