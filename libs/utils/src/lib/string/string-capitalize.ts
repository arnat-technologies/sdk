/*
  capitalize('capitals'); // 'Capitals'
  capitalize('Capitals'); // 'Capitals'
  capitalize('many words'); // 'Many words'
  capitalize('!exclaim'); // '!exclaim'
  capitalize('capitals'); // 'Capitals'
  capitalize('Capitals'); // 'Capitals'
  capitalize('CapiTALS'); // 'Capitals'
  capitalize('many Words'); // 'Many words'
  capitalize('!exclaim'); // '!exclaim'
  capitalize('hello world');      // 'Hello world'
*/

export default function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
