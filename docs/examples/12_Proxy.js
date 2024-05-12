debugger;

const MyFn = function () { };

console.log('\n --- construct proxy --- \n');

const MyConstructor = new Proxy(MyFn, {
	get (target, propName, receiver) {
		debugger;
		console.log('.get: ', propName);
		return Reflect.get(target, propName, receiver);
	},
	construct (target, argumentsList, newTarget) {
		debugger;
		console.log('.construct invocation');
		return Reflect.construct(target, argumentsList, newTarget);
	}
});

const proxyInstance = new MyConstructor;

debugger;