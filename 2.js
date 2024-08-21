// The Factory is a programming pattern that provides a general class for creating objects. 
// It considers the passed arguments and determines which class the object should belong to upon creation.
// The Book class describes a book in the store.
class Book {
  constructor({ title, author, coverColor }) {
    this.title = title;
    this.author = author;
    this.coverColor = coverColor;
  }

  describe() {
    return `Book: '${this.title}', author: '${this.author}', cover color: '${this.coverColor}'`;
  }
}

/**
 * The AudioBook class describes an audiobook in the store.
 */
class AudioBook {
  constructor({ title, author, audioLength }) {
    this.title = title;
    this.author = author;
    this.audioLength = audioLength;
  }

  describe() {
    return `Audiobook: '${this.title}', author: '${this.author}', duration: '${this.audioLength}'`;
  }
}

/**
 * The ProductFactory class is used to create product objects.
 */
class ProductFactory {
  static TYPE = {
    // TYPE is a static property that defines the types of products that can be created.
    BOOK: "book",
    AUDIOBOOK: "audiobook",
  };

  static createProduct(type, options) {
    switch (type) {
      case this.TYPE.BOOK:
        return new Book(options);
      case this.TYPE.AUDIOBOOK:
        return new AudioBook(options);
      default:
        throw new Error(`Product type does not exist: ${type}`);
    }
  }
}

console.log("Task 2 ====================================");

// Using ProductFactory to create a new book
const factoryBook = ProductFactory.createProduct(ProductFactory.TYPE.BOOK, {
  title: "Book Title",
  author: "Book Author",
  coverColor: "Blue",
});

// Logging the description of the new book
console.log(factoryBook.describe());

// Using ProductFactory to create a new audiobook
const factoryAudiobook = ProductFactory.createProduct(
  ProductFactory.TYPE.AUDIOBOOK,
  {
    title: "Audiobook Title",
    author: "Audiobook Author",
    audioLength: "5 hours",
  }
);

// Logging the description of the new audiobook
console.log(factoryAudiobook.describe());

// Attempting to create a product of an unsupported type
try {
  const factoryUnknown = ProductFactory.createProduct("comics", {});
} catch (error) {
  // Logging the error to the console
  console.error(error.message);
}
