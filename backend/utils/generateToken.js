import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d'
  });

  // Set cookie with appropriate options
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Milliseconds
    httpOnly: true, // Prevent XSS attacks (Cross-Site Scripting)
    secure: true, // Only send cookie over HTTPS (ensure you have HTTPS enabled)
    sameSite: "strict", // Prevent CSRF attacks (Cross-Site Request Forgery)
  });
};

export default generateTokenAndSetCookie;
