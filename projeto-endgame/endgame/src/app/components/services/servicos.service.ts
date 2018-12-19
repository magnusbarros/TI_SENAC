import {servico} from '../models/produto.model'


export class ServicoService{
    public servicos: servico[] = 
[
    {
        
        nome: 'fazedor de sexo anal',
        descricao: 'Pistola Airsoft Taurus PT92 - Polímero/Metal. Pistola confeccionada com materiais com extrema durabilidade. Slide em metal, corpo e empunhadura em polímero de alta resistência, assim como magazine ...',
     
    },

    {
    
        nome: 'Pistola Airsoft Glock G7 Kwc Spring Gun',
        descricao: 'Pistola Airsoft Glock G7 Kwc Intermediate Spring Gun - 6 Mm Pistola Airsoft Fabricada Em Polímero De Alta Densidade, Calibre 6Mm Com Propulsão Por Mola (Springer). Produzida Pela Kwc, Arma Curta, ...',
       
    },
    {
 
        nome: 'Pistola De Airsoft Co2 Cybergun Colt M1911 Gnb',
        descricao: 'Pistola De Airsoft Co2 Cybergun Colt M1911 Gnb - Preta O Modelo Colt M1911 Da Cybergun É Um Dos Seus Principais Exemplares De Réplicas De Armas Utilizadas Por Forças Armadas.',
      
    },
    {
  
        nome: 'Revólver Airsoft Armais Spring UHC UA-938B ',
        descricao: 'Revólver Airsoft Spring UHC UA-938B. O Revólver modelo UA-938B tem ação Spring (por mola) e é confeccionado inteiramente em polímero. Seu desempenho em velocidade é de até 130fps',
       
    },
    {
  
    nome: 'Revólver Airsoft Armais Spring UHC UA-931B ',
        descricao: 'O Revólver modelo UA-931B tem ação Spring (por mola) e é confeccionado inteiramente em polímero. Seu desempenho em velocidade é de até 120fps',

    },
    {
   
        nome: 'Pistola Airsoft Spring KWC Beretta M92',
        descricao: 'Pistola com ação por mola Spring confeccionada em polímero, baseada no modelo Beretta. Seu design e acabamento impecável faz dela uma airsoft diferenciada e com custo benefício',
    },
    {
    
    nome: 'Pistola Airsoft CO2 Taurus PT 24/7 Semi-metal',
    descricao: 'Calibre: 6mm. - Marca: Taurus. - Ação: Gás CO2. - Modelo: PT 24/7. - Material: Semi-metal. - Energia em Joules: 0.9 J. - Produzida pela Cybergun.',
    
    },
    {
    
        nome: 'Pistola De Airsoft Spring Cybergun Sig Sauer Sp2022',
        descricao: 'Pistola De Airsoft Spring Cybergun Sig Sauer Sp2022 - Half Metal A Pistola De Airsoft, Cybergun Sig Sauer Sp2022 É Um Dos Melhores Exemplares De Pistolas Spring Disponíveis Hoje No Cenário Nacional.',
        
    },
    {
    
        nome: 'Pistola Airsoft Cyma Elétrica Glock G18C CM030 Semi-Metal',
        descricao: 'A Pistola Airsoft Elétrica Cyma Glock G18C CM030 Semi-Metal Bivolt tem seu corpo confeccionado em polímero de alta densidade sendo apenas em metal CANO, GEARBOX e o MAGAZINE.',
       
    },
    {
    
        nome: 'Pistola Airsoft CO2 Taurus PT99 Full Metal',
        descricao: 'Seu funcionamento é através de gás CO2 e utiliza como munição Esferas plásticas: BBS. É denominada Full Metal por possuir a maior parte do corpo confeccionado em metal. Possui o sistema Blow Back onde o slide no momento do disparo imita o movimento da ação da saída de um projétil, ou seja, ele vai para frente e para trás.',
        
    }
]

    public getservicos(): Array<servico>{
        return this.servicos
    }
    public getServicoPorId(id: number):
    servico{
        let servicosinternos: servico[]
            servicosinternos = this.getservicos()
                return servicosinternos[id -1]
    }
    public getServicosPromise(): Promise<servico[]>{
        return new Promise((resolve, reject) =>{
            let works = true

            if(works){
                resolve(this.servicos)
            }else{
                reject({error_type: 'serviço falso', message: 'erro: serviço inexistente'})
            }
        })
    }
}