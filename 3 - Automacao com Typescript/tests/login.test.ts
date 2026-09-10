//Imporntando dependeccias
import{test, expect, vi} from "vitest";
//simulando login lento
function loginlento (usuario:string):Promise<string> {
    return new Promise((resolve)=>{
    setTimeout(() => {
        resolve(`BEM-VINDO, ${usuario}!`);
    },5000);
    })
}
    test('Simular login usando fake timers',async ()=>{
        //ligando a maquina do tempo
        vi.useFakeTimers();
        console.log(`⌛INICIANDO CENÁRIO DE TESTE`);
        
        //Chamando promise de usuario sem await ainda
        const promessalogin = loginlento ("Dona Zeza")

        //Configura avanço de 5 segundos
        vi.advanceTimersByTime(5000); 
const resultado = await promessalogin;
        //Verificar resultado
        expect(resultado).toBe("BEM-VINDO, Dona Zeza!")
        console.log(" sucesso! Teste realizado na velocidade da luz💡")

        //Desligando a maquina do tempo
        vi.useRealTimers();
    })

