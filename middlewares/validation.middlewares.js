const validateForm = (req, res, next) => {
  let { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required" });

  if (typeof username !== "string" || typeof password !== "string")
    return res.status(429).json({ message: "Unprocessible identity" });

  username = username.trim();
  password = password.trim(); //This is to remove any leading or trailing whitespace

  if (username.length < 3 || password.length < 6) {
    return res.status(400).json({
      message:
        "Username must be at least 3 characters and password at least 6 characters long",
    });
  }

  req.credentials = { username, password };

  next();
};

module.exports = { validateForm };
