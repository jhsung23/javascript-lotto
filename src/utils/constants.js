const NUMBER_COUNT = 6;
const AMOUNT_UNIT = 1000;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

const REWARD = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

const MESSAGE = {
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  QUANTITY_OF_PURCHASE: count => `${count}개를 구매했습니다.`,
};

const STATISTICS = {
  TITLE: '당첨 통계\n---\n',
  FIRST_PRIZE: count => `6개 일치 (2,000,000,000원) - ${count}개\n`,
  SECOND_PRIZE: count => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`,
  THIRD_PRIZE: count => `5개 일치 (1,500,000원) - ${count}개\n`,
  FOURTH_PRIZE: count => `4개 일치 (50,000원) - ${count}개\n`,
  FIFTH_PRIZE: count => `3개 일치 (5,000원) - ${count}개\n`,
  REVENUE: percentage => `총 수익률은 ${percentage}%입니다.`,
};

const ERROR = {
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATED: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
  ONLY_NUMBER: '[ERROR] 숫자로만 입력해야 합니다.',
  INDIVISIBLE: '[ERROR] 구입금액은 1000원으로 나누어 떨어져야 합니다.',
  NOT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  ONLY_NUMBER_AND_COMMA: '[ERROR] 당첨 번호는 숫자와 쉼표만 입력할 수 있습니다.',
  MISUSE_COMMA: '[ERROR] 잘못된 쉼표 사용이 있습니다.',
  IS_NAN: '[ERROR] 잘못된 숫자 입력이 있습니다.',
  DUPLICATED_BONUS: '[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.',
};

Object.freeze(REWARD);
Object.freeze(MESSAGE);
Object.freeze(STATISTICS);
Object.freeze(ERROR);

module.exports = {
  NUMBER_COUNT,
  AMOUNT_UNIT,
  MIN_NUMBER,
  MAX_NUMBER,
  REWARD,
  MESSAGE,
  STATISTICS,
  ERROR,
};
