var express = require('express'),
  router = express.Router(),
  ProductCtrl = require('../controllers/ProductController');

  var express = require('express'),
  router = express.Router(),
  C4Ctrl = require('../controllers/C4Controller');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/Product/getProducts', ProductCtrl.getProducts);
router.get('/Product/getProduct/:ProductId', ProductCtrl.getProduct);
router.get(
  '/Product/getProductsBelowPrice/:price',
  ProductCtrl.getProductsBelowPrice
);
router.post('/Product/createProduct', ProductCtrl.createProduct);
router.patch('/Product/updateProduct/:ProductId', ProductCtrl.updateProduct);
router.delete('/Product/deleteProduct/:ProductId', ProductCtrl.deleteProduct);

//-------------------------------C4 Routes-----------------------------------
router.get('/C4/getC4', C4Ctrl.getC4);
router.get('/C4/getC4/:C4Id', C4Ctrl.getC4);
router.get(
  '/C4/getC4BelowPrice/:price',
  C4Ctrl.getC4BelowPrice
);
router.post('/C4/createC4', C4Ctrl.createC4);
router.patch('/C4/updateC4/:C4Id', C4Ctrl.updateC4);
router.delete('/C4/deleteC4/:C4Id', C4Ctrl.deleteC4);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
