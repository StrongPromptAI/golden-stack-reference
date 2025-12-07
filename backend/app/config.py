from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Golden Stack API"

    postgres_host: str = "localhost"
    postgres_port: int = 54322
    postgres_db: str = "postgres"
    postgres_user: str = "postgres"
    postgres_password: str = "postgres"
    database_url: str | None = None

    frontend_url: str | None = None
    environment: str = "development"

    class Config:
        env_file = ".env"


settings = Settings()
