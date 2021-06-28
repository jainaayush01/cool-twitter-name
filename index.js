// Require all the packages
require("dotenv").config();
const client = require("twitter-api-client");

// Your Twitter account
const TWITTER_HANDLE = "jainaayush01";
const TWITTER_NAME = "Aayush Jain";

const twitterClient = new client.TwitterClient({
	apiKey: process.env.TWITTER_CONSUMER_KEY,
	apiSecret: process.env.TWITTER_CONSUMER_SECRET,
	accessToken: process.env.TWITTER_ACCESS_TOKEN,
	accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Test the twitter-api-client
async function testFollowersCount() {
	const data = await twitterClient.accountsAndUsers.usersShow({
		screen_name: "jainaayush01",
	});

	console.log(data.followers_count);
}

// testCount()

async function testUpdatedName() {
	const updatedProfile = await twitterClient.accountsAndUsers.accountUpdateProfile({
		name: new_name,
	});
	console.log(updatedProfile.name)
}

// testUpdatedName()

async function start() {
	const params = {
		screen_name: TWITTER_HANDLE, //name of twitter account
	};

	// fetch followers count
	const data = await twitterClient.accountsAndUsers.usersShow(params);
	const followers_count = data.followers_count;

	// update Name
	const new_name = `${TWITTER_NAME} and ${followers_count} others`;
	if (new_name != data.name) {
		const updatedProfile = await twitterClient.accountsAndUsers.accountUpdateProfile({
			name: new_name,
		});
		console.log(updatedProfile.name);
	}
}

// start everything
start();
setInterval(() => {
	start();
}, 6000);