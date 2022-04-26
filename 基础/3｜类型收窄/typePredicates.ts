// 类型判断式
// https://ts.yayujs.com/handbook/Narrowing.html#%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD%E5%BC%8F-type-predicates
interface Bird {
    name: string,
    fly(): void
}

interface Fish {
    name: string,
    swim(): void
}


function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim(); // let pet : Fish
} else {
    pet.fly(); // let pet: Bird
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === 'sharkey') return false;
    return isFish(pet)
})