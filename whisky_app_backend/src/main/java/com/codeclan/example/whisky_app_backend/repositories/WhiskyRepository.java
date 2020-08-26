package com.codeclan.example.whisky_app_backend.repositories;

import com.codeclan.example.whisky_app_backend.models.Whisky;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WhiskyRepository extends JpaRepository<Whisky, Long> {



}
