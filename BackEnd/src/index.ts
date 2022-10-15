import { app } from "./app";
import mongoose from "mongoose";

const port: string | undefined = process.env.PORT;
const startServer = () => {
	try {
		app.listen(port, () =>
			console.log(`server running on port ${port} ✅`)
		);

		mongoose.connect(process.env.MONGODB_URL as string, () =>
			console.log("Connected to the database")
		);
	} catch (error: unknown) {
		console.log({
			message: (error = "Failed to connect to the database ❌"),
		});
	}
};

startServer();
