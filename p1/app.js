
const fastify=require('fastify')({logger:true})
const axios = require('axios')
fastify.get('/',(req,res)=>{
    res.send("server");
})

fastify.get('/users/:username', async (req, res) => {

    const username = req.params.username
        const { data } = await axios.get(`https://api.github.com/users/${username}`)
        var dataa = { login: data.login, repos: data.public_repos }
        res.send(dataa)
})
fastify.listen({port:4040},(err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("server start running on 4040!");
    }
})