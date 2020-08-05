package com.digivox.al.database.model;

import javax.persistence.*;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tipo_item_id", nullable = false)
    private TipoItem tipoItem;

    protected Item() {}

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", tipoItem=" + tipoItem +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TipoItem getTipoItem() {
        return tipoItem;
    }

    public void setTipoItem(TipoItem tipoItem) {
        this.tipoItem = tipoItem;
    }
}
