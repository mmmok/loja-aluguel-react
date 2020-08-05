package com.digivox.al.database.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Aluguel {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "aluguel_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    private Date dataInicio;

    private Date dataFim;

    private Double valor;

    protected Aluguel() {}

    @Override
    public String toString() {
        return "Aluguel{" +
                "id=" + id +
                ", item=" + item +
                ", cliente=" + cliente +
                ", dataInicio=" + dataInicio +
                ", dataFim=" + dataFim +
                ", dataFim=" + valor +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }

    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }
}
