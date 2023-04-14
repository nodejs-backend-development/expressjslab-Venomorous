const requestTime = (req, res, next) => {
    const start = process.hrtime();

    res.on('finish', () => {
        const elapsed = process.hrtime(start);
        const elapsedTimeInMs = elapsed[0] * 1000 + elapsed[1] / 1000000;
        console.log(`Request to ${req.path} took ${elapsedTimeInMs.toFixed(3)} ms`);
    });

    next();
};

module.exports = requestTime;
