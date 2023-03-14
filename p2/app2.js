
const fastify=require('fastify')({logger:true})
const axios=require('axios')
fastify.get('/',(req,res)=>{
    console.log("Uder api");
    res.send("server is running");
})


fastify.get('/photos', async (req, res) => {

    const albumId = req.query.albumId
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos", { params: { albumId } })
        res.send(data)


})
fastify.listen({port:3003},(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("server start running on 3000!");
    }
})