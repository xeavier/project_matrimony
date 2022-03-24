import express from 'express';
import Store from '../models/storeModel';
import { isAuth, isAdmin } from '../util';
import User from '../models/userModel';

const router = express.Router();


router.use((req,res,next)=>{
  req.header(
    'Authorization', 'Bearer  677i66i',
    '4ri3jf34fj', 'fm3mvovmmv'
  )
  console.log("Time:",new Date())
  next()
})
//FOR ALL
router.get('/', async (req, res) => {
  const stores = await Store.find({}).populate('user');
  //console.log(`Stores List called By ${req.user._id}: ${req.user.name}`)
  console.log(" all called")
  res.send(stores);
});
//FOR ADMINS
router.get('/seller', isAuth , isAdmin, async (req, res) => {
    const stores = await Store.find({user: { _id: req.user._id}}).populate('user');
    console.log(`Stores List called By ${req.user._id}: ${req.user.name} Admin`)
    res.send(stores);
});
//FOR ALL
router.get('/:id', async (req, res) => {
  const store = await Store.findOne({_id: req.params.id});
  if (store) {
    console.log(store)
    res.send(store);
  } else {
    res.status(404).send({ message: 'Store Not Found.' });
  }
});

router.post('/:id/reviews', isAuth, async (req, res) => {
  const store = await Store.findById(req.params.id);
  if (store) {
    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    store.reviews.push(review);
    store.numReviews = store.reviews.length;
    store.rating =
      store.reviews.reduce((a, c) => c.rating + a, 0) /
      store.reviews.length;
    const updatedStore = await store.save();
    res.status(201).send({
      data: updatedStore.reviews[updatedStore.reviews.length - 1],
      message: 'Review saved successfully.',
    });
  } else {
    res.status(404).send({ message: 'Store Not Found' });
  }
});
//FOR ADMINS

  router.delete('/:id', isAuth, isAdmin, async (req, res) => {
    const storeProduct = await Store.findById(req.params.id);
    if (storeProduct) {
      await storeProduct.remove();
      res.send({ message: 'Store Deleted' });
    } else {
      res.send('Error in Deletion.');
    }
  });

  router.put('/:id', isAuth, isAdmin, async (req, res) => {
    const storeProduct = await Store.findById(req.params.id);
    if (storeProduct) {
      storeProduct.name =  req.body.name,
      storeProduct.description = req.body.description,
      storeProduct.address_city = req.body.address_city,
      storeProduct.address_state = req.body.address_state,
      storeProduct.address_postal_code = req.body.address_postal_code,
      storeProduct.address_country_code = req.body.address_country_code,
      storeProduct.bio = req.body.bio,
      storeProduct.image = req.body.image,
      storeProduct.user = req.user._id,

      await storeProduct.save();
      res.send({ message: 'Store Updared', storeProduct });
    } else {
      res.send('Error in Deletion.');
    }
  });

  router.post('/create', isAuth, isAdmin, async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId);
    const store = new Store({
      name: req.body.name,
      description: req.body.description,
      address_city: req.body.address_city,
      address_state: req.body.address_state,
      address_postal_code: req.body.address_postal_code,
      address_country_code: req.body.address_country_code,
      bio: req.body.bio,
      image: req.body.image,
      user: req.user._id,
    }); 
    /*const store = new Store({
      name: "rff",
      description: "rc",
      bio: "rcc",
      image: "rcc",
      user: req.user._id,
    });*/
    if(store){
      user.stores.push(store._id)
      user.save()
      store.save()
    res.send(user);
    }
  }); 
  export default router;