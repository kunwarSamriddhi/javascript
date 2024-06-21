let user = {
    name: "sita",
    paidStatus: false,
    hasScholarship: false,
    gender: "female",
}
let post = (user.gender == "male") ? "Mr." : "Ms."


if (user.paidStatus) {
    console.log(`${post}${user.name} can give exam`)
} else if (user.hasScholarship) {
    console.log(`${post}${user.name} can give exam`)
} else {
    console.log(`${post}${user.name} can not give exam`)
}
