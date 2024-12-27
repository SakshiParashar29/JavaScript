const course = 
{
    coursename : "JavaScript Series",
    price : "999",
    courseInstructor : "Hitesh"
}

//const {courseInstructor} = course
// this name is too long for use so we can deconstruct it also
const {courseInstructor : instructor} = course
console.log(instructor);


/*JSON - JAVA SCRIPT OBJECT NOTATION */
/*
 Request: Your app sends a request to an API for user information.
 Response: The API sends the data back in JSON format.
 Processing: Your app parses the JSON to display the data in a user-friendly way.

 // A Json Object representation
  {
    "name" : "hitesh",
    "coursename" : "js in hindi",
    "price" : "free"
  }
 */

