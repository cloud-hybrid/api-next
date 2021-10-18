import { Octokit } from "octokit";

const flatten = (obj) => {
    const _ = {}

    Object.keys(obj).forEach((key, index) => {
        _[key] = typeof obj[key]

        if (typeof obj[key] === "object" && obj[key] !== null) {
            _[key] = flatten(obj[key]);
        } else (obj[key] === null) ? _[key] = null
            : _[key] = typeof obj[key];

    })

    return _;
};

const Data = async () => {
    const octokit = new Octokit({auth: process.env["GitHub-Token"]});

    const Organization = await octokit.rest.orgs.get({
        org: process.env["GitHub-Organization"]
    });

    const Entity = Organization.data;

    return JSON.stringify(flatten(Entity), null, 4);
};

export default async () => await Data();
