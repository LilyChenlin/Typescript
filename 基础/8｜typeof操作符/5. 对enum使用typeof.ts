enum UserResponse {
    No = 0, 
    Yes = 1,
}
// 相当于 
// (function (UserResponse) {
//     UserResponse[UserResponse["No"] = 0] = "No";
//     UserResponse[UserResponse["Yes"] = 1] = "Yes";
// })(UserResponse || (UserResponse = {}));

// 1. UserResponse {"No": 0, "Yes": 1}
// 2. UseResponse {"0": "No", "1": "Yes"}


type result = typeof UserResponse;

const a: result = {
    "No": 2,
    "Yes": 3
}

const b: result = {
    "0": "xixi",
    "1": "hah"
}
// result类型类似于 {"No": number, "YES": number}
console.log(a); // {No: 2, Yes: 3}
console.log(b); // {No: 2, Yes: 3}
