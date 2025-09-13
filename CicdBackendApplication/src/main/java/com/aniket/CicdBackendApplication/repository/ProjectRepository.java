package com.aniket.CicdBackendApplication.repository;

import com.aniket.CicdBackendApplication.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    // add custom queries here later if needed
}