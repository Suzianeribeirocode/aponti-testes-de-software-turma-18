# 📋 Checklist de Testes Não Funcionais — Plataforma PACO

**Aplicação:** Plataforma de Agendamento de Consultas Online (PACO)  
**Público-alvo:** Pacientes, Médicos e Administradores  
**Documento:** Checklist de Qualidade Não Funcional  

---

## ⚡ 1. Performance
> **Objetivo:** Garantir que o sistema responda rapidamente aos usuários e suporte picos de acesso sem indisponibilidade.

| ID | Item / Categoria | O que será verificado (Cenário de Teste) | Risco Associado |
| :--- | :--- | :--- | :--- |
| **PERF-01** | **Tempo de Resposta em Agendamento** | Verificar se a confirmação do agendamento de consulta é concluída em no máximo **2 segundos** em condições normais de uso. | **Médio / Alto:** Abandono do agendamento pelo paciente por conta de lentidão da plataforma ou incerteza se a requisição foi processada. |
| **PERF-02** | **Teste de Carga (Pico de Acesso)** | Simular o acesso simultâneo de múltiplos usuários (ex: 500 pacientes buscando/agendando no início do dia ou na liberação de novas agendas). | **Alto / Crítico:** Queda total do sistema (*Downtime*), indisponibilidade e impossibilidade de realizar novos agendamentos. |
| **PERF-03** | **Desempenho com Grande Volume de Dados** | Verificar o tempo de carregamento da tela de histórico do paciente e relatório da agenda médica com mais de 10.000 registros armazenados na base. | **Médio:** Indisponibilidade, travamento ou lentidão excessiva no painel administrativo do médico durante a rotina de atendimento. |

---

## 🛡️ 2. Segurança
> **Objetivo:** Proteger os dados sensíveis dos pacientes e garantir que as permissões de acesso sejam respeitadas em conformidade com as leis de proteção de dados (LGPD).

| ID | Item / Categoria | O que será verificado (Cenário de Teste) | Risco Associado |
| :--- | :--- | :--- | :--- |
| **SEG-01** | **Controle de Acesso e Permissões (IDOR)** | Validar se um paciente comum consegue acessar dados de outros pacientes ou painéis administrativos alterando parâmetros da URL (*Broken Access Control*). | **Crítico:** Vazamento ilícito de dados sensíveis de saúde (prontuários e agendamentos) e descumprimento das diretrizes da LGPD. |
| **SEG-02** | **Criptografia de Dados e Transmissão** | Verificar se toda a comunicação trafega via HTTPS (TLS/SSL) e se senhas e dados confidenciais do paciente estão criptografados no banco de dados. | **Alto:** Interceptação de dados confidenciais por terceiros em redes abertas ou públicas (*Man-in-the-middle*). |
| **SEG-03** | **Proteção contra Injeção de Código (SQLi / XSS)** | Injetar scripts maliciosos nos campos de busca de médicos, cadastro de usuário e observações do agendamento para testar a sanitização de entradas. | **Alto:** Invasão da base de dados, roubo de dados sensíveis ou execução de scripts maliciosos no navegador dos administradores. |

---

## 👤 3. Usabilidade
> **Objetivo:** Garantir que a plataforma seja simples, intuitiva e acessível para todos os perfis de usuários (pacientes, médicos e administradores).

| ID | Item / Categoria | O que será verificado (Cenário de Teste) | Risco Associado |
| :--- | :--- | :--- | :--- |
| **USA-01** | **Facilidade no Agendamento (Nº de Passos)** | Verificar se um paciente consegue concluir o agendamento de uma consulta em no máximo **3 a 4 passos simples** e intuitivos. | **Médio:** Desistência do uso da plataforma por complexidade excessiva, sobrecarregando o atendimento telefônico da clínica. |
| **USA-02** | **Acessibilidade Digital (WCAG)** | Avaliar contraste de cores, navegação por teclado e compatibilidade com leitores de tela para usuários idosos ou com limitação visual/motora. | **Alto:** Exclusão de idosos ou PWDs, impedindo que realizem o agendamento de consultas de forma autônoma. |
| **USA-03** | **Clareza nas Mensagens de Feedback** | Validar se mensagens de erro (ex: *"Horário não mais disponível"*) e de sucesso (ex: *"Consulta agendada para 14/10 às 14h"*) são claras e orientam o usuário. | **Médio:** Confusão do paciente sobre se a consulta foi efetivamente reservada ou não, gerando duplicidade de reservas. |

---

## 🌐 4. Compatibilidade
> **Objetivo:** Assegurar que a plataforma funcione de forma fluida e sem quebras visuais em diferentes dispositivos, sistemas e navegadores.

| ID | Item / Categoria | O que será verificado (Cenário de Teste) | Risco Associado |
| :--- | :--- | :--- | :--- |
| **COMP-01** | **Responsividade em Dispositivos Móveis** | Verificar o layout e a usabilidade em telas de Smartphones (iOS e Android) e Tablets em relação a monitores Desktop. | **Alto:** Perda de grande parcela de usuários que tentam realizar agendamentos diretamente pelo celular e encontram botões fora de tela. |
| **COMP-02** | **Multi-navegadores (Cross-Browser)** | Validar o correto funcionamento das telas, calendários e botões nos principais navegadores do mercado (Google Chrome, Safari, Firefox, Edge). | **Médio:** Falha visual ou quebra de componentes interativos de agendamento em navegadores específicos. |
| **COMP-03** | **Suporte a Diferentes Sistemas Operacionais** | Verificar a estabilidade de navegação e autenticação nos sistemas operacionais Android, iOS, Windows e macOS. | **Baixo / Médio:** Incompatibilidade de componentes do sistema em sistemas operacionais específicos. |