// The Chain of Responsibility is a design pattern that allows passing requests sequentially through a chain of handlers, 
// each of which can handle or pass the request further.
// AuthProcessor class for handling authentication.
class AuthProcessor {
  setNextProcessor(processor) {
    this.nextProcessor = processor;
    return processor;
  }

  validate(username, passkey) {
    if (this.nextProcessor) {
      return this.nextProcessor.validate(username, passkey);
    } else {
      console.log("Access denied");
      return false;
    }
  }
}

// TwoStepProcessor class, a handler that checks the two-factor code. Inherits from the base AuthProcessor class.
class TwoStepProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (
      username === "john" &&
      passkey === "password" &&
      this.isValidTwoStepCode()
    ) {
      console.log("Access granted with two-factor authentication");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
  isValidTwoStepCode() {
    return true;
  }
}

// RoleProcessor class, a handler that checks user roles. Inherits from the base AuthProcessor class.
class RoleProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (username === "guest") {
      console.log("Access granted with guest role");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

// CredentialsProcessor class, a handler that checks user credentials. Inherits from the base AuthProcessor class.
class CredentialsProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (username === "admin" && passkey === "admin123") {
      console.log("Access granted with credentials");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

// The Builder class for creating the handler chain object.
class ProcessorBuilder {
  constructor() {
    this.firstProcessor = null;
    this.lastProcessor = null;
  }

  add(processor) {
    if (!this.firstProcessor) {
      this.firstProcessor = processor;
      this.lastProcessor = processor;
    } else {
      this.lastProcessor.setNextProcessor(processor);
      this.lastProcessor = processor;
    }
    return this;
  }
  create() {
    return this.firstProcessor;
  }
}
console.log("Task 6 ====================================");

// Create a Builder for the handler chain.
const processorBuilder = new ProcessorBuilder();

// Add handlers to the chain using the builder.
const processor = processorBuilder
  .add(new CredentialsProcessor())
  .add(new TwoStepProcessor())
  .add(new RoleProcessor())
  .create();

// Check users using our handler chain.
processor.validate("admin", "admin123"); // Access granted with credentials
processor.validate("john", "password"); // Access granted with two-factor authentication
processor.validate("guest", "guest123"); // Access granted with guest role
processor.validate("user", "password"); // Access denied
