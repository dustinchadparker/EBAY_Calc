import * as React from "react";
import "../../scss/app";

export default class BlogPreviewCard extends React.Component<
  IBlogPreviewCardProps,
  IBlogPreviewCardState
  > {
  render() {
    const { index, lastMonthSoldFor, currentMonthShip, lastMonthShip, currentMonthSoldFor, lastMonthItems, currentMonthItems } = this.props;

    let currentMonthProf = (currentMonthSoldFor - (currentMonthSoldFor * 0.129)) - (currentMonthItems * 7) - (currentMonthItems * 0.3) - currentMonthShip;
    let lastMonthProf = (lastMonthSoldFor - (lastMonthSoldFor * 0.129)) - (lastMonthItems * 7) - (lastMonthItems * 0.3) - lastMonthShip;

    return (
      <div className="input-group mb-1 justify-content: space-between">
        <span className="input-group-text col-2 text-white bg-dark">
          {currentMonthShip}
        </span>

        <span className="input-group-text col-2 text-white bg-dark">
          {currentMonthSoldFor}
        </span>

        <span className="input-group-text col-2 text-red bg-dark">
          {currentMonthProf}
        </span>

        <span className="input-group-text col-2 text-white bg-dark">
          {lastMonthShip}
        </span>

        <span className="input-group-text col-2 text-white bg-dark">
          {lastMonthSoldFor}
        </span>

        <span className="input-group-text col-2 text-red bg-dark">
          {lastMonthProf}
        </span>

      </div>
    );
  }
}

interface IBlogPreviewCardProps {
  lastMonthSoldFor: number;
  currentMonthShip: number;
  lastMonthShip: number;
  currentMonthSoldFor: number;
  lastMonthItems: number;
  currentMonthItems: number;
  index: number,
}

interface IBlogPreviewCardState { }
