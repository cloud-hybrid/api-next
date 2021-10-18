import { Application } from "../index.js";

Application.use((_, response, $) => {
    response.setHeader("Server", process.env["Server"]);

    $();
});

export default () => Application;
