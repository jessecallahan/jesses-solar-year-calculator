# Jesse's Solar Calculator
https://github.com/jessecallahan/jesses-solar-year-calculator

Created 12.17.18</br>
By _**Jesse Callahan**_</br>
Contact: _**Jessetylercallahan@gmail.com**_</br>

## Description
Solar Year Calculator calculates what age the user is on Mars, Venus, Jupiter, and Mercury. Also tells you your life expectancy based on what the user inputs.

## Setup/Installation Requirements

1. Clone this [repository](https://github.com/jessecallahan/jesses-solar-year-calculator)
2. Navigate to this directory
3. Run 'npm install && npm run tests' using Jest in your cpu's terminal
4. Enjoy!

## Specs

|  years old on earth|  health barometor | years old on planet/Life Expectancy  | function() |
|---|---|---|---|
| 10  |  "healthy" | 10 on Earth  | mercuryYears() |
| 10  |  "healthy" | 41 on Mercury | venusYears() |
| 10  |  "healthy"  | 16 on Venus | marsYears() |
| 10  |  "healthy" | 5 on Mars  | jupiterYears() |
| 10  |  "healthy" | 0 on Jupiter  | lifeExpectancy() |
| 10  |  "healthy" | 85 expected years to live on Earth  |
| 10  |  "healthy" | [345 Exp years to live on Mercury, 137 Exp years to live on Venus, 45 Exp years to live on Mars, 7 Exp years to live on Jupitar]| lifeExpectancyOnAllFourPlanets() | 
| 100 |  "not healthy" | 10 years over life expectancy on earth | lifeExpectancy() |
| 100 |  "other thing" | not a health barometer value so return "Error" | lifeExpectancy() |
| 100 |  "healthy" | 5 years over life expectancy on earth | lifeExpectancy() |
| 100  |  "healthy"| [20 years over life expectancy on Mercury, 8 years over life expectancy on Venus, 2 years over life expectancy on Mars, 0 years over life expectancy on Jupiter ]  | lifeExpectancyOnAllFourPlanets() | 
| 33  |  "very healthy" | 67 expected years to live on Earth  | lifeExpectancy() |
| 33  |  "very healthy" | "The life expectancy for someone 33 years of age and very healthy is 67 more years on Earth, 279 on Mercury, 108 on Venus, 35 on Mars, 5 on Jupiter"  | lifeExpectancyUITest() |

health barometer | life expectancy
|---|---|
| "not healthy"  |  90 |
| "healthy"  |  95 |
| "very healthy"  |  100 |

IMPORTANT NOTE: I'VE DECIDED TO ROUND DOWN ALL MY CALCULATED VALUES. ALTHOUGH THAT MAKES THE CALCULATOR LESS ACCURATE, ITS MORE FOR USERABILITY. FOR INSTANCE, WHEN ASKED YOUR AGE ON EARTH, YOU MIGHT SAY '10' OR '33' AND ARE FAR LESS LIKELY TO SAY '10 AND 9 MONTHS' OR '33.75'. THIS CALCULATOR ONLY DEALS WITH WHOLE NUMBER INPUTS. 

## Technologies Used
* Npm webpacks
* Node.js
* JEST
* JS ES6


