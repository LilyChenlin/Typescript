// 映射类型

// 有的时候，一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型。
// 映射类型建立在索引签名的语法上

type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse
}

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false
}

// 映射类型
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
}

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<FeatureFlags>;
// type FeatureOptions = {
//     darkMode: boolean;
//     newUserProfile: boolean;
// }