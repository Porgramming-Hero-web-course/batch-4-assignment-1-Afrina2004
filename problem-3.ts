{

function countWordOccurrences(sentence: string, word: string): number {
       
       const lowerSentence = sentence.toLowerCase();
       const lowerWord = word.toLowerCase();
       const wordCount = lowerSentence.split(" ");
     
       let count = 0;
       for (const w of wordCount) {
        if(w === lowerWord){
            count ++
        }
       }
       return count;

      }
 
      console.log(countWordOccurrences("I love typescript", "typescript"));
    

    }
