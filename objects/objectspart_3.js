//objects De structuring

const course =  {
    coursename: "javascript",
    price: 1000,
    courseInstructor: "xyz"
}
// course.courseInstructor

const {courseInstructor:instructor} = course
console.log(instructor)