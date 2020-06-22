import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("Join", {pageTitle: "Join"});
};

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("Join", {pageTitle: "Join"});
    } else{
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => res.render("Login", {pageTitle: "Log in"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => res.render("Logout");
export const userDetail = (req, res) => res.render("User Detail");
export const editProfile = (req, res) => res.render("Edit Profile");
export const changePassword = (req, res) => res.render("Change Password");