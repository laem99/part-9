import { bmiCalculator } from "./bmiCalculator";
import express, { Request, Response } from 'express';
import { calculateExerecises } from "./exerciseCalculator";

const app = express();

app.use(express.json());

app.get('/hello', (_req: Request, res: Response) => {
  const text = "Hello Full Stack";
  res.send(text);
});

app.get('/bmi/:weight/:height', (req: Request, res: Response) => {
  const page = bmiCalculator(req.params.weight.split("=")[1], req.params.height.split("=")[1]);
  try {
    res.send(page);
    res.status(200);
  } catch (error) {
    if (error) {
      res.status(400);
    }
  }
});

interface Test {
  array: number[],
  target: number
}

app.post('/exercises', (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body: Test = req.body;
  if (!body.array || !body.target) {
    return res.status(400).json({
      error: 'parameters missing'
    });
  } else if (!Array.isArray(body.array) || typeof(body.target) !== "number" || body.array.length === 0) {
    return res.status(400).json({
      error: 'malformatted parameters'
    });
  }
  //console.log(calculateExerecises(page.array, page.target));
  return res.status(200).json(calculateExerecises(body.array, body.target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});