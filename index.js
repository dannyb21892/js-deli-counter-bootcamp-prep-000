var katzDeliLine = [];
var total = 0;

function takeANumber(line) {
  total++;
  line.push(total);
  return (`Welcome. You are customer number ${total}. You are currently number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length > 0) {
    return (`Currently serving ${line.shift()}.`);
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var output = "The line is currently";
  if (line.length === 0) {
    output = output + " empty..";
  }
  else {
    output = output + ":";
    for (let i = 0; i < line.length; i++) {
      output = output + ` ${i+1}. ${line[i]},`;
    }
  }
  return output.slice(0,-1);
}

var = line[];
var output = "";
    for (let i = 0; i < line.length; i++) {
      output = output + `${line[i]},`;
    }

var temp = line;
for (let i=0; i < temp.length; i+2) {
  temp[i] = i/2;
}
line.join(".")