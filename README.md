# Real time Twitter followers banner

Playing around with Feedhive's [twitter-api-client](https://github.com/FeedHive/twitter-api-client)

![hero](https://i.ibb.co/FXNryG7/Followers.png)

## How to setup for your Twitter

Just fill in your API keys which you'll need to apply for a [Twitter developer account](https://developer.twitter.com/en/apply-for-access). It usually get's approved within 5 minutes.

```
const TWITTER_HANDLE = 'jainaayush01'
const twitterClient = new client.TwitterClient({
  apiKey: "YOUR TWITTER CONSUMER API KEY"
  apiSecret: "YOUR TWITTER CONSUMER API SECRET" 
  accessToken: "YOUR TWITTER ACCESS TOKEN"
  accessTokenSecret: "YOUR TWITTER ACCESS SECRET"
});

```
## Run the script

Install dependencies:
```
npm install
```

Start the app:

```
node index.js
```
or
```
npm start
```

Keep it running or deploy it on heroku for free and have fun!
P.S. If you need any help to deploy it on heroku DM me on Twitter [@jainaayush01](https://twitter.com/jainaayush01).


## How the script works

Summary:

1. Fetch your recent followers count using Twitter API. (Rate limit: 180 requests per 15 mins)
2. Update your Account Name using Twitter API. (Rate limit: 30 requests per 15 mins)

**Feel free to contribute to this project, would love to have you as a contributor. Just fork the project, create an issue, and then create a pull request!**

P.S. Special thanks to [Devesh](https://twitter.com/Deveshb15), this project is inspired by his idea of Twitter Profile Banner!