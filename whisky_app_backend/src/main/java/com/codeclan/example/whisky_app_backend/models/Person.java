package com.codeclan.example.whisky_app_backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "persons")
public class Person {

    @Column(name = "name")
    private String name;

    @JsonIgnoreProperties({"person"})
    @ManyToMany
    @JoinTable(
            name = "persons_whiskies",
            joinColumns = {@JoinColumn(name = "person_id")},
            inverseJoinColumns = {@JoinColumn(name = "whisky_id")}
    )
    private List<Whisky> whiskies;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Person(String name) {
        this.name = name;
        this.whiskies = new ArrayList<>();
    }

    public Person() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Whisky> getWhiskies() {
        return whiskies;
    }

    public void setWhiskies(List<Whisky> whiskies) {
        this.whiskies = whiskies;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void addWhisky(Whisky whisky) {
        this.whiskies.add(whisky);
    }
}
