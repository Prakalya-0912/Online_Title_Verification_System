package com.example.titleverificationbackend.controller;

import com.example.titleverificationbackend.entity.Title;
import com.example.titleverificationbackend.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/titles")
@CrossOrigin(origins = "*")
public class TitleController {

    @Autowired
    private TitleService titleService;

    // Add new title
    @PostMapping
    public String addTitle(@RequestBody Title title) {
        titleService.saveTitle(title);
        return "Title added successfully";
    }

    // Get all titles
    @GetMapping
    public List<Title> getAllTitles() {
        return titleService.getAllTitles();
    }

    // Verify title similarity
    @PostMapping("/verify")
    public String verifyTitle(@RequestBody Title title) {

        boolean exists = titleService.isTitleExists(title.getTitleName());

        if (exists) {
            return "Similar title found";
        } else {
            return "Title is available";
        }
    }
}