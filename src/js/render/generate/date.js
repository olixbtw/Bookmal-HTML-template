//можно сделать для разных языков
// или форматирование для new Date
const generateDate = (...args) => {
  let month = 0;

  switch (args[0][1]) {
    case 0: month = "січня"; break;
    case 1: month = "лютого"; break;
    case 2: month = "березня"; break;
    case 3: month = "квітня"; break;
    case 4: month = "травня"; break;
    case 5: month = "червня"; break;
    case 6: month = "липня"; break;
    case 7: month = "серпня"; break;
    case 8: month = "вересня"; break;
    case 9: month = "жовтня"; break;
    case 10: month = "листопада"; break;
    case 11: month = "грудня"; break;

    default: month = 0; break;
  }

  return `${args[0][2]} ${month} ${args[0][0]}`;
};

module.exports = generateDate;