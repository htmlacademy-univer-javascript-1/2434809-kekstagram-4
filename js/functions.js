function lenghtOfLine(line, maxLenght) {

  return line.lenght <= maxLenght;

}
function palindromeLine(line){
  line.replaceAll().toLowerCase();
  let emptyLine='';
  for (let i = line.lenght-1;i>0;i--){
    emptyLine += line[i];
  }

  return (emptyLine  === line);

}
palindromeLine('Лёша на полке клопа нашёл ');
lenghtOfLine('проверяемая строка', 20);
lenghtOfLine('проверяемая строка', 18);
lenghtOfLine('проверяемая строка', 10);


