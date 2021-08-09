score = 0
a = prompt("Сколько будет 2*2? a) 2 b) 5 c) 4");
if (a == "c") {
  score +=1;
}
b = prompt("Сколько будет 8/4? a) 4 b) 2 c) 7");
if (b == "b") {
  score +=1;
}
alert(` ${score} - результат.`);
