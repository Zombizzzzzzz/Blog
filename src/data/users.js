const users = [
    {
        email: 'siddhantdahal16@gmail.com',
        password : '$2b$10$OeRBv2v0swyWXS6pSPBWAulTnYz6zkyfIVfgBC2GL/9pXNMNYm4Ri'

    }
]

import bcrypt from "bcrypt";

const hashed = await bcrypt.hash('QXv6b7T^{*l12!RB', 10);
console.log(hashed);
export const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};