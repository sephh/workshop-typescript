# Setup

## 01 - Instale o typescript global na sua máquina

```
sudo npm install -g typescript
```

## 02 - Crie o arquivo `package.json`

```
npm init -y
```

## 03 - Configure o `tsconfig.json`

```
    {
      "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true
      },
      "exclude": [
        "node_modules"
      ]
    }
```

## 04 - Instale o webpack e algumas dependências

Webpack:

```
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
``` 

Loader para typescript:

```
npm install typescript ts-loader --save-dev
```

## 05 - Configure o `webpack.config.js`

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/app.ts'),
    output: {
        filename: 'app.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};
```

## 06 - Crie o arquivo `app.ts`

```
    console.log('Picles');
```

## 07 - Crie o arquivo `public/index.html`

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Typescript Workshop</title>
    </head>
    <body>
    
    </body>
</html>
```

## 08 - Atualize o `package.json`

```
"scripts": {
    "start": "webpack-dev-server --mode development"
},
```

## 09 - Execute a aplicação

```
    npm start
``` 

Você verá o console "Picles", em http://localhost:8080