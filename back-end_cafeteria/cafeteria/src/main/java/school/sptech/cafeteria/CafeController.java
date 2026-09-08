package school.sptech.cafeteria;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cafe")
@CrossOrigin(origins = "http://localhost:5173")
public class CafeController {

    private final JdbcTemplate jdbcTemplate;

    public CafeController(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> inserir(@RequestBody Cafe cafe){

        if(cafe.getNome() == null || cafe.getMl() == null || cafe.getTorra() == null ||
           cafe.getPreco() == null){
           return ResponseEntity.status(400).build();
        }

        if(cafe.getPreco().compareTo(BigDecimal.ZERO) <= 0.0 || cafe.getMl() == 0){
            return ResponseEntity.status(400).build();
        }

        String sql = "INSERT INTO cafe (nome, torra, ml, preco, descricao) VALUES (?, ?, ?, ?, ?)";

        jdbcTemplate.update(sql, cafe.getNome(), cafe.getTorra(), cafe.getMl(), cafe.getPreco(),
                cafe.getDescricao());

        return ResponseEntity.status(201).body(Map.of("mensagem", "Cadastro Realizado!"));
    }

    @GetMapping
    public ResponseEntity<List<Cafe>> listar(){
         String sql = "SELECT * FROM cafe";

         List<Cafe> cafe = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Cafe.class));

         return ResponseEntity.status(200).body(cafe);
    }
}
