var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  C4 = mongoose.model('C4');

module.exports.getC4 = function(req, res, next) {
  if (!Validations.isObjectId(req.params.C4Id)) {
    return res.status(422).json({
      err: null,
      msg: 'C4Id parameter must be a valid ObjectId.',
      data: null
    });
  }
  C4.findById(req.params.C4Id).exec(function(err, C4) {
    if (err) {
      return next(err);
    }
    if (!C4) {
      return res
        .status(404)
        .json({ err: null, msg: 'C4 not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'C4 retrieved successfully.',
      data: C4
    });
  });
};

module.exports.getC4 = function(req, res, next) {
  C4.find({}).exec(function(err, C4) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg: 'C4s retrieved successfully.',
      data: C4
    });
  });
};

module.exports.getC4BelowPrice = function(req, res, next) {
  if (!Validations.isNumber(req.params.price)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid number.',
      data: null
    });
  }
  C4.find({
    price: {
      $lt: req.params.price
    }
  }).exec(function(err, C4) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'C4s priced below ' +
        req.params.price +
        ' retrieved successfully.',
      data: C4
    });
  });
};

module.exports.createC4 = function(req, res, next) {
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price);
    req.body.component &&
    Validations.isString(req.body.component);
    req.body.seller &&
    Validations.isString(req.body.seller);
    
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  C4.create(req.body, function(err, C4) {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      err: null,
      msg: 'C4 was created successfully.',
      data: C4
    });
  });
};

module.exports.updateC4 = function(req, res, next) {
  if (!Validations.isObjectId(req.params.C4Id)) {
    return res.status(422).json({
      err: null,
      msg: 'C4Id parameter must be a valid ObjectId.',
      data: null
    });
  }
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  req.body.updatedAt = moment().toDate();

  C4.findByIdAndUpdate(
    req.params.C4Id,
    {
      $set: req.body
    },
    { new: true }
  ).exec(function(err, updatedC4) {
    if (err) {
      return next(err);
    }
    if (!updatedC4) {
      return res
        .status(404)
        .json({ err: null, msg: 'C4 not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'C4 was updated successfully.',
      data: updatedC4
    });
  });
};

module.exports.deleteC4 = function(req, res, next) {
  if (!Validations.isObjectId(req.params.C4Id)) {
    return res.status(422).json({
      err: null,
      msg: 'C4Id parameter must be a valid ObjectId.',
      data: null
    });
  }
  C4.findByIdAndRemove(req.params.C4Id).exec(function(
    err,
    deletedC4
  ) {
    if (err) {
      return next(err);
    }
    if (!deletedC4) {
      return res
        .status(404)
        .json({ err: null, msg: 'C4 not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'C4 was deleted successfully.',
      data: deletedC4
    });
  });
};
