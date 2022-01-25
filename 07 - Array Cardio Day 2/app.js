    /* Code to show console on window */
(function (logger) {
  console.old = console.log;
  console.log = function () {
      var output = "", arg, i;

      for (i = 0; i < arguments.length; i++) {
          arg = arguments[i];
          output += "<span class=\"log-" + (typeof arg) + "\">";

          if (
              typeof arg === "object" &&
              typeof JSON === "object" &&
              typeof JSON.stringify === "function"
          ) {
              output += JSON.stringify(arg);   
          } else {
              output += arg;   
          }

          output += "</span>&nbsp;";
      }

      logger.innerHTML += output + "<br>";
      console.old.apply(undefined, arguments);
  };
})(document.querySelector("#logger"));
/*End of Code = taken and editted from http://stackoverflow.com/questions/20256760/javascript-console-log-to-html*/

    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
    
    const thisYear = (new Date()).getFullYear();
      
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      console.log('is at least one person 19 or older?');
      const isAdult = people.some(person => {
          return thisYear - person.year >= 19;
      })
      console.log({isAdult});
      console.log('');
      // Array.prototype.every() // is everyone 19 or older?
      console.log('is everyone 19 or older?');
      const allAdult = people.every(person => {
        return thisYear - person.year >= 19;
      })
      console.log({allAdult});
      console.log('');
      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      console.log('find the comment with the ID of 823423');
      const findComment = comments.find(comment => {
          return comment.id === 823423;
      })
      console.log({findComment});
      console.log('');
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      console.log('delete the comment with the ID of 823423');
      const findIndexToDelete = comments.findIndex(comment => {
          return comment.id === 823423
      })
      console.log(findIndexToDelete);
      const newComments = [
          ...comments.slice(0, findIndexToDelete),
          ...comments.slice(findIndexToDelete + 1)
      ];
      console.log(newComments);
      console.table(newComments);
      console.log('');