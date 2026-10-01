
pipeline {
    agent any

    environment {
        PROJECT_NAME = 'devops-test'
        WEBSITE_URL = 'https://tzuong.github.io/duong_ktdevop/'
    }

    stages {
        stage('Notify Started') {
            steps {
                withCredentials([
                    string(credentialsId: 'telegram-token', variable: 'TELEGRAM_TOKEN'),
                    string(credentialsId: 'telegram-chat-id', variable: 'TELEGRAM_CHAT_ID')
                ]) {
                    sh '''
                        curl -sS -X POST \
                          "https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage" \
                          --data-urlencode "chat_id=${TELEGRAM_CHAT_ID}" \
                          --data-urlencode "text=🚀 DEPLOY STARTED
Project: ${PROJECT_NAME}
Branch: main"
                    '''
                }
            }
        }

        stage('Checkout') {
            steps {
                echo '=== CHECKOUT SOURCE ==='
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '=== INSTALL DEPENDENCIES ==='
                echo 'Static HTML/CSS/JS - no external dependencies required.'
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
            }
        }
    }

    post {
        success {
            withCredentials([
                string(credentialsId: 'telegram-token', variable: 'TELEGRAM_TOKEN'),
                string(credentialsId: 'telegram-chat-id', variable: 'TELEGRAM_CHAT_ID')
            ]) {
                sh '''
                    curl -sS -X POST \
                      "https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage" \
                      --data-urlencode "chat_id=${TELEGRAM_CHAT_ID}" \
                      --data-urlencode "text=✅ DEPLOY SUCCESS
Project: ${PROJECT_NAME}
Branch: main
URL: ${WEBSITE_URL}"
                '''
            }
            echo 'PIPELINE SUCCESS'
        }

        failure {
            withCredentials([
                string(credentialsId: 'telegram-token', variable: 'TELEGRAM_TOKEN'),
                string(credentialsId: 'telegram-chat-id', variable: 'TELEGRAM_CHAT_ID')
            ]) {
                sh '''
                    curl -sS -X POST \
                      "https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage" \
                      --data-urlencode "chat_id=${TELEGRAM_CHAT_ID}" \
                      --data-urlencode "text=❌ DEPLOY FAILED
Project: ${PROJECT_NAME}
Branch: main
Please check Jenkins."
                '''
            }
            echo 'PIPELINE FAILED'
        }
    }
}