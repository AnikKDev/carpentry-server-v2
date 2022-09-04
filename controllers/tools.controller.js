const products = [
    { id: 1, name: "hammer" },
    { id: 2, name: "hammer2" },
    { id: 3, name: "hammer3" },
]

module.exports.getAllTools = (req, res, next) => {
    const { ip, params, query, body, headers } = req;
    const { limit, page } = query;
    console.log(limit, page)
    res.json(products)
    // res.send("tools found")
}

module.exports.getSingleTool = (req, res, next) => {
    console.log(req.params)
    res.send(`tool number: ${req.params.id}`)
    console.log(`tool number: ${req.params.id}`)
}

module.exports.saveATool = (req, res) => {
    res.send("tool added")
}

// module.export = { getAllTools }