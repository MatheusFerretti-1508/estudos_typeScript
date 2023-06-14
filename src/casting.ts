namespace casting {
    let idade = 24;
    (idade as number).toFixed();
    (idade as unknown as string).length;
    (idade as unknown as string[]).forEach(x => {
        console.log(x);
    });

    let nome: string = 35 as unknown as string;
}