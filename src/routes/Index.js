import { Application, Router } from "../index.js";

import * as Test from "./test/Index.js";

//Application.get("/", Test.default);

import * as Schema from "./schema/index.js";

Application.get("/api/v1/schema/github/organization", Schema.API.GitHub.Organization)

console.log(Application)

export default () => Application;
