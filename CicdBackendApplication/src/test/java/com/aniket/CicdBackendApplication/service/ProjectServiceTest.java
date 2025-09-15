package com.aniket.CicdBackendApplication.service;

import com.aniket.CicdBackendApplication.model.Project;
import com.aniket.CicdBackendApplication.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;

class ProjectServiceTest {

    @Test
    void createSetsDefaultStatusAndSaves() {
        ProjectRepository repo = Mockito.mock(ProjectRepository.class);
        Mockito.when(repo.save(any(Project.class))).thenAnswer(invocation -> {
            Project p = invocation.getArgument(0);
            p.setId(1L);
            return p;
        });

        ProjectService service = new ProjectService(repo);
        Project input = new Project();
        input.setName("Test");
        input.setDescription("desc");
        input.setStatus(null); // intentionally null

        Project out = service.create(input);

        assertNotNull(out);
        assertEquals(1L, out.getId());
        assertEquals("Planned", out.getStatus());
        Mockito.verify(repo, Mockito.times(1)).save(any(Project.class));
    }

    @Test
    void findAllDelegatesToRepository() {
        ProjectRepository repo = Mockito.mock(ProjectRepository.class);
        Mockito.when(repo.findAll()).thenReturn(List.of(new Project("A","d","Planned")));

        ProjectService service = new ProjectService(repo);
        var list = service.findAll();

        assertEquals(1, list.size());
        Mockito.verify(repo, Mockito.times(1)).findAll();
    }
}