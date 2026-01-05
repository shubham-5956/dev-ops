pipeline {
    agent any
    
    environment{
        FRONTEND_IMAGE="dev-ops-frontend:jenkins"
        BACKEND_IMAGE="dev-ops-backend:jenkins"
    }

    stages {
        stage('Checkout Code'){
            steps{
                git url: 'https://github.com/shubham-5956/dev-ops.git',
                branch: 'main'
            }
        }

        stage('Build Docker Images'){
            steps{
                sh '''
                    echo "Building backend images ..."
                    docker build -t $BACKEND_IMAGE ./backend

                    echo "Building frontend images ..."
                    docker build -t $FRONTEND_IMAGE ./frontend 
                '''
            }
        }

        stage('Run with Docker Compose'){
            steps{
                sh ''' 
                     echo "Stopping existing containers if any ..."
                    docker compose down || true

                    echo "Starting Dev-ops project with Docker Compose ..."
                    docker compose up -d --build

                    echo "Showing running containers..."
                    docker ps

                    echo "====== Backend Logs ======"
                    docker logs backend || true

                    echo "====== Frontend Logs ======"
                    docker logs frontend || true
                '''
            }
        }
    } 
    post {
        always {
            echo "Pipeline execution finished"
        }
    }
}