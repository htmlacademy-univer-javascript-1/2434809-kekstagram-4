function lenghtOfLine(line, maxLenght) {
  if (line.lenght <= maxLenght){
    return true;
  }
  else{
    return false;
  }
}
function PalindromeLine(line){
  line.replaceAll();
  line.toLowerCase();
  const newLine = line;
  let emptyLine='';
  for (let i = newLine.lenght-1;i>0;i--){
    emptyLine += newLine[i];
  }
  if (emptyLine  === newLine){
    return true;
  }
}
PalindromeLine('Лёша на полке клопа нашёл ');
lenghtOfLine('проверяемая строка', 20);
lenghtOfLine('проверяемая строка', 18);
lenghtOfLine('проверяемая строка', 10);


