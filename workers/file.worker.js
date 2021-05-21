// This is a module worker, so we can use imports (in the browser too!)
import faker from "faker";

addEventListener("message", (event) => {
  console.log("🚀 ~ file: file.worker.js ~ line 5 ~ addEventListener ~ event", event)
  postMessage(faker.name.findName());
});
