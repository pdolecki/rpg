# 🧙 RPG – Table Top RPG Assistant

Live Demo: https://pd-rpg.netlify.app
For testing purposes use:
login: testuser
password: testuser

**Crpt** is a lightweight Angular 20 application for helping players manage and research Warhammer Fantasy RPG 4th Edition gameplay. It uses modern Angular features and applies best practises in architecture, Angular Material, and performance.

App generated with:

> ng new rpg --defaults --style=scss --standalone --routing --inline-template --inline-style

## 🚀 Features

- 📈 Character development calculators
- 🧠 Clean reactive store using Angular 20 signals & `httpResource`
- 🧮 Ability to search informations on talents, skills, effects etc.
- 📦 Lazy loaded components, to make UI load faster
- 💅 Styling based on Angular Material custom theme
- 🚀 Firebase api

## 🛠️ Tech Stack

- **Angular 20 Zoneless**
- **Angular Material**
- **RxJS Signals & Computed Store**
- **httpResource** for declarative HTTP
- **Type-safe architecture with interfaces**
- **Firebase, rxfire**

## 🧪 Unit Testing

Since Angular 20 new default testing is now being done using Jest/Web Runner and the current documentation is lacking information about zoneless testing I've decided to go without testing as of now. (I'm going to come back to this when there will be a clear, supported by Angular way for testing zoneless apps with Karma decomissioned)

## 🧑‍💻 Getting Started

Install dependencies:

> npm install

Run project:

> npm start

## 🧮 Firebase Setup

1. Setting up Firebase and rxfire with emulators for local development.

Provide Firebase CLI:
> npm install -g firebase-tools

Login to firebase (firebase.google.com - create account):
> firebase login

If you have problems with logging in after some time:
> firebase login --reauth

Install rxfire (exposes firebase functionalities as observables - instead of converting them ourselfs with rxjs):
> npm install firebase
> npm install rxfire

Enable rxfire support:
> Add "moduleResolution": "node" to tsconfig.json (to compilerOptions)

Generate configuration and install local emulators for services, choose Firestore and Emulators. Create a new project (id doleckip-rpg) and follow prompts. Enable Emulator UI, downoad the emulators.:
> firebase init
Go to firebase browser console, select project > Build > Firestore Database. Create database, Start in test mode (security rules will be updated later on).

Every time you update security rules, deploy them:
> firebase deploy --only firestore:rules

Enable authentication:
Go to Firebase console > Build > Authentication > Get Started > Email/Password > Save

2. Creating a development and production environment.
We want to use (automatically, not to switch configurations manually):
- emulators for Firestore and Authentication for development
- Firestore and Authenication from real project during production
Modify environment.ts (get info from console > Project Overview > WEB > Create your web app) to match project config.

Than we do the same for dev, but:
- production is false,
- useEmulators is true,
- we have projectID prefixed with "demo" (prevents access to real services)

Than we set up app config locally (app.config.ts). We need to:
- call the intitializeApp Firebase function
- create injection tokens, to later on provide Firebase functions to our Firestore and Authentication services (but in dev we want to use local emulators instead) !!PERFECT INJECTION TOKENS USECASE!!
Make sure you have java installed on the machine to use emulators.
Add a start script in package.json

**SIDENOTE ABOUT Databases**
Firestore is a document-based NoSQL database.

Some Other types of NoSQL databases would be:
- Key-Value (redis, Amazon DynamoDB, memcached)
- Columnar / BigTable (HBase, Cassandra, Amazon SimpleDB)
- Document (Firestore, CouchDB, MongoDB, Riak)
- Graph (Neo4J, AllegroGraph, InfoGraph)

Most commonly used are probably Key-Value and Document, they are similar in nature. A KeyValue database stores values indexed by a key, e.g. would be browser's local storage.
A document database is similar, but its information is stored in a structure similar to JS objects or JSON strings. These objects are reffered to as "documents". 
The reason they are referred to as documents is because the document generally contains all the information you need in one place.

The difference between those two is that with a document database the database knows about the structure of that JSON object, and provides a means to query against it, rather than just accessing a specific key value.

3. Implementing security rules
We need to:
- update our firestore.rules accordingly and deploy them
- we need to create auth service, feature services, guards and login/register functionalities