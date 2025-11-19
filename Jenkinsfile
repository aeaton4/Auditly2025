pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }
        stage('Lint Backend') {
            steps {
                dir('backend') {
                    script {
                        if (fileExists('package.json')) {
                            def pkg = readJSON file: 'package.json'
                            if (pkg.scripts && pkg.scripts.lint) {
                                sh 'npm run lint'
                            } else {
                                echo 'No lint script in backend/package.json'
                            }
                        }
                    }
                }
            }
        }
        stage('Lint Frontend') {
            steps {
                dir('frontend') {
                    script {
                        if (fileExists('package.json')) {
                            def pkg = readJSON file: 'package.json'
                            if (pkg.scripts && pkg.scripts.lint) {
                                sh 'npm run lint'
                            } else {
                                echo 'No lint script in frontend/package.json'
                            }
                        }
                    }
                }
            }
        }
        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
        stage('Test Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }
        stage('Archive Test Results') {
            steps {
                // Must configure your test runner to emit junit.xml in frontend/backend
                junit 'frontend/**/junit.xml'
                junit 'backend/**/junit.xml'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}