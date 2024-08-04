#### Run the development container:

```shellscript
docker compose -f docker-compose-dev.yml up --watch
```

Server run on: http://localhost:5000

#### Clear everything compose created

```shellscript
docker-compose down --rmi all -v --remove-orphans
```

- `--rmi all` удаляет все образы, связанные с контейнерами вашего приложения.

- `-v` удаляет названные объемы, определенные в разделе volumes вашего docker-compose.yml, а также анонимные объемы, прикрепленные к контейнерам.

- `--remove-orphans` удаляет контейнеры, которые не определены в вашем файле docker-compose.yml, но были созданы в процессе выполнения других команд.
