const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedLocations: [{ type: Schema.Types.ObjectId, ref: 'Location' }]
});

module.exports = mongoose.model('User', UserSchema);
