export function compareNumbers(userValue, correctNumber) {
    if (correctNumber < userValue) return 1;
    if (correctNumber > userValue) return -1;
    if (correctNumber === userValue) return 0;
} 