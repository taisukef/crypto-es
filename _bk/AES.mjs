import crypto from "crypto";

class AES {
  constructor (keylen) {
    this.keylen = keylen;
    this.algorithm = `AES-${keylen}-OCB`; // can't create without auth tag length
  }

  encrypt (key, data) {
    const cipher = crypto.createCipher(this.algorithm, key);
    return Buffer.concat([cipher.update(data), cipher.final()]);
  }

  decrypt (key, encdata) {
    const decipher = crypto.createDecipheriv(this.algorithm, key);
    return Buffer.concat([decipher.update(encdata), decipher.final()]);
  }
};

export default AES;
