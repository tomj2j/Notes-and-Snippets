let array = ["hans", "thomas", "klaus", "carina", "manu", "lina"];

for (let i = 0; i < array.length; i++) {
  console.log("Hi " + array[i]);
  console.log(
    "The name " + array[i] + " consists of: " + array[i].length + " letters."
  );
  let nameArray = array[i].split("");
  let nameNumber = [];
  for (let j = 0; j < nameArray.length; j++) {
    switch (nameArray[j]) {
      case "a":
        nameNumber.push(1);
        break;
      case "b":
        nameNumber.push(2);
        break;
      case "c":
        nameNumber.push(3);
        break;
      case "d":
        nameNumber.push(4);
        break;
      case "e":
        nameNumber.push(5);
        break;
      case "f":
        nameNumber.push(6);
        break;
      case "g":
        nameNumber.push(7);
        break;
      case "h":
        nameNumber.push(8);
        break;
      case "i":
        nameNumber.push(9);
        break;
      case "j":
        nameNumber.push(10);
        break;
      case "k":
        nameNumber.push(11);
        break;
      case "l":
        nameNumber.push(12);
        break;
      case "m":
        nameNumber.push(13);
        break;
      case "n":
        nameNumber.push(14);
        break;
      case "o":
        nameNumber.push(15);
        break;
      case "p":
        nameNumber.push(16);
        break;
      case "q":
        nameNumber.push(17);
        break;
      case "r":
        nameNumber.push(18);
        break;
      case "s":
        nameNumber.push(19);
        break;
      case "t":
        nameNumber.push(20);
        break;
      case "u":
        nameNumber.push(21);
        break;
      case "v":
        nameNumber.push(22);
        break;
      case "w":
        nameNumber.push(23);
        break;
      case "x":
        nameNumber.push(24);
        break;
      case "y":
        nameNumber.push(25);
        break;
      case "z":
        nameNumber.push(26);
        break;
      default:
        nameNumber.push("Umlaut?");
    }
  }
  console.log(
    "The letters converted to there spot in the alphabet have the following numbers: " +
      nameNumber
  );
  console.log(
    "Shall we sort those numbers and look how your alphabetical-sorted name looks like? :)"
  );
  let numberNameSort = nameNumber.sort(function (a, b) {
    return a - b;
  });
  let numberName = [];

  for (let j = 0; j < numberNameSort.length; j++) {
    switch (numberNameSort[j]) {
      case 1:
        numberName.push("a");
        break;
      case 2:
        numberName.push("b");
        break;
      case 3:
        numberName.push("c");
        break;
      case 4:
        numberName.push("d");
        break;
      case 5:
        numberName.push("e");
        break;
      case 6:
        numberName.push("f");
        break;
      case 7:
        numberName.push("g");
        break;
      case 8:
        numberName.push("h");
        break;
      case 9:
        numberName.push("i");
        break;
      case 10:
        numberName.push("j");
        break;
      case 11:
        numberName.push("k");
        break;
      case 12:
        numberName.push("l");
        break;
      case 13:
        numberName.push("m");
        break;
      case 14:
        numberName.push("n");
        break;
      case 15:
        numberName.push("o");
        break;
      case 16:
        numberName.push("p");
        break;
      case 17:
        numberName.push("q");
        break;
      case 18:
        numberName.push("r");
        break;
      case 19:
        numberName.push("s");
        break;
      case 20:
        numberName.push("t");
        break;
      case 21:
        numberName.push("u");
        break;
      case 22:
        numberName.push("v");
        break;
      case 23:
        numberName.push("w");
        break;
      case 24:
        numberName.push("x");
        break;
      case 25:
        numberName.push("y");
        break;
      case 26:
        numberName.push("z");
        break;
      default:
        break;
    }
  }
  console.log(numberName.join(""));
}
