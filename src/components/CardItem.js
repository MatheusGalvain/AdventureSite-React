import React from 'react';
import { Link } from 'react-router-dom'
import './Cards.css'


function CardItem(props) {

    return (


        <div className='cards'>

            <div className='box'>
                <Link to="/destiny">
                    <div className='text-content'>
                        <figure className='cards__item__pic-wrap'>
                            <h5 className='cards__item__text'>• Indonesia</h5>
                            <img className='card__item__img' src={require('../images/indonesia.jpg')} alt='travel' />
                            <p>| Paradisíaco |</p>
                        </figure>
                    </div>
                </Link>
            </div>

            <div className='box'>
                <Link to="/destiny">
                    <div className='text-content'>
                        <figure className='cards__item__pic-wrap'>
                            <h5 className='cards__item__text'>• Fernando de Noronha</h5>
                            <img className='card__item__img' src={require('../images/fernandoNoronha.jpg')} alt='travel' />
                            <p>| Paradisíaco |</p>
                        </figure>
                    </div>
                </Link>
            </div>

            <div className='box'>
                <Link to="/destiny">
                    <div className='text-content'>
                        <figure className='cards__item__pic-wrap'>
                            <h5 className='cards__item__text'>• Peru</h5>
                            <img className='card__item__img' src={require('../images/peru.jpg')} alt='travel' />
                            <p>| Paradisíaco |</p>
                        </figure>
                    </div>
                </Link>
            </div>

            <div className='box'>
                <Link to="/destiny">
                    <div className='text-content'>
                        <figure className='cards__item__pic-wrap'>
                            <h5 className='cards__item__text'>• Jôrdania</h5>
                            <img className='card__item__img' src={require('../images/jordania.jpg')} alt='travel' />
                            <p>| Paradisíaco |</p>
                        </figure>
                    </div>
                </Link>
            </div>

            <div className='box'>
                <Link to="/destiny">
                    <div className='text-content'>
                        <figure className='cards__item__pic-wrap'>
                            <h5 className='cards__item__text'>• Veneza</h5>
                            <img className='card__item__img' src={require('../images/veneza.jpg')} alt='travel' />
                            <p>| Paradisíaco |</p>
                        </figure>
                    </div>
                </Link>
            </div>






        </div >

    );

}

export default CardItem;


{/* Modelo Antigo */ }
{/* <li className='cards__item'>
                <Link className='cards__item__link' to={{pathname:'/destiny', search: "?sort=indonesia"}}>
                <figure className='cards__item__pic-wrap' data-category='Paradisíaco'>
                       <img className='cards__item__img' src={ImgTest2} alt="travel"/>       
                       <div className='cards__adventure'></div>
                    </figure >  
                    <div className='cards__item__info'>
                    <h5 className='cards__item__text'>• Indonésia</h5>       
                    </div>
                </Link>  
            </li> */}