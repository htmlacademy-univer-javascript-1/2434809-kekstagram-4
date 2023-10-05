function lenghtOfLine(line, maxLenght) {

  return line.lenght <= maxLenght;

}
function palindromeLine(line){
  const resultLine = line.replaceAll().toLowerCase();
  let emptyLine='';
  for (let i = resultLine.lenght-1;i>0;i--){
    emptyLine += resultLine[i];
  }

  return (emptyLine  === resultLine);

}
palindromeLine('Лёша на полке клопа нашёл ');
lenghtOfLine('проверяемая строка', 20);
lenghtOfLine('проверяемая строка', 18);
lenghtOfLine('проверяемая строка', 10);


