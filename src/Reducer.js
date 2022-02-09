function customReducer(amount) {
    let newAmount = amount.reduce(function summarize(sum, number) {
        let updatedSum = sum + number;
        return updatedSum //total neighbours
    }, 0);
    return newAmount;
}