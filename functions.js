// function hoisting
talk();

function talk(){
    console.log('hey');
}

// first class objects
// functions expression
const data = function () {
    console.log('data');
};

function execFunction(func) {
    func();
};
execFunction(data);



// Arrow function
const arrowFunc = ()  => {
    console.log("I'm a arrow function");
}

arrowFunc();

// inside an object
const obj = {
    talk: function() {
        console.log("I'm talking");
    }
};
obj.talk();