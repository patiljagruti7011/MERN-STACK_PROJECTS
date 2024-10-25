// app.js
const readline = require('readline-sync');
const { getResponse } = require('./chatbot');

function startChat() {
    console.log("Welcome to the Domain-Specific Chatbot!");
    
    while (true) {
        const userInput = readline.question('You: ');
        
        if (userInput.toLowerCase() === 'exit') {
            console.log('Chatbot: Goodbye!');
            break;
        }

        const response = getResponse(userInput);
        console.log(`Chatbot: ${response}`);
    }
}

startChat();
