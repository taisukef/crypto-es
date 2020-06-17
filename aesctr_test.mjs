import AES_CTR from "./AES_CTR.mjs";
import SALT from "./SALT.mjs";
import CRNG from "./CRNG.mjs";

const TEXT = "aiueo";
const PASSWORD = "password";

const salt = Uint8Array.from("0123456789ABCDEF");

const keylen = 128;

const key = new SALT(keylen).createKey(salt, PASSWORD);

const data = new TextEncoder().encode(TEXT);
console.log("text   :", TEXT);
console.log("data   :", data);

const cipher = new AES_CTR(keylen);

const iv = new CRNG(16).generate();

// encrypt
const encdata = cipher.encrypt(key, iv, data);
console.log("key    :", key);
console.log("iv     :", iv);
console.log("encdata:", encdata);

// decrypt
const decdata = cipher.decrypt(key, iv, encdata);
console.log("decdata:", decdata);
console.log("dectext:", new TextDecoder().decode(decdata));
