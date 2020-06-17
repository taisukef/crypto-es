import crypto from "crypto";

class AES_CTR {
  constructor (keylen) {
    this.keylen = keylen;
    this.algorithm = `AES-${keylen}-CTR`;
  }

  encrypt (key, iv, data) {
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);
    return Uint8Array.from(Buffer.concat([cipher.update(data), cipher.final()]));
  }

  decrypt (key, iv, encdata) {
    const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
    return Uint8Array.from(Buffer.concat([decipher.update(encdata), decipher.final()]));
  }
};

export default AES_CTR;
