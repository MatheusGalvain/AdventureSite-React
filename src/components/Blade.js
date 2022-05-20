import React from 'react';
import './Blade.css'
import Img1 from '../images/indonesia.jpg'
import Img2 from '../images/fernandoNoronha.jpg'
import Img3 from '../images/peru.jpg'
import Img4 from '../images/jordania.jpg'
import Img5 from '../images/veneza-destaque.jpg'



function Blade() {

    return (
        <div classNameName="card bg-dark text-white">
            <div className="card-img-overlay">
                <h1 className="card-title-main">Top destinos mais procurados</h1>
                <p className="card-text">Na tentativa de descobrir alguns dos melhores desses destinos, a Kuoni, empresa britânica de viagens de luxo, conduziu recentemente um estudo com mais de 50 das maravilhas naturais mais famosas do mundo – usando uma tecnologia única de inteligência artificial com rastreamento ocular, para descobrir quais marcos naturais o olho humano é mais atraído. Confira o resultado, dos 5 lugares mais lindos do mundo, na galeria de fotos a seguir:
                </p>
                {/* Indonesia */}
                <h1 className="card-title">1° - Indonésia</h1>
                <img className='main' alt= "img" src={Img1}></img>
                <p className='card-text'> Na Indonésia, turismo é o carro-chefe. Afinal, estamos falando de um país que tem mais de 17 mil ilhas e ilhotas com praias paradisíacas, boa gastronomia e muita cultura.
                    Paraíso dos surfistas e famoso pela espiritualidade, o país oferece ao visitante a possibilidade de viver experiências diferentes de tudo o que você imagina.
                    Criamos uma lista com os principais atrativos deste país incrível do sudeste asiático, para que você possa começar a planejar uma viagem inesquecível agora mesmo. Veja só:
                </p>
                {/* Titulo do roteiro */}
                <h3 className='card_title'>Nosso roteiro favorito é:</h3>
                {/* Lista de Roteiros */}
                <li className='li__card__text'> Cidade de Ubud (Bali);</li>
                <li className='li__card__text'> Cidade de Seminyak (Bali) com bate-volta para as praias de cidades próximas;</li>
                <li className='li__card__text'> Ilha de Gili Trawangan;</li>

                {/* Lista de comidas */}
                <h3 className='card_title'>Aqui separamos uma variedades de comidas que existe na indónesia:</h3>


                {/* Comida n°1 */}
                <div className='card_blade'>
                    <img className='card-img' alt="" src={require('../foodsIndesia/miejawa.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Mie Jawa:
                        </span>
                        <span className='card_blade_text'> O prato consiste em mangas quase maduras cortadas em tirinhas finas cobertas com samba O prato consiste em mangas quase maduras cortadas em tirinhas finas cobertas com samba</span>
                    </div>
                </div>
                {/* Comida n°2 */}
                <div className='card_blade'>
                    <img className='card-img' alt="" src={require('../foodsIndesia/sambalmangga.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Urab Sayur:
                        </span>
                        <span className='card_blade_text'> Urab Sayur é uma salada típica de Bali feita com vegetais cozidos.</span>
                    </div>
                </div>
                {/* Comida n°3 */}
                <div className='card_blade'>
                    <img className='card-img' alt='img' src={require('../foodsIndesia/Urab Sayur.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Samba Immanga:
                        </span>
                        <span className='card_blade_text'> Seu prato consiste em mangas quase maduras cortadas em tirinhas finas cobertas com sambal</span>
                    </div>
                </div>


                {/* Fernando de noronha */}
                <h1 className="card-title">2° - Fernando de noronha</h1>
                <img className='main' alt= 'img' src={Img2}></img>
                <p className='card-text'> Há muito o que fazer em Fernando de Noronha! O mar cristalino é uma das atrações favoritas — isso porque ele tem um tom de azul surpreendente e muitas belezas naturais em seu entorno. Inclusive, os turistas precisam se adaptar às regras ambientais de Noronha, pois o destino é focado na preservação da natureza.
                    Se o seu sonho é viajar para Fernando de Noronha, chegou a hora de conhecer todas as informações a respeito desse belíssimo arquipélago brasileiro. Continue a leitura do conteúdo para saber o que fazer e como aproveitar Noronha da melhor forma. Se preferir, navegue pelo índice abaixo para chegar ao tópico do seu interesse. Não perca tempo: “noronhe-se”!
                </p>
                {/* Titulo do roteiro */}
                <h3 className='card_title'>Nosso roteiro favorito é:</h3>
                {/* Lista de Roteiros */}
                <li className='li__card__text'> Vila dos Remédios;</li>
                <li className='li__card__text'> Baía do Sancho e Baía dos Porcos;</li>
                <li className='li__card__text'> Praia do Meio;</li>

                {/* Lista de comidas */}
                <h3 className='card_title'>Aqui separamos uma variedades de comidas que existe na indónesia:</h3>


                {/* Comida n°1 */}
                <div className='card_blade'>
                    <img className='card-img' alt="" src={require('../foodsIndesia/Moqueca.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Moqueca:
                        </span>
                        <span className='card_blade_text'> A moqueca baiana é feita com pimentão, leite de coco e dendê, enquanto a moqueca capixaba utiliza óleo de urucum (que dá a cor avermelhada) ao invés de dendê, além de ser menos apimentada.</span>
                    </div>
                </div>
                {/* Comida n°2 */}
                <div className='card_blade'>
                    <img className='card-img' alt="" src={require('../foodsIndesia/Acaraje.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Acaraje:
                        </span>
                        <span className='card_blade_text'> Trata-se de um bolinho feito com feijão fradinho, frito no azeite de dendê e recheado com camarão, vatapá (feito com camarão seco, leite de coco, amendoim e azeite de dendê), caruru (cozido de quiabo que também leva camarão) e molho de pimenta.</span>
                    </div>
                </div>
                {/* Comida n°3 */}
                <div className='card_blade'>
                    <img className='card-img' alt='img' src={require('../foodsIndesia/ArrozDeCuxa.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Arroz de Cuxá:
                        </span>
                        <span className='card_blade_text'> Trata-se de um arroz branco acompanhado de um molho conhecido como cuxá na culinária local, feito com vinagreira, gergelim, camarão seco, farinha de mandioca seca – base da alimentação do índio – e pimenta-de-cheiro.</span>
                    </div>
                </div>


                {/* Peru */}
                <h1 className="card-title">3° - Peru</h1>
                <img className='main' alt='' src={Img3}></img>
                <p className='card-text'> O Peru é um país diversificado e todos podem apreciar suas manifestações culturais expressadas em seu folclore, gastronomia, costumes e tradições conservadas até os dias de hoje. Aqui, com certeza, você encontrará opções de atividades perfeitas para você, independente do seu estilo e objetivo.
                </p>
                {/* Titulo do roteiro */}
                <h3 className='card_title'>Nosso roteiro favorito é:</h3>
                {/* Lista de Roteiros */}
                <li className='li__card__text'> Macchu Picchu;</li>
                <li className='li__card__text'> Cusco;</li>
                <li className='li__card__text'> Lima;</li>

                {/* Lista de comidas */}
                <h3 className='card_title'>Aqui separamos uma variedades de comidas que existe na indónesia:</h3>


                {/* Comida n°1 */}
                <div className='card_blade'>
                    <img className='card-img' alt="" src={require('../foodsIndesia/Ceviche.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Ceviche:
                        </span>
                        <span className='card_blade_text'> Ele é feito com pedaços de filé de peixe marinados em uma mistura de limão, cebola roxa, sal, alho e pimenta e conquistou o status de patrimônio cultural no país.</span>
                    </div>
                </div>
                {/* Comida n°2 */}
                <div className='card_blade'>
                    <img className='card-img' alt="" src={require('../foodsIndesia/Arroz com mariscos.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Arroz com mariscos:
                        </span>
                        <span className='card_blade_text'> A receita se assemelha com um risoto e é preparado com mexilhões, camarões e vários outros frutos do mar, além de pimenta e outros temperos locais.</span>
                    </div>
                </div>
                {/* Comida n°3 */}
                <div className='card_blade'>
                    <img className='card-img' alt='' src={require('../foodsIndesia/rocoto-relleno.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Rocoto Relleno:
                        </span>
                        <span className='card_blade_text'> “Rocoto” é uma variedade de pimenta muito comum nos Andes e é a grande estrela dessa receita. Na prática, o Rocoto Relleno é essa pimenta que lembra um pouco o formato de um tomate e pode ser recheada com frango, carne, queijo ou outros legumes.</span>
                    </div>
                </div>

                {/* Jordânia */}
                <h1 className="card-title">4° - Jordânia</h1>
                <img className='main' alt='' src={Img4}></img>
                <p className='card-text'> A Jordânia é uma das civilizações mais antigas do mundo, um oásis repleto de beleza e energia contagiante. O país é conhecido pelas suas cidades perdidas e de aventuras épicas narradas pela literatura mundial. É um destino que deve ser visitado ao menos uma vez na vida. Apesar de receber turistas de todo mundo, ainda é pouco visitada por brasileiros.
                    Por isso, se você deseja conhecer o sudeste asiático e o país mais seguro da região, veja este guia completo sobre a Jordânia!
                </p>
                {/* Titulo do roteiro */}
                <h3 className='card_title'>Nosso roteiro favorito é:</h3>
                {/* Lista de Roteiros */}
                <li className='li__card__text'> Petra;</li>
                <li className='li__card__text'> Aqaba (Mar Vermelho);</li>
                <li className='li__card__text'> Mar Morto;</li>

                {/* Lista de comidas */}
                <h3 className='card_title'>Aqui separamos uma variedades de comidas que existe na indónesia:</h3>


                {/* Comida n°1 */}
                <div className='card_blade'>
                    <img className='card-img' alt=" " src={require('../foodsIndesia/Kebab.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Kebab:
                        </span>
                        <span className='card_blade_text'> O Kebab, é um prato muito típico e comum de se encontrar nos restaurantes pela cidade, ele é normalmente servido com carne de boi, cordeiro ou frango, em espeto.</span>
                    </div>
                </div>
                {/* Comida n°2 */}
                <div className='card_blade'>
                    <img className='card-img' alt=" " src={require('../foodsIndesia/kafta.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Kafta:
                        </span>
                        <span className='card_blade_text'> A Kafta também é muito tradicional, e é basicamente feita de carne moída em forma de almôndegas.</span>
                    </div>
                </div>
                {/* Comida n°3 */}
                <div className='card_blade'>
                    <img className='card-img' alt='' src={require('../foodsIndesia/Mansaf.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Mansaf:
                        </span>
                        <span className='card_blade_text'> Mansaf, prato nacional do país, é feito de carne de cordeiro cozida em molho de iogurte fermentado seco e ele é comumente servido com arroz ou triguilho.</span>
                    </div>
                </div>

                {/* Veneza */}
                <h1 className="card-title">5 ° - Veneza</h1>
                <img className='main' alt='' src={Img5}></img>
                <p className='card-text'> Veneza é um conjunto de 120 ilhas unidas através de pontes. De Mestre é possível chegar a Veneza usando a Ponte da Liberdade, que leva até a Piazzale Roma. Na primavera e outono o nível da água costuma subir, por isso é frequente que a Piazza San Marco se inunde até o ponto de que as autoridades tenham que colocar passarelas para que os pedestres possam caminhar.
                    Se tivéssemos que dar um só, seria que é uma cidade única no mundo e completamente diferente do resto, um lugar com um espírito único que faz com que todo mundo se apaixone por ela.
                </p>
                {/* Titulo do roteiro */}
                <h3 className='card_title'>Nosso roteiro favorito é:</h3>
                {/* Lista de Roteiros */}
                <li className='li__card__text'> Roma;</li>
                <li className='li__card__text'> Florença;</li>
                <li className='li__card__text'> Milão;</li>

                {/* Lista de comidas */}
                <h3 className='card_title'>Aqui separamos uma variedades de comidas que existe na indónesia:</h3>


                {/* Comida n°1 */}
                <div className='card_blade'>
                    <img className='card-img' alt=" " src={require('../foodsIndesia/nero-seppie-prato-típico-italiano.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Nero Seppie:
                        </span>
                        <span className='card_blade_text'> O nero di seppia geralmente acompanha spaghetti e em alguns restaurantes é servido com polenta, minha versão preferida.</span>
                    </div>
                </div>
                {/* Comida n°2 */}
                <div className='card_blade'>
                    <img className='card-img' alt=" " src={require('../foodsIndesia/fegato-alla-veneziana.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Fegato Alla Veneziana:
                        </span>
                        <span className='card_blade_text'> Mais simples impossível, o prato é realizado com somente dois ingredientes: fígado (geralmente de vitela) e cebolas, que dão o equilíbrio entre doce e salgado.</span>
                    </div>
                </div>
                {/* Comida n°3 */}
                <div className='card_blade'>
                    <img className='card-img' alt='' src={require('../foodsIndesia/polenta-con-schie-prato-típico-veneza.jpg')} />
                    <div className='food_wrapper'>
                        <span className='span_food'>
                            | Polenta con Schie:
                        </span>
                        <span className='card_blade_text'> Uma polentinha bem mole coberta com schie, um minúsculo camarão proveniente da laguna de Veneza.</span>
                    </div>
                </div>

               

            </div>
        </div>
    );
}



export default Blade;