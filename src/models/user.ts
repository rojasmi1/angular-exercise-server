export class User {
  private userName: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private age: number;

  constructor(userName: string, firstName: string,
              lastName: string, email: string, age: number) {

    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }


  public get UserName(): string {
    return this.userName;
  }

  public set UserName(value: string) {
    this.userName = value;
  }


  public get FirstName(): string {
    return this.firstName;
  }

  public set FirstName(value: string) {
    this.firstName = value;
  }


  public get LastName(): string {
    return this.lastName;
  }

  public set LastName(value: string) {
    this.lastName = value;
  }


  public get Email(): string {
    return this.email;
  }

  public set Email(value: string) {
    this.email = value;
  }


  public get Age(): number {
    return this.age;
  }

  public set Age(value: number) {
    this.age = value;
  }


}
