let count = 0;
const viewCoult = (req, res, next) => {
    count++;
    console.log(count);

    // res.send('tools found');

    next();
}

module.exports = viewCoult;