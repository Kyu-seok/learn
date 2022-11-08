package com.kyu.spring5recipeapp.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@EqualsAndHashCode(exclude = {"recipe"})
@Entity
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @OneToOne
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Recipe recipe;

    @Lob
    private String recipeNotes;

}
