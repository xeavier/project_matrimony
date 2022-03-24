import express from 'express';
import { isAuth, isAdmin } from '../util';
import Link from '../models/linkModel';
import User from '../models/userModel';

const router = express.Router();

  router.post('/', isAuth, async (req, res) => {
	  console.log("post called")
     const userId = req.user._id;
     const user = await User.findById(userId);
     const meta = {
      key: req.body.meta.key,
      value: req.body.meta.value,
    };
     const link = new Link({
       amount: req.body.amount,
       payment_for: req.body.payment_for,
       type: '',
       is_email_notify: req.body.is_email_notify,
       email_to: req.body.email_to,
       phone_to: req.body.phone_to,
       is_email_notify: req.body.is_email_notify,
       is_sms_notify: req.body.is_sms_notify,
       refernce_id: req.body.refernce_id,
       is_expiry: req.body.is_expiry,
       meta: req.body.meta,
       owner: req.user._id,
     }); 
    if(link){
      user.links.push(link._id)
      user.save()
      link.save()
      console.log(link)
      res.send(link);
    }
  }); 

  router.get('/:id/mine', async (req, res) => {
    const links = await Link.find({ owner: req.params.id });
    console.log(links)
    if (links) {
      console.log(links)
      res.send(links);
    } else {
      res.status(404).send({ message: 'links Not Found.' });
    }
  });

  router.get('/:id', async (req, res) => {
    const page = await Link.findById({ _id: req.params.id });
    if (page) {
      res.send(page);
    } else {
      res.status(404).send({ message: 'pages Not Found.' });
    }
  });

  router.put('/:id', isAuth, async (req, res) => {
    const pageid = req.params.id;
    const page = await Link.findById(pageid);
    if (page) {
      page.is_active = req.body.is_active;
      const updatedPage = await page.save();
      if (updatedPage) {
        return res
          .status(200)
          .send({ message: 'Page Updated', data: updatedPage });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Page.' });
  });
export default router;