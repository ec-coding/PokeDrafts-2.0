module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            // isAuthenticated checks if the user is logged in
            return next()
        } else {
            res.redirect('/')
            // if the user is not logged in, bring them back to the login page
        }
    },
    ensureGuest: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/profile')
        }
    },
}