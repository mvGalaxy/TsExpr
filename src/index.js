"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
new Server_1.Server().start()
    .then(() => {
    console.log(`Server started...running on 3000`);
})
    .catch((err) => {
    console.error(err);
});
