import app from "./app.js";

// console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
