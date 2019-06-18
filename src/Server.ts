import {ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware} from "@tsed/common";
import * as Path from "path";
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const rootDir = __dirname;

@ServerSettings({
    rootDir: Path.resolve(__dirname),
    port:3000,
    mount:{"/rest": "${rootDir}/controllers/**/*.js"
        },
    acceptMimes: ["application/json"]
})
export class Server extends ServerLoader {
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    public $onMountingMiddlewares(): void|Promise<any> {
        this
            .use(GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));

        return null;
    }
}

console.log(rootDir);
console.log(Server.arguments);
new Server().start();