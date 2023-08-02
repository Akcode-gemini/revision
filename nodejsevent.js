const EventEmitter =require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {//if event fired
  console.log('Please turn off motor');
  setTimeout(()=>{
    console.log('Please turn off the motor reminder')
  })
});
myEmitter.emit('Waterfull');