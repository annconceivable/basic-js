const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if ( message === undefined || message === null || message === '' || key === undefined || key === null || key === '') throw new Error('Incorrect arguments!');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encrypted = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (message.length > key.length) {
      for (let i = 0, j = 0; i < message.length; i++) {
        if (!alphabet.includes(message[i])){
          encrypted += message[i];
          continue;
        }  
        if (j < key.length) {
          encrypted += alphabet[ (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])) % 26 ];
          
          j++;
        }
        else {
          j = 0;
          encrypted += alphabet[ (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])) % 26 ];
          j++;
        }
      }
    }
    if (message.length <= key.length) {
      for (let i = 0; i < message.length; i++) {
        if (!alphabet.includes(message[i])){
          encrypted += message[i];
          continue;
        }  
        encrypted += alphabet[ (alphabet.indexOf(message[i]) + alphabet.indexOf(key[i])) % 26 ];
      }
    }

    return this.mode ? encrypted : encrypted.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key1) {
    if (encryptedMessage === undefined || encryptedMessage === null || encryptedMessage === '' || key1 === undefined || key1 === null || key1 === '') throw new Error('Incorrect arguments!');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decrypted = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key1 = key1.toUpperCase();

    if (encryptedMessage.length > key1.length) {
      
      for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
        if (!alphabet.includes(encryptedMessage[i])){
          decrypted += encryptedMessage[i];
          continue;
        }  
        if (j < key1.length) {
          decrypted += alphabet[ (alphabet.indexOf(encryptedMessage[i]) + 26 - alphabet.indexOf(key1[j])) % 26 ];
          
          j++;
        }
        else {
          j = 0;
          decrypted += alphabet[ (alphabet.indexOf(encryptedMessage[i]) + 26 - alphabet.indexOf(key1[j])) % 26 ];
          j++;
        }
      }
    }
    if (encryptedMessage.length <= key1.length) {
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (!alphabet.includes(encryptedMessage[i])){
          decrypted += encryptedMessage[i];
          continue;
        }  
        decrypted += alphabet[ (alphabet.indexOf(encryptedMessage[i]) + 26 - alphabet.indexOf(key1[i])) % 26 ];
      }
    }

    return this.mode ? decrypted : decrypted.split('').reverse().join('');
   
  }
}

module.exports = {
  VigenereCipheringMachine
};
