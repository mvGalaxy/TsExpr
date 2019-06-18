import {Server} from "./Server"

new Server().start()
    .then(() => {
        console.log(`Server started...running on 3000`);
    })
    .catch((err) => {
        console.error(err);
    })