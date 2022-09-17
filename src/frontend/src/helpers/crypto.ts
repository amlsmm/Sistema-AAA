const crypto = require('crypto');

const encryptionType = 'aes-256-cbc';
const encryptionEncoding = 'base64';
const bufferEncryption = 'utf8';
const AesKey = `${process.env.KEY_CRYPTO}`;
const AesIV = `${process.env.KEY_CRYPTO_IV}`;

export const encrypt = (jsonObject: Object): any => {
  const val = JSON.stringify(jsonObject);
  const key = Buffer.from(AesKey, bufferEncryption);
  const iv = Buffer.from(AesIV, bufferEncryption);
  const cipher = crypto.createCipheriv(encryptionType, key, iv);
  let encrypted = cipher.update(val, bufferEncryption, encryptionEncoding);
  encrypted += cipher.final(encryptionEncoding);
  return encrypted;
};

export const decrypt = (base64String: string): any => {
  const buff = Buffer.from(base64String, encryptionEncoding);
  const key = Buffer.from(AesKey, bufferEncryption);
  const iv = Buffer.from(AesIV, bufferEncryption);
  const decipher = crypto.createDecipheriv(encryptionType, key, iv);
  const deciphered = decipher.update(buff) + decipher.final();
  return JSON.parse(deciphered);
};
