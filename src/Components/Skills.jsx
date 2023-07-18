import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skills = () => {
  return (
    <Container id='SKILLS' style={{marginBottom:"200px"}} className='mt-5'>
        <Row>
            <h3 className='text-center text mb-5'>TECH SKILLS</h3>
            <Col className='d-flex flex-wrap align-items-center justify-content-center gap'>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/html.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/css.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-cover' src="/assets/JavaScript.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/React.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/next-js.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/bootstrap.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/Tailwind.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/material.png" alt="" />
                </div>
                <div className='p-3 bg-body shadow' style={{width:"100px", height:"100px", borderRadius:"50%"}}>
                    <img className='w-100 h-100 object-fit-contain' src="/assets/redux.png" alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Skills