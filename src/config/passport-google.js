import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { UserRepository } from "../user/user.repository.js";
import { UserResponseDto } from "../user/dto/user-response.dto.js";
import dotenv from "dotenv";

dotenv.config();

const userRepo = new UserRepository();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        if (!profile.emails || !profile.emails.length) {
          return done(new Error("No email found in Google profile"), null);
        }
        const email = profile.emails[0].value;
        let user = await userRepo.findByEmail(email);
        if (user) {
          return done(null, new UserResponseDto(user));
        } else {
          const newUser = {
            name: profile.displayName,
            email: email,
            googleId: profile.id
          };
          user = await userRepo.create(newUser);
          return done(null, new UserResponseDto(user));
        }
      } catch (error) {
        console.error(error);
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id || user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userService.getUserById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;