import { Schema, models, model } from "mongoose";

const TextSchema = new Schema({
  text: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Text = models.Text || model("Text", TextSchema);

export default Text;
