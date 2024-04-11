const entrypoint = (req, res) => {
    try {
        res.json({
            message: " this is entry point",
            status: 200
        }).status(200).send("welcome to frappi backend");
    }
    catch{
        res.json({
            message:"unable to get /",
            status:500
        }).status(500)
    }

}

module.exports ={entrypoint}