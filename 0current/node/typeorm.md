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
- [fkn query builder](https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md)

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

        // can specify the column type supported by your db platform
        @Column("int")
        height: number;

        //...
    }

  // relations -------------------------
    // options - third parameter on owning side of relationship
      {
        eager: bool, // children automatically loaded
        cascade: bool, // children automatically deleted
      }
    import { OneToOne, JoinColumn } from "typeorm";
    // import { Parent, Child, Sibling, Junction } ./depends/on/what/your/doing
    @Entity()
    export class Parent {
      // ONE-TO-ONE unidirectional
      // ^ you can only retrieve children from parents, i.e. select parent left join child on child.parent = parent
          // function that returns the class of the entity with which we want to make our relationship
          // ^ can also write it as () => Photo, but we use type => Photo as a convention to increase code readability
          // ^ unidirectional relation
          // ^^ first argument specifies the parent side of the relationship
          @OneToOne(type => Child)
          //  indicates that this side of the relationship will own the relationship
          // ^ Using @JoinColumn decorator is required on the owner side of the relationship
          // ^^ i.e. the table that should have a column containing the foreign key
          // ^^ e.g. create parent(user) > create child(profile) > user.profile = profile  > save(user)
          @JoinColumn({ name: 'thistablescolname', referencedColumnName: 'otherTablesIdcolumnName'})
          child: Child;

      // ONE-TO-ONE bidirectional
      // ^ only you to retrieve children from parents, and the parent of a child
          // i.e. specify the where the parent is stored on the child as the second param
          @OneToOne(type => Child, child => profile.parent)
          @JoinColum()
          child: Child;


          // ^ set cascade:true to always save the child object, whenever saving the parent
          // ^^ e.g. whenever we save User, we will also save profile
          // ^^ imo should only be used if updating parent will always update child
          @OneToOne(type => Child, child => child.parent, { cascade: true})
          @JoinColumn()
          child: Child;

      // ONE-TO-MANY (one parent has many chlidren)
      // have to create a ManyToOne on the child (see child)
          // e.g. a User having multiple comments
          @OneToMany(type => Child, child => child.parent)
          childs: Child[];

      // MAMY-TO-MANY unidirectional
      // ^ only specified on the owning side, even tho both sides can have many instances of the other
          // ^^ e.g. users have roles, roles have users, but users should own their roles
          // ^^ delete the relationship only deletes the record in the junction table,
          @ManyToMany(() => Child)
          @JoinTable()
          childs: Child[];

      // MAMY-TO-MANY bidirectional
          // ^ decorators on both sides
          @ManyToMany(() => Child, child => child.parents)
          // @see https://typeorm.io/#/relations/jointable-options
          @JoinTable()
          childs: Child[];

      // MANY-TO-MANY with custom properties
      // @see https://typeorm.io/#/many-to-many-relations/many-to-many-relations-with-custom-properties
    }
    @Entity()
    export class Child {
      // ONE-TO-ONE bidrectional
        // ^ bidiretional relationship
        // ^^ second argument is a function that returns the name of the inverse side of the relation
        // ^^ could pass a string as a second param, like "parent". But we used this function-typed approach to make our refactoring easier.
        // ^^ i.e. specify where the child  is stored on the parent
        @OneToOne(type => Parent, parent => parent.Child)
        parent: Parent;


      // MANY-TO-ONE (many children have one parent)
      // ^ creates a many-to-one, doenst matter if there is a one-to-many specifed on the parent
      // ^ always creates a `relation id` and `foreign key` on the parent
          @ManyToOne(type => Parent, parent => parent.childs)
          parent: Parent;

      // MANY-TO-MANY (roles have multiple permissions)
          // ^ only required on child if its bidirectional
          @ManyToMany(type => Parent, parent => parent.childs)
          parents: Parent[];
    }

  // CRUD ------------------------------
    // first off, get a handle on the fkn table
    // ^ all are the same? not sure of the technical difference
    // ^ but note the syntax
        // import { getConnection } from 'typeorm'
          const user = await getConnection()
            .createQueryBuilder()
            .select("user")
            .from(User, "user") // user is the table alias
            .additionalStuff()
        // import { getManager } from 'typeorm'
          const user = await getManager()
            .createQueryBuilder(User, "user") // alias again
            .additionalStuff()
        // import { getRepository } from 'typeorm'
          const user = await getRepository(User)
            .createQueryBuilder("user") // alias here too
            .additionalStuff()
    // types of queryBuilders
      .createQueryBuilder()
        // select some data
        .select('tablename')
        // insert new data
        .insert().into(SomeEntity)
          .values([
              { firstName: "Timber", lastName: "Saw" },
              { firstName: "Phantom", lastName: "Lancer" }
          ])
        // update existing data
        .update(SomeEntity)
          .set({ firstName: "Timber", lastName: "Saw" })
        // delete some data
        .delete().from(SomeEntity)

    // retrieval
      .blah().blah().getOne|getMany|getOneOrFail|getRawOne()
    // insert/update/delete
      .blah().blah().execute()

    // select the perfect syntax
      // all require getRawOne()
      .select("SUM(user.photosCount)", "sum")
      // the 'sum' is the column alias to use
      .select("user.id")
        .addSelect("SUM(user.photosCount)", "sum")
        .groupBy("user.id")


    // the what, why and how of WHERE
      // user is the table alias defined in the query type
      .where("user.id = :id", { id: 1 })
      .where("user.id = :id OR user.name = :name", { id: 1, name: "Timber" })
      .where("user.name IN (:...names)", { names: [ "Timber", "Cristal", "Lina" ] })
      .andWhere("user.lastName = :lastName", { lastName: "Saw" });
      .orWhere("user.lastName = :lastName", { lastName: "Saw" });
      // this one needs additional comments
      .andWhere(new Brackets(qb => {
        qb.where("user.firstName = :firstName", { firstName: "Timber" })
          .orWhere("user.lastName = :lastName", { lastName: "Saw" })
      }))
      // i.e.
        // SELECT ... FROM users user WHERE user.registered = true AND (
          // user.firstName = 'Timber' OR user.lastName = 'Saw')
    // HAVING
      .having("user.name = :name", { name: "Timber" })
      .andHaving("user.lastName = :lastName", { lastName: "Saw" });
      .orHaving("user.lastName = :lastName", { lastName: "Saw" });
    // additional stuffisisis
      .orderBy("user.id", "DESC") // or ASC
      .addOrderBy("user.id");
      .orderBy({ "user.name": "ASC", "user.id": "DESC" });
      .groupBy("user.id")
      .addGroupBy("user.id");
      .limit(10)
      .offset(10)
    // postgres only
      // distinct expression must match the leftmost order-by if used together like below
      .distinctOn(["user.id"]).orderBy("user.id")

    // relations
      .leftJoinAndSelect('user.linkedSheep', 'linkedSheep')
      .leftJoinAndSelect('user.linkedCow', 'linkedCow')
      .where('user.linkedSheep = :sheepId', { sheepId })
      .andWhere('user.linkedCow = :cowId', { cowId });




    // raw query, e.g. how we used pgcrypto to salt a hashed pw before storing in db
      entityManager.query(
        `
          some sql statement
            where poop = $1
        `,
        [bindVar1]
      )
    // CREATE --------------------------
        // save a single instance
          const profile = new Profile();
          profile.gender = "male";
          await connection.manager.save(profile);
        // then you can save any relations without cascade
          const user = new User();
          user.profile = profile;
          await connection.manager.save(user);
        // in one-to-many, save each child then the parent
        // ^ you can also do the inverse, but this is less code
          const photo1 = new Photo();
          await connection.manager.save(photo1);
          const photo2 = new Photo();
          await connection.manager.save(photo2);
        // now save the parent
          const user = new User();
          user.name = "John";
          user.photos = [photo1, photo2];
          await connection.manager.save(user);

    // READ ----------------------------
        const userRepository = connection.getRepository(User);
        // also retrieve a one-to-one relationship
        const users = await userRepository.find({ relations: ["profile"] });
        // or a one-to-many
        const users = await userRepository.find({ relations: ["photos"] });
        const photos = await users.photos; // since photos are lazy loaded, you have to load explicity
        // or all in one go with query builder
        // if bidrectional you can also do the inverse
        const users = await connection
          .getRepository(User)
          .createQueryBuilder("user")
          .leftJoinAndSelect("user.profile", "profile")
          .leftJoinAndSelect("user.photos", "photo")
          .getMany();

    // UPDATE --------------------------
    // ^ see save

    // DELETE --------------------------
      // retrieve > filter > save
      const question = getRepository(Question);
      question.categories = question.categories.filter(category => {
          return category.id !== categoryToRemove.id
      })
      await connection.manager.save(question)

      // or if cascade is true, you can soft delete
      // ^ will delete all relations from newQuestion, without having to filter on the other side
      await connection.manager.softRemove(newQuestion);


  // OTHER -----------------------------
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
