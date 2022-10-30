/*44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/


function makeSandwiches(...item) {
    for (let i = 0; i < item.length; i++) {
        console.log('Adding ' + item[i] + ' to your Sandwich')
    }
    console.log('Your sandwich is ready');
    console.log('......................')


}

makeSandwiches("bbq chicken")
makeSandwiches("beef", "pineapple", "mustard");
makeSandwiches("peanut", "butter")