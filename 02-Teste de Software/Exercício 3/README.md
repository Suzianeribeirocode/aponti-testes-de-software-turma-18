# Atividade Avaliativa – Casos de Teste para Tela de Login

## CT-001 – Login com credenciais válidas

**ID:** CT-001

**Título:** Validar login com usuário e senha válidos

**Pré-condições:**
- Usuário cadastrado no sistema.
- Conta ativa.

**Passos:**
1. Acessar a tela de login.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar no botão **Entrar**.

**Resultado esperado:**
- O usuário é autenticado com sucesso.
- O sistema redireciona para a página inicial.
- O nome do usuário é exibido na área logada.

---

## CT-002 – Login com senha incorreta

**ID:** CT-002

**Título:** Validar login com senha inválida

**Pré-condições:**
- Usuário cadastrado e ativo.

**Passos:**
1. Acessar a tela de login.
2. Informar um usuário válido.
3. Informar uma senha incorreta.
4. Clicar no botão **Entrar**.

**Resultado esperado:**
- O login não é realizado.
- É exibida a mensagem: **"Usuário ou senha inválidos."**
- O usuário permanece na tela de login.

---

## CT-003 – Login com usuário inexistente

**ID:** CT-003

**Título:** Validar login utilizando usuário não cadastrado

**Pré-condições:**
- Não possuir cadastro com o usuário informado.

**Passos:**
1. Acessar a tela de login.
2. Informar um usuário inexistente.
3. Informar qualquer senha.
4. Clicar no botão **Entrar**.

**Resultado esperado:**
- O login não é realizado.
- É exibida mensagem informando credenciais inválidas.
- Nenhuma sessão é criada.

---

## CT-004 – Campos obrigatórios vazios

**ID:** CT-004

**Título:** Validar envio do formulário sem preencher os campos

**Pré-condições:**
- Estar na tela de login.

**Passos:**
1. Acessar a tela de login.
2. Deixar os campos Usuário e Senha vazios.
3. Clicar no botão **Entrar**.

**Resultado esperado:**
- O login não é realizado.
- São exibidas mensagens indicando que os campos são obrigatórios.

---

## CT-005 – Campo senha vazio

**ID:** CT-005

**Título:** Validar login sem informar a senha

**Pré-condições:**
- Usuário cadastrado.

**Passos:**
1. Acessar a tela de login.
2. Informar um usuário válido.
3. Deixar o campo Senha vazio.
4. Clicar no botão **Entrar**.

**Resultado esperado:**
- O login não é realizado.
- É exibida mensagem solicitando o preenchimento da senha.

---

## CT-006 – Campo usuário vazio

**ID:** CT-006

**Título:** Validar login sem informar o usuário

**Pré-condições:**
- Estar na tela de login.

**Passos:**
1. Acessar a tela de login.
2. Deixar o campo Usuário vazio.
3. Informar uma senha qualquer.
4. Clicar no botão **Entrar**.

**Resultado esperado:**
- O login não é realizado.
- É exibida mensagem solicitando o preenchimento do usuário.

---

## CT-007 – Login com espaços antes e depois do usuário

**ID:** CT-007

**Título:** Validar login com espaços extras no campo usuário

**Pré-condições:**
- Usuário cadastrado.

**Passos:**
1. Acessar a tela de login.
2. Informar o usuário com espaços antes e depois do texto.
3. Informar a senha correta.
4. Clicar no botão **Entrar**.

**Resultado esperado:**
- Os espaços são desconsiderados pelo sistema.
- O login é realizado com sucesso.

---

## CT-008 – Tentativas consecutivas de senha incorreta

**ID:** CT-008

**Título:** Validar bloqueio após múltiplas tentativas inválidas

**Pré-condições:**
- Usuário cadastrado.
- Política de bloqueio configurada.

**Passos:**
1. Acessar a tela de login.
2. Informar um usuário válido.
3. Informar senha incorreta.
4. Clicar em **Entrar**.
5. Repetir os passos 2 a 4 até atingir o limite permitido.

**Resultado esperado:**
- Após o número máximo de tentativas, a conta é bloqueada temporariamente.
- É exibida mensagem informando o bloqueio.

---

## CT-009 – Login utilizando a tecla Enter

**ID:** CT-009

**Título:** Validar envio do formulário pela tecla Enter

**Pré-condições:**
- Usuário cadastrado.

**Passos:**
1. Acessar a tela de login.
2. Informar usuário válido.
3. Informar senha válida.
4. Pressionar a tecla **Enter**.

**Resultado esperado:**
- O formulário é enviado.
- O login é realizado com sucesso.
- O usuário é direcionado para a área autenticada.

---

## CT-010 – Acesso à página de login após autenticação

**ID:** CT-010

**Título:** Validar comportamento ao acessar a tela de login após estar autenticado

**Pré-condições:**
- Usuário já autenticado no sistema.

**Passos:**
1. Realizar login com sucesso.
2. Digitar manualmente a URL da tela de login no navegador.
3. Pressionar **Enter**.

**Resultado esperado:**
- O sistema não exibe novamente a tela de login.
- O usuário é redirecionado para a página inicial ou área logada.

---

## CT-011 – Sensibilidade a letras maiúsculas e minúsculas na senha

**ID:** CT-011

**Título:** Validar diferenciação entre letras maiúsculas e minúsculas na senha

**Pré-condições:**
- Usuário cadastrado com senha contendo letras maiúsculas e minúsculas.

**Passos:**
1. Acessar a tela de login.
2. Informar usuário válido.
3. Informar a senha alterando a capitalização das letras.
4. Clicar em **Entrar**.

**Resultado esperado:**
- O login não é realizado.
- É exibida mensagem de credenciais inválidas.

---

## CT-012 – Caracteres especiais nos campos de login

**ID:** CT-012

**Título:** Validar tratamento de caracteres especiais e tentativa de SQL Injection

**Pré-condições:**
- Estar na tela de login.

**Passos:**
1. Acessar a tela de login.
2. Informar `' OR '1'='1` no campo Usuário.
3. Informar `' OR '1'='1` no campo Senha.
4. Clicar no botão **Entrar**.

**Resultado esperado:**
- O login não é realizado.
- O sistema trata os caracteres de forma segura.
- Nenhum erro técnico é exibido ao usuário.
- Não ocorre acesso indevido ao sistema.
