# targilon7
link to targilon7 github: (https://github.com/Korallev21/targilon7.git)

1- This sequence is determined by the JavaScript Event Loop, which prioritizes synchronous code, then Microtasks, and finally Macrotasks.
console.log(1) and console.log(4) are synchronous operations, so they execute immediately and in order (Output: 1, 4).
Promise.resolve().then(() => console.log(3)) is placed into the Microtask Queue. Once the synchronous code finishes, the Event Loop processes all Microtasks before moving on to Macrotasks (Output: 3).
setTimeout(() => console.log(2), 0) is a Macrotask . Even with a delay of 0 milliseconds, it must wait for the Call Stack and the entire Microtask Queue to empty before it can be processed (Output: 2).

2-