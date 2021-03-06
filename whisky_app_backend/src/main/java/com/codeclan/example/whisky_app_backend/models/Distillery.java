package com.codeclan.example.whisky_app_backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "distilleries")
public class Distillery{

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private double[] location;

    @Column(name = "region")
    private ERegions region;

    @Column(name = "visited")
    private Boolean visited;

    @Column(name = "image")
    private String image;

    @JsonIgnoreProperties("distillery")
    @OneToMany(mappedBy = "distillery", fetch = FetchType.LAZY)
    private List<Whisky> whiskies;

    @Column(name = "starred")
    private Boolean starred;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Distillery(String name, double[] location, ERegions region) {
        this.name = name;
        this.location = location;
        this.region = region;
        this.visited = false;
        this.image = "";
        this.whiskies = new ArrayList<>();
        this.starred = false;
    }

    public Distillery() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double[] getLocation() {
        return location;
    }

    public void setLocation(double[] location) {
        this.location = location;
    }

    public Boolean getVisited() {
        return visited;
    }

    public void setVisited(Boolean visited) {
        this.visited = visited;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Whisky> getWhiskies() {
        return whiskies;
    }

    public void setWhiskies(List<Whisky> whiskies) {
        this.whiskies = whiskies;
    }

    public Boolean getStarred() {
        return starred;
    }

    public void setStarred(Boolean starred) {
        this.starred = starred;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ERegions getRegion() {
        return region;
    }

    public void setRegion(ERegions region) {
        this.region = region;
    }

    public void addWhisky(Whisky whisky) {
        this.whiskies.add(whisky);
    }
}
