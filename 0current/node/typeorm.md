# TLDR

## links

- [main docs](https://typeorm.io/#/)
- [typeorm cli](https://typeorm.io/#/using-cli)

## quickies

```js
  // created via typeorm init --blah blah blah chck the docs

  // base model entity
    import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

    @Entity()
    export class User {

        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        firstName: string;

        @Column()
        lastName: string;

        @Column()
        age: number;

    }

  // example express controller
    import {getRepository} from "typeorm";
    export class UserController {

      private userRepository = getRepository(User);

      async all(request: Request, response: Response, next: NextFunction) {
          return this.userRepository.find();
      }

      async one(request: Request, response: Response, next: NextFunction) {
          return this.userRepository.findOne(request.params.id);
      }

      async save(request: Request, response: Response, next: NextFunction) {
          return this.userRepository.save(request.body);
      }

      async remove(request: Request, response: Response, next: NextFunction) {
          let userToRemove = await this.userRepository.findOne(request.params.id);
          await this.userRepository.remove(userToRemove);
      }
    }

  // example CRUD
    import "reflect-metadata";
    import {createConnection} from "typeorm";
    import {User} from "./entity/User";

    createConnection().then(async connection => {

        console.log("Inserting a new user into the database...");
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        await connection.manager.save(user);
        console.log("Saved a new user with id: " + user.id);

        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);

        console.log("Here you can setup and run express/koa/any other framework.");

    }).catch(error => console.log(error));

```
