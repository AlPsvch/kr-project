package com.kaprem.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "advices")
@Data
public class Advice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "description")
    private String adviceDescription;
}
