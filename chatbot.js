// chatbot.js

class DomainSpecificChatbot {
    constructor() {
        this.bot_name = "Ishika";
        this.bot_age = 21;
        this.bot_city = "Surat";
        this.bot_author = "Ishika";
    }

    getResponse(reply) {
        reply = reply.toLowerCase();

        if (this.isGreeting(reply)) {
            return "Hello!! Welcome..";
        } else if (this.isAskingAboutAge(reply)) {
            return "I'm " + this.bot_age;
        } else if (this.isAskingHowAreYou(reply)) {
            return "I'm fine...";
        } else if (this.isAskingWhereLive(reply)) {
            return "I live in " + this.bot_city;
        } else if (this.isExitCommand(reply)) {
            return "Goodbye! Have a nice day!";
        } else {
            return "Sorry, I didn't get you.";
        }
    }

    isGreeting(reply) {
        return /hi|hello|hey|welcome/i.test(reply);
    }

    isAskingAboutAge(reply) {
        return /age.*your/i.test(reply);
    }

    isAskingHowAreYou(reply) {
        return /how.*are.*you/i.test(reply);
    }

    isAskingWhereLive(reply) {
        return /where.*live.*you/i.test(reply);
    }

    isExitCommand(reply) {
        return /exit|bye|quit/i.test(reply);
    }
}

module.exports = DomainSpecificChatbot;
