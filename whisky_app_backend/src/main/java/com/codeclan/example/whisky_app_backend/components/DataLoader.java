package com.codeclan.example.whisky_app_backend.components;


import com.codeclan.example.whisky_app_backend.models.Distillery;
import com.codeclan.example.whisky_app_backend.models.Person;
import com.codeclan.example.whisky_app_backend.models.Regions;
import com.codeclan.example.whisky_app_backend.models.Whisky;
import com.codeclan.example.whisky_app_backend.repositories.DistilleryRepository;
import com.codeclan.example.whisky_app_backend.repositories.PersonRepository;
import com.codeclan.example.whisky_app_backend.repositories.WhiskyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DistilleryRepository distilleryRepository;

    @Autowired
    WhiskyRepository whiskyRepository;

    @Autowired
    PersonRepository personRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Distillery glenMorangie = new Distillery("GlenMorangie", "Tain", Regions.HIGHLANDS);
        distilleryRepository.save(glenMorangie);

        Person sara = new Person("Sara");
        personRepository.save(sara);

        Whisky original = new Whisky("Glenmorangie Original", 10, glenMorangie);
        whiskyRepository.save(original);

        sara.addWhisky(original);
        personRepository.save(sara);

        glenMorangie.addWhisky(original);
        distilleryRepository.save(glenMorangie);
    }
}
