const { Console } = require('@woowacourse/mission-utils');

const User = require('./User');
const Lotto = require('./Lotto');
const Draw = require('./Draw');
const { MESSAGE, ERROR } = require('../src/utils/constants');
const { hasChar, hasCharExceptComma, hasDuplicate, isOutOfRange, parseNumbers } = require('../src/utils/utils');

class App {
  constructor() {
    this.draw = new Draw();
  }

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, amount => {
      const trimmedAmount = amount.trim();
      this.validateAmount(trimmedAmount);
      this.draw.user = new User(trimmedAmount);

      this.printBoughtLottos(this.draw.user.buyLotto());
      this.getWinningNumbers();
    });
  }

  validateAmount(amount) {
    if (hasChar(amount)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }
  }

  printBoughtLottos({ quantity, lottos }) {
    Console.print(MESSAGE.QUANTITY_OF_PURCHASE(quantity));
    lottos.forEach(lotto => Console.print(lotto.toString()));
  }

  getWinningNumbers() {
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, numbers => {
      const trimmedNumbers = numbers.trim();
      this.validateWinningNumbers(trimmedNumbers);
      this.draw.winningNumbers = new Lotto(parseNumbers(trimmedNumbers)).numbers;
      this.getBonusNumber();
    });
  }

  validateWinningNumbers(numbers) {
    if (hasCharExceptComma(numbers)) {
      throw new Error(ERROR.ONLY_NUMBER_AND_COMMA);
    }
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, number => {
      const trimmedNumber = number.trim();
      this.validateBonusNumber(trimmedNumber);
      this.draw.bonusNumber = Number(trimmedNumber);
      this.draw.start();
    });
  }

  validateBonusNumber(number) {
    if (hasChar(number)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (isOutOfRange(number)) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }

    if (hasDuplicate([...this.draw.winningNumbers, Number(number)])) {
      throw new Error(ERROR.DUPLICATED_BONUS);
    }
  }
}

module.exports = App;
