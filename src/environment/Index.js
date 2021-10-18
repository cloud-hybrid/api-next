import * as Assertion from "assert";
import * as Process from "process";
import * as FS from "fs";

const Variables = [
    ["CI", typeof Boolean()],
    ["Server", typeof String()],
    ["Environment", typeof String()],
    ["GitLab-Token", typeof String()],
    ["GitHub-Token", typeof String()]
];

const Content = () => String(FS.readFileSync(".env", { encoding: "UTF-8" }));

const Error = (Variable) => String("Environment Variable" + " (" + Variable[0] + ")" + " " + "Type !:=" + " " + Variable[1]);

process.env = { ... Process.env, ... JSON.parse(Content()) };

Variables.forEach((Variable) => {
    Assertion.strictEqual(typeof process.env[Variable[0]], Variable[1], Error(Variable));
});

export default () => process.env = {...Process.env, ...JSON.parse(Content())};
