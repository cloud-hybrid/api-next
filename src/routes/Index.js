import { Application } from "../index.js";

import * as Test from "./test/Index.js";

Application.get("/", Test.default);

export default Application;
