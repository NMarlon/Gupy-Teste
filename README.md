
# Gupy-Teste


Olá! Eu fiz o Backend com 3 métodos MockApi, Locahost MySQL pelo XAMMP e uma variavel JSON diretamente inserida no index.js para testes. Depois eu configurei o Swwager e descrivi alguns detalhes quanto à implementação.

Eu configurei um MockAPI, mas vou criar o Banco de dados também
https://mockapi.io/projects/614225344d16670017ba2c3a
ou 
https://614225344d16670017ba2c39.mockapi.io/api/teste/TipoDeProfissional

O backend está funcionando corretamente com o XAMMP MySQL e com a MockAPI online.


## Resultados:

### Usando MockAPI
![image](https://user-images.githubusercontent.com/43282318/134378853-1258d4c8-58fe-4e18-bd63-a598b4d1b4bc.png)
dados da MockAPI funcionando de: https://614225344d16670017ba2c39.mockapi.io/api/teste/TipoDeProfissional

no terminal, após instalado o NodeJS, yarn, as dependências e o nodemon, digite o seguinte para abrir o arquivo:
nodemon index.js
![image](https://user-images.githubusercontent.com/43282318/134413336-aaa3cb21-97b8-4a55-bdb2-c98b6d027e2f.png)


Abra o Postman, e digite o localhost:8080/api/todos vai aparecer algo como abaixo:
![image](https://user-images.githubusercontent.com/43282318/134412967-5771e8ee-ce6f-4b91-9ecf-f690cbed8cc0.png)

Os dados aqui estão prontos pra serem processados no frontend
O link do MockAPI funciona perfeitamente, se eu editar os dados da MockAPI, se for testado, os dados virão atualizados


### Usando XAMMP
Agora podemos testar a versão do XAMMP:
Após abrir o XAMMP, no terminal digite o mesmo comando acima do nodemon:
nodemon indexXAMMP.js
![image](https://user-images.githubusercontent.com/43282318/134415784-0ca2b329-7225-4a53-ac17-25a1444d830e.png)

Abra o postman e digite: locahost:8080/ e clique em "send",
![image](https://user-images.githubusercontent.com/43282318/134416058-92b247e5-0091-415f-891a-31a008d9cd7c.png)

no meu caso aparece os dados que estão no que eu configurei na DB em MySQL pelo PHPMyAdmin


As tabelas no PHPMyAdmin
Profissão:
![image](https://user-images.githubusercontent.com/43282318/134416386-a2317bf1-0521-47a5-90b9-08dc951d9152.png)

### Swagger OpenAPI:
após abrir no terminal: nodemon index.js abra no navegador o seguinte link localhost:8080/api-docs vai abrir isso:
![image](https://user-images.githubusercontent.com/43282318/134417998-c210119b-6ca9-4fb3-a278-e08029c16b41.png)
![image](https://user-images.githubusercontent.com/43282318/134418387-dddd6f69-e260-4a3e-9a2f-0350059ec5e9.png)
Aqui está o Swagger.






Passos:

- Instalado NodeJS (versão 16.9.1 Windows)
    - !Eu instalei a versão 14.17.6 e deu erro! 
- Instalado Postman
- Instalado XAMMP
- Habilitar XAMMP MySQL e Apache
- Colocar o código pra rodar a DB.




Observações:
- Eu colocaria dentro de uma pasta para fins de organização todos os outros arquivos sobressalentes mantendo SOMENTE o index.js, o indexXAMMP.js e o swagger.json Mas já estou em cima da hora com o prazo e precisa reconfigurar os diretórios de cada uma destas pastas
- Eu adoraria fazer o front-end, por conta exclusivamente do tempo que passei arrumando o back-end, não fiz o front-end. Se precisar eu sei fazer.
-


