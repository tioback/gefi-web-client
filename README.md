# gefi-server
Cliente web para o serviço de gerenciamento de filas.

## Propósito

Sistema de controle de senhas para atendimento bancário. O sistema será utilizado por dois perfis de usuários: GERENTE e CLIENTE. O Gerente será responsável pela administração do sistema, chamando novas senhas e reiniciando a contagem de senhas quando for necessário. Ao cliente caberá apenas a retirada e acompanhamento das senhas.


## Dependências

* JDK 1.8 ou mais recente
* Maven 3.0 ou mais recente
* Git 

## Obtendo o projeto

	$ mkdir -p /workspace/gefi-web-client
	$ cd /workspace/gefi-web-client
	$ git clone https://github.com/tioback/gefi-web-client.git
	
## Executando no modo standalone

	$ mvn spring-boot:run
	
## Empacotando para deploy

	$ mvn clean package
	# Utilizar o arquivo target/gefi-web-client*.war 

## Utilizando

O sistema pode ser acessado pela url http://localhost:8070/gefi-web-client.

Na primeira tela, o usuário pode escolher o perfil desejado: *Acesso do Cliente*, *Acesso do Gerente* e *Visualizador de Senhas*.

### Acesso do Cliente

As ações permitidas ao cliente são acessíveis através dos botões:

* Gerar Senha Normal - gera uma senha de prioridade normal e encaminha para o visualizador de senhas.
* Gerar Senha Preferencial - gera uma senha de prioridade preferencial e encaminha para o visualizador de senhas.
* Voltar - retorna à tela inicial do sistema.
	
### Acesso do Gerente

O Gerente pode realizar as seguintes operações:

## Testes

O sistema possui testes para os serviços disponibilizados e são sempre executados ao compilar a aplicação através do Maven.

* Chamar Próxima Senha - Retorna a primeira senha da fila, respeitando a prioridade, caso a fila não esteja vazia.
* Reiniciar Senha Normal - Reinicia o contador para as senhas normais.
* Reiniciar Senha Preferencial - Reinicia o contador para as senhas preferenciais.