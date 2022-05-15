const db = require('../config/connection');
const { Users, Message, Rescue } = require('../models');
const userSeeds = require('./userSeeds.json');
const messageSeeds = require('./messageSeeds.json');
const rescueSeeds = require('./rescueSeeds.json');

db.once('open', async () => {
  await Users.deleteMany({})
  await Message.deleteMany({})
  await Rescue.deleteMany({})

  try {
    await Users.create(userSeeds);
    await Rescue.create(rescueSeeds);
    for (let i = 0; i < messageSeeds.length; i++) {
      const { _id, email } = await Message.create(messageSeeds[i]);
      const user = await Users.findOneAndUpdate(
        { email: email },
        {
          $addToSet: {
            messages: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});