Revisiting Basic Data Structures via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn, or anything I am reminded of that I may have forgotten.

- Reminded how to use .splice() to manipulate arrays:
    - Can use to remove items from an array. Takes a starting index and a number of elements to remove. Example:

    ```
    function removeColors(arr) {
        arr.splice(2,1);
        return arr;
    }
    
    let greenGone= removeColors(["blue","red","green","yellow","orange","violet","pink"]); //Returns ["blue","red","yellow","orange","violet","pink"];
    
    ```

    - Can also add items in place of those removed. Example:

    ```
    function replaceColors(arr) {
        arr.splice(1,6,"da","ba","de","da","ba","di");
        return arr;
    }
    
    let song = replaceColors(["blue","red","green","yellow","orange","violet","pink"]); //Returns ["blue","da","ba","de","da","ba","di"]
    
    ```

    - Reminded how to use .slice() to extract/copy a value or number of values without removing them from the original array. Example:

    ```
    function forecast(arr) {

    const niceWeather = arr.slice(2, 4);
    return niceWeather;

    }

    forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']); //Returns ["warm","sunny"]
    
    ```