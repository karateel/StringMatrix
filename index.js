function myCries() {
    function matrix(str) {
        const result = str.match(/.{1,3}/g)
            .map(i => i.split(''))
            .reduce(function (prev, curr) {
                return [...prev, ...curr];
            });
        return result
    }

    const magic = matrix("BRJTXLAWNHUPHEAD") //Put the mane word!

    console.log(magic) //We have to see matrix :)

    function strFun(char) {
        let sym = char.split('');
        return sym.map(x => {
            let arrIn = magic.indexOf(x);
            let inVal = Math.sqrt(magic.length) | 0;
            return [arrIn / inVal | 0, arrIn % inVal]
        });
    }

    const word = strFun("BLUE") //Put the checking word

    return magic, word;

}

console.log(myCries()) // Logged final answer