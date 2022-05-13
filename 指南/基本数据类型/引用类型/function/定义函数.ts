function setName1(name: string) {
    console.log("hello", name);
}

setName1('Domesy'); // hello Domesy

function setName2(name: string): string {
    console.log("hello", name);
    // return 'lily'; 
}
setName2("Domesy");

function setName3(name: string): string {
    console.log("hello", name);
    return 1; 
}

const setName4 = (name: string) => console.log("hello", name)