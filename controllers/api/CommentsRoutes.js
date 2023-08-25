const router = require('express').Router();
const { Comments, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const commentsData = await Comments.findAll({
      include: [
        {
          model: User,
        },
        // {
        //   model: SongPosts,
        // },
      ],
    });

    // error checking
    res.status(200).json(commentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create
router.post('/', withAuth, async (req, res) => {
  try {
    const { post } = req.body;
    const commentsData = await Comments.create({
      post,
      user_id: req.session.user_id,
    });
    res.status(200).json(commentsData);
  } catch (err) {
    res.status(400).json(err);
  }
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
    */
});



module.exports = router;
