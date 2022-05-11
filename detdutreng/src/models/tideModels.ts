export module TideDate {

    export interface Measurement {
        value: number;
        unit: string;
    }

    export interface LowPercentile {
        value: number;
        unit: string;
    }

    export interface LowerPercentile {
        value: number;
        unit: string;
    }

    export interface HighPercentile {
        value: number;
        unit: string;
    }

    export interface HigherPercentile {
        value: number;
        unit: string;
    }

    export interface CurrentLevel {
        status: string;
        measurement: Measurement;
        dateTime: Date;
        lowPercentile: LowPercentile;
        lowerPercentile: LowerPercentile;
        highPercentile: HighPercentile;
        higherPercentile: HigherPercentile;
    }

    export interface Measurement2 {
        value: number;
        unit: string;
    }

    export interface LowPercentile2 {
        value: number;
        unit: string;
    }

    export interface LowerPercentile2 {
        value: number;
        unit: string;
    }

    export interface HighPercentile2 {
        value: number;
        unit: string;
    }

    export interface HigherPercentile2 {
        value: number;
        unit: string;
    }

    export interface NextHighTide {
        status: string;
        measurement: Measurement2;
        dateTime: Date;
        lowPercentile: LowPercentile2;
        lowerPercentile: LowerPercentile2;
        highPercentile: HighPercentile2;
        higherPercentile: HigherPercentile2;
    }

    export interface Measurement3 {
        value: number;
        unit: string;
    }

    export interface LowPercentile3 {
        value: number;
        unit: string;
    }

    export interface LowerPercentile3 {
        value: number;
        unit: string;
    }

    export interface HighPercentile3 {
        value: number;
        unit: string;
    }

    export interface HigherPercentile3 {
        value: number;
        unit: string;
    }

    export interface NextLowTide {
        status: string;
        measurement: Measurement3;
        dateTime: Date;
        lowPercentile: LowPercentile3;
        lowerPercentile: LowerPercentile3;
        highPercentile: HighPercentile3;
        higherPercentile: HigherPercentile3;
    }

    export interface Result {
        currentLevel: CurrentLevel;
        nextHighTide: NextHighTide;
        nextLowTide: NextLowTide;
    }

    export interface RootObject {
        result: Result;
    }

}

