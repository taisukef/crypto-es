import crypto from "crypto";

class SALT {
  constructor (keylen) {
    this.keylen = keylen;
  }

  createKey (password, salt) {
    return Uint8Array.from(crypto.scryptSync(password, salt, this.keylen / 8));
  }
}

export default SALT;
