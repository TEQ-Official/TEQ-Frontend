export interface INavLinks {
    name: string;
    link: string;
}

export interface ICountry {
    name: string;
    code: string;
    flagUrl: string
}

export type IAuthMode = "Learner" | "Tutor";

export interface AuthModeState {
  mode: IAuthMode;
}

export interface INavState {
    showNav: boolean
}
