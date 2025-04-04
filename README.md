# Formulas to live by
Formulas to help with daily life.

A growing collection of everyday formulas, written in TypeScript, to help you measure and manage mental energy, focus, productivity, and wellbeing in a structured, engineer-friendly way.

> Think of it as a small library of algorithms for your life.

---

## Table of Contents

- [Overview](#overview)
- [Formulas](#formulas)
  - [1. Break Need Score (BNS)](#1-break-need-score-bns)
  - [2. Coffee Need Estimator](#2-coffee-need-estimator)
  - [3. Decision Fatigue Score](#3-decision-fatigue-score)
  - [4. Mood Stability Index](#4-mood-stability-index)
  - [5. Focus Energy Estimator](#5-focus-energy-estimator)
- [Getting Started](#getting-started)
- [Future Plans](#future-plans)

---

## Overview

This repo contains a set of practical TypeScript functions you can use to:

- Know when to take a break
- Estimate how much coffee you *really* need
- Track decision fatigue
- Reflect on mood swings
- Estimate your mental energy levels

Each function is:
- **Typed**
- **Well-documented**
- **Backed by a real-world behavioral formula**

Use these in your projects, apps, CLI tools, or just for self-tracking.

---

## Formulas

### 1. Break Need Score (BNS)

**Formula:**  
`BNS = (T * D) / (F + epsilon)`

Where:
- T = time working (in minutes)
- D = distraction level (1-10)
- F = focus level (1-10)
- epsilon = small constant to avoid divide-by-zero

**Function:**
```ts
function calculateBreakNeedScore(
  timeMinutes: number,
  distractionLevel: number,
  focusLevel: number
): number
```

---

### 2. Coffee Need Estimator

**Formula:**  
`Cups = (SleepDebt * 0.5) + 1`  
Where `SleepDebt = max(0, IdealSleep - HoursSlept)`

**Function:**
```ts
function calculateCoffeeNeed(
  hoursSlept: number,
  idealSleepHours?: number
): number
```

---

### 3. Decision Fatigue Score

**Formula:**  
`Fatigue = DecisionsMade * (Complexity / 5)`

**Function:**
```ts
function calculateDecisionFatigue(
  decisionsMade: number,
  avgDecisionComplexity: number
): number
```

---

### 4. Mood Stability Index

**Formula:**  
`Stability = (StableHours + 1) / (MoodSwings + 1)`

**Function:**
```ts
function calculateMoodStability(
  moodSwingCount: number,
  stableHours: number
): number
```

---

### 5. Focus Energy Estimator

**Formula:**  
`Energy = min(Sleep * 10, 100) - (Work * 8) + (Breaks * 5)`

**Function:**
```ts
function estimateFocusEnergy(
  hoursWorked: number,
  hoursSlept: number,
  breaksTaken: number
): number
```

---

## Future Plans

- [ ] Add CLI tool
- [ ] Publish as NPM package
- [ ] Build a dashboard or some integrations (maybz)
- [ ] Add more formulas (hydration, screen fatigue, motivation decay, etc.)
