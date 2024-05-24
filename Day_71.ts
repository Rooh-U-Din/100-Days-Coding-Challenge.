//CLASS TYPE ANNOTATION

class Product{
    id:number;
    name:string;
    price:number;


constructor(id:number,name:string,price:number){
    this.id=id,
    this.name=name,
    this.price=price
}
getProductInfo():string{
    return `ID:${this.id},Name:${this.name},Price:${this.price}`
}
}

const product1= new Product(1,"Mobile",29000);

console.log(product1);


//CLASS ACCESS MODIFIER

class MyClassPublic{
    name:string
    constructor(name:string){
        this.name=name
    }
}
const intensePublic= new MyClassPublic("Fida");
console.log(intensePublic.name);



class MyClassPrivet{
    private secret:string
    constructor(secret:string){
        this.secret=secret
    }
    revealSecret(){
        console.log(this.secret);
        
    }
}
const MyIntensePrivet= new MyClassPrivet("My Secret");

class Parent{
    protected Family:string
    constructor(Family:string){
        this.Family=Family
    }
}

class Child extends Parent{
    introduceFamily(){
        console.log(`Our family name is ${this.Family}`);
        
    }
}
const parentEx= new Parent("Smith");
const ChildEx= new Child("Johnson");

ChildEx.introduceFamily()


//CLASS ACCESSORS

class ProductExAccessors {
    private _price: number;
  
    constructor(private id: number, private name: string) {
      this._price = 0;
    }
    get price(): number {
      return this._price;
    }

    set price(newPrice: number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
  }
  
  const productEx = new ProductExAccessors(1, "Widget");
  
  console.log(productEx.getProductInfo()); 
  
  productEx.price = 20.0;
  
  console.log(productEx.getProductInfo());

  productEx.price=-5;

//CLASS STATIC MEMBERS

class ProductStaticMembers {
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return ProductStaticMembers.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  const product1static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Widget"
  );
  const product2static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Gadget"
  );
  
  console.log(product1static.getProductInfo()); 
  console.log(product2static.getProductInfo());
  

  class ProductImplementInterface {
    private static nextId: number = 1;
  
    constructor(private id: number, private name: string) {}
  
    static generateNextId(): number {
      return ProductImplementInterface.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }

  const product1implement = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(),
    "Widget"
  );
  const product2implement = new ProductImplementInterface(
    ProductImplementInterface.generateNextId(),
    "Gadget"
  );
  
  console.log(product1implement.getProductInfo());
  console.log(product2implement.getProductInfo());

//  ABSTRACT CLASSES AND MEMBERS

abstract class AbstractItem {
    private static nextId: number = 1;
  
    constructor(public id: number, protected name: string) {}
  
    static generateNextId(): number {
      return AbstractItem.nextId++;
    }
  
    abstract getItemInfo(): string;
  }
  
  class Item extends AbstractItem {
    constructor(id: number, name: string) {
      super(id, name);
    }
  
    getItemInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
  const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");
  
  console.log(item1.getItemInfo()); 
  console.log(item2.getItemInfo()); 

//POLYMORPHISM & METHOD OVERRIDE


abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
    static generateNextId(): number {
      return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
  }
  
  class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
 
  
  class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
  }
  

  const entity1: AbstractEntity = new Entity(
    AbstractEntity.generateNextId(),
    "Widget"
  );
  const entity2: AbstractEntity = new AnotherEntity(
    AbstractEntity.generateNextId(),
    "Gadget"
  );
  
  
  console.log(entity1.getEntityInfo()); 
  console.log(entity2.getEntityInfo());

  