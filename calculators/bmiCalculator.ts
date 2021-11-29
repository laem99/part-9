type Result = string | number;
export interface bmi {
    bmiCalculator(weight: number, height: number): Result
}

type Obj = {
    weight: number
    height: number
    bmi: Result
};

type Error = {
    error: string
};

export const bmiCalculator = (weight: string, height: string): Obj | Error => {

    const height2 = Number(height);
    const weight2 = Number(weight);

    const bmi: number = (Number(weight2) / Number(height2) / Number(height2)) * 10000;
    let text: Result;

    if (bmi >= 0 && bmi <= 14.9) {
        text = "BMI: " + bmi + " Sickly underweight";
    } else if (bmi >= 15 && bmi <= 17.9) {
        text = "BMI: " + bmi + " Significant underweight";
    } else if (bmi >= 18 && bmi <= 18.9) {
        text = "BMI: " + bmi + " Slight underweight";
    } else if (bmi >= 19 && bmi <= 24.9) {
        text = "BMI: " + bmi + " Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        text = "BMI: " + bmi + " Slight overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        text = "BMI: " + bmi + " Significant overweight";
    } else if (bmi >= 35 && bmi <= 39.9) {
        text = "BMI: " + bmi + " Severe overweight";
    } else {
        text = "BMI: " + bmi + " Sickly overweight";
    }

    const nor: number = Math.round(47.5 + (0.91 * (height2 - 152.4)));
    const obj: Obj = {
        weight: weight2,
        height: height2,
        bmi: text + ', normal weight: ' + nor + 'kg'
    };

    try {
        if (isNaN(weight2) || isNaN(height2)) {
            throw new Error('Values arent numbers');
        } else if (weight === '' || height === '') {
            throw new Error('Values missing');
        } else {
            return (obj);
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            const error: Error = {
                error: err.message
            };
            return error;
        }
    }
    return obj;
};

const weight: string = process.argv[2];
const height: string = process.argv[3];

console.log(bmiCalculator(weight, height));