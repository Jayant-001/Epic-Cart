import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO);
        const con = mongoose.connection;

        con.on("connected", () => {
            console.log("DB connected");
        });

        con.on("error", (err) => {
            console.log("DB connection error ", err);
        });
    } catch (error) {
        console.log("DB error", error);
    }
}
