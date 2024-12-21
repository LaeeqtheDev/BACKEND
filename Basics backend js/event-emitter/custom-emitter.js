const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello bsdk";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}

const myEmitterInstance = new MyCustomEmitter();
myEmitterInstance.on("greeting", (input) => {
  console.log(`Greeting event:`, input);
});

myEmitterInstance.greet("Laeeq Shah");
