// The Memento is a programming pattern that provides the ability to save an object's state for later restoration.

// The Writer class is responsible for working with text.
class Writer {
  // The #content property represents the current text. It is initialized as an empty string.
  #content = "";

  // Setter for the content property. It accepts newContent (new text) to be set as the current text.
  // Each time a new value is assigned, the #store() method is called, which saves the current text state in versions.
  set content(newContent) {
    this.#content = newContent;
    this.#store();
  }

  // Getter for the content property.
  get content() {
    return this.#content;
  }

  // Private method #store is used to save the current text state.
  // It calls the static method create of the Version class, passing the current text as an argument.
  #store() {
    Version.create(this.content);
  }

  // Method restore restores the previous text state by calling the static method restore of the Version class.
  // This method returns the most recently saved text version, which we set as the current text.
  restore() {
    this.#content = Version.restore().content;
  }
}

// The Version class is responsible for creating and storing text versions.
class Version {
  // The constructor of the Version class takes a content argument and sets it.
  // This argument represents the saved text version.
  constructor(content) {
    this.content = content;
  }

  // The #versions property is a private static array, empty by default, that stores all created versions.
  static #versions = [];

  // The static method create takes a content argument (version text) and creates a new instance of the Version class with the content.
  // The created instance is added to the versions array.
  static create(content) {
    this.#versions.push(new Version(content));
  }

  // The static method restore removes the last element of the array,
  // and returns the most recent saved text version from the versions array.
  static restore() {
    this.#versions.pop();
    return this.#versions[this.#versions.length - 1];
  }
}
console.log("Task 5 ====================================");

// Create a new instance of the Writer class
const writer = new Writer();

// Assign text using the setter
writer.content = "This is the initial text.";
writer.content = "Edited text.";
writer.content = "Updated text.";

// Print the current text
console.log(writer.content);

// Restore the previous text
writer.restore();
console.log(writer.content);

// Restore the previous text again
writer.restore();
console.log(writer.content);
