# targilon7
link to targilon7 github: (https://github.com/Korallev21/targilon7.git)

1- This sequence is determined by the JavaScript Event Loop, which prioritizes synchronous code, then Microtasks, and finally Macrotasks.
console.log(1) and console.log(4) are synchronous operations, so they execute immediately and in order (Output: 1, 4).
Promise.resolve().then(() => console.log(3)) is placed into the Microtask Queue. Once the synchronous code finishes, the Event Loop processes all Microtasks before moving on to Macrotasks (Output: 3).
setTimeout(() => console.log(2), 0) is a Macrotask . Even with a delay of 0 milliseconds, it must wait for the Call Stack and the entire Microtask Queue to empty before it can be processed (Output: 2).

2-This result also shows the Event Loop's strict priority: synchronous code, then Microtask Queue, and finally the Macrotask Queue.
The initial setTimeout(1) is a Macrotask Queue.
The initial Promise.resolve().then block is immediately placed into and executed from the Microtask Queue(2)
The inner setTimeout(3) is added to the Macrotask Queue, but the inner Promise.resolve().then(4) is added back to the same Microtask Queue, allowing it to execute immediately.
Only after the entire Microtask Queue is completely cleared does the Event Loop move to the Macrotask Queue, processing the waiting tasks in the order they were submitted: first setTimeout(1), then setTimeout(3), resulting in the final output sequence.

3- 4 is logged synchronously so it's the first one.
then, the demo function calls the async function demo() which inside there is console.log(1) who is a synchronous.
Console.log(5) is also synchronous so it's previous to the await Promise.resolve() 2 and 3 commands which are Microtasks.

4- The code starts with level1(), inside this function  there is console.log(6) which is synchronous so this is the first one, next console.log(4) is synchronous which inside await level2() function.
Then it sends us to level3() - inside there is console.log(1) synchronous.
Then console.log(2) and console.log(3).
Finish with level3() we're moving to level2() by order, inside there is console.log(5) and then moving to level1() and write 7.

5- The only difference between this code and the one before is this instead of await level2() there is
level2();
So, all the numbers that came before 2 are the same- 6 4 1 and also 2.
When using await level2(), execution within level1 is paused until all level2s have finished, which pushes console.log(7) to the Microtask Queue .
When using level2(), level2() is called synchronously as a normal function.
The level1 function is not paused and does not release control to the for loop.
The code continues to run synchronously into level2(), it immediately proceeds to console.log(7).
Then, we're moving exactly as before - 3 and then 5.
