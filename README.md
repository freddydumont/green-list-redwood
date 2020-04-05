# Dhamma list

## Internationalization

We use [i18next][1] to manage translations. See [this guide][2] to get up to speed.

Translation files are [namespaced][3] into pages, and nested into components. Ex: `t('home:hero.Get started')`.

Common components like `NavBar` do not use namespacing. They end up in the `translation.json` file. They can still be nested into components if it makes sense.

Use `yarn run extract` to extract new translations to the json files. By default, they will be initialized with the specified key.

So the workflow is:

1. Wrap the english text in `t('my text')`
    - For a single word, we can enter it direcly eg. `t('Welcome')`, but for a paragraph it's better to use a meaningful identifier eg. `t('how it works 1')`
2. Use the extract script: `npm run extract`
3. Enter the translation in the French file.

That way we only need to touch the French file and we have the actual text directly in the code.

[1]: https://www.i18next.com
[2]: https://www.robinwieruch.de/react-internationalization
[3]: https://www.robinwieruch.de/react-internationalization#react-with-react-i18next-multiple-files-namespaces

# Redwood
>**HEADS UP:** RedwoodJS is _NOT_ ready for use in Production. It relies heavily on Prisma2, which is currently in testing with an expected production release coming soon. See status at ["Is Prisma2 Ready?"](https://isprisma2ready.com)

## Getting Started
- [Redwoodjs.com](https://redwoodjs.com): home to all things RedwoodJS.
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](/#): coming soon!

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.

## Development

### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.