# titanbornes-game-bot

![Titanbornes_TwitterCover@0,5x](https://user-images.githubusercontent.com/45223699/156891223-35d9ee5f-fd5c-40c1-8e45-9d4ecf9b4b77.png)

## Titanbornes

- Website: [titanbornes.com](https://titanbornes.com/)
- Twitter: [@titanbornes](https://twitter.com/titanbornes)
- Discord: [discord.gg/titanbornes](https://discord.gg/titanbornes)

## Getting Started

```sh
$ npm install
$ npm run server
```

Then head over to [localhost:5000](http://localhost:5000) to see the dashboard live!

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
{"mode":"full","isActive":false}

## ENV Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```


## Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
