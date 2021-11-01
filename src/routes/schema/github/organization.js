import * as Process from "process";

import { Router } from "./../../../index.js";

import { default as Schema } from "./../../../schemas/GitHub/Index.js";

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

    /// Server-Side Logging
    Process.stdout.write(
        JSON.stringify({
            "[Debug]": "Generating Schema"
        }, null, 4) + "\n" + "\n"
    );

    /// Return Data + Response Header(s)
    const Response = {
        Status: 200,
        Type: "Application/JSON",
        Body: {
            Schema: Schema.Organization
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

    _();
});

export default Router;
