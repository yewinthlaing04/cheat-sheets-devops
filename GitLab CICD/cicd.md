# GitLab CI/CD

## Terminology

### Pipeline
- The top-level component used to define a CI/CD process.
- Within a pipeline, we can define **stages** and **jobs**.

### Jobs
- Associated with stages.
- Define the actual steps to be executed (such as commands to compile code).

## Terminology Continued

### Stages
- Define the chronological order of jobs.

### Runners
- Open-source application that executes the instructions defined within jobs.
- Can be installed on your local machine, a cloud server, or on-prem.
- Shared runners are hosted by GitLab.
