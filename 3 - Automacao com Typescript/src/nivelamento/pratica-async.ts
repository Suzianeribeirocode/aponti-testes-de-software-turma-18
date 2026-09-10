//Importando nossa função utilitaria de aguardar tempo(Delay)
import { aguardar } from "../../utils/Helpers"; 

function simularlogin (usuario:string, senha:string):Promise<string>{
    return new Promise((resolve,reject)=>{
        if(usuario === 'admin' && senha == '123456'){
            resolve('token-secreto-aprovado');
        } else{
            reject('ERRO 401 - USUARIO OU SENHA INVÁLIDOS! ❌');

        }
    })
}
//FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT ;-D
async function executarCT(){
    console.log('⌛ INICIANDO CENÁRIO DE TESTE')
    try{
        console.log('Passo 1 abrindo tela de login')
    await aguardar(2000);
    console.log('Passo2: Inserindo credenciais...')
    await aguardar(300);
    
    const token = await simularlogin('admin','123456');
     console.log(`SUCESSO! USUARIO LOGADO TOKEN RECEBBIDO: ${token}`)
    } catch(erro) {
        console.error(`FALHA NO TESTE: ${erro}`);
    } finally {
        console.log(`Passo final: Fechando navegador e limpando dados.`);
    }
}

executarCT();