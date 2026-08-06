# Atividade Avaliativa: Testes em Sistema Bancário

**Objetivo:** Elaborar e diferenciar casos de teste de **Sistema** e de **Aceitação** aplicados a operações bancárias essenciais, justificando a escolha das estratégias de **Smoke**, **Sanidade** e **Regressão**.

---

## 📌 Cenário
Um sistema bancário digital permite que os usuários realizem **login**, acessem a **visão geral da conta** e consultem o **saldo atualizado em tempo real**. Uma nova atualização foi implantada para melhorar a velocidade de carregamento do saldo.

---

## 📋 Tarefas a Realizar

### Parte 1: Análise Estratégica (Resposta Curta)
1. Para validar essa atualização, em qual ordem você executaria os testes de **Smoke**, **Sanidade** e **Regressão**? Justifique em 1 frase para cada tipo.
2. Explique brevemente a diferença do objetivo de um **Teste de Sistema** vs. **Teste de Aceitação (UAT)** ao validar a funcionalidade de exibição do saldo.

---

### Parte 2: Criação dos Casos de Teste
Preencha a estrutura abaixo para **2 casos de teste**:
* **CT 1 (Teste de Sistema):** Validação técnica das regras de negócio do login/saldo.
* **CT 2 (Teste de Aceitação):** Validação da experiência do cliente final ao acessar o saldo.

---

## 🛠️ Modelo Padronizado de Caso de Teste

| Campo | Preenchimento |
| :--- | :--- |
| **ID e Título** | *Ex: CT-01 - Validação do cálculo de saldo acumulado* |
| **Tipo de Teste** | *Ex: Sistema (Sanidade)* |
| **Pré-condições** | *Estado necessário da conta/usuário antes do teste* |
| **Passos de Execução** | 1. ... <br> 2. ... <br> 3. ... |
| **Resultado Esperado** | *Comportamento exato do sistema ou interface* |
| **Justificativa Técnica** | *Por que este teste se enquadra nessa categoria e tipo?* |

---

## 📊 Critérios de Avaliação
* **Precisão Técnica (40%):** Passos claros, sem ambiguidade, focados no domínio bancário.
* **Enquadramento de Tipos (30%):** Distinção correta entre os níveis e estratégias de teste.
* **Justificativa Coerente (30%):** Argumentação técnica embasada na garantia de qualidade e valor ao usuário.