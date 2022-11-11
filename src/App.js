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
    const trimmedInput = input.trim();

    //문자가 섞여있지 않은지 검사
    //TODO match -> test 변경
    if (trimmedInput.match(RegExp(/([^0-9])/g)) !== null) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    //금액이 1000으로 나눠떨어지는지 검사
    //TODO user로 넘겨도 될듯?
    if (Number(trimmedInput) % AMOUNT_UNIT !== 0) {
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

  //숫자를 오름차순으로 정렬하기
  ascendingSort(numberArray) {
    return numberArray.sort((a, b) => a - b);
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
    if (hasChar(string)) {
      throw new Error(ERROR.ONLY_NUMBER_AND_COMMA);
    }

    //문자열을 쉼표로 구분해 배열로 만들기
    const array = makeSplit(trimmedInput);

    //문자 요소를 숫자로 변환하기
    const numberArray = makeNumberArray(array);

    return numberArray;
  }

  static hasChar(string) {
    if (RegExp(/([^?!,0-9 ])/g).test(string)) {
      return true;
    }
    return false;
  }

  static makeSplit(string) {
    const array = string.split(",");
    if (array.includes("") || array.includes(" ")) {
      throw new Error(ERROR.MISUSE_COMMA);
    }
    return array;
  }

  static makeNumberArray(array) {
    const numberArray = array.map(Number);
    if (numberArray.includes(NaN)) {
      throw new Error(ERROR.IS_NAN);
    }
    return numberArray;
  }
}

module.exports = App;
