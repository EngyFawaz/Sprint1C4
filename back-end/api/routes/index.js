var express = require('express'),
  router = express.Router(),
  ProductCtrl = require('../controllers/ProductController');

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


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
