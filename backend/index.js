import { app } from "./src/app.js";
import 'dotenv/config'
import dbConnect from "./src/db/index.js";

dbConnect().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server is listening on port:", process.env.PORT || 3000);
    })
}).catch(err => console.error("MongoDB connection failed", err));