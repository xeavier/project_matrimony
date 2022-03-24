import express from 'express';
import { isAuth, isAdmin } from '../util';
import Button from '../models/buttonModel';
import User from '../models/userModel';

const router = express.Router();

  router.post('/', isAuth, async (req, res) => {
	  console.log("post called")
     const userId = req.user._id;
     const user = await User.findById(userId);
     const button = new Button({
       amount: req.body.amount,
       title: req.body.title,
       button_label: req.body.buttonlable,
       button_type: req.body.ButtonType,
       button_theme: req.body.ButtonTheme,
       owner: req.user._id,
     }); 
    if(button){
      user.buttons.push(button._id)
      user.save()
      button.save()
      console.log(button)
      res.send(button);
    }
  }); 

  router.get('/:id/mine', async (req, res) => {
    const buttons = await Button.find({ owner: req.params.id });
    console.log(buttons)
    if (buttons) {
      console.log(buttons)
      res.send(buttons);
    } else {
      res.status(404).send({ message: 'buttons Not Found.' });
    }
  });

  router.get('/:id', async (req, res) => {
    const button = await Button.findById({ _id: req.params.id });
    // console.log(button)
    if (button) {
      res.send(button);
    } else {
      res.status(404).send({ message: 'button Not Found.' });
    }
  });

  router.put('/:id', isAuth, async (req, res) => {
    const buttonid = req.params.id;
    const button = await Button.findById(buttonid);
    if (button) {
      button.is_active = req.body.is_active;
      const updatedButton = await button.save();
      if (updatedButton) {
        return res
          .status(200)
          .send({ message: 'Page Updated', data: updatedButton });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Button.' });
  });
export default router;