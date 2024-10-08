/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// Function to return a promise that resolves after t1 seconds
function wait1(t1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, t1 * 1000);
    });
  }
  
  // Function to return a promise that resolves after t2 seconds
  function wait2(t2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, t2 * 1000);
    });
  }
  
  // Function to return a promise that resolves after t3 seconds
  function wait3(t3) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, t3 * 1000);
    });
  }
  
  // Function that uses Promise.all to wait for all three promises and returns the total time taken
  function calculateTime(t1, t2, t3) {
    const start = Date.now();
  
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
      const end = Date.now();
      return end - start; // Return the time taken in milliseconds
    });
  }

module.exports = calculateTime;
