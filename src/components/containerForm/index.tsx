import React, { FormEvent } from "react";
import "./styles.css";
interface ContainerFormProps {
  handleSubscribe: (event: FormEvent) => Promise<void>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

export function ContainerForm(props: ContainerFormProps) {
  return (
    <div className="container-Form">
      <strong>Inscreva-se gratuitamente</strong>
      <form onSubmit={props.handleSubscribe}>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          onChange={(event) => props.setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(event) => props.setEmail(event.target.value)}
        />
        <button disabled={props.loading} type="submit">
          Garantir minha vaga
        </button>
      </form>
    </div>
  );
}
