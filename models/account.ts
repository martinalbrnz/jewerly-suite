import { Schema, model, models } from 'mongoose';

const accountSchema = new Schema({
  name: {
    type: String,
    unique: true,
  }
})

const Account = models.Account || model('Account', accountSchema)

export default Account
