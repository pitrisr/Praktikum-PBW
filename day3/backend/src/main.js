import express from "express";

const app = express();

app.use(express.json());

const port = 7000;

app.get("/", (_req, res) => {
    res.send({nama: "Pitri"});
});

app.get("/makanan", (_req, res) => {
    res.send([
    {
        id : 1,
        nama : "Mie Sedap",
        rasa : "Ayam",
    },
    {
        id : 2,
        nama : "Ayam",
        rasa : "Rendang",
    },
    {
        id : 3,
        nama : "kangkung",
        rasa : "pedas",
    },
])
})

app.get("/minuman", (_req, res) =>{
    res.send ([
        {
            id : 1,
            nama : "Nutrisari",
            rasa : "Jeruk Nipis",
        },
        {
            id : 2,
            nama : "Marimas",
            rasa : "Mangga",
        },
    ]);
});

app.post ("/create", (req, res) =>{
    res.send({nama : req.body});
});

app.listen(port, () =>{
    console.log(`Aplikasinya jalan di port ${port}`)
})