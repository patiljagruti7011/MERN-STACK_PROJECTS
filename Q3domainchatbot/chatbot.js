// chatbot.js
const responses = {
    greeting: "Hello! How can I assist you today?",
    help: "I can help you with questions related to our services.",
    goodbye: "Goodbye! Have a great day!",
    unknown: "I'm sorry, I don't understand that."
};

function getResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return responses.greeting;
    } else if (lowerInput.includes('help')) {
        return responses.help;
    } else if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
        return responses.goodbye;
    } else {
        return responses.unknown;
    }
}

module.exports = { getResponse };
