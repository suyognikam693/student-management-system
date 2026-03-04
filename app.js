function login(user) {
    if (user.type === "student") {
        return "Student Portal";
    }
    return "Denied";
}

module.exports = login;
