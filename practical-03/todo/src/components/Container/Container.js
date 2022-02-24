import React, { Component } from 'react'
import Footer from "../Footer/Footer";
 import Header from "../Header/Header";
 import TodoList from "../TodoList/TodoList";
 import Card from "../UI/Card";
 import styles from "./Container.module.css";



export class Container extends Component {
  render() {
    return (
      <>
      <Card className={styles.containerStyleClass}>
           <Header />
           <TodoList />
          <Footer />
        </Card>
  </>
    )
  }
}

export default Container
