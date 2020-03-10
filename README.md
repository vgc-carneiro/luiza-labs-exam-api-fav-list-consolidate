# Getting Started
1.	[Instalar o NodeJS](https://nodejs.org/en/)
2.	Instalar as dependências respectivas: <code>npm install</code>
3.	Rodar o projeto em DEV (Executa o nodemon para auxílio e populas as variáveis de ambiente necessárias): <code>npm run dev</code>
4. <strong>TODA E QUALQUER ALTERAÇÃO</strong> Validar seu código: <code>npm run lint</code>
4. Existe um path para swagger: <code>/docs</code>

# Rotas

<b><strong>POST: </strong>/client/{id}</b>

-Rota utilizada para inserir uma lista completa de produtos favoritos para um cliente por ID.

<ul>
	<li>Input no PATH: <code>id do cliente</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
	<li>Input no Body: <code>{"products": [String]}</code> (ID do produto)</li>
	</ul>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e66e08b91af847fd4f0364f",
	"clientId":"5e6452ff94fd2082e8b8b6a5",
	"clientName":"Vinicius Carneiro Bezerra",
	"clientEmail":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-10T00:34:19.662Z",
	"createdAt":"2020-03-10T00:34:19.662Z",
	"productList":[
		{
			"_id":"5e66e567e875f3837d9e280d",
			"price":1699,
			"image":"http://challenge-api.luizalabs.com/images/1bf0f365-fbdd-4e21-9786-da459d78dd1f.jpg",
			"brand":"bébé confort",
			"id":"1bf0f365-fbdd-4e21-9786-da459d78dd1f",
			"title":"Cadeira para Auto Iseos Bébé Confort Earth Brown"
		}
	],
	"__v":0
}

```
<b><strong>POST: </strong>/client/email/{email}</b>

-Rota utilizada para inserir uma lista completa de produtos favoritos para um cliente por Email.

<ul>
	<li>Input no PATH: <code>Email do cliente</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
	<li>Input no Body: <code>{"products": [String]}</code> (ID do produto)</li>
	</ul>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e66e08b91af847fd4f0364f",
	"clientId":"5e6452ff94fd2082e8b8b6a5",
	"clientName":"Vinicius Carneiro Bezerra",
	"clientEmail":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-10T00:34:19.662Z",
	"createdAt":"2020-03-10T00:34:19.662Z",
	"productList":[
		{
			"_id":"5e66e567e875f3837d9e280d",
			"price":1699,
			"image":"http://challenge-api.luizalabs.com/images/1bf0f365-fbdd-4e21-9786-da459d78dd1f.jpg",
			"brand":"bébé confort",
			"id":"1bf0f365-fbdd-4e21-9786-da459d78dd1f",
			"title":"Cadeira para Auto Iseos Bébé Confort Earth Brown"
		}
	],
	"__v":0
}
```


<b><strong>PATCH: </strong>/client/{id}/{productId}</b>

-Rota utilizada para inserir um produto a lista de produtos favoritos para um cliente por ID.

<ul>
	<li>Input no PATH: <code>ID do cliente</code></li>
	<li>Input no PATH: <code>ID do produto</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
	</ul>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e66e08b91af847fd4f0364f",
	"clientId":"5e6452ff94fd2082e8b8b6a5",
	"clientName":"Vinicius Carneiro Bezerra",
	"clientEmail":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-10T00:34:19.662Z",
	"createdAt":"2020-03-10T00:34:19.662Z",
	"productList":[
		{
			"_id":"5e66e567e875f3837d9e280d",
			"price":1699,
			"image":"http://challenge-api.luizalabs.com/images/1bf0f365-fbdd-4e21-9786-da459d78dd1f.jpg",
			"brand":"bébé confort",
			"id":"1bf0f365-fbdd-4e21-9786-da459d78dd1f",
			"title":"Cadeira para Auto Iseos Bébé Confort Earth Brown"
		}
	],
	"__v":0
}
```


<b><strong>PATCH: </strong>/client/email/{Email}/{productId}</b>

-Rota utilizada para inserir um produto a lista de produtos favoritos para um cliente por Email.

<ul>
	<li>Input no PATH: <code>Email do cliente</code></li>
	<li>Input no PATH: <code>ID do produto</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
	</ul>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e66e08b91af847fd4f0364f",
	"clientId":"5e6452ff94fd2082e8b8b6a5",
	"clientName":"Vinicius Carneiro Bezerra",
	"clientEmail":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-10T00:34:19.662Z",
	"createdAt":"2020-03-10T00:34:19.662Z",
	"productList":[
		{
			"_id":"5e66e567e875f3837d9e280d",
			"price":1699,
			"image":"http://challenge-api.luizalabs.com/images/1bf0f365-fbdd-4e21-9786-da459d78dd1f.jpg",
			"brand":"bébé confort",
			"id":"1bf0f365-fbdd-4e21-9786-da459d78dd1f",
			"title":"Cadeira para Auto Iseos Bébé Confort Earth Brown"
		}
	],
	"__v":0
}
```


<b><strong>DELETE: </strong>/client/{id}/{productId}</b>

-Rota utilizada para deletar um produto a lista de produtos favoritos para um cliente por ID.

<ul>
	<li>Input no PATH: <code>ID do cliente</code></li>
	<li>Input no PATH: <code>ID do produto</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
	</ul>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e66e08b91af847fd4f0364f",
	"clientId":"5e6452ff94fd2082e8b8b6a5",
	"clientName":"Vinicius Carneiro Bezerra",
	"clientEmail":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-10T00:34:19.662Z",
	"createdAt":"2020-03-10T00:34:19.662Z",
	"productList":[
	],
	"__v":0
}
```


<b><strong>DELETE: </strong>/client/email/{Email}/{productId}</b>

-Rota utilizada para deletar um produto a lista de produtos favoritos para um cliente por Email.

<ul>
	<li>Input no PATH: <code>Email do cliente</code></li>
	<li>Input no PATH: <code>ID do produto</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
	</ul>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e66e08b91af847fd4f0364f",
	"clientId":"5e6452ff94fd2082e8b8b6a5",
	"clientName":"Vinicius Carneiro Bezerra",
	"clientEmail":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-10T00:34:19.662Z",
	"createdAt":"2020-03-10T00:34:19.662Z",
	"productList":[
	],
	"__v":0
}
```


# Build and Test

Este projeto contém uma dependência chamada [HUSKY](https://www.npmjs.com/package/husky), sendo assim, qualquer <b>commit</b> ou <b>push</b>, será acionado automaticamente o [LINT](https://www.npmjs.com/package/eslint) e testes unitários [JASMINE](https://jasmine.github.io/setup/nodejs.html).

<ul>
    <li>
        Rodar projeto em DEV: <code>npm run dev</code>
    </li>
    <li>
        Rodar projeto: <code>npm start</code>, (Colocar variáveis de ambiente)
    </li>
    <li>
        Rodar testes de cobertura: <code>npm run cover</code>
    </li>
    <li>
        Validar seu código: <code>npm run lint</code>
    </li>
    <li>
		SWAGGER <code>/docs/</code>
    </li>
</ul>

Rodando o projeto com DOCKER:

<ul>
	<li>
		No terminal, acessar a raiz do projeto, onde se encontra o Dockerfile.
	</li>
    <li>
        Criar imagem: <code>docker build -t luiza-labs/api-fav-list-consolidate .</code>
    </li>
    <li>
        Rodar a imagem: <code>docker run -p 3004:3004 luiza-labs/api-fav-list-consolidate</code>
    </li>
</ul>