const cookieSession = require("cookie-session");
const express = require("express");
const passportSetup = require("./passport");
const passport = require("passport");
const cors = require("cors");
const authRouter = require("./routes/auth.routes");
const app = express();

app.use(cookieSession(
    {
        name: "Session",
        keys: ["anTran"],
        maxAge: 24 * 60 * 60 * 100
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}))

app.use("/auth", authRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})