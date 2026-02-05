const add = require("./index");

if (add(2, 3) !== 5) {
  console.error("❌ Test Failed");
  process.exit(1); // FAIL
}

console.log("✅ Test Passed");
