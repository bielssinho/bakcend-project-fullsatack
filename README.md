# bakcend-project-fullsatack

## Passos ncessários para funcionamento
- instalar as dependencias do projeto que estão no arquivo package.json

```shell
yarn
```

- entre no .env.example para ver o que é necessário preencher nas suas variaveis de ambiente para o funcionamento do código
```shell
DATABASE_URL="postgres://user:password@host:port/db"
SECRET_KEY=
```

## Sobre o projeto
Esse além de ser um projeto de finalização de módulo (intuito didático) ele é uma aplicação onde o usuário pode criar listar atualizar e deletar um perfil próprio, alem disso ele consegue cadastrar contatos logo abaixo tem alguns exemplos de requisição.

## Doc API
- URL Base:
```shell
https://backend-project-fullstack.onrender.com
```
# Create User POST-/users
- Todos campos são obrigatórios</br>
Req:
```shell
{
	"name": "Medina1",
	"email": "MedinaSur1f@mail.com",
	"cellphone": "18997749641",
	"password": "MedinaSurf11",
	"profileImage": "https://i.pinimg.com/originals/f3/7d/cc/f37dcc161d69717338345435afb213ad.jpg"
}
```

Resp:
```shell
{
	"id": "2a69ec96-c798-4365-a306-1d34f8152576",
	"name": "Medina1",
	"email": "MedinaSur1f@mail.com",
	"cellphone": "18997749641",
	"profileImage": "https://i.pinimg.com/originals/f3/7d/cc/f37dcc161d69717338345435afb213ad.jpg",
	"createAt": "2023-05-25"
}
```

# List Users GET-/users

-Não possui requisição

Resp:
```shell
[
	{
		"id": "411e0080-00a2-4d4e-a188-86cff8de23a0",
		"name": "Medina1",
		"email": "MedinaSur1f@mail.com",
		"cellphone": "18997749641",
		"profileImage": "https://i.pinimg.com/originals/f3/7d/cc/f37dcc161d69717338345435afb213ad.jpg",
		"createAt": "2023-05-25"
	},
	{
		"id": "84774568-7e88-4c09-b805-c23af7c4b54c",
		"name": "Medina2",
		"email": "MedinaSur2f@mail.com",
		"cellphone": "18997749642",
		"profileImage": "https://i.pinimg.com/originals/f3/7d/cc/f37dcc161d69717338345435afb213ad.jpg",
		"createAt": "2023-05-25"
	}
]
```

# List User By Id GET-/users/id
-Não possui requisição, e é necessário estar logado para acessaar, e apenas possivel acessar o perfil da pessoa logada

Resp:
```shell
{
	"id": "411e0080-00a2-4d4e-a188-86cff8de23a0",
	"name": "Medina1",
	"email": "MedinaSur1f@mail.com",
	"cellphone": "18997749641",
	"profileImage": "https://i.pinimg.com/originals/f3/7d/cc/f37dcc161d69717338345435afb213ad.jpg",
	"createAt": "2023-05-25",
	"contacts": []
}
```

# Update User PATCH-/users/id
- Todos campos são opcionais e não é possivel alterar id</br>
Req:
```shell
{
	"name": "Medininha"
}
```

Resp:
```shell
{
	"id": "411e0080-00a2-4d4e-a188-86cff8de23a0",
	"name": "Medininha",
	"email": "MedinaSur1f@mail.com",
	"cellphone": "18997749641",
	"profileImage": "https://i.pinimg.com/originals/f3/7d/cc/f37dcc161d69717338345435afb213ad.jpg",
	"createAt": "2023-05-25"
}
```

# Delete User DELETE-/users/id
- Não possui req nem resp</br>


# Login User POST-/login
- Campos obrigatórios</br>
Req:
```shell
{
	"email": "MedinaSur1f@mail.com",
	"password": "MedinaSurf11"
}
```
Resp:
```shell
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ik1lZGluYTEiLCJpYXQiOjE2ODUwNDkwNzYsImV4cCI6MTY4NTA1MjY3Niwic3ViIjoiNDExZTAwODAtMDBhMi00ZDRlLWExODgtODZjZmY4ZGUyM2EwIn0.MhxXIiTipGYAQdspKITkYjRvqQP_UwbhblHpfkGlHyc"
}
```

# Create Contact POST-/contact
- Todos campos são obrigatórios e o email e telefone são unicos ou seja não pode repetir</br>
Req:
```shell
{
	"contactName": "Neymar jr",
	"contactEmail": "enejota1111@mail.com",
	"contactCellphone": "18996547839"
}
```

Resp:
```shell
{
	"id": "e86e1ae4-6344-4019-b4d3-74e4de30b7d9",
	"contactName": "Neymar jr",
	"contactEmail": "enejota1111@mail.com",
	"contactCellphone": "18996547839",
	"createAt": "2023-05-25"
}
```

# List Contacts GET-/contact

-Não possui requisição

Resp:
```shell
[
	{
		"id": "e86e1ae4-6344-4019-b4d3-74e4de30b7d9",
		"contactName": "Neymar jr",
		"contactEmail": "enejota1111@mail.com",
		"contactCellphone": "18996547839",
		"createAt": "2023-05-25"
	},
	{
		"id": "bf6c0165-19e2-4ec5-95fe-8150af6f06da",
		"contactName": "Neymar jr",
		"contactEmail": "enejota11@mail.com",
		"contactCellphone": "18996547849",
		"createAt": "2023-05-25"
	}
]
```

# Update User PATCH-/contact/id
- Todos campos são opcionais e não é possivel alterar id</br>
Req:
```shell
{
	"contactName": "Neymar jr11"
}
```

Resp:
```shell
{
	"id": "bf6c0165-19e2-4ec5-95fe-8150af6f06da",
	"contactName": "Neymar jr11",
	"contactEmail": "enejota11@mail.com",
	"contactCellphone": "18996547849",
	"createAt": "2023-05-25"
}
```

# Delete User DELETE-/contact/id
- Não possui req nem resp</br>
