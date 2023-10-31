export class EventEmitter<TArgs> {
	readonly events: Map<string, Set<(x: TArgs) => void>>;

	constructor() {
			this.events = new Map();
	}

	subscribe(eventName: string, fn: (x: TArgs) => void) {
			if (!this.events.has(eventName)) {
					this.events.set(eventName, new Set());
			}

			const eventSet = this.events.get(eventName);

			eventSet?.add(fn);
	}

	emit(eventName: string, data: TArgs) {
			const eventSet = this.events.get(eventName);
			eventSet?.forEach(fn => fn.call(null, data));
	}
}