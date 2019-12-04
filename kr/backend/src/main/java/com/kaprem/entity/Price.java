package com.kaprem.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "prices")
@Data
public class Price {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "service_name")
    private String serviceName;

    @Column(name = "unit")
    private String unit;

    @Column(name = "price")
    private Integer price;
}
