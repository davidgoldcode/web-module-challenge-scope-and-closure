// 1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

//     ```js
    (function(){
      var a = b = 3;
    })();
    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));
    ```

// I predict the output will be:
'a defined? false' - b is most recently defined so it's read as a; or a = undefined
'b defined? true' - 
    
//     2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).
    
//     ```js
//     var addSix = createBase(6);
//     addSix(10); // returns 16
//     addSix(21); // returns 27
//     ```
    const addSix = function(num) {
        return function createBase {
            return num + 6;
        }
    }
//     3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
    
//     ## Resources
    
//     📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)
    
//     🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
    
//     ## Submission Format
    
//     Follow these steps for completing your project.
    
//     - [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
//     - [ ] Add your Team Lead as a reviewer on the pull request
//     - [ ] Your Team Lead will count the project as complete by merging the branch back into master
    