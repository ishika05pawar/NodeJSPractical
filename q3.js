// app.js

const readline = require('readline');
const DomainSpecificChatbot = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('You: ', (reply) => {
        const chatbot = new DomainSpecificChatbot();

        if (chatbot.isExitCommand(reply)) {
            console.log('Bot: Goodbye! Have a nice day!');
            rl.close();
            return;
        }

        const response = chatbot.getResponse(reply);
        console.log('Bot:', response);
        promptUser(); // Ask for input again
    });
}

console.log('Bot: Hello! How can I assist you today?');
promptUser();
