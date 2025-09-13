package com.aniket.CicdBackendApplication.service;

import com.aniket.CicdBackendApplication.model.Project;
import com.aniket.CicdBackendApplication.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository repository;

    public ProjectService(ProjectRepository repository) {
        this.repository = repository;
    }

    public List<Project> findAll() {
        return repository.findAll();
    }

    public Project create(Project p) {
        if (p.getStatus() == null || p.getStatus().isBlank()) {
            p.setStatus("Planned");
        }
        return repository.save(p);
    }
}