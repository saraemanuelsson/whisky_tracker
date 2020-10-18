package com.codeclan.example.whisky_app_backend.controller;

import com.codeclan.example.whisky_app_backend.models.Distillery;
import com.codeclan.example.whisky_app_backend.models.ERegions;
import com.codeclan.example.whisky_app_backend.payload.request.SaveDistilleryRequest;
import com.codeclan.example.whisky_app_backend.repositories.DistilleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class DistilleryController {

    @Autowired
    DistilleryRepository distilleryRepository;

    @GetMapping(value = "/distilleries")
    public ResponseEntity<List<Distillery>> getAllDistilleries(){
        List<Distillery> foundDistilleries = distilleryRepository.findAll();
        return new ResponseEntity<>(foundDistilleries, HttpStatus.OK);
    }

    @GetMapping(value = "/distilleries/{id}")
    public ResponseEntity getDistilleryById(@PathVariable Long id){
        Optional<Distillery> foundDistillery = distilleryRepository.findById(id);
        return new ResponseEntity(foundDistillery, HttpStatus.OK);
    }

    @PostMapping(value = "/distilleries")
    public ResponseEntity<Distillery> postDistillery(@RequestBody SaveDistilleryRequest saveDistilleryRequest) {
        String name = saveDistilleryRequest.getName();
        double[] location = saveDistilleryRequest.getLocation();
        ERegions region = saveDistilleryRequest.getRegion();
        Distillery distillery = new Distillery(name, location, region);
        distilleryRepository.save(distillery);
        return new ResponseEntity<>(distillery, HttpStatus.CREATED);
    }
}
