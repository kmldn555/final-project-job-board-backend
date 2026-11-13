import express from "express";
import { globalError } from "./utils/errors.js";

const PORT = 8000;

const app = express();

// error
app.use(globalError);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
