const Entry = require('../models/entry');
const AppError = require('../config/appError');
const _ = require('underscore');

const generateCode = (size = 10) => {
    let characters = "0123456789";
    characters = characters.split("");
    let selections = "";
    for (let i = 0; i < size; i++) {
        let index = Math.floor(Math.random() * characters.length);
        selections += characters[index];
        characters.splice(index, 1);
    }
    return selections;
}

exports.createEntry = async(req, res, next) => {
    try {
        let entryData = _.pick(req.body, ['phone', 'age', 'campaign_Interest']);
        let code = generateCode(8);
        entryData.code = code;
        const entry = await Entry.create(entryData);
        res.status(201).json({
            status: 'success',
            code: entry.code,
            data: entry
        })
    } catch (error) {
        return next(error);
    }
}

exports.getEntries = async(req, res , next) => {
    try {
        const data = await Entry.find();
        res.status(200).json({
            status: 'success',
            count: data.length,
            data
        })
    } catch (error) {
        return next(error);
    }
}