/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size = "Large", text = "i love MOM") {
    console.log (
    'your shirt size is ' + size + ' and this message will be printed on it ' + text 
    );
}


make_shirt();
make_shirt("M");
make_shirt("S", "ALLAH");
