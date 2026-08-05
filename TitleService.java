package com.example.titleverificationbackend.service;

import com.example.titleverificationbackend.entity.Title;
import com.example.titleverificationbackend.repository.TitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TitleService {

    @Autowired
    private TitleRepository titleRepository;

    public List<Title> getAllTitles() {
        return titleRepository.findAll();
    }

    public Title saveTitle(Title title) {
        return titleRepository.save(title);
    }

    public boolean isTitleExists(String titleName) {
        List<Title> titles = titleRepository.findByTitleNameContainingIgnoreCase(titleName);
        return !titles.isEmpty();
    }
}