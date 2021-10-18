import { default as Schema } from "./../Interface.js";

import { default as Organization } from "./Generator/Organization.js";

export default {
    Organization: JSON.parse(await Organization())
}
