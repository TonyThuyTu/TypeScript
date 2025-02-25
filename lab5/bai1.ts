class Container<T> {   //U
    
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): boolean {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    getItems(): T[] {
        return this.items;
    }
}

function filterContainer<T>(container: Container<T>, predicate: (item: T) => boolean): Container<T> {

    const filterContainer = new Container<T>();

    for (const item of container.getItems()) {
        if (predicate(item)) {
            filterContainer.add(item);
        }
    }

    return filterContainer;
}


const container = new Container<number>();
container.add(1);
container.add(2);
container.add(3);
container.add(4);
container.add(5);

container.remove(3);

container.remove(6);

console.log(`Numbers: ${container.getItems()}`);

// Even numbers
const evenNumbers = filterContainer(container, (item) => item % 2 === 0);

evenNumbers.add(3);
evenNumbers.add(6);
evenNumbers.add(8);
evenNumbers.add(10);
evenNumbers.add(12);

console.log(`Even numbers: ${evenNumbers.getItems()}`);

//For even numbers

const evenNumbers2 = filterContainer(evenNumbers, (item) => item % 2 === 0);

console.log(`Even numbers 2: ${evenNumbers2.getItems()}`);