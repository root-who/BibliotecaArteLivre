import "../../assets/css/events/events.css"
import * as React from 'react';


function ListOfEvents(){

    return(
        <>
        <div className="eventPage">
          <div className="barraLateralEsq">
              <a  href="/home" className="barraLateralLink">Exposições</a>
              <a  href="/home" className="barraLateralLink">Teatro</a>
              <a  href="/home" className="barraLateralLink">Cinema</a>
              <a  href="/home" className="barraLateralLink">Festivais</a>
              <a  href="/home" className="barraLateralLink">Conversa com Autores</a>
              <a  href="/home" className="barraLateralLink">Eventos Infantis</a>
              <a  href="/home" className="barraLateralLink">Oficinas</a>
          </div>
          <div className="conteudo__principal">
              <ul className="list__categories">
                <li className="categorie_item">
                  <div className="categorie__container">
                      <h2 className="categorie_title">Exposições</h2>
                      <div className="events__by__categorie">
                      <a className="event__container1" href="/exposicao">
                          <img className="categorie_image1" src="https://cdnstatic8.com/apureguria.com/wp-content/uploads/2019/10/rosto-david-de-michelangelo-florenca.jpg" alt="" />
                          <p className="event_categorie_description">Esculturas</p>
                        </a>
                        <div className="event__container__mosaico">
                          <a className="event__container2" href="/exposicao">
                            <img className="categorie_image4" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1251F/production/_106293057_525769e3-ee92-45f0-8f05-c6d154dcca7b.jpg" alt="" />
                            <p className="event_categorie_description">Artes Nacionais</p>
                          </a>
                          <a className="event__container2" href="/exposicao">
                            <img className="categorie_image4" src="https://aventurasnahistoria.uol.com.br/media/_versions/legacy/2017/04/26/guernica-de-picasso_widelg.png" alt="" />
                              <p className="event_categorie_description">Artes Internacionais</p> 
                          </a>
                          <a className="event__container2" href="/exposicao">
                          <img className="categorie_image4" src="https://www.cachoeiro.es.gov.br/site-pmci/wp-content/uploads/2019/09/museumeupequeno.jpg" alt="" />
                          <p className="event_categorie_description">Obras das Oficinas</p>
                          </a>
                        </div>
                      </div>
                  </div>
                </li>
                <li className="categorie_item">
                  <div className="categorie__container">
                      <h2 className="categorie_title">Teatro</h2>
                      <div className="events__by__categorie">
                            <a className="event__container3" href="/teatro">
                              <img className="categorie_image3" src="https://www.vemcomigoqueteconto.com.br/wp-content/uploads/2018/10/Teatro-Infantil-Em-Campinas-Turma-Da-M%C3%B4nica-E-Hello-Kitty-Capa.jpeg" alt="" />
                              <p className="event_categorie_description">Publico infantil</p>
                            </a>
                            <a className="event__container3" href="/teatro">
                              <img className="categorie_image3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Teatro_Experimental_do_Negro_ensaiando_Sortil%C3%A9gio%2C_com_Abdias_do_Nascimento%2C_com_L%C3%A9a_Garcia.tif/lossy-page1-1200px-Teatro_Experimental_do_Negro_ensaiando_Sortil%C3%A9gio%2C_com_Abdias_do_Nascimento%2C_com_L%C3%A9a_Garcia.tif.jpg" alt="" />
                               <p className="event_categorie_description">Teatro experimental</p> 
                            </a>
                            <a className="event__container3" href="/teatro">
                            <img className="categorie_image3" src="https://umpoucosobrequalquercoisa.files.wordpress.com/2015/08/resumo-biogrc3a1fico-de-william-shakespeare-e-o-menestrel-wagner-moura-em-hamlet.jpg?w=495" alt="" />
                            <p className="event_categorie_description">Peças Clássicas</p>
                            </a>
                      </div>
                  </div>
                </li>
                <li className="categorie_item">
                  <div className="categorie__container">
                      <h2 className="categorie_title">Cinema</h2>
                      <div className="events__by__categorie">
                            <a className="event__container3" href="/cinema">
                              <img className="categorie_image3" src="https://institutodecinema.com.br/img/9-felicidade-Chaplin.jpg" alt="" />
                              <p className="event_categorie_description">Cinema Mudo</p>
                            </a>
                            <a className="event__container3" href="/cinema">
                              <img className="categorie_image3" src="https://rollingstone.uol.com.br/media/_versions/legacy/2012/img-1008545-i007-operacao-skyfalli_widelg.jpg" alt="" />
                               <p className="event_categorie_description">Quartas de aventura</p> 
                            </a>
                            <a className="event__container3" href="/cinema">
                            <img className="categorie_image3" src="https://i1.wp.com/cromossomonerd.com.br/wp-content/uploads/2019/11/scoob-capa.png?fit=1068%2C600&ssl=1" alt="" />
                            <p className="event_categorie_description">Filmes para criançada</p>
                            </a>
                      </div>
                  </div>
                </li>
                <li className="categorie_item">
                  <div className="categorie__container">
                      <h2 className="categorie_title">Festivais</h2>
                      <div className="events__by__categorie">
                            <a className="event__container2" href="/festivais">
                              <img className="categorie_image2" src="https://www.cacadoresdelendas.com.br/japao/wp-content/uploads/2014/04/Kagura__A-antiga-dan%C3%A7a-dos-Deuses-no-Jap%C3%A3o__Kagura-odori-1000x667.jpg" alt="" />
                               <p className="event_categorie_description">Compartilhando culturas</p> 
                            </a>
                            <a className="event__container2" href="/festivais">
                            <img className="categorie_image2" src="http://cultura.am.gov.br/portal/wp-content/uploads/2019/04/ENSAIO-FILARM%C3%94NICA-1024x683.jpg" alt="" />
                            <p className="event_categorie_description">Música para todos</p>
                            </a>
                      </div>
                  </div>
                </li>
                <li className="categorie_item">
                  <div className="categorie__container">
                      <h2 className="categorie_title">Conversa com Autores</h2>
                      <div className="events__by__categorie">
                            <a className="event__container2" href="/conversa-com-autores">
                              <img className="categorie_image2" src="https://www.guarulhos.sp.gov.br/sites/default/files/field/image/Apresenta%2B%C2%BA%2B%C3%BAo%20do%20escritor%20Jonas%20Ribeiro%20Ceu%20Ponte%20Alta%20010_0.JPG" alt="" />
                               <p className="event_categorie_description">Os melhores autores Infantis</p> 
                            </a>
                            <a className="event__container2" href="/conversa-com-autores">
                            <img className="categorie_image2" src="https://www.dm.com.br/wp-content/uploads/2019/05/WhatsApp-Image-2019-05-16-at-12.20.23.jpeg" alt="" />
                            <p className="event_categorie_description">Papos Filosóficos</p>
                            </a>
                      </div>
                  </div>
                </li>
                <li className="categorie_item">
                  <div className="categorie__container">
                      <h2 className="categorie_title">Oficinas</h2>
                      <div className="events__by__categorie">
                            <a className="event__container3" href="/oficinas">
                              <img className="categorie_image3" src="https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2020/01/oficina_cultural_teatro_claudinei_donizete-2-1280x853.jpg" alt="" />
                              <p className="event_categorie_description">Integração social</p>
                            </a>
                            <a className="event__container3" href="/oficinas">
                              <img className="categorie_image3" src="https://static.ndmais.com.br/2019/09/banda-de-musica-escola-nossa-senhora-de-fatima-palho%C3%A7a-foto-marcela-ximenes-28-8-19-13-800x600.jpg" alt="" />
                               <p className="event_categorie_description">Aprendendo instrumentos</p> 
                            </a>
                            <a className="event__container3" href="/oficinas">
                              <img className="categorie_image3" src="https://feiradesantana.ba.gov.br/imagens/noticias/2592019112849.jpg" alt="" />
                              <p className="event_categorie_description">Incentivando a expressão</p>
                            
                            </a>
                      </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
        </>
    );
}


export default ListOfEvents;