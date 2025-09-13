package com.aniket.CicdBackendApplication.controller;

import com.aniket.CicdBackendApplication.model.Project;
import com.aniket.CicdBackendApplication.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*") // allow requests from frontend dev server; secure this in production
public class ProjectController {
    private final ProjectService service;

    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @GetMapping
    public List<Project> list() {
        return service.findAll();
    }

    @PostMapping
    public ResponseEntity<Project> create(@RequestBody Project p) {
        Project created = service.create(p);
        return ResponseEntity.created(URI.create("/api/projects/" + created.getId())).body(created);
    }
}