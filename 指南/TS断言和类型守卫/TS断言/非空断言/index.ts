const Info = (name: string | null | undefined) => {
    const str: string = name;
    const str1: string = name!

    console.log(str);
}

Info('lily');
Info(null);