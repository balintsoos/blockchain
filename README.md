# :link: blockchain

Blockchain implementation in Node.js with Typescript

> Inspired by ['Bitcoin ₿ in 100 Seconds // Build your Own Blockchain'](https://www.youtube.com/watch?v=qF7dkrce-mQ)

## How to set up

Install dependencies

```
$ nvm install
$ npm install
```

Build

```
$ npm run build
```

Run the example

```
$ npm run example
```

## Example

```js
const satoshi = createWallet();
const bob = createWallet();

const chain = createChain({
  sender: 'genesis',
  receiver: satoshi.publicKey,
  amount: 100,
});

const transaction = {
  sender: satoshi.publicKey,
  receiver: bob.publicKey,
  amount: 5,
};

const signature = createSignature(transaction, satoshi.privateKey);

addBlock(chain, transaction, signature);
```

## Used Technologies

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jasmine](https://jasmine.github.io/)
- [GitHub Actions](https://github.com/features/actions)

## License

[MIT](./LICENSE)
