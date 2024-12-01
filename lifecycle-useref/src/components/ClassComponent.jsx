import { Component } from "react";

// React içerisinde Component i extend ettik
class CounterClass extends Component {
  // Kurucu metot
  constructor(props) {
    super(props);

    // state tanımlama
    this.state = {
      isAdmin: true,
      count: 0,
    };
  }

  //  Bir bileşenin ekrana gelme anını izle
  componentDidMount() {
    console.log(`Bileşen ekrana geldi `);
  }

  // Bir bileşenin güncellenmesini izle
  componentDidUpdate() {
    console.log(`Bileşen güncellendi`);
  }
  // Bir bileşenin ekrandan kaldırlmasını izle
  componentWillUnmount() {
    console.log(`Bileşen ekrandan gitti`);
  }

  render() {
    return (
      <div className="m-5 d-flex gap-3 justify-content-center">
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="btn btn-success px-4"
        >
          Arttır
        </button>
        <h1>{this.state.count} </h1>
        <button
          disabled={this.state.count === 0}
          onClick={() => this.setState({ count: this.state.count - 1 })}
          className="btn btn-danger px-4"
        >
          Azalt
        </button>
      </div>
    );
  }
}

export default CounterClass;
