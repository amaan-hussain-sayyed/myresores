const object = {
    privateValue: 10,
    helloworld: 10
};
const proxy = new Proxy({}, {
    get: (target, property) => {
        if (property === "privateValue") {
            return Error("This property is private");
        } else {
            return Reflect.get(target, property);
        }
    },
});


console.log(proxy.privateValue); // throws an error
