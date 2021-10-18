import { default as Library } from "../library/Index.js";

import { Cast } from "./schemas/Interface.js";

export const Application = Library.API;
export const Router = Library.Router;

Application.listen(8080, async () => {
    const Import = async () => {
        return Promise.allSettled(([
            import("./environment/Index.js").then((Module) => Module),
            import("./middleware/Index.js").then((Module) => Module),
            import("./routes/Index.js").then((Module) => Module)
        ]));
    };

    const $ = await Import();

    console.debug($);

    const Schemas = await import("./schemas/Index.js").then((Module) => Module.default);

    console.debug(JSON.stringify(Schemas, null, 4));

    const Casts = Cast(Schemas);

    console.debug(JSON.stringify(Casts, null, 4));
}).on("listening",  () => {
    console.log("Server running on port 8080");
    console.log("   - http://localhost:8080");
    console.log("");
});
