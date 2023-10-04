import './style.css'

export default function Contato(){
    return(
        <div style={{display:'flex', flexWrap:'wrap', backgroundColor:'grey', padding:25, justifyContent:'center', alignItems:'center'}}>
            <div style={{width:'40%'}}>
                <img src='https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_g.jpg'/>
            </div>
            <div className ='dados'>
                <h2>Faculdade de Tecnologia de Franca - Fatec Franca</h2><br/>
                <h4>CNPJ/MF: 62.823.257/0109-10</h4><br/>
                <h4>Rua Irênio Grecco nº4580 <br/>
                Vila Imperador<br/>
                Franc/SP<br/>
                14405-191<br/>
                Telefone: (16) 3702-3204<br/>
                Fax: (16) 3702-2584</h4><br/>
                <div style={{padding:10, border:'1px solid white'}}>
                    <h4>E-mail: <span>secretaria@fatecfranca.edu.br</span></h4><br/>
                    <h5>Sempre verifique a pasta de Spam/lixo eletrônico ao buscar respostas de e-mails da Fatec Franca</h5>
                </div><br/>
                <h4>Linha de ônibus urbano</h4><br/>
                <ul>
                    <li><span>J08 (Vl.Imperador)</span> - ponto na R. Irênico Grecco</li>
                    <li><span>C01 (Circular 01), C02 (Circular 02),</span> e <span>LDN (Linha Direta Norte)</span>- ponto na Av. Orlando Dompieri</li>
                    <li><span>J09 (Vl.Imperador via Jd. Planalto)</span> - ponto na R. Realindo Jacinto Mendonça</li>
                </ul>
                
            </div>
        </div>
    )
}