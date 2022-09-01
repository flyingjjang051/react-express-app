import dummyData from "../db/data.json";
import { Link, useParams, useNavigate } from "react-router-dom";

import Voca from "./Voca";
export default function Days() {
  //console.log(dummyData.days);
  const { day } = useParams();
  const navigate = useNavigate();
  console.log(day);
  //map,filter
  // const filterVoca = dummyData.voca.filter(function (item, idx) {
  //   return item.day === Number(day);
  // });
  //const filterVoca = dummyData.voca.filter( (item, idx) => item.day === Number(day));
  const filterVoca = dummyData.voca.filter((item) => item.day === Number(day));

  console.log(filterVoca);
  return (
    <div div className="dayBox container">
      <h2 className="title">Day-{day}</h2>
      <ul className="vocas">
        {filterVoca.map(function (item, idx) {
          return <Voca info={item} key={item.id} />;
        })}
      </ul>
      <div className="btns">
        <button
          className="btn list"
          onClick={function () {
            navigate(-1);
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
}
