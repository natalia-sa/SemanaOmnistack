const booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const { user_id} = req.headers;
        const { spot_id} = req.params;
        const { date } = req.body;

        const booking = await booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })
        return res.json(booking);
    }
}