import express from 'express';
import Category from '../models/categoryModel';
const router = express.Router();

router.get('/create', async (req, res) => {
	const name = 'Electronics'
	const category = new Category({name})
  try {
	let newCategory = await category.save();
	res.status(201).send({ response: `Category ${newCategory._id}` });
  } catch (err) {
	res.status(500).send(err);
  }
  });

  router.get('/sub_create', async (req, res) => {
	const parent_name = '61717e723e1264d2da702ad8'
	const child_name = 'Asus'
	let parent = parent_name ? parent_name : null;
	const category = new Category({name: child_name, parent})
  try {
	let newCategory = await category.save();
	buildAncestors(newCategory._id, parent)
	res.status(201).send({ response: `Category ${newCategory._id}` });
  } catch (err) {
	res.status(500).send(err);
  }
  });

  router.get('/', async (req, res) => {
	try {
		 const result = await Category.find({ slug: req.query.slug })
		 .select({
		 "_id": false, 
		 "name": true,
		 "ancestors.slug": true,
		 "ancestors.name": true }).exec();
		 res.status(201).send({ "status": "success", "result": result     });
	} catch (err) {
		res.status(500).send(err);
	}
	});


	router.get('/descendants', async (req, res) => {
		try {
			const result = await Category.find({ "ancestors._id":   req.query.category_id })
			 .select({ "_id": false, "name": true })
			 .exec();
		   res.status(201).send({ "status": "success", "result": result });
		   } catch (err) {
			 res.status(500).send(err);
		   }
		})

  const buildAncestors = async (id, parent_id) => {
	let ancest = [];
	try {
		let parent_category = await Category.findOne({ "_id":    parent_id },{ "name": 1, "slug": 1, "ancestors": 1 }).exec();
 if( parent_category ) {
		   const { _id, name, slug } = parent_category;
		   const ancest = [...parent_category.ancestors];
		   ancest.unshift({ _id, name, slug })
		   const category = await Category.findByIdAndUpdate(id, { $set: { "ancestors": ancest } });
		 }
	  } catch (err) {
		  console.log(err.message)
	   }
 }
export default router;