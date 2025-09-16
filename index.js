import app from "./src/server.js";
import { connectDB } from "./src/lib/db.js";

const PORT = process.env.PORT || 5050;

async function startServer() {
  try {
    await connectDB();
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
  }
}

startServer();
