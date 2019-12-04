package com.kaprem.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "portfolios")
@Data
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String defaultName;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "description")
    private String description;

    @Column(name = "materials_description")
    private String materialsDescription;

    @Column(name = "image_url")
    private String imageUrl;
}
