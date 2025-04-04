/**
 * Formulas To Live By
 * A collection of TypeScript utility functions to model everyday behavior and self-care decisions.
 * Use these to estimate focus, fatigue, productivity, and well-being.
 */

/**
 * Calculates how urgently you need a break based on time worked, distraction level, and focus.
 * 
 * Formula: BNS = (T * D) / (F + epsilon)
 * Where:
 *  - T = time worked in minutes
 *  - D = distraction level (1–10)
 *  - F = focus level (1–10)
 *  - epsilon = small constant to avoid divide-by-zero
 */
export function calculateBreakNeedScore(
  timeMinutes: number,
  distractionLevel: number,
  focusLevel: number
): number {
  const epsilon = 0.01;
  return (timeMinutes * distractionLevel) / (focusLevel + epsilon);
}

/**
 * Estimates how much coffee (in cups) you might need based on sleep hours and ideal sleep.
 * 
 * Formula: Cups = (SleepDebt * 0.5) + 1
 * Where: SleepDebt = max(0, idealSleepHours - hoursSlept)
 */
export function calculateCoffeeNeed(
  hoursSlept: number,
  idealSleepHours: number = 8
): number {
  const sleepDebt = Math.max(0, idealSleepHours - hoursSlept);
  const cupsNeeded = sleepDebt * 0.5 + 1;
  return Math.min(cupsNeeded, 4);
}

/**
 * Models mental fatigue based on number and complexity of decisions made in a day.
 * 
 * Formula: Fatigue = decisionsMade * (complexity / 5)
 */
export function calculateDecisionFatigue(
  decisionsMade: number,
  avgDecisionComplexity: number
): number {
  return decisionsMade * (avgDecisionComplexity / 5);
}

/**
 * Measures emotional stability based on mood swings and stable mood hours.
 * 
 * Formula: Stability = (stableHours + 1) / (moodSwingCount + 1)
 */
export function calculateMoodStability(
  moodSwingCount: number,
  stableHours: number
): number {
  return (stableHours + 1) / (moodSwingCount + 1);
}

/**
 * Estimates remaining mental energy based on work, sleep, and breaks taken.
 * 
 * Formula:
 *   Energy = min(sleep * 10, 100) - (work * 8) + (breaks * 5)
 */
export function estimateFocusEnergy(
  hoursWorked: number,
  hoursSlept: number,
  breaksTaken: number
): number {
  const baseEnergy = Math.min(hoursSlept * 10, 100);
  const fatiguePenalty = hoursWorked * 8;
  const breakBoost = breaksTaken * 5;
  return Math.max(0, Math.min(100, baseEnergy - fatiguePenalty + breakBoost));
}
