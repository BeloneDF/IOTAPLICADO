const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || "3000";

const app = express();
const prisma = new PrismaClient();
//redeploy


app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use(bodyParser.json({ limit: "40mb" }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));

app.post("/lamp", async (req, res) => {
  const job = await prisma.lamp.create({ data: req.body });
  res.json(job);
});

app.post("/lamp/:id", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.params.id;
  const job = await prisma.lamp.update({
    where: {
      id: Number(id),
    },
    data: {
      on: req.body.on
    },
  });
  
  res.json(job);
});

app.get("/lamp", async (req, res) => {
  const job = await prisma.lamp.findMany({
    orderBy: [{
      id: "asc"
    }]
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.json(job);
});

app.get("/lamp/:id", async (req, res) => {
  const id = req.params.id;
  const job = await prisma.lamp.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.header("Access-Control-Allow-Origin", "*");
  res.json(job);
});

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});
//teste
