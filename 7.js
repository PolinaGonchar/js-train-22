// Bridge is a design pattern that allows separating abstraction and implementation into separate classes, allowing them to have independent functionality.

// The Participant class represents a user who can send messages.
class Participant {
  constructor(alias, communicator) {
    this.alias = alias;
    this.communicator = communicator;
  }
  dispatchMessage(text) {
    const formattedMessage = this.prepareMessage(text);
    this.communicator.transmit(formattedMessage);
  }

  prepareMessage(text) {
    return `[${this.alias}]: ${text}`;
  }
}

// The SMSCommunicator class is responsible for sending messages via SMS.
class SMSCommunicator {
  static transmit(message) {
    console.log(`SMS sent: ${message}`);
  }
}

// The EmailCommunicator class is responsible for sending messages via Email.
class EmailCommunicator {
  static transmit(message) {
    console.log(`Email sent: ${message}`);
  }
}

console.log("Task 7 ====================================");

// Create two users - Max and Linda - who send messages using different communication methods.
const max = new Participant("Max", SMSCommunicator);
const linda = new Participant("Linda", EmailCommunicator);

// Max sends a message via SMS.
max.dispatchMessage("Hello!"); // Outputs: SMS sent: [Max]: Hello!

// Linda sends a message via Email.
linda.dispatchMessage("Hello!"); // Outputs: Email sent: [Linda]: Hello!
