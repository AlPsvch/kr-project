package com.kaprem.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "services")
@Data
public class AvailableService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;
}
