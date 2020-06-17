import crypto from "crypto";

class CRNG {
  constructor (len) {
    this.len = len;
  }

  generate () {
    return Uint8Array.from(crypto.randomBytes(this.len));
  }
}

export default CRNG;
