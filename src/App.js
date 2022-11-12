const { Console, Random } = require("@woowacourse/mission-utils");

const {
  NUMBER_COUNT,
  AMOUNT_UNIT,
  MIN_NUMBER,
  MAX_NUMBER,
  MESSAGE,
  ERROR,
  STATISTICS,
} = require("../src/utils/constants");
const {
  hasChar,
  isDivisible,
  hasCharExceptComma,
  makeSplit,
  makeNumberArray,
} = require("../src/utils/utils");

class App {
  play() {}

  //구매 금액 입력 요청하기
  getPurchaseAmount() {
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (amount) => {
      console.log(amount);
    });
  }

  //구매 금액 유효성 검사하기
  validateInput(input) {
    //TODO trim하고 줘야하나?
    const trimmedInput = input.trim();

    //문자가 섞여있지 않은지 검사
    if (hasChar(trimmedInput)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    //금액이 1000으로 나눠떨어지는지 검사
    //TODO user로 넘겨도 될듯?
    if (!isDivisible(trimmedInput)) {
      throw new Error(ERROR.INDIVISIBLE);
    }

    return true;
  }

  //구매 금액으로 로또 몇장 살 수 있는지 계산하기
  countAvailableQuantity(amount) {
    return Number(amount) / AMOUNT_UNIT;
  }

  //랜덤 번호 뽑아주기
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      NUMBER_COUNT
    );
  }

  //당첨 번호 입력 요청하기
  getWinningNumbers() {
    Console.readLine(MESSAGE.ENTER_WINNING_NUMBERS, (numbers) => {
      console.log(numbers);
    });
  }

  //입력 받은 당첨 번호의 유효성 검사 후 유효하다면 숫자 배열로 변경하기
  parseInput(input) {
    const trimmedInput = input.trim();

    //문자가 없는지 검사
    if (hasCharExceptComma(string)) {
      throw new Error(ERROR.ONLY_NUMBER_AND_COMMA);
    }

    //문자열을 쉼표로 구분해 배열로 만들기
    const array = makeSplit(trimmedInput);

    //문자 요소를 숫자로 변환하기
    const numberArray = makeNumberArray(array);

    return numberArray;
  }

  //보너스 번호 입력 요청하기
  getBonusNumber() {
    Console.readLine(MESSAGE.ENTER_BONUS_NUMBER, (number) => {
      console.log(number);
    });
  }

  validateBonusNumber(number) {
    const trimmedNumber = number.trim();

    if (hasChar(trimmedNumber)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }
  }
}

module.exports = App;
