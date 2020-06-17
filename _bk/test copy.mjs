import crypto from "crypto";

// AES アルゴリズム
const ALGO = "aes-256-cbc";

// 事前に共有すべきパスワード
// console.log(crypto.randomBytes(32).toString('base64'))
const PASSWORD = "l+/MraaOI1yT3F1l15fJMcEKGiG3iWn7nOTmUS4fWk0=";

// 事前に共有すべき SALT
// console.log(crypto.randomBytes(16).toString('base64'))
const SALT = "kr3dJJ1mPcIKisMOR4RO6w==";

// 暗号化したいメッセージ
const MESSAGE = "piyopiyo";

// 暗号化メソッド
function encrypt(algorithm, password, salt, data) {
  // 鍵を生成
  const key = crypto.scryptSync(password, salt, 32);

  // IV を生成
  const iv = crypto.randomBytes(16);

  // 暗号器を生成
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // data を暗号化
  let encryptedData = cipher.update(data);
  encryptedData = Buffer.concat([encryptedData, cipher.final()]);

  return { iv, encryptedData };
}

// 復号メソッド
function decrypt(algorithm, password, salt, iv, encryptedData) {
  // 鍵を生成
  const key = crypto.scryptSync(password, salt, 32);

  // 復号器を生成
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // encryptedData を復号
  let decryptedData = decipher.update(encryptedData);
  decryptedData = Buffer.concat([decryptedData, decipher.final()]);

  return decryptedData;
}

console.log("MESSAGE:", MESSAGE);

// 暗号化したいメッセージ文字列を Buffer に変換
const data = Buffer.from(MESSAGE);
console.log("data:", data);

// 暗号化
let { iv, encryptedData } = encrypt(ALGO, PASSWORD, SALT, data);
console.log("iv:", iv);
console.log("encryptedData:", encryptedData);

// 復号
let decryptedData = decrypt(ALGO, PASSWORD, SALT, iv, encryptedData);
console.log("decryptedData:", decryptedData);
console.log("decryptedData(utf8):", decryptedData.toString("utf-8"));
