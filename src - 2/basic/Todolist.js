import React from 'react'

import Input from './Input'

export default class Todolist extends React.Component {
  constructor(){
    super()
    this.state = {
      working: [],
      finished: [],
      text: '<b>bold</b>'
    }

    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleChangeWorking = this.handleChangeWorking.bind(this)
  }

  handleItemClick(e) {
    let deleteItem = this.state.working.splice(e.target.dataset.index, 1)
    this.state.finished.push(deleteItem)
    this.setState({})
  }

  handleChangeWorking(inputValue) {
    this.setState((prevState) => {
      return {
        working: prevState.working.concat([
          {
            id: '' + new Date().getTime(),
            item: inputValue
          }
        ])
      }
    })
  }

  render() {
    return (
      <div>
        <Input name="keywords" onChangeWorking={this.handleChangeWorking} />
        <div>正在进行</div>
        <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
        <ul>
          {
            this.state.working.map((value, index) => {
              return <li key={value.id} onClick={this.handleItemClick} data-index={index}>{value.item}</li>
            })
          }
        </ul>
        <div>已经完成</div>
        <ul>
          {
            this.state.finished.map((value, index) => {
              return <li key={value[0].id}>{value[0].item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
