// not yet
import AES from "./AES.mjs";
import SALT from "./SALT.mjs";
import RNG from "./RNG.mjs";

const MESSAGE = "aiueo";
const PASSWORD = "password";

const salt = Buffer.from("0123456789ABCDEF");

const keylen = 128;

const key = new SALT(keylen).createKey(salt, PASSWORD);

const data = Buffer.from(MESSAGE);
console.log("org    :", MESSAGE);
console.log("data   :", data);

const cipher = new AES(keylen);

// encrypt
const encdata = cipher.encrypt(key, data);
console.log("key    :", key);
console.log("encdata:", encdata);

// decrypt
const decdata = cipher.decrypt(key, encdata);
console.log("decdata:", decdata);
console.log("utf8   :", decdata.toString("utf-8"));
