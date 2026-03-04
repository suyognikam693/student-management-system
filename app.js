<<<<<<< HEAD
function login(user) {
    if (user.role === "student") {
        return "Student Dashboard";
    }
    if (user.role === "admin") {
        return "Admin Dashboard";
    }
    return "Unauthorized";
}
=======
const login = (user) => {
    switch (user.role) {
        case "student":
            return "Welcome Student";
        default:
            return "Access Denied";
    }
};
>>>>>>> a97b800 (Refactored to arrow function)

module.exports = login;
