package com.codeclan.example.whisky_app_backend.controller;

import com.codeclan.example.whisky_app_backend.models.Whisky;
import com.codeclan.example.whisky_app_backend.repositories.WhiskyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class WhiskyController {

    @Autowired
    WhiskyRepository whiskyRepository;

    @GetMapping(value = "/whiskies")
    public ResponseEntity<List<Whisky>> getAllWhiskies(){
        List<Whisky> foundWhiskies = whiskyRepository.findAll();
        return new ResponseEntity<>(foundWhiskies, HttpStatus.OK);
    }

    @GetMapping(value = "/whiskies/{id}")
    public ResponseEntity getWhiskyById(@PathVariable Long id){
        Optional<Whisky> foundWhisky = whiskyRepository.findById(id);
        return new ResponseEntity(foundWhisky, HttpStatus.OK);
    }

    @PostMapping(value = "/whiskies")
    public ResponseEntity<Whisky> postWhisky(@RequestBody Whisky whisky){
        whiskyRepository.save(whisky);
        return new ResponseEntity<>(whisky, HttpStatus.CREATED);
    }

}
