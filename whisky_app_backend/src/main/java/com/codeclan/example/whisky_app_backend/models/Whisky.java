package com.codeclan.example.whisky_app_backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "whiskies")
public class Whisky {

    @Column(name = "name")
    private String name;

    @Column(name = "year")
    private int year;

    @ManyToOne
    @JsonIgnoreProperties({"whiskies"})
    @JoinColumn(name = "distillery")
    private Distillery distillery;

    @Column(name = "tried")
    private Boolean tried;

    @Column(name = "starred")
    private Boolean starred;

    @Column(name = "inCupboard")
    private Boolean inCupboard;

    @Column(name = "comments")
    private String comments;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JsonIgnoreProperties({"whiskies"})
    @JoinTable(
            name = "persons_whiskies",
            joinColumns = {@JoinColumn(name = "whisky_id")},
            inverseJoinColumns = {@JoinColumn(name = "person_id")}
    )
    private List<Person> people;

    public Whisky(String name, int year, Distillery distillery) {
        this.name = name;
        this.year = year;
        this.distillery = distillery;
        this.tried = false;
        this.starred = false;
        this.inCupboard = false;
        this.comments = "";
        this.people = new ArrayList<>();
    }

    public Whisky() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Distillery getDistillery() {
        return distillery;
    }

    public void setDistillery(Distillery distillery) {
        this.distillery = distillery;
    }

    public Boolean getTried() {
        return tried;
    }

    public void setTried(Boolean tried) {
        this.tried = tried;
    }

    public Boolean getStarred() {
        return starred;
    }

    public void setStarred(Boolean starred) {
        this.starred = starred;
    }

    public Boolean getInCupboard() {
        return inCupboard;
    }

    public void setInCupboard(Boolean inCupboard) {
        this.inCupboard = inCupboard;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public List<Person> getPeople() {
        return people;
    }

    public void setPeople(List<Person> people) {
        this.people = people;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
