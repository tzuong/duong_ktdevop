pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo '=== CHECKOUT SOURCE ==='
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '=== INSTALL DEPENDENCIES ==='
                echo 'Static HTML/CSS/JS project - no external dependencies required.'
            }
        }

        stage('Build') {
            steps {
                echo '=== BUILD PROJECT ==='

                sh '''
                    rm -rf dist
                    mkdir -p dist

                    cp index.html dist/
                    cp style.css dist/
                    cp script.js dist/

                    echo "Build completed successfully."
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo '=== DEPLOY PROJECT ==='

                sh '''
                    rm -rf deploy
                    mkdir -p deploy

                    cp -r dist/* deploy/

                    echo "Deploy completed successfully."
                '''

                echo '=== DEPLOY SUCCESS ==='
            }
        }
    }

    post {
        success {
            echo '================================'
            echo 'PIPELINE SUCCESS'
            echo '================================'
        }

        failure {
            echo '================================'
            echo 'PIPELINE FAILED'
            echo '================================'
        }
    }
}