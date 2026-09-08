package school.sptech.cafeteria;

import java.math.BigDecimal;

public class Cafe {
    private Integer id;
    private String nome;
    private String torra;
    private Integer ml;
    private BigDecimal preco;
    private String descricao;

    //Construtor
    public Cafe(Integer id, String nome, String torra, Integer ml, BigDecimal preco, String descricao) {
        this.id = id;
        this.nome = nome;
        this.torra = torra;
        this.ml = ml;
        this.preco = preco;
        this.descricao = descricao;
    }

    public Cafe(){

    }

    //getters setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTorra() {
        return torra;
    }

    public void setTorra(String torra) {
        this.torra = torra;
    }

    public Integer getMl() {
        return ml;
    }

    public void setMl(Integer ml) {
        this.ml = ml;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
