# Build Stage - Use Maven Alpine image (Maven pre-installed)
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build

WORKDIR /build

# Copy project files
COPY . .

# Build the project with Maven
RUN mvn clean package -DskipTests

# Runtime Stage
FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copy built JAR from build stage
COPY --from=build /build/target/portfolio-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 9090

CMD [ "java", "-jar", "app.jar" ]