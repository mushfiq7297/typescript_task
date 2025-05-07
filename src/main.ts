function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == false) {
    console.log(`${input.toLowerCase()}`);
    return `${input.toLowerCase()}`
  } else {
    console.log(`${input.toUpperCase()}`);
    return `${input.toUpperCase()}`
  }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
   const output = items.filter(item => item.rating > 4.0);
   console.log(output)
    return output;


}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    console.log(arrays.flat())
    return arrays.flat();
  }
  
class vehicle {
private make : string;
private year : number;

constructor(make:string, year:number){
    this.make = make;
    this.year = year;
}
 
getInfo(): string{
    console.log(`Make: ${this.make}, Year: ${this.year}`);
    return `${this.make}, ${this.year}`
 }
}

class Car extends vehicle {
    constructor(make:string, year:number, private model:string) {
        super(make, year)
        
    }

    getModel():string{
        console.log(`Model: ${this.model}`);
    return `Model: ${this.model}`
    }
 }

 function processValue(value: string | number): number{
    if(typeof value === "string"){
        console.log(value.length)
        return value.length;
    }
    else if(typeof value === "number") {
        console.log(value*2)
        return value*2;
    }
 }
 

 interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0 ){
        return null;
    }
    let mostExpensiveProduct = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensiveProduct.price) {
            mostExpensiveProduct = products[i];
        }
      }
      return  mostExpensiveProduct;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  async function squareAsync(n: number): Promise<number>{
    if(n<0){
        return Promise.reject(new Error("Negetive number is not allowed"))
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    return n * n;
  }

