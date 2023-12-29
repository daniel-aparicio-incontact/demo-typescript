type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};
   
type FeatureOptions = OptionsFlags<Features>;

type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};
   
type LockedAccount = {
    readonly id: string;
    readonly name: string;
};
   
type UnlockedAccount = CreateMutable<LockedAccount>;


type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
   
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};
   
type User = Concrete<MaybeUser>;