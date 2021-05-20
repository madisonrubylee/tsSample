
{

const position = { x:0 ,  y:0};

function move(direction: 'up' | 'down' | 'left' | 'right') {
        switch(direction) {
        case 'up':
            position.y+= 1;
            break;
        case 'down':
            position.y-=1;
            break;
        case 'left':
            position.x-=1;
            break;
        case 'right':
            position.x+=1;
            break;
        default:
            throw new Error('unknown error');
    }
}
// function move(command) {
//     switch(command) {
//         case 'up':
//             position.y++;
//             break;
//         case 'down':
//             position.y--;
//             break;
//         case 'left':
//             position.x--;
//             break;
//         case 'right':
//             position.x++;
//             break;
//         default:
//             throw new Error('unknown error');
//     }
// }



console.log(position); 
move('up');
console.log(position);
move('down');
console.log(position);
move('left');
console.log(position);
move('right');
console.log(position);
}


