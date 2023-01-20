import React from "react";
import Menu from '../../components/Menu'
import './style.css'
import SearchImg from '../../imgs/search.svg';

function Home() {
    return (
        <>
            <Menu />
            <h1>
                Interações Medicamentosas
            </h1>

            <div className="search">
                <img src={SearchImg} />
                <input type="text" name="search" placeholder="Pesquise o medicamento aqui" />
            </div>

            <div className="availableMedications">
                <h2>
                    Medicamentos disponíveis na Farmácia Universitária
                </h2>

                <h3>
                    Cápsulas e Pós
                </h3>
                <ul>
                    <li>
                        Alendronato de sódio 70 mg (4 caps)
                    </li>
                    <li>
                        Atorvastatina 10 mg, 20 mg, 40 mg (30 caps)
                    </li>
                    <li>
                        Bicarbonato de sódio 600 mg (30 caps)
                    </li>
                    <li>
                        Biotina 5 mg, 10 mg (30 caps)
                    </li>
                    <li>
                        Carbonato de cálcio (150 g e 300 g)
                    </li>
                    <li>
                        Citrato de potássio 10 mEq (60 caps)
                    </li>
                    <li>
                        Colágeno UC II® 40 mg (30 caps)
                    </li>
                    <li>
                        Condroitina 400 mg, 600 mg (60 caps)
                    </li>
                    <li>
                        Diacereína 50 mg (30 caps)
                    </li>
                    <li>
                        Fosfato de sódio dibásico 220 mg/ fosfato de sódio monobásico 30 mg (60 caps)
                    </li>
                    <li>
                        Fosfato de sódio dibásico 412,5 mg/ fosfato de sódio monobásico 65 mg/ fosfato de
                        potássio monobásico 77,5 mg (60 caps)
                    </li>
                    <li>
                        Glucosamina 500 mg, 750 mg (60 caps)
                    </li>
                    <li>
                        Hidroxicloroquina 200 mg, 400 mg (30 caps)
                    </li>
                    <li>
                        Neomicina 250 mg (50 caps)
                    </li>
                    <li>
                        PEG 4000 (150 g e 300 g)
                    </li>
                    <li>
                        Risedronato de sódio 35 mg (4 caps), 150 mg (1 caps)
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Home;