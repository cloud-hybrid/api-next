import { default as Library } from "../library/Index.js";

export const Application = Library.API;
export const Router = Library.Router;

Application.listen(8080, () => {
    import("./routes/Index.js");
    import("../middleware/Index.js");

    console.log("Server running on port 8080");
    console.log("   - http://localhost:8080");
    console.log("");
});
