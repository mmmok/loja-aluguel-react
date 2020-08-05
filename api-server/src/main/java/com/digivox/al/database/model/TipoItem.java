package com.digivox.al.database.model;

import javax.persistence.*;

@Entity
public class TipoItem {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "tipo_item_id")
    private Long id;

    private String nome;

    protected TipoItem() {}

    @Override
    public String toString() {
        return "TipoItem{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
