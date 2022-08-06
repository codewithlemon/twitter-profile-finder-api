# Twitter Profile Finder (search API)

This is a REST API that gets user profiles by their Twitter ID or username.

It requires a Twitter developer access token to be defined in the environment
to get access to Twitter APIs.

The project is based on Node.js and the Express framework.


## Instructions

To setup this project, enter the following commands:

```sh
git clone https://github.com/codewithlemon/twitter-profile-finder-api
cd twitter-profile-finder-api
npm install
```

Create a file called `.env` and paste in your Twitter developer access token.

```
TWITTER_ACCESS_TOKEN=...
```

Run the project in development mode.

```sh
npm run dev
```

Alternatively, you can run the project in production mode.

```sh
TWITTER_ACCESS_TOKEN=... npm run start
```
