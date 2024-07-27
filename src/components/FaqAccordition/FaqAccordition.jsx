import React from 'react';
import './FaqAccordition.css';
import Accordition from 'react-bootstrap/Accordion';

function FaqAccordition(){
    return(
        <div>
            <div className="faq-section">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className='text-center text-capitalze mb-5'> Discussion Foram</h2>
                <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet praesentium sed assumenda reprehenderit ipsam eligendi, delectus saepe, voluptatum atque repudiandae mollitia porro iusto totam excepturi eius molestias tempora veniam nobis.</p>
                <Accordition defaultActiveKey=""flush>
                    <Accordition.Item enterKey='0'>
                        <Accordition.Header>First Question ?</Accordition.Header>
                        <Accordition.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut eaque blanditiis eos neque, distinctio inventore. Aliquam, perferendis. Quae sint laborum consectetur provident, ratione eaque voluptatibus illum. Nesciunt, iusto similique. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eaque aliquam. Voluptate et quidem, asperiores odit delectus voluptatum voluptatibus provident mollitia ducimus repudiandae at illum velit, aspernatur hic, pariatur atque.
                        </Accordition.Body>
                     </Accordition.Item>
                     <Accordition.Item enterKey='1'>
                        <Accordition.Header>Second Question ?</Accordition.Header>
                        <Accordition.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut eaque blanditiis eos neque, distinctio inventore. Aliquam, perferendis. Quae sint laborum consectetur provident, ratione eaque voluptatibus illum. Nesciunt, iusto similique. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eaque aliquam. Voluptate et quidem, asperiores odit delectus voluptatum voluptatibus provident mollitia ducimus repudiandae at illum velit, aspernatur hic, pariatur atque.
                        </Accordition.Body>
                     </Accordition.Item>
                     <Accordition.Item enterKey='2'>
                        <Accordition.Header>Third question ?</Accordition.Header>
                        <Accordition.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut eaque blanditiis eos neque, distinctio inventore. Aliquam, perferendis. Quae sint laborum consectetur provident, ratione eaque voluptatibus illum. Nesciunt, iusto similique. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eaque aliquam. Voluptate et quidem, asperiores odit delectus voluptatum voluptatibus provident mollitia ducimus repudiandae at illum velit, aspernatur hic, pariatur atque.
                        </Accordition.Body>
                     </Accordition.Item>
                     <Accordition.Item enterKey='3'>
                        <Accordition.Header>Fourth Question ?</Accordition.Header>
                        <Accordition.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut eaque blanditiis eos neque, distinctio inventore. Aliquam, perferendis. Quae sint laborum consectetur provident, ratione eaque voluptatibus illum. Nesciunt, iusto similique. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eaque aliquam. Voluptate et quidem, asperiores odit delectus voluptatum voluptatibus provident mollitia ducimus repudiandae at illum velit, aspernatur hic, pariatur atque.
                        </Accordition.Body>
                     </Accordition.Item>
                </Accordition>
                </div>
            </div>
        </div>
    )

}
export default FaqAccordition;