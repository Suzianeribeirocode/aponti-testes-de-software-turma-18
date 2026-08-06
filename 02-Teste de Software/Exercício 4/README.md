# Atividade Avaliativa — Cenários de Teste

## Contexto

Uma nova versão de um **sistema bancário** foi implantada contendo:

- Correção no login;
- Ajuste na exibição do saldo na tela inicial.

O objetivo é propor **5 cenários para cada tipo de teste** (**Smoke, Sanidade e Regressão**) e **justificar a escolha** de cada um.

---

# 1. Testes de Smoke

**Objetivo:** verificar rapidamente se as principais funcionalidades do sistema estão operacionais após a implantação.

### Cenário 1 — Acesso ao sistema com usuário válido

**Passos:** informar agência, conta e senha corretos.

**Resultado esperado:** login realizado com sucesso e redirecionamento para a tela inicial.

**Justificativa:** o login foi alterado; essa é a funcionalidade crítica que precisa estar operacional para permitir o uso do sistema.

---

### Cenário 2 — Exibição da tela inicial após o login

**Passos:** realizar login e observar o carregamento da home.

**Resultado esperado:** tela inicial carregada sem erros.

**Justificativa:** garante que a navegação principal não foi afetada pela nova versão.

---

### Cenário 3 — Exibição do saldo disponível

**Passos:** acessar a tela inicial após o login.

**Resultado esperado:** saldo exibido corretamente e sem campos vazios.

**Justificativa:** houve ajuste específico na exibição do saldo, portanto é um ponto obrigatório do smoke test.

---

### Cenário 4 — Acesso ao menu de extrato

**Passos:** clicar na opção **Extrato**.

**Resultado esperado:** tela de extrato aberta normalmente.

**Justificativa:** confirma que funcionalidades básicas relacionadas à conta continuam acessíveis.

---

### Cenário 5 — Logout do sistema

**Passos:** clicar em **Sair**.

**Resultado esperado:** sessão encerrada e retorno à tela de login.

**Justificativa:** valida o ciclo básico de uso do sistema (entrar → utilizar → sair).

---

# 2. Testes de Sanidade

**Objetivo:** validar especificamente as funcionalidades corrigidas ou alteradas.

### Cenário 1 — Login com senha anteriormente rejeitada indevidamente

**Passos:** utilizar um usuário que apresentava problema antes da correção.

**Resultado esperado:** autenticação realizada com sucesso.

**Justificativa:** verifica diretamente se o defeito corrigido realmente deixou de ocorrer.

---

### Cenário 2 — Login com senha inválida

**Passos:** informar senha incorreta.

**Resultado esperado:** mensagem de erro apropriada e bloqueio do acesso.

**Justificativa:** após corrigir o login, é importante garantir que a validação de segurança continua funcionando.

---

### Cenário 3 — Exibição de saldo com centavos

**Passos:** acessar uma conta com saldo de **R$ 1.500,75**.

**Resultado esperado:** valor exibido exatamente como **R$ 1.500,75**.

**Justificativa:** o ajuste de exibição pode impactar formatação numérica e arredondamento.

---

### Cenário 4 — Atualização do saldo após nova movimentação

**Passos:** realizar uma transferência e retornar à tela inicial.

**Resultado esperado:** saldo atualizado imediatamente.

**Justificativa:** garante que o ajuste não apenas exibe o saldo, mas também reflete movimentações recentes.

---

### Cenário 5 — Exibição de saldo zerado

**Passos:** acessar uma conta sem saldo disponível.

**Resultado esperado:** exibição correta de **R$ 0,00**.

**Justificativa:** valores limite frequentemente apresentam falhas de formatação ou ocultação indevida.

---

# 3. Testes de Regressão

**Objetivo:** assegurar que alterações no login e no saldo não afetaram funcionalidades já existentes.

### Cenário 1 — Transferência entre contas

**Passos:** realizar login, efetuar uma transferência e confirmar a operação.

**Resultado esperado:** transferência concluída e saldo atualizado corretamente.

**Justificativa:** operações financeiras dependem da autenticação e do cálculo correto do saldo; podem ser impactadas indiretamente.

---

### Cenário 2 — Pagamento de boleto

**Passos:** acessar **Pagamentos**, informar o código de barras e confirmar.

**Resultado esperado:** pagamento processado com sucesso.

**Justificativa:** garante que fluxos críticos do sistema bancário continuam funcionando após a atualização.

---

### Cenário 3 — Consulta de extrato

**Passos:** acessar o extrato da conta.

**Resultado esperado:** movimentações exibidas corretamente.

**Justificativa:** o saldo apresentado na tela inicial deve permanecer consistente com os lançamentos do extrato.

---

### Cenário 4 — Alteração de senha

**Passos:** acessar as configurações, alterar a senha e realizar um novo login.

**Resultado esperado:** nova senha aceita e senha antiga rejeitada.

**Justificativa:** mudanças no mecanismo de login podem afetar funcionalidades relacionadas à autenticação.

---

### Cenário 5 — Sessão expirada por inatividade

**Passos:** permanecer sem interação até o tempo limite da sessão.

**Resultado esperado:** sistema solicita novo login.

**Justificativa:** valida que os controles de sessão e segurança continuam íntegros após as alterações implementadas.

---

# Resumo Comparativo

| Tipo de teste | Foco | Exemplos |
|----------------|------|----------|
| **Smoke** | Verificar se o sistema está utilizável | Login, home, saldo, extrato e logout |
| **Sanidade** | Validar especificamente o que foi corrigido | Correção do login e ajuste do saldo |
| **Regressão** | Garantir que nada foi quebrado | Transferência, boleto, extrato, alteração de senha e expiração de sessão |

---

# Conclusão

Os cenários propostos cobrem três níveis complementares de validação:

- **Smoke:** confirma rapidamente que o sistema bancário está operacional após a implantação.
- **Sanidade:** verifica se as correções implementadas (login e saldo) funcionam conforme esperado.
- **Regressão:** assegura que funcionalidades importantes já existentes não sofreram impactos colaterais.

Essa combinação é adequada para um ambiente bancário, onde autenticação, exibição correta de saldo e integridade das operações financeiras são funcionalidades críticas para o negócio e para a segurança dos clientes.
