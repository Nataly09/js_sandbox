function print(size){
    let general = "\n";

    for (let pos = 0; pos <= size; pos++){
        let line = "*";
        for (let inner_counter = 0; inner_counter<pos; inner_counter++, line = " " + line)

        for (let inner_counter = 0; inner_counter < (size-pos)*2-1; inner_counter++, line += " " );

        if (pos < size)
            line += "*\n";

        general+=line;
    }

    return general + '\n';

}

function print2(size){
    let result = '\n';
    for(let i = 0; i<size - 2; i +=1){
        result += ' '.repeat(size * 2 - i * 2 -4);
        result += '*';
        result += ' '.repeat(i*4);
        result += '*';
        result += ' '.repeat(size * 4 - i * 4 -7);
         result += '*';
         result += ' '.repeat(i*4);
         result += '*';
        result += '\n';
         
    }
    for(let i = 0; i<size - 1; i +=1){
        result += ' '.repeat(i*2);
         result += '*';
        result += ' '.repeat(size * 4 - i * 4 -8);
        result += '*';
         result += ' '.repeat(i*4+1);
         result += '*';
        result += ' '.repeat(size * 4 - i * 4 -8);
         result += '*';
        result += '\n';
        
    }
     result += '\n';
    return result;
}

module.exports = {
    print,
    print2
};
