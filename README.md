![Titanbornes_Cover@0,5x](https://user-images.githubusercontent.com/45223699/151791982-78605257-20fb-49af-9d3e-08d324f98b25.png)

## Titanbornes API

- Website: [titanbornes.com](https://titanbornes.com/)
- Docs: [titanbornes.com/docs/](https://titanbornes.com/docs/)
- Twitter: [@titanbornes](https://twitter.com/titanbornes)
- Reddit: [/r/titanbornes](https://www.reddit.com/r/titanbornes/)
- Email: [contact@titanbornes.com](mailto:contact@titanbornes.com)
- Discord: [Titanbornes](https://discord.gg/Titanbornes)

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
