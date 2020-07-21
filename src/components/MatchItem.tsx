import React, { FC } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import IGame from "../types/Game";

const MatchItem: FC<IGame> = ({
  title,
  id,
  thumbnail,
  date,
  competition: { name },
}) => (
  <div>
    <h3>
      <Link to={"/" + id}>{title}</Link>
    </h3>
    <p>{name}</p>
    <p>
      <Moment format="DD MMMM YYYY - HH:mm">{date}</Moment>
    </p>
    <img src={thumbnail} alt={title} />
    {/* <div dangerouslySetInnerHTML={{ __html: embed }}></div> */}
  </div>
);

export default MatchItem;
