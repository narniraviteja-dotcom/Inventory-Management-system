const protect = (req, res, next) => {
    console.log("Protected Route Accessed");
    next();
};

module.exports = { protect };