pipeline{
    agent any
    tools{
       nodejs('Nodejs')
    }
    stages{

        stage('build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('test'){
            steps{
                sh 'npm run test'
            }
        }
        stage('check test coverage'){
            steps{
                sh 'npm test -- --coverage'
            }
        }
     
     }
    post{
         failure{
                mail to:'sowmya.t@everest.engineering',
                subject: "failed a pipeline",
                body: "In this build there is an error please check it once"
         }
    }
}