import { default as Schema } from "../../library/Mongo.cjs";

export const Cast = (obj = []) => {
    const _ = {}

    Object.keys(obj).forEach((key, index) => {
        const $ = typeof obj[key];

        switch ($) {
            case "object":
                if (obj[key] !== null) {
                    _[key] = Cast(obj[key]);
                } else {
                    _[key] = null
                }
                break;
            case "boolean":
                _[key] = "boolean";
                break;
            case "number":
                _[key] = "number";
                break;
            case "bigint":
                _[key] = "integer";
                break;
            case "string":
                _[key] = "string";
                break;
            default:
                _[key] = null;
        }
    });

    return _;
}

export default Schema;
