package traveleroutfit.traveleroutfit.domain.blusas;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "blusas")
@Getter
@Setter
public class blusas implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    long id;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "nome")
    private String nome;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "preco")
    private String preco;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "marca")
    private String marca;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "tamanho")
    private String tamanho;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "genero")
    private String genero;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "cor")
    private String cor;


}
