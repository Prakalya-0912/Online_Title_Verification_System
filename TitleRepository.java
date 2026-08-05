package com.example.titleverificationbackend.repository;

import com.example.titleverificationbackend.entity.Title;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TitleRepository extends JpaRepository<Title, Integer> {

    List<Title> findByTitleNameContainingIgnoreCase(String titleName);

}