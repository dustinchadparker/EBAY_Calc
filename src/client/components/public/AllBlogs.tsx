import * as React from "react";
import BlogPreviewCard from "./BlogPreviewCard";
import "../../scss/app";

export default class Alldata extends React.Component<
  IAlldataProps,
  IAlldataState
  > {
  constructor(props: IAlldataProps) {
    super(props);
    this.state = {
      items: [],

    };
  }

  async componentDidMount() { }

  onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(
      `/pupRouter/`
    )
      .then(response => response.json())
      .then(data => {
        const items = [{
          currentMonthShip: data.currentMonthShip,
          lastMonthShip: data.lastMonthShip,
          currentMonthSoldFor: data.currentMonthSoldFor,
          lastMonthSoldFor: data.lastMonthSoldFor,
          lastMonthItems: data.lastMonthItems,
          currentMonthItems: data.currentMonthItems,
        }];

        console.log(items);
        this.setState({ items });
      }).catch(function (e) {
        console.log(e);
      });
  };

  render() {
    console.log(this.state);
    return (
      <main className="container">
        <h1 className="text-center text-white">EBAY PROFITS</h1>
        <form
          className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-info"
          onSubmit={this.onSubmit}
        >

          <button className="btn btn-secondary mt-2 shadow">CALCULATE</button>
        </form>
        <div className="input-group mb-1 justify-content: space-between">
          <span className="input-group-text col-2 text-white bg-dark">CurrentMonthShip{" "}</span>
          <span className="input-group-text col-2 text-white bg-dark">
            CurrentMonthSold{" "}
          </span>

          <span className="input-group-text col-2 text-white bg-dark">
            CurrentMonthProfit{" "}
          </span>

          <span className="input-group-text col-2 text-white bg-dark">LastMonthShip{" "}</span>
          <span className="input-group-text col-2 text-white bg-dark">
            LastMonthSold{" "}
          </span>

          <span className="input-group-text col-2 text-white bg-dark">
            LastMonthProfit{" "}
          </span>
        </div>

        {this.state.items.map((item: Item, index: number) => {
          return (
            <BlogPreviewCard
              index={index}
              currentMonthShip={item.currentMonthShip}
              lastMonthShip={item.lastMonthShip}
              currentMonthSoldFor={item.currentMonthSoldFor}
              lastMonthSoldFor={item.lastMonthSoldFor}
              lastMonthItems={item.lastMonthItems}
              currentMonthItems={item.currentMonthItems}

            />
          );
        })}
      </main>
    );
  }
}

interface IAlldataProps { }

interface IAlldataState {
  items: Item[];
}

interface Item {
  currentMonthShip: number;
  lastMonthShip: number;
  currentMonthSoldFor: number;
  lastMonthSoldFor: number;
  lastMonthItems: number;
  currentMonthItems: number;
}
