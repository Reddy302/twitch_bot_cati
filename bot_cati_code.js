const tmi = require('tmi.js');
const fetch = require('tmi.js/node_modules/node-fetch');

// Define configuration options
const opts = {
    identity: {
        username: 'bot_cati',
        password: 'oauth:cmu0q6nwpyp6l4p2bwsgilm3cens15'
    },
    channels: [
        'CaticornReddy'
    ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('chat', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Set the snipe command
let snipe = 'US CENTRAL || MAIN SHOW SNIPES || FALL ON G0 || WEAR PURPLE';


// Called every time a chat comes in
function onMessageHandler(target, context, msg, self) {
    // Ignore chats from the bot
    if (self) { return; }

    // Remove whitespace from chat chat
    let commandName = msg.trim();

    let nick = context["display-name"];
    let chat;


    // Remove command updates or mentions from command
    if (commandName.includes(" ")) {
        commandName = msg.slice(0, msg.indexOf(" ")).trim();
        chat = msg.slice(msg.indexOf(" ") + 1).trim();
    } else {
        chat = '';
    }

    commandName = commandName.toLowerCase();

    // If the command is known, let's execute it
    if (commandName === '!dice') {
        const num = rollDice();
        client.say(target, `You rolled a ${num}!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!snipe') {
        client.say(target, snipe);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!subraid') {
        client.say(target, 'catico1Cati catico1Cati CATI RAID catico1Pls catico1Pls CATI RAID catico1Cati catico1Cati CATI RAID catico1Pls catico1Pls CATI RAID catico1Cati catico1Cati CATI RAID catico1Pls catico1Pls CATI RAID');
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!raid') {
        client.say(target, '🦄🐱 CATI RAID 🦄🐱 CATI RAID 🦄🐱 CATI RAID 🦄🐱 CATI RAID 🦄🐱 CATI RAID 🦄🐱 CATI RAID 🦄🐱');
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!lurk') {
        client.say(target, `Thank you for the lurk @${nick}! It means a lot to me for real. Love you, Cutie! See you soon!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!cd') {
        client.say(target, `The countdown is beginning in 10 seconds!`);
        setTimeout(() => { client.say(target, `5`); }, 10000);
        setTimeout(() => { client.say(target, `4`); }, 11000);
        setTimeout(() => { client.say(target, `3`); }, 12000);
        setTimeout(() => { client.say(target, `2`); }, 13000);
        setTimeout(() => { client.say(target, `1`); }, 14000);
        setTimeout(() => { client.say(target, `G0!`); }, 15000);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!snipe_update') {
        snipe = chat;
        client.say(target, `The snipe command has been updated to: ${chat}`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!sus') {
        let susPercent = percent();
        if (chat === '') {
            client.say(target, `@${nick} is ${susPercent}% sus.`);
        } else {
            client.say(target, `${chat} is ${susPercent}% sus.`);
        }
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!love') {
        let lovePercent = percent();
        if (chat === '') {
            client.say(target, `@${nick} has ${lovePercent}% love for themself.`);
        } else {
            client.say(target, `@${nick} loves ${chat} ${lovePercent}%.`);
        }
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!sexy') {
        let sexyPercent = percent();
        if (chat === '') {
            client.say(target, `@${nick} is ${sexyPercent}% sexy. Accurate?`);
        } else {
            client.say(target, `@${nick} thinks ${chat} is ${sexyPercent}% sexy. Bot_Cati knows all.`);
        }
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!commands') {
        client.say(target, `You can find my command list here: https://docs.google.com/spreadsheets/d/1w4Uo6daafyJ8UXmG1gzoklhZGFYTr2_zCHZZEB9MLN8/edit?usp=sharing.`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!discord') {
        client.say(target, 'You are more than welcome to join the rest of the Cati Crew on my Discord! https://discord.gg/vCAxypRANr');
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!ange') {
        client.say(target, `Heeeyyyyyy PISS WHORE!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!angeishere') {
        client.say(target, `What's up, POO SLUT?!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!intervention') {
        client.say(target, `Playing with your telescope too much? Killing yourself and your teammates because you love your telescope? Talk to @angegreen31 ! She has a lot of experience with genocide because of her telescope habit. Ange can help!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!sarah') {
        client.say(target, `Don't you fuck with @theprincess55! That's my mama bear!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!dan') {
        client.say(target, `Dan will win every time. Unless he's drunk. ;)`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!chicagofan' || commandName === '!ChicagoFan') {
        client.say(target, `@ChicagoFan513 is a fucking clutch legend!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!homies') {
        client.say(target, `@ChicagoFan513, @prophessional__, and @EnglishQuestion are the homies for real. Need a crown? Give them a call! <3`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!hug') {
        if (chat === '') {
            client.say(target, `@${nick} gives themself a big, long, warm, kinda dirty hug! <3`);
            console.log(`* Executed ${commandName} command`);
        } else {
            client.say(target, `@${nick} gives ${chat} a big, long, warm, kinda dirty hug! <3`);
            console.log(`* Executed ${commandName} command`);
        }
    } else if (commandName === '!spank') {
        if (chat === '') {
            client.say(target, `@${nick} has somehow figured out a way to spank themself?!`);
            console.log(`* Executed ${commandName} command`);
        } else {
            let spankings = percent();
            client.say(target, `@${nick} gives ${chat} ${spankings} spank spanks on the butt butt! I hope it's their birthday!`);
            console.log(`* Executed ${commandName} command`);
        }
    } else if (commandName === '!slap') {
        if (chat === '') {
            client.say(target, `@${nick} just slapped themself in the face?! Can someone check on @${nick} please?`);
            console.log(`* Executed ${commandName} command`);
        } else {
            let slaps = percent();
            client.say(target, `@${nick} gives ${chat} ${slaps} slaps right across their face! What are you gonna do ${chat}?!`);
            console.log(`* Executed ${commandName} command`);
        }
    } else if (commandName === '!stab') {
        if (chat === '') {
            client.say(target, `@${nick} just stabbed themself in the ass?! Can someone check on @${nick} please?`);
            console.log(`* Executed ${commandName} command`);
        } else {
            let stabs = percent();
            client.say(target, `@${nick} gives ${chat} ${stabs} stabs in the gut! What are you gonna do ${chat}?!`);
            console.log(`* Executed ${commandName} command`);
        }
    } else if (commandName === '!so') {
        let soNick;
        if (chat.startsWith('@')) {
            soNick = chat.slice(1);
        } else {
            soNick = chat;
        }
        let url = `https://www.twitch.tv/` + `${soNick}`;
        client.say(target, `Please make sure to check out @${soNick} on their channel at: ${url} Don't forget to give them a follow while you're there!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!fmk' || commandName === '!fmc') {
        getChatters(3);

        // -------------------------------------------------------------
        function getChatters(num) {
            let posChatters = [];

            let rdmUsers = [];

            // fetch the active users in the chat
            const fetchPromise = fetch("https://tmi.twitch.tv/group/user/caticornreddy/chatters");
            fetchPromise.then(function (response) {
                response.json().then(function (json) {
                    let activeUsers = json;

                    for (item in activeUsers.chatters) {
                        if (activeUsers.chatters[item].length < 1) {
                            continue;
                        } else {
                            for (let i = 0; i < activeUsers.chatters[item].length; i++) {
                                // put each result into one 'chatters' array
                                posChatters.push(activeUsers.chatters[item][i]);
                            }
                        }
                    }

                    // pop out result into final array of 3
                    num = parseInt(num);
                    let ind;
                    if (posChatters.length < num) {
                        client.say(target, `There are not enough chatters here to run this command yet. Please try again later.`);
                        console.log(`* Executed ${commandName} command`);
                    } else {
                        for (let i = 0; i < num; i++) {
                            ind = random();

                            if (posChatters[ind] === nick.toLowerCase() || posChatters[ind] === 'bot_cati') {
                                posChatters.splice(ind, 1);
                                num += 1;
                            } else {
                                rdmUsers.push(posChatters[ind]);
                                posChatters.splice(ind, 1);
                            }
                        }
                        client.say(target, `@${nick} has been very busy. I saw them fucking @${rdmUsers['0']}; I heard they married @${rdmUsers['1']}; and instead of killing @${rdmUsers['2']} they fucked them into a coma!! Someone help @${rdmUsers['2']}!!!`);
                        console.log(`* Executed ${commandName} command`);
                    }
                });
            });

            // use function to get random number for index of array
            function random() {
                return Math.floor(Math.random() * posChatters.length - 1) + 1;
            }
        }
        // -------------------------------------------------------------

    } else if (commandName === '!dgrules') {
        client.say(target, `Drink a shot of beer/liquor/wine every time you fall! Cati will stop when she gets too fucked up! You may have to count how many times you fall during the round and take the shots after.`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!kiss') {
        client.say(target, `@${nick} gives @${chat} a kiss to wake them from the coma. Did they wake up?`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!puff') {
        getChatters(1);

        // -------------------------------------------------------------
        function getChatters(num) {
            let posChatters = [];

            let rdmUsers = [];

            // fetch the active users in the chat
            const fetchPromise = fetch("https://tmi.twitch.tv/group/user/caticornreddy/chatters");
            fetchPromise.then(function (response) {
                response.json().then(function (json) {
                    let activeUsers = json;

                    for (item in activeUsers.chatters) {
                        if (activeUsers.chatters[item].length < 1) {
                            continue;
                        } else {
                            for (let i = 0; i < activeUsers.chatters[item].length; i++) {
                                // put each result into one 'chatters' array
                                posChatters.push(activeUsers.chatters[item][i]);
                            }
                        }
                    }

                    // pop out result into final array of 3
                    num = parseInt(num);
                    let ind;

                    if (posChatters.length < num) {
                        client.say(target, `There are not enough chatters here to run this command yet. Please try again later.`);
                        console.log(`* Executed ${commandName} command`);
                    } else {
                        for (let i = 0; i < num; i++) {
                            ind = random();
                            if (posChatters[ind] === nick.toLowerCase() || posChatters[ind] === 'bot_cati') {
                                posChatters.splice(ind, 1);
                                num += 1;
                            } else {
                                rdmUsers.push(posChatters[ind]);
                                posChatters.splice(ind, 1);
                            }
                        }
                        client.say(target, `@${nick} just lit a huge blunt and passed it over to you, @${rdmUsers['0']}! Take a puff and keep it rolling! Puff puff pass cutie!!`);
                        console.log(`* Executed ${commandName} command`);
                    }
                });
            });

            // use function to get random number for index of array
            function random() {
                return Math.floor(Math.random() * posChatters.length - 1) + 1;
            }
        }
        // -------------------------------------------------------------
    } else if (commandName === '!in') {
        let inches = percent();
        if (chat === '') {
            client.say(target, `@${nick} is a surprising ${inches} inches.`);
        } else {
            client.say(target, `${chat} is ${inches} inches.`);
        }
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!resurrect') {
        client.say(target, `@${nick} casts a complicated ass spell and resurrects ${chat} from the dead!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!welcome') {
        if (chat === '') {
            client.say(target, `Welcome in to the CatiCrew! We hope your time here is meowgical. We welcome all goofy weirdos to our family!! Thank you for stopping in. We hope you decide to stay!`);
        } else {
            client.say(target, `Thank you for stopping in, ${chat}! We hope you have a meowgical time! Please don't be afraid to be your true self here, and if you decide to stay; WELCOME TO THE FAMILY!`);
        }
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!kitteh') {
        client.say(target, `⠀⠀⠀⠀⠀⠀⢀⣾⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢧⡀ ⠀⠀⠀⠀⠀⢀⣾⠃⢘⣷⣀⣀⣤⣤⣤⣄⣀⢸⡏⠈⢷⡀ ⠀⠀⠀⠀⠀⣼⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⣷ ⠀⠀⠀⠀⢰⣿⣿⣿⣿⠁⠸⠗⢹⣿⡟⠰⠷⠈⢻⣿⣿⣿⡇ ⠀⠀⢐⣒⣺⣿⣿⣿⣿⣀⠀⣀⣼⠛⢷⣄⠀⢀⣼⣿⣿⣿⣿⣉⡁ ⠀⠀⠀⠤⢺⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⠢`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!ninja') {
        client.say(target, `ninja ninja ninja ninja ninjaey ninjaness ninjas jumping through ninja forrests. NINJA.`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!hosted') {
        client.say(target, `CATI, I hosted you!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!painless') {
        client.say(target, `What?! @IIPainlessII is on a hook again? WHAT ARE YOU DOING YOU BIG DUMMY!?!?!?! <3`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!victor') {
        client.say(target, `Get that little shit over here! I need to kick him in the face!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!play') {
        client.say(target, `If you'd like to play with me, let me know! I'm down to play with viewers.`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!lg') {
        client.say(target, `This will be Cati's last game of the stream. Thank you so much for tuning in, and make sure you stay for the raid to get those channel points! <3`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!troll') {
        client.say(target, `DON'T FEED THE TROLLS!!!`);
        console.log(`* Executed ${commandName} command`);

    } else if (commandName === '!dbd') {
        client.say(target, `My Dead by Daylight code is: CaticornReddyTTV#89e7 \nFeel free to join the lobby if there is an open spot!`);
        console.log(`* Executed ${commandName} command`);

    } else {
        console.log(`* Unknown command ${commandName}`);
    }

    // USE THE BELOW FOR TESTING OBJECTS
    //for (item in context) {
    //    console.log(item + ',' + context[item]);
    //}

    // Function called when the "dice" command is issued
    function rollDice() {
        const sides = 6;
        return Math.floor(Math.random() * sides) + 1;
    }

    // Function called when the "sus" command is issued
    function percent() {
        return Math.floor(Math.random() * 100) + 1;
    }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}