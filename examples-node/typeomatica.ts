import { Strict } from 'typeomatica';

debugger;

@Strict({ someProp: 123 })
class DecoratedByBase {
	someProp!: number;
}

debugger;

class ExtendedDecoratedByBase extends DecoratedByBase {
	someProp: number;
	constructor() {
		super();
		this.someProp = 321;
	}
}

debugger;

const instance = new ExtendedDecoratedByBase;

debugger;
try {
	debugger;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-expect-error
	instance.someProp = 'string';
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
	debugger;
}
