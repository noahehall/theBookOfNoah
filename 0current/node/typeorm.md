# TLDR

## links

- [main docs](https://typeorm.io/#/)
- [typeorm cli](https://typeorm.io/#/using-cli)
- [entity manager](https://typeorm.io/#/working-with-entity-manager/)
- [repository](https://typeorm.io/#/working-with-repository/)
- [supported column types](https://typeorm.io/#/entities/column-types)
  - [column types for postgres](https://typeorm.io/#/entities/column-types-for-postgres)
  - [column options](https://typeorm.io/#/entities/column-options)
- [postgres connection optoins](https://github.com/typeorm/typeorm/blob/master/src/driver/postgres/PostgresConnectionOptions.ts)
- [find* methods](https://typeorm.io/#/find-options/)

## basic

- models: Working with a database starts from creating tables. How do you tell TypeORM to create a database table? The answer is - through the models. Your models in your app are your database tables.

- entities: database tables are created from your models. Not all models, but only those you define as entities.
  - You work with entities everywhere with TypeORM. You can load/insert/update/remove and perform other operations with them.

- columns: simply need to decorate an entity's properties you want to make into a column with a @Column decorator.
  - number will be converted into integer,
  - string into varchar,
  - boolean into bool, etc.
  - But you can use any column type your database supports by explicitly specifying a column type into the @Column decorator.

- primary column: Each entity must have at least one primary key column. This is a requirement and you can't avoid it. To make a column a primary key, you need to use the @PrimaryColumn decorator.

- auto-genreated column: known as auto-increment / sequence / serial / generated identity column). To do that, you need to change the @PrimaryColumn decorator to a @PrimaryGeneratedColumn decorator:

- column data types
  - Column types are database-specific. You can set any column type your database supports.

- db connection
  - mysql, mariadb, postgres, cockroachdb, sqlite, mssql, oracle, cordova, nativescript, react-native, expo, or mongodb.
  - use your own host, port, username, password and database settings.
  - Setting synchronize makes sure your entities will be synced with the database, every time you run the application.
  - load entities automatically by seting up the whole directory, from where all entities will be connected and used in our connection:

- table relations
  - Relations can be unidirectional or bidirectional. Only one side of relational can be owning
    - unidirectional: The owner of the relation is X, and Y doesn't know anything about X
      - makes it complicated to access X from Y
    - bidrectional: the owner of the relation is X, but Y knows about X

## quickies

```js
  // created via typeorm init --blah blah blah chck the docs

  // base model entity
    import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

    @Entity()
    export class User {
        @PrimaryGeneratedColumn()
        id: number;

        // uses a default column type
        @Column()
        firstName: string;

        //...
    }

  // one-to-one relation
    import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
    import { Photo } from "./Photo";

    @Entity()
    export class PhotoMetadata {

        @PrimaryGeneratedColumn()
        id: number;

        // can specify the column type supported by your db platform
        @Column("int")
        height: number;

        // ...

        // function that returns the class of the entity with which we want to make our relationship
        // ^ can also write it as () => Photo, but we use type => Photo as a convention to increase code readability
        // ^ unidirectional relation
        // ^^ first argument specifies the parent side of the relationship
        @OneToOne(type => Photo)
        //  indicates that this side of the relationship will own the relationship
        // ^ Using @JoinColumn decorator is required on the owner side of the relationship
        // ^^ i.e. the table that should have a column containing the foreign key
        @JoinColumn()
        photo: Photo;

        // ^ bidiretional relationship
        // ^^ second argument is a function that returns the name of the inverse side of the relation
        // ^^ could alternatively simply pass a string as a second param, like "metadata". But we used this function-typed approach to make our refactoring easier.
        @OneToOne(type => Photo, photo => photo.metadata)
        @JoinColumn()
        photo: Photo;
          /**
            ^ this goes on the other entity
            @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo)
            metadata: PhotoMetadata;
            */
    }

  // saving a one-to-one relation
    // create a photo
    let photo = new Photo();
    // ...
    photo.isPublished = true;

    // create a photo metadata
    let metadata = new PhotoMetadata();
    // ...
    metadata.photo = photo; // this way we connect them

    // get entity repositories
    let photoRepository = connection.getRepository(Photo);
    let metadataRepository = connection.getRepository(PhotoMetadata);

    // first we should save a photo
    await photoRepository.save(photo);

    // photo is saved. Now we need to save a photo metadata
    await metadataRepository.save(metadata);

  // example express controller
    // use Repository instead of EntityManager. Each entity has its own repository which handles all operations with its entity. When you deal with entities a lot, Repositories are more convenient to use than EntityManagers:
    // ^ also available via connection.getRepository(new Poop())
    import {getRepository} from "typeorm";
    export class UserController {

      private userRepository = getRepository(User);

      async all(request: Request, response: Response, next: NextFunction) {
          return this.userRepository.find();
      }

      async one(request: Request, response: Response, next: NextFunction) {
          return this.userRepository.findOne(request.params.id);
      }

      // save method returns an instance of the same object you pass to it. It's not a new copy of the object, it modifies its "id" and returns it.
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
        // load an object with their relations
          let photoRepository = connection.getRepository(Photo);
          // ^ uses find* methods
            let photos = await photoRepository.find({ relations: ["metadata"] });

          // ^ need a more complex query, you should use QueryBuilder instead. QueryBuilder allows more complex queries to be used in an elegant way:
          // ^^ "photo" and "metadata" are aliases applied to selected photos. You use aliases to access columns and properties of the selected data.
            let photos = await connection
              .getRepository(Photo)
              .createQueryBuilder("photo")
              .innerJoinAndSelect("photo.metadata", "metadata")
              .getMany();

        console.log("Inserting a new user into the database...");
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;

        //  We used EntityManager to save it. Using entity manager you can manipulate any entity in your app
        await connection.manager.save(user);
        console.log("Saved a new user with id: " + user.id);

        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);

        console.log("Here you can setup and run express/koa/any other framework.");


        // example using Repository (recommended over manager)
          let photo = new Photo();
          photo.name = "Me and Bears";
          photo.description = "I am near polar bears";
          photo.filename = "photo-with-bears.jpg";
          photo.views = 1;
          photo.isPublished = true;

          let photoRepository = connection.getRepository(Photo);

          await photoRepository.save(photo);
          console.log("Photo has been saved");

          let savedPhotos = await photoRepository.find();
          console.log("All photos from the db: ", savedPhotos);

        // examples loading various records from the db using Repository
          let allPhotos = await photoRepository.find();
          console.log("All photos from the db: ", allPhotos);

          let firstPhoto = await photoRepository.findOne(1);
          console.log("First photo from the db: ", firstPhoto);

          let meAndBearsPhoto = await photoRepository.findOne({ name: "Me and Bears" });
          console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

          let allViewedPhotos = await photoRepository.find({ views: 1 });
          console.log("All viewed photos: ", allViewedPhotos);

          let allPublishedPhotos = await photoRepository.find({ isPublished: true });
          console.log("All published photos: ", allPublishedPhotos);

          let [allPhotos, photosCount] = await photoRepository.findAndCount();
          console.log("All photos: ", allPhotos);
          console.log("Photos count: ", photosCount);

        // example updating using Repository
          let photoToUpdate = await photoRepository.findOne(1);
          photoToUpdate.name = "Me, my friends and polar bears";
          await photoRepository.save(photoToUpdate);

        // example delete using Repository
          let photoToRemove = await photoRepository.findOne(1);
          await photoRepository.remove(photoToRemove);
    }).catch(error => console.log(error));
```
