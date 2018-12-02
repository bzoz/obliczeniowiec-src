import React, { Component } from 'react';
import { Container, Row, Progress, Col } from 'reactstrap';
import $ from "jquery";
import './App.css';
import 'animate.css'

function PerformaceBar(props) {
  let color;
  if (props.value > 90)
    color = 'danger';
  else if (props.value > 70)
    color = 'warning';
  return (
    <Progress value={props.value} color={color}/>
  );
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      performance: 0,
      question: 'Wciśnij ENTER by zacząć!',
      anwser: '',
      currentAnwser: ''
    }
  }

  componentDidMount() {
    setInterval(() => {
      let newLevel = this.state.performance - 1;
      if (newLevel < 0)
        newLevel = 0;
      this.setState({performance: newLevel})
      
    }, 600);
    console.log($(document))
    $(document).keyup(() => { $('.question').removeClass('animated shake'); });
    $(document).keydown((key) => {
      $('.question').removeClass('animated shake');
      if (key.which === 8) {
        this.setState({currentAnwser: this.state.currentAnwser.slice(0, -1) })
      } else if (key.which === 13) {
        if (this.state.currentAnwser === this.state.anwser) {
          let limit = 20;
          if (this.state.performance > 50) limit = 30;
          if (this.state.performance > 60) limit = 40;
          if (this.state.performance > 90) limit = 50;
          const argA = Math.floor(Math.random() * limit);
          const argB = Math.floor(Math.random() * limit);
          let question, anwser;
          if (Math.random() > 0.5) {
            question = `${argA} + ${argB} = `;
            anwser = `${argA + argB}`;
          } else {
            question = `${Math.max(argA, argB)} - ${Math.min(argA, argB)} = `;
            anwser = `${Math.max(argA, argB) - Math.min(argA, argB)}`;
          }
          this.setState({
            question, anwser,
            performance: Math.min(100,this.state.performance + 25),
            score: this.state.score + this.state.performance + 1,
            currentAnwser: ''
          });
        } else {
          $('.question').addClass('animated shake');
        }
      } else if (this.state.anwser !== '' && key.key >= '0' && key.key <= '9') {
        this.setState({currentAnwser: this.state.currentAnwser + key.key });
      }
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><h1 className="text-center">Obliczeniowiec</h1></Col></Row>
        <Row>
          <Col><PerformaceBar value={this.state.performance}/></Col>
        </Row>
        <Row>
          <Col><p className="text-left">Wynik: {this.state.score}</p></Col>
          <Col><p className="text-right">Poziom: {this.state.performance}</p></Col>
        </Row>
        <Row>
          <Col>
            <p className="question">{this.state.question}{this.state.currentAnwser}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default App;
