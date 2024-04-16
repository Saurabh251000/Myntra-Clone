import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { LoginSchema, SignupSchema } from "../types.js"

export const signup = async (req, res) => {
	console.log("request aaya");
	const signupPayload = req.body;
	// console.log(signupPayload);
	const parsedPayload = SignupSchema.safeParse(signupPayload);
	console.log(parsedPayload);
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: "You sent the wrong inputs",
		});
		return;
	}

	try {
		const { fullName, email, password, mobileNumber } = req.body;

		const user = await User.findOne({ email }, { mobileNumber });

		if (user) {
			if (user.email === email) {
				return res.status(400).json({ error: "Email already exists" });
			}
			else {
				return res.status(400).json({ error: "Mobile number already exists" });
			}
		}


		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			fullName,
			email,
			password: hashedPassword,
			mobileNumber
		});



		if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				email: newUser.email,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	const loginPayload = req.body;
	const parsedpayload = LoginSchema.safeParse(loginPayload);

	if (!parsedpayload.success) {
		res.status(411).json({
			msg: "You sent the wrong inputs",
		});
		return;
	}

	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
			mobileNumber: user.mobileNumber
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};