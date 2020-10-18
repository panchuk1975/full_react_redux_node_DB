import React, { useEffect, useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { useMessage } from "../hooks/message.hook";
import { Loader } from "../components/Loader";
import { useParams } from "react-router-dom";
import { inputRightClassSize } from "../hooks/resize.Hook";
import { NavLink } from "react-router-dom";

export const CreateClient = React.memo(() => {
  //Initializide class Size
  let initialCardClass = inputRightClassSize(
    window.innerWidth,
    window.screen.width
  );
  //uase state for card size
  let [cardClass, setCardClass] = useState(initialCardClass);
  //-Get ID
  let clientId = useParams().id;
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { request, loading, error, clearError } = useHttp();
  //To Client page
  const prevPage = () => {
    history.push(`/cars/`);
  };
  //Get Client
  let clients = JSON.parse(localStorage.getItem("clientsArray"));
  let client = JSON.parse(localStorage.getItem("currentClient"));
  // if (clients) {
  //   client = clients.find((client) => client._id === clientId);
  // }
  //-count next
  let next = 1;
  if (clients.length > 0) {
    next = clients[clients.length - 1].serialNumber + 1;
  }
  //-New Client form
  let initialForm = {};
  if (clientId) {
    initialForm = client;
  } else {
    initialForm = {
      serialNumber: next,
      officialName: "",
      genСontractNum: "",
      address: "",
      personStatus: "",
      contactPerson: "",
      telNumber: "",
      dateOfTalks: "",
      talksResult: "",
      sourceInfo: "",
      respPerson: "",
      signData: "",
      genСontractTerm: "",
    };
  }
  // form for newClient
  let [form, setForm] = useState({ ...initialForm });
  //------------------Textarea activation--------------------//
  useEffect(() => {
    window.M.updateTextFields();
  }, []);
  //------------------Event change Handler-------------------//
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  //------------------------History--------------------------//
  const history = useHistory();
  //-----------------------Create Car------------------------//
  const pressHandler = async () => {
    try {
      const data = await request(
        "/api/clients/create",
        "POST",
        { ...form, owner: auth.userId },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      message(data.message);
      history.push("/clients/");
    } catch (e) {
      history.push("/clients/");
    }
  };
  //------------------------Update Car------------------------//
  const pressUpdater = async () => {
    try {
      const data = await request(
        "/api/car/update",
        "PUT",
        { ...form },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      message(data.message);
      history.push(`/detail/${clientId}`);
    } catch (e) {}
  };
  //----------------------Error processing---------------------//
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);
  //----------------------Change elements size-----------------//
  window.onresize = (event) => {
    let size = inputRightClassSize(window.innerWidth, window.screen.width);
    setCardClass(size);
  };
  //-----------------------Loading in process------------------//
  if (loading) {
    return <Loader />;
  }
  //----------------------------JSX---------------------------//
  return (
    <div className="row">
      <div className="createClient">
        <div
          className="col s12 offset-s0 grey darken-3 white-text center-align"
          style={{ marginBottom: 3, marginTop: 10 }}
        >
          <h5>
            {!clientId && "New client"}{" "}
            {clientId && `Client: ${form.officialName}`}
          </h5>
        </div>

        <div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Порядковий номер"
              type="number"
              className="yellow-input"
              name="serialNumber"
              value={form.serialNumber}
              onChange={changeHandler}
            />
            <label htmlFor="serialNumber">Порядковий номер</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Найменування"
              type="text"
              className="yellow-input"
              name="officialName"
              value={form.officialName}
              onChange={changeHandler}
            />
            <label htmlFor="officialName">Найменування</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Номер контракту"
              type="text"
              className="yellow-input"
              name="genСontractNum"
              value={form.genСontractNum}
              onChange={changeHandler}
            />
            <label htmlFor="genСontractNum">Номер контракту</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Адреса"
              type="text"
              className="yellow-input"
              name="address"
              value={form.address}
              onChange={changeHandler}
            />
            <label htmlFor="address">Адреса</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Персональний статус"
              type="text"
              className="yellow-input"
              name="personStatus"
              value={form.personStatus}
              onChange={changeHandler}
            />
            <label htmlFor="personStatus">Персональний статус</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Контактна особа"
              type="text"
              className="yellow-input"
              name="contactPerson"
              value={form.contactPerson}
              onChange={changeHandler}
            />
            <label htmlFor="contactPerson">Контактна особа</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Телефонний номер"
              type="text"
              className="yellow-input"
              name="telNumber"
              value={form.telNumber}
              onChange={changeHandler}
            />
            <label htmlFor="telNumber">Телефонний номер</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Дата переговорів"
              type="date"
              className="yellow-input"
              name="dateOfTalks"
              value={form.dateOfTalks}
              onChange={changeHandler}
            />
            <label htmlFor="dateOfTalks">Дата переговорів</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Результат переговорів"
              type="text"
              className="yellow-input"
              name="talksResult"
              value={form.talksResult}
              onChange={changeHandler}
            />
            <label htmlFor="talksResult">Результат переговорів</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Ресурс"
              type="text"
              className="yellow-input"
              name="sourceInfo"
              value={form.sourceInfo}
              onChange={changeHandler}
            />
            <label htmlFor="sourceInfo">Ресурс</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Відповідальна особа"
              type="text"
              className="yellow-input"
              name="respPerson"
              value={form.respPerson}
              onChange={changeHandler}
            />
            <label htmlFor="respPerson">Відповідальна особа</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Дата підпису"
              type="date"
              className="yellow-input"
              name="signData"
              value={form.signData}
              onChange={changeHandler}
            />
            <label htmlFor="signData">Дата підпису</label>
          </div>
          <div className={`${cardClass} input-field`}>
            <input
              placeholder="Термін контракту"
              type="date"
              className="yellow-input"
              name="genСontractTerm"
              value={form.genСontractTerm}
              onChange={changeHandler}
            />
            <label htmlFor="genСontractTerm">Термін контракту</label>
          </div>
        </div>
      </div>
      <form className="col s12">
        {!clientId && (
          <button
            className="col s2 offset-s0 grey darken-3 white-text center-align"
            style={{
              padding: 5,
              marginBottom: 4,
              marginLeft: "0%",
              marginRight: "2%",
            }}
            onClick={pressHandler}
            disabled={loading}
          >
            Додати
          </button>
        )}
        {clientId && (
          <div
            className="col s2 offset-s0 grey darken-0 white-text center-align"
            style={{
              padding: 5,
              marginBottom: 4,
              marginLeft: "0%",
              marginRight: "2%",
            }}
          >
            Додати
          </div>
        )}
        {clientId && (
          <button
            className="col s2 offset-s0 grey darken-3 white-text center-align"
            style={{
              padding: 5,
              marginBottom: 4,
              marginLeft: "2%",
              marginRight: "2%",
            }}
            onClick={pressUpdater}
            disabled={loading}
          >
            Обновити
          </button>
        )}
        {!clientId && (
          <div
            className="col s2 offset-s0 grey darken-0 white-text center-align"
            style={{
              padding: 5,
              marginBottom: 2,
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            Обновити
          </div>
        )}
        {clientId && (
          <button
            className="col s2 offset-s0 grey darken-3 white-text center-align"
            style={{
              padding: 5,
              marginBottom: 4,
              marginLeft: "2%",
              marginRight: "2%",
            }}
            // onClick={deleteHandler}
          >
            Видалити
          </button>
        )}
        {!clientId && (
          <div
            className="col s2 offset-s0 grey darken-0 white-text center-align"
            style={{
              padding: 5,
              marginBottom: 4,
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            Видалити
          </div>
        )}

        {clientId && (
          <NavLink to={"/list/"}>
            <button
              className="col s2 offset-s0 grey darken-3 white-text center-align"
              style={{
                padding: 5,
                marginBottom: 4,
                marginLeft: "2%",
                marginRight: "2%",
              }}
            >
              + Лист
            </button>
          </NavLink>
        )}
        {!clientId && (
          <div
            className="col s2 offset-s0 grey darken-0 white-text center-align"
            style={{
              padding: 5,
              marginBottom: 4,
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            + Лист
          </div>
        )}
        <button
          className="col s2 offset-s0 grey darken-3 white-text center-align"
          style={{
            padding: 5,
            marginBottom: 4,
            marginLeft: "2%",
            marginRight: "0%",
          }}
          onClick={prevPage}
        >
          Назад
        </button>
      </form>
    </div>
  );
});
