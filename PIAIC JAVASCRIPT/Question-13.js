/* 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */

let Array1 = ["R6", "bmw", "jetsky", "jet"];
/* the bellow code is using the map function to itreat the favArray and a new array with the value of the favArray added with the stringsin the switch statmet. */
let result = Array1.map((item) => {
    switch (item) {
        case "R6":
            return "i go to university on a R6";
            break;
            case "bmw":
                return "my dream is to buy a  new bmw car";
                break;
                case "jetsky":
                    return "i drove jetsky in attabad lake";
                    break;
                    case "jet":
                        return "my dream is to fly a fighter jet"
                        break;
                        default:

    }
})

/* the join () mthod creates and returns a new string by concentrating all of the elements in an array, separated by commas or a separator string . if the array has only one item,
then that item will be returned without using the separator.*/

let finalString = result.join(".\n");
console.log(finalString);
