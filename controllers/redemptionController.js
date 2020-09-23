const Redemption = require('../models/redemption');
const Entry = require('../models/entry');
const AppError = require('../config/appError');

exports.redeemCode = async(req, res, next) => {
    try {
        let {phone, code} = req.body;
        const codeExists = await Entry.findOne({code: code});
        if(!codeExists) return next(new AppError('code does not exist', 404));
        if(codeExists.used) return next(new AppError('code has already been redeemed', 409));
        const redeemed = await Redemption.create({phone, code});
        // disburse vendor airtime
        await codeExists.update({used: true});
        res.status(201).json({
            status: 'success',
            data: redeemed
        })
    } catch (error) {
        return next(error);
    }
}