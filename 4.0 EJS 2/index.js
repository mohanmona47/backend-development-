import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Required for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Define the function properly
function getDayType() {
  const today = new Date("novemebr 15 ,2025 11:13:00");
  const day = today.getDay(); // Sunday = 0, Saturday = 6

  if (day === 0 || day === 6) {
    return { dayType: "the weekend", advice: "time to relax and recharge" };
  } else {
    return { dayType: "a weekday", advice: "time to work hard" };
  }
}

// ✅ Use it inside the route
app.get("/", (req, res) => {
  const { dayType, advice } = getDayType();
  res.render("index.ejs", { dayType, advice });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
