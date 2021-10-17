import { Application } from "../src/index.js";

Application.use((_, response, $) => {
    response.setHeader("Server", "IO-Development"); $();
});
