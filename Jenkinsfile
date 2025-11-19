pipeline {
    agent any

    environment {
        // Customize these variables as needed
        NODE_VERSION = '18'
        WORKING_DIR = 'backend'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                dir("${WORKING_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            steps {
                echo 'Running lint checks...'
                dir("${WORKING_DIR}") {
                    sh 'npm run lint'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                dir("${WORKING_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                dir("${WORKING_DIR}") {
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying application...'
                // Add your deployment commands here
                // Examples:
                // - sh 'npm run deploy'
                // - sh 'docker build -t myapp:latest .'
                // - sh 'kubectl apply -f k8s/'
                echo 'Deployment completed successfully!'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished - cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
            // Add success notifications here
            // Examples:
            // - emailext(...)
            // - slackSend(...)
        }
        failure {
            echo 'Pipeline failed!'
            // Add failure notifications here
            // Examples:
            // - emailext(...)
            // - slackSend(...)
        }
    }
}