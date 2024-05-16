// Loops 

let i:number=3;

while(i){
    console.log(i--);
}

let i2:number=0;
while(++i2<5){
    console.log(i2);
};
while(i2++<5){
    console.log(i2);
};


for (let i=0; i<5; i++ ){
    console.log(i);
};
for (let i=0; i<5; ++i ){
    console.log(i);
};

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};

for(let i=0;i<3;i++){
    console.log(`number ${i}`);
    
}

//Switch statement
let browser = "Edge"
switch (browser) {
    case 'Edge':
      console.log("You've got the Edge.");
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      console.log("Okay we support these browsers too");
      break;
  
    default:
      console.log("We hope that this page looks ok");
  }

