import * as Process from "process";

import { Router } from "./../../index.js";

/// --> Module Entry Point
Router.use((request, response, _) => {
    const Request = { /// Debugging Purposes + Downstream Logic
        Headers: request.headers,
        URL: {
            Base: request.baseUrl,
            Origin: request.originalUrl,
            Normalized: request.url,
        },
    };

    /// Return Data + Response Header(s)
    const Response = {
        Status: 200,
        Type: "Application/JSON",
        Body: {
            Key: "Value"
        }
    };

    /// Server-Side Logging
    Process.stdout.write(
        JSON.stringify({
            Request, Response
        }, null, 4) + "\n" + "\n"
    );

    /// HTTP(s) Response
    response.status(Response.Status);
    response.contentType(Response.Type);
    response.json({
        Response, Request
    });
});

export default Router;
