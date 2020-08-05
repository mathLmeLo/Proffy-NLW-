import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/49342185?s=460&u=de838f4db604c12abe664be82827c3be93a52781&v=4"
          alt="Matheus Melo"
        />
        <div>
          <strong>Matheus Melo</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Ensinando a dinâmica dos objetos para que você não fique estático na sua
        carreira.
        <br />
        <br />
        Aprenda a o conteúdo e tire o peso das suas dúvidas. Pode vir. Vai ser
        massa!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
