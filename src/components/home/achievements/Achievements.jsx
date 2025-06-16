import "./achievements.css";
import Button from "../../common/Button";

// ICONS
import {
  faThumbsUp,
  faTruck,
  faUsers,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useReducer } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";

const target = {
  happy_clients: 513,
  transport: 456,
  employees: 53,
  years_experiance: 17,
};

export const initialValue = {
  happy_clients: 0,
  transport: 0,
  employees: 0,
  years_experiance: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "happy_clients":
      return { ...state, happy_clients: state.happy_clients + 1 };
    case "transport":
      return { ...state, transport: state.transport + 1 };
    case "employees":
      return { ...state, employees: state.employees + 1 };
    case "years_experiance":
      return { ...state, years_experiance: state.years_experiance + 1 };
    default:
      return state;
  }
}

const Achievements = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    if (state.happy_clients >= target.happy_clients) return;
    const interval = setInterval(() => {
      dispatch({ type: "happy_clients" });
      if (state.happy_clients + 1 >= target.happy_clients) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [state.happy_clients]);

  useEffect(() => {
    if (state.transport >= target.transport) return;
    const interval = setInterval(() => {
      dispatch({ type: "transport" });
      if (state.transport + 1 >= target.transport) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [state.transport]);

  useEffect(() => {
    if (state.employees >= target.employees) return;
    const interval = setInterval(() => {
      dispatch({ type: "employees" });
      if (state.employees + 1 >= target.employees) {
        clearInterval(interval);
      }
    }, 1);
    return () => clearInterval(interval);
  }, [state.employees]);

  useEffect(() => {
    if (state.years_experiance >= target.years_experiance) return;
    const interval = setInterval(() => {
      dispatch({ type: "years_experiance" });
      if (state.years_experiance + 1 >= target.years_experiance) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [state.years_experiance]);

  return (
    <>
      <section className="section achievement">
        <div className="container">
          <div className="box">
            <Button
              text={faThumbsUp}
              isIcon={true}
              styleBtn="normal"
              width={"100px"}
              height={"100px"}
            />
            <h1>عملاء سعداء</h1>
            <h2>{state.happy_clients}+</h2>
          </div>

          <div className="box">
            <Button
              text={faTruck}
              isIcon={true}
              styleBtn="normal"
              width={"100px"}
              height={"100px"}
            />
            <h1>النقل و المواصلات</h1>
            <h2>{state.transport}+</h2>
          </div>

          <div className="box">
            <Button
              text={faUsers}
              isIcon={true}
              styleBtn="normal"
              width={"100px"}
              height={"100px"}
            />
            <h1>الموظفين</h1>
            <h2>{state.employees}+</h2>
          </div>

          <div className="box">
            <Button
              text={faHeart}
              isIcon={true}
              styleBtn="normal"
              width={"100px"}
              height={"100px"}
            />
            <h1>سنوات الخبرة</h1>
            <h2>{state.years_experiance}+</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
