interface WeeklyValues {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export const calculateExerecises = (weekHours: Array<number>, target: number): WeeklyValues => {

    const sum: number = weekHours.reduce((a, b) => a + b, 0);
    const average: number = sum / weekHours.length;
    let rating: number;
    let rDescription: string;

    if (average >= target) {
        rating = 3;
        rDescription = "Good job! Keep going!";
    } else if (average >= target - 0.5) {
        rating = 2;
        rDescription = "not too bad but could be better";
    } else {
        rating = 1;
        rDescription = "Keep trying, you can do better...";
    }

    const result: WeeklyValues = {
        periodLength: weekHours.length,
        trainingDays: weekHours.filter(h => h !== 0).length,
        success: rating === 4 || rating === 5 ? true : false,
        rating: rating,
        ratingDescription: rDescription,
        target: target,
        average: average
    };
    return result;
};

const weeklyArray: Array<number> = process.argv.slice(3, process.argv.length - 1).map(num => Number(num));
const target = Number(process.argv[process.argv.length - 1]);

console.log(calculateExerecises(weeklyArray, target));