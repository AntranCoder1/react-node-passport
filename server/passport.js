const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "718778022741-sinr5spqpl85mgihh5qo0sef3e4sfq4m.apps.googleusercontent.com" ;
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "2414754f2f95e665699e";
const GITHUB_CLIENT_SECRET = "51345e63fee7d743687424edb397604d398c310e";

const FACEBOOK_APP_ID = "382617330282297";
const FACEBOOK_APP_SECRET = "2ab4fc9ec0afd06de0f80a2d3be2477d";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})