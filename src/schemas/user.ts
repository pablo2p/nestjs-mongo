import { Schema } from 'mongoose';

export const UsersSchema = new Schema({
  name: String,

  usuario: String,
});

export const UserDefinition = {
  name: 'Users',
  collection: 'usuarios',
  schema: UsersSchema,
};
