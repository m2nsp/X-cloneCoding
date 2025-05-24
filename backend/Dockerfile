FROM openjdk:17
# 빌드된 .jar 파일을 컨테이너에 app.jar로 복사
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]