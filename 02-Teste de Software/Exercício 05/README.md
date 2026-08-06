# Respostas Testes de Performance

## 1. O sistema pode ser considerado aprovado?

Depende dos resultados apresentados no relatório. Se os tempos de resposta estiverem dentro do esperado, a taxa de erros for baixa ou inexistente e o sistema permanecer estável durante o teste, ele pode ser considerado aprovado. Caso contrário, não.

---

## 2. Quais métricas indicam problemas de performance?

As principais métricas são:

- Tempo de resposta elevado.
- Alta taxa de erros (timeouts ou falhas nas requisições).
- Throughput abaixo do esperado.
- Alto consumo de CPU e memória.
- Tempo de resposta elevado nos percentis (P95 e P99).

---

## 3. Quais possíveis gargalos podem existir?

Possíveis gargalos incluem:

- Consultas lentas ao banco de dados.
- Código da aplicação pouco otimizado.
- Servidor com poucos recursos (CPU ou memória).
- Problemas de rede.
- Excesso de usuários simultâneos.
- Chamadas lentas para APIs ou serviços externos.

---

## 4. Esse cenário se aproxima mais de Carga, Stress ou Capacidade?

Se o sistema foi avaliado com a quantidade de usuários prevista para uso normal, trata-se de um **Teste de Carga**.

Caso o objetivo fosse ultrapassar os limites do sistema até ocorrer falha, seria um **Teste de Stress**. Se a finalidade fosse descobrir o número máximo de usuários suportados, seria um **Teste de Capacidade**.

---

## 5. O que você recomendaria ao time técnico?

Recomendaria:

- Otimizar consultas ao banco de dados.
- Melhorar o desempenho do código da aplicação.
- Monitorar CPU, memória e rede.
- Utilizar cache quando possível.
- Ajustar a infraestrutura para suportar maior carga.
- Executar novos testes após as melhorias para validar os resultados.
