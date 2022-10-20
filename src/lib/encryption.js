var Hashids = require("hashids");
var Buffer = require('buffer/').Buffer

const hashids = new Hashids("Shrishti Sharma");

export const encodeSolution = (word) => {
	let hex = Buffer.from(word, 'utf8').toString('hex')
	let hash = hashids.encodeHex(hex)
	return hash
}
	
export const decodeSolution = (hash) => {
	var decodedHex = hashids.decodeHex(hash)
	var word = Buffer.from(decodedHex, 'hex').toString('utf8')
	return word
}