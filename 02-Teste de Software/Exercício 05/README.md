# Atividade Avaliativa — Análise de Relatório de Teste de Performance

> **Observação:** Como o relatório de teste não foi fornecido, as respostas abaixo consideram um cenário típico em que o sistema apresenta problemas de desempenho.

---

## 1. O sistema pode ser considerado aprovado?

**Resposta:** Não.

**Justificativa:** O sistema não pode ser considerado aprovado quando apresenta tempos de resposta elevados, aumento na taxa de erros ou instabilidade durante o teste. Esses fatores indicam que a aplicação não atende aos requisitos mínimos de desempenho e experiência do usuário.

---

## 2. Quais métricas indicam problemas de performance?

As principais métricas que evidenciam problemas são:

- **Tempo de resposta (Response Time):** elevado ou acima do limite esperado.
- **Taxa de erros (Error Rate):** presença de requisições com falha (4xx, 5xx ou timeouts).
- **Throughput:** quantidade de requisições processadas menor que o esperado.
- **Tempo de resposta máximo (Max Response Time):** muito superior à média, indicando lentidão em alguns momentos.
- **Uso de CPU:** utilização próxima de 100%, indicando sobrecarga do servidor.
- **Uso de memória (RAM):** consumo excessivo ou crescimento contínuo, podendo indicar vazamento de memória.
- **Tempo de resposta nos percentis (P95/P99):** usuários experimentando tempos de resposta muito altos.

---

## 3. Quais possíveis gargalos podem existir?

Os gargalos podem estar relacionados a:

- Consultas lentas ao banco de dados.
- Falta de índices nas tabelas.
- Recursos insuficientes de CPU ou memória.
- Alto número de acessos simultâneos.
- Problemas de rede ou alta latência.
- Código da aplicação pouco otimizado.
- Chamadas excessivas para APIs ou serviços externos.
- Configuração inadequada do servidor ou do banco de dados.

---

## 4. Esse cenário se aproxima mais de Carga, Stress ou Capacidade?

**Resposta:** Teste de **Carga**.

**Justificativa:** O objetivo é avaliar o comportamento do sistema sob uma quantidade esperada de usuários ou requisições, verificando se ele mantém desempenho adequado durante o uso normal.

> Caso o relatório mostrasse falhas ao ultrapassar o limite esperado de usuários, seria um **Teste de Stress**. Se o objetivo fosse descobrir o número máximo de usuários suportados, seria um **Teste de Capacidade**.

---

## 5. O que você recomendaria ao time técnico?

As principais recomendações são:

- Otimizar consultas ao banco de dados.
- Revisar e otimizar trechos de código com maior tempo de execução.
- Implementar cache para reduzir consultas repetitivas.
- Monitorar continuamente CPU, memória, disco e rede.
- Ajustar a infraestrutura (escalabilidade vertical ou horizontal).
- Configurar balanceamento de carga, se necessário.
- Corrigir erros identificados durante o teste.
- Executar novos testes de performance após cada otimização para validar as melhorias.

---

# Conclusão

Com base na análise, o sistema **não seria considerado aprovado** caso apresente alta latência, erros frequentes e queda de desempenho sob carga. As métricas de tempo de resposta, throughput, taxa de erros e consumo de recursos são fundamentais para identificar gargalos e direcionar as otimizações. Nesse cenário, o teste se caracteriza principalmente como um **Teste de Carga**, e recomenda-se ao time técnico realizar otimizações na aplicação, banco de dados e infraestrutura antes de uma nova validação.